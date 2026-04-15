import React, { useState, useRef, useEffect } from 'react'
import MonacoEditor, { useMonaco } from '@monaco-editor/react'
import type { editor } from 'monaco-editor'
import { transform } from 'sucrase'
import CodeBlock from './CodeBlock'
import { configureMonacoWithDesignerTypings } from '../utils/designerTypings'
import ClipboardIcon from './icons/ClipboardIcon'
import ClearIcon from './icons/ClearIcon'

// Custom theme definition to match PrismJS tomorrow theme
const MONACO_THEME: editor.IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'comment', foreground: '969896' },
    { token: 'string', foreground: 'b5bd68' },
    { token: 'number', foreground: 'de935f' },
    { token: 'keyword', foreground: 'b294bb' },
    { token: 'type', foreground: '81a2be' },
    { token: 'variable', foreground: 'cc6666' },
    { token: 'function', foreground: '81a2be' },
    { token: 'operator', foreground: '8abeb7' },
  ],
  colors: {
    'editor.background': '#181818',
    'editor.foreground': '#c5c8c6',
    'editor.lineHighlightBackground': '#282a2e',
    'editor.selectionBackground': '#373b41',
    'editorCursor.foreground': '#c5c8c6',
    'editorWhitespace.foreground': '#969896',
  },
}

const defaultCode = `// Explore the Webflow Designer API
// Try typing "webflow." to see all available methods.

// Get style information of selected element
const selectedElement = await webflow.getSelectedElement();
const elementStyles = await selectedElement.getStyles();
const primaryStyle = elementStyles?.[0];
const styleProperties = await primaryStyle.getProperties();
console.log(styleProperties);
`

const Playground: React.FC = () => {
  const [code, setCode] = useState(defaultCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const [language, setLanguage] = useState<'javascript' | 'typescript'>(
    'javascript',
  )
  const [prompt, setPrompt] = useState('')

  const sendPromptToAgent = async (text: string) => {
    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error('VITE_ANTHROPIC_API_KEY is not set')
      return
    }
    const currentCode = codeRef.current

    const userMessage = `Here is the current code in the playground editor:

\`\`\`javascript
${currentCode}
\`\`\`

Make the following changes to this code: ${text}`

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 4096,
          system:
            'You are a coding assistant that helps users write and modify Webflow Designer API code. When asked to make changes to code, return only the modified code without any explanation or markdown code fences.',
          messages: [{ role: 'user', content: userMessage }],
        }),
      })

      const data = await response.json()
      const result = (data.content?.[0]?.text ?? '') as string
      if (result) {
        setCode(result)
        codeRef.current = result
        editorRef.current?.setValue(result)
      }
    } catch (err) {
      console.error(err)
    }
  }
  const monaco = useMonaco()
  const editorRef = useRef<any>(null)
  const codeRef = useRef(code)
  const isMountedRef = useRef(true)

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false
      // Dispose of the editor if it exists
      if (editorRef.current) {
        try {
          editorRef.current.dispose()
        } catch (error) {
          // Silently handle disposal errors
          if (
            error &&
            typeof error === 'object' &&
            'type' in error &&
            (error as any).type === 'cancelation'
          ) {
            return
          }
          if (
            error &&
            typeof error === 'object' &&
            'name' in error &&
            (error as any).name === 'Canceled'
          ) {
            return
          }
          console.warn('Monaco editor disposal error:', error)
        }
      }
    }
  }, [])

  // Configure Monaco editor settings
  useEffect(() => {
    if (monaco && isMountedRef.current) {
      try {
        // Relax TypeScript diagnostics
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: false,
          noSyntaxValidation: false,
          diagnosticCodesToIgnore: [],
        })
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          allowJs: true,
          checkJs: false,
          strict: false,
          noUnusedLocals: false,
          noUnusedParameters: false,
          suppressImplicitAnyIndexErrors: true,
          target: monaco.languages.typescript.ScriptTarget.ESNext,
          module: monaco.languages.typescript.ModuleKind.ESNext,
        })
        // Relax JavaScript diagnostics as well
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
          noSemanticValidation: false,
          noSyntaxValidation: false,
          diagnosticCodesToIgnore: [],
        })
        monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
          allowJs: true,
          checkJs: false,
          strict: false,
          noUnusedLocals: false,
          noUnusedParameters: false,
          suppressImplicitAnyIndexErrors: true,
          target: monaco.languages.typescript.ScriptTarget.ESNext,
          module: monaco.languages.typescript.ModuleKind.ESNext,
        })

        // Load and configure designer extension typings
        if (isMountedRef.current) {
          configureMonacoWithDesignerTypings(monaco)
        }
      } catch (error) {
        // Silently handle cancellation errors
        if (
          error &&
          typeof error === 'object' &&
          'type' in error &&
          (error as any).type === 'cancelation'
        ) {
          return
        }
        if (
          error &&
          typeof error === 'object' &&
          'name' in error &&
          (error as any).name === 'Canceled'
        ) {
          return
        }
        console.warn('Monaco configuration error:', error)
      }
    }
  }, [monaco])

  // Safe console implementation
  const safeConsole = {
    log: (...args: any[]) =>
      setOutput(
        (prev) =>
          prev +
          args
            .map((arg) =>
              arg instanceof Error
                ? `${arg.name}: ${arg.message}\n${arg.stack}`
                : typeof arg === 'object' && arg !== null
                  ? JSON.stringify(arg, null, 2)
                  : String(arg),
            )
            .join(' ') +
          '\n',
      ),
    error: (...args: any[]) =>
      setOutput(
        (prev) =>
          prev +
          '[Error] ' +
          args
            .map((arg) =>
              arg instanceof Error
                ? `${arg.name}: ${arg.message}\n${arg.stack}`
                : typeof arg === 'object' && arg !== null
                  ? JSON.stringify(arg, null, 2)
                  : String(arg),
            )
            .join(' ') +
          '\n',
      ),
    warn: (...args: any[]) =>
      setOutput(
        (prev) =>
          prev +
          '[Warn] ' +
          args
            .map((arg) =>
              arg instanceof Error
                ? `${arg.name}: ${arg.message}\n${arg.stack}`
                : typeof arg === 'object' && arg !== null
                  ? JSON.stringify(arg, null, 2)
                  : String(arg),
            )
            .join(' ') +
          '\n',
      ),
    info: (...args: any[]) =>
      setOutput(
        (prev) =>
          prev +
          '[Info] ' +
          args
            .map((arg) =>
              arg instanceof Error
                ? `${arg.name}: ${arg.message}\n${arg.stack}`
                : typeof arg === 'object' && arg !== null
                  ? JSON.stringify(arg, null, 2)
                  : String(arg),
            )
            .join(' ') +
          '\n',
      ),
  }

  // Run user code safely
  const runCode = async (customCode?: string) => {
    setIsRunning(true)
    setOutput('Running...\n')
    const codeToRun = customCode ?? codeRef.current
    try {
      // Clear output and start fresh
      setOutput('')
      const jsCode = transform(codeToRun, {
        transforms: ['typescript', 'imports'],
        jsxPragma: 'React.createElement',
        jsxFragmentPragma: 'React.Fragment',
      }).code
      // Wrap code in async function for await support
      const asyncCode = `(async (webflow, console) => {\n${jsCode}\n})`
      // eslint-disable-next-line no-new-func
      const fn = eval(asyncCode)
      await fn((window as any).webflow, safeConsole)
    } catch (err) {
      safeConsole.error(err)
    } finally {
      setIsRunning(false)
    }
  }

  const editorOptions = {
    minimap: { enabled: false },
    fontSize: 10.5,
    lineHeight: 15,
    padding: { top: 12, bottom: 12, left: 12, right: 12 },
    scrollBeyondLastLine: false,
    theme: 'prism-tomorrow',
    automaticLayout: true,
    fontFamily:
      'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
    renderLineHighlight: 'none' as const,
    contextmenu: false,
    folding: false,
    lineNumbers: 'off' as const,
    glyphMargin: false,
    scrollbar: {
      vertical: 'hidden' as const,
      horizontal: 'hidden' as const,
    },
  }

  return (
    <div
      style={{
        padding: 0,
        maxWidth: 700,
        margin: '0 auto',
        background: '#1e1e1e',
        color: 'rgb(255 255 255 / 0.9)',
        borderRadius: 4,
      }}
    >
      <div
        style={{
          background: '#181818',
          borderRadius: 4,
          marginBottom: 8,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px',
            borderBottom: '1px solid #282a2e',
            background: '#1e1e1e',
          }}
        >
          <div style={{ fontSize: 11, color: 'rgb(255 255 255 / 0.5)' }}>
            Playground
          </div>
          <div
            style={{
              display: 'flex',
              gap: 4,
              background: '#282a2e',
              borderRadius: 4,
              padding: 2,
            }}
          >
            <button
              onClick={() => setLanguage('javascript')}
              style={{
                background:
                  language === 'javascript' ? '#3c3f45' : 'transparent',
                border: 'none',
                color:
                  language === 'javascript'
                    ? '#8ac2ff'
                    : 'rgb(255 255 255 / 0.6)',
                padding: '4px 10px',
                fontSize: 10,
                fontWeight: 500,
                borderRadius: 3,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              JS
            </button>
            <button
              onClick={() => setLanguage('typescript')}
              style={{
                background:
                  language === 'typescript' ? '#3c3f45' : 'transparent',
                border: 'none',
                color:
                  language === 'typescript'
                    ? '#8ac2ff'
                    : 'rgb(255 255 255 / 0.6)',
                padding: '4px 10px',
                fontSize: 10,
                fontWeight: 500,
                borderRadius: 3,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              TS
            </button>
          </div>
        </div>
        <MonacoEditor
          height="200px"
          defaultLanguage={language}
          value={code}
          path={`webflow-playground.${language === 'typescript' ? 'ts' : 'js'}`}
          onChange={(value) => {
            setCode(value || '')
            codeRef.current = value || ''
          }}
          options={editorOptions}
          theme="prism-tomorrow"
          loading={
            <div
              style={{
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#181818',
                color: '#8ac2ff',
                fontSize: 14,
              }}
            >
              Loading editor...
            </div>
          }
          beforeMount={(monaco) => {
            try {
              monaco.editor.defineTheme('prism-tomorrow', MONACO_THEME)
              monaco.editor.setTheme('prism-tomorrow')
            } catch (error) {
              // Silently handle cancellation errors
              if (
                error &&
                typeof error === 'object' &&
                'type' in error &&
                (error as any).type === 'cancelation'
              ) {
                return
              }
              if (
                error &&
                typeof error === 'object' &&
                'name' in error &&
                (error as any).name === 'Canceled'
              ) {
                return
              }
              console.warn('Monaco beforeMount error:', error)
            }
          }}
          onMount={(editor, monaco) => {
            try {
              editorRef.current = editor
              if (monaco && isMountedRef.current) {
                editor.addCommand(
                  monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
                  () => runCode(codeRef.current),
                )
              }
            } catch (error) {
              // Silently handle cancellation errors
              if (
                error &&
                typeof error === 'object' &&
                'type' in error &&
                (error as any).type === 'cancelation'
              ) {
                return
              }
              if (
                error &&
                typeof error === 'object' &&
                'name' in error &&
                (error as any).name === 'Canceled'
              ) {
                return
              }
              console.warn('Monaco onMount error:', error)
            }
          }}
        />
      </div>
      <div style={{ marginBottom: 8, display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => runCode(codeRef.current)}
          disabled={isRunning}
          className="button cc-primary"
        >
          {isRunning ? 'Running...' : 'Run'}
        </button>
      </div>
      <div
        style={{
          background: '#181818',
          borderRadius: 4,
          marginBottom: 8,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 12px',
            borderBottom: '1px solid #282a2e',
            background: '#1e1e1e',
          }}
        >
          <label
            htmlFor="agent-prompt"
            style={{ fontSize: 11, color: 'rgb(255 255 255 / 0.5)' }}
          >
            Prompt
          </label>
        </div>
        <input
          id="agent-prompt"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const value = e.currentTarget.value.trim()
              if (value) {
                sendPromptToAgent(value)
                setPrompt('')
              }
            }
          }}
          placeholder="Type a prompt and press Enter"
          style={{
            width: '100%',
            boxSizing: 'border-box',
            background: '#181818',
            border: 'none',
            color: 'rgb(255 255 255 / 0.9)',
            fontSize: 11,
            padding: '10px 12px',
            outline: 'none',
            fontFamily:
              'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
          }}
        />
      </div>
      <div
        style={{
          opacity: output ? 1 : 0,
          height: output ? 'auto' : 0,
          overflow: 'hidden',
          transition: 'opacity 0.2s ease-in-out',
          background: '#181818',
          borderRadius: 4,
          marginBottom: 8,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px',
            borderBottom: '1px solid #282a2e',
            background: '#1e1e1e',
          }}
        >
          <div style={{ fontSize: 11, color: 'rgb(255 255 255 / 0.5)' }}>
            Output
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(output)
                } catch {
                  const ta = document.createElement('textarea')
                  ta.value = output
                  ta.style.position = 'fixed'
                  ta.style.left = '-9999px'
                  document.body.appendChild(ta)
                  ta.select()
                  document.execCommand('copy')
                  document.body.removeChild(ta)
                }
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 2000)
              }}
              title="Copy to clipboard"
              style={{
                background: 'none',
                border: 'none',
                color: 'rgb(255 255 255 / 0.6)',
                cursor: 'pointer',
                padding: 4,
              }}
            >
              {isCopied ? 'Copied!' : <ClipboardIcon />}
            </button>
            <button
              onClick={() => setOutput('')}
              title="Clear output"
              style={{
                background: 'none',
                border: 'none',
                color: 'rgb(255 255 255 / 0.6)',
                cursor: 'pointer',
                padding: 4,
              }}
            >
              <ClearIcon />
            </button>
          </div>
        </div>
        <div style={{ padding: 12 }}>
          <CodeBlock code={output || ' '} language="javascript" />
        </div>
      </div>
    </div>
  )
}

export default Playground

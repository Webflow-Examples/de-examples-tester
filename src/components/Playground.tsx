import React, { useState, useRef, useEffect } from 'react'
import MonacoEditor, { useMonaco } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import CodeBlock from './CodeBlock'
import { configureMonacoWithDesignerTypings } from '../utils/designerTypings'

// Extend Window interface to include Monaco
declare global {
  interface Window {
    monaco: typeof monaco
  }
}

// Custom theme definition to match PrismJS tomorrow theme
const MONACO_THEME: monaco.editor.IStandaloneThemeData = {
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
} as const

const defaultCode = `// Explore the Webflow Designer API
// Try typing "webflow." to see all available methods.

// Get site information
const siteInfo = await webflow.getSiteInfo();
console.log('Site ID:', siteInfo.siteId);
console.log('Site name:', siteInfo.siteName);`

const Playground: React.FC = () => {
  const [code, setCode] = useState(defaultCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const monaco = useMonaco()
  const editorRef = useRef<any>(null)
  const codeRef = useRef(code)

  // Configure Monaco editor settings
  useEffect(() => {
    if (monaco) {
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
      configureMonacoWithDesignerTypings(monaco)
    }
  }, [monaco])

  useEffect(() => {
    // Define the custom theme when Monaco is loaded
    if (window.monaco) {
      window.monaco.editor.defineTheme('prism-tomorrow', MONACO_THEME)
    }
  }, [])

  // Safe console implementation
  const safeConsole = {
    log: (...args: any[]) =>
      setOutput(
        (prev) =>
          prev +
          args
            .map((arg) =>
              typeof arg === 'object' && arg !== null
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
              typeof arg === 'object' && arg !== null
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
              typeof arg === 'object' && arg !== null
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
              typeof arg === 'object' && arg !== null
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
      // Wrap code in async function for await support
      const asyncCode = `(async (webflow, console) => {\n${codeToRun}\n})`
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
        <MonacoEditor
          height="200px"
          defaultLanguage="typescript"
          value={code}
          path="webflow-playground.js"
          onChange={(value) => {
            setCode(value || '')
            codeRef.current = value || ''
          }}
          options={editorOptions}
          theme="prism-tomorrow"
          beforeMount={(monaco) => {
            monaco.editor.defineTheme('prism-tomorrow', MONACO_THEME)
            monaco.editor.setTheme('prism-tomorrow')
          }}
          onMount={(editor, monaco) => {
            editorRef.current = editor
            if (monaco) {
              editor.addCommand(
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
                () => runCode(codeRef.current),
              )
            }
          }}
        />
      </div>
      <div style={{ marginBottom: 8, position: 'relative' }}>
        <button
          onClick={() => runCode(codeRef.current)}
          disabled={isRunning}
          className="button cc-primary"
          style={{
            position: 'absolute',
            right: 16,
            bottom: 16,
          }}
        >
          {isRunning ? 'Running...' : 'Run'}
        </button>
      </div>
      <div
        style={{
          opacity: output ? 1 : 0,
          height: output ? 'auto' : 0,
          overflow: 'hidden',
          transition: 'opacity 0.2s ease-in-out',
          padding: '0 16px 16px',
        }}
      >
        <label
          style={{
            fontWeight: 500,
            fontSize: 13,
            color: 'rgb(255 255 255 / 0.6)',
            display: 'block',
            marginBottom: 4,
          }}
        >
          Output
        </label>
        <CodeBlock
          code={output || ' '}
          language="javascript"
          onClear={output ? () => setOutput('') : undefined}
        />
      </div>
    </div>
  )
}

export default Playground

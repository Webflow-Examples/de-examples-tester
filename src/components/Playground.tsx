import React, { useState, useRef, useEffect } from 'react'
import MonacoEditor, { useMonaco } from '@monaco-editor/react'
import CodeBlock from './CodeBlock'
import { configureMonacoWithDesignerTypings } from '../utils/designerTypings'

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

  // Inject Webflow Designer Extension typings for intellisense
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

  return (
    <div style={{ padding: 16, maxWidth: 700, margin: '0 auto' }}>
      <div style={{ marginBottom: 8, position: 'relative' }}>
        <MonacoEditor
          height="240px"
          defaultLanguage="javascript"
          value={code}
          path="webflow-playground.js"
          onChange={(value) => {
            setCode(value || '')
            codeRef.current = value || ''
          }}
          theme="vs-dark"
          options={{
            fontSize: 12,
            minimap: { enabled: false },
            fontFamily: 'monospace',
            lineNumbers: 'on',
            lineNumbersMinChars: 3,
            glyphMargin: false,
            folding: false,
            lineDecorationsWidth: 8,
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            padding: { top: 8, bottom: 40 }, // Add bottom padding to prevent overlap
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
        <button
          onClick={() => runCode(codeRef.current)}
          disabled={isRunning}
          style={{
            position: 'absolute',
            right: 16,
            bottom: 16,
            padding: '6px 16px',
            fontWeight: 600,
            fontSize: 12,
            zIndex: 10,
            background: '#006acc',
            color: '#fff',
            border: '1px solid #004c99',
            borderRadius: 3,
            boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            opacity: isRunning ? 0.7 : 1,
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            if (!isRunning) {
              e.currentTarget.style.background = '#0078d4'
            }
          }}
          onMouseLeave={(e) => {
            if (!isRunning) {
              e.currentTarget.style.background = '#006acc'
            }
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
        }}
      >
        <label style={{ fontWeight: 600 }}>Output</label>
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

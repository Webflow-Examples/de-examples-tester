import React, { useState, useRef, useEffect } from 'react'
import MonacoEditor, { useMonaco } from '@monaco-editor/react'
import designerExtensionTypings from '@webflow/designer-extension-typings'

const defaultCode = `// Example: Get the current page name\nconst page = await webflow.getCurrentPage();\nconst name = await page.getName();\nconsole.log('Current page name:', name);`

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
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        designerExtensionTypings,
        'ts:filename/webflow-designer-extension.d.ts',
      )
      monaco.languages.typescript.javascriptDefaults.addExtraLib(
        designerExtensionTypings,
        'ts:filename/webflow-designer-extension.d.ts',
      )
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
    setOutput('')
    setIsRunning(true)
    const codeToRun = customCode ?? codeRef.current
    try {
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
      <p style={{ color: '#757575', fontSize: '0.98em', marginBottom: 16 }}>
        Use this playground to experiment with Designer API commands in real
        time. Enter your requests and see the results instantly.
      </p>
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
            fontSize: 14,
            minimap: { enabled: false },
            fontFamily: 'monospace',
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            wordWrap: 'on',
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
            right: 12,
            bottom: 12,
            padding: '8px 20px',
            fontWeight: 600,
            fontSize: 14,
            zIndex: 2,
            background: '#006acc',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            cursor: 'pointer',
            opacity: isRunning ? 0.7 : 1,
            transition: 'opacity 0.2s',
          }}
        >
          {isRunning ? 'Running...' : 'Run'}
        </button>
      </div>
      <div>
        <label style={{ fontWeight: 600 }}>Output:</label>
        <pre
          style={{
            background: '#222',
            color: '#8ac2ff',
            padding: 12,
            minHeight: 80,
            borderRadius: 4,
            marginTop: 4,
            fontSize: 13,
            overflowX: 'auto',
            position: 'relative',
          }}
        >
          <button
            onClick={() => setOutput('')}
            style={{
              position: 'absolute',
              right: 12,
              top: 12,
              padding: '4px 12px',
              fontSize: 12,
              zIndex: 2,
              background: '#333',
              color: '#8ac2ff',
              border: 'none',
              borderRadius: 3,
              cursor: 'pointer',
            }}
          >
            Clear Output
          </button>
          {output}
        </pre>
      </div>
    </div>
  )
}

export default Playground

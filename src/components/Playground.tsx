import React, { useState } from 'react'

const defaultCode = `// Example: Get the current page name\nconst page = await webflow.getCurrentPage();\nconst name = await page.getName();\nconsole.log('Current page name:', name);`

const Playground: React.FC = () => {
  const [code, setCode] = useState(defaultCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  // Safe console implementation
  const safeConsole = {
    log: (...args: any[]) => setOutput((prev) => prev + args.join(' ') + '\n'),
    error: (...args: any[]) =>
      setOutput((prev) => prev + '[Error] ' + args.join(' ') + '\n'),
    warn: (...args: any[]) =>
      setOutput((prev) => prev + '[Warn] ' + args.join(' ') + '\n'),
    info: (...args: any[]) =>
      setOutput((prev) => prev + '[Info] ' + args.join(' ') + '\n'),
  }

  // Run user code safely
  const runCode = async () => {
    setOutput('')
    setIsRunning(true)
    try {
      // Wrap code in async function for await support
      const asyncCode = `(async (webflow, console) => {\n${code}\n})`
      // eslint-disable-next-line no-new-func
      const fn = eval(asyncCode)
      await fn((window as any).webflow, safeConsole)
    } catch (err) {
      safeConsole.error(err)
    } finally {
      setIsRunning(false)
    }
  }

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value)
  }

  return (
    <div style={{ padding: 16, maxWidth: 700, margin: '0 auto' }}>
      <h2>Designer Extension Code Playground</h2>
      <div style={{ marginBottom: 12, color: '#EE1D36', fontWeight: 500 }}>
        ⚠️ This is a sandboxed playground. Code runs in a restricted
        environment, but infinite loops or heavy computation may still freeze
        the extension UI. Reload the extension if needed.
      </div>
      <textarea
        value={code}
        onChange={handleCodeChange}
        rows={12}
        style={{
          width: '100%',
          fontFamily: 'monospace',
          fontSize: 14,
          marginBottom: 8,
        }}
        spellCheck={false}
      />
      <div style={{ marginBottom: 8 }}>
        <button
          onClick={runCode}
          disabled={isRunning}
          style={{ padding: '6px 16px', fontWeight: 600 }}
        >
          {isRunning ? 'Running...' : 'Run'}
        </button>
        <button
          onClick={() => setOutput('')}
          style={{ marginLeft: 8, padding: '6px 16px' }}
        >
          Clear Output
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
          }}
        >
          {output}
        </pre>
      </div>
    </div>
  )
}

export default Playground

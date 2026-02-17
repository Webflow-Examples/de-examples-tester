import React, { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

interface CodeBlockProps {
  code: string
  language: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Only highlight if we have actual content and it's not just "Running..."
    if (code && code.trim() !== 'Running...') {
      const timeoutId = setTimeout(() => {
        if (codeRef.current) {
          Prism.highlightElement(codeRef.current)
        }
      }, 50) // Small delay to prevent rapid re-highlighting

      return () => clearTimeout(timeoutId)
    }
  }, [code])

  return (
    <div style={{ position: 'relative' }}>
      <pre
        className={`language-${language}`}
        style={{
          background: '#181818',
          color: '#8ac2ff',
          padding: 12,
          borderRadius: 4,
          marginTop: 4,
          fontSize: 13,
          overflowX: 'auto',
          minHeight: 40,
        }}
      >
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock

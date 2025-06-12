import React, { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

interface CodeBlockProps {
  code: string
  language: string
  onClear?: () => void
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, onClear }) => {
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
          paddingBottom: onClear ? 40 : 12,
        }}
      >
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
      {onClear && (
        <button
          onClick={onClear}
          style={{
            position: 'absolute',
            right: 8,
            bottom: 8,
            padding: '4px 10px',
            fontSize: 11,
            zIndex: 10,
            background: '#333',
            color: '#8ac2ff',
            border: '1px solid #444',
            borderRadius: 3,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#444'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#333'
            e.currentTarget.style.color = '#8ac2ff'
          }}
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default CodeBlock

import React, { useState } from 'react'
import type { BundleResult } from '../utils/bundleGenerator'
import { createBundleZip, downloadBlob } from '../utils/bundleGenerator'

interface BundlePreviewModalProps {
  bundle: BundleResult
  appName: string
  onAppNameChange: (name: string) => void
  onClose: () => void
}

const BundlePreviewModal: React.FC<BundlePreviewModalProps> = ({
  bundle,
  appName,
  onAppNameChange,
  onClose,
}) => {
  const [isDownloading, setIsDownloading] = useState(false)

  const previewHTML = bundle.previewHTML

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const blob = await createBundleZip(bundle)
      downloadBlob(blob, 'bundle.zip')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        style={{
          background: '#1e1e1e',
          borderRadius: 8,
          border: '1px solid rgba(255, 255, 255, 0.13)',
          width: 340,
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.13)',
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: '#f5f5f5' }}>
            Bundle extension
          </span>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#a3a3a3',
              cursor: 'pointer',
              fontSize: 18,
              lineHeight: 1,
              padding: '0 4px',
            }}
          >
            &times;
          </button>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
          {/* App name input */}
          <div style={{ padding: '12px 16px 0' }}>
            <label
              style={{
                display: 'block',
                fontSize: 11,
                color: '#a3a3a3',
                marginBottom: 4,
              }}
            >
              App name
            </label>
            <input
              type="text"
              value={appName}
              onChange={(e) => onAppNameChange(e.target.value)}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                background: '#2e2e2e',
                border: '1px solid rgba(255, 255, 255, 0.13)',
                borderRadius: 4,
                color: '#f5f5f5',
                fontSize: 12,
                padding: '6px 8px',
                outline: 'none',
                fontFamily: "'Inter', sans-serif",
              }}
            />
          </div>

          {/* Functions list */}
          <div style={{ padding: '12px 16px 0' }}>
            <div
              style={{ fontSize: 11, color: '#a3a3a3', marginBottom: 4 }}
            >
              {bundle.functions.length} function{bundle.functions.length !== 1 ? 's' : ''} detected
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
              }}
            >
              {bundle.functions.map((fn) => (
                <span
                  key={fn.name}
                  style={{
                    fontSize: 10.5,
                    background: '#383838',
                    color: '#bdbdbd',
                    padding: '2px 8px',
                    borderRadius: 3,
                    fontFamily:
                      'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, monospace',
                  }}
                >
                  {fn.name}
                </span>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div style={{ padding: '12px 16px' }}>
            <div
              style={{ fontSize: 11, color: '#a3a3a3', marginBottom: 4 }}
            >
              Preview
            </div>
            <div
              style={{
                border: '1px solid rgba(255, 255, 255, 0.13)',
                borderRadius: 4,
                overflow: 'hidden',
                background: '#1e1e1e',
              }}
            >
              <iframe
                title="Extension preview"
                srcDoc={previewHTML}
                sandbox="allow-scripts"
                style={{
                  width: '100%',
                  height: 200,
                  border: 'none',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>

        {/* Download button — pinned to bottom */}
        <div
          style={{
            padding: '12px 16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.13)',
            flexShrink: 0,
          }}
        >
          <button
            onClick={handleDownload}
            disabled={isDownloading || bundle.functions.length === 0}
            className="button cc-primary"
            style={{
              width: '100%',
              textAlign: 'center',
              marginTop: 0,
            }}
          >
            {isDownloading ? 'Generating...' : 'Download bundle.zip'}
          </button>
          {bundle.functions.length === 0 && (
            <div
              style={{
                fontSize: 10.5,
                color: '#ff8a8a',
                marginTop: 4,
                textAlign: 'center',
              }}
            >
              No top-level functions found. Declare functions like: async function myAction() {'{ ... }'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BundlePreviewModal

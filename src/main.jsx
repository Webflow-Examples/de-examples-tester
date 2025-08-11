import './brand.css'
import './App.css'

import React, { useState, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { loader } from '@monaco-editor/react'

import Playground from './components/Playground'
import TabNavigation from './components/TabNavigation'
import APIExplorer from './components/APIExplorer'

const TABS = [
  { key: 'api', label: 'API Explorer' },
  { key: 'code', label: 'Code Playground' },
]

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // disable automatic refetching when window gains focus
      retry: 1, // retry failed queries once
    },
  },
})

const App = () => {
  const [activeTab, setActiveTab] = useState('api')
  const containerRef = useRef(null)

  useEffect(() => {
    // Set initial size
    webflow.setExtensionSize({ height: 425, width: 500 })
  }, [])

  // Global error handler for Monaco Editor cancellation errors
  useEffect(() => {
    // Pre-initialize Monaco to avoid first-load cancellation during StrictMode double-mount
    loader.init().catch((err) => {
      if (
        err &&
        typeof err === 'object' &&
        'type' in err &&
        err.type === 'cancelation'
      ) {
        return
      }
      if (
        err &&
        typeof err === 'object' &&
        'name' in err &&
        err.name === 'Canceled'
      ) {
        return
      }
      // eslint-disable-next-line no-console
      console.warn('Monaco loader init error:', err)
    })

    const originalErrorHandler = window.onerror
    const originalUnhandledRejectionHandler = window.onunhandledrejection

    window.onerror = (message, source, lineno, colno, error) => {
      // Silently handle Monaco cancellation errors
      if (
        error &&
        typeof error === 'object' &&
        'type' in error &&
        error.type === 'cancelation'
      ) {
        return true // Prevent default error handling
      }
      if (
        error &&
        typeof error === 'object' &&
        'name' in error &&
        error.name === 'Canceled'
      ) {
        return true
      }
      if (originalErrorHandler) {
        return originalErrorHandler(message, source, lineno, colno, error)
      }
      return false
    }

    window.onunhandledrejection = (event) => {
      // Silently handle Monaco cancellation errors
      if (
        event.reason &&
        typeof event.reason === 'object' &&
        'type' in event.reason &&
        event.reason.type === 'cancelation'
      ) {
        event.preventDefault()
        return
      }
      if (
        event.reason &&
        typeof event.reason === 'object' &&
        'name' in event.reason &&
        event.reason.name === 'Canceled'
      ) {
        event.preventDefault()
        return
      }
      if (originalUnhandledRejectionHandler) {
        originalUnhandledRejectionHandler(event)
      }
    }

    return () => {
      window.onerror = originalErrorHandler
      window.onunhandledrejection = originalUnhandledRejectionHandler
    }
  }, [])

  return (
    <div id="container" className="container" ref={containerRef}>
      <h1
        className="strong h2"
        style={{
          marginBottom: 8,
          marginTop: 0,
          fontSize: '1.2rem',
          lineHeight: 1.2,
        }}
      >
        Webflow Designer API Explorer
      </h1>
      <TabNavigation
        tabs={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === 'api' && <APIExplorer />}
      {activeTab === 'code' && <Playground />}
      <footer className="wf-footer">
        <img
          src="https://dhygzobemt712.cloudfront.net/Mark/Mark_Logo_Blue.svg"
          alt="Webflow Logo"
          className="wf-footer-logo"
        />
        <div>Designer API Playground • Built with Webflow Designer API</div>
        <div className="wf-footer-links">
          <a
            href="https://developers.webflow.com/designer/reference/designer-api/getting-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          <a
            href="https://developers.webflow.com/data/v2.0.0/docs/register-an-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create an App
          </a>
        </div>
      </footer>
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)

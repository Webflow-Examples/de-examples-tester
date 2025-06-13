import './brand.css'
import './App.css'

import React, { useState, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'

import Playground from './components/Playground'
import TabNavigation from './components/TabNavigation'
import APIExplorer from './components/APIExplorer'

const TABS = [
  { key: 'api', label: 'API Explorer' },
  { key: 'code', label: 'Code Playground' },
]

const App = () => {
  const [activeTab, setActiveTab] = useState('api')
  const containerRef = useRef(null)

  useEffect(() => {
    // Set initial size
    webflow.setExtensionSize({ height: 425, width: 500 })
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
root.render(<App />)

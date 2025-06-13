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
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

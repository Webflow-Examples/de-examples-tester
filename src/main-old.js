import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Playground from './components/Playground'
import TabNavigation from './components/TabNavigation'
import APIExplorer from './components/APIExplorer'

const TABS = [
  { key: 'api', label: 'API Explorer' },
  { key: 'code', label: 'Code Playground' },
]

const App = () => {
  const [activeTab, setActiveTab] = useState('api')

  useEffect(() => {
    webflow.setExtensionSize({ height: 425, width: 500 })
  }, [])

  return (
    <div id="container" className="container u-pt-1">
      <h1 className="strong h2" style={{ marginBottom: 0 }}>
        Webflow <br />
        Designer API Explorer
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

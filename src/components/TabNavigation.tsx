import React from 'react'

interface Tab {
  key: string
  label: string
}

interface TabNavigationProps {
  tabs: Tab[]
  activeTab: string
  setActiveTab: (tabKey: string) => void
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => (
  <div role="tablist" aria-label="Main Tabs" className="tablist">
    {tabs.map((tab) => {
      const isActive = activeTab === tab.key
      return (
        <button
          key={tab.key}
          id={`tab-${tab.key}`}
          role="tab"
          aria-selected={isActive}
          aria-controls={`tabpanel-${tab.key}`}
          tabIndex={isActive ? 0 : -1}
          data-state={isActive ? 'active' : 'inactive'}
          className="tab-btn"
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </button>
      )
    })}
  </div>
)

export default TabNavigation

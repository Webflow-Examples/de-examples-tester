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
  <div
    style={{
      display: 'flex',
      gap: 0,
      marginBottom: 20,
      marginTop: 8,
      borderBottom: '1px solid #444',
    }}
  >
    {tabs.map((tab) => (
      <button
        key={tab.key}
        onClick={() => setActiveTab(tab.key)}
        style={{
          padding: '10px 24px',
          border: 'none',
          borderBottom:
            activeTab === tab.key
              ? '3px solid #8ac2ff'
              : '3px solid transparent',
          background: 'none',
          color: activeTab === tab.key ? '#8ac2ff' : '#bdbdbd',
          fontWeight: activeTab === tab.key ? 700 : 500,
          fontSize: 16,
          cursor: 'pointer',
          outline: 'none',
          transition: 'color 0.2s, border-bottom 0.2s',
        }}
        aria-selected={activeTab === tab.key}
        tabIndex={activeTab === tab.key ? 0 : -1}
      >
        {tab.label}
      </button>
    ))}
  </div>
)

export default TabNavigation

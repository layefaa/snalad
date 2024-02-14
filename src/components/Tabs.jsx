import { useState } from 'react'

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(activeTab || 0) // Use default activeTab if provided

  const handleTabClick = (index) => {
    setSelectedTab(index)
    onTabChange && onTabChange(index) // Optionally trigger external callback
  }

  return (
    <div className="tabs-container">
      <ul className="tabs-nav mb-[2rem] flex bg-sl-primary-white   text-16">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab-item w-1/2 py-[1.2rem] text-center ${index === selectedTab ? 'bg-[#E2F5E7] font-bold text-[#97DAAA]' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tabs-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-panel ${index === selectedTab ? 'active' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs

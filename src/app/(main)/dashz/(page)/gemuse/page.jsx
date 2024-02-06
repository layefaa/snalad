'use client'
import { useState } from 'react'
import Products from '@/components/Products'
import Orders from '@/components/Orders'
import Tabs from '@/components/Tabs'

export default function Gemuse() {
  const menues = [
    { name: 'Type 1', img: '/img/obst.png', orders: 4 },
    { name: 'Type 2', img: '/img/gemuse.png', orders: 5 },
  ]
  const tabs = [
    { title: 'Produkten', content: <Products products={menues} /> },
    { title: 'Bestellungen', content: <Orders products={menues} /> },
    // ...
  ]

  const [activeTab, setActiveTab] = useState(0)
  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={(newIndex) => setActiveTab(newIndex)}
    />
  )
}

'use client'
import Products from '@/components/Products'
import Orders from '@/components/Orders'
import Tabs from '@/components/Tabs'
import { useState } from 'react'

export const dynamic = 'force-dynamic'

export default function Page({ params }) {
  const menues = [
    { name: 'Obst', img: '/img/obst.png', stat: 4, orders: 4 },
    { name: 'Gemüse', img: '/img/gemuse.png', stat: 5, orders: 5 },
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

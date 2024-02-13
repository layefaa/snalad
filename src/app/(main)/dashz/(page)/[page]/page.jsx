'use client'
import Products from '@/components/Products'
import Orders from '@/components/Orders'
import Tabs from '@/components/Tabs'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default function Page({ params }) {
  const [isLoading, setLoading] = useState(false)

  // supabase
  const [menu, setMenu] = useState([])
  const [orders, setOrders] = useState([])

  async function fetchMenu() {
    let { data: menu, error } = await supabase
      .from('menu')
      .select('*')
      .eq('type', params.page)
    if (error) {
      console.log(error)
    }
    console.log(menu)
    return menu || []
  }

  async function noOfSoldType(name) {
    let { data: menu, error } = await supabase
      .from('orders')
      .select('*')
      .eq('type', params.page)
      .eq('name', name)
    if (error) {
      console.log(error)
    }
    return menu.length
  }

  async function fetchOrders() {
    let { data: menu, error } = await supabase
      .from('orders')
      .select('*')
      .eq('type', params.page)
      .order('completed', { ascending: true })
    if (error) {
      console.log(error)
    }
    return menu || []
  }

  useEffect(() => {
    setLoading(true)
    fetchMenu()
      .then((res) => {
        let newValue = res.map((item) => ({
          ...item,
          orders: noOfSoldType(item.name),
        }))
        setMenu(newValue)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
    fetchOrders()
      .then((res) => {
        setOrders(res)
      })
      .catch((err) => console.log(err))
  }, [])

  const menues = [
    { name: 'Obst', img: '/img/obst.png', stat: 1, orders: 4 },
    { name: 'Gemüse', img: '/img/gemuse.png', stat: 1, orders: 5 },
  ]
  const tabs = [
    { title: 'Produkten', content: <Products products={menu} /> },
    { title: 'Bestellungen', content: <Orders products={orders} /> },
    // ...
  ]

  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      {isLoading ? (
        <div className={'flex min-h-dvh w-full items-center justify-center'}>
          Loading
        </div>
      ) : (
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={(newIndex) => setActiveTab(newIndex)}
        />
      )}
    </>
  )
}

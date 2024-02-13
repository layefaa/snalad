'use client'
import CountdownTimer from '@/components/CountdownTimer'
import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import { supabase } from '@/lib/supabase'
function Box({ heading, sub }) {
  return (
    <div
      className={
        'flex h-[22rem] w-[29.8rem] flex-col items-center justify-center rounded-[1.5rem] bg-sl-primary-green text-white'
      }
    >
      <p className={'text-[2.9rem] font-[900] capitalize'}>{heading}</p>
      <p className={'text-16 font-[900]'}>{sub}</p>
    </div>
  )
}

export default function Page({ params }) {
  const [activeComponent, setActiveComponent] = useState('1')
  const [isLoading, setLoading] = useState(false)
  const [order, setOrder] = useState({})

  const handleComponentChange = (componentId) => {
    setActiveComponent(componentId)
  }

  async function fetchOrder() {
    let { data: order, error } = await supabase
      .from('orders')
      .select('customer_name, id, name')
      .eq('id', params.id)
    if (error) {
      console.log(error)
    }

    let [value] = order
    console.log(value)
    return value || {}
  }

  useEffect(() => {
    setLoading(true)
    fetchOrder()
      .then((res) => {
        setOrder(res)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {!isLoading ? (
        <div
          className={
            'flex min-h-dvh flex-col items-center justify-center gap-y-[3rem]'
          }
        >
          {/* Use a switch statement to render the appropriate component */}
          {activeComponent === '1' ? (
            <>
              <Box heading={'Success!'} sub={'Bestellung gesendet'}></Box>
              <CountdownTimer
                actionOnComplete={() => handleComponentChange('2')}
              />
            </>
          ) : activeComponent === '2' ? (
            <>
              <Box heading={order.name} sub={'Type 1'}></Box>
              <div
                className={
                  'w-[29.8rem] rounded-[1.5rem] bg-[#E2F5E7] p-[0.8rem]'
                }
              >
                <Button
                  classes={
                    'bg-sl-primary-green rounded-[1.5rem] rounded  font-[900] text-white py-[2.5rem] w-full text-[2.9rem]'
                  }
                  disabled={false}
                  handleAction={() => handleComponentChange('3')}
                >
                  Abgeholt
                </Button>
              </div>
            </>
          ) : activeComponent === '3' ? (
            <Box heading={'Danke!'} sub={'Auf Wiedersehen'} />
          ) : (
            <div>No component selected</div>
          )}
        </div>
      ) : (
        <div className={'flex min-h-dvh w-full items-center justify-center'}>
          Loading
        </div>
      )}
    </>
  )
}

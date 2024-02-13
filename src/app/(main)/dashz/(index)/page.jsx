'use client'
import Image from 'next/image'
import MenuItem from '@/components/MenuItem'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'
import Button from '@/components/Button'

export default function Menu() {
  const router = useRouter()
  const menues = [
    { name: 'obst', img: '/img/obst.png', stat: 4 },
    { name: 'gemuse', img: '/img/gemuse.png', stat: 5 },
  ]

  const [obst, setObst] = useState(0)
  const [gemuse, setGemuse] = useState(0)

  async function fetchOrdersLength(type) {
    let { data: order, error } = await supabase
      .from('orders')
      .select('*')
      .eq('type', type)
      .is('completed', false)
    if (error) {
      console.log(error)
    }

    return order.length
  }

  useEffect(() => {
    fetchOrdersLength('obst').then((res) => setObst(res))
    fetchOrdersLength('gemuse').then((res) => setGemuse(res))
  }, [])

  return (
    <section className={'relative min-h-dvh w-full'}>
      <div className={'h-full w-full'}>
        <Image
          className={'h-full w-full'}
          fill
          src={'/img/menu-bg.jpg'}
          alt={'image'}
        />
      </div>
      <div className={'absolute z-10  h-full w-full  '}>
        <div
          className={
            'flex h-full flex-col items-center justify-center gap-y-[1.5rem]'
          }
        >
          <MenuItem
            handleAction={() => router.push(`/dashz/${menues[0].name}`)}
            stats={obst}
            type={'stats'}
            img={menues[0].img}
            text={menues[0].name === 'gemuse' ? 'Gemüse' : menues[0].name}
            key={menues[0].name}
          />
          <MenuItem
            handleAction={() => router.push(`/dashz/${menues[1].name}`)}
            stats={gemuse}
            type={'stats'}
            img={menues[1].img}
            text={menues[1].name === 'gemuse' ? 'Gemüse' : menues[1].name}
            key={menues[1].name}
          />
          <Button
            classes={
              'absolute bottom-5 right-10 bg-sl-primary-green rounded-[1.5rem] rounded  font-[900] text-white p-[1rem] w-fit text-[1rem]'
            }
            disabled={false}
            handleAction={() => {
              fetchOrdersLength('obst').then((res) => setObst(res))
              fetchOrdersLength('gemuse').then((res) => setGemuse(res))
            }}
          >
            Refresh
          </Button>
        </div>
      </div>
    </section>
  )
}

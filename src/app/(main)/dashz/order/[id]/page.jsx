'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import MenuItem from '@/components/MenuItem'
import IngredientItem from '@/components/IngredientItem'

export default function Page({ params }) {
  const [order, setOrder] = useState({})
  const [isLoading, setLoading] = useState(false)

  async function fetchOrder() {
    let { data: order, error } = await supabase
      .from('orders')
      .select('*')
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
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      {!isLoading ? (
        <section className={'fixed h-full w-full'}>
          <div
            className={'gradient-bg  flex  w-full justify-center py-[4rem] '}
          >
            <MenuItem type={''} img={order.img_url} text={order.name} />
            {/*<button className="swiper-button-next">Next</button>*/}
          </div>

          <div className={'relative bottom-0 h-fit w-full pb-[12rem]'}>
            <div className="selected-ingredients">
              <div className={'container flex items-center justify-between'}>
                <p className={'my-[1.3rem] text-14 font-[500]'}>Inhabit</p>
                {/*<SelectInput*/}
                {/*  options={options}*/}
                {/*  onChange={handleChangeSelect}*/}
                {/*  value={selectedOption}*/}
                {/*/>*/}
                <p className={'text-14 font-bold text-sl-primary-green'}>
                  <span className={'font-[500] text-black'}>
                    Für - {order.customer_name}
                  </span>{' '}
                  ({order.persons} person(s)){' '}
                </p>
              </div>
              <div className={'relative '}>
                <ul
                  className={
                    'menu flex flex-col gap-y-[0.5rem] overflow-y-auto pb-[15rem] '
                  }
                >
                  {order?.ingredients?.map((item) => (
                    <li key={item.name}>
                      <IngredientItem
                        img={item.img_url}
                        text={item.name}
                        pl={item.lp}
                        pp={item.percentage}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className={'flex min-h-dvh w-full items-center justify-center'}>
          Loading
        </div>
      )}
    </>
  )
}

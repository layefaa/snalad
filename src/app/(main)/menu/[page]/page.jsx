'use client'
export const dynamic = 'force-dynamic'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import 'swiper/css'
import 'swiper/css/pagination'
import '../../../pagination.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import MenuItem from '@/components/MenuItem'
import Button from '@/components/Button'
import Overlay from '@/components/Overlay'
import InputText from '@/components/InputText'
import IngredientItem from '@/components/IngredientItem'

export default function Page({ params }) {
  const router = useRouter()

  // supabase
  const [menu, setMenu] = useState([])

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

  useEffect(() => () => fetchMenu().then((res) => setMenu(res)), [])
  // supabase

  const [selectedMenuItem, setSelectedMenuItem] = useState(0)
  const [ingredients, selectIngredients] = useState([{ name: 'bananen' }])
  const handleSlideChange = (index) => {
    selectIngredients([])
    setSelectedMenuItem(index.activeIndex)
  }
  const checkIngredient = (item) => {
    return !!ingredients.find((i) => i.name === item.name)
  }
  const toggleIngredient = (item) => {
    !checkIngredient(item)
      ? selectIngredients([...ingredients, { ...item }])
      : selectIngredients(ingredients.filter((i) => i.name !== item.name))
  }

  // Overlay
  const [inputValue, setInputValue] = useState('')
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  const [showOverlay, setShowOverlay] = useState(false)
  const handleShowOverlay = () => {
    setShowOverlay(true)
  }
  // Overlay
  // SwiperJs
  const [swiper, setSwiper] = useState(null)
  // Swiperjs

  return (
    <section className={'relative h-full w-full'}>
      <div
        className={
          'gradient-bg relative flex  w-full justify-center py-[4rem] '
        }
      >
        <div
          className={'absolute top-0 z-10 flex h-full w-full justify-between'}
        >
          <button
            onClick={() => {
              swiper.slidePrev()
            }}
            className="swiper-button-next -pl-[1rem] rotate-180 "
          >
            <img src="/img/next.svg" alt="next" />
          </button>
          <button
            onClick={() => {
              swiper.slideNext()
            }}
            className="swiper-button-next  -ml-[1rem]"
          >
            <img src="/img/next.svg" alt="next" />
          </button>
        </div>
        <Swiper
          className={'relative mr-[10rem] flex h-fit w-full'}
          pagination
          navigation
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          onSwiper={setSwiper}
          onSlideChange={handleSlideChange}
        >
          <button className="swiper-button-prev"></button>
          {menu.map((item, index) => (
            <SwiperSlide
              virtualIndex={item.id}
              style={{ display: 'flex', justifyContent: 'center' }}
              key={item.id}
            >
              <MenuItem
                type={''}
                img={item.img_url}
                text={item.name}
                key={item.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/*<button className="swiper-button-next">Next</button>*/}
      </div>

      <div className={'h-full bg-sl-primary-white pb-[8rem]'}>
        <div className="selected-ingredients">
          <div className={'container flex justify-between'}>
            <p className={'my-[1.3rem] text-14 font-[500]'}>Inhabit</p>
          </div>

          <ul className={'flex flex-col gap-y-[0.5rem]'}>
            {menu[selectedMenuItem]?.ingredients.map((item) => (
              <li key={item.name}>
                <IngredientItem
                  handleAction={() => toggleIngredient(item)}
                  img={item.img_url}
                  text={item.name}
                  pl={item.lp}
                  pp={item.percentage}
                  isChecked={checkIngredient(item)}
                  type={'checkbox'}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={'fixed bottom-0 z-10 my-[3rem] flex w-dvw justify-center'}
      >
        <Button
          disabled={false}
          handleAction={handleShowOverlay}
          classes={
            'text-16 rounded-[1.5rem] px-[10rem] py-[1.7rem] font-[900] bg-sl-primary-green text-sl-primary-white flex gap-x-[1.3rem] items-center'
          }
        >
          Bestellen {ingredients.length}/
          {menu[selectedMenuItem]?.ingredients.length}
        </Button>
      </div>
      <Overlay show={showOverlay} onClose={() => setShowOverlay(false)}>
        <InputText
          inputValue={inputValue}
          onChange={handleChange}
          placeholder={'Ihre Vorname Bitte?'}
          label={'Wie Heisen Sie?'}
        />
        <div className={'flex justify-center'}>
          <Button
            handleAction={() => router.push(`/order/${inputValue}`)}
            disabled={false}
            classes={
              'text-16 mt-[5rem] rounded-[1.5rem] px-[6rem] py-[1.7rem] font-[900] bg-sl-primary-green text-sl-primary-white flex flex-row gap-x-[1.3rem] items-center'
            }
          >
            <p>Bestellung Abschließen</p>
          </Button>
        </div>
      </Overlay>
    </section>
  )
}

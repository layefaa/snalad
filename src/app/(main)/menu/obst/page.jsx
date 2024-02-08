'use client'
import MenuItem from '@/components/MenuItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../../../pagination.css'
import { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import Button from '@/components/Button'
import Overlay from '@/components/Overlay'
import InputText from '@/components/InputText'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

// const types = [
//   {
//     id: 0,
//     name: 'type 1',
//     img: '/img/obst.png',
//     ingredients: [
//       {
//         name: 'Bananen Lose',
//         pp: '2 Lose Stück verbraucht',
//         pl: '55% des Salats',
//         img: '/img/banana.png',
//       },
//       {
//         name: 'Kiwi Lose',
//         pp: '2 Lose Stück verbraucht',
//         pl: '55% des Salats',
//         img: '/img/kiwi.png',
//       },
//       {
//         name: 'Granatapfel  Lose',
//         pp: '1 Lose Stück verbraucht',
//         pl: '10% des Salats',
//         img: '/img/kiwi2.png',
//       },
//       {
//         name: 'Orange  Lose',
//         pp: '1 Lose Stück verbraucht',
//         pl: '5% des Salats',
//         img: '/img/kiwi.png',
//       },
//     ],
//   },
//   {
//     id: 1,
//     name: 'type 2',
//     img: '/img/obst.png',
//     ingredients: [
//       {
//         name: 'Granatapfel  Lose',
//         pp: '1 Lose Stück verbraucht',
//         pl: '10% des Salats',
//         img: '/img/kiwi2.png',
//       },
//       {
//         name: 'Bananen Lose',
//         pp: '2 Lose Stück verbraucht',
//         pl: '55% des Salats',
//         img: '/img/banana.png',
//       },
//       {
//         name: 'Orange  Lose',
//         pp: '1 Lose Stück verbraucht',
//         pl: '5% des Salats',
//         img: '/img/kiwi.png',
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'type 3',
//     img: '/img/obst.png',
//     ingredients: [
//       {
//         name: 'Granatapfel  Lose',
//         pp: '1 Lose Stück verbraucht',
//         pl: '10% des Salats',
//         img: '/img/kiwi2.png',
//       },
//
//       {
//         name: 'Orange  Lose',
//         pp: '1 Lose Stück verbraucht',
//         pl: '5% des Salats',
//         img: '/img/kiwi.png',
//       },
//     ],
//   },
// ]
export default function Obst() {
  const router = useRouter()

  const [menu, setMenu] = useState([])

  async function fetchMenu() {
    let { data: menu, error } = await supabase
      .from('menu')
      .select('*')
      .eq('type', 'obst')
    if (error) {
      console.log(error)
    }
    return menu || []
  }

  useEffect(() => () => fetchMenu().then((res) => setMenu(res)), [])

  const [selectedMenuItem, setSelectedMenuItem] = useState(1)
  const handleSlideChange = (index) => {
    console.log(index.activeIndex)
    setSelectedMenuItem(index.activeIndex)
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
          {menu.map((item) => (
            <SwiperSlide
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

      {/*<div className={'h-full bg-sl-primary-white pb-[8rem]'}>*/}
      {/*  {selectedMenuItem + 1 && (*/}
      {/*    <div className="selected-ingredients">*/}
      {/*      <div className={'container flex justify-between'}>*/}
      {/*        <p className={'my-[1.3rem] text-14 font-[500]'}>Inhabit</p>*/}
      {/*      </div>*/}

      {/*      <ul className={'flex flex-col gap-y-[0.5rem]'}>*/}
      {/*        {types[selectedMenuItem].ingredients.map(*/}
      {/*          ({ name, img, pl, pp }) => (*/}
      {/*            <li key={name}>*/}
      {/*              <IngredientItem*/}
      {/*                img={img}*/}
      {/*                text={name}*/}
      {/*                pl={pl}*/}
      {/*                pp={pp}*/}
      {/*                isChecked={true}*/}
      {/*                type={'checkbox'}*/}
      {/*              />*/}
      {/*            </li>*/}
      {/*          )*/}
      {/*        )}*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</div>*/}
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
          Bestellen
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

'use client'
import MenuItem from '@/components/MenuItem'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import IngredientItem from '@/components/IngredientItem'
import Button from '@/components/Button'
import Overlay from '@/components/Overlay'
import InputText from '@/components/InputText'
import { useRouter } from 'next/navigation'

const types = [
  {
    id: 0,
    name: 'type 1',
    img: '/img/obst.png',
    ingredients: [
      {
        name: 'Bananen Lose',
        pp: '2 Lose Stück verbraucht',
        pl: '55% des Salats',
        img: '/img/banana.png',
      },
      {
        name: 'Kiwi Lose',
        pp: '2 Lose Stück verbraucht',
        pl: '55% des Salats',
        img: '/img/kiwi.png',
      },
      {
        name: 'Granatapfel  Lose',
        pp: '1 Lose Stück verbraucht',
        pl: '10% des Salats',
        img: '/img/kiwi2.png',
      },
      {
        name: 'Orange  Lose',
        pp: '1 Lose Stück verbraucht',
        pl: '5% des Salats',
        img: '/img/kiwi.png',
      },
    ],
  },
  {
    id: 1,
    name: 'type 2',
    img: '/img/obst.png',
    ingredients: [
      {
        name: 'Granatapfel  Lose',
        pp: '1 Lose Stück verbraucht',
        pl: '10% des Salats',
        img: '/img/kiwi2.png',
      },
      {
        name: 'Bananen Lose',
        pp: '2 Lose Stück verbraucht',
        pl: '55% des Salats',
        img: '/img/banana.png',
      },
      {
        name: 'Orange  Lose',
        pp: '1 Lose Stück verbraucht',
        pl: '5% des Salats',
        img: '/img/kiwi.png',
      },
    ],
  },
  {
    id: 2,
    name: 'type 3',
    img: '/img/obst.png',
    ingredients: [
      {
        name: 'Granatapfel  Lose',
        pp: '1 Lose Stück verbraucht',
        pl: '10% des Salats',
        img: '/img/kiwi2.png',
      },

      {
        name: 'Orange  Lose',
        pp: '1 Lose Stück verbraucht',
        pl: '5% des Salats',
        img: '/img/kiwi.png',
      },
    ],
  },
]
export default function Obst() {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  const [selectedMenuItem, setSelectedMenuItem] = useState(1)

  const handleSlideChange = (index) => {
    console.log(index.activeIndex)
    setSelectedMenuItem(index.activeIndex)
  }

  const [showOverlay, setShowOverlay] = useState(false)

  const handleShowOverlay = () => {
    setShowOverlay(true)
  }

  return (
    <section className={'h-full w-full pb-[4rem]'}>
      <div className={'gradient-bg flex w-full justify-center py-[4rem] '}>
        <Swiper
          className={'mr-[10rem] h-fit w-full'}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={handleSlideChange}
        >
          <button className="swiper-button-prev"></button>
          {types.map((item) => (
            <SwiperSlide
              style={{ display: 'flex', justifyContent: 'center' }}
              key={item.id}
            >
              <MenuItem img={item.img} text={item.name} key={item.id} />
            </SwiperSlide>
          ))}
          <button className="swiper-button-next">
            {/*<img src="/img/next.svg" alt="next" />*/}
          </button>
        </Swiper>
        {/*<button className="swiper-button-next">Next</button>*/}
      </div>

      <div className={'h-[60%] bg-sl-primary-white'}>
        {selectedMenuItem + 1 && (
          <div className="selected-ingredients">
            <div className={'container flex justify-between'}>
              <p className={'my-[1.3rem] text-14 font-[500]'}>Inhabit</p>
            </div>

            <ul className={'flex flex-col gap-y-[0.5rem]'}>
              {types[selectedMenuItem].ingredients.map(
                ({ name, img, pl, pp }) => (
                  <li key={name}>
                    <IngredientItem
                      img={img}
                      text={name}
                      pl={pl}
                      pp={pp}
                      isChecked={true}
                      type={'checkbox'}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
      <div className={'my-[3.8rem] flex justify-center'}>
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
      <div>
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
                'text-16 mt-[5rem] rounded-[1.5rem] px-[7rem] py-[1.7rem] font-[900] bg-sl-primary-green text-sl-primary-white flex flex-row gap-x-[1.3rem] items-center'
              }
            >
              <p>Bestellung Abschließen</p>
            </Button>
          </div>
        </Overlay>
      </div>
    </section>
  )
}

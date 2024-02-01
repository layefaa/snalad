'use client'
import MenuItem from '@/components/MenuItem'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import IngredientItem from '@/components/IngredientItem'

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
  const swiper = useSwiper()
  const swiperSlide = useSwiperSlide()
  const [selectedMenuItem, setSelectedMenuItem] = useState(1)

  const handleSlideChange = (index) => {
    console.log(index.activeIndex)
    setSelectedMenuItem(index.activeIndex)
  }

  return (
    <section className={' min-h-screen w-full pb-[4rem]'}>
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
    </section>
  )
}

'use client'
import Image from 'next/image'
import MenuItem from '@/components/MenuItem'
import { useState } from 'react'
import Button from '@/components/Button'

export default function Menu() {
  const [selected, setSelected] = useState(null)
  const menues = [
    { name: 'Obst', img: '/img/obst.png' },
    { name: 'Gemüse', img: '/img/gemuse.png' },
  ]
  return (
    <section className={' h-full w-full py-[4rem]'}>
      <div className={'h-full w-full'}>
        <Image
          className={'h-full w-full'}
          fill
          src={'/img/menu-bg.jpg'}
          alt={'image'}
        />
      </div>
      <div className={'absolute z-10  w-screen  '}>
        <div
          className={'flex flex-col items-center justify-center gap-y-[1.5rem]'}
        >
          {menues.map((menu) => {
            return (
              <MenuItem
                type={'checkbox'}
                img={menu.img}
                text={menu.name}
                key={menu.name}
                isChecked={true}
              />
            )
          })}
        </div>
        <div className={'container mt-[5rem] flex justify-end'}>
          <Button
            url={'/menu/obst'}
            classes={
              'text-16 rounded-[1.5rem] px-[2.8rem] py-[1rem] font-[900] disabled:bg-sl-primary-white bg-sl-primary-green text-sl-primary-white disabled:text-sl-primary-green flex gap-x-[1.3rem] items-center'
            }
            type={'link'}
            // disabled={!selected}
            disabled={false}
          >
            <p>Start</p>
            <svg
              className={`${true ? 'fill-sl-primary-white' : 'fill-sl-primary-green'}`}
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="9056976_arrow_long_right_icon 1">
                <path
                  id="Vector"
                  d="M24.0289 12.4926L19.6021 8.08061L18.1314 9.55623L20.0432 11.4617L0.971327 11.4596L0.9711 13.5429L20.0384 13.545L18.1412 15.4487L19.6168 16.9194L24.0289 12.4926Z"
                />
              </g>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}

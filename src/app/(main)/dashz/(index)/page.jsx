'use client'
import Image from 'next/image'
import MenuItem from '@/components/MenuItem'

export default function Menu() {
  const menues = [
    { name: 'Obst', img: '/img/obst.png', stat: 4 },
    { name: 'Gemüse', img: '/img/gemuse.png', stat: 5 },
  ]
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
          {menues.map((menu) => {
            return (
              <MenuItem
                stats={menu.stat}
                type={'stats'}
                img={menu.img}
                text={menu.name}
                key={menu.name}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

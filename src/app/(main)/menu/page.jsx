import Image from 'next/image'
import MenuItem from '@/components/MenuItem'

export default function Menu() {
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
      <div
        className={
          'absolute z-10 mx-auto flex w-screen flex-col items-center justify-center gap-y-[1.5rem] '
        }
      >
        {menues.map((menu) => {
          return <MenuItem img={menu.img} text={menu.name} key={menu.name} />
        })}
      </div>
    </section>
  )
}

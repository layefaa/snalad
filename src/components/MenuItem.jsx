import Image from 'next/image'

const MenuItem = ({ img, text, isChecked }) => {
  return (
    <div className={'h-[26rem] w-[29rem] rounded-[1.5rem] bg-sl-primary-white'}>
      <div className={'flex justify-between px-[1.5rem] py-[1.4rem]'}>
        <p className={'text-16 font-[600] text-sl-secondary-black'}>{text}</p>
      </div>
      <div className={'relative h-[22rem] w-full p-[0.5rem]'}>
        <Image fill className={'h-full w-full'} src={img} alt={text} />
      </div>
    </div>
  )
}

export default MenuItem

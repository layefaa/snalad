import Checkbox from '@/components/Checkbox'

const MenuItem = ({ img, text, isChecked }) => {
  return (
    <div className={' card h-[26rem] w-[29rem] cursor-pointer'}>
      <div className={'flex justify-between px-[1.5rem] py-[1.4rem]'}>
        <p className={'text-16 font-[600] text-sl-secondary-black'}>{text}</p>
        <Checkbox selected={isChecked} />
      </div>
      <div className={'relative h-[22rem] w-full p-[0.5rem]'}>
        <img className={'h-[92%] w-full'} src={img} alt={text} />
      </div>
    </div>
  )
}

export default MenuItem

import Checkbox from '@/components/Checkbox'

const MenuItem = ({ img, text, isChecked, type, stats, handleAction }) => {
  return (
    <div
      className={'card h-[26rem] w-[29rem] cursor-pointer'}
      onClick={handleAction}
    >
      <div className={'flex justify-between px-[1.5rem] py-[1.4rem]'}>
        <p className={'text-16 font-[600] capitalize text-sl-secondary-black'}>
          {text}
        </p>
        {type === 'checkbox' ? (
          <Checkbox selected={isChecked} />
        ) : stats >= 0 ? (
          <div
            className={
              'grid aspect-square w-[2.6rem] place-content-center rounded-[1.5rem] bg-[#FF0000] text-12 font-black text-white'
            }
          >
            {stats}
          </div>
        ) : null}
      </div>
      <div className={'relative h-[22rem] w-full p-[0.5rem]'}>
        <img className={'h-[92%] w-full'} src={img} alt={text} />
      </div>
    </div>
  )
}

export default MenuItem

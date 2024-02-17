import Checkbox from '@/components/Checkbox'

const IngredientItem = ({
  img,
  text,
  isChecked,
  type,
  pl,
  pp,
  handleAction,
}) => {
  return (
    <div
      onClick={handleAction}
      className={
        'container relative flex w-full cursor-pointer items-center  bg-[#F8F8F8] py-[0.8rem]'
      }
    >
      <div
        className={
          'relative flex h-[7rem] w-[7rem] items-center justify-center rounded-[1.5rem] bg-sl-primary-white p-[0.5rem]'
        }
      >
        <img className={'rounded-[1.5rem]'} src={img} alt={text} />
      </div>
      <div className={'flex flex-col self-start pl-[1.2rem] pt-[1rem]'}>
        <p className={'text-14 font-[500] capitalize text-sl-secondary-black'}>
          {text}
        </p>
        <p className={'text-14 font-[500] capitalize text-[#BFBFBF]'}>
          {pl}{' '}
          {text === 'Trauben' ||
          text === 'Rot Trauben' ||
          text === 'Bluebeere' ||
          text === 'Kulturheidelbeeren' ||
          text === 'Erdbeeren' ||
          text === 'Tafeltrauben hell und Dunkel' ||
          text === 'Tafeltrauben' ||
          text === 'Thunfisch' ||
          text === 'Bonduelle Gemüsemais' ||
          text === 'Kirchenerbsen' ||
          text === 'G&G Bulgur Salat' ||
          text === 'Oliven' ||
          text === 'Brussels' ||
          text === 'Macademia' ||
          text === 'Goudawürfeln 48%' ||
          text === 'Harry 1688 Brot' ||
          text === 'Mais'
            ? 'Paket verbraucht'
            : 'Stück verbraucht'}
        </p>
        <p className={'text-12 text-sl-primary-green'}>{pp}% des Salats</p>
      </div>
      <div className={'absolute right-[5%]'}>
        {type === 'checkbox' ? <Checkbox selected={isChecked} /> : null}
      </div>
    </div>
  )
}

export default IngredientItem

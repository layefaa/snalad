import CountdownTimer from '@/components/CountdownTimer'

const DashMenuItem = ({
  img,
  text,
  type,
  orders,
  customerName,
  completed,
  created_at,
}) => {
  function isTimeMoreThan5MinutesAgo(time) {
    const givenTime = new Date(time)

    // Check if givenTime is a valid Date object
    if (isNaN(givenTime)) {
      console.error('Invalid timestamp:', time)
      return false
    }

    const currentTime = Date.now()

    // Calculate the time difference in milliseconds
    const timeDifference = currentTime - givenTime.getTime()

    // Check if the time difference is greater than 5 minutes (300,000 milliseconds)
    return timeDifference > 300000
  }

  return (
    <div className={'card h-[22rem] w-[100%] max-w-[39rem] cursor-pointer'}>
      <div
        className={
          'flex justify-between px-[1.5rem] py-[1rem] text-14 font-semibold'
        }
      >
        <p className={' capitalize text-sl-secondary-black'}>{text}</p>
        {type === 'product' ? (
          <p className={'text-[#4F4F4F]'}>{orders} Bestellung</p>
        ) : null}
      </div>
      <div className={'relative h-[14.2rem] w-full px-[0.5rem]'}>
        <img
          className={
            'h-[100%] w-full rounded-[1.5rem] object-cover object-center '
          }
          src={img}
          alt={text}
        />
      </div>
      {type === 'order' ? (
        <div
          className={'container flex justify-between py-[1rem] font-semibold'}
        >
          <p>Für - {customerName}</p>
          {completed ? (
            <p className={'text-sl-primary-green'}>Completed</p>
          ) : isTimeMoreThan5MinutesAgo(created_at) ? (
            <p>Complete</p>
          ) : (
            <CountdownTimer
              actionOnComplete={() => console.log('done')}
              createdAt={created_at}
              useDatabaseTime={true}
            />
          )}
        </div>
      ) : null}
    </div>
  )
}

export default DashMenuItem

import React, { useEffect, useState } from 'react'

function CountdownTimer({ actionOnComplete, initialTime = 10 }) {
  const [timeLeft, setTimeLeft] = useState(initialTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => Math.max(prevTimeLeft - 1, 0)) // Ensure non-negative time
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formatTime = (time) => {
    // Format time into minutes and seconds
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const handleTimerCompletion = () => {
    // Execute your desired action here
    console.log('Timer completed! Executing action:', actionOnComplete)
    // Call the user-provided action function
    actionOnComplete()
  }

  return (
    <div
      className={
        'flex h-[9.3rem] w-[29.8rem] items-center justify-center rounded-[1.5rem] bg-[#F8F8F8] text-[2.9rem] font-[900]'
      }
    >
      <p>{formatTime(timeLeft)}</p>
      {timeLeft === 0 && actionOnComplete && handleTimerCompletion()}
    </div>
  )
}

export default CountdownTimer

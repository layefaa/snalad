import { useEffect, useState } from 'react'

function CountdownTimer({
  actionOnComplete,
  initialTime = 300,
  useDatabaseTime = false,
  createdAt,
}) {
  const storedTime = useDatabaseTime
    ? Math.max(
        0,
        initialTime -
          Math.floor((Date.now() - new Date(createdAt).getTime()) / 1000)
      )
    : null

  // Ensure that the initialTime is a valid number
  const initialTimeValue =
    typeof initialTime === 'number' && !isNaN(initialTime) ? initialTime : 300

  const [timeLeft, setTimeLeft] = useState(
    storedTime !== null ? storedTime : initialTimeValue
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => Math.max(prevTimeLeft - 1, 0))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (useDatabaseTime && storedTime === 0 && actionOnComplete) {
      handleTimerCompletion()
    }
  }, [useDatabaseTime, storedTime])

  useEffect(() => {
    if (!useDatabaseTime) {
      localStorage.setItem('countdownTimerTimeLeft', JSON.stringify(timeLeft))
      localStorage.setItem(
        'countdownTimerStartTime',
        JSON.stringify(Date.now())
      )
    }
  }, [timeLeft, useDatabaseTime])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const handleTimerCompletion = () => {
    actionOnComplete()
  }

  return (
    <>
      <p>{formatTime(timeLeft)}</p>
      {timeLeft === 0 && actionOnComplete && handleTimerCompletion()}
    </>
  )
}

export default CountdownTimer

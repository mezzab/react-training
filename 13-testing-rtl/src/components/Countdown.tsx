import React, { useEffect } from 'react'

function Countdown() {
  const [remainingTime, setRemainingTime] = React.useState(10)
  const end = React.useRef(new Date().getTime() + remainingTime)

  useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = end.current - new Date().getTime()
      if (newRemainingTime <= 0) {
        clearInterval(interval)
        setRemainingTime(0)
      } else {
        setRemainingTime(newRemainingTime)
      }
    })
    // return () => clearInterval(interval)
  }, [])

  return remainingTime
}

export { Countdown }

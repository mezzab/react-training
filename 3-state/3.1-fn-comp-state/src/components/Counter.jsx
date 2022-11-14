import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter((prevValue) => prevValue + 1)
  }

  return (
    <div>
      <p>Our counter value is: {counter}</p>

      <button onClick={increase}>increase</button>
    </div>
  )
}

export default Counter

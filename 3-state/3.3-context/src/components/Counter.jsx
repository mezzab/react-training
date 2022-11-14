import React, { useState } from 'react'
import { CounterContext, useCounterContext } from '../context/counter'

const CounterWrapper = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter((counter) => counter + 1)

  return (
    <CounterContext.Provider value={{ counter, increment }}>
      <DisplayCounter />
      <IncrementCounter />
    </CounterContext.Provider>
  )
}

const DisplayCounter = () => {
  const { counter } = useCounterContext()

  return (
    <div>
      <p>You clicked {counter} times</p>
    </div>
  )
}

const IncrementCounter = () => {
  const { increment } = useCounterContext()

  return (
    <div>
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default CounterWrapper

import { createContext, useContext } from 'react'

export const CounterContext = createContext(0)

export const useCounterContext = () => useContext(CounterContext)

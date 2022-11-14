import { useState } from 'react'

function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = localStorage.getItem(key)
  const initial = JSON.parse(saved)
  return initial || defaultValue
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  const setNewValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value))
    setValue(value)
  }

  return [value, setNewValue]
}

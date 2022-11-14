import React, { useState } from 'react'
import HookMouseInfo from './HookMouseInfo'
const Counter = () => {
  const [display, setDisplay] = useState(false)

  return (
    <div>
      <button onClick={() => setDisplay((display) => !display)}>
        toggle display
      </button>

      <span> toggle is {display.toString()}</span>

      {display && <HookMouseInfo />}
    </div>
  )
}

export default Counter

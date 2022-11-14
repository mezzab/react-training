import React, { useState } from 'react'

const withCounter = (OriginalComponent) => {
  const EnhancedComponent = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => setCount((prevCount) => prevCount + 1)
    return <OriginalComponent incrementCount={incrementCount} count={count} />
  }
  return EnhancedComponent
}

export default withCounter

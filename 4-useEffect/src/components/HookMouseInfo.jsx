import { useEffect, useState } from 'react'

const MouseInfo = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = (e) => {
    console.log('mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  // dependency array:
  // 1. not to send any dep array: the side-effect will run in every re-render
  // 2. []: the side-effect runs once after the initial rendering
  // 3. [props1, props2, ..., state1]: the side-effect runs only when any dep value changes.
  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('unmount')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
      Hook X: {x} , Y: {y}
    </div>
  )
}

export default MouseInfo

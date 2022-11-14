import React from 'react'
import withCounter from '../HOCs/withCounter'

const HoverCounter = ({ count, incrementCount }) => {
  return <button onMouseOver={incrementCount}>Hovered {count} times</button>
}

export default withCounter(HoverCounter)

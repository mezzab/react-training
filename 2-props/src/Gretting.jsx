import React from 'react'

const Gretting = ({ name = 'Tomas', lastName = 'XXX' }) => {
  return (
    <p>
      Hello {name} {lastName}!
    </p>
  )
}

export default Gretting

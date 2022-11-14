import React from 'react'

const Gretting = ({ user: { name = 'Marcos', lastName = '' } }) => {
  return (
    <div>
      <p>
        Hello {name} {lastName}!
      </p>
    </div>
  )
}

export default Gretting

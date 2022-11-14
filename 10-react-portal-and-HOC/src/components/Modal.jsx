import React from 'react'

const Modal = ({ children, onClose, withPortal }) => {
  return (
    <div style={{ border: '1px solid black', padding: '1em' }}>
      <div>
        <button onClick={onClose}>close</button>
        <div />
        <div>
          <div>Title</div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal

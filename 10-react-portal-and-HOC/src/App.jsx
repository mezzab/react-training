import React from 'react'
import { useState } from 'react'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import Modal from './components/Modal'
import Header from './components/Header'

export default function App() {
  const [showModal, setShowMOdal] = useState(false) // toggles modal visibility

  return (
    <div style={styles.wrapper}>
      <Header />
      <button
        style={styles.button}
        onClick={(e) => {
          setShowMOdal((prev) => !prev)
        }}
      >
        Toggle modal
      </button>
      {showModal && (
        <Modal onClose={() => setShowMOdal(false)}>
          <div>Awesome modal content!</div>
        </Modal>
      )}

      <ClickCounter />
      <HoverCounter />
    </div>
  )
}

const styles = {
  wrapper: { padding: 50, maxWidth: 350, margin: '0 auto 300px' },
  button: { display: 'flex', marginLeft: 'auto' },
}

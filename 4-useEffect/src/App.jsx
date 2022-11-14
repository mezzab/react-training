import React from 'react'
import Gretting from './components/Gretting'
import Header from './components/Header'
import MouseContainer from './components/MouseContainer'

const user = { name: 'Marcos', lastName: 'Mezzabotta' }

const App = () => {
  return (
    <div className="App">
      <Header title="React Training" />
      <Gretting user={user} />
      <MouseContainer />
    </div>
  )
}

export default App

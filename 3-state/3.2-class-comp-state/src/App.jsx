import React from 'react'
import Gretting from './components/Gretting'
import Counter from './components/Counter'
import Header from './components/Header'

const user = { name: 'Marcos', lastName: 'Mezzabotta' }
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="React Training" />
        <Gretting user={user} />
        <Counter />
      </div>
    )
  }
}

export default App

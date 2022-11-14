import React from 'react'
import Header from './components/Header'
import Counter from './components/Counter'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="React Training" />
        <Counter />
      </div>
    )
  }
}

export default App

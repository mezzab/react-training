import React from 'react'
import Gretting from './Gretting'

const user = {
  name: 'Marcos',
  lastName: 'Mezzabotta',
}

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>React Training</h1>
        </header>
        <div>
          {/* <Gretting /> no prop sent, it will use default props. */}
          <Gretting name={user.name} lastName={user.lastName} />
        </div>
      </div>
    )
  }
}

export default App

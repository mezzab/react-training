import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  increase = () => {
    this.setState((prevState) => ({ count: prevState + 1 }))
    this.setState((prevState) => ({ count: prevState + 1 }))
    this.setState((prevState) => ({ count: prevState + 1 }))
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.increase}>increment x3</button>
      </div>
    )
  }
}
export default Counter

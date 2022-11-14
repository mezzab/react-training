import { Component } from 'react'

class MouseInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
    }
  }

  logMousePosition = (e) => {
    console.log('mouse event')
    this.setState({ x: e.clientX, y: e.clientY })
  }

  componentDidMount() {
    console.log('didmount')
    window.addEventListener('mousemove', this.logMousePosition)
  }

  componentWillUnmount() {
    console.log('unmount')
    window.removeEventListener('mousemove', this.logMousePosition)
  }

  render() {
    return (
      <div>
        Hook X: {this.state.x} , Y: {this.state.y}
      </div>
    )
  }
}

export default MouseInfo

import React from 'react'
import ReactDOM from 'react-dom/client'

const domElement = document.getElementById('root')

// const element = React.createElement('p', null, 'Hello World')

const element = <p id='1'>Hello World!</p>

ReactDOM.createRoot(domElement).render(element)

import React from 'react'
import { Suspense } from 'react'
import Header from './components/Header'

const About = React.lazy(() => import('./components/About'))

const App = () => {
  return (
    <div className="App">
      <Header title="React Training" />
      <Suspense fallback={<div>loading...</div>}>
        <About />
      </Suspense>
    </div>
  )
}

export default App

import * as React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Header from './components/Header'

const About = React.lazy(() => import('./components/About'))
const Home = React.lazy(() => import('./components/Home'))

export default function App() {
  return (
    <div>
      <Header title="React Training" />
      <Layout />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>loading home...</>}>
              <Home />
            </React.Suspense>
          }
        />

        <Route
          path="about"
          element={
            <React.Suspense fallback={<>loading about...</>}>
              <About />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

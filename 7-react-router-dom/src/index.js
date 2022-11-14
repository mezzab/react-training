import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const domElement = document.getElementById('root')

ReactDOM.createRoot(domElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

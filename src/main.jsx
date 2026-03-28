import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import App from './layouts/App.jsx'
import Pages from './pages'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App>
        <Pages />
      </App>
    </Router>
  </StrictMode>,
)

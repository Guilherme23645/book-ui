import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import App from './layouts/App.jsx'
import Pages from './pages'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <Pages />
    </App>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Logo } from './components/Logo.jsx'
import Card from './components/Card'
import Time from './components/Time.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Logo/>
    <App />
    <Card/>
    <Time/>
  </StrictMode>,
)

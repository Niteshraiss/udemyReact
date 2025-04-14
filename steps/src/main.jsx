import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Time from './Time.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Time/> */}
  </StrictMode>,
)

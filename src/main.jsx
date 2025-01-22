import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MessengerApp from './Messenger.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MessengerApp />
  </StrictMode>,
)

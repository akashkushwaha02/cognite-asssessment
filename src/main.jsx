import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MessengerApp from './Messenger.jsx'
import { SpeedInsights } from "@vercel/speed-insights/next"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MessengerApp />
    <SpeedInsights/>
  </StrictMode>,
)

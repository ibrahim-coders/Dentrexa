import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Routerlayout from './Layout/Routerlayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Routerlayout/>
  </StrictMode>,
)

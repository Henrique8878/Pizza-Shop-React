import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { enableMSW } from './api/mocks/index.ts'
import './index.css'
import {App} from './App.tsx'

enableMSW().then(()=>{
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
  
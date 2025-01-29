import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyFilterComponent from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyFilterComponent/>
  </StrictMode>,
)

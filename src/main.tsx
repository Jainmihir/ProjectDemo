import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './components/Dashboard'
// import MyFilterComponent from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <MyFilterComponent/> */}
    <Dashboard/>
  </StrictMode>,
)

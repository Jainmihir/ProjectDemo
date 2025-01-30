import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './deep/DeepMain'
// import Dashboard from './components/Dashboard'
// import MyFilterComponent from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <MyFilterComponent/> */}
    <App/>
    {/* <Dashboard/> */}
  </StrictMode>,
)

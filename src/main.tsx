import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './deep/DeepMain'
import Ma from './proj/Ma'
// import Dashboard from './components/Dashboard'
// import MyFilterComponent from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Ma/>
    {/* <MyFilterComponent/> */}
    {/* <App/> */}
    {/* <Dashboard/> */}
  </StrictMode>,
)

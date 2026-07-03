
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MyContext from './MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <MyContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyContext>
)

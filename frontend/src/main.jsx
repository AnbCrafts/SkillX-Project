import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import loginContextProvider from './ContextAPI/loginContextAPI.jsx'
import LoginContextProvider from './ContextAPI/loginContextAPI.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   <LoginContextProvider>
      <App />

   </LoginContextProvider>

    </BrowserRouter>
  </StrictMode>,
)

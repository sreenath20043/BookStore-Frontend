import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ContextShare from './contextShareAPI/ContextShare.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <GoogleOAuthProvider clientId="627708061185-418mkki7teuhd58sjrm1sgbplmjamcsf.apps.googleusercontent.com">
      <ContextShare>
        <App />
      </ContextShare>
      </GoogleOAuthProvider>;
    </BrowserRouter>
  </StrictMode>,
)

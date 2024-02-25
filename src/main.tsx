import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import ResetStyle from './assets/styles/ResetStyle.tsx';
import GlobalStyle from './assets/styles/GobalStyle.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetStyle/>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)

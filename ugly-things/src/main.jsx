import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThingsContextProvider } from './ThingsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThingsContextProvider>
  <App />
  </ThingsContextProvider>
  
)

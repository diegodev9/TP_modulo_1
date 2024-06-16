import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/styles.css'
import * as bootstrap from 'bootstrap'
import { Tooltip, Toast, Popover } from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

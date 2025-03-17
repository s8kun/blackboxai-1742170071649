import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Add Font Awesome
const fontAwesome = document.createElement('link')
fontAwesome.rel = 'stylesheet'
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
document.head.appendChild(fontAwesome)

// Add SF Pro Display font
const sfProFont = document.createElement('link')
sfProFont.rel = 'stylesheet'
sfProFont.href = 'https://fonts.cdnfonts.com/css/sf-pro-display'
document.head.appendChild(sfProFont)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

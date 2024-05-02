import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Provider/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl  mx-auto'>
    <RouterProvider router={router}>
      
      </RouterProvider>
    </div>
  </React.StrictMode>,
)

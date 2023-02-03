import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Main from './main'
import Footer from './Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main-container'>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  </React.StrictMode>,
)


import React from 'react'
import './App.css'
import Footer from './component/Footer'
import Home from './component/Home'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    </>


  )
}

export default App


import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/home/Header'
import About from './components/home/About'

function App() {

  return (
    <div>
      <Navbar />
      <div className=''>
        <Header />
      </div>
      <div className='my-8'>
        <About />
      </div>
    </div>
  )
}

export default App

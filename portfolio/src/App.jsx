import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/home/Header'
import About from './components/home/About'
import Sidebar from './components/Sidebar'

import Resume from './components/resume/Resume'

function App() {

  return (
    <div>
      <Resume />
      {/* <Sidebar /> */}

      
      {/* <Navbar />
      <div className=''>
        <Header />
      </div>
      <div className='my-8'>
        <About />
      </div> */}
    </div>
  )
}

export default App

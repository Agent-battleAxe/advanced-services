import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import More from './pages/More'

import { Navbar,Footer } from './components'

import {Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<More />} />
      </Routes>
    
     <Footer />
    </>
  )
}

export default App

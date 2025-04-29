import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Aboutme from './pages/Aboutme'
import Project from './pages/Project'
import Contact from './pages/Contact'
import { AnimatePresence } from 'framer-motion'
const App = () => {

  const location = useLocation();

  return (
    
    <>
      <Navbar />
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
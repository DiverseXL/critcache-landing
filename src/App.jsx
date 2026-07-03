import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQSection from './components/FAQSection'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Docs from './pages/Docs'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-void text-paper relative overflow-hidden font-sans selection:bg-crit selection:text-void pt-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
      <FAQSection />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App

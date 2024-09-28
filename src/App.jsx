import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Portfolio from './component/portfolio'
import Contact from './component/Contact'
import Footer from './component/footer'
import Skills from './component/skills'
function App() {

  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

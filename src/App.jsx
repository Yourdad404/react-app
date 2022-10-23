import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Me from './components/me/Me'
const App = () => {
  return (<>
    <Header />
    <Nav />
    <Me/>
    <Skills/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
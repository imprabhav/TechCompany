import React from 'react'
import './App.css'
import Navbar from './Components/Home/Navbar/Navbar.jsx'
import Hero from './Components/Home/Hero/Hero.jsx'
import FooterNav from './Components/Home/FooterNav/FooterNav.jsx'
import ServiceCard from './Components/Home/ServiceCard/ServiceCard.jsx'
import Contact from './Components/Home/Contact/Contact.jsx'

const App = () => {
  return (
   <>
    <Navbar/>
    <Hero/>
    <ServiceCard/>
    <Contact/>
    <FooterNav/>
   </>
  )
}

export default App

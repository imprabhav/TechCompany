import React from 'react'
import './App.css'
import Navbar from './Components/Home/Navbar/Navbar.jsx'
import Hero from './Components/Home/Hero/Hero.jsx'
import FooterNav from './Components/Home/FooterNav/FooterNav.jsx'
import ServiceCard from './Components/Home/ServiceCard/ServiceCard.jsx'
import Contact from './Components/Home/Contact/Contact.jsx'
import Contact2 from './Components/Contact/Contact-main.jsx'

import About from './Components/About/About.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.jsx'

import MobileDev2 from './Components/Services/MobileDev2.jsx'
import Salesforce from './Components/Services/Salesforce.jsx'
import DataAnalytics from './Components/Services/DataAnalytics.jsx'
import WebDesignDevelopmentPage from './Components/Services/WebDesignDevelopmentPage.jsx'




const App = () => {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/app-development' element={<MobileDev2/>}/>
      <Route path='/data-analytics' element={<DataAnalytics/>}/>
      <Route path='/web-development' element={<WebDesignDevelopmentPage/>}/>
      <Route path='/sap' element={<Salesforce/>}/>
      <Route path='/contact-us' element={<Contact2/>}/>



    </Routes>
    <FooterNav/>
    </Router>
   </>
  )
}

export default App

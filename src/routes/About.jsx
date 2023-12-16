import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
// import Aboutimg from '../assets/1.jpg'
import DestinationData from '../Components/DestinationData'
// import './Destination.css'

  import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
const About = () => {
  return (
    
    <div>
     <Navbar/>
     <Hero
      cName='Hero-mid'
      HeroImg='Images/night.jpg'
      title='About'
     
      buttnclass='hide'
      />
       <AboutUs/>
 
        <Footer/>   
         
    </div>
  )
}

export default About

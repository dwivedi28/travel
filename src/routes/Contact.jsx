import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import ContactUs from '../Components/ContactUs'
const Contact = () => {
  return (
    <div>
       <Navbar/>
     <Hero
      cName='Hero-mid'
      HeroImg='Images/2.jpg'
      title='Contact'
     
      buttnclass='hide'
      />
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Contact

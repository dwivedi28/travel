import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'
const Service = () => {
  return (
    <div>
      <Navbar/>
     <Hero
      cName='Hero-mid'
      HeroImg='Images/6.jpg'
      title='Service'
     
      buttnclass='hide'
      />
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Service

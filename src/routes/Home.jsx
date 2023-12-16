import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'
const Home = () => {
  return (
  
    <div>
          <Navbar/>
      <Hero
      cName='Hero'
      HeroImg='Images/12.jpg'
      title='Your Journey Your Story'
      text='Choose Your Favourite Destination'
      url='/'
      buttntext='Travel Plan'
      buttnclass='show'
      />
       <Destination/>
       <Trip/>
       <Footer/>
    </div>
   
  )
}

export default Home

import React from 'react'
import './Destination.css'
import DestinationData from './DestinationData'
const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours gives you the opportunity to a see a lot,within a time frame. </p>
        <DestinationData
        className='first-desi'
        heading=' Taal Volcano,Batangas'
        text='One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a loka inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutės, and is easy enough for beginners. Guides will assist you most of the way. and youll see the peculiar environment found on an active volcano including volcanic rocks and steam vents The hike can be dusty and hot so plan for an early morning trip and then unwind with some bulalo before heading back '
        img1='Images/1.jpg'
        img2='Images/2.jpg'

        />
         <DestinationData
         className='first-desi-reverse'
         img1='Images/8.jpg'
         img2='Images/5.jpg'
        heading='Mt.Daguldul,Batangas'
        text='One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a loka inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutės, and is easy enough for beginners. Guides will assist you most of the way. and youll see the peculiar environment found on an active volcano including volcanic rocks and steam vents The hike can be dusty and hot so plan for an early morning trip and then unwind with some bulalo before heading back '
        // img1='Images/3.jpg'
        // img2='Images/4.jpg'

        />
        
   
    </div>
  
  )
}

export default Destination

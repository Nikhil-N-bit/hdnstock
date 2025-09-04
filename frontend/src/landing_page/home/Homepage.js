import React from 'react'
import Hero from './Hero'
import Award from './Award'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Homepage() {
  return (
    <div>
        <h1>homepage</h1>
<Navbar/>
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>

        <Footer/>
      
    </div>
  )
}

export default Homepage

import React from 'react'
import Hero from './Hero'
import Award from './Award'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
function Homepage() {
  return (
    <div>
       
        <FontAwesomeIcon icon={faHome} />
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

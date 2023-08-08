import React from 'react'
import Navbar from '../Navbar/Navbar'

import Footer from '../Footer/Footer'
import Heropart from '../Project/Heropart'
const About=()=>{
  return (
    <div>
        <Navbar/>
        <Heropart heading="About" text="I am friendly Front -End Developer"/>
          <Footer/>
    </div>
  )
}

export default About
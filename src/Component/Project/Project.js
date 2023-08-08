import React from 'react'
import Navbar from '../Navbar/Navbar'

import Footer from '../Footer/Footer'
import Heropart from './Heropart'
import Price from '../../Price/Price'
const Project=()=>{
  return (
    <div>
        <Navbar/>
        <Heropart heading ="PROJECTS" text="Some of my Recent work"/>
        <Price/>
          <Footer/>
    </div>
  )
}

export default Project
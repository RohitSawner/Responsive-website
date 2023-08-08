import React from 'react'
import './Footer.css'
import {FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone,  FaWhatsapp} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
<div className='left'>
    <div className='location'>
 <FaHome  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
 <div>
    <p>52,Sai Suman Nagar,</p>
    <p>Indore,M.P.</p>
 </div>
    </div>

<div className='phone'>
    <h4><FaPhone  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
9926967198</h4>

</div>
<div className='email'>
    <h4><FaMailBulk  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
sawnerrohit23@gmail.com</h4>

</div>
</div>
<div className='right'>
<h4>  About The Company</h4>
<p>
    This is Me Rohit Sawner. I am Frontend Developer. I enjoying a new project and learing new skills
</p>
<div  className='socila'>
<FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/>
<FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
<FaWhatsapp size={30} style={{color:"#fff", marginRight:"1rem"}}/>
</div>
</div>
        </div>
    </div>
  )
}

export default Footer
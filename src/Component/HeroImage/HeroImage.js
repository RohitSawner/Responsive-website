import React,{Link} from 'react-router-dom'
import './Hero.css'
import marvel from "../Images/marvel.jpg"
const HeroImage = () => {
  return (
    <div className='Hero'>
      <div className='mask'>
 <img className='marvel' alt='img' src={marvel}/>
      </div>
      <div className='content'>
 <p>
    HI , I AM ROHIT SAWNER.
 </p>
 <h1>Frontend Developer.</h1>
 <div>
    <Link to='/Project' className="btn">Project</Link>
    <Link to='/Contact' className= "btn btn-light">Contact</Link>
 </div>
      </div>
    </div>
  )
}

export default HeroImage;

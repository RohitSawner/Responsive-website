import "./card.css"
import React from 'react'
import res from '../Images/res.jpg'
import { NavLink } from "react-router-dom"
const card = () => {
  return (
    <div className="work-container">
        <h1 className="Project Heading">Project</h1>
<div className="Project-container">
    <div className="Project-card">
<img src={res} alt="imagea"/>
<h2 className="Project-title">Restuarnt Webite</h2>
<div  className="pro-details">
<p>Developed an informative about section highlighting the restaurant's expertly crafted dishes
Created menu cards and special offers for the exploring food section</p>
<div>
    <NavLink to='url.com' className="btn">
View
    </NavLink>

    <NavLink to='url.com' className="btn">
Souce
    </NavLink>
</div>
</div>
    </div>
</div>
    </div>
  )
}

export default card
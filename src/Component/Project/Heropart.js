import React, { Component } from 'react'
import './Herop.css'
class Heropart extends Component {
  render() {
    return (
      <div className='part'>
<div className='head'>
<h1>{this.props.heading}</h1>
<p>{this.props.text}</p>
</div>

      </div>
    )
  }
}

export default Heropart
import React from 'react'
import "./swipper.css"
const Swipper = (props) => {
  return (
    <div className='sliding-content'>
      <div className="swipper-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="swipper-text">
        <h2>{props.name}</h2>
        <span>{props.position}</span>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Swipper

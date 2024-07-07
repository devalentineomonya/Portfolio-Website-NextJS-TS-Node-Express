import React from 'react'
import "./testimonial.css"
const Testimonial = (props=null) => {
  return (
    <div className='sliding-content'>
      <div className="testimonial-image">
        <img src={props?.image} alt={props?.name} />
      </div>
      <div className="testimonial-text">
        <h2>{props?.name}</h2>
        <span>{props?.position}</span>
        <p>{props?.description}</p>
      </div>
    </div>
  )
}

export default Testimonial

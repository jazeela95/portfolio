import React from 'react'
import "./Cars.css";

function Cards({image,heading,design}) {
  return (
    <div className='Card' >
        <img src={image} alt=""></img>
        <span>{heading}</span>
        <span>{design}</span>
        <button className='button-card'>Learn more</button>

    </div>
  )
}

export default Cards
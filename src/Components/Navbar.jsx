import React from 'react'
import "./Navbar.css";
import Toggle from './Toggle/Toggle';
import {Link} from 'react-scroll';

function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Andrew</div>
            <Toggle></Toggle>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                
                <ul style={{listStyleType:"none"}}>
                    <Link to="Navbar" smooth={true}><li>Home</li></Link>
                    <Link to="services" smooth={true}><li>Service</li></Link>
                    <Link to="Experience" smooth={true}><li>Experience</li></Link>
                    <Link to="portfolio" smooth={true}><li>portfolio</li></Link>
                    <Link to="Testimonial" smooth={true}><li>Testimonial</li></Link>
                </ul>
             
            <button  className='button n-button '>Contact</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar


import React from 'react'
import "./Footer.css"
import wave from "../Images/wave.png"
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook ,AiFillGithub} from "react-icons/ai";


function Footer() {
  return (
    <div className='footer'>
        <img src={wave} alt="" style={{width:"100%"}}></img>
        <div className='footer-condent' style={{position:"absolute",gap:"4rem"}}>
            <span >
              Zainkeepscode@gmail.com
            </span>
            <div className='footer-icons'>
            <BsInstagram size="2.5rem" className='footen-img'></BsInstagram>
            <AiFillFacebook size="2.5rem" className='footen-img'></AiFillFacebook>
            <AiFillGithub size="2.5rem" className='footen-img'></AiFillGithub>
           
            </div>

        </div>


    </div>
  )
}

export default Footer
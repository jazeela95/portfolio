import React from 'react'
import "./Work.css";
import upwork from "../Images/Upwork.png";
import fiverr from "../Images/fiverr.png";
import amazon from "../Images/amazon.png";
import shopify from "../Images/Shopify.png";
import facebook from "../Images/Facebook.png";
import { motion } from "framer-motion"


function Works() {
  
  return (
    <div className='work'>
        {/* Left side */}
        <div className='awesome'>
            <span>Work for all these</span>
            <span>Brands & Clients</span>
            <span>lorem ispum is simpley dummy text of printing 
                of printing lorem<br></br>
                ispum is simply dummy text of printing
            </span>
            <span>lorem ispum is simpley dummy text of printing 
                of printing lorem<br></br>
                ispum is simply dummy text of printing
            </span>
           
            <button className='button s-button'>Download CV</button>
            
            <div className='blur' style={{background:"#C1F5FFrgb(238 210 255)"}}></div>
        </div>
        {/* right side */}

        <div className='w-right'>
            <motion.div
             initial={{rotate:45}}
             whileInView={{rotate:0}}
             viewport={{margin:"-40px"}}
             transition={{duration:3.5,type:"spring"}}
             className='w-maincircle'>
            <div className='w-secondarycircle'>
                <img src={upwork} alt=""/>
            </div>
            <div className='w-secondarycircle'>
                <img src={fiverr} alt=""/>
            </div>
            <div className='w-secondarycircle'>
                <img src={amazon} alt=""/>
            </div>
            <div className='w-secondarycircle'>
                <img src={shopify} alt=""/>
            </div>
            <div className='w-secondarycircle'>
                <img src={facebook} alt=""/>
            </div>
            </motion.div>
            {/* backgound circle */}
            <div className='backgroundcircle bluecircle'></div>
            <div className='backgroundcircle yellowcircle'></div>

        </div>

        </div>



  )
}

export default Works
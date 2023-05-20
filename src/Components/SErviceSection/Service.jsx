import React from 'react'
import "./Service.css";
import Heartemoji from "../Images/heartemoji.png";
import glasses from "../Images/glasses.png";
import humble from "../Images/humble.png";
import Resume from "./Resume.pdf";
import Cards from './Cards';
import { motion } from "framer-motion"



function Service() {
    const transitions={duration:1,type:"spring"};
  return (
    <div className='services' id="services">
        {/* left side */}
        <div className='awesome'>
            <span>My Awesome</span>
            <span>Services</span>
            <span>lorem ispum is simpley dummy text of 
                of printing lorem<br></br>
                ispum is simply dummy text of printing
            </span>
            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur' style={{background:"#C1F5FFrgb(238 210 255)"}}></div>
        </div>
        {/* Cards div right */}
        <div className='cards'>
            <motion.div 
              initial={{left:"17rem"}}
              whileInView={{left:"22rem"}}
              transition={transitions}
            style={{left:"22rem",top:"-5rem"}}>
                <Cards
                image={Heartemoji}
                heading={"Design"}
                design={"Figma,Sketch,Photoshop,Adobe Illustration,ADobe"}>

                </Cards>
            </motion.div>
            <motion.div  
            initial={{left:"10rem"}}
            whileInView={{left:"5rem"}}
            transition={transitions}
            style={{left:"5rem",top:"1rem"}}>
                <Cards
                image={glasses}
                heading={"Developer"}
                design={"HTML,Css,Java script,Adobe Illustration,ADobe Xd"}>

                </Cards>
            </motion.div >
            <motion.div
            initial={{left:"22rem"}}
            whileInView={{left:"19rem"}}
            transition={transitions}
            style={{left:"19rem",top:"14rem"}}>
                <Cards
                image={humble}
                heading={"UI/Ux"}
                design={"Figma,Sketch,Photoshop,Adobe Illustration,ADobe"}>

                </Cards>
            </motion.div >
            <div className='blur s-blur1'></div>
            <div className='blur s-blur2'style={{background:"rgb(238, 157, 202)"}}></div>
        </div>
    </div>
  )
}

export default Service
import React from 'react'
import "./Intro.css";
import github from "../Images/github.png";
import linkedinicon from "../Images/linkedin.png";
import instagramicon from "../Images/instagram.png";
import victor1 from "../Images/Vector1.png";
import victor2 from "../Images/Vector2.png";
import boy from "../Images/boy.png";
import thumbup from "../Images/thumbup.png";
import crwown from "../Images/crown.png";
import glassesimoji from "../Images/glassesimoji.png";
import FloatingDiv from '../Floatingdiv/FloatingDiv';
import { motion } from "framer-motion"

function Intro() {
  const transitions={duration:2,type:"spring"};
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
            <span>Hy! I Am </span>
            <span>Andrew Thomas</span>
            <span>Frontend Developer with high level of experience in web
             designing and developement,<br></br>producting the
             quality work</span>
             </div>
             <button className='button i-button'>Hire me</button>
             <div className='intro-icon'>
                <a href="https://github.com/"><img src={github} alt=""/></a>
                <a href="https://www.linkedin.com/"><img src={linkedinicon} alt=""/></a>
                <a href="https://www.instagram.com/"><img src={instagramicon} alt=""/></a>
             </div>
        </div>
        <div className='i-right'>
          <img src={victor1} alt=''/>
          <img src={victor2} alt=''/>
          <img src={boy} alt=''/> 
          <motion.img
          initial={{left:"-36%"}}
          whileInView={{left:"-25%"}}
          transition={transitions}
          className="flaotingdiv"
          src={glassesimoji} alt=''/>
        
        <motion.div 
         initial={{left:"-25%",top:"4%"}}
         whileInView={{left:"-6%"}}
         transition={transitions}
          className='flaotingdiv'
        style={{marginTop:"-4%",marginLeft:"60%"  }}>
          <FloatingDiv className image={crwown} txt1="Web" txt2="Developer"/>
        </motion.div>
        <motion.div
        initial={{left:"9rem",top:"1rem"}}
        whileInView={{left:"0rem"}}
        transition={transitions}
        className='flaotingdiv'
        style={{marginTop:"19rem",left:"-5%" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award"/>   
        </motion.div>
          {/* Blur div */}
          <div className='blur' style={{backgroundColor:"rgb(238 210 255)"}}></div>
          <div className='blur' style={{backgroundColor:"#C1F5FF",
          top:"17rem",width:"21rem",left:"-25%",height:"11rem"}}></div>
        </div>
    
    
    </div>
  )
}

export default Intro
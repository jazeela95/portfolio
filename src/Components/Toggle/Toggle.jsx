import React from 'react'
import "./Toggle.css"
import {BsMoonStars,BsSun} from "react-icons/bs";
import { themeContext } from "../../Context";
import { useContext } from 'react';

function Toggle() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  const handleClick=()=>{
    theme.dispatch({type:"toggle"})
  }
  return (
    <div className='Toggle' onClick={handleClick}>
        <BsMoonStars/>
        <BsSun/>
        <div 
        className='t-button' style={darkMode?{left:"2px"}:{right:"2px"}}>
          
        </div>


    </div>
  )
}

export default Toggle
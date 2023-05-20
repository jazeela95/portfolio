import React from 'react'
import "./Testimonial.css";
import {Swiper,SwiperSlide} from "swiper/react";
import portfilepicl from "../Images/profile1.jpg";
import portfilepic2 from "../Images/profile2.jpg";
import portfilepic3 from "../Images/profile3.jpg";
import portfilepic4 from "../Images/profile4.jpg";
import { Pagination } from 'swiper';
import "swiper/css/pagination";
import "swiper/css";

function Testimonial() {
    const client=[
        {
           
            img:portfilepicl,
            review:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        },
        
        {
         
            img:portfilepic2,
            review:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        },
        
        {
            img:portfilepic3,
            review:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        },
        
        {
            img:portfilepic4,
            review:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        },
            
    ]
  return (
    <div className='t-wrapper' id="Testimonial">
        <div className='t-heading'>
        <span>Clients always get</span>
        <span>Exceptional work</span>
        <span>from me...</span>
        </div>
        <div className='blur t-blur1' style={{backgroundColor:"var(--purple)"}}>
       <h1 style={{color:"black"}}> haiiiii</h1>
        </div>
        <div className='blur t-blur2' style={{backgroundColor:"skyblue"}}>
            </div>
        
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}>
            {
                client.map((newClients,index)=>{
                    return(
                    <SwiperSlide Key={index}>
                        <div className='testmonial'>
                       <img src={newClients.img} alt=""/>
                       <span>{newClients.review}</span>

                        </div>
                    </SwiperSlide>
                    

                 ) })
            }

        </Swiper>
        </div>
    
  )
}

export default Testimonial
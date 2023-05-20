import React from 'react'
import "./Portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Ecommerce from "../Images/ecommerce.png";
import HOC from "../Images/hoc.png";
import musicapp from "../Images/musicapp.png";
import sidebar from "../Images/sidebar.png";
import 'swiper/css';
function Portfolio() {
  return (
    <div>
        {/* Heading */}
        <div className='maindiv' id="portfolio">
        <span>Recent Project</span>
        <span>PortFolio</span>
        </div>
        {/* slider */}
        <div  className='portfolio'>
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        breakpoints={{
            640: {
              slidesPerView: 3,
            },
            100: {
              slidesPerView: 1,
            },
          }}
        >
            <SwiperSlide>
                <img src={sidebar} alt=""/>
            </SwiperSlide>
           
            <SwiperSlide>
                <img src={Ecommerce} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={musicapp} alt=""/>
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Portfolio
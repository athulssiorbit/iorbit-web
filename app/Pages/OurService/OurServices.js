"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import './style.css'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const OurServices = () => {
  const images = [
    "/device.webp","/chain.png","/device.webp", "/consult.webp", "/doctor.webp",
  ]
  const text = ["iOrbit Helath System","White Labelled Designs","Device Development","Technical Consultation","Verification And Validation Services"]
  return (
    <section class="our-service-section">
      <>

        <h2>
          Our Services
        </h2>

        <Swiper
         autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
          // loop={true}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            scale: .9,
            rotate: 0,
            stretch: 1,
            depth: 100,
            modifier: 1,
            slideShadows: true,

          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {
            Array.from({ length: 5 }).map((item, index) => {
              return (
                <SwiperSlide style={{backgroundImage:`url(${images[index]})`}}>
                  <div class="swiper-slide-content">
                    <img src='/open-new.svg'/>
                  <h4>
                 {text[index]}
                  </h4>
                    {/* <img src={images[index]} /> */}
                  </div>
                </SwiperSlide>
              )
            }
            )
          }

        </Swiper>
      </>
    </section>
  )
}

export default OurServices
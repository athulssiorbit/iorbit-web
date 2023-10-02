"use client"
import React from 'react'
import './Testimonial.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section class="testimonial-section">
            <div class="testimonial-head-container">
                <div class="union">
                    <img src='/union.svg' />
                </div>
                <h2>What Our Clients Say</h2>
            </div>
            <div class="testimonial-card-cont">

                <div class="testimonial-card-cont-bg">

                    <div class="testimonial-card-cont-bg-graphics">
                        <img src='/Vector.svg' />
                        <img src='/Vector-1.svg' />
                        <img src='/Vector-2.svg' />
                        <img src='/Vector-3.svg' />
                        <div></div>
                    </div>


                </div>
                <div class="card-container">
                    <Swiper
                        autoplay={{
                            "delay": 3000,
                            "disableOnInteraction": false
                        }}
                        grabCursor={true}
                        loop={true}
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            Array.from({ length: 6 }).map((item, index) => {
                                return (
                                    <SwiperSlide>
                                        <img class="glyph" src='glyph.svg' />
                                        <div class="card-prof-cont">
                                            <img class='prof-pic' src='/doctor.webp' />
                                            <div>
                                                <h4>Leslie Alexander</h4>
                                                <img class='rating' src='/rating.svg' />
                                            </div>
                                        </div>
                                        <p>
                                            Randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing for repeat predefined chunks as necessary
                                        </p>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Testimonials
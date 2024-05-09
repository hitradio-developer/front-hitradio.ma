"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import Slide1 from '../../public/slider/slider2.jpg'
import Slide2 from '../../public/slider/slider3.jpg'
import Slide3 from '../../public/slider/slider4.jpg'
import Slide4 from '../../public/slider/slider5.png'
import Slide5 from '../../public/slider/slider6.jpg';
import Slide6 from '../../public/slider/slider7.jpg';
import NextNews from '../../public/logo/Arrow_up.png';

export default function Slide() {
  return (
    <>
        <div className="sliderHome">
            <div className="container max-w-screen-xl mx-auto p-5 relative">
                <h2 className='py-4 font-medium text-center text-3xl mb-4'>Découvre aussi nos opérations</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        992: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        }
                      }}
                    className="mySwiper mb-4" >
                    <SwiperSlide className=''>
                        <Image src={Slide1} alt={''} className='transition duration-300 ease-in-out hover:scale-110'></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Slide2} alt={''} className='transition duration-300 ease-in-out hover:scale-110'></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Slide3} alt={''} className='transition duration-300 ease-in-out hover:scale-110'></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Slide4} alt={''} className='transition duration-300 ease-in-out hover:scale-110'></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Slide5} alt={''} className='transition duration-300 ease-in-out hover:scale-110'></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Slide6} alt={''} className='transition duration-300 ease-in-out hover:scale-110'></Image>
                    </SwiperSlide>
                </Swiper>
                <div className='logo-end-center'>
                    <Image className="img-plus-end" src={NextNews} 
                    alt="Picture of the News" width={40} />
                   
                </div>
            </div>
            
        </div>
    </>
  );
}

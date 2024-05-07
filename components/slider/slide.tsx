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

import Slide1 from '../../public/podcast/podcats1.jpeg'
import Slide2 from '../../public/podcast/podcats2.jpeg'
import Slide3 from '../../public/podcast/podcats3.jpeg'
import Slide4 from '../../public/podcast/podcats4.jpeg'
import Slide5 from '../../public/video/video1.jpg';
import Slide6 from '../../public/video/video2.jpeg';
export default function Slide() {
  return (
    <>
        <div className="sliderHome bg-gray-400">
            <div className="container max-w-screen-xl mx-auto p-5 relative">
                <h2 className='py-4 font-medium text-3xl text-black'>Slider</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='itemSlide'>
                        <Image src={Slide1} alt={''}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Slide2} alt={''}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Slide3} alt={''}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Slide4} alt={''}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Slide5} alt={''}></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={Slide6} alt={''}></Image>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </>
  );
}

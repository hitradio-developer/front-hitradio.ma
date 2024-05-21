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
import service from '../../public/logo/services.png';
import NextNews from '../../public/logo/Arrow_up.png';
import Slide1 from '../../public/slider/slider2.jpg'
import Slide2 from '../../public/slider/slider3.jpg'
import Slide3 from '../../public/slider/slider4.jpg'
import Slide4 from '../../public/slider/slider5.png'
import Slide5 from '../../public/slider/slider6.jpg';
import Slide6 from '../../public/slider/slider7.jpg';


export default function Slide() {
  return (
    <>
        <div className="sliderHome">
            <div className="container mx-auto p-5">
                <h2 className='py-4 font-medium text-center text-3xl mb-4'>Découvrez aussi nos opérations</h2>
                <div className='grid grid-cols-2'>
                    <div className=''>
                    <Image src={service} alt={''} className='transition duration-300 ease-in-out'></Image>
                    </div>
                    <div className='service'>
                        <ul>
                            <li>
                            <Image src={Slide1} alt={''} className='transition duration-300 service-img mr-52'></Image>
                            </li>
                            <li>
                            <Image src={Slide2} alt={''} className='transition duration-300 service-img mr-40'></Image>
                            </li>
                            <li>
                            <Image src={Slide3} alt={''} className='transition duration-300 service-img mr-40'></Image>
                            </li>
                            <li>
                            <Image src={Slide4} alt={''} className='transition duration-300 service-img mr-52'></Image>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='logo-end-center'>
                    <Image className="img-plus-end" src={NextNews} 
                    alt="Picture of the News" width={40} />
                </div>
            </div>
        </div>
    </>
  );
}

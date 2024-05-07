import Image from 'next/image'
import Web6 from '../../public/WEB-RADIO/HR_WebRadio-Way-Way.jpg'
import Web2 from '../../public/WEB-RADIO/Mgharba_new.png'
import Web3 from '../../public/WEB-RADIO/Party_new.png'
import Web4 from '../../public/WEB-RADIO/Tiktok_new.png'
import Web5 from '../../public/WEB-RADIO/Urban__new.png'
import Web1 from '../../public/WEB-RADIO/classic_new.jpg'
import NextNews from '../../public/logo/Arrow-3x.png'

import imageAll from '../../public/podcast/podcats4.jpeg'

export default function operation() {
    return (
      <>
    <div className="news web-radio">
        <div className="container mx-auto px-2">
            <h2 class="py-4" style={{ fontFamily: "'Dancing Script', cursive, sans-serif" }} >
               Web Radios
            </h2>
            <div class="w-full overflow-hidden relative">
                <div class="w-full h-full absolute">
                    <div className="w-1/4 h-full absolute z-50 left-0" style={{ background: 'linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                    <div className="w-1/4 h-full absolute z-50 right-0" style={{ background: 'linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                </div>

                <div class="carousel-items flex items-center justify-center" 
                style={{ width: 'fit-content', animation: 'carouselAnim 10s infinite alternate linear' }}>

                    <div class="carousel-focus flex items-center flex-col relative mx-5 my-10 px-4 py-3 rounded-lg shadow-lg"  style={{ width: '200px' }}>   
                        <Image className="transition duration-300 ease-in-out  podcast-img"
                            src={Web1} alt="Picture of the News" />
                    </div>

                    <div class="carousel-focus flex items-center flex-col relative mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '200px' }}>
                    
                        <Image className="transition duration-300 ease-in-out  podcast-img"
                            src={Web2} alt="Picture of the News" />               
                    </div>

                    <div class="carousel-focus flex items-center flex-col relative mx-5 my-10 px-4 py-3 rounded-lg shadow-lg" style={{ width: '200px' }}>
                
                        <Image className="transition duration-300 ease-in-out  podcast-img"
                        src={Web3} alt="Picture of the News" />               
                    </div>

                    <div class="carousel-focus flex items-center flex-col relative mx-5 my-4 px-4 py-3 rounded-lg shadow-lg" style={{ width: '200px' }}>
                    
                        <Image className="transition duration-300 ease-in-out  podcast-img"
                        src={Web4} alt="Picture of the News" />
                    </div>

                    <div class="carousel-focus flex items-center flex-col relative mx-5 my-4 px-4 py-3 rounded-lg shadow-lg" style={{ width: '200px' }}>
                
                        <Image className="transition duration-300 ease-in-out  podcast-img"
                        src={Web5} alt="Picture of the News" />
                    </div>
                    
                    <div class="carousel-focus flex items-center flex-col relative mx-5 my-4 px-4 py-3 rounded-lg shadow-lg" style={{ width: '200px' }}>
                        
                        <Image className="transition duration-300 ease-in-out podcast-img"
                        src={Web6} alt="Picture of the News" />               
                    </div>

                    <div class="carousel-focus flex items-center flex-col relative mx-5 my-4 px-4 py-3 rounded-lg shadow-lg" style={{ width: '200px' }}>
                        
                        <Image className="transition duration-300 ease-in-out podcast-img"
                        src={Web1} alt="Picture of the News" />              
                    </div>

                    <div class="carousel-focus flex items-center flex-col relative mx-5 my-4 px-4 py-3 rounded-lg shadow-lg" style={{ width: '200px' }}>
                        
                        <Image className="transition duration-300 ease-in-out podcast-img"
                        src={Web2} alt="Picture of the News" />         
                    </div>
                </div>

            </div>
            <div className='plus'>
                <Image className="img-plus flex items-end py-4 mr-4" src={NextNews} alt="Picture of the News" width={40} />
                <span className='plus'>PLUS DE WEB RADIOS</span>
            </div>
        </div>
    </div>
      </>
    );
  }
  
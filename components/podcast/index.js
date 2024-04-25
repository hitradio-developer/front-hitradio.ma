import Image from 'next/image'
import Podcats1 from '../../public/podcast/podcats1.jpeg'
import Podcats2 from '../../public/podcast/podcats2.jpeg'
import Podcats3 from '../../public/podcast/podcats3.jpeg'
import Podcats4 from '../../public/podcast/podcats4.jpeg'
import NextNews from '../../public/logo/Arrow-3x.png'


export default function podcast() {
    return (
      <>
      
        <div className="container mx-auto podcast px-2">
            <h2 className='py-8'>PODCASTS.</h2>
            <div className="text-center grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                <div className="">
                    <Image className="transition duration-300 ease-in-out hover:scale-110 podcast-img"
                     src={Podcats1} alt="Picture of the News" />
                    
                </div>
                <div className="">
                    <Image className="transition duration-300 ease-in-out hover:scale-110 podcast-img" 
                    src={Podcats2} alt="Picture of the News" />
                    
                </div>
                <div className="">
                    <Image className="transition duration-300 ease-in-out hover:scale-110 podcast-img" 
                    src={Podcats3} alt="Picture of the News" />
                   
                </div>
                <div className="">
                    <Image className="transition duration-300 ease-in-out hover:scale-110 podcast-img" 
                    src={Podcats4} alt="Picture of the News" />
                   
                </div>
                </div>
            <div className="text-center grid grid-cols-3 gap-4 mb-8">
                <div className=""></div>
                <div className=""></div>
                <div className="">
                    <Image className="img-plus flex items-end py-4 mr-4" src={NextNews} alt="Picture of the News" 
                    width={40} />
                    <span>PLUS DE PODCASTS</span>
                </div>
            </div>
        </div>
      
      </>
    );
  }
  
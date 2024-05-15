import Image from 'next/image'
import Podcats1 from '../../public/podcast/podcats1.jpeg'
import Podcats2 from '../../public/podcast/podcats2.jpeg'
import Podcats3 from '../../public/podcast/podcats3.jpeg'
import Podcats4 from '../../public/podcast/podcats4.jpeg'
import NextNews from '../../public/logo/Arrow-3x.png'
import Play from '../../public/logo/Play.png'


export default function videos() {
    return (
      <>
      <div className='news'>
        <div className="container mx-auto px-2">
            <h2 className='py-4'>Vidéos</h2>
            <div className="max-w-screen-xl mx-auto relative">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    <div className="sm:col-span-6 lg:col-span-8 ">
                        <a href="#">
                            <div className="bg-cover text-center rounded-lg transition-all duration-300 hover:scale-110  relative h-96 image-container"
                            title="Woman holding a mug">
                                <Image className="w-full h-auto relative z-0  vides-img"
                                src={Podcats1} alt="Picture of the Videos" />
                            </div>
                        </a>
                    </div>
                    <div className="sm:col-span-6 lg:col-span-4">
                        <div className=" items-start mb-3 pb-3">
                            <a href="#" className="inline-block mr-3">
                                <div className="bg-cover bg-center relative transition-all duration-300 hover:scale-110 " >
                                <Image className="w-full h-auto relative z-0 rounded-lg 
                                podcast-img"
                                    src={Podcats3} alt="Picture of the Videos" />
                                    
                                </div>
                            </a>
                        </div>
                        <div className=" items-start mb-3 pb-3">
                            <a href="#" className="inline-block mr-3">
                                <div className="bg-cover bg-center relative transition-all duration-300 hover:scale-110 " >
                                <Image className="w-full h-auto relative z-0 rounded-lg 
                                podcast-img"
                                    src={Podcats4} alt="Picture of the Videos" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="sm:col-span-6 lg:col-span-4 ">
                        <div className=" items-start mb-3 pb-3">
                            <a href="#" className="inline-block mr-3">
                                <div className="bg-cover bg-center relative transition-all duration-300 hover:scale-110 " >
                                <Image className="w-full h-auto relative z-0 rounded-lg 
                                podcast-img"
                                    src={Podcats2} alt="Picture of the Videos" />
                                    
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="sm:col-span-6 lg:col-span-4 ">
                        <div className=" items-start mb-3 pb-3">
                            <a href="#" className="inline-block mr-3">
                                <div className="bg-cover bg-center relative transition-all duration-300 hover:scale-110 " >
                                <Image className="w-full h-auto relative z-0 rounded-lg 
                                podcast-img"
                                    src={Podcats3} alt="Picture of the Videos" />
                                    
                                </div>
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div className='plus'>
                    <Image className="img-plus flex items-end py-4 mr-4" src={NextNews} alt="Picture of the News" width={40} />
                    <span>PLUS DE VIDÉOS</span>
                </div>
            </div>
        </div>
      </div>
      </>
    );
  }
  
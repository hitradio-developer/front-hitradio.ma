import Image from 'next/image'
import Video1 from '../../public/video/video1.jpg'
import Video4 from '../../public/video/jul-battistu.jpg'
import Video2 from '../../public/video/video2.jpeg'
import Video3 from '../../public/video/vide3.jpeg'
import NextNews from '../../public/logo/Arrow-3x.png'
import Play from '../../public/logo/Play.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


export default function videos() {
    return (
      <>
      <div className='news'>
        <div className="container mx-auto px-2">
            <h2 className='py-4'>Vidéos</h2>
            <div className="max-w-screen-xl mx-auto relative">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
                    <div className="sm:col-span-6 lg:col-span-6 ">
                        <a href="#">
                            <div className="bg-cover text-center rounded-lg transition-all duration-300 hover:scale-110  
                            relative h-96 image-container"
                            title="Woman holding a mug">
                                <Image className="w-full h-auto relative z-0  vides-img"
                                src={Video1} alt="Picture of the Videos" />
                                <div className='paly-video'>
                                <Image className='' src={Play} alt='Play video' />
                                </div>
                            </div>
                        </a>
                        <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                            <div className="">
                                <a href="#" className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">Revenge
                                    of the Never Trumpers
                                </a>
                                    <p className="text-gray-700 text-base mt-2">Meet the Republican dissidents fighting to push Donald Trump
                                    out of office—and reclaim their party</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-6 lg:col-span-3 ">
                        <div className=" items-start mb-3 pb-3">
                            <a href="#" className="inline-block mr-3">
                                <div className="bg-cover bg-center relative transition-all duration-300 hover:scale-110 " >
                                <Image className="w-full h-auto relative z-0 rounded-lg img-second-vedio
                               "
                                    src={Video1} alt="Picture of the Videos" />
                                    <div className=''>
                                    <Image className='paly-video-mini' src={Play} alt='Play video' />
                                    </div>
                                </div>
                            </a>
                            <div className="text-sm ">
                                <a href="#" className="text-gray-900 font-bold hover:text-indigo-600 leading-5">
                                    <div>Cristiano Ronaldo :
                                    <p className=''> of Juventus FC looks dejected during the...</p> 
                                    </div>
                                </a>
                                <div className="flex items-end">
                                    <p className="text-gray-600 text-xs mt-2">Le 09/04/2024</p>
                                </div>
                            </div>
                        </div>
                        <div className=" items-start mb-3 pb-3">
                            <a href="#" className="inline-block mr-3">
                                <div className="bg-cover bg-center relative transition-all duration-300 hover:scale-110 " >
                                <Image className="w-full h-auto relative z-0 rounded-lg img-second-vedio
                                vides-img"
                                    src={Video3} alt="Picture of the Videos" />
                                    <div className=''>
                                    <Image className='paly-video-mini' src={Play} alt='Play video' />
                                    </div>
                                </div>
                            </a>
                            <div className="text-sm ">
                                <a href="#" className="text-gray-900 font-bold hover:text-indigo-600 leading-5">
                                    <div>Cristiano Ronaldo :
                                    <p className=''> of Juventus FC looks dejected during the...</p> 
                                    </div>
                                </a>
                                <div className="flex items-end">
                                    <p className="text-gray-600 text-xs mt-2">Le 09/04/2024</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="sm:col-span-6 lg:col-span-3">
                        <div className=" items-start mb-3 pb-3">
                            <a href="#" className="inline-block mr-3">
                                <div className="bg-cover bg-center relative transition-all duration-300 hover:scale-110 " >
                                <Image className="w-full h-auto relative z-0 rounded-lg img-second-vedio "
                                    src={Video2} alt="Picture of the Videos" />
                                    <div className=''>
                                    <Image className='paly-video-mini' src={Play} alt='Play video' />
                                    </div>
                                </div>
                            </a>
                            <div className="text-sm ">
                                <a href="#" className="text-gray-900 font-bold hover:text-indigo-600 leading-5">
                                    <div>Cristiano Ronaldo :
                                    <p className=''> of Juventus FC looks dejected during the...</p> 
                                    </div>
                                </a>
                                <div className="flex items-end">
                                    <p className="text-gray-600 text-xs mt-2">Le 09/04/2024</p>
                                </div>
                            </div>
                        </div>
                        <div className=" items-start mb-3 pb-3">
                            <a href="#" className="inline-block mr-3">
                                <div className="bg-cover bg-center relative transition-all duration-300 hover:scale-110 " >
                                <Image className="w-full h-auto relative z-0 rounded-lg img-second-vedio"
                                    src={Video4} alt="Picture of the Videos" />
                                    <div className=''>
                                    <Image className='paly-video-mini' src={Play} alt='Play video' />
                                    </div>
                                </div>
                            </a>
                            <div className="text-sm ">
                                <a href="#" className="text-gray-900 font-bold hover:text-indigo-600 leading-5">
                                    <div>Cristiano Ronaldo :
                                    <p className=''> of Juventus FC looks dejected during the...</p> 
                                    </div>
                                </a>
                                <div className="flex items-end">
                                    <p className="text-gray-600 text-xs mt-2">Le 09/04/2024</p>
                                </div>
                            </div>
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
  
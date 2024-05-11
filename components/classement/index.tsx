import Image from 'next/image'
import Video1 from '../../public/video/video1.jpg'
import Video2 from '../../public/video/video2.jpeg'
import Video3 from '../../public/video/vide3.jpeg'
import Classement1 from '../../public/video/classement1.jpg'
import Classement2 from '../../public/video/classement2.jpg'
import Classement3 from '../../public/video/classement3.jpg'
import Classement4 from '../../public/video/classement4.jpg'
import Classement5 from '../../public/video/classement5.jpg'
import Classement6 from '../../public/video/classement6.jpg'

import NextNews from '../../public/logo/Arrow-3x.png'
import Play from '../../public/logo/Play.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function classement() {
    return (
      <>
      <div className='news classement'>
        <div className="container mx-auto px-2">
            <h2 className='py-4'>Classement</h2>
            <div className="max-w-screen-xl mx-auto relative">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
                    
                    <div className="sm:col-span-2 lg:col-span-4">
                        <div className="flex items-start mb-3 pb-3">
                            <div className="text-sm m-4">
                                <p className="text-gray-600 text-3xl">1</p>
                            </div>
                            <a href="#" className="inline-block mr-3">
                                <div className="w-[110px] bg-cover bg-center relative shadow-lg " >
                                <Image className="w-full relative z-0 rounded-lg object-cover transition-all duration-300 h-[94px] "
                                src={Video1} alt="Picture of the Videos" />
                                </div>
                            </a>
                            <div className="text-sm">
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">JEADY JAY HOLY FADA.</a>
                                <p>good work for today in this compt</p>
                            </div>
                            <div><Link href="#">
                                <FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '24px' }} />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-start mb-3 pb-3">
                            <div className="text-sm m-4">
                                <p className="text-gray-600 text-3xl">2</p>
                            </div>
                            <a href="#" className="inline-block mr-3">
                                <div className="w-[110px] bg-cover bg-center relative shadow-lg " >
                                <Image className="w-full relative z-0 rounded-lg object-cover transition-all duration-300 h-[94px] "
                                src={Video2} alt="Picture of the Videos" />
                                </div>
                            </a>
                            <div className="text-sm">
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">JEADY JAY HOLY FADA.</a>
                                <p>good work for today in this compt</p>
                            </div>
                            <div><Link href="#">
                                <FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '24px' }} />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-start mb-3 pb-3">
                            <div className="text-sm m-4">
                                <p className="text-gray-600 text-3xl">3</p>
                            </div>
                            <a href="#" className="inline-block mr-3">
                                <div className="w-[110px] bg-cover bg-center relative shadow-lg " >
                                <Image className="w-full relative z-0 rounded-lg object-cover transition-all duration-300 h-[94px] "
                                src={Video3} alt="Picture of the Videos" />
                                </div>
                            </a>
                            <div className="text-sm">
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">JEADY JAY HOLY FADA.</a>
                                <p>good work for today in this compt</p>
                            </div>
                            <div><Link href="#">
                                <FontAwesomeIcon icon={faHeart} style={{ color: 'antiquewhite', fontSize: '24px' }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-4">
                        <div className="flex items-start mb-3 pb-3">
                            <div className="text-sm m-4">
                                <p className="text-gray-600 text-3xl">4</p>
                            </div>
                            <a href="#" className="inline-block mr-3">
                                <div className="w-[110px] bg-cover bg-center relative shadow-lg " >
                                <Image className="w-full relative z-0 rounded-lg object-cover transition-all duration-300 h-[94px] "
                                src={Classement1} alt="Picture of the Videos" />
                                </div>
                            </a>
                            <div className="text-sm">
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">JEADY JAY HOLY FADA.</a>
                                <p>good work for today in this compt</p>
                            </div>
                            <div><Link href="#">
                                <FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '24px' }} />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-start mb-3 pb-3">
                            <div className="text-sm m-4">
                                <p className="text-gray-600 text-3xl">5</p>
                            </div>
                            <a href="#" className="inline-block mr-3">
                                <div className="w-[110px] bg-cover bg-center relative shadow-lg " >
                                <Image className="w-full relative z-0 rounded-lg object-cover transition-all duration-300 h-[94px] "
                                src={Classement2} alt="Picture of the Videos" />
                                </div>
                            </a>
                            <div className="text-sm">
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">JEADY JAY HOLY FADA.</a>
                                <p>good work for today in this compt</p>
                            </div>
                            <div><Link href="#">
                                <FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '24px' }} />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-start mb-3 pb-3">
                            <div className="text-sm m-4">
                                <p className="text-gray-600 text-3xl">6</p>
                            </div>
                            <a href="#" className="inline-block mr-3">
                                <div className="w-[110px] bg-cover bg-center relative shadow-lg " >
                                <Image className="w-full relative z-0 rounded-lg object-cover transition-all duration-300 h-[94px] "
                                src={Classement3} alt="Picture of the Videos" />
                                </div>
                            </a>
                            <div className="text-sm">
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">JEADY JAY HOLY FADA.</a>
                                <p>good work for today in this compt</p>
                            </div>
                            <div><Link href="#">
                                <FontAwesomeIcon icon={faHeart} style={{ color: 'antiquewhite', fontSize: '24px' }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-4">
                        <div className="flex items-start mb-3 pb-3">
                            <div className="text-sm m-4">
                                <p className="text-gray-600 text-3xl">7</p>
                            </div>
                            <a href="#" className="inline-block mr-3">
                                <div className="w-[110px] bg-cover bg-center relative shadow-lg " >
                                <Image className="w-full relative z-0 rounded-lg object-cover transition-all duration-300 h-[94px] "
                                src={Classement4} alt="Picture of the Videos" />
                                </div>
                            </a>
                            <div className="text-sm">
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">JEADY JAY HOLY FADA.</a>
                                <p>good work for today in this compt</p>
                            </div>
                            <div><Link href="#">
                                <FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '24px' }} />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-start mb-3 pb-3">
                            <div className="text-sm m-4">
                                <p className="text-gray-600 text-3xl">8</p>
                            </div>
                            <a href="#" className="inline-block mr-3">
                                <div className="w-[110px] bg-cover bg-center relative shadow-lg " >
                                <Image className="w-full relative z-0 rounded-lg object-cover transition-all duration-300 h-[94px] "
                                src={Classement5} alt="Picture of the Videos" />
                                </div>
                            </a>
                            <div className="text-sm">
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">JEADY JAY HOLY FADA.</a>
                                <p>good work for today in this compt</p>
                            </div>
                            <div><Link href="#">
                                <FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '24px' }} />
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-start mb-3 pb-3">
                            <div className="text-sm m-4">
                                <p className="text-gray-600 text-3xl">9</p>
                            </div>
                            <a href="#" className="inline-block mr-3">
                                <div className="w-[110px] bg-cover bg-center relative shadow-lg " >
                                <Image className="w-full relative z-0 rounded-lg object-cover transition-all duration-300 h-[94px] "
                                src={Classement6} alt="Picture of the Videos" />
                                </div>
                            </a>
                            <div className="text-sm">
                                <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">JEADY JAY HOLY FADA.</a>
                                <p>good work for today in this compt</p>
                            </div>
                            <div><Link href="#">
                                <FontAwesomeIcon icon={faHeart} style={{ color: 'antiquewhite', fontSize: '24px' }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='plus'>
                <Image className="img-plus flex items-end py-4 mr-4" src={NextNews} alt="Picture of the News" width={40} />
                <span>PLUS DE CLASSEMENT</span>
            </div>
        </div>
       
      </div>
      </>
    );
  }
  
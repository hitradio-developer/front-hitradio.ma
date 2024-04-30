import Image from 'next/image'
import Video1 from '../../public/video/video1.jpg'
import Video2 from '../../public/video/video2.jpeg'
import Video3 from '../../public/video/vide3.jpeg'
import NextNews from '../../public/logo/Arrow-3x.png'
import Play from '../../public/logo/Play.png'


export default function videos() {
    return (
      <>
      <div className='news bg-gray-300'>
        <div className="container mx-auto px-2">
            <h2 className='py-4'>VIDEOS.</h2>
            <div class="max-w-screen-xl mx-auto relative">
                <div class="grid grid-cols-1 sm:grid-cols-12 gap-10">
                    <div class="sm:col-span-6 lg:col-span-7">
                        <a href="#">
                            <div class=" bg-cover text-center overflow-hidden rounded-lg relative" title="Woman holding a mug">
                                <Image className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110 vides-img"
                                src={Video1} alt="Picture of the Videos" />
                                <div className='paly-video'>
                                <Image className='' src={Play} alt='Play video' />
                                </div>
                            </div>
                        </a>
                        <div
                            class="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                            <div class="">
                                
                            <a href="#" class="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">Revenge
                                of the Never Trumpers
                            </a>
                                <p class="text-gray-700 text-base mt-2">Meet the Republican dissidents fighting to push Donald Trump
                                out of office—and reclaim their party</p>
                            </div>
                        </div>
                    </div>
                    <div class="sm:col-span-6 lg:col-span-5">
                        <div class="flex items-start mb-3 pb-3">
                            <a href="#" class="inline-block mr-3">
                                <div class="w-64 h-30 bg-cover bg-center relative" >
                                <Image className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 vides-img"
                                src={Video1} alt="Picture of the Videos" />
                                <div className=''>
                                <Image className='paly-video-mini' src={Play} alt='Play video' />
                                </div>
                                </div>
                            </a>
                            <div class="text-sm">
                                <p class="text-gray-600 text-xs">Aug 18</p>
                                <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 leading-none">Cristiano Ronaldo
                                    of Juventus FC looks dejected during the...</a>
                            </div>
                        </div>
                        <div class="flex items-start mb-3 pb-3">
                            <a href="#" class="inline-block mr-3">
                                <div class="w-64 h-30 bg-cover bg-center relative" >
                                <Image className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 vides-img"
                                    src={Video1} alt="Picture of the Videos" />
                                    <div className=''>
                                        <Image className='paly-video-mini' src={Play} alt='Play video' />
                                    </div>
                                </div>
                            </a>
                            <div class="text-sm">
                                <p class="text-gray-600 text-xs">Aug 18</p>
                                <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 leading-none">Cristiano Ronaldo
                                    of Juventus FC looks dejected during the...</a>
                            </div>
                        </div>
                        <div class="flex items-start mb-3 pb-3">
                            <a href="#" class="inline-block mr-3">
                                <div class="w-64 h-30 bg-cover bg-center relative" >
                                <Image className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 vides-img"
                                src={Video1} alt="Picture of the Videos" />
                                <div className=''>
                                <Image className='paly-video-mini' src={Play} alt='Play video' />
                                </div>
                                </div>
                            </a>
                            <div class="text-sm">
                                <p class="text-gray-600 text-xs">Aug 18</p>
                                <a href="#" class="text-gray-900 font-medium hover:text-indigo-600 leading-none">Cristiano Ronaldo
                                    of Juventus FC looks dejected during the...</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='plus'>
                    <Image className="img-plus flex items-end py-4 mr-4" src={NextNews} alt="Picture of the News" width={40} />
                    <span>PLUS DE VIDEOS</span>
                </div>
            </div>
        </div>
      </div>
      </>
    );
  }
  
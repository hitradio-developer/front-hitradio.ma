import Image from 'next/image'
import News1 from '../../public/images/news1.jpeg'
import News2 from '../../public/images/news2.jpeg'
import News3 from '../../public/images/news3.jpeg'
import News4 from '../../public/images/news4.jpeg'
import NextNews from '../../public/logo/Arrow-3x.png'


export default function news() {
    return (
      <>
      <div className='news'>
        <div class="max-w-screen-xl mx-auto p-5 sm:p-10 relative">
            <h2 className='py-4'>NEWS.</h2>
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-5">
           
                <div class="sm:col-span-5">
                    <a href="#">
                        <div class="bg-cover text-center overflow-hidden img-news-first"
                            // style={{minHeight: '300px', backgroundImage: url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg') }}
                            title="Woman holding a mug">
                                 <Image className="transition duration-300 ease-in-out news-img"
                                src={News1} alt="Picture of the News" />
                        </div>
                    </a>
                    <div class="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div class="">
                            <a href="#"
                                class="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">Revenge
                                of the Never Trumpers</a>
                            <p class="text-gray-700 text-base mt-2">Meet the Republican dissidents fighting to push Donald Trump
                                out of office—and reclaim their party</p>
                        </div>
                    </div>
                </div>

                <div class="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
                    <div class="">
                        <a href="#">
                            <div class="h-40 bg-cover text-center overflow-hidden"
                                // style="backgroundImage: url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                                title="Woman holding a mug">
                                     <Image className="transition duration-300 ease-in-out  news-img"
                                    src={News2} alt="Picture of the News" />
                            </div>
                        </a>
                        <a href="#"
                            class="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                            Steps Back Into Coronavirus Spotlight</a>
                    </div>
                    <div class="">
                        <a href="#">
                            <div class="h-40 bg-cover text-center overflow-hidden"
                                // style="backgroundImage: url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                                title="Woman holding a mug">
                                     <Image className="transition duration-300 ease-in-out  news-img"
                                    src={News3} alt="Picture of the News" />
                            </div>
                        </a>
                        <a href="#"
                            class="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">How
                             Mistakes Became  Big Breaks</a>
                    </div>
                    <div class="">
                        <a href="#">
                            <div class="h-40 bg-cover text-center overflow-hidden"
                                // style="backgroundImage: url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                                title="Woman holding a mug">
                                     <Image className="transition duration-300 ease-in-out  news-img"
                                    src={News4} alt="Picture of the News" />
                            </div>
                        </a>
                        <a href="#"
                            class="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Survey:
                            Many Americans With U.S.</a>
                    </div>
                    <div class="">
                        <a href="#">
                            <div class="h-40 bg-cover text-center overflow-hidden"
                                // style="backgroundImage: url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                                title="Woman holding a mug">
                                     <Image className="transition duration-300 ease-in-out news-img"
                                    src={News4} alt="Picture of the News" />
                            </div>
                        </a>
                        <a href="#"
                            class="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">How
                            Mistakes Became  Big Breaks</a>
                    </div>
                    <div class="">
                        <a href="#">
                            <div class="h-40 bg-cover text-center overflow-hidden"
                                // style="backgroundImage: url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                                title="Woman holding a mug">
                                     <Image className="transition duration-300 ease-in-out  news-img"
                                        src={News3} alt="Picture of the News" />
                            </div>
                        </a>
                        <a href="#"
                            class="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Survey: Many Americans  With U.S.</a>
                    </div>
                    <div class="">
                        <a href="#">
                            <div class="h-40 bg-cover text-center overflow-hidden"
                                // style="backgroundImage: url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                                title="Woman holding a mug">
                                     <Image className="transition duration-300 ease-in-out  news-img"
                                        src={News2} alt="Picture of the News" />
                            </div>
                        </a>
                        <a href="#"
                            class="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                                Trump Steps Back Into Coronavirus Spotlight</a>
                    </div>
                </div>

            </div>
            <div className='plus'>
                    <Image className="img-plus flex items-end py-4 mr-4" src={NextNews} alt="Picture of the News" width={40} />
                    <span>PLUS DE VIDEOS</span>
                </div>
        </div>
      </div>
      </>
    );
  }
  
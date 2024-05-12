import Image from 'next/image'
import News1 from '../../public/images/news1.jpeg'
import News2 from '../../public/images/news2.jpeg'
import News3 from '../../public/images/news3.jpeg'
import News4 from '../../public/images/news4.jpeg'
import News01 from '../../public/images/news01.jpg'
import News02 from '../../public/images/news02.jpg'
import News03 from '../../public/images/news03.jpg'
import News04 from '../../public/images/news04.jpg'
import NextNews from '../../public/logo/Arrow-3x.png'


export default function news() {
    return (
      <>
      <div className='news '>
        <div className="container max-w-screen-xl mx-auto p-5 relative">
            <h2 className='py-4'>News</h2>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
           
                <div className="sm:col-span-5">
                    <a href="#">
                        <div className="bg-cover text-center duration-300 hover:opacity-50 overflow-hidden img-news-first"
                            // style={{minHeight: '300px', backgroundImage: url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg') }}
                            title="Woman holding a mug">
                                 <Image className="transition duration-300 ease-in-out news-img "
                                src={News1} alt="Picture of the News" />
                        </div>
                    </a>
                    <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div className="">
                            <a href="#"
                                className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">Revenge
                                of the Never Trumpers</a>
                            <p className="text-gray-700 text-base mt-2">Meet the Republican dissidents fighting to push Donald Trump
                                out of office—and reclaim their party</p>
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden duration-300 hover:opacity-50"
                                // style="backgroundImage: url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                                title="Woman holding a mug">
                                     <Image className="transition duration-300 ease-in-out  news-img"
                                    src={News2} alt="Picture of the News" />
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                                Trump
                            Steps Back Into Coronavirus Spotlight</a>
                    </div>
                    <div className="">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden duration-300 hover:opacity-50"
                                // style="backgroundImage: url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                                title="Woman holding a mug">
                                     <Image className="transition duration-300 ease-in-out  news-img"
                                    src={News01} alt="Picture of the News" />
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                           مليون من الشباب المغاربة، منقطعين على الدراسة </a>
                    </div>
                    <div className="">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden duration-300 hover:opacity-50"
                                // style="backgroundImage: url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                                title="Woman holding a mug">
                                     <Image className="transition duration-300 ease-in-out  news-img"
                                    src={News4} alt="Picture of the News" />
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                            Steps Back Into Coronavirus Spotlight</a>
                    </div>
                    <div className="">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden duration-300 hover:opacity-50"
                                // style="backgroundImage: url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                                title="Woman holding a mug">
                                     <Image className="transition duration-300 ease-in-out  news-img"
                                    src={News02} alt="Picture of the News" />
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                            Steps Back Into Coronavirus Spotlight</a>
                    </div>
                    <div className="">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden duration-300 hover:opacity-50"
                                // style="backgroundImage: url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                                title="Woman holding a mug">
                                     <Image className="transition duration-300 ease-in-out  news-img"
                                    src={News03} alt="Picture of the News" />
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">Trump
                            Steps Back Into Coronavirus Spotlight</a>
                    </div>
                    <div className="">
                        <a href="#">
                            <div className="h-40 bg-cover text-center overflow-hidden duration-300 hover:opacity-50"
                                // style="backgroundImage: url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"
                                title="Woman holding a mug">
                                     <Image className="transition duration-300 ease-in-out  news-img"
                                    src={News04} alt="Picture of the News" />
                            </div>
                        </a>
                        <a href="#"
                            className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                                 القصة الكاملة لقضية مومو و فبركة سرقة على الهواء مباشرة</a>
                    </div>
                </div>

            </div>
            <div className='plus'>
                    <Image className="img-plus flex items-end py-4 mr-4" src={NextNews} alt="Picture of the News" width={40} />
                    <span>PLUS DE NEWS</span>
                </div>
        </div>
      </div>
      </>
    );
  }
  
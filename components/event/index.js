import Image from 'next/image'
import News1 from '../../public/images/news4.jpeg'
import News2 from '../../public/images/news2.jpeg'
import News3 from '../../public/images/news3.jpeg'
import Video1 from '../../public/video/video1.jpg'
import Video2 from '../../public/video/video2.jpeg'
import Video3 from '../../public/video/vide3.jpeg'
import NextNews from '../../public/logo/Arrow-3x.png'


export default function event() {
    return (
      <>
      <div className='event'>
        <div className="container mx-auto px-5 py-2">
            <div className="flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap event-evenments">
                    <span className=''><h2>EVÉNEMENTS.</h2>
                        </span>
                    <div className="w-1/2 p-1 md:p-2">
                        <Image
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={Video3}/>
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <Image
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={News2}/>
                        {/* <span className='text-white event'><h3> AGADIR  MARRAKECH</h3></span> */}
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <Image
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={News1} />
                        {/* <span><h3> AGADIR </h3></span> */}
                    </div>

                    </div>
                    <div className="flex w-1/2 flex-wrap  event-evenments">
                    <span className=''><h2>CONCERTS.</h2>
                        </span>
                        <div className="w-full p-1 md:p-2">
                            <Image
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={Video3} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={Video1} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={Video2}/>
                        </div>
                </div>
            </div>
        </div>
      </div>
      </>
    );
  }
  
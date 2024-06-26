import Link from 'next/link';
import Image from 'next/image'
import image1 from '../../public/twiter/image1.jpeg'
import image2 from '../../public/twiter/image2.jpeg'
import image3 from '../../public/twiter/image3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


export default function twiter() {
    return (
      <>
          <div className='news'>
           <div className="container mx-auto px-2 mt-4">
               <div className="text-center grid grid-cols-3 sm:grid-cols-6 gap-4 mb-8 twiter-dev">
                
                  <div>
                  {/* <FontAwesomeIcon icon={faSquareInstagram} className='event-twiter-econ' /> */}
                  <Link href="">
                    <Image src={image1} className="transition duration-300 ease-in-out hover:scale-110 img-twiter " alt="Picture of the twiter" />
                  </Link>
                  </div>
                  <div>
                    <Link href="">
                    <Image src={image2} className="transition duration-300 ease-in-out hover:scale-110 img-twiter " alt="" />
                    </Link>
                  </div>
                  <div>
                    <Link href="">
                    <Image src={image3} className="transition duration-300 ease-in-out hover:scale-110 img-twiter " alt="" />
                    </Link>
                  </div>
                  <div>
                    <Link href="">
                    <Image src={image1} className="transition duration-300 ease-in-out hover:scale-110 img-twiter " alt="" />
                    </Link>
                  </div>
                 
               </div>

            </div>
          </div>
      </>
    );
  }
  
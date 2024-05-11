import Link from 'next/link';
import Image from 'next/image'
import Pub from '../../public/pub/pub-hitradio.png'
import Pub2 from '../../public/pub/WhatsApp Image 2024-05-09 at 15.29.35.jpeg'

export default function bub() {
    return (
      <>
      <div className="">
           {/* <h2 className="text-center pub1-home font-bold">PUB</h2> */}
           <div className='flex justify-center items-center'>
              <Link href="">
                <Image src={Pub2} className="shadow-lg" alt="Picture of the twiter" />
              </Link>
            </div>
      </div>
      </>
    );
  }
  
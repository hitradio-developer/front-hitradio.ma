import Link from 'next/link';
import Image from 'next/image'
import Pub from '../../public/pub/pub-hitradio.png'
import Pub2 from '../../public/pub/left.jpeg'

export default function bub() {
    return (
      <>




      <div className="container-pub">
           {/* <h2 className="text-center pub1-home font-bold">PUB</h2> */}
           
              <Link href="" className="sticky-pub-image-left" >
                <Image src={Pub2}  alt="Picture of the twiter" />
              </Link>
              <Link href="" className="sticky-pub-image-right" >
                <Image src={Pub2}  alt="Picture of the twiter" />
              </Link>
          
      </div>
      </>
    );
  }
  
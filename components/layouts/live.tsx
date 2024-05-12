import Image from 'next/image'
import Player from '../../public/logo/Play.png'
import Hitradio from '../../public/podcast/podcats1.jpeg'
import Link from 'next/link';

export default function Live() {
    return (
      <>
      <div>
        <div className="lower-fixed-section">
            <div className='live-hit'>
            <Link href='#'>
                <Image src={Hitradio} alt={''} 
                    className='img-live'>
                </Image>
            </Link>
            <ul>
                <li>Adrenalina</li>
                <li>BABY GANG / BLANCO / MARRACASH</li>
            </ul>
                
            </div>
            <div className="player-audio">
            <Link href='#'>

                <Image src={Player} alt={''} 
                className='w-[40px]'></Image>
            </Link>
            </div>
        </div>
      </div>
      </>
  );}
  
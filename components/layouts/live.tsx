import Image from 'next/image'
import Player from '../../public/logo/Play.png'
import Hitradio from '../../public/podcast/podcats2.jpeg'

export default function Live() {
    return (
      <>
<div className="lower-fixed-section">
    <div className='live-hit'>
    <Image src={Hitradio} alt={''} 
                className=''></Image>
    </div>
          <div className="player-audio">
            <Image src={Player} alt={''} 
                className=''></Image>
          </div>
      </div>
      </>
  );}
  
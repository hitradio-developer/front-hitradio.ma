"use client";
import Image from 'next/image'
import Player from '../../public/logo/Play.png'
import Hitradio from '../../public/podcast/podcats1.jpeg'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import AudioPlayer from './AudioPlayer';

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
               <AudioPlayer src="https://hitradio-maroc.ice.infomaniak.ch/hitradio-maroc-128.mp3" />    
           </div>
           <div>
           <button className="bg-transparent  plus-radio-live
          
             px-2 border rounded m-2 p-1">
            Plus <br /> de <br /> Radios
            </button>
           
           </div>
        </div>
      </div>
      </>
  );}
  
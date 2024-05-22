import Image from 'next/image'

import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  return (
    <>
    <div className='foot'>
        <div className="container mx-auto px-2 mb-24 ">
          <div className="text-center title-footer grid grid-cols-4 sm:grid-cols-4 mt-6">
            {/* <div className='logo-hr-footer'>
            <Image className=''
                    src={Logo} // Path to your image in the public directory
                    alt="Landwind Logo"
                    width={80} // Set the width of the image
                    height={80} // Set the height of the image
                />
            </div> */}
            <div>
             <h3 className="">Live</h3> 
              <ul>
                <li>Émissions </li>
                <li>Fréquences</li>
              </ul>
            </div>
            <div>
            <h3 > Hit Radio  </h3>  
              <ul>
                <li> Success Story</li>
              </ul>
            </div>
            <div>
            <h3> Music</h3> 
              <ul>
                <li> Top 20</li>
                <li>TopHits 2023</li>
              </ul>
            </div>
            <div>
            <h3 > News</h3>
              <ul>
                <li> Actus </li>
                <li> Event </li>
              </ul>
            </div>
          </div>
          <div className="title-reglement grid grid-cols-12 gap-4 m-6">
            <a href=""><ul>CGU</ul></a>
            <a href=""><ul>Réglement des jeux-concours</ul></a>
            <a href=""><ul>Job</ul></a>
            <a href=""><ul>Publicité</ul></a>
            <a href=""><ul>Contact</ul></a>
          </div>
          <div className="title-reglement grid grid-cols-12 gap-2 m-6 ">
            <Link href=""><ul><FontAwesomeIcon className='social-icon' icon={faInstagram} /> </ul></Link>
            <Link href=""><ul><FontAwesomeIcon className='social-icon' icon={faTiktok} /></ul></Link>
            <Link href=""><ul><FontAwesomeIcon className='social-icon' icon={faFacebook} /></ul></Link>
            <Link href=""><ul><FontAwesomeIcon className='social-icon' icon={faLinkedin} /></ul></Link>
            <Link href=""><ul><FontAwesomeIcon className='social-icon' icon={faYoutube} /></ul></Link>
            <Link href=""><ul><FontAwesomeIcon className='social-icon' icon={faXTwitter} /></ul></Link>
          </div>
          <div className="title-reglement grid grid-cols-12">
            <h3>Tous les drois © 2024. HIT RADIO.</h3>
          </div>
        </div>
    </div>
    </>
  );
}

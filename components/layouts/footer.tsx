import Image from 'next/image'
import Logo from '../../public/logo/small-logo-hitradio_0.png';
import Logo1 from '../../public/logo/social-medi/Layer 1.png';
import Logo2 from '../../public/logo/social-medi/Layer 2.png';
import Logo3 from '../../public/logo/social-medi/Layer 3.png';
import Logo4 from '../../public/logo/social-medi/Layer 4.png';
import Logo5 from '../../public/logo/social-medi/Layer 5.png';
import Logo6 from '../../public/logo/social-medi/Layer 6.png';
import Link from 'next/link';



export default function Footer() {
  return (
    <>
    <div className='foot'>
        <div className="container mx-auto px-2 mb-20">
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
          <div className="title-reglement grid grid-cols-12 gap-2 m-6">
            <Link href=""><ul><Image className='social-media-img' src={Logo1} alt=""/></ul></Link>
            <Link href=""><ul><Image className='social-media-img' src={Logo2} alt=""/></ul></Link>
            <Link href=""><ul><Image className='social-media-img' src={Logo3} alt=""/></ul></Link>
            <Link href=""><ul><Image className='social-media-img' src={Logo4} alt=""/></ul></Link>
            <Link href=""><ul><Image className='social-media-img' src={Logo5} alt=""/></ul></Link>
            <Link href=""><ul><Image className='social-media-img' src={Logo6} alt=""/></ul></Link>
          </div>
          
          <div className="title-reglement grid grid-cols-12 mb-8">
            <h3>Tous les drois © 2024. HIT RADIO.</h3>
          </div>
        </div>
    </div>
    </>
  );
}

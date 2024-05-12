import Slide from '../../public/slide.jpeg'
import Image from 'next/image'

export default function Footer() {
    return (
      <>
      <div>
        <Image className='img-slide' src={Slide}  alt=''/>
      </div>
      </>
    );
  }
  
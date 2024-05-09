import Image from 'next/image';
import Slide1 from '../../public/slide.jpeg'


export default function Slide() {
  return (
    <>
        <div className="">
            <div className="">
            <Image src={Slide1} alt={''} className=''></Image>
            </div>
        </div>
    </>
  );
}

import Link from 'next/link';
import image1 from '../../public/twiter/image1.jpeg'
import image2 from '../../public/twiter/image2.jpeg'
import image3 from '../../public/twiter/image3.jpeg'


export default function twiter() {
    return (
      <>
      <div className="relative min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
        <div className="min-h-28 ">
          <div className="max-w-screen-lg mx-auto py-4">
            <div className="flex gap-6">
              <div className="bg-white w-1/3 shadow rounded-lg overflow-hidden img-twiter-hover">
                <Link href="">
                  <img src={image1.src} className="object-cover h-52 w-full img-twiter " alt="" />
                </Link>
              </div>
              <div className="bg-white w-1/3 shadow rounded-lg overflow-hidden img-twiter-hover">
                <Link href="">
                  <img src={image2.src} className="object-cover h-52 w-full img-twiter" alt="" />
                </Link>
              </div>
              <div className="bg-white w-1/3 shadow rounded-lg overflow-hidden img-twiter-hover">
                <Link href="">
                  <img src={image3.src} className="object-cover h-52 w-full img-twiter" alt="" />
                </Link>
              </div>  
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
import Image from 'next/image'
import Letter from '../../public/logo/newsLetter2.png'
import Link from 'next/link';
import Logo1 from '../../public/logo/App_Store.png';
import Logo2 from '../../public/logo/play-store.png';



export default function newsletter() {
    return (
      <>
      <div className='news newsLetter'>
        <div className="container max-w-screen-xl mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            
            <div className="sm:col-span-12 text-white">
                <h2 className='py-4 font-medium text-3xl text-center text-white mb-4'> Téléchargez nos applications</h2>
            </div>
            <div className="sm:col-span-12">
              <div className="title-reglement gap-2 mb-4 ">
                <Link href=""><ul><Image className='w-[163px]' src={Logo1} alt=""/></ul></Link>
                <Link href=""><ul><Image className='w-[163px]' src={Logo2} alt=""/></ul></Link>
              </div>       
            </div>
        </div>
        </div>
      </div>
      </>
    );
  }
  
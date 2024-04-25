import Image from 'next/image'
import Video1 from '../../public/video/video1.jpg'
import Video2 from '../../public/video/video2.jpeg'
import Video3 from '../../public/video/vide3.jpeg'
import NextNews from '../../public/logo/Arrow-3x.png'
import Play from '../../public/logo/Play.png'


export default function videos() {
    return (
      <>
      <div className='news'>
        <div className="container mx-auto px-2">
            <h2 className='py-8'>VIDEOS.</h2>
            <div className="text-center grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
                    <Image className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 vides-img"
                     src={Video1} alt="Picture of the Videos" />
                     <Image className='paly-video' src={Play} alt='Play video' />
                    <h3>Surchauﬀ e de l’iPhone 15 : </h3>
                    <h4>Apple Promet une Solution Rapide</h4>
                </div>
                <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
                <Image className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 vides-img" 
                    src={Video2} alt="Picture of the Videos" />
                     <Image className='paly-video' src={Play} alt='Play video' />
                    <h3>Hunger Games : </h3>
                    <h4>Un Retoure Explosif</h4>
                </div>
                <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
                <Image className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 vides-img"
                    src={Video3} alt="Picture of the Videos" />
                     <Image className='paly-video' src={Play} alt='Play video' />
                    <h3>Surchauﬀ e de l’iPhone 15 : </h3>
                    <h4>Apple Promet une Solution Rapide</h4>
                </div>
                <div className="">
                </div>
                <div className="">
                </div>
                <div className="">
                    <Image className="img-plus flex items-end py-4 mr-4" src={NextNews} alt="Picture of the News" width={40} />
                    <span>PLUS DE VIDEOS</span>
                </div>
            </div>
        </div>
      </div>
      </>
    );
  }
  
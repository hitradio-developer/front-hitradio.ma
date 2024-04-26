import Image from 'next/image'
import News1 from '../../public/images/news4.jpeg'
import News2 from '../../public/images/news2.jpeg'
import News3 from '../../public/images/news3.jpeg'
import NextNews from '../../public/logo/Arrow-3x.png'


export default function news() {
    return (
      <>
      <div className='news'>
        <div className="container mx-auto px-2">
            <h2 className='py-8'>NEWS.</h2>
            <div className="text-center grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="">
                    <Image className="transition duration-300 ease-in-out hover:scale-110 news-img"
                     src={News1} alt="Picture of the News" />
                    <h3>Surchauﬀ e de l’iPhone 15 : </h3>
                    <h4>Apple Promet une Solution Rapide</h4>
                </div>
                <div className="">
                    <Image className="transition duration-300 ease-in-out hover:scale-110 news-img" 
                    src={News2} alt="Picture of the News" />
                    <h3>Hunger Games : </h3>
                    <h4>Un Retoure Explosif</h4>
                </div>
                <div className="">
                    <Image className="transition duration-300 ease-in-out hover:scale-110 news-img" src={News3} alt="Picture of the News" />
                    <h3>Surchauﬀ e de l’iPhone 15 : </h3>
                    <h4>Apple Promet une Solution Rapide</h4>
                </div>
                <div className="">
                </div>
                <div className="">
                </div>
                <div className="">
                    <Image className="img-plus flex items-end py-4 mr-4" src={NextNews} alt="Picture of the News" width={40} />
                    <span>PLUS DE NEWS</span>
                </div>
            </div>
        </div>
      </div>
      </>
    );
  }
  
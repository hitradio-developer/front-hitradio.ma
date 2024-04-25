import Image from 'next/image'
import News1 from '../../public/images/news4.jpeg'
import News2 from '../../public/images/news2.jpeg'
import News3 from '../../public/images/news3.jpeg'
import NextNews from '../../public/logo/Arrow-3x.png'


export default function classement() {
    return (
      <>
      <div className='news'>
        <div className="container mx-auto">
            <h2 className='py-8'>CLASSEMENT.</h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
                <div class="grid grid-cols-3 grid-rows-3 gap-4">
                    <div>1.</div> 
                    <Image className="transition duration-300 ease-in-out hover:scale-110 news-img"
                     src={News1} alt="Picture of the News" />
                     <div>Name Artiste 
                        <span>title of sing</span> 
                     </div> 
                   
                </div>
                <div className="">
                    <div className='col-span-1'>1.</div> <Image className="transition duration-300 ease-in-out hover:scale-110 news-img col-span-3"
                     src={News1} alt="Picture of the News" /><span>Name Artiste</span> <span>title of sing</span>
                </div>
                <div className="">
                    <span>1.</span> <Image className="transition duration-300 ease-in-out hover:scale-110 news-img"
                     src={News1} alt="Picture of the News" /><span>Name Artiste</span> <span>title of sing</span>
                </div>
                <div className=""></div>
                <div className=""></div>
                <div className="">
                    <Image className="img-plus flex items-end py-12 mr-4" src={NextNews} alt="Picture of the News" width={40} />
                    <span>PLUS DE NEWS</span>
                </div>
            </div>
        </div>
      </div>
      </>
    );
  }
  
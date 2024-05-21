import Image from 'next/image'
import Letter2 from '../../public/logo/newsLetter2.png'
import Letter from '../../public/logo/Emails-amico.png'



export default function newsletter() {
    return (
      <>
      <div className='news newsLetter'>
        <div className="container max-w-screen-xl mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-12 ">
            <div className="sm:col-span-4 flex justify-center items-center">
                <Image src={Letter} alt={''} 
                className='transition duration-300 ease-in-out hover:scale-110 w-3/4 '></Image>
            </div>
            <div className="sm:col-span-6 text-white m-2">
                <h2 className='py-4 font-medium text-3xl text-white mb-4'>La Newsletter Hitradio</h2>
                <p className='mb-4'>
                Plongez au cœur de l&apos;univers de vos artistes préférés ! 
                Ne manquez plus aucune actualité et découvrez des surprises exclusives .
                </p>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </div>
                    <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                     dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exemple@email.com" />
                        <button type="submit" className="text-white absolute end-2.5 bottom-1 bg-rose-700
                        hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                        font-medium rounded-lg text-sm px-4 py-2 dark:bg-rose-600
                         dark:hover:bg-rose-600 dark:focus:ring-white-800">JE M’ABONNE</button>
                </div>
                         <div>
                            <p className='mb-4'>En cliquant sur « je m’abonne », j’accepte que les données recueillies par Hit Radio soient destinées à l’envoi par courrier électronique de contenus et d&apos;informations .  
                          <br /> <a className='text-right direction-rtl' href="">Plus d’informations</a> </p>
                         </div>
                {/* <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required /> */}

            </div>
        </div>
        </div>
      </div>
      </>
    );
  }
  
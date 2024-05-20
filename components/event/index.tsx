import Image from 'next/image'
import Event1 from '../../public/event/event1.jpg'
import Event2 from '../../public/event/event2.jpeg'
import Event3 from '../../public/event/event3.jpg'

import Concert1 from '../../public/event/concert1.jpg'
import Concert2 from '../../public/event/concert2.png'
import Concert3 from '../../public/event/concert3.jpg'
import NextNews from '../../public/logo/Arrow-3x.png'


export default function event() {
    return (
      <>
      <div className='event'>
        <div className="container mx-auto">
            <div className="flex flex-wrap sm:m-2 md:-m-2">
                <div className='w-full sm:w-1/2 py-4'>
                    <h2 className='ml-2 mb-4'>Evénements</h2>
                    <div className="flex flex-wrap event-evenments">
                        <div className="flex flex-col w-1/2 p-1 relative gradient-opacity">
                            <span className="event-date">10 JUIN</span>  
                            <Image
                                alt="gallery"
                                className="block  w-full rounded-lg object-cover object-center img-second-event"
                                src={Event3}
                            />
                            <span className="event-label">MARRAKECH</span>
                            {/* <h3 className="text-center underline text-white ">ALES 21 ET 22 JUIN, ANFA PARK S&lsquo;ENFLAMMERA DE NOUVEAU...</h3> */}
                        </div>
                        <div className="flex flex-col w-1/2 p-1  relative gradient-opacity">
                        <span className="event-date">10 MARS</span>  
                            <Image
                                alt="gallery"
                                className="block w-full rounded-lg object-cover object-center img-second-event"
                                src={Event2}
                            />
                            <span className="event-label">FES</span>

                            {/* <h3 className="text-center underline text-white ">Oasis Festival 2024 à Marrakech : Une 8e Édition Exceptionnelle...</h3> */}
                        </div>
                        <div className="w-full p-1 img-first-event relative gradient-opacity">
                        <span className="event-date">10 JANVIER</span>  
                            <Image
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={Event1} />
                            <span className="event-label">ESSAOUIRA</span>

                            {/* <h3 className="text-center underline text-white ">Le Circuit Moulay El Hassan fait son Grand Retour avec le ...</h3> */}
                        </div>
                    </div>
                    <div className='plus-event'>
                        <Image className="img-plus flex items-end py-4 mr-4" src={NextNews} alt="" width={40} />
                        <span>PLUS D EVÉNEMENTS </span>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 py-4'>
                        <h2 className='ml-2 mb-4'>Concerts</h2>
                    <div className="flex flex-wrap event-evenments">
                        <div className="w-full p-1 img-first-event relative gradient-opacity">
                        <span className="event-date">05 AVRIL</span>  
                            <Image
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={Concert1} />
                            <span className="event-label">MARRAKECH</span>
                        </div>
                        <div className="flex flex-col w-1/2 p-1  relative gradient-opacity">
                        <span className="event-date">20 JANVIER</span>  
                            <Image
                                alt="gallery"
                                className="block w-full rounded-lg object-cover object-center img-second-event"
                                src={Concert2}
                            />
                            <span className="event-label">RABAT</span>
                        </div>
                        <div className="flex flex-col w-1/2 p-1 relative gradient-opacity">
                        <span className="event-date">10 FÉVRIER</span>  
                            <Image
                                alt="gallery"
                                className="block w-full rounded-lg object-cover object-center img-second-event"
                                src={Concert3}
                            />
                            <span className="event-label">AGADIR</span>
                        </div>
                    </div>
                    <div className='plus-event'>
                        <Image className="img-plus flex items-end py-4 mr-4" src={NextNews} alt="" width={40} />
                        <span>PLUS DE CONCERTS</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </>
    );
  }
  
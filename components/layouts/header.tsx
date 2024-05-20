"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlay, faXmark, faBars, faSignal } from "@fortawesome/free-solid-svg-icons";
import { Transition } from '@headlessui/react';


import { faSignature} from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center w-20 md:w-24">
                <Image
                    src="/logo/small-logo-hitradio_0.png" // Path to your image in the public directory
                    alt="Landwind Logo"
                    width={125} // Set the width of the image
                    height={125} // Set the height of the image
                />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                  <Link href="#" className="text-red-700 font-bold block hover:text-red-200 px-3 py-2 rounded-md text-base" aria-current="page">RADIOS</Link>
                  <Link href="#" className="text-red-700 font-bold block hover:text-red-200 px-3 py-2 rounded-md text-base">PODCASTS</Link>
                  <Link href="#" className="text-red-700 font-bold block hover:text-red-200 px-3 py-2 rounded-md text-base">NEWS</Link>
                  <Link href="#" className="text-red-700 font-bold block hover:text-red-200 px-3 py-2 rounded-md text-base">EVÉNEMENTS</Link>
                  <Link href="#" className="text-red-700 font-bold block hover:text-red-200 px-3 py-2 rounded-md text-base">JEUX</Link>
                  <Link href="#" className="text-red-700 font-bold block hover:text-red-200 px-3 py-2 rounded-md text-base">PLUS</Link>
              </div>
            </div>
            {/* <div className='click-live'>

            <FontAwesomeIcon icon={faSignature} />
            </div> */}
          </div>
          <div className="right-header flex justify-between items-center gap-2 sm:gap-4 ">
              <div>
                <button className="text-red-700 font-bold flex items-center gap-2 sm:gap-4">
                 LIVE <div className='flex items-center justify-center rounded-full bg-gray-500 w-12 h-12'><FontAwesomeIcon icon={faPlay} className='text-white' /> </div>
                </button>  
              </div>
              <div>
                <Link href="#" className='btn btn-primary px-4 sm:px-8 rounded-full bg-gray-500 text-white hover:bg-transparent hover:border-red-700 hover:text-red-700  outline-none border-gray-500'>NOS FRÉQUENCES</Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6 size-7">
                  <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-gray-400 hover:text-red-500 focus:outline-none  transition duration-150 ease-in-out text-2xl">
                    {!isSearchOpen ? <FontAwesomeIcon icon={faMagnifyingGlass} /> : <FontAwesomeIcon icon={faXmark} />}  
                  </button>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-red-500 focus:outline-none transition duration-150 ease-in-out text-2xl">
                  {!isOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}  
                
                </button>
              </div>
          </div>
          
         
          
          
        </div>
      </div>
      <Transition
        show={isSearchOpen}
        enter="transition ease-out duration-100 transform top-0 absolute"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="absolute mt-2 inset-x-0 p-2 transition transform origin-top-right hidden md:block">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="flex items-center">
                <input type="text" className="w-full border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-md py-4 px-5" placeholder="Search..." />
              </div>
            </div>
          </div>
        )}
      </Transition>
      <Transition
        show={isOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="md:hidden">
            <div className="px-2 pt-2 pb-3 sm:px-3">
                <Link href="#" className="text-red-700 font-bold block hover:text-red-200 px-3 py-2 rounded-md text-base" aria-current="page">RADIOS</Link>
                <Link href="#" className="text-red-700 font-bold block hover:text-red-200 px-3 py-2 rounded-md text-base">PODCASTS</Link>
                <Link href="#" className="text-red-700 font-bold block hover:text-red-200 px-3 py-2 rounded-md text-base">NEWS</Link>
                <Link href="#" className="text-red-700 font-bold block hover:text-red-200 px-3 py-2 rounded-md text-base">ÉVÉNEMENTS</Link>
                <Link href="#" className="text-red-700 font-bold block hover:text-red-200 px-3 py-2 rounded-md text-base">JEUX</Link>
                <Link href="#" className="text-red-700 font-bold block hover:text-red-200 px-3 py-2 rounded-md text-base">PLUS</Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="px-5 flex items-center">
                <input type="text" className="w-full border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-md py-2 px-3" placeholder="Search..." />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Header;
            

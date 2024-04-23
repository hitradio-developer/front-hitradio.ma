import Link from 'next/link'
import Live from '../public/live.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTowerBroadcast, faTrash } from "@fortawesome/free-solid-svg-icons";

<i class="fa-solid faSignalStream"></i>

export default function Header() {
    return (
      <>
<nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between px-4 mx-auto">
        <div href="#" class="flex items-center">
            <img src="https://www.hitradio.ma/sites/default/files/small-logo-hitradio_0.png" class="h-6 mr-3 sm:h-9 logo" alt="Landwind Logo" />
            
        </div>
        <div class="flex items-center lg:order-2">
            <div class="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>

             <button data-collapse-toggle="mobile-menu-2" type="button"
				class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2" aria-expanded="true">
				<span class="sr-only">Open main menu</span>
				<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"></path>
				</svg>
				<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"></path>
				</svg>
			</button>
        </div>
        <div class="items-left justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 menu cf" >
                <li>
                    <Link href="#"
                        class="block py-2 pl-3 pr-4 text-white font-bold bg-purple-700 
                        rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                        aria-current="page">RADIOS</Link>
                </li>
                <li>
                    <Link href="#"
                        class="block py-2 pl-3 pr-4 text-white font-bold bg-purple-700 
                        rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white">
                        PODCASTS</Link>
                </li>
                <li>
                    <Link href="#"
                        class="block py-2 pl-3 pr-4 text-white font-bold bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white">
                        NEWS</Link>
                </li>
                <li>
                    <Link href="#"
                        class="block py-2 pl-3 pr-4 text-white font-bold bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white">
                        ÉVÉNEMENTS</Link>
                </li>
                <li>
                    <Link href="#"
                        class="block py-2 pl-3 pr-4 text-white font-bold bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white">
                            JEUX</Link>
                </li>
                <li>
                    <Link href="#"
                        class="block py-2 pl-3 pr-4 text-white font-bold bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white">
                        PLUS</Link>
                </li>
            </ul>
        </div>
        
       
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full header-btn">
            <FontAwesomeIcon icon={faTowerBroadcast} className="fas fa-check mr-2" ></FontAwesomeIcon> LIVE
            </button>
            <input class="border border-gray-300 placeholder-current h-10 px-5 pr-16  rounded-lg text-sm focus:outline-none dark:bg-gray-500 dark:border-gray-50 dark:text-gray-200 " type="search" name="search" placeholder="Search" />
            
    </div>
</nav>

      </>
    );
  }
  







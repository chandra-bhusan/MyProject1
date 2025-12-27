import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // h-16 = 64px
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-300 sticky top-0 z-50 pb-5 md:pb-8 shadow-md">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16 xl:hidden">
          <div className="flex items-center gap-1.5 -mt-2 relative">
            <img src="/home/cyhome1.png" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-black text-lg mt-1.5">Owner Verified</span>
            <span className="absolute left-2 top-8 text-base text-black whitespace-nowrap">Currently Active & Updated</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="text-gray-700 font-bold mr-3 mt-6"
          >
            <img src="/home/cyhome2.png" alt="Menu" className="w-6 h-5" />
          </button>
        </div>

        {/* Mobile dropdown overlay (does not push layout) */}
        {isOpen && (
          <div 
            className="fixed inset-0 md:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
        <div
          id="mobile-menu"
          className={`${isOpen ? 'block' : 'hidden'} absolute md:hidden right-0 top-16 w-48 bg-gray-100 z-50`}
        >
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-6 text-black text-lg font-black hover:opacity-70 transition"
            aria-label="Close menu"
          >
            ✕
          </button>
          <ul className="pt-6">
            <li>
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-800 uppercase hover:bg-gray-200 transition">
                HOME
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('rooms')} className="block w-full text-left px-4 py-2 text-gray-800 uppercase hover:bg-gray-200 transition">
                ROOMS
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('food')} className="block w-full text-left px-4 py-2 text-gray-800 uppercase hover:bg-gray-200 transition">
                FOOD & FACILITIES
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('location')} className="block w-full text-left px-4 py-2 text-gray-800 uppercase hover:bg-gray-200 transition">
                LOCATION
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-800 uppercase hover:bg-gray-200 transition">
                CONTACT
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop navigation */}
        <div className="hidden xl:flex xl:flex-row justify-between items-end h-16 md:pb-3">
          <div className="flex items-center gap-1 relative md:-ml-14 md:pb-2">
            <img src="/home/cyhome1.png" alt="Logo" className="w-8 h-8 md:w-8 md:h-8 md:mt-2" />
            <span className="font-bold text-black text-lg mt-0 md:text-xl md:mt-2">Owner Verified</span>
            <span className="absolute left-4 top-8 text-base text-gray-700 whitespace-nowrap md:text-base md:font-semibold md:text-gray-600 md:top-10">Currently Active & Updated</span>
          </div>
          <ul className="flex flex-row items-center space-x-12">
            <li className="md:relative md:top-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-800 font-bold hover:text-gray-600 transition md:text-[1.20rem]">
                HOME
              </button>
            </li>
            <li className="md:relative md:top-4">
              <button onClick={() => scrollToSection('rooms')} className="text-gray-800 font-bold hover:text-gray-600 transition md:text-[1.20rem]">
                ROOMS
              </button>
            </li>
            <li className="md:relative md:top-4">
              <button onClick={() => scrollToSection('food')} className="text-gray-800 font-bold hover:text-gray-600 transition md:text-[1.20rem]">
                FOOD & FACILITIES
              </button>
            </li>
            <li className="md:relative md:top-4">
              <button onClick={() => scrollToSection('location')} className="text-gray-800 font-bold hover:text-gray-600 transition md:text-[1.20rem]">
                LOCATION
              </button>
            </li>
            <li className="md:relative md:top-4">
              <button onClick={() => scrollToSection('contact')} className="text-gray-800 font-bold hover:text-gray-600 transition md:text-[1.20rem]">
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

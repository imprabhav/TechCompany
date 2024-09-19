import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Logo</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className={`hover:text-gray-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Home</a>
            <a href="/about" className={`hover:text-gray-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>About Us</a>
            <a href="/blogs" className={`hover:text-gray-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Blogs</a>
            
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center hover:text-gray-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a href="/services/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Web Development</a>
                    <a href="/services/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mobile Development</a>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <button className={`px-4 py-2 rounded-md font-bold ${isScrolled ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} hover:bg-opacity-90`}>
              Contact
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100' : 'text-white hover:text-gray-300 hover:bg-gray-700'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About Us</a>
            <a href="/blogs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blogs</a>
            
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Services
                <ChevronDown className={`${isServicesOpen ? 'transform rotate-180' : ''} h-5 w-5`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4">
                  <a href="/services/web-development" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Web Development</a>
                  <a href="/services/mobile-development" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Mobile Development</a>
                </div>
              )}
            </div>
            
            <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-blue-500 text-white hover:bg-blue-600">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
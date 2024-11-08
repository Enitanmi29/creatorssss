// import React from 'react'
// import { Link, NavLink } from 'react-router-dom';
// import { NavItems } from '../constants';

// const Navbar = () => {
//   return (
//     <nav className='top-0 z-50 w-full '>
//         <div className='container flex pt-4'>
//             <Link to='/'>
//                 <img 
//                     src='/Group 41.png' 
//                     alt='logo' 
//                     className=' w-[246.31px] h-[40px] ml-20' 
//                 />
//             </Link>
            
            
//             <ul className='flex text-black w-[570px] h-[48px] gap-[64px] ml-[370px]'>
//                 {NavItems.map ((item, index) => (
//                     <li key={index}>
//                         <NavLink 
//                         to={item.link}
//                         className=''
//                         activeClassName='text-blue-600 font-bold'>

//                             {item.label} 
                       
//                     </NavLink>
//                     </li>
                    
//                 ))}
//             </ul>
//         </div>
//     </nav>
//   )
// };


// export default Navbar


import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavItems } from '../constants';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-20">
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/Group 41.png" 
            alt="logo" 
            className="w-[150px] h-[30px] sm:w-[200px] sm:h-[35px] md:w-[246.31px] md:h-[40px]" 
          />
        </Link>

        {/* Navigation links for larger screens */}
        <ul className="hidden lg:flex text-black gap-[32px] lg:gap-[48px] ml-auto">
          {NavItems.map((item, index) => (
            <li key={index}>
              <NavLink 
                to={item.link}
                className="text-base font-medium hover:text-blue-600 transition-colors"
                activeClassName="text-blue-600 font-bold"
              >
                {item.label} 
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden flex items-center text-black p-2 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu for smaller screens */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col text-center text-black space-y-4 py-4">
            {NavItems.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.link}
                  className="text-base font-medium hover:text-blue-600 transition-colors"
                  activeClassName="text-blue-600 font-bold"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

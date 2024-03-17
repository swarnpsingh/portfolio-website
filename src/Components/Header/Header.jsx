import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className='flex justify-between absolute inset-x-0 top-3 z-50 bg-transparent text-white'>
        <div className='relative justify-start ml-5 font-metamorphous'>Swarn Pratap Singh</div>
        <span className='fixed right-5 md:hidden mr-5' onClick={toggleNavbar}>
          <i className="fa-solid fa-bars"></i>
        </span>
        <ul className={` md:flex flex-col md:flex-row justify-end gap-5 mr-5  ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <NavLink 
                className={({isActive}) =>`block px-4 py-2 mt-5 md:my-0 md:px-0 md:py-0 hover:text-gray-300 `} 
                to='/' 
                onClick={toggleNavbar}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
                className={({isActive}) =>`block px-4 py-2 md:px-0 md:py-0 hover:text-gray-300 `} 
                to='/projects' 
                onClick={toggleNavbar}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
                className={({isActive}) =>`block px-4 py-2 md:px-0 md:py-0 hover:text-gray-300 `} 
                to='/about' onC
                lick={toggleNavbar}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
                className={({isActive}) =>`block px-4 py-2 md:px-0 md:py-0 hover:text-gray-300 `} 
                to='/contact' o
                nClick={toggleNavbar}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;

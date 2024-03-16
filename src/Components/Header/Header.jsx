import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className=' flex justify-between absolute inset-x-0 top-3 z-50 bg-transparent text-white' >
        <div className='justify-start ml-5 font-metamorphous'>
            Swarn Pratap Singh .
        </div>
        <ul className='flex justify-end gap-5 mr-5'>
            <li>
                <NavLink 
                    className={({isActive}) => 'block' }   
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className={({isActive}) => 'block'}   
                >
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className={({isActive}) => 'block'}   
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className={({isActive}) => 'block'}   
                >
                    Contact
                </NavLink>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Header
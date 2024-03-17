import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='absolute inset-x-0 bottom-3 z-50 bg-transparent text-white' >
        <ul className='flex justify-end gap-5 mr-5'>
            <li>
                <NavLink
                to="https://www.linkedin.com/in/swarn-pratap-singh/" 
                target='_blank'
                    className={({isActive}) => 'block hover:text-gray-300 ' }   
                >
                    LinkedIn
                </NavLink>
            </li>
            <li>
                <NavLink
                to="https://www.instagram.com/swarn.psingh/" 
                target='_blank'
                    className={({isActive}) => 'block hover:text-gray-300 '}   
                >
                    Instagram
                </NavLink>
            </li>
            <li>
                <NavLink
                to="" 
                target='_blank'
                    className={({isActive}) => 'block hover:text-gray-300 '}   
                >
                    X
                </NavLink>
            </li>
            <li>
                <NavLink
                to="https://github.com/swarnpsingh" 
                target='_blank'
                    className={({isActive}) => 'block hover:text-gray-300 '}   
                >
                    Github
                </NavLink>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Footer
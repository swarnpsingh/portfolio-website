import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='absolute inset-x-0 bottom-3 z-50 bg-transparent text-white' >
        <ul className='flex justify-end gap-5 mr-5'>
            <li>
                <NavLink 
                    className={({isActive}) => 'block' }   
                >
                    LinkedIn
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className={({isActive}) => 'block'}   
                >
                    Instagram
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className={({isActive}) => 'block'}   
                >
                    X
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className={({isActive}) => 'block'}   
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
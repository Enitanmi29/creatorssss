import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { NavItems } from '../constants';

const Navbar = () => {
  return (
    <nav className='top-0 z-50 w-full '>
        <div className='container flex pt-4'>
            <Link to='/'>
                <img 
                    src='/Group 41.png' 
                    alt='logo' 
                    className=' w-[246.31px] h-[40px] ml-20' 
                />
            </Link>
            
            
            <ul className='flex text-black w-[570px] h-[48px] gap-[64px] ml-[370px]'>
                {NavItems.map ((item, index) => (
                    <li key={index}>
                        <NavLink 
                        to={item.link}
                        className=''
                        activeClassName='text-blue-600 font-bold'>

                            {item.label} 
                       
                    </NavLink>
                    </li>
                    
                ))}
            </ul>
        </div>
    </nav>
  )
};


export default Navbar
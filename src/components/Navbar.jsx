import React from 'react'
import {navLinks,logos} from '../utils/constant'

import {Link} from 'react-router-dom'

import { HashLink} from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className='backdrop:blur-[5px]'>
        <div className='z-[100] w-[100%] fixed mobile:h-[90px] h-[120px] px-10 flex items-center justify-between bg-black/30'>
            <div className=''>
                <img src={logos.white_logo_slogan} className='h-[180px] w-[180px] mobile:h-[140px] mobile:w-[140px]' alt="" />
            </div>
            <div className='tablet-sm:hidden mobile:hidden'>
                <ul className='flex transform: uppercase font-bold text-base text-white'>
                    
                    {navLinks.map((link,index) =>{
                        return(
                        <li className='px-5  transition ease-in-out delay-150 hover:text-[#38b6ff]'
                         key={index}> 
                         <HashLink to={link.anchor}>
                             <Link to={link.anchor}>{link.name}</Link>
                         </HashLink>
                         </li>
                         
                        )
                    })}
                </ul>
            </div>

        </div>

    </div>
  )
}

export default Navbar
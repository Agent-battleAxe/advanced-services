import React from 'react'

import { imgBackground } from '../utils/constant'
import { navLinks } from '../utils/constant';
import {Link} from 'react-router-dom'
import { HashLink} from 'react-router-hash-link';


const Header = () => {
  return (
    <div id='Accueil' >
      <div className="bg-[url('./assets/bg-header.jpg')] bg-cover bg-center h-screen w-full">
        <div className='bg-[#161522]/70 mobile:px-5 px-24 h-screen w-full flex justify-start items-center'>
          <div className='tablet-lg:w-[70%] tablet-sm:w-[80%] mobile:w-[80%] tablet-sm:pt-10 mobile:pt-16 w-[50%] pt-28'>
          <h1 className='text-[#38b6ff] font-bold tablet-sm:text-[40px] mobile:text-[40px] text-[55px]'>Services</h1>
          <h1 className='text-[#38b6ff] font-bold tablet-sm:text-[40px] mobile:text-[40px] text-[55px]'>aux entreprises</h1>
          <p className='text-white font-bold text-lg mobile:text-base'>
            Advanced Services aide votre entreprise à croître
            en offrant une panoplie de services d'appui pour
            améliorer votre rendement.
          </p>
          <HashLink to={navLinks[1].anchor}> <button className='mt-5 text-lg font-bold text-white py-2 px-4 bg-[#38b6ff] rounded-sm'>
            A PROPOS
          </button> </HashLink>
          </div>
          
          
          
        </div>
      </div>
    </div>
  )
}

export default Header
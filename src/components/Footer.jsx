import React from 'react'

import { logos } from '../utils/constant'

import {faLocation,faPhone,faMailBulk} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTwitter,faInstagram,faYoutube} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <div>
      <div className='w-full bg-black text-center mobile:pt-10 mobile:px-2 px-8 pt-3'>
        <div className='flex tablet-sm:flex-col mobile:flex-col mobile:items-center tablet-sm:items-center justify-between '>
          <div className=' bg-[#161522] flex items-center px-4 '>
            <img src={logos.white_logo} className='h-[100px] mobile:w-full w-[100px]' alt="" />
            <div className='w-1 h-[80%] bg-white '></div>
            <div className='text-white text-start font-bold mobile:text-lg text-3xl pl-3'>
              <p> ADVANCED</p>
              <p> SERVICES</p> 
            </div>
          </div>
          <div className='text-start tablet-sm:text-center mobile:text-center tablet-sm:w-full mobile:w-full'>
            <p className='text-white font-bold'> <FontAwesomeIcon icon={faPhone} color='white' size='1x' /> (+237) 658 17 79 90</p>
            <p className='text-white font-bold'> <FontAwesomeIcon icon={faLocation} color='white' size='1x' /> Siège Yaounde-Mvan (Face Base-aérienne)</p>
            <p className='text-white font-bold'> <FontAwesomeIcon icon={faMailBulk} color='white' size='1x' /> customerservice.yaounde@advancedservicesets.com</p>
            
          </div>
          <div className='tablet-lg:hidden'>
            <h3 className='text-white font-semibold'>Suivez nous sur</h3>
            <div className='flex items-center block p-2'>
              <a href="" className='px-1'><FontAwesomeIcon icon={faFacebook} color='white' className='hover:text-blue-500' size='2x' /></a>
              <a href="" className='px-1'><FontAwesomeIcon icon={faTwitter} color='white' className='hover:text-[#38b6ff]' size='2x' /></a>
              <a href="" className='px-1'><FontAwesomeIcon icon={faInstagram} color='white' className='hover:text-pink-500' size='2x' /></a>
              <a href="" className='px-1'><FontAwesomeIcon icon={faYoutube} color='white' className='hover:text-[#ff0000]' size='2x' /></a>
            </div>
          </div>
        </div>
        <div className='full'>
          <small className='text-white font-bold'>Copyright 2023<span className='text-[#38b6ff]'> Advaced Services ETS </span>tout droit reservé</small>
        </div>
      </div>
    </div>
  )
}

export default Footer
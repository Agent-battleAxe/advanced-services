import React from 'react'

import {imgBackground, mapImage} from '../utils/constant'

const Contact = () => {
  return (
    <div id='Contact' >
        <div className="bg-[url('./assets/clean-1.jpg')] bg-cover bg-center w-[100%]">
            <div className='bg-[#161522]/90 z-2 pb-5 w-full'>
                <div className='flex tablet-lg:px-[20px] px-[50px] tablet-sm:flex-col tablet-lg:gap-5
                tablet-sm:items-center mobile:items-center
                 mobile:flex-col mobile:pt-[20px] tablet-sm:pt-[50px] pt-[150px] justify-around'>
                    <img src={mapImage.map_1} className='h-[350px] w-[500px] tablet-lg:h-[200px] tablet-lg:w-[400px]' alt="" />
                    <div className='text-start'>
                        <h2  className='font-bold text-[#38b6ff] mobile:text-[30px] mobile:pb-4 pt-4 text-[40px]'>Contactez nous</h2>
                        <form action="" className='tablet-lg:w-[80%]'>
                            <p><input type="email" required 
                                
                                className='px-8  py-3 mobile:w-[100%] tablet-sm:w-[100%] text-base font-semibold rounded-xl'
                                placeholder='Veuillez Entrer votre email svp ' 
                            /></p>
                            <textarea name="msg" 
                             id=""
                             placeholder='Entrez votre message ici svp'
                             required
                             className='mt-3 mobile:px-2 mobile:w-[100%] px-8 py-3 text-base font-semibold rounded-xl' 
                             cols="30" 
                             rows="5"></textarea>
                             <br />
                             <button className='mt-5 text-lg font-bold text-white py-2 px-4 bg-[#38b6ff] rounded-lg'>Envoyez</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact
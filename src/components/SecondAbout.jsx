import React from 'react'
import {faSoap,faScrewdriverWrench,faFile} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Link} from 'react-router-dom'



const SecondAbout = () => {
  return (
    <div id='Propos'>
        <div className='px-10 mobile:px-1 tablet-lg:px-1 tablet-sm:px-1 pt-[70px] text-center bg-slate-100'>
            <h1 className='font-semibold text-[70px] mobile:text-[50px]'>Ce que nous faisons</h1>
            <div className='flex tablet-sm:flex-col tablet-sm:items-center
                mobile:flex-col mobile:items-center mobile:gap-[50px]
             tablet-sm:gap-[50px] text-center w-full
              justify-around pt-5'>
                <div className=' flex flex-col mobile:w-[95%] tablet-sm:w-[80%] items-center tablet-lg:w-[32%]  w-[30%]'>
                    <div className='z-[2] absolute bg-[#161522] p-7 rounded-full'>
                        <FontAwesomeIcon icon={faSoap} color='white' size='2x'/>
                    </div>
                    <div className='z-[1] h-[360px]  hover:shadow-lg transition ease-in-out delay-150 bg-white rounded-xl relative top-8 pb-6'>
                        <div className='pt-[80px] text-[#161522]'>
                            <h1 className='font-black text-xl'>Nettoyage et Entretiens</h1>
                            <p className='text-[#161522] px-10 font-semibold text-start text-sm'>Construire un environnement sain pour votre entreprise </p>
                            <ul className='text-start pt-2 px-10 text-[#161522] text-sm font-semibold '>
                                <li className=''>👉 Nettoyage industriel et professionnel</li>
                                <li className=''>👉 Hygiène et assainissement</li>
                                <li className=''>👉 Entretien des espaces verts</li>
                            </ul>
            
                                <Link to='/more'><button className='py-2  none px-4 mt-3 text-white font-bold rounded-lg bg-[#38b6ff]'> En savoir Plus</button></Link>
                         
                        </div>
                    </div>
                </div>

                <div className=' flex flex-col mobile:w-[95%] tablet-sm:w-[80%] items-center tablet-lg:w-[32%] w-[30%]'>
                    <div className='z-[2] absolute bg-[#161522] p-7 rounded-full'>
                        <FontAwesomeIcon icon={faScrewdriverWrench} color='white' size='2x'/>
                    </div>
                    <div className='z-[1]  h-[360px] hover:shadow-lg transition ease-in-out delay-150 bg-[#38b6ff] rounded-xl relative top-8 pb-6'>
                        <div className='pt-[80px] text-white'>
                            <h1 className='font-black text-xl'>Maintenance et Broyage Industriel</h1>
                            <p className='text-white px-10 font-semibold text-start text-sm'>Construire un environnement sain pour votre entreprise </p>
                            <ul className='text-start pt-2 px-10 text-wjite text-sm font-semibold '>
                                <li className=''>👉 Maintenance Système  de Sécurité</li>
                                <li className=''>👉 Maintenance Climatiseur</li>
                                <li className=''>👉 Broyage industriel</li>
                            </ul>
                            <Link to='/more'><button className='py-2  none px-4 mt-3 text-[#38b6ff] font-bold rounded-lg bg-white'> En savoir Plus</button></Link>
                        </div>
                    </div>
                </div>

                <div className=' flex flex-col mobile:w-[95%] tablet-sm:w-[80%] items-center tablet-lg:w-[32%] w-[30%]'>
                    <div className='z-[2] absolute bg-[#161522] p-7 rounded-full'>
                        <FontAwesomeIcon icon={faFile} color='white' size='2x'/>
                    </div>
                    <div className='z-[1]  h-[360px] hover:shadow-lg transition ease-in-out delay-150 bg-white rounded-xl relative top-8 pb-6'>
                        <div className='pt-[80px] text-[#161522]'>
                            <h1 className='font-black text-xl'>Achat Divers</h1>
                            <p className='text-[#161522] px-10 font-semibold text-start text-sm'>Construire un environnement sain pour votre entreprise </p>
                            <ul className='text-start pt-2 px-10 text-[#161522] text-sm font-semibold '>
                                <li className=''>👉 Fourniture Matériels Bureau </li>
                                <li className=''>👉 Approvisionnement Divers</li>
                                <li className=''>👉 Etc...</li>
                            </ul>
                            <Link to='/more'><button className='py-2  none px-4 mt-3 text-white font-bold rounded-lg bg-[#38b6ff]'> En savoir Plus</button></Link>
                        </div>
                    </div>
                </div>

            </div>          
        </div>
    </div>
  )
}

export default SecondAbout
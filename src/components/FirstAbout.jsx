import React from 'react'

import { logos } from '../utils/constant'

const FirstAbout = () => {
  return (
    <div className='bg-[#38b6ff] mobile:px-2 tablet-sm:px-10 px-20 w-full'>
        <div className='flex items-center flex-col'>
            <img src={logos.bl_logo} className='h-[150px] w-[150px]' alt="" />
            <h1 className='font-bold text-center text-[70px] relative top-[-70px]
            tablet-sm:text-[40px] tablet-sm:px-2 mobile:px-0 mobile:text-[30px] mobile:top-[-60px]
             tablet-lg:text-[55px] justify-center text-white px-10'>Qui Sommes Nous?</h1>
            <p className='w-[50%] relative top-[-50px] tablet-sm:w-[70%] mobile:w-[95%] font-bold text-xl text-justify'>
                <span className='text-white'>ADVANCED SERVICES</span>  est une entreprise multiservices qui offre des
                services de haute qualité dans divers domaines aux entreprises.
                Spécialisés dans le nettoyage et l'entretien, nous vous permettons
                d'externaliser les tâches qui ne sont pas du domaine d'expertise de
                votre organisation (Maintenance, Broyage industriel et achat divers). 
            </p>
        </div>
    </div>
  )
}

export default FirstAbout
import React from 'react'

import {faCloudSun,faCalendarDays,faCalendarWeek,faCalendar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, Navigation,FreeMode, EffectCards} from 'swiper'


const Service = () => {
  return (
    <div id='Service'>
        <div className='bg-slate-100 pb-14 tablet-lg:px-[70px] tablet-sm:px-[10px] mobile:px-[10px] px-[150px]'>
            <h1 className='font-bold text-[#38b6ff] text-center pt-4 text-[60px] mobile:text-[40px]'>Nos Prestations</h1>
            <div className='pt-10 '>
                <Swiper
                    // effect={"cards"}
                    slidesPerView={3}
                    spaceBetween={20}
                    freeMode={true}
                    grabCursor={true}
                    modules={[FreeMode,Autoplay]}
                    breakpoints={{
                        "@0.00": {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        "@0.60": {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        "@1.00": {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        
                      }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        }}
                    
                >
                 
                    <SwiperSlide>
                        <div className='bg-[#161522] flex justify-center h-[450px] flex-col px-10 pt-3 pb-5 rounded-2xl'>
                            <FontAwesomeIcon icon={faCalendarDays} color='white' size='2x'/>
                            <h1 className='font-bold text-white text-[20px] pt-5'>Prestation quotidiennes</h1>
                            <small className='text-white font-semibold'>✔️ Vidage des corbeilles à papiers</small>
                            <small className='text-white font-semibold'>✔️ Vidage et essuyage des cendriers</small>
                            <small className='text-white font-semibold'>✔️ Nettoyage et désinfection des postes téléphoniques</small>
                            <small className='text-white font-semibold'>✔️ Nettoyage et désinfection des claviers</small>
                            <small className='text-white font-semibold'>✔️ Balayage humide et nettoyage des sols carrelés</small>
                            <small className='text-white font-semibold'>✔️ Etc..</small>   
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center '>
                        <div className='bg-white  flex justify-center h-[450px] flex-col px-10 pt-3 pb-5 rounded-2xl'>
                            <FontAwesomeIcon icon={faCalendarWeek} color='#161522' size='2x'/>
                            <h1 className='font-bold text-[#161522] text-[20px] pt-5'>Prestation hebdomadaires</h1>
                            <small className='text-[#161522] font-semibold'>✔️ Entretien mécanique des sols et carrelage</small>
                            <small className='text-[#161522] font-semibold'>✔️ Nettoyage des plinthes et des cadres en aluminium</small>
                            <small className='text-[#161522] font-semibold'>✔️ Nettoyage des armoires, des cadres et autres objets en hauteur</small>
                            <small className='text-[#161522] font-semibold'>✔️ Nettoyage et détartrage des équipements sanitaires et robinetteries (bidets,
                                    cuvettes W.C & urinoirs)</small>
                            <small className='text-[#161522] font-semibold'>✔️ Etc...</small>
                            <small className='text-[#161522] font-semibold'></small>   
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center'>
                        <div className='bg-[#38b6ff] flex justify-center h-[450px] flex-col px-10 pt-3 pb-5 rounded-2xl'>
                            <FontAwesomeIcon icon={faCalendar} color='white' size='2x'/>
                            <h1 className='font-bold text-white text-[20px] pt-5'>Prestation mensuelles</h1>
                            <small className='text-white font-semibold'>✔️ Enlèvement des taches ponctuelles et auréoles sur les moquettes</small>
                            <small className='text-white font-semibold'>✔️ Décapage et lustrage des sols en carrelage</small>
                            <small className='text-white font-semibold'>✔️ Destruction des toiles d’araignées</small>
                            <small className='text-white font-semibold'>✔️ Entretien des espaces verts</small>
                            <small className='text-white font-semibold'>✔️ Etc...</small>
                            <small className='text-white font-semibold'></small>   
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center'>
                        <div className='bg-red-600  h-[450px] flex justify-center  flex-col px-10 pt-3 pb-5 rounded-2xl'>
                            <FontAwesomeIcon icon={faCalendarDays} color='white' size='2x'/>
                            <h1 className='font-bold text-white text-[20px] pt-5'>Prestation semestrielles</h1>
                            <small className='text-white font-semibold'>✔️ Rénovation des moquettes par Shampooinage</small>
                            <small className='text-white font-semibold'>✔️ Travaux d’hygiène et assainissement (Désinsectisation, Dératisation, Désinfection) si
                            inclus dans la cotation ; sinon travaux effectués sur bon de commande.</small>
                           
                            <small className='text-white font-semibold'>✔️ Etc...</small>
                            <small className='text-white font-semibold'></small>   
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center '>
                        <div className='bg-green-500 h-[450px] flex justify-center  flex-col px-10 pt-3 pb-5 rounded-2xl'>
                            <FontAwesomeIcon icon={faCalendarWeek} color='white' size='2x'/>
                            <h1 className='font-bold text-white text-[20px] pt-5'>Prestation particulières (Extra): sur bon de commande</h1>
                            <small className='text-white font-semibold'>✔️ Nettoyage des stores, des rideaux, des enseignes lumineuses</small>
                            <small className='text-white font-semibold'>✔️ Travaux d’assainissement (désinsectisation, dératisation, désinfection)</small>
                            <small className='text-white font-semibold'>✔️ Travaux de remise en état des villas et autres locaux,</small>    
                            <small className='text-white font-semibold'>✔️ Shampouinage des chaises et fauteuils</small> 
                            <small className='text-white font-semibold'>✔️ Etc...</small>

                            <small className='text-white font-semibold'></small>   
                        </div>
                    </SwiperSlide>
                
                </Swiper>
            </div>
        </div>

    </div>
  )
}

export default Service
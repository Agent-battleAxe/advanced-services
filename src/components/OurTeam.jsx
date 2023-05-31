import React from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, Navigation} from 'swiper'
import { ourTeamImg } from '../utils/constant'

import "swiper/css"

const OurTeam = () => {
  return (
    <div>
        <div className='bg-[#161522] pt-[100px]  w-[100%] text-center pb-20'>
            <h1 className="font-bold text-white mobile:text-[40px] text-[60px]">Notre Equipe</h1>
            <div className='font-semibold mobile:px-[20px] tablet-sm:px-[100px] text-lg text-white px-[200px]'>
                <p>Le personnel d'Advanced Services est constitué d'une équipe
                    qui agit en interne pour la gestion organisationnelle de toutes
                    les activités et d'une équipe qui agit sur le terrain pour
                    réaliser le service de nettoyage. Cette dernière est
                    constitué du manager et des techniciens de surfaces
                    spécialisés dans le nettoyage professionnel des surfaces.</p>
            </div>
          
                <div className='pt-20'>
                <Swiper
                 style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='flex  justify-center' >
                        <div className='w-[70%] mobile:w-[95%] bg-white/90 text-center py-5 px-2 rounded-lg'>
                            <div className='flex tablet-sm:flex-col tablet-sm:items-center mobile:flex-col mobile:items-center'>
                                <img src={ourTeamImg.our_team} alt="" className='h-[300px] w-[300px] 
                                tablet-lg:h-[250px] tablet-lg:w-[250px] mobile:h-[200px] mobile:w-[200px]  rounded-full' />
                                <div className='pl-3'>
                                <h2 className='text-xl font-bold pb-5 text-[#161522]'>Manager</h2>
                                    <p className='text-base text-start font-semibold tablet-lg:text-justify'>Le Manager vient en appui sur les différents sites pour la bonne 
                                    exécution des prestations. Il supervise les travaux de
                                    nettoyage en effectuant des visites fréquentes afin de vérifier :</p>
                                    <div className='flex flex-col text-start font-semibold pt-5'>
                                        <small>⭐L’organisation générale du travail</small>
                                        <small>⭐ L’effectivité et la qualité des prestations</small>
                                        <small>⭐ La ponctualité et le respect des mesures disciplinaires</small>
                                        <small>⭐  La distribution rationnelle du matériel et des produits</small>

                                    </div>
                                   
                                </div>
                               
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className='flex justify-center'>
                        <div className='w-[70%] mobile:w-[95%] bg-white/90 text-center py-5 px-2 rounded-lg'>
                                <div className='flex tablet-sm:flex-col tablet-sm:items-center mobile:flex-col mobile:items-center'>
                                    <img src={ourTeamImg.tech_sur_2} alt="" className='h-[300px] w-[300px]
                                        tablet-lg:h-[250px] tablet-lg:w-[250px] mobile:h-[200px] mobile:w-[200px] 
                                     tablet-lg:h-[250px] tablet-lg:w-[250px] rounded-full' />
                                    <div className='pl-3'>
                                    <h2 className='text-xl font-bold pb-5 text-[#161522]'>Techniciens de surfaces</h2>
                                        <p className='text-base text-start font-semibold tablet-lg:text-justify'>Les techniciens de surface sont supervisés lors de l'exécution
                                                de leurs tâches d'un chef d'équipe. Ils seront répartis par
                                                secteur et effectueront le nettoyage de manière satisfaisante.</p>
                                        <div className='flex flex-col text-start font-semibold pt-5'>
                                            <small>⭐ Exécuter toutes les tâches liées aux prestations telles que
                                                définies dans le contrat du client</small>
                                            <small>⭐ Procéder à l’entretien mécanique des équipements</small>
                                            <small>⭐ Veiller à la propreté du matériel de nettoyage</small>
                                            <small>⭐  Signaler toute anomalie constatée sur site de travail</small>

                                        </div>
                                    
                                    </div>
                                
                                </div>
                            </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            


        </div>
    </div>
  )
}

export default OurTeam
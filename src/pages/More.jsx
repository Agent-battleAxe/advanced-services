import React from 'react'
import { imgBackground, ourTeamImg } from '../utils/constant'

const More = () => {
  return (
    <div>
        <div className="bg-[url('./assets/clean-1.jpg')] bg-cover bg-center h-[70vh] w-full">
            <div className='bg-[#161522]/60 h-[inherit] w-[inherit] flex justify-center items-center'>
                <h1 className='text-white font-bold text-[90px] 
                tablet-lg:text-[50px] tablet-sm:text-[50px] mobile:text-[40px]' >En savoir plus </h1>
            </div>
        </div>
        <div className='bg-slate-100'>
            <div className='bg-[#161522] text-center p-7'>
                <h1 className='text-white font-bold text-[30px] tablet-sm:text-[25px] mobile:text-[20px]'>OFFRE DE SERVICE</h1>       
                <div>
                    <h1 className='text-[#38b6ff] font-bold text-[40px] tablet-sm:text-[35px] mobile:text-[30px]'>NETTOYAGE ET</h1>
                    <h1 className='text-[#38b6ff] font-bold text-[40px] tablet-sm:text-[35px] mobile:text-[35px]'> ENTRETIEN</h1> 
                </div>
            </div>
            <div className='flex px-5 justify-center gap-3 pt-5'>
                <img src={imgBackground.tools_1} className='h-[650px] tablet-sm:hidden mobile:hidden rounded-lg ' alt="" />
                <div>
                    <h1 className='text-[#38b6ff] text-center font-bold text-[25px]'>Nettoyage Industriel et Professionnel </h1>
                    <div className='text-[#161522] py-5 px-10 text-center bg-white hover:shadow-md'>
                        <h1 className='font-bold text-lg'>Prestations quotidiennes</h1>
                        <div className='text-start text-sm font-medium'>
                            <p>⭐ Vidage des corbeilles à papiers</p>
                            <p>⭐ Vidage et essuyage des cendriers</p>
                            <p>⭐ Dépoussiérage des bureaux et de tous les objets meublants</p>
                            <p>⭐ Nettoyage des portes et cloisons</p>
                            <p>⭐ Balayage humide et nettoyage des sols des parties communes (couloirs, escaliers etc.)</p>
                            <p>⭐ Nettoyage de la vitrerie exposée intérieure et extérieure non bloquée</p>
                            <p>⭐ Dépoussiérage des armoires et placards</p>
                            <p>⭐ Nettoyage des miroirs et de la robinetterie</p>
                            <p>⭐  Désinfection des sanitaires et désodorisation (cuvettes W.C., urinoirs, bidets,cuvette lave-mains)</p>
                            <p>⭐ Balayage des parkings et cours</p>
                            <p>⭐ Déplacement des ordures vers les bacs prévus à cet effet par le client.</p>
                        </div>
                    </div>

                    <div className='text-[#161522] py-5 px-10 text-center bg-white hover:shadow-md mt-3'>
                        <h1 className='font-bold text-lg'>Prestations hebdomadaires</h1>
                        <div className='text-start text-sm font-medium'>
                            <p>⭐ Entretien mécanique des sols et carrelage</p>
                            <p>⭐ Nettoyage des plinthes et des cadres en aluminium</p>
                            <p>⭐ Nettoyage des armoires, des cadres et autres objets en hauteur</p>
                            <p>⭐ Nettoyage et détartrage des équipements sanitaires et robinetteries (bidets,cuvettes W.C & urinoirs)</p>
                        </div>
                    </div>
                    <div className='text-[#161522] py-5 px-10 text-center bg-white hover:shadow-md mt-3'>
                        <h1 className='font-bold text-lg'>Prestations mensuelles</h1>
                        <div className='text-start text-sm font-medium'>
                            <p>⭐ Enlèvement des taches ponctuelles et auréoles sur les moquettes</p>
                            <p>⭐ Décapage et lustrage des sols en carrelage</p>
                            <p>⭐ Destruction des toiles d’araignées</p>
                            <p>⭐ Entretien des espaces verts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#161522] py-5'>
            <div className='flex justify-center'>
                <div className='h-[30px] w-[80%] bg-[#38b6ff] rounded-t-lg rounded-tr-lg'></div>
            </div>
            <div className='flex justify-center tablet-sm:flex-col mobile:flex-col tablet-sm:items-center tablet-lg:px-2 mobile:items-center'>
                <div className=' mobile:px-2 tablet-sm:px-2' >
                    <div className='bg-white w-[95%] mobile:w-full  tablet-sm:w-full py-5 px-[50px] rounded-lg'>
                        <h1 className='font-bold text-lg text-[#161522]'>Prestations semestrielles</h1>
                        <div className='text-start text-sm font-medium'>
                                <p>⭐ Enlèvement des taches ponctuelles et auréoles sur les moquettes</p>
                                <p>⭐ Décapage et lustrage des sols en carrelage</p>
                                <p>⭐ Destruction des toiles d’araignées</p>
                                <p>⭐ Entretien des espaces verts</p>
                        </div>
                    </div>
                    <div className='w-[95%] text-white py-5 mt-5 px-[20px] rounded-lg'>
                        <h1 className='font-bold text-lg text-white]'>Prestations particulières (Extra): sur bon de commande</h1>
                        <div className='text-start text-xs font-medium'>
                                <p>👉 Nettoyage des stores, des rideaux, des enseignes lumineuses</p>
                                <p>👉 Travaux d’assainissement (désinsectisation, dératisation, désinfection)</p>
                                <p>👉 Shampouinage des chaises et fauteuils</p>
                                <p>👉 Travaux de remise en état des villas et autres locaux,</p>
                                <p>👉 Nettoyage intégral des surfaces vitrées et autres revêtements des façades</p>
                                <p>👉 Décapage et nettoyage des sols poreux et des surfaces carrelées extérieures.</p>
                                <p>👉 Nettoyage des façades en hauteur difficilement accessibles</p>
                        
                        </div>
                    </div>
                </div>
                <img src={imgBackground.sourire_1} className='h-[350px] tablet-sm:px-3 mobile:px-3' alt="" />
            </div>
        </div>
    </div>
  )
}

export default More
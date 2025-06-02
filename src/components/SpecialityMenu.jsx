import React from 'react'
import { specialityData } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom';


const SpecialityMenu = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center gap-4 py-16 text-gray-700' id='speciality'>
            <h1 className='text-3xl font-medium text-cyan-700'>Our Specialised Care</h1>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
                {specialityData.map((item, index) => (
                    <Link onClick={navigate('/appointment')}to={``} key={index} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] translate-all transition-all duration-500 key={index}'>
                        <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                        <p>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>  

        
    )
}

export default SpecialityMenu

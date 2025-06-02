import React from 'react'
import { assets } from '../assets/assets'
import { Navigate, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-cyan-600 rounded-lg px-6 md:px-10 lg:px-20 '>
            {/* Left side */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-2xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment<br/>With Trusted Doctor</p>
                <a onClick={navigate('/appointment')} href="#speciality" className='flex items-center gap-2 bg-white text-cyan-600 px-8 py-3 rounded-full text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment <img className="w-3"src="./src/assets/right-arrow.png" alt="" srcset="" />
                </a>
            </div>

            {/* Right side */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Header

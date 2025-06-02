import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" srcset="" />
        <div className='flex flex-col justify-center gap-6 items-start'>
          <p className='font-semibold text-lg text-gray-600'>Our Clinic</p>
          <p className='text-gray-500'>1st Floor, Midas Square, 110, Godadara Rd,</p>
          <p className='text-gray-500'>Shakti Nagar, Surat, Gujarat 395010</p>
          <p className=' text-gray-500'>Tel: +91 8733905727</p>
          <p className='text-gray-500'>Email: saarthihomoeopathy.30@gmail.com</p>
          <form action="https://maps.app.goo.gl/qjE6BiyJXnNGwqK1A" method="get" target="_blank" >
          <button  className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Location</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default contact

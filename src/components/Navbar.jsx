import React, { useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';
const Navbar = () => {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-1.5 mb-5 border-b border-b-gray-400'>
      <img src="./src/assets/logo.png" className='w-20 cursor-pointer' alt="cd" srcset="" />
      <ul className='hidden md:flex items-center gap-5 font-semibold text-[9px]'>
        <NavLink to='/'>
          <li className='py-0.5'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-gray-500 w-4/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-0.5'>ABOUT</li>
          <hr className='border-none outline-none h-0.5   bg-gray-500 w-4/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-0.5'>CONTACT</li>
          <hr className='border-none outline-none h-0.5   bg-gray-500 w-4/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {/* {
          token
            ? <div className='flex items-center gap-2 cursor-pointer group relative' >
              <img src="./src/assets/profile_pic.jpg" className='w-8 rounded-full' alt="" srcset="" />
              <img src="./src/assets/Drop-down.png" className='w-2.5' alt="" srcset="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='text-[10px] min-w-30 bg-stone-100 rounded flex flex-col gap-3 p-3'>
                  <p onClick={() => navigate('myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('myappointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-cyan-600 text-white py-2 px-4 rounded-full font-light hidden md:block text-[10px]'>Create Account</button>
        } */}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" srcset="" />
        {/* Mobile menu */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white  transtion-all duration-70 `}>
          <div className='flex items-center justify-between px-3 py-4'>
            <img className='w-20' src="./src/assets/logo.png" alt="" srcset="" />
            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" srcset="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block ' >Home</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block ' >About</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block ' >Contact</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar

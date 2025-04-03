import React, { useState } from 'react'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom';  
import { Bars3Icon, MagnifyingGlassCircleIcon, UserIcon } from '@heroicons/react/24/outline'

const Navs = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleBurgerClick =() => setIsOpen(!isOpen)

  return (
    <section className='px-4 py-4'>
      <div className='flex flex-1 justify-between items-center'>
          
          <h1 className='text-2xl max-md:text-2xl font-montserrat text-coral-red font-bold hover:'>REAL<span className='text-2xl text-blue-500 font-bold font-palanquin max-md:text-2xl'>est</span> </h1> 
        
        
          <ul className='flex-1 flex justify-center items-center font-bold text-gray-600 font-palanquin gap-8 max-lg:hidden'>
            {navLinks.map((navLink) => (
              <li key={navLink.href} className='text-base'>
                <a href="/">
                  {navLink.label}
                </a>

              </li>
            ))}
          </ul>
          
          <div onClick={handleBurgerClick} className='className="relative"'>
            <Bars3Icon className='w-8 text-slate-gray z-100 lg:hidden '/>

            {isOpen && (
              <ul className="absolute z-100 right-0 mt-2 w-48 bg-white shadow-3xl rounded-lg p-4 space-y-2">
                <li className="hover: cursor-pointer font-bold text-base"><a href="">Buy</a></li>
                <li className="hover:text-slate-gray font-palanquin cursor-pointer font-bold  text-base"><a href="">Rent</a></li>
                <li className="hover:text-slate-gray font-palanquin cursor-pointer font-bold text-base"><a href="">Sell</a></li>
                <li className="hover:text-slate-gray font-palanquin cursor-pointer font-bold  text-base"><a href="">Find Agent</a></li>
              </ul>
            )}

          </div>

          <div className='flex justify-between items-center gap-6 px-4 max-lg:hidden'>
            <MagnifyingGlassCircleIcon 
            className='w-6 h-6 text-gray-600'
             />
            <div className='flex justify-between items-center ' >
              <UserIcon className='w-6 h-5 text-gray-600'/>
              <Link to="/login" className="text-sm text-gray-600 font-palanquin">
                Sign In
              </Link>
            </div>
              <Link to="/signup">
                <button className="bg-blue-400 text-white px-6 py-2 rounded font-palanquin hover:text-base">
                  Sign Up
                </button>
              </Link>
          </div>
        


      </div>
    </section>
  )
}

export default Navs
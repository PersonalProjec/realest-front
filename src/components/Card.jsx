import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/outline';

const Card = ({imgURL, title, location, price, city, bedrooms, bathrooms, area}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full shadow-3xl '>
      
        <div className=''>
          <img 
            src={imgURL} 
            alt="image" 
             className="w-full h-48 object-cover "
          />
        </div>
        <div className='p-4'>
          <div className='flex justify-between mt-4 items-center'>
            <p className='text-base font-bold font-palanquin '>{title}</p>
            <p className='text-xl font-bold text-blue-500'>{`$${price}`}</p>
          </div>
          <div className='flex justify-start gap-2 mt-2'>
            <MapPinIcon className="h-4 w-4 text-black"/>
            <p className='text-slate-gray text-sm font-palanquin'>{location}</p>
            <p className='text-slate-gray text-sm font-palanquin'>{city}</p>
          </div>
          <div className='flex justify-between items-center mt-2'>
            <div className='flex gap-1'>
              <HomeIcon className="h-4 w-4 text-black"/>
              <p className='text-slate-gray text-sm font-palanquin'>{bedrooms}</p>
              <p className='text-slate-gray text-sm font-palanquin'>Beds</p>
            </div>
            <div className='flex gap-1'>
              <HomeIcon className="h-4 w-4 text-black"/>
              <p className='text-slate-gray text-sm font-palanquin'>{bathrooms}</p>
              <p className='text-slate-gray text-sm font-palanquin'>Beds</p>
            </div>
            <div className='flex gap-1'>
              <HomeIcon className="h-4 w-4 text-black"/>
              <p className='text-slate-gray text-sm font-palanquin'>{area}</p>
              <p className='text-slate-gray text-sm font-palanquin'>Beds</p>
            </div>

          </div>
          <div className='flex justify-center mt-2'>
          <button
          className='text-blue-500 m-auto text-lg font-palanquin font-bold hover: text-center'
          >View Details</button>
          </div>
        </div>
      </div>

    
  )
}

export default Card
import React, { useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Card from '../Card';
import { PROPERTIES } from '../../constants';

const FeatureProperties = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const endIndex = startIndex + itemsPerPage;

  const handleNext = () => {
    if (endIndex < PROPERTIES.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <section>
      <div className="container px-4 mx-auto mt-4">
        
        {/* <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold">Featured Properties</h2>
          <div className="flex gap-2">
            <button onClick={handlePrev} disabled={startIndex === 0} className="rounded-lg border-2 p-2 border-blue-500 hover:bg-blue-500 transition ease-out duration-300">
              <ArrowLeftIcon className="h-6 w-6 text-black" />
            </button>
            <button onClick={handleNext} disabled={endIndex >= PROPERTIES.length} className="rounded-lg border-2 p-2 border-blue-500 hover:bg-blue-500 transition ease-out duration-300">
              <ArrowRightIcon className="h-6 w-6 text-black" />
            </button>
          </div>
        </div> */}

        <div className='mt-6 border-lg grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
          {PROPERTIES.slice(startIndex, endIndex).map((property) => (
            <Card key={property.price} {...property} />
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center'>
        
      </div>
       <div className='flex justify-center items-center mt-10'>
        <button className='border-2 p-2 rounded-lg border-blue-500 text-blue-600 font-palanquin :hover '> View All Properties</button>
       </div>
    </section>
  );
};

export default FeatureProperties;

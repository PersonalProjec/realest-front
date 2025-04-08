import React from 'react';
import Card from '../../Card';
import { PROPERTIES } from '../../../constants';    

const DaHome = () => {
  

  return (
    <section>
      <div className="container px-4 mx-auto mt-4">
      <h3 className="text-2xl font-bold mb-4">Home</h3>
        
        <div className='mt-6 border-lg grid lg:grid-cols- md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
          {PROPERTIES.map((property) => (
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

export default DaHome;

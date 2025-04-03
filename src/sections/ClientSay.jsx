import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'; // Import useState
import { testimonials } from '.'; // Adjust the import path if needed
import ClientSayCard from '../components/ClientSayCard';

const ClientSay = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className=" ">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">Read testimonials from our satisfied customers</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Display only one ClientSayCard based on activeIndex */}
          <ClientSayCard key={testimonials[activeIndex].name} {...testimonials[activeIndex]} />

          <div className="flex justify-center space-x-4 mt-4"> {/* Added mt-4 for spacing */}
            <button onClick={handlePrev}>
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button onClick={handleNext}>
              <ChevronRightIcon className="h-6 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSay;
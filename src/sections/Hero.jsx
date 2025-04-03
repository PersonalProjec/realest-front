import React from 'react';
import house from '../assets/images/house.jpg'; // Ensure the path is correct
import SearchBar from '../components/SearchBar';

const Hero = () => {
  return (
    <section className="relative">
      <div
        className=" h-[600px] bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(${house})`, // Corrected template literal usage
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-xl font-montserrat text-white mb-8 max-w-2xl">
            Discover thousands of properties for sale and rent across the country.
            Start your search with PropSphere today.
          </p>
        </div>

        <div className="absolute bottom-[1px] left-1/2 transform -translate-x-1/2 z-20 w-full px-4 md:px-8 lg:px-16">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
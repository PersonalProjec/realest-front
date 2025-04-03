import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '.'

const Services = () => {
  return (
    <section className='mt-8'>
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">
              PropSphere offers a complete range of services for all your real estate needs
            </p>
            


        </div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {services.map((trays)=> (
            <ServiceCard
            key={trays.icon}
            {...trays}
            />

        ))}
        
        </div>
      </div>
    </section>
  )
}

export default Services
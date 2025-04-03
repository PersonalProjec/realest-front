import React from 'react'
import { facebook, instagram, twitter } from '../assets/icons'



const Footer = () => {
  return (
    <footer className='text-white'>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h1 className='text-2xl max-md:text-2xl font-montserrat text-coral-red font-bold'
            >REAL<span className='text-2xl text-blue-500 font-bold font-palanquin max-md:text-2xl'>est</span> </h1> 
            <p className="text-gray-300 mb-4">
              Find your dream property with PropSphere - the modern real estate platform for buyers, sellers, and agents.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-realestate-primary bg-white rounded-full p-1">
                <img src={facebook} alt=""  className=' w-8 h-8'/>
              </a>
              <a href="#" className="text-gray-300 hover:text-realestate-primary bg-white rounded-full p-1">
              <img src={twitter} alt=""  className=' w-8 h-8'/>
              </a>
              <a href="#" className="text-gray-300 hover:text-realestate-primary bg-white rounded-full p-1">
              <img src={instagram} alt=""  className=' w-8 h-8'/>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a to="/buy" className="text-gray-300 hover:text-realestate-primary">Buy Property</a></li>
              <li><a to="/rent" className="text-gray-300 hover:text-realestate-primary">Rent Property</a></li>
              <li><a to="/sell" className="text-gray-300 hover:text-realestate-primary">Sell Property</a></li>
              <li><a to="/agents" className="text-gray-300 hover:text-realestate-primary">Find Agents</a></li>
              <li><a to="/mortgage" className="text-gray-300 hover:text-realestate-primary">Mortgage Calculator</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a to="/guides" className="text-gray-300 hover:text-realestate-primary">Buyer's Guide</a></li>
              <li><a to="/guides" className="text-gray-300 hover:text-realestate-primary">Seller's Guide</a></li>
              <li><a to="/guides" className="text-gray-300 hover:text-realestate-primary">Renter's Guide</a></li>
              <li><a to="/blog" className="text-gray-300 hover:text-realestate-primary">Real Estate Blog</a></li>
              <li><a to="/faq" className="text-gray-300 hover:text-realestate-primary">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Real Estate Avenue</p>
              <p>Property City, PC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: <a href="mailto:info@realest.com" className="hover:text-realestate-primary">info@propsphere.com</a></p>
            </address>
          </div>
          



        </div>
      </div>

    </footer>
  )
}

export default Footer
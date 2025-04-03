import React from 'react'
import { Hero, FeatureProperties, Services, ClientSay, Dream, Footer, } from './sections'
import Navs from './components/Navs'


function App() {
  

  return (
    <main className=''>
      
      <Navs />
      
      <section className=' relative'>
        <Hero/>
      </section>
      
      <section className=''>
        <FeatureProperties/>
      </section>
      <section className=''>
        <Services/>
      </section>
      <section className='py-16 bg-gray-100 mt-6'>
        <ClientSay/>
      </section>
      <section className='py-16 bg-blue-500 '>
        <Dream/>
      </section>  
      <section className='bg-black'>
        <Footer/>
      </section>
    </main>
  )
}

export default App

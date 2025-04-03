import React from 'react'

const Dream = () => {
  return (
    <section className="">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of satisfied customers who found their perfect home with PropSphere.
            Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button size="lg" className="bg-white text-blue hover:bg-gray-100 p-2 rounded-lg">
              Browse Properties
            </button>
            <button size="lg"  className="border-white text-white hover:bg-white/10 p-2 rounded-lg">
              List Your Property
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default Dream
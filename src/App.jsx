import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero, FeatureProperties, Services, ClientSay, Dream, Footer } from './sections';
import Navs from './components/Navs';
import AuthForm from './components/AuthForm'; 

function App() {
  return (
    <Router>
      <main className="">
        <Navs />

        <Routes>
          <Route path="/login" element={<AuthForm isSignup={false} />} />
          <Route path="/signup" element={<AuthForm isSignup={true} />} />
          

          <Route
            path="/"
            element={
              <>
                <section className="relative">
                  <Hero />
                </section>
                <section className="">
                  <FeatureProperties />
                </section>
                <section className="">
                  <Services />
                </section>
                <section className="py-16 bg-gray-100 mt-6">
                  <ClientSay />
                </section>
                <section className="py-16 bg-blue-500 ">
                  <Dream />
                </section>
                <section className="bg-black">
                  <Footer />
                </section>
              </>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
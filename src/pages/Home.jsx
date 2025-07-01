import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HerosSection";
import "../App.css";
import VisionMission from "../components/VisionSection";
import CoreValuesSection from "../components/CoreValues";
import OfferedCountriesSection from "../components/offeredCountries";
import TestimonialSection from "../components/TestimonialCard";
import Programs from "../components/Programs";
import SubscribeSection from "./SubscribeSection";


const Home = () => {
  return (

    
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-50">
       
<HeroSection/>

      </section>

{/* <VisionMission/> */}
<CoreValuesSection/>


  

      {/* About Section */}
      <section className="px-6 py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">About SS Overseas</h2>
          <p className="text-lg mb-6">
            We are a premier consultancy firm guiding students through studying abroad—from counseling to visa support.
          </p>
          <p className="text-lg">
            We also assist with GRE, TOEFL, IELTS, SAT, and more, offering complete preparation and guidance.
          </p>
        </div>
      </section>

      {/* Abroad Programs */}

      <Programs/>
     

      {/* Story Timeline */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Story of SS Overseas Education</h2>
          <div className="text-left space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Started in 2015</h3>
              <p>Helping Indian students reach USA, UK, Canada, and Australia. First 50 students successfully placed.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Now in 2024</h3>
              <p>Leading with AI counseling, VR tours, and over 1800+ global placements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Offered */}
      <section>
  <OfferedCountriesSection/>
</section>

      {/* Testimonials */}


      <TestimonialSection/>

      {/* Newsletter */}

      <SubscribeSection/>
     
    </main>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HerosSection";
import "../App.css";
import VisionMission from "../components/VisionSection";
import CoreValuesSection from "../components/CoreValues";


const Home = () => {
  return (

    
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-50">
       
<HeroSection/>

      </section>

<VisionMission/>
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
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-12">Abroad Programs</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "10 Month's Apple Academy Program",
              desc: "Learn coding, design, and business using Apple tools. Ideal for future developers and entrepreneurs.",
            },
            {
              title: "Two Years Master's Program",
              desc: "Focus on academics and global opportunities like research, internships, and leadership training.",
            },
            {
              title: "Three Years Bachelor's Program",
              desc: "Join top universities with expert faculty and global exposure from day one.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-purple-700 mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.desc}</p>
              <Link to="/courses" className="text-purple-700 font-semibold hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

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
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-10">Countries We Offer</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["United States", "Australia", "Italy", "Saudi Arabia", "India", "Germany"].map((country, i) => (
            <span key={i} className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-medium shadow-sm">
              {country}
            </span>
          ))}
        </div>
        <p className="mt-6 text-lg text-gray-700">We provide educational guidance for students across these countries and more.</p>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">Transforming Visa Dreams into Reality</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          SS Overseas provides full support in documentation, university selection, and visa filing.
        </p>
        <Link to="/reviews" className="mt-4 inline-block text-purple-700 font-semibold hover:underline">
          Read All Reviews →
        </Link>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Subscribe for Updates</h2>
        <p className="mb-6 text-lg text-gray-600 max-w-xl mx-auto">
          Stay informed about exams, deadlines, visa news, and study abroad tips.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border border-purple-300 px-4 py-2 rounded-md w-full"
          />
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-900 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
};

export default Home;

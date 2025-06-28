import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-white to-purple-50 text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-4">Welcome to SS Overseas Education</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          A Leading And Trusted Education Consultancy. We forge global partnerships and guide you through every step of your international academic journey.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/contact">
            <button className="bg-purple-700 hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
              Claim Your Visa Journey!
            </button>
          </Link>
          <Link to="/contact">
            <button className="border-2 border-purple-700 text-purple-700 hover:bg-purple-100 px-6 py-3 rounded-lg font-semibold">
              Book Appointment
            </button>
          </Link>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 py-16 text-center bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Vision</h2>
          <p className="mb-10 text-lg">To be the premier global education consultancy, empowering students to achieve their academic and career aspirations.</p>

          <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Mission</h2>
          <p className="text-lg">
            SS Overseas Education is dedicated to providing comprehensive and personalized educational consultancy. We aim to connect students with top institutions worldwide, ensuring they receive the best opportunities.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">Our Core Values</h2>
        <ul className="flex flex-wrap justify-center gap-6 text-lg font-medium">
          {["Integrity", "Excellence", "Commitment", "Respect", "Responsibility"].map((value, index) => (
            <li key={index} className="bg-purple-100 px-6 py-3 rounded-full text-purple-800 shadow-md">
              {value}
            </li>
          ))}
        </ul>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">About SS Overseas</h2>
          <p className="text-lg mb-6">
            SS Overseas Education is a premier consultancy firm dedicated to guiding students through the intricate process of studying abroad. From initial counseling to final visa support, we make international education accessible and achievable.
          </p>
          <p className="text-lg">
            We also prepare students for exams like GRE, TOEFL, IELTS, ACT, SAT, and more. Our support is comprehensive, covering every detail with clarity and confidence.
          </p>
        </div>
      </section>

      {/* Abroad Programs */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Abroad Programs</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "10 Month's Apple Academy Program",
              desc: "Learn coding, design, and business using Apple tools. For future developers, designers, and entrepreneurs.",
            },
            {
              title: "Two Years Master's Program",
              desc: "Prioritize studies and seize global opportunities in research, internships, and leadership development.",
            },
            {
              title: "Three Years Bachelor's Program",
              desc: "Explore top universities with excellent curricula, faculty, and global exposure from day one.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-purple-700 mb-2">{item.title}</h3>
              <p className="text-base text-gray-700">{item.desc}</p>
              <div className="mt-4">
                <Link to="/courses" className="text-purple-700 font-semibold hover:underline">Read More →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Timeline */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Story Of SS Overseas Education</h2>
          <div className="text-left space-y-6">
            <div>
              <h3 className="text-xl font-semibold">We Started In 2015</h3>
              <p>Founded to help Indian students pursue education in the USA, UK, Canada, and Australia. First 50 students successfully placed.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Now 2024</h3>
              <p>Leader in education consultancy with AI-driven counseling, VR campus tours, and 1800+ students placed globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries We Offer */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-10">Countries We Offer</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["United States", "Australia", "Italy", "Saudi Arabia", "India", "Germany"].map((country, index) => (
            <span key={index} className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-medium">
              {country}
            </span>
          ))}
        </div>
        <p className="mt-6 text-lg">We provide education guidance for students in all these countries and more.</p>
      </section>

      {/* Testimonials Section (placeholder) */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">Transforming Visa Dreams into Reality</h2>
        <p className="max-w-2xl mx-auto text-lg">
          SS Overseas provides full support in documentation, university selection, and visa filing. Let’s make your dream a reality.
        </p>
        <Link to="/reviews" className="mt-4 inline-block text-purple-700 font-semibold hover:underline">
          Read Our All Reviews
        </Link>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Subscribe for Updates</h2>
        <p className="mb-6 text-lg text-gray-600 max-w-xl mx-auto">
          Get tips and news about studying abroad, exams, deadlines, and visa updates.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border border-purple-300 px-4 py-2 rounded-md w-full"
          />
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-900"
          >
            Subscribe Now
          </button>
        </form>
      </section>
    </main>
  );
};

export default Home;

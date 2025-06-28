import React from 'react';

const Courses = () => {
  return (
    <div className="px-4 py-10 md:px-20">
      <h1 className="text-4xl font-bold text-primary mb-6">Explore Our Courses</h1>
      <p className="text-lg text-baseGray mb-10 max-w-3xl leading-relaxed">
        Whether you're just beginning your academic journey or aiming to specialize further, SS Overseas helps you access world-class undergraduate, postgraduate, and certification programs in top universities around the world.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {/* Apple Developer Academy */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-darkPurple mb-2">🍏 10-Month Apple Developer Academy</h2>
          <p className="text-base text-baseGray">
            Learn app development, UI/UX design, and product innovation. Ideal for tech enthusiasts who want to create real-world apps and start their careers in tech.
          </p>
        </div>

        {/* Two-Year Master’s */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-darkPurple mb-2">🎓 Two-Year Master’s Program</h2>
          <p className="text-base text-baseGray">
            Deepen your expertise and expand your global career with research, internships, and a globally respected degree in your specialization.
          </p>
        </div>

        {/* Three-Year Bachelor’s */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-darkPurple mb-2">🎒 Three-Year Bachelor’s Program</h2>
          <p className="text-base text-baseGray">
            Get a solid foundation in your chosen field with exposure to international faculty, cultural diversity, and academic excellence from day one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;

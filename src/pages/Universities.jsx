import React from 'react';

const universities = [
  {
    name: 'University of Toronto',
    country: 'Canada',
    description: 'Top-ranked university known for research and innovation.',
  },
  {
    name: 'University of Melbourne',
    country: 'Australia',
    description: 'World-class education and multicultural experience.',
  },
  {
    name: 'King’s College London',
    country: 'UK',
    description: 'Renowned for Medicine, Law, and Humanities.',
  },
];

const Universities = () => {
  return (
    <div className="px-4 py-12 md:px-20 bg-softWhite">
      <h1 className="text-4xl font-bold text-primary text-center mb-10">Explore Top Universities</h1>
      <p className="text-lg text-baseGray text-center max-w-3xl mx-auto mb-12">
        We help you access globally renowned institutions that match your goals, budget, and field of study. Below are just a few of the top destinations our students have gone to.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {universities.map((uni, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-darkPurple mb-1">{uni.name}</h2>
            <p className="text-sm text-primary font-medium mb-2">{uni.country}</p>
            <p className="text-base text-baseGray">{uni.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Universities;

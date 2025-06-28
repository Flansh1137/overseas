import React from 'react';

const teamMembers = [
  {
    name: 'Mr. Mangesh Ingle',
    role: 'Founder & Director',
    image: '/team/mangesh-ingle.jpg',
  },
  {
    name: 'Mr. Amol Ganore',
    role: 'Director of SS Overseas',
    image: '/team/amol-ganore.jpg',
  },
  {
    name: 'Mr. Allan Abraham',
    role: 'Director of SS Infotech',
    image: '/team/allan-abraham.jpg',
  },
  {
    name: 'Mr. Viraj Patle',
    role: 'Senior Consultant',
    image: '/team/viraj-patle.jpg',
  },
  {
    name: 'Mr. Avinash Mendhe',
    role: 'Senior Consultant',
    image: '/team/avinash-mendhe.jpg',
  },
];

const AboutUs = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-12 space-y-12 bg-softWhite">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Meet the Leadership Team</h1>
        <p className="max-w-2xl mx-auto text-base text-baseGray">
          At SS Overseas, our success is driven by a passionate and experienced team dedicated to guiding students on their journey to international education.
        </p>
      </header>

      {/* Team Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-2 border-primary"
              onError={(e) => {
                e.target.src = '/team/default.jpg'; // fallback image
              }}
            />
            <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
            <p className="text-sm text-baseGray mt-1">{member.role}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="text-center mt-10">
        <p className="italic text-baseGray">
          “Our team is committed to ensuring every student receives trusted, transparent, and transformative guidance.”
        </p>
      </div>
    </div>
  );
};

export default AboutUs;



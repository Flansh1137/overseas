import React from 'react';

const services = [
  {
    icon: '🎓',
    title: 'Counseling & Profile Evaluation',
    desc: 'Personalized 1-on-1 sessions to assess your academic strengths and guide your goals.',
  },
  {
    icon: '🌍',
    title: 'Country & University Selection',
    desc: 'Get curated lists of institutions based on budget, goals, and career prospects.',
  },
  {
    icon: '📄',
    title: 'Application & Admission Help',
    desc: 'Stand out with expert help on SOPs, LORs, resumes, and application portals.',
  },
  {
    icon: '🛂',
    title: 'Visa Filing & Documentation',
    desc: 'Full guidance through visa forms, embassy procedures, and interviews.',
  },
  {
    icon: '💰',
    title: 'Loan Assistance',
    desc: 'Secure quick approvals and low-interest loans via trusted financial partners.',
  },
  {
    icon: '💼',
    title: 'Internship Support',
    desc: 'Find global internship opportunities tailored to tech & non-tech profiles.',
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-br from-[#f9f9fc] to-[#f3f3fa] py-16 px-6 md:px-20">
      <div className="text-center mb-14">
        <h2 className="text-5xl font-extrabold text-purple-800 mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Everything you need to plan, apply, and succeed in your study abroad journey.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-darkPurple mb-3">{service.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

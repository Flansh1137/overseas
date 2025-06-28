import React from 'react';

const services = [
  {
    title: '🎓 Counseling & Profile Evaluation',
    desc: 'We assess your academic background, goals, and strengths to guide you with personalized one-on-one sessions.',
  },
  {
    title: '🌍 Country & University Selection',
    desc: 'We shortlist the best destinations and institutions based on your goals, budget, and career vision.',
  },
  {
    title: '📄 Application & Admission Help',
    desc: 'We assist with SOP, LOR, resumes, and application portals to make sure you stand out.',
  },
  {
    title: '🛂 Visa Filing & Documentation',
    desc: 'Get full support for forms, documents, interviews, and embassy requirements — stress-free.',
  },
  {
    title: '💰 Loan Assistance',
    desc: 'Connect with financial institutions to secure education loans — with minimal interest and quick approvals.',
  },
  {
    title: '💼 Internship Support',
    desc: 'We help you find internships and projects globally, both for tech and non-tech backgrounds.',
  },
];

const Services = () => {
  return (
    <div className="px-4 py-12 md:px-20 bg-softWhite">
      <h1 className="text-4xl font-bold text-primary text-center mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-darkPurple mb-2">{service.title}</h2>
            <p className="text-base text-baseGray leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

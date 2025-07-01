import React from "react";

const countries = [
  { name: "United States", flag: "https://flagcdn.com/us.svg" },
  { name: "Australia", flag: "https://flagcdn.com/au.svg" },
  { name: "Italy", flag: "https://flagcdn.com/it.svg" },
  { name: "Saudi Arabia", flag: "https://flagcdn.com/sa.svg" },
  { name: "India", flag: "https://flagcdn.com/in.svg" },
  { name: "Germany", flag: "https://flagcdn.com/de.svg" },
];

const OfferedCountriesSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-10">Countries We Offer</h2>
      <p>SS Overseas offers a range of services and expertise to help businesses.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {countries.map((country, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-purple-50 p-5 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-300 flex-shrink-0">
              <img
                src={country.flag}
                alt={country.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-purple-800">{country.name}</h3>
          </div>
        ))}
      </div>

      <p className="mt-10 text-lg text-gray-700">
        We provide educational guidance for students across these countries and more.
      </p>
    </section>
  );
};

export default OfferedCountriesSection;

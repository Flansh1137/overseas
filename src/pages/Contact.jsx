import React from 'react';

const Contact = () => {
  return (
    <div className="px-4 py-10 md:px-20">
      <h1 className="text-3xl font-bold text-primary mb-4">Contact Us</h1>
      <p className="text-base text-baseGray mb-6">
        Have questions or want to start your study abroad journey? We'd love to hear from you.
      </p>
      <form className="bg-white shadow-md rounded-lg p-6 space-y-4 max-w-lg">
        <div>
          <label className="block mb-1 text-baseGray">Full Name</label>
          <input
            type="text"
            className="w-full border border-lightGray p-2 rounded-md focus:outline-primary"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block mb-1 text-baseGray">Email</label>
          <input
            type="email"
            className="w-full border border-lightGray p-2 rounded-md focus:outline-primary"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block mb-1 text-baseGray">Message</label>
          <textarea
            rows="4"
            className="w-full border border-lightGray p-2 rounded-md focus:outline-primary"
            placeholder="Type your message"
          />
        </div>
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-darkPurple">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';

const Application = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteDiscovery: '',
    sessionType: '',
    bookingDates: '',
    sessionLength: '1 hour ($600)',
    kinks: '',
    toys: '',
    hardLimits: '',
    bdsmExperience: '',
    healthIssues: '',
    consentForMedia: '',
    humiliationLevel: '',
    impactPlayLevel: '',
    reasonToServe: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 bg-[#000300] shadow-lg rounded-lg ">
      <div className='flex flex-col items-center justify-center'>
      <h1 className="text-lg lg:text-4xl font-bold text-center text-[#FFF5F5]">Application Form</h1>
      <div className="h-0.5 w-1/2 bg-pink-500 mb-6"></div>
      </div>
      {/* Field 1: Name */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm lg:text-md font-medium text-gray-100">
          Your Name (required)
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        />
      </div>

      {/* Field 2: Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm lg:text-md font-medium text-gray-100">
          Your Email (required)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        />
      </div>

      {/* Field 3: Website Discovery */}
      <div className="mb-6">
        <label htmlFor="websiteDiscovery" className="block text-sm lg:text-md font-medium text-gray-100">
          How did you find my website?
        </label>
        <select
          id="websiteDiscovery"
          name="websiteDiscovery"
          value={formData.websiteDiscovery}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        >
           <option value="">--</option>
           <option value="google">Google</option>
           <option value="email">Email</option>
           <option value="instagram">Instagram</option>
           <option value="twitter">X</option>
        </select>
      </div>

      {/* Field 4: Session Type */}
      <div className="mb-6">
        <label htmlFor="sessionType" className="block text-sm lg:text-md font-medium text-gray-100">
          Are you looking to book incall or outcall session?
        </label>
        <select
          type="text"
          id="sessionType"
          name="sessionType"
          value={formData.sessionType}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        >
           <option value="">--</option>
           <option value="incall">InCall</option>
           <option value="outcall">OutCall</option>

        </select>
      </div>

      {/* Field 5: Booking Dates */}
      <div className="mb-6">
        <label htmlFor="bookingDates" className="block text-sm lg:text-md font-medium text-gray-100">
          What dates are you looking to book? Include location if outside of Los Angeles.
        </label>
        <textarea
          id="bookingDates"
          name="bookingDates"
          value={formData.bookingDates}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        ></textarea>
      </div>

      {/* Field 6: Session Length */}
      <div className="mb-6">
        <label htmlFor="sessionLength" className="block text-sm lg:text-md font-medium text-gray-100">
          How long of a session are you looking for? Over 3hrs, email for negotiations.
        </label>
        <select
          id="sessionLength"
          name="sessionLength"
          value={formData.sessionLength}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        >
          <option value="one">1 hour ($600)</option>
          <option value="ninety">90 mins ($800)</option>
          <option value="two">2 hours ($1000)</option>
          <option value="three">over3+hrs</option>

        </select>
      </div>

      {/* Field 7: Kinks */}
      <div className="mb-6">
        <label htmlFor="kinks" className="block text-sm lg:text-md font-medium text-gray-100">
          What are your kinks/turn ons? Include any fantasies you’ve desired to fulfill.
        </label>
        <textarea
          id="kinks"
          name="kinks"
          value={formData.kinks}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        ></textarea>
      </div>

      {/* Field 8: Toys */}
      <div className="mb-6">
        <label htmlFor="toys" className="block text-sm lg:text-md font-medium text-gray-100">
          Do you have any toys/equipment you are bringing or would like me to include?
        </label>
        <textarea
          id="toys"
          name="toys"
          value={formData.toys}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        ></textarea>
      </div>

      {/* Field 9: Hard Limits */}
      <div className="mb-6">
        <label htmlFor="hardLimits" className="block text-sm lg:text-md font-medium text-gray-100">
          List all hard limits/turn offs:
        </label>
        <textarea
          id="hardLimits"
          name="hardLimits"
          value={formData.hardLimits}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        ></textarea>
      </div>

      {/* Field 10: BDSM Experience */}
      <div className="mb-6">
        <label htmlFor="bdsmExperience" className="block text-sm lg:text-md font-medium text-gray-100">
          Describe past experience with BDSM. Have you been with a Mistress in person before? If yes, who and list Her contact information.
        </label>
        <textarea
          id="bdsmExperience"
          name="bdsmExperience"
          value={formData.bdsmExperience}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        ></textarea>
      </div>

      {/* Field 11: Health Issues */}
      <div className="mb-6">
        <label htmlFor="healthIssues" className="block text-sm lg:text-md font-medium text-gray-100">
          Do you have any health complications, mental health problems or STDs? Explain.
        </label>
        <textarea
          id="healthIssues"
          name="healthIssues"
          value={formData.healthIssues}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        ></textarea>
      </div>

      {/* Field 12: Consent for Media */}
      <div className="mb-6">
        <label htmlFor="consentForMedia" className="block text-sm lg:text-md font-medium text-gray-100">
          Do I have your consent to take photos &/or videos during our session for My social media? If yes, you will receive a copy before posting.
        </label>
        <select
          id="consentForMedia"
          name="consentForMedia"
          value={formData.consentForMedia}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        >
           <option value="">--</option>
           <option value="nophoto">No photos/videos taken</option>
           <option value="faceless">Yes,with no face shown</option>
           <option value="face">Yes,face/identity revealing</option>

        </select>
      </div>

      {/* Field 13: Humiliation Level */}
      <div className="mb-6">
        <label htmlFor="humiliationLevel" className="block text-sm lg:text-md font-medium text-gray-100">
          How much humiliation do you enjoy?
        </label>
        <select
          id="humiliationLevel"
          name="humiliationLevel"
          value={formData.humiliationLevel}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        >
           <option value="">--</option>
           <option value="humilation">No Humilation</option>
           <option value="verbal">VERBAL</option>
           <option value="physical">VERBAL/PHYSICAL</option>

        </select>
      </div>

      {/* Field 14: Impact Play Level */}
      <div className="mb-6">
        <label htmlFor="impactPlayLevel" className="block text-sm lg:text-md font-medium text-gray-100">
          How much impact play do you enjoy? Spanking, flogging, canes, hand slapping.
        </label>
        <select
          id="impactPlayLevel"
          name="impactPlayLevel"
          value={formData.impactPlayLevel}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        >
          <option value="">--</option>
           <option value="noimpact">NO IMPACT/MARKS</option>
           <option value="light">MILD IMPACT/LIGHT MARKS</option>
           <option value="extreme">EXTREME IMPACT</option>

        </select>
      </div>

      {/* Field 15: Reason to Serve */}
      <div className="mb-6">
        <label htmlFor="reasonToServe" className="block text-sm lg:text-md font-medium text-gray-100">
          Why do you desire to serve me?
        </label>
        <textarea
          id="reasonToServe"
          name="reasonToServe"
          value={formData.reasonToServe}
          onChange={handleChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-3"
        ></textarea>
      </div>
      
      {/* Statements form */}
      <div className='pb-8'>
        <h2 className='text-sm lg:text-md font-medium text-gray-100'>$100 Deposit required along with submitting application. 
          You will be ignored otherwise. If you have questions about My availability, 
          Email prior to submitting application.</h2>
      </div>

      <button
        type="submit"
        className="w-[16vh] bg-[#000300] border border-pink-800 text-pink-700 text-lg font-bold py-3 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
      >
        Send
      </button>
    </form>
  );
};

export default Application;

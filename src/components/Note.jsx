import React, { useState } from "react";
import Modal from "./Modal";

const interests = [
  "Slave/Submissive Training",
  "CBT",
  "Tease and Denial",
  "Sissification",
  "Chastity",
  "Corporal Punishment",
  "Bondage",
  "Blackmail",
  "Pegging",
  "Cuckolding",
  "Small Penis Humiliation",
  "Public Humiliation",
  "Foot Worship",
  "Trampling",
  "Sensory Deprivation",
  "Financial Domination",
  "Collar/Leash",
  "Face Slapping",
  "Forced Bisexuality",
  "Medical Play",
  "Electro Play",
  "Water Sports",
  "Wax Play",
  "Adult Baby",
  "Role Play",
  "Latex Fetish",
  "Leather Fetish",
  "Smoking Fetish",
];

const Note = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteDiscovery: "",
    sessionType: "",
    bookingDates: "",
    sessionLength: "1 hour ($600)",
    kinks: "",
    toys: "",
    hardLimits: "",
    bdsmExperience: "",
    healthIssues: "",
    consentForMedia: "",
    humiliationLevel: "",
    impactPlayLevel: "",
    reasonToServe: "",
    selectedInterests: [],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (interest) => {
    const { selectedInterests } = formData;
    if (selectedInterests.includes(interest)) {
      setFormData({
        ...formData,
        selectedInterests: selectedInterests.filter((i) => i !== interest),
      });
    } else {
      setFormData({
        ...formData,
        selectedInterests: [...selectedInterests, interest],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setModalMessage("Your Application has been submitted successfully!");
    setIsModalOpen(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-8 bg-[#000300] shadow-lg rounded-lg"
      >
        <h1 className="text-lg lg:text-4xl font-bold text-center text-[#FFF5F5]">
          Note Form
        </h1>
        <div className="h-0.5 w-1/2 bg-pink-500 mb-6 mx-auto"></div>

        {/* Other Fields */}
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

        {/* Interests Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-100 text-left">
            Check Off All Interests
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
            {interests.map((interest, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 text-gray-300 text-sm"
              >
                <input
                  type="checkbox"
                  value={interest}
                  checked={formData.selectedInterests.includes(interest)}
                  onChange={() => handleCheckboxChange(interest)}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
                <span className="whitespace-nowrap">{interest}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-lg shadow-lg hover:bg-pink-600 transition"
        >
          Submit
        </button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Result"
        message={modalMessage}
      />
    </>
  );
};

export default Note;

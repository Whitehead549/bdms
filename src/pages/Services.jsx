// Service.jsx
import React from 'react';
// Import the local image
import serviceBanner from '../assets/dungeon/dungeon.jpg'; // Update the path to match your file structure
import About from '../components/About';
import SexExperience from '../components/SexExperience';

const Service = () => {
  return (
    <>
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
        {/* Text Content */}
        <div className="text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          DTLA  Pink  Dungeon
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
          A Luxurious Dungeon Experience
          </p>
        </div>
      </div>

      {/* Background Image */}
      <img
        src={serviceBanner} // Use the imported image
        alt="Service Banner"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />
      
    </div>
    <About />
    <SexExperience />
    </>
  );
};

export default Service;

import React from "react";
import mistressElena from "../assets/banner.jpg";
import Address from "../components/Address";

const Home = () => {
  return (
    <>
      <div className="bg-gray-900 text-white">
        {/* Hero Section */}
        <div
          id="hero-section"
          className="relative w-full h-[55vh] sm:h-[90vh] md:h-[70vh] lg:h-[120vh] overflow-hidden bg-[#000300] pt-16"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black bg-opacity-35"></div>
            <img
              src={mistressElena}
              alt="Hero Banner"
              className="w-full h-full object-scale lg:object-cover transition-opacity duration-200 pt-16 md:pt-4 lg:pt-16"
            />
          </div>

          {/* Content Section */}
          <div className="relative z-10 text-center px-6 py-12 md:py-20">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-red-600 leading-tight">
              Mistress Veronica
            </h1>
            <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-300 max-w-2xl mx-auto">
              Enter the world of passion, elegance, and mystery with Mistress Elena.
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-8">
              <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium shadow-lg transition duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <Address />
      </div>
    </>
  );
};

export default Home;

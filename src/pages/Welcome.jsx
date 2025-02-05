import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import image1 from "../assets/front_boobs.jpg";
import image2 from "../assets/white_cat.jpg";
import image3 from "../assets/net_wear.jpg";
import Translate from "../components/Translate";

const Welcome = () => {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);
  const [showPopup, setShowPopup] = useState(true); // State to control Translate popup
  const location = useLocation(); // Get current route location

  // Reload on initial visit
  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    }
  }, []);

  // Reload when navigating back
  useEffect(() => {
    const handleBackButton = () => {
      window.location.reload(); // Force reload on back button
    };

    window.addEventListener("popstate", handleBackButton);
    
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleProceed = () => {
    setShowPopup(false); // Hide popup on proceed
  };

  return (
    <div 
      id="hero-section"
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-black via-gray-800 to-black"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <img
          src={images[currentImage]}
          alt="Background"
          className="w-full h-full object-cover opacity-100 transition-opacity duration-700"
        />
      </div>

      {/* Translate Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-95 z-50">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-xs w-full text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome!</h2>
            <p className="text-gray-600 mb-4">Select your language below before clicking "Proceed".</p>
            <Translate />
            <button
              onClick={handleProceed}
              className="mt-4 w-full bg-pink-600 text-white font-semibold py-2 rounded-full hover:bg-pink-500 transition duration-200"
            >
              Proceed
            </button>
          </div>
        </div>
      )}

      {/* Buttons and Social Media Icons (Only Show If Popup is Dismissed) */}
      {!showPopup && (
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-8">
          <Link
            to="/home"
            className="w-64 h-16 flex items-center justify-center text-lg font-semibold text-white border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Official Website
          </Link>
          <Link
            to="/serve"
            className="w-64 h-16 flex items-center justify-center text-lg font-semibold text-white border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Serve Me
          </Link>
          <Link
            to="/gallery"
            className="w-64 h-16 flex items-center justify-center text-lg font-semibold text-white border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Gallery
          </Link>
        </div>
      )}
    </div>
  );
};

export default Welcome;

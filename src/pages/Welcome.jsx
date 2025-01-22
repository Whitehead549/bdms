import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import image1 from "../assets/front_boobs.jpg";
import image2 from "../assets/white_cat.jpg";
import image3 from "../assets/net_wear.jpg";

const Welcome = () => {
  const images = [image1, image2, image3];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

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

      {/* Buttons and Social Media Icons */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-8">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl hover:text-pink-500 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-4xl hover:text-pink-500 transition-colors duration-300"
          >
            <FaTiktok />
          </a>
        </div>

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
          to="gallery"
          className="w-64 h-16 flex items-center justify-center text-lg font-semibold text-white border border-white rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

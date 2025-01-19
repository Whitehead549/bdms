import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000300] text-[#fff] pt-5 pb-0.5">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {/* Column 1: Company Information */}
        {/* <div className="text-center sm:text-left">
          <h2 className="lg:text-2xl md:text-base font-bold mb-3 text-[#fff] text-red-600">
            Passion
          </h2>
          <p className="text-xs md:text-sm leading-relaxed">
            Delivering quality services and exceptional value since [Year]. 
            Contact us for innovative solutions tailored to your needs.
          </p>
        </div> */}

        {/* Column 2: Social Media & Contact */ }
        {/* <div className="text-center sm:text-left text-[#fff] pl-[12rem]">
          <h2 className="text-sm md:text-base font-bold mb-2 text-[#ffffff]">
            Contact Us
          </h2>
          <p className="text-xs md:text-sm pb-1 text-[#ffffff]">
            <strong>Email:</strong> contact@yourcompany.com
          </p>
          <p className="text-xs md:text-sm pb-6">
            <strong>Address:</strong> 123 Main Street, City, State, 12345
          </p>
        </div> */}
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 my-1 py-4 text-center">
        <p className="text-xs md:text-sm">
          &copy; {currentYear} Your Company Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

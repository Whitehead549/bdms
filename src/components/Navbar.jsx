import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-pink-500 bg-[#000300] shadow-md z-[9999] pt-4 lg:pt-6">
      <div className="container mx-auto px-4 lg:px-8 py-8 flex justify-center ">
        <nav className="flex gap-8 space-x-2">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border-b-2 border-pink-500 pb-1"
                : "hover:text-pink-300 transition-colors duration-300"
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            Home
          </NavLink>
          <NavLink
            to="/serve"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border-b-2 border-pink-500 pb-1"
                : "hover:text-pink-300 transition-colors duration-300"
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            Serve Me
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-semibold border-b-2 border-pink-500 pb-1"
                : "hover:text-pink-300 transition-colors duration-300"
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            Gallery
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

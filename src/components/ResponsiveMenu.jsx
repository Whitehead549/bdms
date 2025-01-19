import React from 'react';
import { Link } from "react-router-dom";

const navbarLinks = [
  {
    name: "Home",
    link: "/",
    id: 1,
  },
  {
    name: "My Dungeon",
    link: "/services",
    id: 2,
  },
  {
    name: "Contact Me",
    link: "/contact",
    id: 3,
  },
];

const ResponsiveMenu = ({ showMenu, setShowMenu}) => {

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-[50%] w-[55%] flex-col justify-between bg-[#000300] text-white px-8 pb-0 pt-4 transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="Navbar_card">
        {/* Top section */}
       
        {/* Navlinks section */}
        <div className=' mt-10'> {/* Changed to text-black */}
        <ul className='space-y-1 text-xl'>
          {
            navbarLinks.map(({ name, link, id }) => (
              <li key={id}>
                <Link
                  to={link}
                  onClick={() => setShowMenu(false)}
                  className='my-5 inline-block' 
                >
                  {name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>

      </div>
    </div>
  );
};

export default ResponsiveMenu;

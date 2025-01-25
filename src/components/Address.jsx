import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Address = () => {
  const title1 = 'ADDRESS ME AS';
  const title2 = 'MISTRESS VERONICA';

  const contentParagraphs = [
    "I am a Professional Domina based in Los Angeles. I do sessions out of My own sadistic passion for domination and Female Supremacy. I thoroughly love what I do and it radiates in each relationship I build. I strive to leave a life-long impression on you, seducing you into My world of power and pleasure. Breaking a male into full submission to the superior sex is what I was born to do..It's who I am.",
    "As a Woman dedicated to Her craft, I have everything needed to facilitate your desires. Your senses will be stimulated with My collection of latex, leather, fur, lingerie (especially vintage replicas), stockings and high heels. My boot and high heel collection is vast while continuing to grow with contributions from My slave stable.",
    "When you are ready to give in to the impulse of serving a confident, curvy, sexy Latina. You may approach Me respectfully. I am typically available with a 24hour notice following My booking process. I session out of My own private, gorgeous dungeon in downtown Los Angeles.",
    "Fill out the slave application to be considered. Patience and gratitude is expected. You may also reach Me from session inquires ONLY 9am-10pm at (323)426-7669",
  ];
  const email = "MistressVeronicaVixen@Gmail.com";

  return (
    <div className="bg-[#000300] pb-8 px-6 sm:px-8 lg:px-16 text-gray-300">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold uppercase mb-8 text-gray-100 font-lobster">
          {title1} <br /> {title2}
        </h1>
        <hr className="w-20 mx-auto border-gray-400 mb-6" />

        {/* Content */}
        <div className="text-left leading-relaxed space-y-6">
          {contentParagraphs.map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg text-sm text-justify">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Email */}
        <div className="mt-8">
          <p className="font-semibold text-gray-100">
            Email:{" "}
            <a
              href={`mailto:${email}`}
              className="text-gray-100 underline hover:text-gray-200"
            >
              {email}
            </a>
          </p>
        </div>

        {/* FontAwesome Icon */}
        <div className="mt-8">
          <FontAwesomeIcon icon={faHeart} className="text-pink-500 text-4xl sm:text-5xl" />
          <p className="mt-4 text-lg sm:text-xl">START YOUR CONSIDERATION</p>
           
           {/* Click Here Button with Popping Animation */}
            <Link
              to="/serve" // Navigate to the "/serve" route
              className="mt-4 inline-block px-4 py-2 text-white bg-pink-600 rounded-full text-lg sm:text-xl font-semibold shadow-md hover:bg-pink-700 focus:ring-2 focus:ring-pink-400 focus:outline-none transition duration-200 animate-pulse hover:animate-none"
            >
              Click Here
            </Link>

        </div>
      </div>
    </div>
  );
};

export default Address;

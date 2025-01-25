import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const QnAPage = () => {
  return (
    <>
      <div className="pt-16 px-4 pb-2">
        <h1 className="text-white text-lg sm:text-xl lg:text-2xl uppercase tracking-wide font-light text-center">
          Serve Me
        </h1>
        <div className="h-0.5 w-1/2 sm:w-2/3 lg:w-5/6 bg-gray-100 mx-auto"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col items-center">
        <FontAwesomeIcon icon={faHeart} className="text-[#FFF5F5] text-4xl sm:text-5xl" />
        <h1 className="text-2xl font-bold text-center mb-6">Questions and Answers</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 leading-relaxed text-sm lg:text-lg">
          <div className="px-4 py-3 rounded shadow-md">
            <h2 className="text-pink-500 text-lg font-semibold mb-2">Where are you located?</h2>
            <p className="text-gray-300 text-justify sm:text-left leading-relaxed tracking-normal">
              My location is in downtown Los Angeles. The dungeon is My own curated, well-equipped space. I have all the equipment to fulfill your desires in a beautiful, clean, discreet location.
            </p>
          </div>
          <div className="px-4 py-3 rounded shadow-md">
            <h2 className="text-pink-500 text-lg font-semibold mb-2">How soon can I see you?</h2>
            <p className="text-gray-300 text-justify sm:text-left leading-relaxed tracking-normal">
              I typically require a minimum of 24 hours to book. I don't do last-minute sessions unless you are one of My dedicated submissives who's served Me in person before. My schedule fills up quickly. The sooner you book, the better.
            </p>
          </div>
          <div className="px-4 py-3 rounded shadow-md">
            <h2 className="text-pink-500 text-lg font-semibold mb-2">Is a deposit required?</h2>
            <p className="text-gray-300 text-justify sm:text-left leading-relaxed tracking-normal">
              Yes, so happy you asked! I will not take a session without a $100 deposit. Deposite can be made via{''}
              <span className="break-all"> MistressVeronicaVixen@gmail.com. Deposit is taken so that you show up to the session and will always be required unless you have served Me long-term</span>.
            </p>
        </div>
          <div className="px-4 py-3 rounded shadow-md">
            <h2 className="text-pink-500 text-lg font-semibold mb-2">How can I reach you to find out availability or other questions?</h2>
            <p className="text-gray-300 text-justify sm:text-left leading-relaxed tracking-normal">
              My business phone number is strictly for session booking questions only.{''}
              <span className="break-all"> You may call between 9am-10pm PST 323-426-7669. Texting is preferred. I will demand respect. If you would like to get to know Me better, follow My Niteflirt listing for a phone chat. You may also email Me. I only answer respectful emails.</span>
            </p>
          </div>
          <div className="px-4 py-3 rounded shadow-md">
            <h2 className="text-pink-500 text-lg font-semibold mb-2">Will you travel to my city?</h2>
            <p className="text-gray-300 text-justify sm:text-left leading-relaxed tracking-normal">
              Yes, I will. You cover the airfare, hotel, and session cost. Just email Me for precise details/costs. I will eventually tour so check My site regularly for tour updates.
            </p>
          </div>
          <div className="px-4 py-3 rounded shadow-md">
            <h2 className="text-pink-500 text-lg font-semibold mb-2">What is your session cost and what can I expect during a session?</h2>
            <p className="text-gray-300 text-justify sm:text-left leading-relaxed tracking-normal">
              Hourly is $600 for incall to My dungeon. As you have the pleasure of serving at My dungeon, I will leisurely indulge in the session without the need to watch the clock. For multi-hour bondage sessions past the first hour, each additional hour is $500. Sessions longer than 3 hours may be lightly negotiated. Outcall rate is $1000/hr. No illegal sexual services will be performed during our session. Nudity is optional and highly unlikely for Me. You may suggest in advance an outfit you would like to see Me in. Fill out the application once you are set on the date to book. This application will communicate to Me your desired level of training and help you to be the best slave for your gorgeous Mistress. Be as detailed and honest as possible. I want you to evolve into My ideal pet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QnAPage;

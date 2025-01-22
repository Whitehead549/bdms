import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const QnAPage = () => {
  const qaData = [
    {
      question: 'Where are you located?',
      answer:
        'My location is in downtown Los Angeles. The dungeon is My own curated, well-equipped space. I have all the equipment to fulfill your desires in a beautiful, clean, discreet location.',
    },
    {
      question: 'How soon can I see you?',
      answer:
        "I typically require a minimum of 24 hours to book. I don't do last-minute sessions unless you are one of My dedicated submissives who's served Me in person before. My schedule fills up quickly. The sooner you book, the better.",
    },
    {
      question: 'Is a deposit required?',
      answer:
        'Yes, so happy you asked! I will not take a session without a $100 deposit. This deposit goes towards the session and can be made via My many clip stores or Amazon emailed gift card. MistressVeronicaVixen@gmail.com. You may also pick up an Amazon GC and send Me the code for discretion. Deposit is taken so that you show up to the session and will always be required unless you have served Me long-term.',
    },
    {
      question: 'How can I reach you to find out availability or other questions?',
      answer:
        'My business phone number is strictly for session booking questions only. You may call between 9am-10pm PST 323-426-7669. Texting is preferred. I will demand respect. If you would like to get to know Me better, follow My Niteflirt listing for a phone chat. You may also email Me. I only answer respectful emails.',
    },
    {
      question: 'Will you travel to my city?',
      answer:
        'Yes, I will. You cover the airfare, hotel, and session cost. Just email Me for precise details/costs. I will eventually tour so check My site regularly for tour updates.',
    },
    {
      question: 'What is your session cost and what can I expect during a session?',
      answer:
        'Hourly is $600 for incall to My dungeon. As you have the pleasure of serving at My dungeon, I will leisurely indulge in the session without the need to watch the clock. For multi-hour bondage sessions past the first hour, each additional hour is $500. Sessions longer than 3 hours may be lightly negotiated. Outcall rate is $1000/hr. No illegal sexual services will be performed during our session. Nudity is optional and highly unlikely for Me. You may suggest in advance an outfit you would like to see Me in. Fill out the application once you are set on the date to book. This application will communicate to Me your desired level of training and help you to be the best slave for your gorgeous Mistress. Be as detailed and honest as possible. I want you to evolve into My ideal pet.',
    },
  ];

  return (
    <>
    <div className='pt-[8rem] pl-[2rem] pb-2'>
        <h1 className="text-white text-lg md:text-xl lg:text-2xl uppercase tracking-wide font-[100] ">
                    Serve Me
        </h1>
        <div className="h-0.5 w-5/6 bg-gray-100 "></div>
    </div>
    <div className="container mx-auto p-6  flex flex-col items-center">
         <FontAwesomeIcon icon={faHeart} className="text-[#FFF5F5] text-4xl sm:text-5xl"/>
      <h1 className="text-2xl font-bold text-center mb-6">Questions and Answers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
        {qaData.map((item, index) => (
          <div key={index} className="px-4 rounded shadow-md">
            <h2 className="text-pink-500 text-lg font-semibold mb-2">{item.question}</h2>
            <p className="text-gray-300 text-justify">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default QnAPage;

import React from "react";
import image1 from "../assets/dungeon/slave_miss.jpg";
import image2 from "../assets/dungeon/surrender.jpg";
import image3 from "../assets/dungeon/Knight.jpg";
import image4 from "../assets/dungeon/dark_room.jpg";
import image5 from "../assets/dungeon/blue_wear.jpg";
import image6 from "../assets/dungeon/pink_room.jpg";
import video from "../assets/hole.mp4"; // Import the video file

const SexExperience = () => {
  const experiences = [
    { 
      src: image4, 
      title: "The Velvet Room", 
      description: "Step into a sanctuary of deep crimson and shadow, where every corner invites your senses to awaken." 
    },
    { 
      src: image1, 
      title: "Satin Ties", 
      description: "Discover the thrill of surrender in an ambiance crafted for connection and trust." 
    },
    { 
      src: image2, 
      title: "Euphoria Chamber", 
      description: "Immerse yourself in a symphony of sensations, where boundaries dissolve and desires ignite." 
    },
    { 
      src: image5, 
      title: "The Whispered Dream", 
      description: "Soft murmurs and candlelight guide you into a world of shared intimacy and vulnerability." 
    },
    { 
      src: image3, 
      title: "Boundless Bliss", 
      description: "Explore the art of surrender and control, an elegant dance of power and vulnerability." 
    },
    { 
      src: image6, 
      title: "Secrets Unveiled", 
      description: "A space designed to reveal the untamed side of your deepest fantasies." 
    },
  ];

  return (
    <div>
      {/* Banner Section */}
      <section className="text-white text-center py-6 bg-black">
        <h1 className="text-2xl md:text-4xl font-bold">
          A Journey of Sensual Discovery
        </h1>
        <p className="mt-2 text-lg md:text-xl">
          Unveil a world where intimacy meets artistry, and every moment is designed to awaken your desires.
        </p>
        {/* Video Section */}
        <div className="mt-6">
          <video 
            controls 
            autoPlay 
            muted 
            loop 
            className="w-full max-w-4xl mx-auto"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Experience Grid Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-12 max-w-6xl mx-auto">
        {experiences.map((experience, index) => (
          <div key={index} className="text-center p-4 text-gray-100 shadow-md">
            <img
              src={experience.src}
              alt={experience.title}
              className="w-full h-[24rem] object-cover mb-2 "
            />
            <h2 className="text-xl font-semibold text-gray-200 mb-2">
              {experience.title}
            </h2>
            <p className="text-gray-400">{experience.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SexExperience;
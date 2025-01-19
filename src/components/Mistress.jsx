import React from "react";
import image1 from "../assets/net_wear.jpg";
import image2 from "../assets/cinderella.jpg";
import image3 from "../assets/white_cat.jpg";
import image4 from "../assets/nurse.jpg";
import image5 from "../assets/exp_butt.jpg";
import image6 from "../assets/front_boobs.jpg";

const Mistress = () => {
  const experiences = [
    { 
      src: image4, 
      title: "Sexy Nurse", 
    },
    { 
      src: image1, 
      title: "Queen badi", 
    },
    { 
      src: image2, 
      title: "cinderella", 
    },
    { 
      src: image5, 
      title: "Bitch mockup",  
    },
    { 
      src: image3, 
      title: "White Cat",  
    },
    { 
      src: image6, 
      title: "Pink", 
    },
  ];

  return (
    <div className="bg-[#000300]">
      {/* Banner Section */}
      <section className="text-white text-center py-6 ">
        <h1 className="text-2xl md:text-4xl font-bold">
          Nurse Veronica
        </h1>
        <p className="mt-2 text-lg md:text-xl">
          Unveil a world where intimacy meets artistry, and every moment is designed to awaken your desires.
        </p>
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
            
          </div>
        ))}
      </section>
    </div>
  );
};

export default Mistress;

import React from "react";
import PersonalService from "../assets/intro.jpg"; // Import an image for the left side

const Introduction = () => {
  return (
    <div className="per-service py-24 px-4 md:py-16 lg:py-24 md:px-8 lg:px-20 text-[#ffffff] bg-[#000300]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Section 1: Progress Bars */}
        <div className="section-left flex-1 w-full lg:w-1/2">
          <div className="section-title mb-8">
            <div className="title-header">
              <h1 className="text-md md:text-xl lg:text-2xl uppercase tracking-wide font-[100] mb-4">
                Mistress Veronica Vickky
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFF5F5] leading-tight font-lobster">
                LOS ANGELES <br />
                <span className="">DOMINATRIX</span>.
              </h2>
              <div className="h-0.5 w-3/4 bg-pink-300"></div>
            </div>
            <div className="title-desc mt-6 text-pink-400 text-base md:text-lg lg:text-lg max-w-3xl space-y-6 font-semibold">
              <p>
                Owner of DTLA Pink Dungeon.
              </p>
              <p>Make sure you aren't talking to a fake!</p>
              <p>
                My only website is{" "}
                <span className="text-xs lg:text-md md:text-md pr-4 font-semibold">
                  https://www.hollywoodbitches.online/
                </span>
              </p>
            </div>
          </div>
          <div className="h-0.5 w-full bg-pink-400"></div>
        </div>

        {/* Section 2: Image Display */}
        <div className="section-right flex-1 flex justify-center items-center w-100%">
          <img
            src={PersonalService}
            alt="Global Presence"
            className="w-full h-[60vh] sm:h-60 md:h-80 lg:h-[34rem] max-w-sm md:max-w-md lg:max-w-full object-cover rounded-sm shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;

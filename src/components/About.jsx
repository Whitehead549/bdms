import React from 'react';
import aboutImage from '../assets/dungeon/red_wear.jpg'; // Update the path to your local image

// Reusable Section Component
const Section = ({ title, children }) => (
  <article className="space-y-8">
    <h4 className="text-2xl font-semibold text-gray-300 tracking-wide leading-snug font-lobster">
      {title}
    </h4>
    <p className="text-gray-400 text-base leading-relaxed tracking-normal">
      {children}
    </p>
  </article>
);

const About = () => {
  const content = {
    title: "About Us",
    owners: {
      title: "Owners",
      text: (
        <>
          DTLA Pink Dungeon is owned by{' '}
          <a
            href="https://mistressveronicavixen.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline font-medium"
            aria-label="Visit Mistress Veronica Vixen's website"
          >
            Mistress Veronica Vixen
          </a>{' '}
          and{' '}
          <a
            href="https://www.ladylilasbonecastle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline font-medium"
            aria-label="Visit Lady Lila Stern's website"
          >
            Lady Lila Stern
          </a>
          . The space was created in late 2020 as a private play space for the
          Women and their ProDomme friends, expanding lightly to allow for
          photoshoots.
        </>
      ),
    },
    location: {
      title: "Location",
      text: `The dungeon is located in a discreet, relatively safe area in the
        Arts District. The area has numerous Michelin Star restaurants in
        walking distance for upscale dining. The views from DTLA Pink overlook
        gorgeous downtown LA.`,
    },
    dungeon: {
      title: "Dungeon",
      text: `The dungeon loft is just over 900 sq. ft with ceilings about 15 ft tall.
        There is the main pink area and upstairs a smaller blue loft play space.
        A large bathroom area is equipped with a vanity and full sissy closet!`,
    },
  };

  return (
    <section
      className="flex flex-col md:flex-row items-stretch gap-8 py-12 px-6 "
      aria-labelledby="about-us"
    >
      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col space-y-8 h-auto">
        <h1
          id="about-us"
          className="text-md font-extrabold text-gray-300 leading-tight tracking-wide md:text-4xl underline font-lobster"
        >
          {content.title}
        </h1>

        <Section title={content.owners.title}>{content.owners.text}</Section>
        <Section title={content.location.title}>{content.location.text}</Section>
        <Section title={content.dungeon.title}>{content.dungeon.text}</Section>
      </div>

      {/* Image Section */}
      <div
        className="md:w-1/2 flex items-center h-[600px]"
        aria-hidden="true"
      >
        <img
          src={aboutImage}
          alt="Blue loft play space in the DTLA Pink Dungeon"
          className="shadow-lg w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;

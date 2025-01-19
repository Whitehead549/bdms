import React from 'react';

const Address = () => {
  const title = 'ADDRESS ME AS MISTRESS VERONICA';
  const contentParagraphs = [
    "Welcome to My world of passion, power, and Female Supremacy. As a Professional Domina based in Los Angeles, I am devoted to the art of domination. My sessions are fueled by a genuine love for what I do and a profound belief in the supremacy of Women. I take pride in crafting transformative experiences that leave a lasting impression on those who serve Me. Submission is not just an act—it is a privilege, and I am here to guide you into embracing it fully.",
    "I am equipped with everything necessary to bring your fantasies to life. From My exquisite collection of latex, leather, fur, vintage-inspired lingerie, and high heels to a vast and ever-expanding selection of boots, I ensure that your senses are both captivated and overwhelmed. Every detail is carefully curated to heighten your experience and deepen your submission.",
    "When you are ready to surrender to a confident, captivating Latina Domina, approach Me with respect and humility. I am available by appointment with a 24-hour notice, following My booking process. Sessions are held in My private, fully equipped dungeon located in downtown Los Angeles, designed to provide a discreet and luxurious setting for our time together.",
    "To serve Me, complete the slave application thoughtfully and with care. Gratitude and patience are virtues I expect from all who wish to enter My realm. For session inquiries, you may also reach Me between 9 AM and 10 PM at (323) 426-7669. Remember, respect is paramount.",
  ];
  const email = "MistressVeronicaVixen@Gmail.com";
  const links = [
    {
      href: "https://mistressveronicavixen.com/serveme/",
      text: "Complete the Slave Application",
      isButton: false,
    },
    {
      href: "https://mistressveronicavixen.com/interests",
      text: "Learn More About My Interests",
      isButton: true,
    },
  ];

  return (
    <div className="bg-[#000300] py-12 px-6 sm:px-12 lg:px-24 text-gray-300">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold uppercase mb-8 text-gray-100 font-lobster">
          {title}
        </h1>
        <hr className="w-24 mx-auto border-gray-400 mb-8" />

        {/* Content */}
        <div className="text-left leading-relaxed space-y-6 text-center">
          {contentParagraphs.map((paragraph, index) => (
            <p key={index} className="text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Email */}
        <div className="mt-8">
          <p className="font-semibold">
            Email:{" "}
            <a
              href={`mailto:${email}`}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {email}
            </a>
          </p>
        </div>

        {/* Links */}
        <div className="mt-12 space-y-4">
          {links.map((link, index) => (
            <div key={index} className="flex justify-center">
              {link.isButton ? (
                <a
                  href={link.href}
                  className="bg-red-600 px-6 py-3 rounded-md font-medium text-lg hover:bg-blue-700 transition"
                >
                  {link.text}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="text-blue-600 underline text-lg hover:text-blue-800"
                >
                  {link.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Address;

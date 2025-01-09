import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const FirstHero = () => {
  const infoRef = useRef(null); // Ref for the information section
  const imageRef = useRef(null); // Ref for the image section

  useEffect(() => {
    // GSAP context for better cleanup
    const ctx = gsap.context(() => {
      // Animation for the image section (slide in from the bottom)
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          duration: 0.8,
          y: 100,
          ease: "power2.inOut",
        });
      }
    });

    // Cleanup on component unmount
    return () => ctx.revert();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <div id="about" className="align mt-10 p-5" ref={imageRef}>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto p-5 md:p-10">
          {/* Information Section */}
          <div
            className="information font-nunito font-bold
                        rounded-md text-black bg-slate-300 p-5 md:p-10 md:w-1/2 shadow-2xl
                        hover:bg-black ease-in-out duration-300 hover:text-white
                        animate-fade-in-right"
            ref={infoRef} // Attach ref to the information section
          >
            <p className="text-3xl md:text-6xl font-nunito font-bold">Hi, I'm Shekhar</p>
            <p className="mt-5 text-sm md:text-base font-nunito font-bold">
              I’m a Computer Engineering student with a knack for creating impactful solutions. From crafting immersive RPG games to building intuitive web applications, I thrive on leveraging my skills in programming, design, and leadership to turn ideas into reality.
            </p>
            <div className="flex justify-center p-2 mt-8">
              <button
                className="cursor-pointer flex justify-between bg-gray-800 px-4 py-3 md:px-5 md:py-4 rounded-full text-white tracking-wider shadow-xl hover:bg-white hover:scale-105 duration-500 hover:ring-1 hover:text-black hover:ring-gray-800 ease-in-out font-nunito font-bold"
              >
                <a href="https://drive.google.com/file/d/1Y-a4NBgzFI0SMd4TzQMue4bVxcrSkinf/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="image mt-5 md:mt-0 w-full md:w-1/2 flex justify-center ml-0 md:ml-10 hover:scale-105 duration-300 ease-in-out"
          >
            <img
              src="https://cdn.prod.website-files.com/5e87e737ee7085b9ba02c101/5e87e737ee7085c39c02c107_mac.svg"
              alt="Mac Illustration"
              className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHero;

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap/all";

const Heading = () => {
    const navbarRef = useRef(null);

    // Mount animation using gsap.context
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(navbarRef.current, {
                y: -100, // Slide down from above
                opacity: 0, // Start invisible
                duration: 0.5,
                ease: "power2.out",
            });
        });

        return () => ctx.revert(); // Cleanup animation context
    }, []);

    // Hover animation handler
    const handleHover = (event, isHovering) => {
        gsap.to(event.target, {
            rotationX: isHovering ? 360 : 0, // Rotate on hover, reset on leave
            duration: 0.7,
            ease: "power3.inOut",
        });
    };

    return (
        <div>
            <div
                ref={navbarRef}
                className="navbar w-full flex items-center font-nunito font-bold text-black text-sm sm:text-xl bg-slate-300 border-b-4 border-black px-4 sm:px-12"
            >
                {/* Logo */}
                <a
                    href="/"
                    className="flex items-center justify-center w-20 h-16 sm:w-12 sm:h-10"
                    onMouseOver={(e) => handleHover(e, true)}
                    onMouseOut={(e) => handleHover(e, false)}
                >
                    <img
                        src="https://cdn.prod.website-files.com/5e87e737ee7085b9ba02c101/5e91e984961046c05f7459d8_mac-logo.svg"
                        alt="Logo"
                        className="w-12 h-12"
                    />
                </a>

                {/* Navigation Links */}
                {["Projects", "Achievments", "About", "ReadyToWork"].map((link, index) => (
                    <a
                        key={index}
                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                        className="flex items-center justify-center w-40 h-16 hover:bg-slate-900 hover:text-white"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(`#${link.toLowerCase().replace(" ", "-")}`).scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                        onMouseOver={(e) => handleHover(e, true)}
                        onMouseOut={(e) => handleHover(e, false)}
                    >
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Heading;



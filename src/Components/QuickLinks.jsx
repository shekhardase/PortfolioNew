import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function QuickLinks() {
    const leftBlocksRef = useRef([]);
    const rightBlocksRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate blocks from left to right
            gsap.from(leftBlocksRef.current, {
                x: -60, // Start 100px left of its position
                // opacity: 0, // Start invisible
                duration: 0.5,
                // stagger: 0.2, // Delay between animations of blocks
                ease: "power3.in",
                scrollTrigger: {
                    trigger: leftBlocksRef.current[0], // Trigger animation when the first block comes into view
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });

            // Animate blocks from right to left
            gsap.from(rightBlocksRef.current, {
                x: 60, // Start 100px right of its position
                // opacity: 0, // Start invisible
                duration: 0.5,
                // stagger: 0.2,
                ease: "power3.in",
                scrollTrigger: {
                    trigger: rightBlocksRef.current[0], // Trigger animation when the first block comes into view
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });
        });

        return () => ctx.revert(); // Cleanup GSAP context
    }, []);

    return (
        <div
            className="quicklinks mt-10 w-auto flex flex-col items-center font-nunito font-extrabold text-black text-xl "
        >
            <h1 className="mb-5 text-3xl">Quick Links</h1>

            <div className="flex flex-wrap md:flex-nowrap justify-center items-center space-x-4 md:space-x-4 md:space-y-0 space-y-4 p-4 bg-slate-300 border-t-4 border-b-4 border-black w-full">
                {/* Left to Right */}
                <div
                    ref={(el) => (leftBlocksRef.current[0] = el)}
                    className="flex items-center justify-between px-4 py-2 bg-slate-400 hover:bg-slate-900 hover:text-white transition rounded-md shadow-md w-full md:w-auto group"
                >
                    <a href="https://leetcode.com/u/Shekhar_2004/" className="text-black group-hover:text-white text-base md:text-lg">
                        LeetCode Profile
                    </a>
                    <span className="ml-2 text-base md:text-lg group-hover:text-white">↗</span>
                </div>

                <div
                    ref={(el) => (leftBlocksRef.current[1] = el)}
                    className="flex items-center justify-between px-4 py-2 bg-slate-400 hover:bg-slate-900 group-hover:text-white transition rounded-md shadow-md w-full md:w-auto group"
                >
                    <a href="https://www.linkedin.com/in/shekhar2004/" className="text-black group-hover:text-white text-base md:text-lg">
                        Linkdin
                    </a>
                    <span className="ml-2 text-base md:text-lg group-hover:text-white">↗</span>
                </div>

                {/* Right to Left */}
                <div
                    ref={(el) => (rightBlocksRef.current[0] = el)}
                    className="flex items-center justify-between px-4 py-2 bg-slate-400 hover:bg-slate-900 group-hover:text-white transition rounded-md shadow-md w-full md:w-auto group"
                >
                    <a href="https://www.codechef.com/users/shekhardase" className="text-black group-hover:text-white text-base md:text-lg">
                        CodeChef Profile
                    </a>
                    <span className="ml-2 text-base md:text-lg group-hover:text-white">↗</span>
                </div>

                <div
                    ref={(el) => (rightBlocksRef.current[1] = el)}
                    className="flex items-center justify-between px-4 py-2 bg-slate-400 hover:bg-slate-900 group-hover:text-white transition rounded-md shadow-md w-full md:w-auto group"
                >
                    <a href="mailto:shekhardase@gmail.com" className="text-black group-hover:text-white text-base md:text-lg">
                        Contact
                    </a>
                    <span className="ml-2 text-base md:text-lg group-hover:text-white">↗</span>
                </div>
            </div>
        </div>
    );
}

export default QuickLinks;


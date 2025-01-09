import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CardNew from "./CardNew";

gsap.registerPlugin(ScrollTrigger);

function NamedSection() {
    const newcontainerRef = useRef(null);

    useEffect(() => {
        const container = newcontainerRef.current;

        if (container) {
            const cards = container.querySelectorAll(".card-container");

            cards.forEach((card, index) => {
                const isEven = index % 2 === 0; // Check if the card is even or odd
                const animationDirection = isEven ? -100 : 100; // Slide from left (-100) for even, right (100) for odd

                // Scroll-triggered animation for each card
                gsap.fromTo(
                    card,
                    {
                        x: animationDirection, // Start from left (-100) or right (100)
                        opacity: 0, // Start fully transparent
                    },
                    {
                        x: 0, // Slide to the original position
                        opacity: 1, // Fully visible
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 80%", // When the card enters the viewport
                            end: "top 20%", // When the card reaches 20% from the top
                            scrub: true, // Link animation progress to scroll
                        },
                    }
                );
            });

            // Refresh ScrollTrigger to ensure animations work properly
            ScrollTrigger.refresh();
        }
    }, []);

    return (
        <div id="achievments" className="new min-h-screen bg-gray-900">
            <h1 className="text-white flex justify-center items-center text-3xl md:text-4xl font-nunito font-extrabold pt-10">
                Achievements and Experience
            </h1>
            <div
                ref={newcontainerRef}
                className="flex flex-col md:flex-row md:flex-wrap justify-center gap-20 items-center max-w-7xl mx-auto p-5 md:p-10"
            >
                <div className="card-container">
                    <CardNew
                        title="Globant Game Jam"
                        description="We participated in 'Globant Gamejam 2022' on November 19, 2022. I was the leader of 'Team Matrix' which earned a spot in Top 6 Teams among 18 teams 🏆. 
                        "


                    />
                </div>
                <div className="card-container">
                    <CardNew
                        title="Competitive Programming"
                        description="I have been participating in competitive programming contests on platforms like Leetcode, CodeChef.
                        Solved more than 500 problems all over platform continue to do so."
                    />
                </div>
                <div className="card-container">
                    <CardNew
                        title="Machine Learning"
                        description="For Final Year of Engineering we developed a AI-Enhanced phising defence system. The system is based on Deep Learning and is trained on a dataset of 1000+ phishing emails. The system is capable of detecting phishing emails with 98% accuracy."
                        buttonText="View Projects"
                        buttonLink="https://github.com/kaustubhhiware"
                    />
                </div>
                <div className="card-container">
                    <CardNew
                        title="Design Lead"
                        description="Design Lead at Programming Ethics and Ethical Hacking Club, focusing on fostering ethical practices in technology. 🛡️"
                        buttonText="View Projects"
                        buttonLink="https://github.com/kaustubhhiware"
                    />
                </div>
            </div>
        </div>
    );
}

export default NamedSection;


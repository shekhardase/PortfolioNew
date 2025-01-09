import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Card from "./Card";
gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            // GSAP animation for scrolling cards
            gsap.fromTo(
                container.children,
                {
                    y: 100, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger:
                    {
                        trigger: container,
                        start: "top 90%",
                        end: "bottom 10%",
                        scrub: true,
                    },
                }
            );
        }
    }, []);


    const cardData = [
        {
            title: "Smart Docs",
            description: "A simple frontend application to keep track of notes and tasks interactively.",
            buttonText: "Learn More",
            buttonLink: "https://github.com/shekhardase/Smart-Docs",
            image: './src/assets/image1.png',
        },
        {
            title: "Animated Web Homepage",
            description: "A professional-level web homepage featuring GSAP animations for smooth and stunning visual effects.",
            buttonText: "View Details",
            buttonLink: "https://github.com/shekhardase/Presistent-Ventures",
            image: './src/assets/image2.png',
        },
        {
            title: "AI-Powered Phishing Defense",
            description: "A machine learning project to detect fake websites and enhance cybersecurity.",
            buttonText: "Explore",
            buttonLink: "https://github.com/shekhardase/AI-Powered-Phishing-Defense-Cutting-Edge-Machine-Learning-Solutions",
            image: './src/assets/image3.png',
        },
        {
            title: "React Tic-Tac-Toe",
            description: "A classic Tic-Tac-Toe game built using React with an interactive and responsive interface.",
            buttonText: "Check it Out",
            buttonLink: "https://github.com/shekhardase/React/tree/master/ReactPlaylist/tic-tac-toe",
            image: './src/assets/image4.png',
        },
        {
            title: "Dungeon Hunter RPG Game",
            description: "An immersive RPG game built with HTML, CSS, and JavaScript featuring interactive gameplay and classic dungeon themes.",
            buttonText: "Check it Out",
            buttonLink: "https://github.com/shekhardase/FreeCodeCamp-Practice-Project/tree/main/RPG%20game",
            image: './src/assets/image5.png',
        },
        {
            title: "Calorie Counter",
            description: "A user-friendly application to track daily calorie intake and maintain a healthy lifestyle.",
            buttonText: "Check it Out",
            buttonLink: "https://github.com/shekhardase/FreeCodeCamp-Practice-Project/tree/main/CalorieCounter",
            image: './src/assets/image6.png',
        },
        {
            title: "Snake Game (C++)",
            description: "A classic Snake game implemented in pure C++, running directly in the terminal for a nostalgic gaming experience.",
            buttonText: "Check it Out",
            buttonLink: "https://github.com/shekhardase/SnakeGame",
            image: './src/assets/image7.png'
        },
        {
            title: "Boilerplate Manager",
            description: "A web application to manage and store reusable code snippets, boosting productivity for developers",
            buttonText: "Check it Out",
            buttonLink: "https://github.com/shekhardase/BoilerPlateManager",
            image: './src/assets/image8.png'
        },
    ];

    return (
        <div id="projects" className="w-full px-4 py-6 bg-gray-100">
            <h1 className="flex mb-10 text-3xl items-center justify-center font-nunito font-extrabold text-black mt-10">Projects</h1>
            <div
                ref={containerRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
                {cardData.map((data, index) => (
                    <Card
                        key={index}
                        title={data.title}
                        description={data.description}
                        buttonText={data.buttonText}
                        buttonLink={data.buttonLink}
                        image={data.image}
                    />
                ))}
            </div>

        </div>
    );
};

export default SmoothScroll;

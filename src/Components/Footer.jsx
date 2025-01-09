import React from "react";

const Footer = () => {
    return (
        <div className="footer h-50 w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
            <p className="text-gray-300 text-center">
                &copy; 2024 My Website. All rights reserved.
            </p>
            <ul className="flex space-x-4">
                <li>
                    <a href="#" className="text-gray-300 hover:text-gray-400">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="text-gray-300 hover:text-gray-400">Terms of Service</a>
                </li>
                <li>
                    <a href="#" className="text-gray-300 hover:text-gray-400">Contact Us</a>
                </li>
            </ul>
            <p className="text-gray-300 text-center mt-4">
                Follow me on social media to stay up to date with my latest projects.
            </p>
            <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-gray-400">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                    <i className="fab fa-github"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-gray-400">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;


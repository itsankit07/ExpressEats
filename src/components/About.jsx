// src/components/AboutPage.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <h3 className="text-gray-600 font-bold mb-2">
          Welcome to ExpressEats ! Here are some key points to highlight about our website:
        </h3>
        <ul className="list-disc text-gray-600">
  <li className="mb-4">
    Utilized the Swiggy Live API to fetch real-time details, ensuring that your website provides the latest and most accurate information to users.
  </li>
  <li className="mb-4">
    Used Custom hooks to encapsulate and reuse logic across several components, enhancing code modularity and maintainability.
  </li>
  <li className="mb-4">
    Implemented dynamic routing to enhance the user experience by allowing seamless navigation between different sections of the website.
  </li>
  <li className="mb-4">
    Integrated shimmer UI to provide a visually appealing loading experience.
  </li>
  <li className="mb-4">
    Ensured that the website is responsive across various devices and screen sizes, providing a seamless experience for users on both desktop and mobile platforms.
  </li>
  <li className="mb-4">
    Integrated Redux Toolkit to manage and centralize the application state, providing a predictable and efficient way to handle data flows.
  </li>
</ul>

      </div>
    </div>
  );
};

export default About;

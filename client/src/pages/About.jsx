import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">
        About MTech Solutions
      </h1>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Company Overview
        </h2>

        <p>
          MTech Solutions is a technology company focused on website
          development, software engineering, AI integration, cloud
          solutions, and business automation.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Vision
        </h2>

        <p>
          To become a leading provider of innovative software and AI
          solutions that help businesses succeed in the digital era.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Mission
        </h2>

        <p>
          Empowering organizations through modern, scalable and
          sustainable technology solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
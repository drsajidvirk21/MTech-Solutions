import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Technical Innovation Excellence</h1>
        <p>Building Intelligent Software for a Digital Future</p>
        <div className="hero-buttons">
          <Link to="/consultation">Request Consultation</Link>
          <Link to="/portfolio">View Portfolio</Link>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="service-card">
          <h2>Website Development</h2>
          <ul>
            <li>Custom Corporate Sites</li>
            <li>E-Commerce Platforms</li>
          </ul>
        </div>
        {/* Add other service cards similarly */}
      </section>

      {/* Portfolio Teaser */}
      <section className="portfolio">
        <h2>Our Work</h2>
        <p>See our AI-powered solutions and enterprise projects</p>
      </section>
    </div>
  );
};

export default Home;

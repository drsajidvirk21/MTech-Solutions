import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Technical Innovation Excellence
          </h1>

          <p className="text-xl text-slate-300 mb-10">
            Building Intelligent Software for a Digital Future
          </p>

          <div className="flex justify-center gap-4">

            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium"
            >
              Request Consultation
            </Link>

            <Link
              to="/portfolio"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900"
            >
              View Portfolio
            </Link>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">
                Website Development
              </h3>

              <ul className="space-y-2">
                <li>Custom Corporate Websites</li>
                <li>E-Commerce Platforms</li>
                <li>Business Portals</li>
              </ul>
            </div>

            <div className="shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">
                ERP Systems
              </h3>

              <ul className="space-y-2">
                <li>School Management</li>
                <li>HR Management</li>
                <li>Inventory Systems</li>
              </ul>
            </div>

            <div className="shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">
                AI Solutions
              </h3>

              <ul className="space-y-2">
                <li>Chatbots</li>
                <li>Automation</li>
                <li>AI Integrations</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-slate-100 py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Our Work
          </h2>

          <p className="text-lg text-slate-600 mb-8">
            Explore our AI-powered solutions and enterprise projects.
          </p>

          <Link
            to="/portfolio"
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg"
          >
            View Portfolio
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Home;
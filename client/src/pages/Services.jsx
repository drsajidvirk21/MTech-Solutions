import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Our Services
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Comprehensive software development, AI integration,
            ERP systems, SaaS products, and digital transformation
            solutions designed to accelerate business growth.
          </p>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-4">
            What We Offer
          </h2>

          <p className="text-center text-slate-600 mb-14 text-lg">
            Complete technology solutions for businesses, startups, and institutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Website Development */}
            <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Website Development
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>✓ Corporate Websites</li>
                <li>✓ E-Commerce Stores</li>
                <li>✓ Business Portals</li>
                <li>✓ Responsive Design</li>
              </ul>
            </div>

            {/* ERP Systems */}
            <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4">
                ERP Systems
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>✓ School Management</li>
                <li>✓ HR & Payroll Systems</li>
                <li>✓ Inventory Management</li>
                <li>✓ Custom Dashboards</li>
              </ul>
            </div>

            {/* AI Solutions */}
            <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4">
                AI Solutions
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>✓ AI Chatbots</li>
                <li>✓ AI Assistants</li>
                <li>✓ Process Automation</li>
                <li>✓ AI Integrations</li>
              </ul>
            </div>

            {/* SaaS Development */}
            <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4">
                SaaS Development
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>✓ Subscription Platforms</li>
                <li>✓ Cloud Applications</li>
                <li>✓ Multi-Tenant Systems</li>
                <li>✓ API Integrations</li>
              </ul>
            </div>

            {/* Mobile Apps */}
            <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Mobile Applications
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>✓ Android Apps</li>
                <li>✓ iOS Apps</li>
                <li>✓ Flutter Solutions</li>
                <li>✓ React Native Apps</li>
              </ul>
            </div>

            {/* IT Consultancy */}
            <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4">
                IT Consultancy
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>✓ Digital Transformation</li>
                <li>✓ Technology Roadmaps</li>
                <li>✓ Cloud Migration</li>
                <li>✓ Software Strategy</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Development Process */}
      <section className="bg-slate-100 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-cyan-500 text-4xl font-bold mb-4">01</div>
              <h3 className="font-bold text-xl mb-2">Requirement Analysis</h3>
              <p className="text-slate-600">
                Understanding your business goals and requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-cyan-500 text-4xl font-bold mb-4">02</div>
              <h3 className="font-bold text-xl mb-2">Architecture & Design</h3>
              <p className="text-slate-600">
                Planning scalable and secure solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-cyan-500 text-4xl font-bold mb-4">03</div>
              <h3 className="font-bold text-xl mb-2">Build & Testing</h3>
              <p className="text-slate-600">
                Development, quality assurance, and optimization.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-cyan-500 text-4xl font-bold mb-4">04</div>
              <h3 className="font-bold text-xl mb-2">Launch & Support</h3>
              <p className="text-slate-600">
                Deployment, monitoring, and long-term support.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Clients Choose Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-100 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Experienced Team
              </h3>
              <p className="text-slate-600">
                Skilled professionals using modern technologies and best practices.
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Custom Solutions
              </h3>
              <p className="text-slate-600">
                Tailored systems designed around your business needs.
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Scalable Architecture
              </h3>
              <p className="text-slate-600">
                Future-ready software built for growth and performance.
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Long-Term Support
              </h3>
              <p className="text-slate-600">
                Ongoing maintenance, updates, and technical assistance.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="bg-cyan-500 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Start Your Project?
          </h2>

          <p className="text-xl mb-8">
            Let's discuss your business requirements and create
            a solution that drives measurable growth.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

  <Link
    to="/contact"
    className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition"
  >
    Request Consultation
  </Link>

  <Link
    to="/quotation"
    className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition"
  >
    Request Quotation
  </Link>

</div>

        </div>

      </section>

    </div>
    
  );
};
<section className="py-20 bg-slate-900 text-white mt-20">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-6">
      Need a Custom Software Solution?
    </h2>

    <p className="text-slate-300 mb-8">
      Tell us about your project requirements and receive a detailed quotation.
    </p>

    <Link
      to="/quotation"
      className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold"
    >
      Request Quotation
    </Link>

  </div>

</section>
export default Services;
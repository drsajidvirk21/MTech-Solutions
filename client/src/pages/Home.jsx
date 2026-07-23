import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transforming Ideas Into Powerful Software Solutions
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            MTech Solutions delivers modern websites, ERP systems,
            SaaS products, AI-powered applications, and custom business
            software that help organizations grow faster.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

  <Link
    to="/contact"
    className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium transition"
  >
    Request Consultation
  </Link>

  <Link
    to="/quotation"
    className="bg-white text-slate-900 hover:bg-slate-200 px-6 py-3 rounded-lg font-medium transition"
  >
    Request Quotation
  </Link>

  <Link
    to="/portfolio"
    className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition"
  >
    View Portfolio
  </Link>

</div>

        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-4">
            Our Services
          </h2>

          <p className="text-center text-slate-600 mb-12">
            Complete digital solutions for startups, businesses and institutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-4">
                Website Development
              </h3>

              <ul className="space-y-2 text-slate-600">
                <li>✔ Corporate Websites</li>
                <li>✔ E-Commerce Stores</li>
                <li>✔ Business Portals</li>
                <li>✔ Responsive Design</li>
              </ul>
            </div>

            <div className="shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-4">
                ERP Systems
              </h3>

              <ul className="space-y-2 text-slate-600">
                <li>✔ School Management</li>
                <li>✔ HR & Payroll Systems</li>
                <li>✔ Inventory Management</li>
                <li>✔ Custom Dashboards</li>
              </ul>
            </div>

            <div className="shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-4">
                AI Solutions
              </h3>

              <ul className="space-y-2 text-slate-600">
                <li>✔ AI Chatbots</li>
                <li>✔ Process Automation</li>
                <li>✔ AI Integrations</li>
                <li>✔ Smart Business Tools</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold text-cyan-500">50+</h3>
              <p className="mt-2 text-slate-600">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-500">30+</h3>
              <p className="mt-2 text-slate-600">Satisfied Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-500">10+</h3>
              <p className="mt-2 text-slate-600">Business Solutions</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-500">24/7</h3>
              <p className="mt-2 text-slate-600">Support Available</p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose MTech Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="shadow-md rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Experienced Development Team
              </h3>
              <p className="text-slate-600">
                We use modern technologies and best practices to build
                scalable and secure software solutions.
              </p>
            </div>

            <div className="shadow-md rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Business-Focused Approach
              </h3>
              <p className="text-slate-600">
                Every project is designed to improve efficiency,
                profitability, and business growth.
              </p>
            </div>

            <div className="shadow-md rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Custom Solutions
              </h3>
              <p className="text-slate-600">
                We create software tailored specifically to your
                organization's requirements.
              </p>
            </div>

            <div className="shadow-md rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Long-Term Support
              </h3>
              <p className="text-slate-600">
                We provide maintenance, updates, and technical support
                after project delivery.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="bg-cyan-500 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Ready To Build Your Next Digital Solution?
          </h2>

          <p className="text-lg mb-8">
            Let's discuss your project and transform your ideas into reality.
          </p>

          <Link
            to="/contact"
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold"
          >
            Get Started Today
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Home;
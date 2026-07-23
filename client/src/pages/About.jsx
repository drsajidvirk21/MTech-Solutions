import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            About MTech Solutions
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Delivering innovative software, AI-powered solutions,
            ERP systems, and digital transformation services for
            businesses worldwide.
          </p>

        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl font-bold mb-6">
                Company Overview
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                MTech Solutions is a software development and technology
                consulting company specializing in website development,
                ERP systems, SaaS products, artificial intelligence,
                business automation, and custom enterprise solutions.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Since our establishment in 2026, our mission has been
                to help organizations embrace technology and achieve
                sustainable growth through innovative digital solutions.
              </p>
            </div>

            <div className="bg-slate-100 rounded-xl p-8 shadow-lg">

              <h3 className="text-2xl font-bold mb-6">
                Company Highlights
              </h3>

              <ul className="space-y-4 text-lg">
                <li>✓ Established in 2026</li>
                <li>✓ Registered Technology Firm</li>
                <li>✓ AI & Software Development Experts</li>
                <li>✓ ERP & SaaS Solution Provider</li>
                <li>✓ Global Client Support</li>
              </ul>

            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-slate-600 text-lg">
                To become a globally recognized technology company
                delivering innovative software and AI solutions that
                transform businesses and communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-slate-600 text-lg">
                Empowering organizations through modern, scalable,
                secure, and sustainable technology solutions that
                drive long-term success.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-100 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-3">
                Muhammad Majid Ali
              </h3>

              <p className="text-cyan-600 font-semibold mb-4">
                Chief Executive Officer (CEO)
              </p>

              <p className="text-slate-600">
                Leading MTech Solutions with a vision of innovation,
                operational excellence, and customer success.
              </p>
            </div>

            <div className="bg-slate-100 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-3">
                Dr. Sajid Tanveer
              </h3>

              <p className="text-cyan-600 font-semibold mb-4">
                Founder & Chief Technology Officer (CTO)
              </p>

              <p className="text-slate-600">
                Driving technology strategy, software architecture,
                AI innovation, and enterprise solution development.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Innovation</h3>
              <p>Embracing modern technologies and creative solutions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Integrity</h3>
              <p>Building trust through transparency and professionalism.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Excellence</h3>
              <p>Delivering high-quality solutions with attention to detail.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Customer Success</h3>
              <p>Helping clients achieve measurable business growth.</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-500 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>

          <p className="text-xl mb-8">
            Partner with MTech Solutions and accelerate your digital transformation journey.
          </p>

          <Link
            to="/contact"
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold hover:bg-slate-100"
          >
            Contact Us Today
          </Link>

        </div>
      </section>

    </div>
  );
};

export default About;
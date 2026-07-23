import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Submitted:", formData);

    alert(
      "Thank you for contacting MTech Solutions. We will get back to you shortly."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectDetails: "",
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact MTech Solutions
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Let's discuss your next software project, ERP system,
            AI solution, SaaS platform, or business automation requirement.
          </p>

        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">

              <h2 className="text-3xl font-bold mb-6 text-slate-900">
                Request Consultation
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="mb-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="mb-5">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="mb-5">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company / Organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="mb-6">
                  <textarea
                    name="projectDetails"
                    rows="6"
                    placeholder="Tell us about your project *"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl font-semibold transition"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Contact Information */}
            <div className="space-y-6">

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Company Information
                </h3>

                <div className="space-y-3 text-slate-600">

                  <p>
                    <strong>Company:</strong> MTech Solutions
                  </p>

                  <p>
                    <strong>CEO:</strong> Muhammad Majid Ali
                  </p>

                  <p>
                    <strong>Founder & CTO:</strong> Dr. Sajid Tanveer
                  </p>

                  <p>
                    <strong>Status:</strong> Registered Technology Firm
                  </p>

                  <p>
                    <strong>Established:</strong> 2026
                  </p>

                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Contact Details
                </h3>

                <div className="space-y-3 text-slate-600">

                  <p>
                    📧 info@mtechsolutions.com
                  </p>

                  <p>
                    📱 +92 XXX XXXXXXX
                  </p>

                  <p>
                    📍 Pakistan
                  </p>

                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Business Hours
                </h3>

                <div className="space-y-2 text-slate-600">

                  <p>Monday – Friday: 9:00 AM – 6:00 PM</p>

                  <p>Saturday: 10:00 AM – 4:00 PM</p>

                  <p>Sunday: Closed</p>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Why Contact Us */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why Work With Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-50 p-8 rounded-2xl shadow text-center">
              <h3 className="font-bold text-xl mb-3">
                Custom Solutions
              </h3>

              <p className="text-slate-600">
                Tailored software solutions designed specifically
                for your business requirements.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow text-center">
              <h3 className="font-bold text-xl mb-3">
                Modern Technology
              </h3>

              <p className="text-slate-600">
                Leveraging AI, cloud technologies, and modern
                frameworks to build scalable systems.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl shadow text-center">
              <h3 className="font-bold text-xl mb-3">
                Long-Term Support
              </h3>

              <p className="text-slate-600">
                Continuous maintenance, upgrades, and technical
                support for sustainable growth.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Start Your Project?
          </h2>

          <p className="text-xl text-slate-300 mb-8">
            Let's transform your ideas into powerful digital solutions.
          </p>

          <button className="bg-cyan-500 hover:bg-cyan-600 px-10 py-4 rounded-xl font-semibold text-lg transition">
            Schedule Consultation
          </button>

        </div>

      </section>

    </div>
  );
};

export default Contact;
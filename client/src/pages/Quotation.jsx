import React, { useState } from "react";
import MetaTags from "../components/SEO/MetaTags";

const Quotation = () => {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    company: "",
    budget: "",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Quotation Request:", formData);

    setSubmitted(true);

    setFormData({
      service: "",
      name: "",
      email: "",
      company: "",
      budget: "",
      requirements: "",
    });
  };

  return (
    <>
      <MetaTags
        title="Request a Quotation | MTech Solutions"
        description="Get a professional quotation for your website, ERP, SaaS, AI, or custom software project."
      />

      <div className="bg-slate-50 min-h-screen">

        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h1 className="text-5xl font-bold mb-6">
              Request a Project Quotation
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tell us about your project requirements and receive a
              professional quotation tailored to your business needs.
            </p>

          </div>
        </section>

        {/* Form Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">

            <div className="bg-white rounded-2xl shadow-xl p-10">

              {submitted && (
                <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg mb-8">
                  Thank you! Your quotation request has been submitted successfully.
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-6"
              >

                <div>
                  <label className="block font-medium mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Service Required
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">Select Service</option>
                    <option>Website Development</option>
                    <option>E-Commerce Development</option>
                    <option>ERP System</option>
                    <option>School Management System</option>
                    <option>SaaS Platform</option>
                    <option>AI Solution</option>
                    <option>Mobile Application</option>
                    <option>Custom Software</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block font-medium mb-2">
                    Estimated Budget
                  </label>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">Select Budget Range</option>
                    <option>Below $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block font-medium mb-2">
                    Project Requirements
                  </label>

                  <textarea
                    rows="6"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                    placeholder="Describe your project requirements, features, objectives, and timeline..."
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-lg font-semibold transition"
                  >
                    Request Quotation
                  </button>
                </div>

              </form>

            </div>

          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-20">

          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center mb-12">
              Why Request a Quotation From Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-slate-50 p-8 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-3">
                  Transparent Pricing
                </h3>

                <p className="text-slate-600">
                  Clear project estimates with no hidden costs.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-3">
                  Expert Consultation
                </h3>

                <p className="text-slate-600">
                  Receive guidance from experienced software professionals.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-3">
                  Customized Solutions
                </h3>

                <p className="text-slate-600">
                  Every quotation is tailored to your unique business goals.
                </p>
              </div>

            </div>

          </div>

        </section>

      </div>
    </>
  );
};

export default Quotation;
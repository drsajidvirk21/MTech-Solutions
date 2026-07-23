import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Create Your Account
          </h1>

          <p className="text-xl text-slate-300">
            Join MTech Solutions and access our software services,
            consultations, quotations, and project management tools.
          </p>

        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>

              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Start Your Digital Journey
              </h2>

              <p className="text-lg text-slate-600 mb-8">
                Register to access consultations, quotations,
                project tracking, support resources, and future
                client portal services.
              </p>

              <div className="space-y-4">

                <div className="bg-white p-5 rounded-xl shadow">
                  <h3 className="font-semibold text-lg mb-2">
                    Client Dashboard Access
                  </h3>
                  <p className="text-slate-600">
                    Manage projects and monitor progress.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                  <h3 className="font-semibold text-lg mb-2">
                    Fast Quotations
                  </h3>
                  <p className="text-slate-600">
                    Request software and website quotations quickly.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow">
                  <h3 className="font-semibold text-lg mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-slate-600">
                    Direct communication with our technical team.
                  </p>
                </div>

              </div>

            </div>

            {/* Register Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">

              <h2 className="text-3xl font-bold text-center mb-8">
                Register
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create password"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block mb-2 font-medium">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition"
                >
                  Create Account
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Register;
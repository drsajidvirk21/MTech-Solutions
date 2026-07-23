import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Attempt:", {
      email,
      password,
    });

    alert("Login functionality will be connected to backend APIs.");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-12">

      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

        {/* Left Side Branding */}
        <div className="bg-slate-900 text-white p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-bold mb-6">
            MTech Solutions
          </h1>

          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Transforming ideas into innovative software, ERP systems,
            AI-powered solutions, SaaS platforms, and digital experiences.
          </p>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-cyan-400">✓</span>
              <span>Secure Client Portal</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-cyan-400">✓</span>
              <span>Project Tracking System</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-cyan-400">✓</span>
              <span>Business Management Solutions</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-cyan-400">✓</span>
              <span>AI & Automation Services</span>
            </div>

          </div>

        </div>

        {/* Right Side Login Form */}
        <div className="p-12 flex flex-col justify-center">

          <div className="max-w-md mx-auto w-full">

            <h2 className="text-4xl font-bold text-slate-900 mb-3">
              Welcome Back
            </h2>

            <p className="text-slate-500 mb-8">
              Sign in to access your account and manage your projects.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="mb-5">
                <label className="block mb-2 font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-medium text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="flex justify-between items-center mb-6">

                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <button
                  type="button"
                  className="text-cyan-600 hover:text-cyan-700 text-sm font-medium"
                >
                  Forgot Password?
                </button>

              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition duration-300"
              >
                Sign In
              </button>

            </form>

            <div className="mt-8 text-center">

              <p className="text-slate-500 text-sm">
                Protected by secure authentication and encrypted access.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;
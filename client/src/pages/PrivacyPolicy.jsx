import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Privacy Policy
          </h1>

          <p className="text-xl text-slate-300">
            Your privacy is important to MTech Solutions.
          </p>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 bg-white p-10 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            Information We Collect
          </h2>

          <p className="text-slate-600 mb-8">
            We may collect personal information including your name,
            email address, phone number, company information, and
            project requirements when you submit forms through our website.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            How We Use Information
          </h2>

          <p className="text-slate-600 mb-8">
            We use your information to respond to inquiries,
            provide services, improve our website, and communicate
            important updates regarding projects and services.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Data Security
          </h2>

          <p className="text-slate-600 mb-8">
            We implement appropriate security measures to protect
            your personal information from unauthorized access,
            disclosure, or misuse.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Third-Party Services
          </h2>

          <p className="text-slate-600 mb-8">
            We may use third-party services such as analytics,
            cloud hosting providers, and communication tools
            to improve our services.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-slate-600">
            For privacy-related questions, contact us at
            info@mtechsolutions.pk
          </p>

        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;
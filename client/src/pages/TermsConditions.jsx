import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Terms & Conditions
          </h1>

          <p className="text-xl text-slate-300">
            Terms governing the use of MTech Solutions services.
          </p>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 bg-white p-10 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            Acceptance of Terms
          </h2>

          <p className="text-slate-600 mb-8">
            By accessing this website, you agree to comply with
            these terms and conditions.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Services
          </h2>

          <p className="text-slate-600 mb-8">
            MTech Solutions provides software development,
            AI solutions, ERP systems, SaaS platforms,
            consulting, and technology services.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Intellectual Property
          </h2>

          <p className="text-slate-600 mb-8">
            All website content, branding, graphics, and materials
            remain the property of MTech Solutions unless otherwise stated.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Limitation of Liability
          </h2>

          <p className="text-slate-600 mb-8">
            MTech Solutions shall not be liable for any indirect,
            incidental, or consequential damages resulting from
            use of this website.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Updates
          </h2>

          <p className="text-slate-600">
            We reserve the right to modify these terms at any time.
          </p>

        </div>
      </section>

    </div>
  );
};

export default TermsConditions;
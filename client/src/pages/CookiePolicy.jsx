import React from "react";

const CookiePolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Cookie Policy
          </h1>

          <p className="text-xl text-slate-300">
            Understanding how cookies are used on our website.
          </p>

        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 bg-white p-10 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            What Are Cookies?
          </h2>

          <p className="text-slate-600 mb-8">
            Cookies are small text files stored on your device
            that help websites function efficiently.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            How We Use Cookies
          </h2>

          <p className="text-slate-600 mb-8">
            We use cookies to improve user experience,
            analyze website traffic, and enhance performance.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Managing Cookies
          </h2>

          <p className="text-slate-600 mb-8">
            You can control and delete cookies through
            your browser settings at any time.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Third-Party Cookies
          </h2>

          <p className="text-slate-600">
            Some third-party services may place cookies
            to support analytics and functionality.
          </p>

        </div>
      </section>

    </div>
  );
};

export default CookiePolicy;
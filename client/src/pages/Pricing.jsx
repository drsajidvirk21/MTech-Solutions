import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$499+",
      description: "Perfect for startups and small businesses.",
      features: [
        "Business Website",
        "Responsive Design",
        "Contact Forms",
        "Basic SEO Setup",
        "Security Configuration",
      ],
      featured: false,
    },
    {
      name: "Professional",
      price: "$1,499+",
      description: "Ideal for growing businesses and organizations.",
      features: [
        "Corporate Website",
        "Admin Dashboard",
        "Database Integration",
        "User Authentication",
        "Advanced SEO",
        "Analytics Integration",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      description: "For large organizations and complex solutions.",
      features: [
        "ERP Systems",
        "SaaS Platforms",
        "AI Integration",
        "Cloud Deployment",
        "Multi-User Management",
        "Dedicated Support",
      ],
      featured: false,
    },
  ];

  const additionalServices = [
    "AI Solutions",
    "Mobile App Development",
    "Cloud Infrastructure",
    "Maintenance & Support",
    "Business Automation",
    "Custom Integrations",
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Flexible Pricing Solutions
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Transparent packages designed to help startups,
            businesses, educational institutions, and enterprises
            achieve digital success.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to="/quotation"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
            >
              Request Quotation
            </Link>

            <Link
              to="/contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Pricing Packages
            </h2>

            <p className="text-lg text-slate-600">
              Choose the package that best fits your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col ${
                  plan.featured
                    ? "border-4 border-cyan-500 relative"
                    : ""
                }`}
              >

                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-3">
                  {plan.name}
                </h3>

                <div className="text-4xl font-bold text-cyan-500 mb-4">
                  {plan.price}
                </div>

                <p className="text-slate-600 mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-slate-700">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/quotation"
                  className="w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition"
                >
                  Get Started
                </Link>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Additional Services
            </h2>

            <p className="text-lg text-slate-600">
              Specialized solutions tailored to your unique business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl shadow text-center hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">
                  {service}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose MTech Solutions
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-3xl font-bold text-cyan-500 mb-2">
                50+
              </h3>
              <p>Projects Delivered</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-3xl font-bold text-cyan-500 mb-2">
                100%
              </h3>
              <p>Client Commitment</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-3xl font-bold text-cyan-500 mb-2">
                Modern
              </h3>
              <p>Technology Stack</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-3xl font-bold text-cyan-500 mb-2">
                AI
              </h3>
              <p>Powered Solutions</p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-bold text-xl mb-2">
                How much does a website cost?
              </h3>

              <p className="text-slate-600">
                Every project is unique. Pricing depends on project scope,
                features, integrations, and deployment requirements.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">
                Do you provide support after deployment?
              </h3>

              <p className="text-slate-600">
                Yes. We offer maintenance and support packages for all projects.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-2">
                Can you build custom ERP systems?
              </h3>

              <p className="text-slate-600">
                Absolutely. ERP systems and business automation solutions
                are among our core specialties.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>

          <p className="text-xl text-slate-300 mb-8">
            Let's discuss your requirements and create a solution
            tailored specifically for your business.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

  <Link
    to="/quotation"
    className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600"
  >
    Request Quotation
  </Link>

  <Link
    to="/contact"
    className="border border-slate-900 px-6 py-3 rounded-lg hover:bg-slate-900 hover:text-white"
  >
    Schedule Consultation
  </Link>

</div>

        </div>
      </section>

    </div>
  );
};

export default Pricing;
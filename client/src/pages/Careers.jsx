import React from "react";
import { Link } from "react-router-dom";

const Careers = () => {
  const openPositions = [
    {
      title: "React Developer",
      department: "Engineering",
      location: "Remote / Lahore, Pakistan",
      type: "Full-Time",
      description:
        "Build modern web applications using React, Tailwind CSS, and modern frontend technologies.",
      requirements: [
        "React.js Experience",
        "JavaScript ES6+",
        "Responsive Design",
        "Git & GitHub Knowledge",
      ],
    },
    {
      title: "Node.js Developer",
      department: "Engineering",
      location: "Remote / Karachi, Pakistan",
      type: "Full-Time",
      description:
        "Develop scalable APIs and backend systems using Node.js, Express, and MySQL.",
      requirements: [
        "Node.js Experience",
        "REST APIs",
        "MySQL Database",
        "Backend Architecture",
      ],
    },
    {
      title: "AI Developer",
      department: "Artificial Intelligence",
      location: "Remote / Islamabad, Pakistan",
      type: "Full-Time",
      description:
        "Work on AI-powered solutions, automation systems, and large language model integrations.",
      requirements: [
        "Python Programming",
        "Machine Learning",
        "LLM Integration",
        "Problem Solving Skills",
      ],
    },
    {
      title: "Technical Trainer",
      department: "Training & Education",
      location: "Remote",
      type: "Contract",
      description:
        "Train students and professionals in software development and emerging technologies.",
      requirements: [
        "Teaching Experience",
        "Technical Expertise",
        "Communication Skills",
        "Presentation Skills",
      ],
    },
  ];

  const internships = [
    {
      title: "Web Development Intern",
      duration: "3 - 6 Months",
      description:
        "Learn real-world web development by working with our senior developers.",
      perks: [
        "Professional Mentorship",
        "Certificate",
        "Live Projects",
        "Career Growth",
      ],
    },
    {
      title: "AI Research Intern",
      duration: "4 - 6 Months",
      description:
        "Gain hands-on experience in AI, machine learning, and intelligent systems.",
      perks: [
        "AI Project Experience",
        "Research Opportunities",
        "Industry Exposure",
        "Performance-Based Stipend",
      ],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Careers At MTech Solutions
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Join a growing technology company building innovative software,
            AI solutions, business systems, and digital transformation
            projects for clients worldwide.
          </p>

          <Link
            to="/contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            Apply Today
          </Link>

        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Join MTech Solutions?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-slate-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Innovation</h3>
              <p className="text-slate-600">
                Work on modern software and AI technologies.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Growth</h3>
              <p className="text-slate-600">
                Continuous learning and career advancement.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Flexibility</h3>
              <p className="text-slate-600">
                Remote and hybrid opportunities available.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Impact</h3>
              <p className="text-slate-600">
                Build solutions that help businesses grow.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-100">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Employee Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow">
              Remote Work Opportunities
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Flexible Working Hours
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Professional Development
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Certifications Support
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Mentorship Programs
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Career Advancement
            </div>

          </div>

        </div>

      </section>

      {/* Internship Programs */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Internship Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {internships.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex justify-between items-center mb-4">

                  <h3 className="text-2xl font-bold">
                    {program.title}
                  </h3>

                  <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">
                    {program.duration}
                  </span>

                </div>

                <p className="text-slate-600 mb-4">
                  {program.description}
                </p>

                <ul className="space-y-2 text-slate-600 mb-6">
                  {program.perks.map((perk, i) => (
                    <li key={i}>✓ {perk}</li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Apply Now
                </Link>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Open Positions */}
      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Open Positions
          </h2>

          <div className="space-y-8">

            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl shadow"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-8">

                  <div>

                    <h3 className="text-2xl font-bold mb-3">
                      {position.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 mb-4">

                      <span className="bg-white px-3 py-1 rounded-full text-sm">
                        {position.department}
                      </span>

                      <span className="bg-white px-3 py-1 rounded-full text-sm">
                        {position.location}
                      </span>

                      <span className="bg-white px-3 py-1 rounded-full text-sm">
                        {position.type}
                      </span>

                    </div>

                    <p className="text-slate-600 mb-4">
                      {position.description}
                    </p>

                    <ul className="space-y-2 text-slate-600">
                      {position.requirements.map((req, i) => (
                        <li key={i}>✓ {req}</li>
                      ))}
                    </ul>

                  </div>

                  <div className="flex-shrink-0">
                    <Link
                      to="/contact"
                      className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition"
                    >
                      Apply Now
                    </Link>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-slate-100">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Hiring Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">

            <div className="bg-white p-6 rounded-xl shadow">Apply</div>
            <div className="bg-white p-6 rounded-xl shadow">Review</div>
            <div className="bg-white p-6 rounded-xl shadow">Interview</div>
            <div className="bg-white p-6 rounded-xl shadow">Evaluation</div>
            <div className="bg-white p-6 rounded-xl shadow">Offer</div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready To Join Our Team?
          </h2>

          <p className="text-slate-300 mb-8">
            Send your resume and become part of our growing technology company.
          </p>

          <a
            href="mailto:careers@mtechsolutions.pk"
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold transition"
          >
            Send Resume
          </a>

        </div>

      </section>

    </div>
  );
};

export default Careers;
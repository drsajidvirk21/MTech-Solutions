import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "MTech Solutions Corporate Website",
      category: "Corporate Website",
      description:
        "Professional software company website showcasing services, portfolio, AI solutions, and client engagement systems.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Fee Management System",
      category: "ERP Solution",
      description:
        "Complete fee collection, reporting, student management, and financial tracking system for educational institutions.",
      technologies: ["React", "Node.js", "MySQL", "Bootstrap"],
    },
    {
      title: "School Management ERP",
      category: "Education ERP",
      description:
        "Comprehensive school administration platform with attendance, examinations, fee management, and parent communication.",
      technologies: ["React", "Express", "MySQL", "JWT"],
    },
    {
      title: "Go Gluten E-Commerce Website",
      category: "E-Commerce",
      description:
        "Modern e-commerce platform for gluten-free products featuring online ordering, product catalog, and customer management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "AI Business Assistant",
      category: "Artificial Intelligence",
      description:
        "AI-powered assistant designed to automate workflows, customer interactions, and business operations.",
      technologies: ["Python", "Ollama", "LangChain", "React"],
    },
    {
      title: "SaaS Business Platform",
      category: "SaaS Product",
      description:
        "Cloud-based subscription platform enabling organizations to manage operations and collaboration efficiently.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Portfolio
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Delivering innovative software solutions, ERP systems,
            AI applications, SaaS platforms, and business websites
            that drive measurable business results.
          </p>

        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>

            <p className="text-lg text-slate-600">
              A showcase of our expertise across multiple industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Project Image */}
                <div className="h-52 bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-500 text-lg font-semibold">
                    Project Preview
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">

                  <div>
                    <span className="inline-block text-sm bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full font-medium">
                      {project.category}
                    </span>

                    <h3 className="text-2xl font-bold mt-4 mb-4 text-slate-900">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-6 min-h-[120px]">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-slate-100 px-3 py-2 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Button Always Bottom Aligned */}
                  <div className="mt-auto">
                    <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition duration-300">
                      View Details
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Technology Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "MySQL",
              "PostgreSQL",
              "Tailwind CSS",
              "AI Integration",
              "Cloud Solutions",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-slate-100 px-6 py-3 rounded-xl font-medium hover:shadow-md transition"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* Expertise */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Development Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Web Applications",
              "ERP Systems",
              "SaaS Platforms",
              "AI Solutions",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-xl hover:-translate-y-2 transition-all text-center"
              >
                <h3 className="font-bold text-xl text-slate-900">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Let's Build Your Next Project
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            Transform your ideas into scalable digital solutions with
            MTech Solutions.
          </p>

         <div className="flex flex-wrap justify-center gap-4">

  <a
    href="/contact"
    className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold"
  >
    Request Consultation
  </a>

  <a
    href="/quotation"
    className="bg-white text-slate-900 hover:bg-slate-200 px-8 py-4 rounded-lg font-semibold"
  >
    Request Quotation
  </a>

</div>

        </div>
      </section>

    </div>
  );
};

export default Portfolio;
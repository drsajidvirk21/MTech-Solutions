import React from 'react';

const Careers = () => {
  const openPositions = [
    {
      title: 'React Developer',
      department: 'Engineering',
      location: 'Remote / Lahore, PK',
      type: 'Full-time',
      description: 'We are looking for a skilled React developer with experience in modern frontend frameworks and state management.',
      requirements: ['3+ years React.js experience', 'Strong TypeScript skills', 'Experience with Redux/Context API', 'Knowledge of testing frameworks']
    },
    {
      title: 'Node.js Developer',
      department: 'Engineering',
      location: 'Remote / Karachi, PK',
      type: 'Full-time',
      description: 'Join our backend team to build scalable APIs and microservices using Node.js and related technologies.',
      requirements: ['3+ years Node.js experience', 'Experience with Express/Fastify', 'Database design (SQL/NoSQL)', 'REST API development']
    },
    {
      title: 'AI Developer',
      department: 'AI/ML',
      location: 'Remote / Islamabad, PK',
      type: 'Full-time',
      description: 'Work on cutting-edge AI projects involving LLMs, machine learning models, and intelligent automation systems.',
      requirements: ['Python/R experience', 'TensorFlow/PyTorch knowledge', 'LLM integration experience', 'Cloud ML services (AWS/Azure)']
    },
    {
      title: 'Technical Trainer',
      department: 'Education',
      location: 'Remote / Multiple Locations',
      type: 'Contract',
      description: 'Deliver training programs in web development, AI, and software engineering to our students and clients.',
      requirements: ['Teaching/training experience', 'Strong technical background', 'Excellent communication skills', 'Industry certifications preferred']
    }
  ];

  const internships = [
    {
      title: 'Web Development Intern',
      duration: '3-6 months',
      description: 'Learn and work on real projects with our development team.',
      perks: ['Mentorship from senior developers', 'Certificate upon completion', 'Potential full-time offer', 'Flexible hours']
    },
    {
      title: 'AI Research Intern',
      duration: '4-6 months',
      description: 'Assist our AI team in research and implementation of machine learning models.',
      perks: ['Hands-on AI project experience', 'Publication opportunities', 'Networking with industry experts', 'Stipend provided']
    }
  ];

  return (
    <div className="careers-page py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-primary-colour">Join Our Team</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for technology and innovation.
          </p>
        </div>

        {/* Internship Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-secondary-colour">Internship Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-primary-colour">{program.title}</h3>
                  <span className="bg-accent-colour text-white px-3 py-1 rounded-full text-sm">{program.duration}</span>
                </div>
                <p className="text-slate-600 mb-4">{program.description}</p>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-secondary-colour">Program Perks:</span>
                  <ul className="list-disc list-inside text-slate-500">
                    {program.perks.map((perk, i) => (
                      <li key={i}>{perk}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full bg-primary-colour text-white py-3 rounded-lg hover:bg-emerald-colour transition-colors font-medium">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-secondary-colour">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-primary-colour mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">{position.department}</span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">{position.location}</span>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">{position.type}</span>
                    </div>
                    <p className="text-slate-600 mb-4">{position.description}</p>
                    <div className="mb-4">
                      <span className="text-sm font-medium text-secondary-colour">Requirements:</span>
                      <ul className="list-disc list-inside text-slate-500 mt-2">
                        {position.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="bg-secondary-colour text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-medium whitespace-nowrap">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
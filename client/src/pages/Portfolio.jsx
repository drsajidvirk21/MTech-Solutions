import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform for RetailCo',
      category: 'E-Commerce Projects',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
      features: ['Multi-vendor marketplace', 'Advanced inventory management', 'Real-time analytics dashboard', 'Customer review system'],
      clientBenefits: '40% increase in sales within 6 months through improved user experience and streamlined checkout process',
      image: 'https://via.placeholder.com/600x400?text=E-Commerce+Platform'
    },
    {
      title: 'School Management System',
      category: 'School Management Systems',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'JWT Auth'],
      features: ['Student portal with grades tracking', 'Attendance management', 'Fee collection system', 'Parent communication module'],
      clientBenefits: 'Reduced administrative overhead by 60% and improved parent-teacher communication',
      image: 'https://via.placeholder.com/600x400?text=School+System'
    },
    {
      title: 'SaaS Project Management Tool',
      category: 'SaaS Products',
      technologies: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Stripe'],
      features: ['Real-time collaboration', 'Task assignment and tracking', 'File sharing', 'Team chat integration'],
      clientBenefits: 'Enabled remote teams to increase productivity by 35% with centralized project management',
      image: 'https://via.placeholder.com/600x400?text=SaaS+Tool'
    },
    {
      title: 'AI-Powered Customer Support',
      category: 'AI Projects',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker'],
      features: ['24/7 automated support', 'Natural language processing', 'Ticket categorization', 'Sentiment analysis'],
      clientBenefits: 'Reduced response time by 85% and improved customer satisfaction scores',
      image: 'https://via.placeholder.com/600x400?text=AI+Support'
    },
    {
      title: 'ERP System for Manufacturing Co.',
      category: 'ERP Systems',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Redis', 'Elasticsearch'],
      features: ['Inventory tracking', 'Production scheduling', 'Quality control monitoring', 'Financial reporting'],
      clientBenefits: 'Optimized production workflows leading to 25% cost reduction',
      image: 'https://via.placeholder.com/600x400?text=ERP+System'
    },
    {
      title: 'Custom CRM Solution',
      category: 'ERP Systems',
      technologies: ['React', '.NET Core', 'SQL Server', 'Power BI', 'Azure Cloud'],
      features: ['Lead management', 'Sales pipeline tracking', 'Marketing automation', 'Customer analytics'],
      clientBenefits: 'Improved lead conversion rate by 40% through better data insights',
      image: 'https://via.placeholder.com/600x400?text=CRM+Solution'
    }
  ];

  const categories = ['All', 'ERP Systems', 'School Management Systems', 'E-Commerce Projects', 'SaaS Products', 'AI Projects'];

 return (
  <div className="portfolio-page py-12 bg-slate-50 min-h-screen">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4 text-center text-primary-colour">
        Our Portfolio
      </h1>

      <p className="text-lg text-center mb-10 text-slate-600 max-w-4xl mx-auto">
        Explore our successful projects across various industries. Each
        solution is crafted to meet specific business challenges.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-6 py-2 rounded-full border border-secondary-colour text-secondary-colour hover:bg-secondary-colour hover:text-white transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="absolute top-2 right-2 bg-accent-colour text-white px-3 py-1 text-xs rounded-full">
                {project.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary-colour">
                {project.title}
              </h3>

              <div className="mb-4">
                <span className="text-sm font-medium text-secondary-colour">
                  Technologies
                </span>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-primary-colour mb-2">
                  Key Features
                </h4>

                <ul className="text-sm text-slate-600 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-slate-600 mb-4">
                <span className="font-medium text-secondary-colour">
                  Client Benefit:
                </span>{" "}
                {project.clientBenefits}
              </p>

              <button className="w-full bg-secondary-colour text-white py-2 rounded-lg hover:opacity-90 transition">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Portfolio;
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
    <div className="portfolio-page py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary-colour">Our Portfolio</h1>\n        <p className="text-lg text-center mb-10 text-slate-600 max-w-4xl mx-auto">
          Explore our successful projects across various industries. Each solution is crafted to meet specific business challenges.
        </p>\n        
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
        </div>\n        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">\n          {projects.map((project, index) => (\n            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">\n              <div className="relative">\n                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />\n                <div className="absolute top-2 right-2 bg-accent-colour text-white px-3 py-1 text-xs rounded-full">\n                  {project.category}\n                </div>\n              </div>\n              <div className="p-6">\n                <h3 className="text-xl font-semibold mb-3 text-primary-colour">{project.title}</h3>\n                <div className="mb-4">\n                  <span className="text-sm font-medium text-secondary-colour">Technologies:</span>\n                  <div className="flex flex-wrap gap-2 mt-2">\n                    {project.technologies.map((tech, i) => (\n                      <span key={i} className="text-xs bg-slate-100 px-2 py-1 rounded">{tech}</span>\n                    ))}\n                  </div>\n                </div>\n                <p className="text-sm text-slate-600 mb-3">\n                  <span className="font-medium text-secondary-colour">Client Benefit:</span> {project.clientBenefits}\n                </p>\n                <button className="mt-4 text-sm text-secondary-colour font-medium hover:underline">\n                  View Details →\n                </button>\n              </div>\n            </div>\n          ))}\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default Portfolio;
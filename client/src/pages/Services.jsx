import React from 'react';
const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites built with modern technologies and best practices.',
      features: ['Corporate Websites', 'Business Websites', 'Educational Websites', 'E-Commerce Websites']
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions for your business needs.',
      features: ['ERP Systems', 'CRM Systems', 'Inventory Systems', 'School Management Systems']
    },
    {
      title: 'SaaS Development',
      description: 'Cloud-based applications with subscription models.',
      features: ['Subscription Platforms', 'Cloud Applications', 'Multi-Tenant Systems']
    },
    {
      title: 'AI Solutions',
      description: 'Artificial intelligence integration for automation and insights.',
      features: ['AI Chatbots', 'AI Assistants', 'Local AI Deployment', 'Ollama Integration', 'AI Workflow Automation']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications.',
      features: ['Android', 'iOS', 'Cross-Platform']
    },
    {
      title: 'Database Solutions',
      description: 'Robust and scalable database architectures.',
      features: ['MySQL', 'PostgreSQL', 'SQL Server']
    }
  ];
  
  return (
    <div className="services-page">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-primary-colour">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

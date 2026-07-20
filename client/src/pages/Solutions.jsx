import React from 'eact';

const Solutions = () => {
  const solutions = [
    {
      title: 'Education',
      description: 'Transforming educational institutions with digital solutions',
      features: ['School ERP Systems', 'Learning Management Systems (LMS)', 'Admission Management', 'Student Information Systems', 'Online Examination Platforms']
    },
    {
      title: 'Healthcare',
      description: 'Innovative healthcare solutions for better patient outcomes',
      features: ['Clinic Management Systems', 'Appointment Scheduling', 'Electronic Health Records (EHR)', 'Telemedicine Platforms', 'Medical Billing Systems']
    },
    {
      title: 'Retail & E-Commerce',
      description: 'Modern retail solutions for omnichannel experiences',
      features: ['Inventory Management', 'Point of Sale (POS) Systems', 'Customer Relationship Management', 'Online Marketplaces', 'Supply Chain Optimization']
    },
    {
      title: 'Manufacturing & Industry',
      description: 'Smart manufacturing and industrial automation solutions',
      features: ['Production Tracking Systems', 'Quality Control Management', 'Supply Chain Visibility', 'Predictive Maintenance', 'IoT Integration']
    },
    {
      title: 'Small Business & Startups',
      description: 'Affordable, scalable solutions for growing businesses',
      features: ['CRM Systems', 'Accounting Integration', 'Project Management Tools', 'HR & Payroll Systems', 'Business Intelligence Dashboards']
    }
  ];

  return (
    <div className="solutions-page">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center text-primary-colour">Industry-Specific Solutions</h1>
        <p className="text-lg text-center mb-10 text-slate-600 max-w-4xl mx-auto">
          We understand that each industry has unique challenges. Our tailored solutions address specific sector needs while leveraging cutting-edge technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
              <div className="flex items-start mb-6">
                <div className="p-3 bg-secondary-colour bg-opacity-10 rounded-full mr-4">
                  <span className="text-2xl text-secondary-colour">{solution.title.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-primary-colour">{solution.title}</h3>
                  <p className="text-slate-600">{solution.description}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-500 space-y-3 mt-4">
                {solution.features.map((feature, i) => (
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

export default Solutions;
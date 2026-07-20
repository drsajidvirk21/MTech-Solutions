import React, { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  return (
    <div className="contact-page">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name *" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-colour" 
                required 
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address *" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-colour" 
                required 
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-colour" 
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="text" 
                name="company" 
                placeholder="Company" 
                value={formData.company} 
                onChange={handleChange} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-colour" 
              />
            </div>
            
            <div className="mb-6">
              <textarea 
                name="projectDetails" 
                placeholder="Project Details *" 
                value={formData.projectDetails} 
                onChange={handleChange} 
                rows="5" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-colour" 
                required
              />
            </div>
            
            <button type="submit" className="w-full bg-primary-colour text-white py-3 rounded-lg hover:bg-emerald-colour transition-colors">
              Send Message
            </button>
          </form>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
              <p>Email: info@mtechsolutions.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: Tech Park, Silicon Valley, CA</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-colour hover:text-emerald-colour">LinkedIn</a>
                <a href="#" className="text-primary-colour hover:text-emerald-colour">Twitter</a>
                <a href="#" className="text-primary-colour hover:text-emerald-colour">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

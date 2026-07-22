import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import MetaTags from '../components/SEO/MetaTags';

const Quotation = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [requirements, setRequirements] = useState('');
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await api.get('/services');
        setServices(res.data);
      } catch (err) {
        console.error('Failed to fetch services:', err);
      }
    };
    fetchServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Call backend quotation estimation endpoint
      const res = await api.post('/quotations/estimate', {
        service_id: selectedService,
        requirements
      });
      setEstimatedCost(res.data.estimated_cost);
    } catch (err) {
      console.error('Estimation failed:', err);
      // Fallback simple estimate
      setEstimatedCost('Custom quote - our team will contact you');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MetaTags
        title="Online Quotation - MTech Solutions"
        description="Get an instant estimated cost for your software project. Select a service and describe your requirements."
      />
      <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-primary-colour mb-8">Request a Quotation</h1>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Get an estimated cost for your project in seconds. Our team will follow up with a detailed proposal.
          </p>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Select Service</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-colour"
                  required
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Project Requirements</label>
                <textarea
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  rows="5"
                  placeholder="Describe your project, features needed, timeline, and budget range..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-colour"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-colour text-white py-3 rounded-lg hover:bg-emerald-colour transition-colors font-medium"
              >
                {loading? 'Calculating...' : 'Get Estimate'}
              </button>
            </form>

            {estimatedCost && (
              <div className="mt-8 p-6 bg-secondary-colour bg-opacity-10 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-primary-colour mb-2">Estimated Cost</h3>
                <p className="text-3xl font-bold text-secondary-colour">{estimatedCost}</p>
                <p className="text-sm text-slate-500 mt-2">Final pricing may vary based on detailed requirements.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Quotation;


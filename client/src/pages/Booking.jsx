import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../utils/api';
import MetaTags from '../components/SEO/MetaTags';

const Booking = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    service_id: '',
    appointment_date: '',
    notes: ''
  });
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Fetch services
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

  // Fetch user appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await api.get('/appointments');
        setAppointments(res.data);
      } catch (err) {
        console.error('Failed to fetch appointments:', err);
      }
    };
    fetchAppointments();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await api.post('/appointments', formData);
      setSuccess('Appointment booked successfully!');
      setFormData({ service_id: '', appointment_date: '', notes: '' });
      // Refresh appointments
      const res2 = await api.get('/appointments');
      setAppointments(res2.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to book appointment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MetaTags
        title="Book an Appointment - MTech Solutions"
        description="Schedule a consultation with our experts for web development, AI solutions, custom software, and more."
      />
      <section className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-primary-colour mb-8">Book a Consultation</h1>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Schedule a meeting with our experts to discuss your project requirements and get a tailored solution.
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
                {success}
              </div>
            )}
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Select Service</label>
                <select
                  name="service_id"
                  value={formData.service_id}
                  onChange={handleChange}
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
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date & Time</label>
                <input
                  type="datetime-local"
                  name="appointment_date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-colour"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Additional Notes (optional)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-colour"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-secondary-colour text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors font-medium flex items-center justify-center gap-2"
              >
                {loading ? ("Booking...") : ("Book Appointment")}
              </button>
            </form>
          </div>

          {/* Upcoming Appointments */}
          {appointments.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-primary-colour mb-6">Your Upcoming Appointments</h2>
              <div className="space-y-4">
                {appointments.map((apt) => (
                  <div key={apt.id} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-primary-colour">
                          {apt.service?.name || 'Service'}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {new Date(apt.appointment_date).toLocaleString()}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${apt.status === 'scheduled' ? 'bg-blue-100 text-blue-800' : apt.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                      >
                        {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                      </span>
                    </div>
                    {apt.notes && (
                      <p className="mt-2 text-slate-600 italic">{apt.notes}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Booking;

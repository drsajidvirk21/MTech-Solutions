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
      title="Book a Consultation - MTech Solutions"
      description="Schedule a consultation with our experts for web development, AI solutions, ERP systems, SaaS platforms and custom software development."
    />

    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Book a Consultation
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Schedule a strategic consultation with our experts and
            discover the best technology solutions for your business.
          </p>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-lg mb-2">
                Project Planning
              </h3>
              <p className="text-slate-600 text-sm">
                Strategic planning for successful project execution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-lg mb-2">
                Architecture Design
              </h3>
              <p className="text-slate-600 text-sm">
                Modern scalable software architecture recommendations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-lg mb-2">
                AI Integration
              </h3>
              <p className="text-slate-600 text-sm">
                Discover automation and AI opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-lg mb-2">
                Business Growth
              </h3>
              <p className="text-slate-600 text-sm">
                Technology strategies that support business expansion.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Schedule Your Appointment
            </h2>

            {success && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                {success}
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block font-medium mb-2">
                  Select Service
                </label>

                <select
                  name="service_id"
                  value={formData.service_id}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                >
                  <option value="">
                    Choose a Service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service.id}
                      value={service.id}
                    >
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Preferred Date & Time
                </label>

                <input
                  type="datetime-local"
                  name="appointment_date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Additional Notes
                </label>

                <textarea
                  name="notes"
                  rows="5"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-lg font-semibold transition"
              >
                {loading
                  ? "Booking Appointment..."
                  : "Book Appointment"}
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Services Categories */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Consultation Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Website Development",
              "ERP Systems",
              "AI Solutions",
              "Custom Software",
              "SaaS Platforms",
              "Cloud Solutions",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl shadow text-center hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Upcoming Appointments */}
      {appointments.length > 0 && (
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl font-bold mb-10 text-center">
              Your Scheduled Consultations
            </h2>

            <div className="space-y-6">

              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex justify-between items-start">

                    <div>
                      <h3 className="font-bold text-xl">
                        {apt.service?.name || "Service"}
                      </h3>

                      <p className="text-slate-500">
                        {new Date(
                          apt.appointment_date
                        ).toLocaleString()}
                      </p>
                    </div>

                    <span className="bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-sm">
                      {apt.status}
                    </span>

                  </div>

                  {apt.notes && (
                    <p className="mt-4 text-slate-600">
                      {apt.notes}
                    </p>
                  )}

                </div>
              ))}

            </div>

          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>

          <p className="text-xl text-slate-300 mb-8">
            Contact our experts today and discuss your project requirements.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-lg font-semibold"
            >
              Contact Us
            </Link>

            <Link
              to="/quotation"
              className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition"
            >
              Request Quotation
            </Link>

          </div>

        </div>
      </section>

    </div>
  </>
);
};

export default Booking;

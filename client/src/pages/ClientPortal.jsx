import React, { useState } from 'react';

const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  // Mock data for demonstration
  const mockProjects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      status: 'In Progress',
      progress: 75,
      lastUpdate: '2024-01-20',
      nextMilestone: 'Payment Integration - Due Jan 25'
    },
    {
      id: 2,
      name: 'AI Chatbot Integration',
      status: 'Testing',
      progress: 90,
      lastUpdate: '2024-01-18',
      nextMilestone: 'UAT - Due Jan 22'
    }
  ];

  const mockInvoices = [
    { id: 'INV-001', date: '2024-01-01', amount: 1500, status: 'Paid' },
    { id: 'INV-002', date: '2024-01-15', amount: 2000, status: 'Pending' }
  ];

  if (!isLoggedIn) {
    return (
      <div className="client-portal-login min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary-colour">Client Login</h2>
          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-colour focus:border-transparent"
                placeholder="client@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-colour focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-secondary-colour text-white py-2 rounded-lg hover:bg-cyan-600 transition-colors font-medium"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-primary-colour mb-2">Active Projects</h3>
              <p className="text-3xl font-bold text-secondary-colour">2</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-primary-colour mb-2">Pending Invoices</h3>
              <p className="text-3xl font-bold text-accent-colour">$2,000</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold text-primary-colour mb-2">Messages</h3>
              <p className="text-3xl font-bold text-primary-colour">3</p>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="space-y-4">
            {mockProjects.map((project) => (
              <div key={project.id} className="bg-white p-6 rounded-xl shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-colour">{project.name}</h3>
                    <p className="text-sm text-slate-500">Last update: {project.lastUpdate}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                    {project.status}
                  </span>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-slate-600 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-secondary-colour h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
                <p className="text-sm text-slate-600">Next: {project.nextMilestone}</p>
              </div>
            ))}
          </div>
        );
      case 'invoices':
        return (
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Invoice ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {mockInvoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 text-sm font-medium text-primary-colour">{invoice.id}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{invoice.date}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">${invoice.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-secondary-colour hover:underline text-sm">Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="client-portal min-h-screen bg-slate-50">
      <div className="bg-primary-colour text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Client Portal</h1>
          <button onClick={() => setIsLoggedIn(false)} className="text-slate-300 hover:text-white text-sm">Logout</button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white rounded-xl shadow p-4 h-fit">
          <nav className="space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: '📊' },
              { id: 'projects', label: 'My Projects', icon: '📁' },
              { id: 'invoices', label: 'Invoices', icon: '📄' },
              { id: 'messages', label: 'Messages', icon: '💬' },
              { id: 'documents', label: 'Documents', icon: '📦' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 transition-colors ${activeSection === item.id ? 'bg-secondary-colour text-white' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <h2 className="text-2xl font-bold mb-6 text-primary-colour capitalize">{activeSection}</h2>
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default ClientPortal;
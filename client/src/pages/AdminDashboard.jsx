import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeModule, setActiveModule] = useState('overview');

  const stats = {
    totalUsers: 1247,
    activeProjects: 38,
    monthlyLeads: 156,
    revenue: '$84,500'
  };

  const recentLeads = [
    { id: 1, name: 'TechCorp Inc.', email: 'contact@techcorp.com', service: 'ERP System', status: 'New', date: '2024-01-20' },
    { id: 2, name: 'StartupXYZ', email: 'hello@startupxyz.io', service: 'AI Chatbot', status: 'Contacted', date: '2024-01-19' },
    { id: 3, name: 'EduCenter', email: 'admin@educenter.edu', service: 'LMS Platform', status: 'Qualified', date: '2024-01-18' }
  ];

  const modules = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'content', label: 'Content Management', icon: '📝' },
    { id: 'blog', label: 'Blog Management', icon: '✍️' },
    { id: 'leads', label: 'Lead Management', icon: '🎯' },
    { id: 'projects', label: 'Project Management', icon: '📁' },
    { id: 'users', label: 'User Management', icon: '👥' },
    { id: 'analytics', label: 'Analytics', icon: '📈' }
  ];

  const renderModule = () => {
    switch (activeModule) {
      case 'overview':
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {Object.entries(stats).map(([key, value]) => (
                <div key={key} className="bg-white p-6 rounded-xl shadow">
                  <h3 className="text-sm font-medium text-slate-500 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
                  <p className="text-3xl font-bold text-primary-colour">{value}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold text-primary-colour mb-4">Recent Leads</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-slate-500 border-b">
                      <th className="pb-3">Company</th>
                      <th className="pb-3">Email</th>
                      <th className="pb-3">Service</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recentLeads.map((lead) => (
                      <tr key={lead.id} className="text-sm">
                        <td className="py-3 font-medium text-primary-colour">{lead.name}</td>
                        <td className="py-3 text-slate-600">{lead.email}</td>
                        <td className="py-3 text-slate-600">{lead.service}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${lead.status === 'New' ? 'bg-blue-100 text-blue-800' : lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-3 text-slate-500">{lead.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'leads':
        return (
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-primary-colour">Lead Management</h3>
              <button className="bg-secondary-colour text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-600 transition-colors">Export CSV</button>
            </div>
            <div className="space-y-3">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                  <div>
                    <p className="font-medium text-primary-colour">{lead.name}</p>
                    <p className="text-sm text-slate-500">{lead.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">{lead.service}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${lead.status === 'New' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>{lead.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <div className="text-6xl mb-4">{modules.find(m => m.id === activeModule)?.icon}</div>
            <h3 className="text-xl font-semibold text-primary-colour mb-2">{modules.find(m => m.id === activeModule)?.label}</h3>
            <p className="text-slate-500">This module is ready for implementation with full CRUD operations.</p>
          </div>
        );
    }
  };

  return (
    <div className="admin-dashboard min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary-colour text-white min-h-screen p-4 hidden md:block">
        <div className="mb-8 px-2">
          <h1 className="text-xl font-bold">MTech Admin</h1>
          <p className="text-xs text-slate-400">Management Console</p>
        </div>
        <nav className="space-y-1">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${activeModule === module.id ? 'bg-secondary-colour' : 'hover:bg-slate-800'}`}
            >
              <span className="text-lg">{module.icon}</span>
              {module.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-primary-colour capitalize">{modules.find(m => m.id === activeModule)?.label}</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">Admin User</span>
            <div className="w-8 h-8 rounded-full bg-secondary-colour flex items-center justify-center text-white text-sm font-bold">A</div>
          </div>
        </header>
        <div className="p-6">
          {renderModule()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
import React, { useState } from 'react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('blog');

  const resourceTabs = [
    { id: 'blog', label: 'Blog', icon: '📝' },
    { id: 'tutorials', label: 'Tutorials', icon: '🎓' },
    { id: 'docs', label: 'Documentation', icon: '📚' },
    { id: 'case-studies', label: 'Case Studies', icon: '📊' },
    { id: 'guides', label: 'Technology Guides', icon: '🔍' },
    { id: 'downloads', label: 'Download Center', icon: '⬇️' }
  ];

  const blogPosts = [
    {
      title: 'Building Scalable SaaS Architecture with React and Node.js',
      excerpt: 'Learn the best practices for designing multi-tenant SaaS applications that can scale to millions of users.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Architecture'
    },
    {
      title: 'Implementing Local AI with Ollama: A Complete Guide',
      excerpt: 'Step-by-step tutorial on deploying open-source LLMs locally for privacy-focused applications.',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'AI/ML'
    },
    {
      title: 'Modern ERP Systems: Trends and Implementation Strategies',
      excerpt: 'Explore how modern ERP solutions are evolving with cloud-native technologies and AI integration.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Enterprise'
    }
  ];

  const tutorials = [
    {
      title: 'Getting Started with React 18',
      level: 'Beginner',
      duration: '2 hours',
      lessons: 12
    },
    {
      title: 'Building REST APIs with Express.js',
      level: 'Intermediate',
      duration: '3 hours',
      lessons: 18
    },
    {
      title: 'AI Chatbot Development with LLMs',
      level: 'Advanced',
      duration: '4 hours',
      lessons: 15
    }
  ];

  const caseStudies = [
    {
      title: 'How RetailCo Increased Sales by 40% with Custom E-Commerce',
      industry: 'Retail',
      metric: '40% sales increase',
      description: 'Complete digital transformation of retail operations with AI-powered recommendations.'
    },
    {
      title: 'SchoolERP: Reducing Administrative Work by 60%',
      industry: 'Education',
      metric: '60% efficiency gain',
      description: 'Implementation of comprehensive school management system across 5 campuses.'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'blog':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <article key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs bg-secondary-colour bg-opacity-10 text-secondary-colour px-2 py-1 rounded">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary-colour">{post.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>{post.date}</span>
                  <button className="text-secondary-colour font-medium hover:underline">Read More →</button>
                </div>
              </article>
            ))}
          </div>
        );
      case 'tutorials':
        return (
          <div className="space-y-4">
            {tutorials.map((tutorial, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-primary-colour mb-1">{tutorial.title}</h3>
                  <p className="text-sm text-slate-500">Level: {tutorial.level} • Duration: {tutorial.duration} • {tutorial.lessons} lessons</p>
                </div>
                <button className="mt-4 md:mt-0 bg-primary-colour text-white px-6 py-2 rounded-lg hover:bg-emerald-colour transition-colors">
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        );
      case 'case-studies':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-accent-colour">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-primary-colour">{study.title}</h3>
                  <span className="text-xs bg-accent-colour bg-opacity-10 text-accent-colour px-2 py-1 rounded">{study.industry}</span>
                </div>
                <p className="text-sm text-secondary-colour font-medium mb-2">{study.metric}</p>
                <p className="text-slate-600 text-sm">{study.description}</p>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="text-center py-12 text-slate-500">
            <p>Content for {activeTab} coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="resources-page py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary-colour">Resources & Learning</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our knowledge base with blogs, tutorials, documentation, and case studies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {resourceTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${activeTab === tab.id
                ? 'bg-secondary-colour text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Resources;
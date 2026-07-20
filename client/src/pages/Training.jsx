import React from 'eact';

const Training = () => {
  const trainingPrograms = [
    {
      title: 'Web Development Training',
      duration: '12 Weeks',
      level: 'Beginner to Advanced',
      description: 'Master modern web development with HTML5, CSS3, JavaScript, and React.',
      topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js Fundamentals', 'Responsive Design', 'Version Control (Git)']
    },
    {
      title: 'React Training',
      duration: '8 Weeks',
      level: 'Intermediate',
      description: 'Deep dive into React ecosystem including hooks, context, and state management.',
      topics: ['React Hooks', 'Context API', 'Redux Toolkit', 'React Router', 'Performance Optimization']
    },
    {
      title: 'Node.js Training',
      duration: '8 Weeks',
      level: 'Intermediate',
      description: 'Build scalable backend services with Node.js, Express, and databases.',
      topics: ['Node.js Runtime', 'Express Framework', 'REST API Design', 'Authentication (JWT)', 'Database Integration']
    },
    {
      title: 'Database Training',
      duration: '6 Weeks',
      level: 'Beginner to Intermediate',
      description: 'Learn SQL and NoSQL databases with practical real-world projects.',
      topics: ['MySQL Fundamentals', 'PostgreSQL', 'MongoDB', 'Database Design', 'Query Optimization']
    },
    {
      title: 'AI Development Training',
      duration: '10 Weeks',
      level: 'Advanced',
      description: 'Build AI-powered applications with Python, machine learning, and LLM integration.',
      topics: ['Python for AI', 'Machine Learning Basics', 'LLM Integration (Ollama)', 'AI Workflow Automation', 'Model Deployment']
    },
    {
      title: 'Software Engineering Training',
      duration: '16 Weeks',
      level: 'All Levels',
      description: 'Comprehensive program covering full software development lifecycle and best practices.',
      topics: ['SDLC Methodologies', 'Clean Code Principles', 'Testing Strategies', 'CI/CD Pipelines', 'System Design']
    }
  ];

  return (
    <div className="training-page py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-primary-colour">Training & Education</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Empower yourself with industry-relevant skills through our comprehensive training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-primary-colour">{program.title}</h3>
                <span className="bg-secondary-colour text-white px-3 py-1 rounded-full text-xs font-medium">{program.duration}</span>
              </div>
              <p className="text-sm text-secondary-colour font-medium mb-3">{program.level}</p>
              <p className="text-slate-600 mb-4">{program.description}</p>
              <div className="mb-6">
                <span className="text-sm font-medium text-primary-colour">What you'll learn:</span>
                <ul className="list-disc list-inside text-slate-500 mt-2 space-y-1">
                  {program.topics.map((topic, i) => (
                    <li key={i} className="text-sm">{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-primary-colour text-white py-2 rounded-lg hover:bg-emerald-colour transition-colors text-sm font-medium">
                  Enroll Now
                </button>
                <button className="px-4 py-2 border border-secondary-colour text-secondary-colour rounded-lg hover:bg-secondary-colour hover:text-white transition-colors text-sm font-medium">
                  Syllabus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-colour text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Career Guidance</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Get personalized career counseling from industry experts to accelerate your tech career.
          </p>
          <button className="bg-secondary-colour text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
            Book Career Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Training;
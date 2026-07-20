import React, { useState } from 'eact';

const AICenter = () => {
  const aiCapabilities = [
    {
      title: 'Ollama Local Deployment',
      description: 'Run powerful language models locally for privacy-focused AI solutions with no cloud dependency.',
      icon: '🖥️',
      features: ['Local LLM hosting', 'Data privacy compliance', 'Offline AI capabilities', 'Cost-effective scaling']
    },
    {
      title: 'Qwen Model Integration',
      description: 'Leverage Alibaba\'s advanced Qwen models for multilingual and domain-specific AI applications.',
      icon: '🌐',
      features: ['Multilingual support', 'Code generation', 'Reasoning capabilities', 'Fine-tuning options']
    },
    {
      title: 'Claude Workflows',
      description: 'Implement Anthropic\'s Claude for safe, helpful, and harmless AI assistants in your business.',
      icon: '🤖',
      features: ['Constitutional AI', 'Long context handling', 'Safe interactions', 'Document analysis']
    },
    {
      title: 'MCP Concepts',
      description: 'Model Context Protocol for standardized AI-tool integrations and context management.',
      icon: '🔗',
      features: ['Standardized protocols', 'Tool interoperability', 'Context preservation', 'Modular AI architecture']
    },
    {
      title: 'AI Development Process',
      description: 'Our systematic approach to building, testing, and deploying AI-powered applications.',
      icon: '⚙️',
      features: ['Data pipeline design', 'Model selection', 'Evaluation frameworks', 'Continuous monitoring']
    },
    {
      title: 'AI Coding Assistance',
      description: 'Accelerate development with AI pair programming and automated code review systems.',
      icon: '💻',
      features: ['Code completion', 'Bug detection', 'Documentation generation', 'Refactoring suggestions']
    },
    {
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      icon: '🔌',
      features: ['API integrations', 'Legacy system AI upgrade', 'Custom AI plugins', 'Workflow automation']
    }
  ];

  return (
    <div className="ai-center-page py-12 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary-colour bg-opacity-20 rounded-full">
            <span className="text-secondary-colour font-semibold">🚀 AI Innovation Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cutting-Edge AI Solutions</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We harness the power of modern AI technologies to build intelligent systems that transform businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiCapabilities.map((capability, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-secondary-colour transition-colors">
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-secondary-colour">{capability.title}</h3>
              <p className="text-slate-300 mb-4">{capability.description}</p>
              <ul className="space-y-2">
                {capability.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-400">
                    <span className="text-accent-colour mr-2">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Workflow Visualization */}
        <div className="mt-20 bg-slate-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-secondary-colour">Our AI Development Workflow</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {['Discovery', 'Data Prep', 'Model Selection', 'Development', 'Testing', 'Deployment'].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary-colour flex items-center justify-center font-bold text-xl mb-3">
                  {idx + 1}
                </div>
                <span className="text-sm font-medium">{step}</span>
                {idx < 5 && <div className="hidden md:block text-secondary-colour text-2xl mx-2">→</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Implement AI?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you identify opportunities and build intelligent solutions for your business.
          </p>
          <button className="bg-secondary-colour text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
            Schedule AI Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICenter;
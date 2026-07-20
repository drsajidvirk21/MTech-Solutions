import React, { useState, useRef, useEffect } from 'eact';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m MTech AI Assistant. How can I help you today? I can answer questions about our services, provide quotations, or guide you to the right solution.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response (in production, this would call the backend LLM API)
    setTimeout(() => {
      const response = generateAIResponse(input);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateAIResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('quotation')) {
      return 'I can help you get a quotation! Based on your requirements, I\'d recommend our Professional package starting at $2,999. Would you like me to connect you with our quotation system or schedule a consultation?';
    }
    if (lowerQuery.includes('ai') || lowerQuery.includes('chatbot') || lowerQuery.includes('llm')) {
      return 'MTech specializes in AI solutions including Ollama local deployment, Qwen models, and Claude workflows. We can build custom AI assistants for your business. Would you like to learn more about our AI Innovation Center?';
    }
    if (lowerQuery.includes('website') || lowerQuery.includes('web')) {
      return 'We develop modern, responsive websites using React and Bootstrap. Our web development services include corporate sites, e-commerce platforms, and custom web applications. Shall I show you our portfolio?';
    }
    if (lowerQuery.includes('erp') || lowerQuery.includes('software')) {
      return 'Our custom software development includes ERP systems, CRM, inventory management, and school management systems. We use modern tech stacks ensuring scalability. Would you like to discuss your specific needs?';
    }
    return 'Thank you for your question! I\'m here to help with information about MTech Solutions\' services, pricing, and AI capabilities. You can also reach our team through the contact page for detailed discussions.';
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-secondary-colour rounded-full shadow-lg hover:bg-cyan-600 transition-colors z-50 flex items-center justify-center text-white text-2xl"
        aria-label="Open AI Assistant"
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-primary-colour text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <div>
                <h3 className="font-semibold text-sm">MTech AI Assistant</h3>
                <p className="text-xs text-slate-300">Online • Powered by AI</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-secondary-colour text-white rounded-br-none' : 'bg-white text-slate-700 rounded-bl-none shadow-sm'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary-colour text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-secondary-colour text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition-colors text-sm font-medium"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
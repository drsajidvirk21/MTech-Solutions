import React from 'eact';
import { Link } from 'eact-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">MTech Solutions</h3>
            <p className="text-slate-400 text-sm">
              Building Intelligent Software for a Digital Future. We specialize in AI, SaaS, and Enterprise solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Web Development</li>
              <li>AI Solutions</li>
              <li>Mobile Apps</li>
              <li>Custom Software</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Stay updated with our latest innovations.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border border-slate-700 px-3 py-2 rounded w-full text-sm focus:outline-none focus:border-cyan-400"
              />
              <button className="bg-cyan-500 px-4 py-2 rounded text-sm font-semibold hover:bg-cyan-400 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MTech Solutions. All rights reserved.</p>
          <p className="mt-2">Technology • Innovation • Excellence</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
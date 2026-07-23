import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white mt-20">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">

          {/* Company Overview */}
          <div className="lg:col-span-2">

            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-xl">
                M
              </div>

              <div className="ml-3">
                <h3 className="text-2xl font-bold text-white">
                  MTech Solutions
                </h3>

                <p className="text-cyan-400 text-sm">
                  Software Development Company
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Delivering modern software solutions including ERP systems,
              AI applications, SaaS platforms, business websites,
              e-commerce systems, and custom software development.
            </p>

            <div className="space-y-2 text-slate-400">

              <p>✓ Registered Technology Firm</p>

              <p>✓ Established 2026</p>

              <p>✓ AI & Software Solutions</p>

              <p>✓ Serving Clients Worldwide</p>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-lg font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link to="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-cyan-400 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="hover:text-cyan-400 transition">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>
             <li>
  <Link
    to="/quotation"
    className="hover:text-cyan-400 transition"
  >
    Request Quotation
  </Link>
</li>
<li>
  <Link
    to="/careers"
    className="hover:text-cyan-400 transition"
  >
    Careers
  </Link>
</li>
            </ul>

          </div>

          {/* Services */}
          <div>

            <h4 className="text-lg font-semibold mb-6">
              Services
            </h4>

            <ul className="space-y-3 text-slate-400">

              <li>Website Development</li>

              <li>ERP Systems</li>

              <li>School Management Systems</li>

              <li>AI Solutions</li>

              <li>Custom Software Development</li>

              <li>SaaS Applications</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-lg font-semibold mb-6">
              Contact Us
            </h4>

            <div className="space-y-4 text-slate-400">

              <p>
                📧 info@mtechsolutions.pk
              </p>

              <p>
                📱 +92 300 1234567
              </p>

              <p>
                📍 Punjab, Pakistan
              </p>

              <p>
                🌍 Serving Clients Worldwide
              </p>

            </div>

            {/* Social Media */}
            <div className="mt-8">

              <h5 className="font-semibold mb-4 text-white">
                Follow Us
              </h5>

              <div className="flex gap-3">

                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition"
                >
                  <FaYoutube />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition"
                >
                  <FaGithub />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Legal Section */}
      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MTech Solutions. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <Link
              to="/privacy-policy"
              className="text-slate-500 hover:text-cyan-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className="text-slate-500 hover:text-cyan-400 transition"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/cookie-policy"
              className="text-slate-500 hover:text-cyan-400 transition"
            >
              Cookie Policy
            </Link>

          </div>

          <p className="text-slate-500 text-sm">
            Technology • Innovation • Excellence
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
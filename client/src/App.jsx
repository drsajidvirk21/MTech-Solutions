import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Careers from './pages/Careers';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import Quotation from './pages/Quotation';
import Portfolio from './pages/Portfolio';
import MetaTags from './components/SEO/MetaTags';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <MetaTags
        title="MTech Solutions - Transforming Ideas Into Powerful Software Solutions"
        description="We develop modern websites, ERP systems, SaaS platforms, AI-powered applications, and custom business solutions."
      />

      <Router>
          <ScrollToTop />
        <Navbar />

        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/quotation" element={<Quotation />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

<Route path="/terms-conditions" element={<TermsConditions />} />

<Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route
              path="*"
              element={<div className="text-center py-20">404 Not Found</div>}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
return (
  <>
    <MetaTags
      title="MTech Solutions - Transforming Ideas Into Powerful Software Solutions"
      description="We develop modern websites, ERP systems, SaaS platforms, AI-powered applications, and custom business solutions."
    />

    <Router>
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={<div className="text-center py-20">404 Not Found</div>}
          />
        </Routes>
      </div>
    </Router>
  </>
);
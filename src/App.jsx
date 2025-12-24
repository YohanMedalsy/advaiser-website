import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CaseStudyOktopost from './pages/CaseStudyOktopost';
import CaseStudyGuardio from './pages/CaseStudyGuardio';
import CaseStudySpacePlay from './pages/CaseStudySpacePlay';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio/oktopost" element={<CaseStudyOktopost />} />
          <Route path="/portfolio/guardio" element={<CaseStudyGuardio />} />
          <Route path="/portfolio/spaceplay" element={<CaseStudySpacePlay />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

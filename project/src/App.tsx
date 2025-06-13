import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Services from './pages/Services';
import Equipment from './pages/Equipment';
import Solutions from './pages/Solutions';
import NewsMedia from './pages/NewsMedia';
import Contact from './pages/Contact';
import Support from './pages/Support';
import About from './pages/About';
import Beginnings from './pages/Beginnings';
import WorkForUs from './pages/WorkForUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/news-media" element={<NewsMedia />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/beginnings" element={<Beginnings />} />
            <Route path="/about/work-for-us" element={<WorkForUs />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
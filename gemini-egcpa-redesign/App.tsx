
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-evergreen-primary rounded-full flex items-center justify-center text-white font-display font-bold">E</div>
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? 'text-evergreen-primary' : 'text-evergreen-dark'}`}>
            Evergreen Care PA
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="font-medium hover:text-evergreen-gold transition-colors">Home</Link>
          <Link to="/services" className="font-medium hover:text-evergreen-gold transition-colors">Services</Link>
          <Link to="/about" className="font-medium hover:text-evergreen-gold transition-colors">About Us</Link>
          <Link to="/careers" className="font-medium hover:text-evergreen-gold transition-colors">Careers</Link>
          <Link to="/contact" className="bg-evergreen-primary text-white px-6 py-2 rounded-full font-bold hover:bg-evergreen-dark transition-all">
            Schedule Assessment
          </Link>
        </nav>

        {/* Mobile Call Button */}
        <a href="tel:6105550123" className="md:hidden bg-evergreen-primary text-white p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-evergreen-dark text-white pt-16 pb-8">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-8">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-evergreen-gold rounded-full flex items-center justify-center text-evergreen-dark font-bold">E</div>
          <span className="font-display font-bold text-2xl">Evergreen Care PA</span>
        </div>
        <p className="text-gray-400 max-w-sm mb-6">
          Helping your loved ones maintain independence and dignity at home since 2018. Compassionate care rooted in our Collegeville community.
        </p>
        <div className="flex space-x-4">
          <span className="bg-white/5 p-2 rounded hover:bg-evergreen-gold transition-colors cursor-pointer italic text-xs uppercase tracking-widest">Montgomery County Licensed</span>
        </div>
      </div>
      <div>
        <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
        <ul className="space-y-4 text-gray-400">
          <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
          <li><Link to="/about" className="hover:text-white transition-colors">Who We Are</Link></li>
          <li><Link to="/careers" className="hover:text-white transition-colors">Join Our Team</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Request a Consultation</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-bold text-lg mb-6">Service Areas</h4>
        <ul className="space-y-4 text-gray-400">
          <li>Collegeville, PA</li>
          <li>Phoenixville, PA</li>
          <li>Royersford, PA</li>
          <li>Skippack, PA</li>
          <li>Trappe, PA</li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      <p>© 2025 Evergreen Care PA. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <span>admin@evergreencarepa.com</span>
        <span>Privacy Policy</span>
        <span>ADA Compliance</span>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

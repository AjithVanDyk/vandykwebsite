import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Recycle, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  return (
    <footer className="bg-gradient-to-b from-vd-blue-dark to-vd-blue text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-vd-orange">Company Info</h3>
            <p className="text-gray-200 mb-4">
              Leading provider of recycling equipment and solutions since 1984. We help businesses and municipalities achieve their sustainability goals through innovative technology and expert support.
            </p>
            <div className="flex space-x-4 mt-4">
              <img 
                src="/Images/VDRS-lockup-mod-8-19-22-350.png" 
                alt="ISO Certified" 
                className="h-8" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }} 
              />
              <img 
                src="/Images/image-1749759453479.png" 
                alt="Award Badge" 
                className="h-8" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }} 
              />
            </div>
          </motion.div>

          {/* Equipment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-vd-orange">Equipment</h3>
            <ul className="space-y-2">
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Bollegraaf</Link></li>
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Lubo Screening</Link></li>
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">TOMRA Optical Sorting</Link></li>
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Pellenc ST Optical Sorting</Link></li>
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Walair Density Separation</Link></li>
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Smicon Food Waste Depackagers</Link></li>
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">GUNTHER Screens</Link></li>
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Centriair</Link></li>
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Greyparrot AI</Link></li>
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Densimetric Table</Link></li>
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">BeeFoam Dust Suppression System</Link></li>
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Reckelberg Environmental Technologies</Link></li>
              <li><Link to="/equipment" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Certified Pre-Owned Equipment</Link></li>
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-vd-orange">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Single Stream Recycling</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Plastics Recycling</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Organics Processing</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Food Waste Depackaging</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">MSW Processing</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Commercial Waste</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">C&D Recycling</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Multi-MRF (Material Recycling Facility) Systems</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Waste to Energy Recycling</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">E-Scrap Recycling</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Glass Cleanup</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Composting</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Bollegraaf Balers</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">AI-Based Waste Analytics</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Odor Control</Link></li>
              <li><Link to="/solutions" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">EV Battery Recycling</Link></li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-vd-orange">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Support</Link></li>
              <li><Link to="/support" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Parts</Link></li>
              <li><Link to="/support" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Preventive Maintenance</Link></li>
              <li><Link to="/support" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Remote Maintenance and Troubleshooting</Link></li>
              <li><Link to="/support" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Training</Link></li>
              <li><Link to="/support" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">VAN DYK Technology & Material Test Center</Link></li>
              <li><Link to="/support" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Van Dyk Direct</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-vd-orange">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Turnkey Design</Link></li>
              <li><Link to="/services" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">Retrofits</Link></li>
            </ul>
          </motion.div>

          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-vd-orange">About Us</h3>
            <ul className="space-y-2">
              <li><a href="https://vdrs.com/about/" className="text-gray-200 hover:text-vd-orange transition-colors duration-200" target="_blank" rel="noopener noreferrer">About Us</a></li>
              <li><a href="https://vdrs.com/about/our-beginnings/" className="text-gray-200 hover:text-vd-orange transition-colors duration-200" target="_blank" rel="noopener noreferrer">Beginnings</a></li>
              <li><a href="https://vdrs.com/careers/" className="text-gray-200 hover:text-vd-orange transition-colors duration-200" target="_blank" rel="noopener noreferrer">Work For Us</a></li>
            </ul>
          </motion.div>

          {/* News & Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-vd-orange">News & Media</h3>
            <ul className="space-y-2">
              <li><a href="https://vdrs.com/news-media/" className="text-gray-200 hover:text-vd-orange transition-colors duration-200" target="_blank" rel="noopener noreferrer">Van Dyk in the News</a></li>
              <li><a href="https://vdrs.com/videos/" className="text-gray-200 hover:text-vd-orange transition-colors duration-200" target="_blank" rel="noopener noreferrer">Videos</a></li>
              <li><a href="https://vdrs.com/expert-tips/" className="text-gray-200 hover:text-vd-orange transition-colors duration-200" target="_blank" rel="noopener noreferrer">Expert Tips</a></li>
              <li><a href="https://vdrs.com/van-dyk-customers-in-the-news/" className="text-gray-200 hover:text-vd-orange transition-colors duration-200" target="_blank" rel="noopener noreferrer">Our Customers in the News</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-vd-orange">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-200">
                  360 Dr. Martin Luther King Jr. Drive<br />
                  Norwalk, CT 06854<br />
                  United States
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                <a href="tel:+12039671100" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">+1 (203) 967-1100</a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                <a href="mailto:info@vdrs.com" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">info@vdrs.com</a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-200">shipping@vdrs.com (Warehouse)</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-200">service@vdrs.com (Technical Support & Parts)</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-vd-orange">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/van-dyk-recycling-solutions" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/vandykrecycling" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/c/vandykrecycling" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-vd-orange transition-colors duration-200">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Van Dyk Recycling Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
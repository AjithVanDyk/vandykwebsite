import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('')` }}>
        <div className="absolute inset-0 bg-vd-blue-dark/70 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">About Van Dyk</h1>
        </div>
      </div>

      {/* Company Overview */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-vd-blue mb-6">Leading the Industry Since 1984</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Van Dyk Recycling Solutions is the leading provider of recycling sorting systems in the world. 
            We help waste and recycling companies maximize their profits by supplying state-of-the-art sorting 
            systems and equipment to process recycled materials.
          </p>
        </motion.div>

        {/* Market Segments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <h3 className="text-2xl font-semibold text-vd-blue mb-6">Our Market Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <h4 className="text-xl font-semibold text-vd-orange mb-4">Complex Solutions</h4>
              <p className="text-gray-700">
                We provide solutions to the most complex waste and recycling sorting facilities in North America, 
                serving multiple market segments including:
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vd-orange rounded-full mr-2"></span>
                  Residential single stream sorting systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vd-orange rounded-full mr-2"></span>
                  Commercial waste processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vd-orange rounded-full mr-2"></span>
                  Construction & demolition recycling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-vd-orange rounded-full mr-2"></span>
                  Plastics processing
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <h4 className="text-xl font-semibold text-vd-orange mb-4">Our Location & Growth</h4>
              <p className="text-gray-700 mb-4">
                Founded in 1984 and based in Norwalk, Connecticut, we've experienced exceptional growth 
                in recent years, establishing ourselves as industry leaders in recycling technology.
              </p>
              <div className="mt-6 p-4 bg-vd-blue/5 rounded-lg">
                <h5 className="text-lg font-semibold text-vd-blue mb-2">Our Team</h5>
                <p className="text-gray-700">
                  Our team consists of industry experts, and we are continuously looking to add innovative, 
                  service-driven leaders to our workforce. We believe in developing talent and fostering 
                  a culture of excellence in recycling solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h3 className="text-2xl font-semibold text-vd-blue mb-8 text-center">Why Choose Van Dyk?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-vd-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-vd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-vd-blue mb-2">Industry Leadership</h4>
              <p className="text-gray-700">World's leading provider of recycling sorting systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vd-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-vd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-vd-blue mb-2">Expert Team</h4>
              <p className="text-gray-700">Industry experts with decades of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vd-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-vd-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-vd-blue mb-2">Proven Growth</h4>
              <p className="text-gray-700">Exceptional growth and continuous innovation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 
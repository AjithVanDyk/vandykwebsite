import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Building2, Mail, Phone, MapPin, Send } from 'lucide-react';

interface Equipment {
  id: string;
  name: string;
  description: string;
  image: string;
}

const equipmentList: Equipment[] = [
  {
    id: 'bollegraaf',
    name: 'Bollegraaf',
    description: 'Advanced recycling and sorting solutions',
    image: '/Images/bollegraaf.jpg'
  },
  {
    id: 'lubo',
    name: 'Lubo Screening',
    description: 'High-performance screening technology',
    image: '/Images/lubo.jpg'
  },
  {
    id: 'tomra',
    name: 'TOMRA Optical Sorting',
    description: 'State-of-the-art optical sorting systems',
    image: '/Images/tomra.jpg'
  },
  {
    id: 'pellenc',
    name: 'Pellenc ST Optical Sorting',
    description: 'Precision optical sorting solutions',
    image: '/Images/pellenc.jpg'
  },
  {
    id: 'walair',
    name: 'Walair Density Separation',
    description: 'Advanced density separation technology',
    image: '/Images/walair.jpg'
  },
  {
    id: 'smicon',
    name: 'Smicon Food Waste Depackagers',
    description: 'Efficient food waste processing systems',
    image: '/Images/smicon.jpg'
  },
  {
    id: 'gunther',
    name: 'GÜNTHER Screens',
    description: 'High-quality screening solutions',
    image: '/Images/gunther.jpg'
  },
  {
    id: 'centriair',
    name: 'Centriair',
    description: 'Innovative air separation technology',
    image: '/Images/centriair.jpg'
  },
  {
    id: 'greyparrot',
    name: 'Greyparrot AI',
    description: 'AI-powered waste analytics',
    image: '/Images/greyparrot.jpg'
  },
  {
    id: 'densimetric',
    name: 'Densimetric Table',
    description: 'Precision density separation',
    image: '/Images/densimetric.jpg'
  },
  {
    id: 'beefoam',
    name: 'BeeFoam Dust Suppression System',
    description: 'Effective dust control solutions',
    image: '/Images/beefoam.jpg'
  },
  {
    id: 'reckelberg',
    name: 'Reckelberg Environmental Technologies',
    description: 'Environmental technology solutions',
    image: '/Images/reckelberg.jpg'
  },
  {
    id: 'pre-owned',
    name: 'Certified Pre-Owned Equipment',
    description: 'Quality refurbished equipment',
    image: '/Images/pre-owned.jpg'
  }
];

const QuoteForm = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    state: '',
    country: '',
    additionalDetails: ''
  });

  const handleEquipmentSelect = (equipmentId: string) => {
    setSelectedEquipment(prev => 
      prev.includes(equipmentId)
        ? prev.filter(id => id !== equipmentId)
        : [...prev, equipmentId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ ...formData, selectedEquipment });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-vd-blue mb-4">Get a Quote Today</h1>
            <p className="text-xl text-gray-600">
              Get a fast quote for our products. Fill out the form below, and we'll get in touch with you promptly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Equipment Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-vd-blue mb-6">Select Equipment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipmentList.map((equipment) => (
                  <motion.div
                    key={equipment.id}
                    whileHover={{ scale: 1.02 }}
                    className={`relative rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      selectedEquipment.includes(equipment.id)
                        ? 'border-vd-orange bg-vd-orange/5'
                        : 'border-gray-200 hover:border-vd-orange/50'
                    }`}
                    onClick={() => handleEquipmentSelect(equipment.id)}
                  >
                    <div className="p-4">
                      <div className="aspect-w-16 aspect-h-9 mb-4 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={equipment.image}
                          alt={equipment.name}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            e.currentTarget.src = '/Images/placeholder.jpg';
                          }}
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{equipment.name}</h3>
                      <p className="text-sm text-gray-600">{equipment.description}</p>
                    </div>
                    {selectedEquipment.includes(equipment.id) && (
                      <div className="absolute top-2 right-2 bg-vd-orange text-white rounded-full p-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-vd-blue mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                      placeholder="John"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                      placeholder="City"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                      placeholder="State"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                      placeholder="Country"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  rows={4}
                  value={formData.additionalDetails}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                  placeholder="Please provide any additional information about your requirements..."
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto"
              >
                <Send className="w-5 h-5" />
                <span>Send Quote Request</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default QuoteForm; 
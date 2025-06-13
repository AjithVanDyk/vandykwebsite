import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! I\'m here to help you with Van Dyk Recycling Solutions. How can I assist you today?' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage = { type: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);

    // Enhanced bot responses based on VDRS content
    setTimeout(() => {
      let botResponse = '';
      const lowerInput = inputText.toLowerCase();

      if (lowerInput.includes('equipment') || lowerInput.includes('bollegraaf') || lowerInput.includes('lubo') || lowerInput.includes('tomra') || lowerInput.includes('pellenc') || lowerInput.includes('walair') || lowerInput.includes('smicon') || lowerInput.includes('günther') || lowerInput.includes('centriair') || lowerInput.includes('greyparrot') || lowerInput.includes('densimetric') || lowerInput.includes('beefoam') || lowerInput.includes('reckelberg') || lowerInput.includes('pre-owned')) {
        botResponse = 'We offer a full range of equipment: Bollegraaf, Lubo, TOMRA, Pellenc ST, Walair, Smicon, GÜNTHER, Centriair, Greyparrot AI, Densimetric Table, BeeFoam, Reckelberg, and certified pre-owned. See https://vdrs.com/equipment for details.';
      } else if (lowerInput.includes('solution') || lowerInput.includes('single stream') || lowerInput.includes('plastics') || lowerInput.includes('organics') || lowerInput.includes('food waste') || lowerInput.includes('msw') || lowerInput.includes('commercial') || lowerInput.includes('c&d') || lowerInput.includes('multi-mrf') || lowerInput.includes('waste to energy') || lowerInput.includes('e-scrap') || lowerInput.includes('glass') || lowerInput.includes('composting') || lowerInput.includes('balers') || lowerInput.includes('ai-based') || lowerInput.includes('odor control') || lowerInput.includes('ev battery')) {
        botResponse = 'We provide solutions for Single Stream, Plastics, Organics, Food Waste, MSW, Commercial, C&D, Multi-MRF, Waste to Energy, E-Scrap, Glass, Composting, Balers, AI Analytics, Odor Control, and EV Battery Recycling. See https://vdrs.com/solutions/.';
      } else if (lowerInput.includes('service') || lowerInput.includes('turnkey') || lowerInput.includes('retrofit')) {
        botResponse = 'We offer turnkey design, retrofits, and more. Contact us for custom solutions or visit https://vdrs.com/services/.';
      } else if (lowerInput.includes('support') || lowerInput.includes('parts') || lowerInput.includes('maintenance') || lowerInput.includes('remote') || lowerInput.includes('training') || lowerInput.includes('test center') || lowerInput.includes('direct')) {
        botResponse = 'For support, parts, maintenance, remote troubleshooting, training, or our test center, visit https://vdrs.com/support, call 203-967-1100, or email service@vdrs.com.';
      } else if (lowerInput.includes('contact') || lowerInput.includes('main office') || lowerInput.includes('address')) {
        botResponse = 'Main Office: 360 Dr. Martin Luther King Jr. Drive, Norwalk, CT 06854. Phone: 203-967-1100. Email: info@vdrs.com.';
      } else if (lowerInput.includes('warehouse') || lowerInput.includes('shipping')) {
        botResponse = 'Warehouse: 360 Dr. Martin Luther King Jr. Drive, Norwalk, CT 06854. Phone: 203-967-1100. Email: shipping@vdrs.com.';
      } else if (lowerInput.includes('delivery') || lowerInput.includes('north gate')) {
        botResponse = 'For deliveries, please use the North gate at our Norwalk, CT location.';
      } else if (lowerInput.includes('technical support') || lowerInput.includes('tech support')) {
        botResponse = 'Technical Support & Parts: Call 203-967-1100 (Mon–Fri 8am–8pm, Sat 9am–5pm ET, 24/7 answering). Email: service@vdrs.com.';
      } else if (lowerInput.includes('news') || lowerInput.includes('media') || lowerInput.includes('videos') || lowerInput.includes('expert tips') || lowerInput.includes('customers')) {
        botResponse = 'See our latest news, videos, tips, and customer stories at https://vdrs.com/news-media/.';
      } else if (lowerInput.includes('about') || lowerInput.includes('company') || lowerInput.includes('beginnings')) {
        botResponse = 'Van Dyk Recycling Solutions, Norwalk CT, is a global leader in recycling technology since 1999. Learn more: https://vdrs.com/about/.';
      } else if (lowerInput.includes('careers') || lowerInput.includes('job') || lowerInput.includes('work for us')) {
        botResponse = 'Interested in joining us? See open positions at https://vdrs.com/careers/.';
      } else if (lowerInput.includes('privacy') || lowerInput.includes('policy')) {
        botResponse = 'Read our Privacy Policy at https://vdrs.com/privacy-policy/.';
      } else if (lowerInput.includes('site map')) {
        botResponse = 'View our site map at https://vdrs.com/site-map/.';
      } else if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
        botResponse = 'You\'re welcome! If you need more help, just ask.';
      } else if (lowerInput.includes('email')) {
        botResponse = 'You can email us at info@vdrs.com for any inquiries.';
      } else if (lowerInput.includes('phone') || lowerInput.includes('call')) {
        botResponse = 'Call us at 203-967-1100 for immediate assistance.';
      } else if (lowerInput.includes('fax')) {
        botResponse = 'Our fax number is 203-967-1199.';
      } else if (lowerInput.includes('submit') || lowerInput.includes('form')) {
        botResponse = 'To contact us, please use the form at https://vdrs.com/contact/.';
      } else {
        botResponse = 'I can help with equipment, solutions, support, pricing, and more. For detailed help, visit https://vdrs.com/support, call 203-967-1100, or email info@vdrs.com.';
      }

      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 700);

    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-vd-orange text-white p-4 rounded-full shadow-lg hover:bg-vd-blue-dark transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-50"
          >
            {/* Header */}
            <div className="bg-vd-blue text-white p-4 rounded-t-lg">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-vd-orange" />
                <span className="font-semibold">Van Dyk Assistant</span>
              </div>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-vd-orange text-white'
                        : 'bg-gray-100 text-vd-blue'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our recycling solutions..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vd-orange text-sm"
                />
                <button
                  onClick={handleSend}
                  className="bg-vd-orange text-white p-2 rounded-lg hover:bg-vd-blue-dark transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
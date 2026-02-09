import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-lb-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
                <div className="bg-lb-yellow p-1.5 rounded-full">
                   <div className="w-3 h-3 rounded-full bg-lb-dark"></div>
                </div>
                <span className="font-bold text-2xl tracking-tight">LBFA</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Promoting the sport of Lawn Bowls across the community. Inclusive, competitive, and social fun for all ages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-lb-yellow transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-lb-yellow transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-lb-yellow transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lb-gold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
              <li><NavLink to="/events" className="hover:text-white transition-colors">Tournaments</NavLink></li>
              <li><NavLink to="/shop" className="hover:text-white transition-colors">Pro Shop</NavLink></li>
              <li><NavLink to="/membership" className="hover:text-white transition-colors">Membership</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact Us</NavLink></li>
              <li><NavLink to="/faq" className="hover:text-white transition-colors">FAQs</NavLink></li>
              <li><NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-lb-gold">Visit Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-lb-orange mt-0.5 flex-shrink-0" />
                <span>Rietfontein 32-Ir,<br/>Kempton Park, 1621</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-lb-orange flex-shrink-0" />
                <span>064 582 2672</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-lb-orange flex-shrink-0" />
                <span>info@lawnbowlsforall.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h3 className="text-lg font-semibold mb-4 text-lb-gold">Newsletter</h3>
             <p className="text-gray-400 text-sm mb-4">
                Subscribe to get the latest news, offers and event invites directly to your inbox.
             </p>
             <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                   <input 
                      type="email" 
                      placeholder="Your email address" 
                      required
                      className="w-full bg-gray-800 text-white text-sm rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:border-lb-yellow focus:ring-1 focus:ring-lb-yellow placeholder-gray-500 transition-all"
                   />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-lb-orange text-white text-sm font-semibold py-3 rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center shadow-md hover:shadow-lg"
                >
                   Subscribe <Send size={16} className="ml-2" />
                </button>
             </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 Lawn Bowls For All. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span className="mr-4">Designed with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
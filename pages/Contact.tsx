import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Get in Touch" subtitle="We'd love to hear from you. Questions, bookings, or feedback." center />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
           {/* Contact Info */}
           <div className="bg-lb-blue text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-lb-yellow rounded-full opacity-20 blur-2xl"></div>
              
              <h3 className="text-2xl font-bold mb-8 text-lb-yellow">Contact Information</h3>
              
              <div className="space-y-8">
                 <div className="flex items-start">
                    <MapPin className="text-lb-orange mt-1 flex-shrink-0" size={24} />
                    <div className="ml-4">
                       <h4 className="font-semibold text-lg">Clubhouse Location</h4>
                       <p className="text-gray-300 mt-1 leading-relaxed">Rietfontein 32-Ir,<br/>Kempton Park, 1621</p>
                    </div>
                 </div>

                 <div className="flex items-start">
                    <Phone className="text-lb-orange mt-1 flex-shrink-0" size={24} />
                    <div className="ml-4">
                       <h4 className="font-semibold text-lg">Phone</h4>
                       <p className="text-gray-300 mt-1">064 582 2672</p>
                       <p className="text-sm text-gray-400 mt-1">Mon-Fri, 8 am - 2:30 pm</p>
                    </div>
                 </div>

                 <div className="flex items-start">
                    <Mail className="text-lb-orange mt-1 flex-shrink-0" size={24} />
                    <div className="ml-4">
                       <h4 className="font-semibold text-lg">Email</h4>
                       <p className="text-gray-300 mt-1">info@lawnbowlsforall.com</p>
                    </div>
                 </div>

                 <div className="flex items-start">
                    <Clock className="text-lb-orange mt-1 flex-shrink-0" size={24} />
                    <div className="ml-4">
                       <h4 className="font-semibold text-lg">Opening Hours</h4>
                       <p className="text-gray-300 mt-1">Mon - Fri: 8:00 AM - 02:30 PM</p>
                       <p className="text-gray-300">Sat - Sun: 08:00 AM - 10:00 PM</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Form */}
           <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-lb-dark mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                       <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lb-blue focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                       <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lb-blue focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    </div>
                 </div>
                 
                 <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lb-blue focus:border-transparent outline-none transition-all">
                       <option>General Inquiry</option>
                       <option>Membership</option>
                       <option>Event Booking</option>
                       <option>Pro Shop Support</option>
                    </select>
                 </div>

                 <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lb-blue focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
                 </div>

                 <Button variant="primary" size="lg" type="submit" className="w-full">
                    Send Message
                 </Button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};
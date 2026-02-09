import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EVENTS } from '../constants';
import { Button } from '../components/Button';
import { useAuth } from '../context/AuthContext';
import { Calendar, MapPin, Clock, User, Phone, AlertCircle } from 'lucide-react';

export const EventRegistration: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [event, setEvent] = useState<typeof EVENTS[0] | undefined>(undefined);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipId: '',
    position: 'Any',
    dietary: '',
    notes: ''
  });

  useEffect(() => {
     const foundEvent = EVENTS.find(e => e.id === id);
     if (foundEvent) {
         setEvent(foundEvent);
     } else {
         navigate('/events');
     }

    if (user) {
        setFormData(prev => ({
            ...prev,
            name: user.name,
            email: user.email
        }));
    }
  }, [id, user, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Simulate API call
      setTimeout(() => {
        alert(`Registration Confirmed for ${event?.name}!\nA confirmation email has been sent to ${formData.email}.`);
        navigate('/events');
      }, 500);
  };

  if (!event) return null;

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button onClick={() => navigate('/events')} className="mb-6 text-gray-500 hover:text-lb-blue flex items-center text-sm font-medium transition-colors">
            &larr; Back to Events
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Event Summary Header */}
            <div className="bg-lb-blue p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <span className="inline-block px-3 py-1 bg-lb-gold text-lb-dark text-xs font-bold rounded mb-4 uppercase tracking-wider">
                    Registration Open
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.name}</h1>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-blue-100">
                    <div className="flex items-center">
                        <Calendar size={18} className="mr-2 text-lb-yellow" />
                        <span>{event.date}</span>
                    </div>
                     <div className="flex items-center">
                        <Clock size={18} className="mr-2 text-lb-yellow" />
                        <span>09:00 AM - 05:00 PM</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin size={18} className="mr-2 text-lb-yellow" />
                        <span>{event.location}</span>
                    </div>
                </div>
            </div>

            {/* Registration Form */}
            <div className="p-8 md:p-10">
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-lb-dark mb-2">Player Details</h2>
                    <p className="text-gray-500 text-sm">Please fill in your information to secure your spot on the green.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User size={18} className="text-gray-400" />
                                </div>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    value={formData.name} 
                                    onChange={handleChange}
                                    required 
                                    className="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lb-blue focus:border-transparent outline-none transition-all" 
                                    placeholder="Enter your full name" 
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required 
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lb-blue focus:border-transparent outline-none transition-all" 
                                placeholder="you@example.com" 
                            />
                        </div>

                        {/* Phone */}
                         <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone size={18} className="text-gray-400" />
                                </div>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required 
                                    className="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lb-blue focus:border-transparent outline-none transition-all" 
                                    placeholder="+27 82 123 4567" 
                                />
                            </div>
                        </div>

                        {/* Membership ID */}
                        <div>
                            <label htmlFor="membershipId" className="block text-sm font-medium text-gray-700 mb-1">Membership ID (Optional)</label>
                            <input 
                                type="text" 
                                id="membershipId" 
                                name="membershipId"
                                value={formData.membershipId}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lb-blue focus:border-transparent outline-none transition-all" 
                                placeholder="e.g. LB-8821" 
                            />
                        </div>
                    </div>

                    <hr className="border-gray-100 my-6" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Position */}
                        <div>
                            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Preferred Position</label>
                            <select 
                                id="position" 
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lb-blue focus:border-transparent outline-none transition-all"
                            >
                                <option value="Any">Any Position</option>
                                <option value="Skip">Skip</option>
                                <option value="Third">Third</option>
                                <option value="Second">Second</option>
                                <option value="Lead">Lead</option>
                            </select>
                        </div>

                         {/* Dietary */}
                         <div>
                            <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 mb-1">Dietary Requirements</label>
                            <input 
                                type="text" 
                                id="dietary" 
                                name="dietary"
                                value={formData.dietary}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lb-blue focus:border-transparent outline-none transition-all" 
                                placeholder="e.g. Vegetarian, Gluten-free" 
                            />
                        </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Comments</label>
                        <textarea 
                            id="notes" 
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows={3} 
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lb-blue focus:border-transparent outline-none transition-all" 
                            placeholder="Any specific requests or team mate preferences?"
                        ></textarea>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start">
                        <AlertCircle className="text-lb-blue mt-0.5 flex-shrink-0" size={18} />
                        <div className="ml-3">
                            <h4 className="text-sm font-bold text-lb-blue">Registration Fee</h4>
                            <p className="text-sm text-gray-600 mt-1">
                                An entry fee of <span className="font-bold">R150.00</span> is payable on the day of the event. Cancellations must be made 24 hours in advance.
                            </p>
                        </div>
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-4">
                        <Button type="button" variant="ghost" onClick={() => navigate('/events')}>Cancel</Button>
                        <Button type="submit" variant="primary" size="lg" className="px-8">
                            Confirm Registration
                        </Button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};
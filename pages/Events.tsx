import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { EVENTS } from '../constants';
import { Button } from '../components/Button';
import { MapPin, Calendar, Clock } from 'lucide-react';

export const Events: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Calendar of Events" subtitle="Tournaments, social gatherings, and club championships." />

        <div className="space-y-6">
           {EVENTS.map((event, index) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row border-l-8 border-lb-gold">
                 <div className="md:w-1/4 h-48 md:h-auto relative">
                    <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 bg-lb-gold text-white px-3 py-1 text-sm font-bold rounded-br-lg">
                       {event.type}
                    </div>
                 </div>
                 
                 <div className="p-6 md:w-3/4 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex-1">
                       <h3 className="text-2xl font-bold text-lb-blue mb-2">{event.name}</h3>
                       <div className="space-y-2 mt-3">
                          <div className="flex items-center text-gray-600">
                             <Calendar size={18} className="text-lb-orange mr-3" />
                             <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                             <Clock size={18} className="text-lb-orange mr-3" />
                             <span>09:00 AM - 05:00 PM</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                             <MapPin size={18} className="text-lb-orange mr-3" />
                             <span>{event.location}</span>
                          </div>
                       </div>
                    </div>
                    
                    <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0 w-full md:w-auto">
                       <Button 
                          variant={index === 0 ? "primary" : "outline"} 
                          size="lg" 
                          className="w-full md:w-auto"
                          onClick={() => navigate(`/events/${event.id}/register`)}
                       >
                          {index === 0 ? "Register Now" : "Register"}
                       </Button>
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};
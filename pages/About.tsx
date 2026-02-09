import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { TEAM } from '../constants';
import { Target, Heart, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
             <h1 className="text-4xl md:text-5xl font-bold text-lb-blue mb-6">Our Heritage & Mission</h1>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Founded in 1985, Lawn Bowls For All has been the heartbeat of the local bowling community, dedicated to inclusivity, excellence, and the pure joy of the sport.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="https://picsum.photos/seed/history/800/600" alt="Club History" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-lb-dark mb-4">More Than Just a Game</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe lawn bowls is a sport for everyone, regardless of age or ability. Our facilities are fully accessible, and we pride ourselves on a culture that celebrates both the competitive spirit and social connection.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-lb-orange/10 p-2 rounded-lg mr-4">
                    <Target className="text-lb-orange" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lb-blue">Precision & Focus</h4>
                    <p className="text-sm text-gray-500">Developing mental discipline through the art of the perfect delivery.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-lb-gold/10 p-2 rounded-lg mr-4">
                    <Heart className="text-lb-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lb-blue">Community Wellbeing</h4>
                    <p className="text-sm text-gray-500">Fostering friendships and physical health in a supportive environment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-lb-blue/10 p-2 rounded-lg mr-4">
                    <Shield className="text-lb-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lb-blue">Integrity & Respect</h4>
                    <p className="text-sm text-gray-500">Upholding the traditions and etiquette of the sport.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <SectionHeader title="Meet The Leadership" subtitle="The dedicated individuals who keep our club rolling smoothly." center />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {TEAM.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-lb-gold transition-colors duration-300">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-lb-blue">{member.name}</h3>
                <span className="inline-block px-3 py-1 bg-lb-light text-lb-orange text-xs font-bold rounded-full my-2">
                  {member.role}
                </span>
                <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
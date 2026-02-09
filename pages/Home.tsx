import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Sun, Calendar } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { BLOG_POSTS, EVENTS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/lawn3/1920/1080" 
            alt="Lawn Bowls Green" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-lb-blue/90 to-lb-blue/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Master the <span className="text-lb-yellow">Green</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl drop-shadow-md">
              Join the premier community for lawn bowls enthusiasts. Whether you're a seasoned skip or a complete beginner, there's a place for you on the rink.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <NavLink to="/shop">
                 <Button size="lg" variant="primary" className="w-full sm:w-auto">Shop Equipment</Button>
              </NavLink>
              <NavLink to="/events">
                 <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-lb-blue">
                    Upcoming Events
                 </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-lb-light p-8 rounded-xl hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-lb-blue text-white w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy size={28} />
              </div>
              <h3 className="text-2xl font-bold text-lb-dark mb-3">Competitive Leagues</h3>
              <p className="text-gray-600 mb-4">
                Join our tiered league system designed for all skill levels. From casual weekend rollers to serious championship contenders.
              </p>
              <NavLink to="/events" className="text-lb-orange font-semibold flex items-center hover:text-orange-700">
                View Leagues <ArrowRight size={16} className="ml-2" />
              </NavLink>
            </div>

            <div className="bg-lb-light p-8 rounded-xl hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-lb-gold text-white w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold text-lb-dark mb-3">Community First</h3>
              <p className="text-gray-600 mb-4">
                More than just a sport, we are a family. Enjoy social BBQs, club nights, and a welcoming atmosphere for everyone.
              </p>
              <NavLink to="/about" className="text-lb-orange font-semibold flex items-center hover:text-orange-700">
                Meet the Team <ArrowRight size={16} className="ml-2" />
              </NavLink>
            </div>

            <div className="bg-lb-light p-8 rounded-xl hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-lb-orange text-white w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sun size={28} />
              </div>
              <h3 className="text-2xl font-bold text-lb-dark mb-3">World-Class Greens</h3>
              <p className="text-gray-600 mb-4">
                Play on our meticulously maintained natural and synthetic greens, available year-round for practice and matches.
              </p>
              <NavLink to="/contact" className="text-lb-orange font-semibold flex items-center hover:text-orange-700">
                Book a Rink <ArrowRight size={16} className="ml-2" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News / Blog Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Latest from the Green" subtitle="Tips, news, and insights from our experts." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative group">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-lb-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-sm text-gray-500 mb-2">{post.date} • {post.author}</div>
                  <h3 className="text-xl font-bold text-lb-blue mb-3 hover:text-lb-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  <NavLink to="/blog" className="text-lb-blue font-semibold hover:text-lb-orange transition-colors self-start">
                    Read More
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Teaser */}
      <section className="py-20 bg-lb-blue text-white relative overflow-hidden">
        {/* Decorational circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-lb-orange/10 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Matches & Events</h2>
              <p className="text-gray-300 max-w-xl">Don't miss out on the action. Register for tournaments or join our social gatherings.</p>
            </div>
            <NavLink to="/events">
               <Button variant="primary" className="mt-6 md:mt-0">View All Events</Button>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {EVENTS.slice(0, 3).map((event) => (
              <div key={event.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-lb-orange text-white p-2 rounded-lg text-center min-w-[60px]">
                    <span className="block text-xs uppercase font-bold tracking-wider">Date</span>
                    <span className="block text-lg font-bold leading-none mt-1">{event.date.split(' ')[0]}</span>
                  </div>
                  <span className="bg-lb-gold/20 text-lb-gold text-xs px-2 py-1 rounded border border-lb-gold/30">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                <div className="flex items-center text-gray-300 text-sm mb-4">
                  <Calendar size={14} className="mr-2" />
                  {event.location}
                </div>
                <Button variant="outline" size="sm" className="w-full border-gray-500 text-gray-300 hover:border-white hover:text-white">
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-lb-dark mb-6">Ready to Roll?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you are looking for new gear or want to join the club, we have everything you need to get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <NavLink to="/shop">
               <Button variant="secondary" size="lg">Visit Pro Shop</Button>
            </NavLink>
             <NavLink to="/contact">
               <Button variant="primary" size="lg">Contact Us</Button>
             </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
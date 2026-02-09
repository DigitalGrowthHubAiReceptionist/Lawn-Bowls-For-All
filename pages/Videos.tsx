import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { VIDEOS } from '../constants';
import { Play } from 'lucide-react';

export const Videos: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-lb-dark min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Video Library" subtitle="Tutorials, match highlights, and expert analysis." light />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {VIDEOS.map((video) => (
             <div key={video.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-gray-600 transition-colors group cursor-pointer">
               <div className="relative aspect-video">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                        <Play size={32} className="text-white fill-white ml-1" />
                     </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                     {video.duration}
                  </div>
               </div>
               <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                     <span className="text-xs font-bold text-lb-yellow uppercase">{video.type}</span>
                     <span className="text-xs text-gray-500">{video.views} views</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-lb-gold transition-colors">{video.title}</h3>
               </div>
             </div>
           ))}
        </div>
        
        {/* Newsletter for videos */}
        <div className="mt-20 bg-gradient-to-r from-lb-blue to-blue-900 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl border border-white/10">
           <div className="mb-6 md:mb-0 max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-2">Want to improve your game?</h3>
              <p className="text-gray-300">Subscribe to our channel for weekly tutorials and live stream notifications.</p>
           </div>
           <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg flex items-center">
              <Play size={20} className="mr-2 fill-current" /> Subscribe Now
           </button>
        </div>
      </div>
    </div>
  );
};
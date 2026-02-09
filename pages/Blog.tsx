import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { BLOG_POSTS } from '../constants';
import { Calendar, User } from 'lucide-react';
import { Button } from '../components/Button';

export const Blog: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="News & Articles" subtitle="Stay updated with the latest club news, match reports, and bowling tips." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* Featured Post (First one) */}
           <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
              <img 
                 src={BLOG_POSTS[0].image} 
                 alt={BLOG_POSTS[0].title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lb-blue/90 via-lb-blue/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                 <span className="inline-block px-3 py-1 bg-lb-orange text-white text-xs font-bold rounded mb-4 self-start">
                    Featured: {BLOG_POSTS[0].category}
                 </span>
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                    {BLOG_POSTS[0].title}
                 </h2>
                 <p className="text-gray-200 text-lg mb-6 max-w-2xl">
                    {BLOG_POSTS[0].excerpt}
                 </p>
                 <div className="flex items-center text-gray-300 text-sm space-x-6">
                    <span className="flex items-center"><Calendar size={16} className="mr-2"/> {BLOG_POSTS[0].date}</span>
                    <span className="flex items-center"><User size={16} className="mr-2"/> {BLOG_POSTS[0].author}</span>
                 </div>
              </div>
           </div>

           {/* Other Posts */}
           {BLOG_POSTS.slice(1).map((post) => (
             <div key={post.id} className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                   <div>
                      <div className="flex justify-between items-center mb-3">
                         <span className="text-xs font-bold text-lb-gold uppercase tracking-wider">{post.category}</span>
                         <span className="text-xs text-gray-400">{post.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-lb-dark mb-3 hover:text-lb-blue cursor-pointer">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                   </div>
                   <Button variant="ghost" className="self-start p-0 hover:bg-transparent hover:text-lb-orange">Read Article &rarr;</Button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
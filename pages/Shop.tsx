import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { Star, ShoppingCart, Filter } from 'lucide-react';

export const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = [
    'All',
    'New Arrivals',
    'On Sale',
    'Bowls', 
    'Clothing', 
    'Accessories', 
    'Equipment', 
    'Golf Shirts', 
    'T-Shirts', 
    'Jackets', 
    'Tracksuits', 
    'Long Pants', 
    'Short Pants'
  ];

  const filteredProducts = PRODUCTS.filter(p => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'New Arrivals') return p.isNew;
    if (activeCategory === 'On Sale') return p.isOnSale;
    return p.category === activeCategory;
  });

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Pro Shop" subtitle="Premium equipment for serious bowlers. Official distributor of top brands." />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
          <div className="flex overflow-x-auto pb-4 sm:pb-0 gap-2 w-full sm:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  activeCategory === cat 
                    ? 'bg-lb-blue text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center text-gray-500 text-sm whitespace-nowrap ml-4">
             <Filter size={16} className="mr-2" /> {filteredProducts.length} Products Found
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col">
              <div className="h-64 bg-gray-100 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Badges - Top Left */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                   {product.isNew && <span className="bg-lb-blue text-white px-2 py-1 rounded shadow text-xs font-bold">New</span>}
                   {product.isOnSale && <span className="bg-red-500 text-white px-2 py-1 rounded shadow text-xs font-bold">Sale</span>}
                </div>

                {/* Category - Top Right */}
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded shadow text-xs font-bold text-gray-800">
                   {product.category}
                </div>
                
                {/* Quick add overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                   <Button size="sm" variant="primary" className="w-full shadow-none bg-white text-lb-dark hover:bg-lb-yellow border-0">
                      Quick View
                   </Button>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center mb-2">
                   {[...Array(5)].map((_, i) => (
                     <Star 
                        key={i} 
                        size={14} 
                        className={i < Math.floor(product.rating) ? "text-lb-yellow fill-lb-yellow" : "text-gray-300"} 
                     />
                   ))}
                   <span className="text-xs text-gray-400 ml-2">({product.rating})</span>
                </div>
                <h3 className="font-bold text-lg text-lb-dark mb-2 leading-tight hover:text-lb-blue cursor-pointer">{product.name}</h3>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className={`text-xl font-bold ${product.isOnSale ? 'text-red-600' : 'text-lb-blue'}`}>
                    R{product.price.toFixed(2)}
                  </span>
                  <button className="p-2 rounded-full bg-lb-light text-lb-blue hover:bg-lb-blue hover:text-white transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
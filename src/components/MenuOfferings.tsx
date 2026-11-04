import React, { useState } from 'react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { Utensils, Wine, Coffee, Sparkles, Check, ArrowRight } from 'lucide-react';

interface MenuOfferingsProps {
  onOpenReservation: () => void;
}

export const MenuOfferings: React.FC<MenuOfferingsProps> = ({ onOpenReservation }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = RESTAURANT_DATA.offerings[activeCategoryIndex];

  return (
    <section id="menu" className="py-20 lg:py-28 bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-stone-800">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
              Cuisine &amp; Offerings
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              The Blackboard &amp; Cellar
            </h2>
          </div>
          <p className="text-stone-400 max-w-md text-sm sm:text-base leading-relaxed">
            Market-driven cooking rooted in prime steaks, fresh seafood, local organic produce, and a renowned cellar of natural and biodynamic wines.
          </p>
        </div>

        {/* Services Overview Grid */}
        <div className="mb-20">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-stone-300">
              Dining Options &amp; Service Formats
            </h3>
            <span className="text-xs text-stone-400">Tuesday – Saturday 5:00 PM – 10:30 PM</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESTAURANT_DATA.services.map((service, idx) => (
              <div
                key={service.title}
                className="bg-stone-950/70 border border-stone-800/80 p-6 rounded-lg flex flex-col justify-between hover:border-stone-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-red-400 font-medium mb-3">
                    <span>0{idx + 1}</span>
                    <span>{service.highlight}</span>
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-stone-100 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Menu Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Category Nav Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
              Explore Offerings
            </h3>
            
            <div className="flex flex-col gap-2" role="tablist" aria-label="Menu Offerings Categories">
              {RESTAURANT_DATA.offerings.map((cat, idx) => {
                const isActive = activeCategoryIndex === idx;
                return (
                  <button
                    key={cat.category}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`text-left p-4 rounded-md border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-stone-950 border-red-800 text-white shadow-sm'
                        : 'bg-stone-950/40 border-stone-800/80 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-medium tracking-tight">
                        {cat.category}
                      </span>
                      {isActive && <Check className="w-4 h-4 text-red-500" />}
                    </div>
                    <p className="mt-1 text-xs text-stone-400 line-clamp-1">
                      {cat.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Visual Callout Card */}
            <div className="mt-6 bg-stone-950 p-6 border border-stone-800 rounded-lg">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                Dietary &amp; Organic Focus
              </span>
              <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed">
                Vegetarian options, vegan options, and certified organic dishes are prepared daily alongside our prime cuts. Please note dietary needs when booking.
              </p>
              <button
                onClick={onOpenReservation}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 cursor-pointer"
              >
                <span>Reserve with dietary notes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Active Category Items List */}
          <div className="lg:col-span-8 bg-stone-950 border border-stone-800 rounded-lg p-6 sm:p-8">
            <div className="flex items-baseline justify-between border-b border-stone-800 pb-4 mb-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {activeCategory.category}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 mt-1">
                  {activeCategory.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeCategory.items.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-md bg-stone-900/50 border border-stone-800/60 hover:border-stone-700 transition-colors"
                >
                  <h4 className="text-base font-serif font-semibold text-stone-100">
                    {item.name}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Category Image Context */}
            <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-44 h-28 rounded-md overflow-hidden shrink-0 border border-stone-800">
                <img
                  src={
                    activeCategoryIndex === 2
                      ? '/src/assets/images/bar_cocktails_wine_1793805603377.jpg'
                      : '/src/assets/images/steak_seafood_platter_1793805601914.jpg'
                  }
                  alt={activeCategory.category}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 text-xs sm:text-sm text-stone-400 leading-relaxed">
                <p className="text-stone-300 font-medium">Daily Blackboard Specials</p>
                <p className="mt-1">
                  Our kitchen updates cuts, catches, and cellar bottles every afternoon based on market availability.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

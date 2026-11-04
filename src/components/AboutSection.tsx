import React from 'react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { Flame, Users, Accessibility, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-stone-950 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-4/3 rounded-lg overflow-hidden border border-stone-800 shadow-2xl relative">
              <img
                src="/src/assets/images/steak_seafood_platter_1793805601914.jpg"
                alt="Seared prime ribeye steak and fresh chilled oysters on crushed ice"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-stone-300 bg-stone-950/85 backdrop-blur-md px-3.5 py-2 rounded border border-stone-800/80">
                <span className="font-semibold text-white">Signature Cuisine:</span> Prime steaks &amp; chilled maritime oysters
              </div>
            </div>

            {/* Inset Accent Badge */}
            <div className="mt-4 p-4 rounded-lg bg-stone-900/90 border border-stone-800 flex items-center gap-3">
              <Flame className="w-5 h-5 text-red-500 shrink-0" />
              <div className="text-xs">
                <span className="font-medium text-stone-200">Wood-Accented Tavern</span>
                <p className="text-stone-400">Featuring an active brick fireplace and cosy romantic seating</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial About Content */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
              The Joe Beef Story
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              An Old-School Montreal Haven on Rue Notre-Dame
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-stone-300 leading-relaxed">
              <p>
                {RESTAURANT_DATA.tagline} Located at 2491 Rue Notre-Dame Ouest in the historic neighborhood of Little Burgundy, Joe Beef blends intimate old-world charm with a dedication to culinary craft.
              </p>
              <p>
                Inside our compact dining room, wood paneling, chalkboard daily menus, and a glowing fireplace create an atmosphere that is at once cosy, romantic, trendy, and upmarket. Whether you join us for a leisurely multi-course dinner with friends or pull up a stool for solo dining at the counter, our dining room provides genuine warmth and unhurried hospitality.
              </p>
              <p>
                Our kitchen balances generous prime beef cuts and fresh seafood with vibrant organic dishes, seasonal small plates, and thoughtful vegetarian and vegan options.
              </p>
            </div>

            {/* Core Attributes */}
            <div className="mt-8 pt-8 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-100">Popular for Dinner &amp; Solo Dining</h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Lively table service for groups and a convivial bar counter welcomed by solo travelers and locals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Accessibility className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-stone-100">Accessible &amp; Safe Space</h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Wheelchair-accessible entrance and seating; an LGBTQ+ friendly and transgender safe space.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

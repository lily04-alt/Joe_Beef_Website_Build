import React from 'react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { Wine, Flame, HeartHandshake, ShieldCheck, CreditCard, Sparkles } from 'lucide-react';

export const TrustReassurance: React.FC = () => {
  const trustPoints = [
    {
      icon: Flame,
      title: 'Cosy Old-School Ambiance',
      description: 'An intimate, compact tavern featuring warm wood paneling, low lighting, and a working fireplace for a genuinely romantic and upmarket evening.'
    },
    {
      icon: Wine,
      title: 'Acclaimed Wine List & Cocktails',
      description: 'Renowned for our deep wine cellar of natural and classic vintages, paired with artisanal spirits, local beer, craft cocktails, and great espresso.'
    },
    {
      icon: HeartHandshake,
      title: 'Inclusive & Welcoming Space',
      description: 'Proudly welcoming all guests. Designated LGBTQ+ friendly, a transgender safe space, and equipped with wheelchair-accessible entrance and seating.'
    },
    {
      icon: Sparkles,
      title: 'Diverse & Organic Offerings',
      description: 'Celebrated for prime steaks and seafood while honoring modern dining with certified organic dishes, small plates, vegan, and vegetarian selections.'
    },
    {
      icon: ShieldCheck,
      title: 'Guaranteed Seating With Planning',
      description: 'Because our dining room is compact and dinner reservations are strongly recommended, reserving ahead guarantees your seating without wait times.'
    },
    {
      icon: CreditCard,
      title: 'Seamless Service & Payments',
      description: 'Full table service, bustling bar counter service, and modern contactless NFC mobile payments alongside credit and debit cards.'
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
            Why Dine With Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            The Joe Beef Hospitality Standards
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-400 leading-relaxed text-balance">
            Every detail of our dining room—from the fireplace glow to our curated wine cellar—is crafted to provide an authentic, unforgettable Montreal dining experience.
          </p>
        </div>

        {/* 6 Grid Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-stone-950/80 border border-stone-800/80 p-8 rounded-lg flex flex-col justify-between hover:border-stone-700 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-stone-900 border border-stone-800 flex items-center justify-center text-red-400 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credibility / Reassurance Banner (Replacing fake reviews with verified business assurances) */}
        <div className="mt-16 bg-stone-950 border border-stone-800 p-8 sm:p-10 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                Service Reassurance
              </span>
              <h3 className="mt-2 text-2xl font-serif font-bold text-white">
                Planning Your Dinner at Joe Beef
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
                Due to our compact quarters and high demand, table reservations are strongly recommended. We open promptly at 5:00 PM Tuesday through Saturday. Solo diners are warmly welcomed at our bar counter on a first-come or reserved basis.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="text-xs text-stone-400 space-y-1">
                <div className="flex items-center gap-2 text-stone-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span>Credit Cards &amp; Debit Cards</span>
                </div>
                <div className="flex items-center gap-2 text-stone-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span>NFC Mobile Payments Accepted</span>
                </div>
                <div className="flex items-center gap-2 text-stone-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span>Wheelchair-Accessible Seating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

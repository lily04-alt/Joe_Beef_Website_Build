import React from 'react';
import { Calendar, MapPin, Phone, MessageSquare, Flame, Clock } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { getRestaurantStatus } from '../utils/reservation';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const status = getRestaurantStatus();

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_restaurant_interior_1793805601877.jpg"
          alt="Joe Beef dining room with warm wood paneling, tavern ambiance, and glowing fireplace"
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient overlay for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-stone-950/30 to-stone-950/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        
        {/* Local trust signal & status */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-300 mb-6 bg-stone-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-stone-800">
          <span className="flex items-center gap-1.5 text-red-400">
            <Flame className="w-3.5 h-3.5 fill-red-400" />
            <span>Little Burgundy, Montréal</span>
          </span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span className="flex items-center gap-1.5 text-stone-300">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>{status.statusLabel}</span>
          </span>
          <span aria-hidden="true" className="text-stone-600">·</span>
          <span className="text-stone-400 hidden sm:inline">Tue–Sat from 5:00 PM</span>
        </div>

        {/* Business Title */}
        <p className="text-sm sm:text-base font-semibold tracking-widest text-red-400 uppercase mb-3">
          {RESTAURANT_DATA.name}
        </p>

        {/* Business Specific Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6 text-balance">
          Steaks, Seafood &amp; Old-School Tavern Soul
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          {RESTAURANT_DATA.tagline} An intimate dining room with a working fireplace, counter service, and an acclaimed wine cellar on Rue Notre-Dame Ouest.
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-red-800 hover:bg-red-700 active:bg-red-900 rounded-md shadow-lg shadow-red-950/40 hover:shadow-red-900/30 transition-all cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </button>

          <a
            href={RESTAURANT_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-medium text-stone-200 bg-stone-900/90 hover:bg-stone-800 hover:text-white border border-stone-700/80 rounded-md backdrop-blur-sm transition-colors whitespace-nowrap"
          >
            <MapPin className="w-4 h-4 text-red-400" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Scannable Highlights Bar */}
        <div className="pt-8 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-stone-400">Service</span>
            <p className="text-sm font-medium text-stone-200">Dinner &amp; Bar Counter</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-stone-400">Cuisine</span>
            <p className="text-sm font-medium text-stone-200">Steaks, Seafood &amp; Organic</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-stone-400">Atmosphere</span>
            <p className="text-sm font-medium text-stone-200">Cosy, Romantic &amp; Fireplace</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-stone-400">Planning</span>
            <p className="text-sm font-medium text-stone-200">Reservations Recommended</p>
          </div>
        </div>

      </div>
    </section>
  );
};

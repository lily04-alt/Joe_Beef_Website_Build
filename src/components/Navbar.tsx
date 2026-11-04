import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, MapPin } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="flex items-baseline gap-2.5 text-2xl sm:text-3xl font-serif font-bold tracking-wide text-stone-100 hover:text-red-400 transition-colors whitespace-nowrap shrink-0"
            aria-label="Joe Beef Home"
          >
            <span>Joe Beef</span>
            <span className="text-xs font-sans font-medium tracking-widest text-stone-400 uppercase">Montréal</span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            <a href="#menu" className="hover:text-stone-100 transition-colors whitespace-nowrap">
              Menu & Offerings
            </a>
            <a href="#about" className="hover:text-stone-100 transition-colors whitespace-nowrap">
              About
            </a>
            <a href="#experience" className="hover:text-stone-100 transition-colors whitespace-nowrap">
              Experience
            </a>
            <a href="#visit" className="hover:text-stone-100 transition-colors whitespace-nowrap">
              Hours & Location
            </a>
            <a href="#faq" className="hover:text-stone-100 transition-colors whitespace-nowrap">
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 primary action + direct contact affordance */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESTAURANT_DATA.phone}`}
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-stone-300 hover:text-white border border-stone-700/80 rounded-md hover:border-stone-500 transition-colors"
              title="Call Joe Beef directly"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{RESTAURANT_DATA.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-red-800 hover:bg-red-700 active:bg-red-900 rounded-md shadow-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-400 hover:text-white rounded-md hover:bg-stone-900 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-stone-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-stone-300">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-900 hover:text-white transition-colors"
            >
              Menu & Offerings
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-900 hover:text-white transition-colors"
            >
              About Joe Beef
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-900 hover:text-white transition-colors"
            >
              The Experience & Trust
            </a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-900 hover:text-white transition-colors"
            >
              Hours, Parking & Location
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-900 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2.5">
            <a
              href={`tel:${RESTAURANT_DATA.phone}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-200 bg-stone-900 hover:bg-stone-800 rounded-md border border-stone-700"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call: {RESTAURANT_DATA.phoneDisplay}</span>
            </a>
            <a
              href={RESTAURANT_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-300 hover:text-white border border-stone-800 rounded-md"
            >
              <MapPin className="w-4 h-4 text-stone-400" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

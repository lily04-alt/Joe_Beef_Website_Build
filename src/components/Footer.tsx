import React from 'react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { Phone, MessageSquare, Mail, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 text-xs py-14 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <a 
              href="#" 
              className="text-2xl font-serif font-bold text-white tracking-wide block"
            >
              Joe Beef
            </a>
            <p className="text-stone-400 text-xs leading-relaxed">
              {RESTAURANT_DATA.tagline}
            </p>
            <div className="pt-2 text-stone-400">
              <span className="block font-medium text-stone-200">Little Burgundy, Montréal</span>
              <span>2491 R. Notre Dame Ouest</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#menu" className="hover:text-stone-200 transition-colors">
                  Menu &amp; Blackboard Offerings
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-stone-200 transition-colors">
                  About Joe Beef
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-stone-200 transition-colors">
                  Hospitality &amp; Experience
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-stone-200 transition-colors">
                  Hours &amp; Location
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenReservation} 
                  className="text-red-400 hover:text-red-300 transition-colors cursor-pointer text-left"
                >
                  Table Reservations
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Schedule */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
              Dinner Service
            </h4>
            <div className="space-y-1.5 text-stone-300">
              <div className="flex justify-between">
                <span>Tuesday – Saturday</span>
                <span className="font-medium text-white">5:00 PM – 10:30 PM</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Sunday &amp; Monday</span>
                <span>Closed</span>
              </div>
            </div>
            <p className="mt-4 text-[11px] text-stone-400 leading-normal">
              Accepts credit cards, debit cards, and NFC mobile payments. Wheelchair-accessible entrance and seating.
            </p>
          </div>

          {/* Contact Touchpoints */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${RESTAURANT_DATA.phone}`}
                className="flex items-center gap-2 hover:text-stone-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>{RESTAURANT_DATA.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_DATA.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                <span>WhatsApp: {RESTAURANT_DATA.whatsappDisplay}</span>
              </a>

              <a
                href={`mailto:${RESTAURANT_DATA.email}`}
                className="flex items-center gap-2 hover:text-stone-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                <span>{RESTAURANT_DATA.email}</span>
              </a>

              <a
                href={RESTAURANT_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-stone-200 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Montréal, QC H3J 1N6</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p>© {new Date().getFullYear()} Joe Beef Restaurant &amp; Bar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>2491 R. Notre Dame O, Montréal, Québec</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

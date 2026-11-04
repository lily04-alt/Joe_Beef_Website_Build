import React from 'react';
import { 
  MapPin, Phone, MessageSquare, Mail, Clock, Car, 
  CreditCard, Compass, ExternalLink, Flame, Check
} from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface LocationVisitProps {
  onOpenReservation: () => void;
}

export const LocationVisit: React.FC<LocationVisitProps> = ({ onOpenReservation }) => {
  // Current day index (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const currentDayIndex = new Date().getDay();

  return (
    <section id="visit" className="py-20 lg:py-28 bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-stone-800">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
              Location &amp; Visit Details
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Join Us on Rue Notre-Dame
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-red-800 hover:bg-red-700 rounded-md transition-colors cursor-pointer"
            >
              <span>Book a Table</span>
            </button>
            <a
              href={RESTAURANT_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-stone-200 bg-stone-950 border border-stone-800 hover:border-stone-700 rounded-md transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              <span>Google Maps</span>
            </a>
          </div>
        </div>

        {/* 2-Column Grid: Hours & Practical Details vs Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Weekly Service Schedule & Practical Tips */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Opening Hours Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-lg p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-stone-200 mb-6 pb-4 border-b border-stone-800">
                <Clock className="w-5 h-5 text-red-500" />
                <h3 className="text-xl font-serif font-bold text-white">Opening Hours</h3>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                {RESTAURANT_DATA.hours.map((schedule) => {
                  const isToday = schedule.dayIndex === currentDayIndex;
                  return (
                    <div
                      key={schedule.day}
                      className={`flex items-center justify-between py-2 px-3 rounded-md transition-colors ${
                        isToday
                          ? 'bg-red-950/40 border border-red-900/60 font-medium text-stone-100'
                          : 'text-stone-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{schedule.day}</span>
                        {isToday && (
                          <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-red-400 bg-red-950 px-1.5 py-0.5 rounded border border-red-800">
                            Today
                          </span>
                        )}
                      </div>
                      <span className={schedule.isOpen ? 'text-stone-200' : 'text-stone-500'}>
                        {schedule.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 text-xs text-stone-400 flex items-center justify-between">
                <span>Kitchen opens promptly at 5:00 PM</span>
                <span>Last seating at 10:00 PM</span>
              </div>
            </div>

            {/* Parking & Accessibility Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-stone-950 border border-stone-800 p-5 rounded-lg">
                <div className="flex items-center gap-2 text-red-400 mb-2">
                  <Car className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-stone-100">Street Parking</h4>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Free and metered paid street parking is available along Notre-Dame Ouest. Spots can be tight during peak hours; rideshare or early arrival is recommended.
                </p>
              </div>

              <div className="bg-stone-950 border border-stone-800 p-5 rounded-lg">
                <div className="flex items-center gap-2 text-red-400 mb-2">
                  <CreditCard className="w-4 h-4" />
                  <h4 className="text-sm font-semibold text-stone-100">Payment Methods</h4>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  We accept Credit cards, Debit cards, and NFC mobile payments (Apple Pay / Google Pay).
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Address, Fast Contact Actions & Map Context */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-stone-950 border border-stone-800 rounded-lg p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                Direct Contact
              </span>
              <h3 className="mt-1 text-2xl font-serif font-bold text-white mb-6">
                Reach the Restaurant
              </h3>

              <div className="space-y-4">
                {/* Phone Call */}
                <a
                  href={`tel:${RESTAURANT_DATA.phone}`}
                  className="flex items-center justify-between p-4 rounded-md bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-red-800 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-stone-950 flex items-center justify-center text-red-500 border border-stone-800">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 block">Telephone</span>
                      <span className="text-sm sm:text-base font-semibold text-stone-100 group-hover:text-red-400 transition-colors">
                        {RESTAURANT_DATA.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-red-400 group-hover:translate-x-0.5 transition-transform">
                    Call Now &rarr;
                  </span>
                </a>

                {/* WhatsApp Chat */}
                <a
                  href={`https://wa.me/${RESTAURANT_DATA.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-md bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-emerald-700 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-stone-950 flex items-center justify-center text-emerald-400 border border-stone-800">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 block">WhatsApp</span>
                      <span className="text-sm sm:text-base font-semibold text-stone-100 group-hover:text-emerald-400 transition-colors">
                        {RESTAURANT_DATA.whatsappDisplay}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                    Chat Now &rarr;
                  </span>
                </a>

                {/* Email Address */}
                <a
                  href={`mailto:${RESTAURANT_DATA.email}`}
                  className="flex items-center justify-between p-4 rounded-md bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-stone-700 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-stone-950 flex items-center justify-center text-stone-300 border border-stone-800">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 block">Email Inquiries</span>
                      <span className="text-sm sm:text-base font-semibold text-stone-100 group-hover:text-white transition-colors">
                        {RESTAURANT_DATA.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-stone-400">
                    Send Email &rarr;
                  </span>
                </a>
              </div>

              {/* Physical Address */}
              <div className="mt-6 pt-6 border-t border-stone-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-stone-400 uppercase tracking-wider block">Address</span>
                    <p className="text-sm font-semibold text-stone-100 mt-0.5">
                      {RESTAURANT_DATA.address}
                    </p>
                    <p className="text-xs text-stone-400 mt-1">
                      Plus Code: <span className="font-mono text-stone-300">{RESTAURANT_DATA.plusCode}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <a
                    href={RESTAURANT_DATA.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs sm:text-sm font-medium rounded-md transition-colors"
                  >
                    <Compass className="w-4 h-4 text-red-400" />
                    <span>Open in Google Maps / Get Navigation</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Phone, MessageSquare, MapPin, Calendar } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface MobileBottomBarProps {
  onOpenReservation: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenReservation }) => {
  return (
    <aside 
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl safe-area-pb"
    >
      <a
        href={`tel:${RESTAURANT_DATA.phone}`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-stone-300 hover:text-white hover:bg-stone-900 transition-colors"
        aria-label="Call Joe Beef"
      >
        <Phone className="w-4 h-4 text-red-500 mb-0.5" />
        <span className="text-[10px] font-medium">Call</span>
      </a>

      <a
        href={`https://wa.me/${RESTAURANT_DATA.whatsapp.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-stone-300 hover:text-white hover:bg-stone-900 transition-colors"
        aria-label="WhatsApp Joe Beef"
      >
        <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
        <span className="text-[10px] font-medium">WhatsApp</span>
      </a>

      <a
        href={RESTAURANT_DATA.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-stone-300 hover:text-white hover:bg-stone-900 transition-colors"
        aria-label="Get directions to Joe Beef on Google Maps"
      >
        <MapPin className="w-4 h-4 text-stone-400 mb-0.5" />
        <span className="text-[10px] font-medium">Map</span>
      </a>

      <button
        type="button"
        onClick={onOpenReservation}
        className="flex-2 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-red-800 hover:bg-red-700 active:bg-red-900 text-white font-semibold text-xs transition-colors cursor-pointer shadow-sm"
        aria-label="Book a table at Joe Beef"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Table</span>
      </button>
    </aside>
  );
};

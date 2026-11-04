import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ReservationSection } from './ReservationSection';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/85 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Table Reservation at Joe Beef"
    >
      <div 
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-4xl bg-stone-950 border border-stone-800 rounded-xl shadow-2xl overflow-hidden my-8 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-stone-950/95 border-b border-stone-800 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-bold text-white">Joe Beef</span>
            <span className="text-xs text-stone-400">· Montreal Dinner Reservation</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-md hover:bg-stone-900 transition-colors cursor-pointer"
            aria-label="Close reservation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <ReservationSection />
        </div>
      </div>
    </div>
  );
};

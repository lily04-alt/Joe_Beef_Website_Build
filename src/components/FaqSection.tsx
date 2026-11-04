import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-stone-950 border-t border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
            Guest Inquiries
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about dining, reservations, accessibility, and parking at Joe Beef.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {RESTAURANT_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-stone-900 border border-stone-800 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-850 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-semibold text-stone-100">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-red-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center p-6 bg-stone-900/60 border border-stone-800 rounded-lg">
          <p className="text-xs sm:text-sm text-stone-300">
            Have a question not covered here? Call our host desk during service hours at{' '}
            <a href={`tel:${RESTAURANT_DATA.phone}`} className="text-red-400 font-medium hover:underline">
              {RESTAURANT_DATA.phoneDisplay}
            </a>{' '}
            or write to{' '}
            <a href={`mailto:${RESTAURANT_DATA.email}`} className="text-red-400 font-medium hover:underline">
              {RESTAURANT_DATA.email}
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
};

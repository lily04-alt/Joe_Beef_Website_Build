import React, { useState } from 'react';
import { 
  Calendar, Clock, Users, Flame, Utensils, Phone, CheckCircle2, 
  Share2, ArrowRight, AlertCircle, MessageSquare 
} from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';
import { 
  validateReservationForm, 
  TIME_SLOTS, 
  SEATING_OPTIONS, 
  isOpenOnDate,
  ReservationPayload 
} from '../utils/reservation';

export const ReservationSection: React.FC = () => {
  // Compute initial date: tomorrow or next open day
  const getInitialDate = () => {
    const d = new Date();
    // Advance by 1 day
    d.setDate(d.getDate() + 1);
    while (d.getDay() === 0 || d.getDay() === 1) { // Skip Sun(0), Mon(1)
      d.setDate(d.getDate() + 1);
    }
    return d.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState<Partial<ReservationPayload>>({
    date: getInitialDate(),
    time: '19:00',
    partySize: 2,
    seating: 'dining-room',
    name: '',
    phone: '',
    email: '',
    dietaryNotes: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedBooking, setConfirmedBooking] = useState<{
    reference: string;
    details: ReservationPayload;
  } | null>(null);

  const [dietaryOptions, setDietaryOptions] = useState<{
    vegetarian: boolean;
    vegan: boolean;
    organic: boolean;
  }>({
    vegetarian: false,
    vegan: false,
    organic: false,
  });

  const handleInputChange = (field: keyof ReservationPayload, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compile dietary notes
    const dietaryList: string[] = [];
    if (dietaryOptions.vegetarian) dietaryList.push('Vegetarian');
    if (dietaryOptions.vegan) dietaryList.push('Vegan');
    if (dietaryOptions.organic) dietaryList.push('Organic preferred');
    if (formData.dietaryNotes) dietaryList.push(formData.dietaryNotes);

    const payload: Partial<ReservationPayload> = {
      ...formData,
      dietaryNotes: dietaryList.join(', '),
    };

    const result = validateReservationForm(payload);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setConfirmedBooking({
      reference: result.bookingReference!,
      details: payload as ReservationPayload,
    });
  };

  const resetForm = () => {
    setConfirmedBooking(null);
    setFormData({
      date: getInitialDate(),
      time: '19:00',
      partySize: 2,
      seating: 'dining-room',
      name: '',
      phone: '',
      email: '',
      dietaryNotes: '',
      specialRequests: '',
    });
    setErrors({});
  };

  // Google Calendar Link Generator
  const getGoogleCalendarUrl = () => {
    if (!confirmedBooking) return '#';
    const { details, reference } = confirmedBooking;
    const startIso = `${details.date}T${details.time.replace(':', '')}00`;
    const title = encodeURIComponent(`Dinner at Joe Beef (${reference})`);
    const description = encodeURIComponent(
      `Reservation at Joe Beef Montreal\nReference: ${reference}\nParty: ${details.partySize} guests\nSeating: ${details.seating}\nNotes: ${details.dietaryNotes || 'None'}\nPhone: ${RESTAURANT_DATA.phoneDisplay}`
    );
    const location = encodeURIComponent(RESTAURANT_DATA.address);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${startIso}&details=${description}&location=${location}`;
  };

  // WhatsApp Confirmation URL
  const getWhatsAppConfirmationUrl = () => {
    if (!confirmedBooking) return '#';
    const { details, reference } = confirmedBooking;
    const message = encodeURIComponent(
      `Hello Joe Beef, confirming my dinner reservation ${reference} for ${details.name} on ${details.date} at ${details.time} (${details.partySize} guests, ${details.seating}). Merci!`
    );
    return `https://wa.me/${RESTAURANT_DATA.whatsapp.replace('+', '')}?text=${message}`;
  };

  return (
    <section id="reservations" className="py-20 lg:py-28 bg-stone-950 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
            Table Reservations
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Reserve Your Table
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400 leading-relaxed">
            Dinner reservations are strongly recommended. We welcome groups and solo dining at our bar counter Tuesday through Saturday from 5:00 PM.
          </p>
        </div>

        {confirmedBooking ? (
          /* Confirmation Card State */
          <div className="bg-stone-900 border border-stone-700 rounded-lg p-6 sm:p-10 text-center max-w-2xl mx-auto shadow-2xl">
            <div className="w-16 h-16 bg-red-950/80 border border-red-700/60 rounded-full flex items-center justify-center text-red-400 mx-auto mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
              Reservation Confirmed
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-white">
              We Look Forward to Welcoming You
            </h3>

            <div className="my-6 p-5 bg-stone-950 rounded-md border border-stone-800 text-left space-y-2.5 text-sm">
              <div className="flex justify-between items-center pb-2.5 border-b border-stone-800">
                <span className="text-stone-400">Confirmation Code</span>
                <span className="font-mono font-bold text-red-400 text-base">
                  {confirmedBooking.reference}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400">Guest Name</span>
                <span className="font-medium text-stone-200">{confirmedBooking.details.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400">Date &amp; Seating Time</span>
                <span className="font-medium text-stone-200">
                  {confirmedBooking.details.date} at {confirmedBooking.details.time}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400">Party Size</span>
                <span className="font-medium text-stone-200">
                  {confirmedBooking.details.partySize} {confirmedBooking.details.partySize === 1 ? 'Guest (Solo)' : 'Guests'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-400">Seating Area</span>
                <span className="font-medium text-stone-200 capitalize">
                  {confirmedBooking.details.seating.replace('-', ' ')}
                </span>
              </div>
              {confirmedBooking.details.dietaryNotes && (
                <div className="flex justify-between items-center pt-2 border-t border-stone-800 text-xs">
                  <span className="text-stone-400">Dietary Notes</span>
                  <span className="text-stone-300">{confirmedBooking.details.dietaryNotes}</span>
                </div>
              )}
            </div>

            <p className="text-xs text-stone-400 mb-8 max-w-md mx-auto">
              A confirmation has been logged. Should you need to adjust your arrival time or modify details, reach us directly at {RESTAURANT_DATA.phoneDisplay}.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-md transition-colors"
              >
                <Calendar className="w-4 h-4 text-red-400" />
                <span>Add to Google Calendar</span>
              </a>

              <a
                href={getWhatsAppConfirmationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-red-800 hover:bg-red-700 rounded-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </a>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={resetForm}
                className="text-xs text-stone-400 hover:text-stone-200 underline cursor-pointer"
              >
                Make another reservation
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Reservation Form */
          <form
            onSubmit={handleSubmit}
            className="bg-stone-900 border border-stone-800 rounded-lg p-6 sm:p-10 shadow-2xl"
          >
            {/* Step 1: Party Size & Seating Area */}
            <div className="mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-3">
                1. Party Size
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => handleInputChange('partySize', size)}
                    className={`py-3 text-sm font-semibold rounded-md border transition-all cursor-pointer ${
                      formData.partySize === size
                        ? 'bg-red-800 border-red-700 text-white shadow-sm'
                        : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-stone-700 hover:text-white'
                    }`}
                  >
                    {size === 1 ? '1 (Solo)' : size}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-xs text-stone-400 flex items-center justify-between">
                <span>Parties 1–8 accommodated online.</span>
                <a
                  href={`tel:${RESTAURANT_DATA.phone}`}
                  className="text-red-400 hover:text-red-300 underline"
                >
                  Parties of 9+ please call directly
                </a>
              </div>
              {errors.partySize && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.partySize}
                </p>
              )}
            </div>

            {/* Step 2: Date & Seating Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label 
                  htmlFor="reservation-date"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-3"
                >
                  2. Reservation Date
                </label>
                <div className="relative">
                  <input
                    id="reservation-date"
                    type="date"
                    value={formData.date || ''}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-md px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>
                <p className="mt-1.5 text-xs text-stone-400">
                  Open Tuesday–Saturday. Closed Sundays &amp; Mondays.
                </p>
                {errors.date && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.date}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-3">
                  3. Dinner Seating Time
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.slice(0, 8).map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => handleInputChange('time', slot)}
                      className={`py-2 px-2 text-xs font-medium rounded-md border transition-all cursor-pointer ${
                        formData.time === slot
                          ? 'bg-red-800 border-red-700 text-white'
                          : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-stone-700 hover:text-white'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {errors.time && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.time}
                  </p>
                )}
              </div>
            </div>

            {/* Step 3: Seating Location Preference */}
            <div className="mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-3">
                4. Seating Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {SEATING_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleInputChange('seating', opt.id)}
                    className={`text-left p-3.5 rounded-md border transition-all cursor-pointer ${
                      formData.seating === opt.id
                        ? 'bg-stone-950 border-red-700 ring-1 ring-red-700'
                        : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:border-stone-700 hover:text-stone-200'
                    }`}
                  >
                    <span className="block text-xs font-semibold text-stone-200">
                      {opt.label}
                    </span>
                    <span className="block text-[11px] text-stone-400 mt-0.5 leading-snug">
                      {opt.note}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Dietary Needs & Organic */}
            <div className="mb-8 p-4 bg-stone-950 rounded-md border border-stone-800">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                5. Dietary &amp; Organic Preferences
              </label>
              <div className="flex flex-wrap gap-4 text-xs text-stone-300 mb-3">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dietaryOptions.vegetarian}
                    onChange={(e) =>
                      setDietaryOptions((p) => ({ ...p, vegetarian: e.target.checked }))
                    }
                    className="rounded border-stone-700 bg-stone-900 text-red-600 focus:ring-0"
                  />
                  <span>Vegetarian options</span>
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dietaryOptions.vegan}
                    onChange={(e) =>
                      setDietaryOptions((p) => ({ ...p, vegan: e.target.checked }))
                    }
                    className="rounded border-stone-700 bg-stone-900 text-red-600 focus:ring-0"
                  />
                  <span>Vegan options</span>
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dietaryOptions.organic}
                    onChange={(e) =>
                      setDietaryOptions((p) => ({ ...p, organic: e.target.checked }))
                    }
                    className="rounded border-stone-700 bg-stone-900 text-red-600 focus:ring-0"
                  />
                  <span>Organic dishes focus</span>
                </label>
              </div>
              <input
                type="text"
                placeholder="Any allergies or special occasion notes (optional)..."
                value={formData.dietaryNotes || ''}
                onChange={(e) => handleInputChange('dietaryNotes', e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-stone-600"
              />
            </div>

            {/* Step 5: Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div>
                <label 
                  htmlFor="guest-name"
                  className="block text-xs font-medium text-stone-300 mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  id="guest-name"
                  type="text"
                  required
                  placeholder="e.g. Marc Tremblay"
                  value={formData.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full bg-stone-950 border rounded-md px-3.5 py-2.5 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none ${
                    errors.name ? 'border-red-500' : 'border-stone-800 focus:border-red-600'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="guest-phone"
                  className="block text-xs font-medium text-stone-300 mb-1.5"
                >
                  Phone Number *
                </label>
                <input
                  id="guest-phone"
                  type="tel"
                  required
                  placeholder="+1 (514) 000-0000"
                  value={formData.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full bg-stone-950 border rounded-md px-3.5 py-2.5 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none ${
                    errors.phone ? 'border-red-500' : 'border-stone-800 focus:border-red-600'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="guest-email"
                  className="block text-xs font-medium text-stone-300 mb-1.5"
                >
                  Email Address *
                </label>
                <input
                  id="guest-email"
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email || ''}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full bg-stone-950 border rounded-md px-3.5 py-2.5 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none ${
                    errors.email ? 'border-red-500' : 'border-stone-800 focus:border-red-600'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-400">
                <span>By booking, you agree to arrival within 15 minutes of scheduled time.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-semibold text-white bg-red-800 hover:bg-red-700 active:bg-red-900 rounded-md transition-colors cursor-pointer shadow-md"
              >
                <span>Confirm Reservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};

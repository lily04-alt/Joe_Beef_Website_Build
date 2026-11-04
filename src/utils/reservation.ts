export interface ReservationPayload {
  name: string;
  phone: string;
  email: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  partySize: number;
  seating: 'dining-room' | 'fireplace' | 'bar' | 'outdoor';
  dietaryNotes?: string;
  specialRequests?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  bookingReference?: string;
}

export const OPEN_DAYS = [2, 3, 4, 5, 6]; // Tuesday (2) to Saturday (6)
export const OPEN_HOUR_START = 17; // 5:00 PM
export const OPEN_HOUR_END = 22.5; // 10:30 PM
export const TIME_SLOTS = [
  '17:00', '17:30', '18:00', '18:30',
  '19:00', '19:30', '20:00', '20:30',
  '21:00', '21:30', '22:00'
];

export const SEATING_OPTIONS = [
  { id: 'dining-room', label: 'Main Dining Room', note: 'Intimate vintage wood banquettes & bistro tables' },
  { id: 'fireplace', label: 'Fireplace Hearth', note: 'Warm romantic tables near the historic fireplace' },
  { id: 'bar', label: 'Bar Counter', note: 'Lively counter service, solo dining & cocktail view' },
  { id: 'outdoor', label: 'Outdoor Garden Terrace', note: 'Al fresco dining (weather permitting)' },
] as const;

/**
 * Checks if a given date falls on an open day (Tuesday through Saturday).
 */
export function isOpenOnDate(dateStr: string): boolean {
  if (!dateStr) return false;
  // Parse date parts directly to avoid UTC shift
  const [year, month, day] = dateStr.split('-').map(Number);
  if (!year || !month || !day) return false;
  const d = new Date(year, month - 1, day);
  const dayOfWeek = d.getDay();
  return OPEN_DAYS.includes(dayOfWeek);
}

/**
 * Validates reservation payload
 */
export function validateReservationForm(payload: Partial<ReservationPayload>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = 'Please provide your full name.';
  }

  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const cleanPhone = (payload.phone || '').replace(/[\s\-\(\)\.]/g, '');
  if (!payload.phone || cleanPhone.length < 8) {
    errors.phone = 'Please provide a valid phone number for SMS confirmation.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || !emailRegex.test(payload.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!payload.date) {
    errors.date = 'Please select a reservation date.';
  } else if (!isOpenOnDate(payload.date)) {
    errors.date = 'Joe Beef is closed on Sundays & Mondays. Please choose Tuesday–Saturday.';
  }

  if (!payload.time || !TIME_SLOTS.includes(payload.time)) {
    errors.time = 'Please select a dinner seating time between 5:00 PM and 10:00 PM.';
  }

  if (!payload.partySize || payload.partySize < 1 || payload.partySize > 8) {
    errors.partySize = 'For parties larger than 8 guests, please call the restaurant directly at +1 (514) 935-6504.';
  }

  const validSeatings = ['dining-room', 'fireplace', 'bar', 'outdoor'];
  if (!payload.seating || !validSeatings.includes(payload.seating)) {
    errors.seating = 'Please choose a seating preference.';
  }

  const isValid = Object.keys(errors).length === 0;
  const bookingReference = isValid ? generateBookingReference() : undefined;

  return {
    isValid,
    errors,
    bookingReference,
  };
}

export function generateBookingReference(): string {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  let ref = 'JB-';
  for (let i = 0; i < 5; i++) {
    ref += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return ref;
}

export function getRestaurantStatus(currentDate = new Date()): {
  isOpenNow: boolean;
  statusLabel: string;
  detail: string;
} {
  const day = currentDate.getDay();
  const hours = currentDate.getHours() + currentDate.getMinutes() / 60;

  const isOpenDay = OPEN_DAYS.includes(day);

  if (isOpenDay) {
    if (hours >= 17 && hours < 22.5) {
      return {
        isOpenNow: true,
        statusLabel: 'Open Tonight',
        detail: 'Currently serving dinner until 10:30 PM',
      };
    } else if (hours < 17) {
      return {
        isOpenNow: false,
        statusLabel: 'Opens at 5:00 PM',
        detail: 'Reservations recommended for tonight',
      };
    } else {
      return {
        isOpenNow: false,
        statusLabel: 'Closed for Tonight',
        detail: 'Kitchen reopens next service day at 5:00 PM',
      };
    }
  }

  // Sunday (0) or Monday (1)
  const daysUntilTue = day === 0 ? 2 : 1;
  return {
    isOpenNow: false,
    statusLabel: 'Closed Today',
    detail: `Reopening Tuesday at 5:00 PM (${daysUntilTue} day${daysUntilTue > 1 ? 's' : ''})`,
  };
}

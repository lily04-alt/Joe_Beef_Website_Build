import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isOpenOnDate,
  validateReservationForm,
  getRestaurantStatus,
  OPEN_DAYS,
  TIME_SLOTS
} from './reservation.ts';

test('isOpenOnDate correctly validates open days (Tuesday through Saturday)', () => {
  // 2026-11-04 is Wednesday (open)
  assert.equal(isOpenOnDate('2026-11-04'), true);
  // 2026-11-07 is Saturday (open)
  assert.equal(isOpenOnDate('2026-11-07'), true);
  // 2026-11-08 is Sunday (closed)
  assert.equal(isOpenOnDate('2026-11-08'), false);
  // 2026-11-09 is Monday (closed)
  assert.equal(isOpenOnDate('2026-11-09'), false);
  // 2026-11-10 is Tuesday (open)
  assert.equal(isOpenOnDate('2026-11-10'), true);
});

test('validateReservationForm accepts valid reservation payload', () => {
  const result = validateReservationForm({
    name: 'Charles Mercier',
    phone: '+15145551234',
    email: 'charles@example.com',
    date: '2026-11-06', // Friday
    time: '19:30',
    partySize: 2,
    seating: 'fireplace',
    dietaryNotes: 'One pescatarian',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
  assert.ok(result.bookingReference);
  assert.match(result.bookingReference!, /^JB-[0-9A-Z]{5}$/);
});

test('validateReservationForm rejects closed days and missing fields', () => {
  const result = validateReservationForm({
    name: '',
    phone: '123',
    email: 'not-an-email',
    date: '2026-11-08', // Sunday (closed)
    time: '14:00', // invalid time slot
    partySize: 12, // party > 8 requires call
    seating: 'fireplace',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.email);
  assert.ok(result.errors.date.includes('closed on Sundays & Mondays'));
  assert.ok(result.errors.time);
  assert.ok(result.errors.partySize.includes('parties larger than 8'));
});

test('getRestaurantStatus evaluates opening hours properly', () => {
  // Mock Wednesday 18:00 (Open)
  const wedOpen = new Date('2026-11-04T18:00:00');
  const statusOpen = getRestaurantStatus(wedOpen);
  assert.equal(statusOpen.isOpenNow, true);
  assert.equal(statusOpen.statusLabel, 'Open Tonight');

  // Mock Sunday 19:00 (Closed)
  const sunClosed = new Date('2026-11-08T19:00:00');
  const statusSunday = getRestaurantStatus(sunClosed);
  assert.equal(statusSunday.isOpenNow, false);
  assert.equal(statusSunday.statusLabel, 'Closed Today');
});

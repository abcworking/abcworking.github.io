const STORAGE_KEY = "abc-tutoring-bookings";

/** All state here is client-side only, per the GitHub Pages static-host
 * constraint — there is no server to persist bookings to. */
export function saveBooking(booking) {
  const existing = loadBookings();
  const record = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...booking,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, record]));
  return record;
}

export function loadBookings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

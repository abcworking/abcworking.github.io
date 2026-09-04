# ABC Tutoring

A prototype tutoring marketplace site: React (Vite), fully static, built to
run on GitHub Pages. There is no backend — tutor data is a static list and
bookings are saved to the browser's `localStorage` only.

## Local development

```bash
npm install
npm run dev
```

Runs at abcworking.github.io.

## PostHog telemetry

Telemetry is wired up via `posthog-js` (see `src/analytics.js`) and tracks:

- `$pageview` on every route change (the app uses a hash router, so this is
  sent manually rather than relying on autocapture)
- `home_view_listings_clicked` — homepage CTA click
- `tutor_booking_opened` — Book button opens the modal (`tutor_id`, `tutor_name`)
- `tutor_booking_submitted` — booking form submitted (`tutor_id`, `tutor_name`,
  `subject`, `grade_levels`)
- the parent is identified by email (`posthog.identify`) on submit, so their
  session and any future visits tie to one person — the email itself is never
  sent as an event property


Without a key set, `initAnalytics()` no-ops (logs a console note) so the
prototype still runs fine.

## Deployment

`.github/workflows/deploy.yml` builds the Vite app and publishes `dist/` to
GitHub Pages on every push to `main`. One-time setup: in the repo's Settings
→ Pages, set **Source** to **GitHub Actions**.

## Notes

- Tutor photos are placeholder initials avatars from ui-avatars.com — swap
  `photoUrl` in `src/data/tutors.js` for real photos when you have them.
- Bookings live only in the submitting browser's `localStorage`
  (`src/data/bookings.js`) — there's nothing server-side to wire a real
  notification/confirmation email to yet.

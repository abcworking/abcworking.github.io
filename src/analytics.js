import posthog from "posthog-js";

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com";

let initialized = false;

/**
 * Initializes PostHog once, if a project key is configured. Safe to call
 * with no key set (e.g. local dev without a .env file) — telemetry is
 * simply skipped rather than throwing.
 */
export function initAnalytics() {
  if (initialized) return;

  if (!POSTHOG_KEY) {
    console.info(
      "[analytics] VITE_POSTHOG_KEY is not set — PostHog telemetry is disabled. " +
        "See .env.example."
    );
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    // GitHub Pages is a static host with a hash-routed SPA, so we send
    // pageviews manually on route change instead of relying on the
    // library's history-based autocapture.
    capture_pageview: false,
    person_profiles: "identified_only",
  });

  initialized = true;
}

export function trackPageview(path) {
  if (!initialized) return;
  posthog.capture("$pageview", { $current_url: window.location.href, path });
}

export function trackEvent(name, properties) {
  if (!initialized) return;
  posthog.capture(name, properties);
}

/** Ties subsequent events to the parent's email without ever putting the
 * email itself in event properties (it becomes the person's distinct id). */
export function identifyParent(email, traits) {
  if (!initialized) return;
  posthog.identify(email, traits);
}

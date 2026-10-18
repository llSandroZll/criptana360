"use client"

import Script from "next/script"

// PostHog project keys are public by design (they ship in the browser bundle).
// An environment variable overrides this default if one is set at build time.
const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ||
  "phc_zCUC8gruTdWEHZ9X9aiTWS5WEs7qsE9kcgGWxiy6kRmi"
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com"

/**
 * PostHog analytics for the Next.js App Router (`app/layout.tsx`).
 * Tracks pageviews, session recordings, rage-clicks and Booking.com affiliate clicks.
 */
export function PostHogAnalytics() {
  return (
    <Script
      id="posthog-array-js"
      src="https://eu-assets.i.posthog.com/static/array.js"
      strategy="afterInteractive"
      onLoad={() => {
        const w = window as unknown as { posthog?: Record<string, any> }
        if (w.posthog) {
          w.posthog.init(POSTHOG_KEY, {
            api_host: POSTHOG_HOST,
            person_profiles: "identified_only",
            capture_pageview: true,
            capture_pageleave: true,
            autocapture: true,
            rageclick: true,
            session_recording: {
              maskAllInputs: false,
              recordCrossOriginIframes: false,
            },
          })
        }
      }}
    />
  )
}

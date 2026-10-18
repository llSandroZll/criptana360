# Criptana360 — Strategy Gatekeeper (`STRATEGY.md`)

> **Status**: Active & Enforced
> **Architecture**: Next.js Discovery / Editorial Platform (`criptana-v2`)
> **Model**: Discovery / Editorial (Monetization, Premium UX & User Analytics Focus)

Criptana360 has transitioned from a static "Utility/Directory" model to a modern, Next.js-powered **"Discovery/Editorial"** platform focused on curated weekend discovery, high-intent monetization loops, and actionable product analytics.

All product decisions, content updates, and code changes **must** pass the following three non-negotiable gatekeeper rules before implementation:

---

## Core Strategic Rules

### Rule 1: Curated Discovery Over Exhaustive Lists (Zero Cognitive Load)
**Prioritize curated discovery over exhaustive lists. Replace complex tools (like the AI route planner) with pre-built, highly opinionated weekend itineraries.**
- Reject multi-step configurators, complex filter builders, or interactive route planners that increase cognitive load.
- Visitors should immediately experience ready-to-use, opinionated weekend plans and a curated selection of local gems.

### Rule 2: Insider & Editorial Voice Only
**All content must be editorial and insider-focused, not factual Wikipedia-style entries.**
- Never publish dry historical dates, municipal brochure copy, or encyclopedic architectural descriptions.
- Every spot or itinerary stop must read like advice from a local friend with strong taste: tell the reader *when* to arrive for the best light, *which* dish or wine to order, *what* tourist trap to skip, and *how* to pair stops.

### Rule 3: Mandatory Monetization Loop
**Every curated route or agenda must have a clear monetization loop (e.g., Booking.com affiliate links).**
- No itinerary, weekend agenda, or curated guide may be published as a dead-end informational page.
- Every route and agenda must integrate a prominent conversion CTA (such as *"Ver Disponibilidad en Booking.com"*, winery tasting reservations, or local sponsor callouts).

---

## Agent Enforcement Protocol

1. **Mandatory Pre-Check**: Before writing or modifying any code or content in this repository, the AI assistant must evaluate the request against Rules 1, 2, and 3.
2. **Automatic Rejection**: If any future code or content request violates these rules, the assistant **must refuse the violating part**, cite the specific rule in `STRATEGY.md`, and propose a compliant "Discovery/Editorial" alternative.

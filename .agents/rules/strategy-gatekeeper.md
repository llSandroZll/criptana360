---
trigger: always_on
description: Enforces Criptana360's Strategy Gatekeeper rules (STRATEGY.md) across all future code and content requests.
---

# Criptana360 Strategy Gatekeeper Rule

You MUST strictly enforce the rules defined in `STRATEGY.md` at the root of the workspace (`c:\Users\zeval\Documents\Criptana360\STRATEGY.md`).

Before executing any code change, feature addition, or content update requested by the user, verify compliance with these three non-negotiable rules:

1. **Rule 1 (No Cognitive-Load Features)**: Reject any request to build or expand complex interactive tools, multi-step configurators, custom filter builders, or AI route planners. Always steer toward pre-built, opinionated weekend itineraries and scannable editorial layouts.
2. **Rule 2 (Editorial & Insider Voice Only)**: Reject factual, encyclopedic, or Wikipedia-style descriptions. All copy must be written in an opinionated, insider local voice (best time of day, secret angles, what to order, how to pair stops).
3. **Rule 3 (Mandatory Monetization Loop)**: Reject any curated route, itinerary, or agenda addition that lacks an explicit monetization hook (e.g., Booking.com affiliate link, winery booking CTA, or local sponsor callout).

**Enforcement Action**: If a user request violates any of these three rules, **stop and refuse to implement the violating part**. Explicitly cite the violated rule from `STRATEGY.md` and propose a compliant "Discovery/Editorial" alternative.

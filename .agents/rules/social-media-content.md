---
trigger: always_on
description: Standardizes TikTok, Instagram Reel, and social media script generation for Criptana360 based on TIKTOK_PLAYBOOK.md.
---

# Criptana360 Social Media & TikTok Script Guardrails

Whenever the user asks for a "TikTok script", "Instagram Reel", "social post", or short-form video content for Criptana360:

1. **Reference Playbook**: Strictly reference `TIKTOK_PLAYBOOK.md` at the project root and align the video with one of the 3 Core Content Pillars:
   - **Pillar 1: "El Blueprint Familiar"**: Logistics-focused. Parking behind Centro de Interpretación, flat walking route to Sardinero, kid-friendly open spaces, ending with authentic gachas manchegas at Las Musas.
   - **Pillar 2: "El Anti-Turista"**: The hidden route. Blue-and-white (*añil*) Albaicín streets, stone arches at Pósito Real, vermouth at Mirasol, and smash burgers at Pádel Galán.
   - **Pillar 3: "El Hack del Atardecer"**: Timing-focused. Arriving 45 minutes before sunset behind Cerro de la Paz, contrasting harsh midday light vs golden hour on Burleta, Infanto and Sardinero, ending with a chilled D.O. La Mancha Airén wine.

2. **Editorial & Insider Tone**: All scripts must be generated directly from the editorial descriptions in `assets/js/data.js` and strictly adhere to the insider tone defined in `STRATEGY.md` (Rule 2). Reject generic, touristy, or encyclopedic phrasing.

3. **30-Second Pacing Script Format**: Always format the output as a 30-second pacing script using a structured markdown table with the following three columns:
   - **Visual**: Specific 3–5 second B-roll shot direction, pacing, camera movement, and bold on-screen text overlays.
   - **Audio**: Sound effects (SFX), foley (footsteps, wind, sizzling, wine pouring), and background music cues.
   - **Voiceover**: Natural Spanish copy tailored for ElevenLabs premium voiceover, timed with conversational cadence.

4. **Mandatory Monetization Hook**: Adhere to Rule 3 of `STRATEGY.md`. Conclude each script with a high-intent call to action driving traffic to Criptana360's curated weekend plans, rural lodging affiliate links, or local table reservations.

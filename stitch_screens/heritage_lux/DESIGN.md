---
name: Heritage Lux
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e2'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fc'
  surface-container: '#ededf6'
  surface-container-high: '#e7e7f0'
  surface-container-highest: '#e2e2eb'
  on-surface: '#191b22'
  on-surface-variant: '#434653'
  inverse-surface: '#2e3037'
  inverse-on-surface: '#f0f0f9'
  outline: '#737784'
  outline-variant: '#c3c6d5'
  surface-tint: '#2559bd'
  primary: '#00327d'
  on-primary: '#ffffff'
  primary-container: '#0047ab'
  on-primary-container: '#a5bdff'
  inverse-primary: '#b1c5ff'
  secondary: '#5e5f5b'
  on-secondary: '#ffffff'
  secondary-container: '#e3e3de'
  on-secondary-container: '#646561'
  tertiary: '#651f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#8b2e01'
  on-tertiary-container: '#ffaa8a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b1c5ff'
  on-primary-fixed: '#001946'
  on-primary-fixed-variant: '#00419e'
  secondary-fixed: '#e3e3de'
  secondary-fixed-dim: '#c7c7c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#464744'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#802900'
  background: '#faf8ff'
  on-background: '#191b22'
  surface-variant: '#e2e2eb'
  albaicin-blue: '#0047AB'
  lime-wash: '#F9F8F3'
  mancha-earth: '#4A3728'
  sunset-gold: '#D4AF37'
typography:
  display-lg:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  quote-serif:
    fontFamily: Bodoni Moda
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 36px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 80px
  component-padding: 24px
---

## Brand & Style

The design system embodies a "Contemporary Heritage" aesthetic, bridging the gap between 16th-century Manchego history and modern luxury tourism. It avoids the cluttered, utility-heavy look of traditional directories in favor of a curated, editorial experience.

The visual narrative is driven by **Minimalism** and **Glassmorphism**. High-end travel is reflected through generous whitespace—mimicking the vast horizons of La Mancha—and sophisticated, translucent overlays that suggest depth and technological precision (AI route planning). The atmosphere is immersive, calm, and authoritative, positioning the product as a premium cultural guide rather than a simple listing site.

## Colors

The palette is an elevated interpretation of the Campo de Criptana landscape. 

- **Primary (Albaicín Blue):** A deep, saturated cobalt used for brand markers, primary actions, and structural accents. It represents the iconic baseboards of local architecture.
- **Neutral (Lime Wash):** An off-white background color that provides a warm, organic alternative to pure white, reminiscent of traditional sun-drenched walls.
- **Accent (Mancha Earth):** A sophisticated dark brown used for secondary text and borders, grounding the blue and white with a nod to the soil and windmill timber.
- **Highlight (Sunset Gold):** Used sparingly for high-value indicators like ratings and featured status.

## Typography

This system employs a high-contrast pairing to balance history with modern utility.

- **Headlines & Quotes:** Uses a high-contrast serif to evoke elegance, literary tradition (Cervantes), and premium editorial design. Large display sizes should use tighter letter spacing.
- **Body & Interface:** Uses a clean, geometric sans-serif for maximum legibility in directory listings and interactive components. 
- **Metadata:** Small labels should always use the sans-serif in a bold weight with increased letter spacing for clarity in small formats.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a premium, magazine-like feel, centering content with wide margins. 

- **Grid Model:** 12-column grid with 24px gutters.
- **Rhythm:** Use an 8px base unit. Section spacing is intentionally generous (80px+) to allow the "Lime Wash" background to act as a visual breather.
- **Responsive Behavior:** On mobile, margins shrink to 16px. Cards reflow from multi-column grids to a single-column stacked format. The "Planificador de Ruta" remains a persistent, bottom-anchored element for easy access.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Ambient Shadows** rather than flat borders.

- **Surface Layers:** Use very soft, diffused shadows (15% opacity of Mancha Earth) for cards to make them appear slightly lifted from the "Lime Wash" surface.
- **Overlays:** The AI Planner and secondary menus use a glassmorphism effect: a semi-transparent white background (60-80% opacity) with a high-density backdrop blur (20px). This maintains context of the landscape while focusing the user's attention.
- **Interactive Depth:** Buttons should use a subtle inner-glow or slight elevation increase on hover to feel tactile and responsive.

## Shapes

The shape language is "Softly Geometric." While the windmills and architecture of Criptana are structural, the lime-washed walls have organic, rounded edges. 

- **Cards & Containers:** Use a 0.5rem (8px) radius to feel modern but grounded. 
- **Interactive Elements:** Buttons and input fields mirror this 8px radius.
- **Feature Images:** Should occasionally use asymmetrical rounding or circular masks (referencing windmill windows) to break the grid and add visual interest.

## Components

- **Buttons:** Primary buttons are solid Albaicín Blue with white sans-serif text. Secondary buttons use a transparent background with an Albaicín Blue border.
- **Cards (The "Ficha"):** Features a high-quality full-width image at the top, followed by 24px of internal padding. Titles use the serif headline style; metadata (tags, price, location) uses the sans-serif label style.
- **Chips/Tags:** Small, pill-shaped elements with a subtle 10% opacity blue fill or a 1px "Mancha Earth" border.
- **Glass Overlays:** Used for the "AI Route Planner." These should feature a frosted glass texture and a crisp 1px white border to define the edges against the background.
- **Icons:** Use thin-stroke, refined line icons. Emojis should be used sparingly as secondary accents to ensure the "Luxury Guide" aesthetic is maintained over a "General Directory" feel.
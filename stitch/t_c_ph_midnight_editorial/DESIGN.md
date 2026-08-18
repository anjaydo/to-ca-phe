---
name: Tổ Cà Phê | Midnight Editorial
colors:
  surface: '#121411'
  surface-dim: '#121411'
  surface-bright: '#383a36'
  surface-container-lowest: '#0d0f0c'
  surface-container-low: '#1b1c19'
  surface-container: '#1f201d'
  surface-container-high: '#292a27'
  surface-container-highest: '#343532'
  on-surface: '#e3e3de'
  on-surface-variant: '#c3c8c1'
  inverse-surface: '#e3e3de'
  inverse-on-surface: '#30312e'
  outline: '#8d928c'
  outline-variant: '#434843'
  surface-tint: '#b4cdb8'
  primary: '#b4cdb8'
  on-primary: '#203526'
  primary-container: '#0a1f12'
  on-primary-container: '#728977'
  inverse-primary: '#4d6453'
  secondary: '#afd431'
  on-secondary: '#293500'
  secondary-container: '#90b300'
  on-secondary-container: '#324100'
  tertiary: '#e4bcc7'
  on-tertiary: '#432931'
  tertiary-container: '#2b141c'
  on-tertiary-container: '#9d7a84'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d0e9d3'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#cbf14d'
  secondary-fixed-dim: '#afd431'
  on-secondary-fixed: '#161e00'
  on-secondary-fixed-variant: '#3c4d00'
  tertiary-fixed: '#ffd9e3'
  tertiary-fixed-dim: '#e4bcc7'
  on-tertiary-fixed: '#2c141c'
  on-tertiary-fixed-variant: '#5c3f48'
  background: '#121411'
  on-background: '#e3e3de'
  surface-variant: '#343532'
  electric-chartreuse: '#d2f954'
  midnight-forest: '#0a1f12'
  paper-off-white: '#faf9f4'
  surface-muted: '#1a2e21'
typography:
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-md:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
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
  base: 8px
  gutter: 16px
  margin: 24px
  section-gap: 64px
---

## Brand & Style

The design system evolves into a high-energy, nocturnal aesthetic. It retains its organic editorial roots but shifts into a "Digital Midnight" atmosphere. The personality is sophisticated, energetic, and premium—reminiscent of a high-end late-night coffee bar or a neon-lit urban apothecary.

The visual style is a fusion of **Minimalism** and **High-Contrast / Bold**:
- **Midnight Depth:** A deep, ink-like forest green base creates a sense of infinite space and luxury.
- **Electric Accents:** The use of high-vibrancy chartreuse cuts through the darkness, creating a rhythmic pulse across the layout.
- **Editorial Precision:** Strict alignment and generous negative space ensure that despite the aggressive color contrast, the reading experience remains calm and focused.

## Colors

The color strategy relies on an extreme contrast ratio to maintain legibility and brand impact in a dark environment.

- **Primary Surface (Midnight Forest):** #0a1f12 is the foundational canvas. It should be used for the main background and large container blocks.
- **Primary Accent (Electric Chartreuse):** #d2f954 is the exclusive color for "active" states, primary call-to-actions, and critical brand moments. It acts as the "light source" in the design.
- **Typography & Details (Paper Off-White):** #faf9f4 provides a soft but high-contrast alternative to pure white for all body text, headlines, and thin-stroke iconography.
- **Muted Surfaces:** For secondary containers or cards, use a slightly elevated green (#1a2e21) to create subtle depth without breaking the dark-mode immersion.

## Typography

The typographic hierarchy remains structured and editorial. By using **Be Vietnam Pro** for headlines, the system maintains its contemporary Vietnamese identity.

- **Headlines:** Must be rendered in `Paper Off-White`. Large display sizes should use tight letter-spacing to feel impactful and "inked."
- **Body Text:** **Work Sans** is used for maximum readability on dark backgrounds. Avoid weights below 400 to prevent font thinning/aliasing issues in dark mode.
- **Labels:** **JetBrains Mono** serves as a functional contrast, used for metadata and technical details. This should be treated as a "ui-label" and often rendered in uppercase or with increased letter-spacing.

## Layout & Spacing

This design system utilizes a **Fluid Grid** model with an emphasis on vertical rhythm and negative space.

- **Desktop:** 12-column grid with 16px gutters and 24px minimum side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px margins.
- **The "Breathe" Rule:** Use `section-gap` (64px) aggressively between content blocks. In dark mode, whitespace (or "darkspace") acts as a luxury signifier; avoid overcrowding elements.
- **Rhythm:** All components and vertical gaps must be multiples of 8px to maintain a cohesive editorial flow.

## Elevation & Depth

In this dark-mode environment, traditional shadows are replaced by **Tonal Layers** and **Glow Effects**.

- **Tonal Tiers:** Depth is created by lightening the background hex. The further "forward" an element is, the lighter its forest green shade becomes (e.g., Background -> Card -> Popover).
- **Hard Outlines:** Use a 1px solid border in #faf9f4 at low opacity (10-15%) to define container boundaries.
- **Accent Glow:** For high-priority interactive elements (like a hovered primary button), a subtle outer glow using the Electric Chartreuse color can be used to simulate a neon effect.
- **Zero Shadows:** Avoid standard black shadows as they are invisible on the #0a1f12 background.

## Shapes

The shape language is consistently **Rounded**, maintaining the friendly coffee-culture vibe despite the edgy color palette.

- **Standard Radius:** 0.5rem (8px) for cards, images, and secondary containers.
- **Interactive Radius:** 1rem (16px) for buttons, input fields, and chips to make them feel tactile and distinct from the structural grid.
- **Decorative Elements:** Use perfectly circular shapes for avatars or floating organic "blobs" in the background to soften the layout.

## Components

- **Buttons:** 
  - **Primary:** Solid Electric Chartreuse (#d2f954) background with Midnight Forest (#0a1f12) text. Bold and high-contrast.
  - **Secondary:** Transparent background with a 2px Electric Chartreuse border and matching text.
- **Chips:** Small containers with a 1rem radius. Use Midnight Forest background with a 1px Paper Off-White border and JetBrains Mono text.
- **Input Fields:** Dark background (#1a2e21) with a 1px Paper Off-White border. Upon focus, the border changes to Electric Chartreuse.
- **Cards:** Flat containers with an 8px radius. Use a subtle tonal lift (#1a2e21) or a very thin low-opacity white border to separate from the main background.
- **Lists:** Bullet points should be replaced with small Electric Chartreuse squares or brand-specific icons to act as high-contrast anchors for the eye.
- **Checkboxes/Radios:** When selected, these should be solid Electric Chartreuse with a Midnight Forest checkmark/dot.
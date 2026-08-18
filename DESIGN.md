---
name: Organic Editorial
brand-colors:
  forest: '#154734'
  cream: '#faf8f5'
  orange: '#ee7b17'
  mustard: '#f5b800'
  matcha: '#4e8a42'
  charcoal: '#1a1a1a'
modes:
  light:
    colors:
      surface: '#faf8f5'
      surface-dim: '#ddd8d2'
      surface-bright: '#faf8f5'
      surface-container-lowest: '#ffffff'
      surface-container-low: '#f6f1eb'
      surface-container: '#efe8e0'
      surface-container-high: '#e8ded4'
      surface-container-highest: '#e1d4c8'
      on-surface: '#1a1a1a'
      on-surface-variant: '#46413c'
      inverse-surface: '#23392f'
      inverse-on-surface: '#faf8f5'
      outline: '#716a63'
      outline-variant: '#c8beb4'
      surface-tint: '#154734'
      primary: '#154734'
      on-primary: '#faf8f5'
      primary-container: '#d5e8dc'
      on-primary-container: '#0b3324'
      inverse-primary: '#a8d1b4'
      secondary: '#765900'
      on-secondary: '#faf8f5'
      secondary-container: '#f5b800'
      on-secondary-container: '#1a1a1a'
      tertiary: '#9a4000'
      on-tertiary: '#ffffff'
      tertiary-container: '#ee7b17'
      on-tertiary-container: '#1a1a1a'
      error: '#ba1a1a'
      on-error: '#ffffff'
      error-container: '#ffdad6'
      on-error-container: '#93000a'
      primary-fixed: '#d5e8dc'
      primary-fixed-dim: '#a8d1b4'
      on-primary-fixed: '#09261a'
      on-primary-fixed-variant: '#154734'
      secondary-fixed: '#f5b800'
      secondary-fixed-dim: '#d9a400'
      on-secondary-fixed: '#1a1a1a'
      on-secondary-fixed-variant: '#493600'
      tertiary-fixed: '#ffd9bd'
      tertiary-fixed-dim: '#ffad67'
      on-tertiary-fixed: '#321400'
      on-tertiary-fixed-variant: '#7d3300'
      background: '#faf8f5'
      on-background: '#1a1a1a'
      surface-variant: '#e1d4c8'
  dark:
    colors:
      surface: '#0c2119'
      surface-dim: '#061610'
      surface-bright: '#244d3c'
      surface-container-lowest: '#061610'
      surface-container-low: '#0f2b20'
      surface-container: '#123626'
      surface-container-high: '#154734'
      surface-container-highest: '#1d5741'
      on-surface: '#faf8f5'
      on-surface-variant: '#d5cdc4'
      inverse-surface: '#faf8f5'
      inverse-on-surface: '#1a1a1a'
      outline: '#a69d94'
      outline-variant: '#466153'
      surface-tint: '#a8d1b4'
      primary: '#b8ddc2'
      on-primary: '#0b3324'
      primary-container: '#154734'
      on-primary-container: '#d5e8dc'
      inverse-primary: '#154734'
      secondary: '#ffd35a'
      on-secondary: '#1a1a1a'
      secondary-container: '#f5b800'
      on-secondary-container: '#1a1a1a'
      tertiary: '#ffad67'
      on-tertiary: '#4a1f00'
      tertiary-container: '#ee7b17'
      on-tertiary-container: '#1a1a1a'
      error: '#ffb4ab'
      on-error: '#690005'
      error-container: '#93000a'
      on-error-container: '#ffdad6'
      primary-fixed: '#d5e8dc'
      primary-fixed-dim: '#a8d1b4'
      on-primary-fixed: '#09261a'
      on-primary-fixed-variant: '#154734'
      secondary-fixed: '#f5b800'
      secondary-fixed-dim: '#d9a400'
      on-secondary-fixed: '#1a1a1a'
      on-secondary-fixed-variant: '#493600'
      tertiary-fixed: '#ffd9bd'
      tertiary-fixed-dim: '#ffad67'
      on-tertiary-fixed: '#321400'
      on-tertiary-fixed-variant: '#7d3300'
      background: '#0c2119'
      on-background: '#faf8f5'
      surface-variant: '#1d5741'
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
  container-margin: 24px
  gutter: 16px
  section-gap: 64px
---

## Brand & Style

This design system embodies a **Modern Organic Editorial** aesthetic. It balances the structured authority of traditional print media with a playful, illustrative warmth. The brand personality is welcoming and community-focused, yet maintains a sophisticated, curated feel characteristic of boutique matcha and coffee culture.

The visual style is characterized by:
- **Editorial Minimalism:** High-contrast typography and intentional whitespace that allows illustrations and high-quality photography to breathe.
- **Illustration-Forward:** Heavy reliance on "human-touch" elements like line-art characters and organic textures to offset digital rigidity.
- **Structured Playfulness:** Utilizing rigid grid systems to contain expressive, sometimes overlapping, graphic elements.

## Colors

The semantic palette is derived from the Tổ Cà Phê reference colors rather than copying every swatch directly into UI roles. Brand colors remain available as `brand-*` Tailwind utilities; accessible derived tones are used where the original swatch does not provide sufficient contrast.

### Color modes

- **Light mode (default):** Uses warm Parchment surfaces with Forest Matcha text and actions. This is the canonical daytime/editorial presentation.
- **Dark mode:** Uses Midnight green tonal surfaces while preserving the same semantic token names. Components must never choose colors by mode; they consume semantic tokens and inherit the active values.
- **Fixed colors:** `primary-fixed`, `secondary-fixed`, and `tertiary-fixed` do not change between modes. Reserve them for artwork, image overlays, and content that must retain a stable brand color.
- **Theme behavior:** Follow the operating-system preference until the visitor explicitly selects light or dark. Persist the explicit preference locally.

- **Primary (Deep Forest Green):** `#154734` in light mode. Use for headings, logo treatment, outlines, and structural brand containers. Dark mode uses a lighter derived green for readable text while retaining Deep Forest on containers.
- **CTA (Warm Orange):** `#EE7B17` with Charcoal text. Do not place Cream or white text on the original Orange because that pairing does not meet normal-text contrast.
- **Highlight (Mustard Yellow):** `#F5B800` with Charcoal text. Use for badges, marquees, notification tags, stars, and limited graphic emphasis.
- **Matcha:** `#4E8A42` is reserved for product-specific fills, progress indicators, illustration, and large non-text graphics. It must not be used for normal text on Cream.
- **Neutral:** Cream `#FAF8F5` and Charcoal `#1A1A1A` form the main reading pair. Tonal surfaces are warm derivatives of Cream in light mode and Deep Forest in dark mode.

Use the Primary color for text to maintain a softer contrast than pure black.

## Typography

The typography strategy focuses on a blend of modern Vietnamese-inspired sans-serifs and functional monospaced labels.

- **Headlines (Be Vietnam Pro):** High-impact, tight-set sans-serif with a contemporary feel. Use for all major titles.
- **Body (Work Sans):** Professional and highly legible. It provides a grounded feel to longer descriptive text.
- **Labels (JetBrains Mono):** Used for metadata, status tags, and micro-copy. The technical nature of the mono font creates a "stamp" or "printed" effect against the organic background.

Always use semantic `primary`, `on-surface`, and `on-surface-variant` tokens for text instead of black or mode-specific color literals.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a heavy editorial influence. 

- **Grid:** Use a 12-column grid for desktop and a 4-column grid for mobile.
- **Rhythm:** An 8px baseline grid ensures vertical consistency. 
- **Margins:** Generous outer margins (24px+) are required to maintain the "poster" aesthetic.
- **Composition:** Elements should occasionally break the grid—such as illustrations overlapping container borders—to reinforce the organic, hand-laid feel. Use large "Section Gaps" (64px+) to separate distinct content blocks, ensuring the design never feels cluttered.

## Elevation & Depth

This system avoids heavy shadows in favor of **Tonal Layers** and **Crisp Outlines**.

- **Layering:** Depth is communicated through color blocking. Use Cream as the light base, Deep Forest tonal layers in dark mode, and Warm Orange only for high-priority actions.
- **Outlines:** To separate elements of the same color, use a 1px solid border in a slightly darker or lighter shade of the background (e.g., a subtle stroke on Parchment cards).
- **Shadows:** If depth is absolutely necessary, use a "Hard Shadow" (0px blur) in the Primary color at 2px-4px offset to mimic the 3D-effect seen in the brand's logo.

## Shapes

The shape language is **Rounded**, reflecting the soft nature of matcha foam and the friendly character illustrations.

- **Containers:** Standard cards and containers use a 0.5rem (8px) radius.
- **Interactive Elements:** Buttons and input fields should utilize `rounded-lg` (1rem) to feel more inviting.
- **Organic Accents:** In decorative backgrounds, use large, irregular blob shapes or perfectly circular containers to break the rectangular grid.

## Components

- **Buttons:** Primary CTA buttons use Warm Orange with Charcoal text. Secondary buttons use a surface background with a 2px semantic Primary border.
- **Chips/Badges:** Use JetBrains Mono with Mustard Yellow and Charcoal text. Avoid white text on Orange or Mustard.
- **Cards:** Cards should be flat with a 1px Forest Matcha border or a subtle Tonal Layer. Use generous internal padding (24px).
- **Input Fields:** Use a Parchment background with a 1px border. When focused, the border should thicken to 2px in Forest Matcha.
- **Lists:** Use custom icons or the brand's cat illustrations as bullet points to enhance the "Modern Organic" narrative.
- **Status Indicators:** Use Orange for warnings/attention, Matcha for non-text success indicators, and semantic error tokens for destructive or failed states.

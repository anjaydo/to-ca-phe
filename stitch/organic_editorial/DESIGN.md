---
name: Organic Editorial
colors:
  surface: '#faf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#faf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ef'
  surface-container: '#efeee9'
  surface-container-high: '#e9e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1b1c19'
  on-surface-variant: '#404941'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#707970'
  outline-variant: '#c0c9bf'
  surface-tint: '#296a42'
  primary: '#004523'
  on-primary: '#ffffff'
  primary-container: '#1b5e37'
  on-primary-container: '#92d5a4'
  inverse-primary: '#92d6a4'
  secondary: '#416900'
  on-secondary: '#ffffff'
  secondary-container: '#acf847'
  on-secondary-container: '#457000'
  tertiary: '#563400'
  on-tertiary: '#ffffff'
  tertiary-container: '#754900'
  on-tertiary-container: '#ffb95f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#aef2bf'
  primary-fixed-dim: '#92d6a4'
  on-primary-fixed: '#00210e'
  on-primary-fixed-variant: '#09522c'
  secondary-fixed: '#acf847'
  secondary-fixed-dim: '#91db2a'
  on-secondary-fixed: '#102000'
  on-secondary-fixed-variant: '#304f00'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e3e3de'
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

The palette is derived directly from the deep forest greens of premium matcha and the vibrant, sun-drenched chartreuse of fresh sprouts.

- **Primary (Forest Matcha):** A deep, authoritative green used for headings and primary brand containers.
- **Secondary (Vibrant Chartreuse):** Used sparingly for high-action highlights and organic accents.
- **Tertiary (Warm Ochre):** A secondary accent pulled from the character illustrations, used for functional alerts or specific status indicators.
- **Neutral (Parchment):** An off-white, warm-toned background that mimics high-quality paper stock, reducing the clinical feel of pure white.

Use the Primary color for text to maintain a softer contrast than pure black.

## Typography

The typography strategy focuses on a blend of modern Vietnamese-inspired sans-serifs and functional monospaced labels.

- **Headlines (Be Vietnam Pro):** High-impact, tight-set sans-serif with a contemporary feel. Use for all major titles.
- **Body (Work Sans):** Professional and highly legible. It provides a grounded feel to longer descriptive text.
- **Labels (JetBrains Mono):** Used for metadata, status tags, and micro-copy. The technical nature of the mono font creates a "stamp" or "printed" effect against the organic background.

Always prefer "Forest Matcha" (#1B5E37) for text color instead of #000000 to maintain the organic narrative.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a heavy editorial influence. 

- **Grid:** Use a 12-column grid for desktop and a 4-column grid for mobile.
- **Rhythm:** An 8px baseline grid ensures vertical consistency. 
- **Margins:** Generous outer margins (24px+) are required to maintain the "poster" aesthetic.
- **Composition:** Elements should occasionally break the grid—such as illustrations overlapping container borders—to reinforce the organic, hand-laid feel. Use large "Section Gaps" (64px+) to separate distinct content blocks, ensuring the design never feels cluttered.

## Elevation & Depth

This system avoids heavy shadows in favor of **Tonal Layers** and **Crisp Outlines**.

- **Layering:** Depth is communicated through color blocking. Use "Parchment" as the base and "Forest Matcha" for raised components or primary actions.
- **Outlines:** To separate elements of the same color, use a 1px solid border in a slightly darker or lighter shade of the background (e.g., a subtle stroke on Parchment cards).
- **Shadows:** If depth is absolutely necessary, use a "Hard Shadow" (0px blur) in the Primary color at 2px-4px offset to mimic the 3D-effect seen in the brand's logo.

## Shapes

The shape language is **Rounded**, reflecting the soft nature of matcha foam and the friendly character illustrations.

- **Containers:** Standard cards and containers use a 0.5rem (8px) radius.
- **Interactive Elements:** Buttons and input fields should utilize `rounded-lg` (1rem) to feel more inviting.
- **Organic Accents:** In decorative backgrounds, use large, irregular blob shapes or perfectly circular containers to break the rectangular grid.

## Components

- **Buttons:** Primary buttons use a solid Forest Matcha background with Parchment text. Secondary buttons use a Parchment background with a 2px Forest Matcha border.
- **Chips/Badges:** Use JetBrains Mono for text. Backgrounds should be the Secondary Chartreuse with a high-contrast dark green border for visibility.
- **Cards:** Cards should be flat with a 1px Forest Matcha border or a subtle Tonal Layer. Use generous internal padding (24px).
- **Input Fields:** Use a Parchment background with a 1px border. When focused, the border should thicken to 2px in Forest Matcha.
- **Lists:** Use custom icons or the brand's cat illustrations as bullet points to enhance the "Modern Organic" narrative.
- **Status Indicators:** Use the Tertiary Ochre for warnings and the Secondary Chartreuse for success messages.
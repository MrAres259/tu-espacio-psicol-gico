

## Plan: Replace Photo Placeholder with Decorative Illustration

Replace the current photo placeholder in the "Sobre Mí" section with an elegant SVG illustration composition related to psychology and wellness.

### Design
- Remove the emoji placeholder and "Foto de la psicóloga" text
- Create an inline SVG composition featuring:
  - A stylized brain or head silhouette with gentle flowing lines
  - Surrounding decorative elements: leaves, lotus flower, or abstract wellness motifs
  - Color palette using the existing brand colors (`primary`, `accent`, `secondary`)
- Keep the 3:4 aspect ratio container with rounded corners and shadow
- Keep the decorative offset border accent behind it
- Maintain the slide-in-left animation

### Technical Details
- **File**: `src/components/AboutSection.tsx`
- Replace the inner content of the photo `div` (lines 22-29) with a custom SVG illustration
- SVG will use `currentColor` and Tailwind color classes for brand consistency
- No external dependencies needed — pure inline SVG


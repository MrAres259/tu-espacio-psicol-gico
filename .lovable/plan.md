
## Plan: Enhance Service Tiles and Hero Section

### Overview
Three modifications to improve visual hierarchy and expertise indicators:

1. **Update 4th Service Tile (Brain Icon)**
   - Title: "Disminución/Eliminación..." → "Adiós a la Ansiedad y el Insomnio"
   - Description: "Técnicas y herramientas..." → "Descubre estrategias probadas para superar la depresión y retomar el control de tu vida."

2. **Add Expertise Star Badges**
   - Add a small star icon (lucide-react `Star`) with `text-primary` color
   - Display on two tiles: "Terapia Individual" (index 0) and "Hipnosis Clínica" (index 5)
   - Position star in top-right corner of card or next to title for visual indicator of specialization
   - Approach: Add optional `showExpertiseStar` property to service objects, render star conditionally in card

3. **Highlight "Bienestar" in Hero Section**
   - Current: `<span className="font-semibold text-foreground">BIENESTAR</span>`
   - Change to: Apply `text-primary` color to make it stand out with the logo's primary brown color
   - This creates visual consistency with the brand palette

### Technical Implementation
- **ServicesSection.tsx**: 
  - Update services array: modify item 3 (Brain) title/description, add `showExpertiseStar: true` to items 0 and 5
  - Import `Star` icon from lucide-react
  - Modify card rendering to include conditional star badge next to the title
  
- **HeroSection.tsx**:
  - Change "BIENESTAR" span className from `text-foreground` to `text-primary`

### Design Notes
- Primary color (HSL 30 45% 35%) is the warm brown logo color from the favicon
- Star placement: inline with title or floating in card corner—recommend inline next to title for clarity
- No new CSS needed; existing Tailwind classes handle styling

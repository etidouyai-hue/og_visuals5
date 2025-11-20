# Graphic Designer Portfolio - Design Guidelines

## Design Approach
**Reference-Based**: Drawing from premium creative agency aesthetics (Awwwards-style portfolios, Behance showcases, modern design studios)

## Design Philosophy
Ultra-modern, minimal, and highly aesthetic with a focus on showcasing creative work through generous whitespace, bold typography, and smooth micro-interactions.

## Typography System
- **Headlines**: Large, bold sans-serif (48-72px desktop, 32-48px mobile)
- **Subheadings**: Medium weight (24-32px desktop, 18-24px mobile)
- **Body**: Clean, readable (16-18px)
- **Hierarchy**: Strong contrast between display and body text
- Use modern web fonts (e.g., Inter, Poppins, or similar contemporary sans-serif)

## Layout System
**Tailwind-equivalent spacing**: Use units of 4, 8, 12, 16, 24, and 32 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Component spacing: gap-8 for grids, gap-4 for smaller elements
- Container max-width: max-w-7xl with horizontal padding

## Color Palette
```
Light Mode:
- Background: #ffffff
- Surface: #f7f7f7
- Text Primary: #111111
- Text Secondary: #222222
- Accent: #6c5ce7 (purple) or #00cec9 (turquoise)

Dark Mode:
- Background: #111111
- Surface: #222222
- Text Primary: #ffffff
- Text Secondary: #f7f7f7
- Accent: Same vibrant accents
```

## Page-Specific Layouts

### Home Page
- **Hero Section**: Full-viewport (90vh) with large hero image background, centered headline "Modern Graphic Designer", subheading, and dual CTAs ("View Work" + "Contact")
- **Featured Projects Grid**: 3-column grid (2-col tablet, 1-col mobile) with 3-6 project cards, each with image, title, hover zoom effect
- **Fade-in Animations**: Stagger entrance for project cards

### About Page
- **Two-Column Layout**: Left side with professional portrait (50% width), right side with bio text and skill visualization
- **Skills Section**: Clean horizontal bars or minimal grid showing expertise areas
- **Resume CTA**: Prominent download button
- **Spacing**: Generous padding (py-20) for breathing room

### Projects Page
- **Grid Layout**: Masonry-style or 3-column responsive grid
- **Filtering Bar**: Sticky/fixed horizontal buttons (All / Branding / Posters / Illustration)
- **Project Cards**: Hover zoom on images, title overlay on hover, consistent aspect ratios
- **Transitions**: Smooth filter animations (fade out/in when switching categories)

### Project Detail Template
- **Hero**: Full-width project hero image (70vh)
- **Project Info Bar**: Client, role, tools, year in clean single row below hero
- **Content Layout**: Max-width prose container (max-w-4xl) for comfortable reading
- **Full-Bleed Images**: Alternate between contained and full-width images
- **Navigation**: Previous/Next project buttons fixed at bottom or floating

### Contact Page
- **Centered Layout**: Single-column, max-w-2xl container
- **Form**: Clean inputs with subtle borders, rounded corners (8-12px)
- **Social Icons**: Row of icon links below form
- **Validation**: Visual feedback on form fields (success/error states)

## Component Library

### Header Navigation
- **Sticky**: Transparent initially, solid background (#ffffff or #111111) appears on scroll
- **Logo**: Left-aligned
- **Nav Links**: Right-aligned, smooth underline hover effect
- **Dark Mode Toggle**: Icon-based switch (sun/moon)
- **Mobile**: Hamburger menu with full-screen overlay navigation

### Footer
- Minimal design with social icons (centered row)
- Copyright text
- Subtle top border separator
- Consistent padding (py-8)

### Buttons
- **Primary CTA**: Accent color background, white text, rounded-lg (12px), py-3 px-8
- **Secondary**: Outline style with accent border, transparent background
- **Hover States**: Subtle scale (1.05) and shadow increase
- **Buttons on Images**: Blurred background (backdrop-blur), semi-transparent, no additional hover blur changes

### Cards (Projects)
- Rounded corners (16-20px)
- Soft shadow (0 4px 20px rgba(0,0,0,0.08) in light, adjusted for dark)
- Hover: Lift effect (translateY(-8px)) + shadow increase
- Transition: All 300ms ease

## Visual Effects
- **Glassmorphism**: Subtle frosted glass effects on overlays and modals (backdrop-blur-lg, semi-transparent backgrounds)
- **Shadows**: Soft, layered shadows (never harsh)
- **Rounded Corners**: 10-20px throughout for modern feel
- **Scroll Animations**: IntersectionObserver-triggered fade-up effects (translate + opacity)

## Animations
- **Page Loads**: Fade-in hero content (500ms delay)
- **Scroll Reveals**: Staggered fade-up for cards and sections (100ms delay between items)
- **Hover**: Transform scale, shadow, and color transitions (200-300ms)
- **Theme Toggle**: Smooth color transitions (300ms) across all elements
- **Mobile Menu**: Slide-in from right with backdrop fade

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids, adjusted spacing)
- Desktop: > 1024px (full multi-column layouts)
- Mobile-first approach: Design for mobile, enhance for larger screens

## Images
- **Home Hero**: Large background image showing creative workspace or abstract design (full-bleed, 90vh)
- **About Page**: Professional portrait photo (square or 4:5 ratio)
- **Project Cards**: High-quality work samples (16:9 or square ratio)
- **Project Detail**: Full-width hero + multiple case study images (varied sizes)
- All images should maintain crisp quality at 2x resolution for retina displays

## Accessibility & Performance
- Smooth scrolling behavior
- Focus states on all interactive elements
- ARIA labels for icon-only buttons
- Theme preference saved to localStorage
- Optimized animations (reduced motion respected)
export interface CSSSnippet {
  id: string
  name: string
  category: string
  tags: string[]
  code: string
  description: string
}

export interface ColorPalette {
  id: string
  name: string
  category: string
  description: string
  colors: {
    name: string
    hex: string
    oklch: string
    rgb: string
  }[]
}

export interface StyleTemplate {
  id: string
  name: string
  category: string
  tags: string[]
  description: string
  html: string
  css: string
}

export interface GraphicElement {
  id: string
  name: string
  category: string
  description: string
  customizable: boolean
  svg: string
}

export const cssSnippets: CSSSnippet[] = [
  {
    id: 'flex-center',
    name: 'Flex Center',
    category: 'Flexbox',
    tags: ['flexbox', 'centering', 'layout'],
    code: `.center {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    description: 'Perfect centering with flexbox'
  },
  {
    id: 'flex-between',
    name: 'Flex Space Between',
    category: 'Flexbox',
    tags: ['flexbox', 'spacing', 'layout'],
    code: `.space-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
    description: 'Items distributed with space between'
  },
  {
    id: 'flex-column',
    name: 'Flex Column',
    category: 'Flexbox',
    tags: ['flexbox', 'vertical', 'layout'],
    code: `.column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}`,
    description: 'Vertical flex layout with gap'
  },
  {
    id: 'grid-3-col',
    name: 'Three Column Grid',
    category: 'Grid',
    tags: ['grid', 'columns', 'layout'],
    code: `.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}`,
    description: 'Simple 3-column equal width grid'
  },
  {
    id: 'fade-in',
    name: 'Fade In Animation',
    category: 'Animation',
    tags: ['animation', 'fade', 'entrance'],
    code: `@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-in;
}`,
    description: 'Smooth fade in effect'
  },
  {
    id: 'slide-up',
    name: 'Slide Up Animation',
    category: 'Animation',
    tags: ['animation', 'slide', 'entrance'],
    code: `@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-up {
  animation: slideUp 0.4s ease-out;
}`,
    description: 'Element slides up while fading in'
  },
  {
    id: 'gc-focus-ring',
    name: 'GC Focus Ring',
    category: 'Accessibility',
    tags: ['accessibility', 'focus', 'government'],
    code: `.focusable:focus-visible {
  outline: 3px solid oklch(0.85 0.15 90);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px oklch(0.85 0.15 90 / 0.2);
}`,
    description: 'Canada.ca compliant focus indicator for accessibility'
  },
  {
    id: 'gc-skip-link',
    name: 'GC Skip Link',
    category: 'Accessibility',
    tags: ['accessibility', 'navigation', 'government'],
    code: `.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}`,
    description: 'Accessible skip to content link pattern'
  },
  {
    id: 'truncate',
    name: 'Text Truncate',
    category: 'Typography',
    tags: ['text', 'overflow', 'ellipsis'],
    code: `.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`,
    description: 'Truncate overflowing text with ellipsis'
  },
  {
    id: 'line-clamp',
    name: 'Multi-line Clamp',
    category: 'Typography',
    tags: ['text', 'overflow', 'multiline'],
    code: `.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,
    description: 'Limit text to specified number of lines'
  },
  {
    id: 'smooth-shadow',
    name: 'Smooth Shadow',
    category: 'Shadows',
    tags: ['shadow', 'elevation', 'depth'],
    code: `.card {
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.15),
    0 6px 6px rgba(0, 0, 0, 0.18);
}`,
    description: 'Layered shadow with smooth hover effect'
  },
  {
    id: 'glass-effect',
    name: 'Glassmorphism',
    category: 'Effects',
    tags: ['glass', 'blur', 'modern'],
    code: `.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}`,
    description: 'Modern glass morphism effect with blur'
  },
  {
    id: 'gradient-border',
    name: 'Gradient Border',
    category: 'Borders',
    tags: ['gradient', 'border', 'modern'],
    code: `.gradient-border {
  position: relative;
  border-radius: 12px;
  padding: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 2px;
  background: white;
  border-radius: 10px;
}`,
    description: 'Modern gradient border effect'
  },
  {
    id: 'gc-button-hover',
    name: 'GC Button Hover',
    category: 'GC Components',
    tags: ['button', 'government', 'interaction'],
    code: `.gc-button {
  background: oklch(0.45 0.12 250);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  transition: background 0.2s ease;
}

.gc-button:hover {
  background: oklch(0.35 0.12 250);
}`,
    description: 'Canada.ca button with proper hover state'
  },
  {
    id: 'gc-alert-pattern',
    name: 'GC Alert Pattern',
    category: 'GC Components',
    tags: ['alert', 'government', 'feedback'],
    code: `.gc-alert {
  border-left: 4px solid;
  padding: 1rem 1.5rem;
  margin: 1rem 0;
  border-radius: 0.25rem;
}

.gc-alert.success {
  background: oklch(0.95 0.08 150);
  border-color: oklch(0.55 0.15 150);
  color: oklch(0.25 0.08 150);
}

.gc-alert.warning {
  background: oklch(0.95 0.12 80);
  border-color: oklch(0.65 0.18 80);
  color: oklch(0.35 0.10 80);
}

.gc-alert.error {
  background: oklch(0.95 0.08 25);
  border-color: oklch(0.55 0.22 25);
  color: oklch(0.35 0.15 25);
}`,
    description: 'Canada.ca alert message patterns'
  }
]

export const colorPalettes: ColorPalette[] = [
  {
    id: 'gc-official',
    name: 'Government of Canada Official',
    category: 'Government',
    description: 'Official Canada.ca color palette',
    colors: [
      { name: 'GC Blue', hex: '#26374A', oklch: 'oklch(0.30 0.03 250)', rgb: 'rgb(38, 55, 74)' },
      { name: 'GC Red', hex: '#AF3C43', oklch: 'oklch(0.45 0.15 25)', rgb: 'rgb(175, 60, 67)' },
      { name: 'GC Gray', hex: '#335075', oklch: 'oklch(0.38 0.06 250)', rgb: 'rgb(51, 80, 117)' },
      { name: 'GC Light Gray', hex: '#E1E4E7', oklch: 'oklch(0.91 0.005 250)', rgb: 'rgb(225, 228, 231)' },
      { name: 'GC White', hex: '#FFFFFF', oklch: 'oklch(1 0 0)', rgb: 'rgb(255, 255, 255)' }
    ]
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    category: 'Professional',
    description: 'Cool, professional blues and teals',
    colors: [
      { name: 'Deep Ocean', hex: '#0C4A6E', oklch: 'oklch(0.35 0.08 240)', rgb: 'rgb(12, 74, 110)' },
      { name: 'Sea Blue', hex: '#0EA5E9', oklch: 'oklch(0.65 0.15 235)', rgb: 'rgb(14, 165, 233)' },
      { name: 'Teal', hex: '#14B8A6', oklch: 'oklch(0.70 0.12 190)', rgb: 'rgb(20, 184, 166)' },
      { name: 'Sky', hex: '#7DD3FC', oklch: 'oklch(0.82 0.10 220)', rgb: 'rgb(125, 211, 252)' },
      { name: 'Foam', hex: '#E0F2FE', oklch: 'oklch(0.95 0.02 220)', rgb: 'rgb(224, 242, 254)' }
    ]
  },
  {
    id: 'sunset-warmth',
    name: 'Sunset Warmth',
    category: 'Vibrant',
    description: 'Warm oranges, pinks, and purples',
    colors: [
      { name: 'Deep Purple', hex: '#7C3AED', oklch: 'oklch(0.50 0.22 285)', rgb: 'rgb(124, 58, 237)' },
      { name: 'Violet', hex: '#A78BFA', oklch: 'oklch(0.65 0.18 285)', rgb: 'rgb(167, 139, 250)' },
      { name: 'Pink', hex: '#EC4899', oklch: 'oklch(0.60 0.24 350)', rgb: 'rgb(236, 72, 153)' },
      { name: 'Coral', hex: '#FB923C', oklch: 'oklch(0.72 0.15 50)', rgb: 'rgb(251, 146, 60)' },
      { name: 'Peach', hex: '#FED7AA', oklch: 'oklch(0.88 0.08 70)', rgb: 'rgb(254, 215, 170)' }
    ]
  },
  {
    id: 'forest-fresh',
    name: 'Forest Fresh',
    category: 'Natural',
    description: 'Earthy greens and browns',
    colors: [
      { name: 'Forest', hex: '#064E3B', oklch: 'oklch(0.32 0.07 165)', rgb: 'rgb(6, 78, 59)' },
      { name: 'Emerald', hex: '#10B981', oklch: 'oklch(0.70 0.15 160)', rgb: 'rgb(16, 185, 129)' },
      { name: 'Sage', hex: '#6EE7B7', oklch: 'oklch(0.85 0.12 165)', rgb: 'rgb(110, 231, 183)' },
      { name: 'Moss', hex: '#84CC16', oklch: 'oklch(0.75 0.18 120)', rgb: 'rgb(132, 204, 22)' },
      { name: 'Mint', hex: '#D1FAE5', oklch: 'oklch(0.95 0.05 165)', rgb: 'rgb(209, 250, 229)' }
    ]
  },
  {
    id: 'lavender-dream',
    name: 'Lavender Dream',
    category: 'Pastel',
    description: 'Soft, calming pastels',
    colors: [
      { name: 'Lavender', hex: '#9333EA', oklch: 'oklch(0.50 0.25 295)', rgb: 'rgb(147, 51, 234)' },
      { name: 'Lilac', hex: '#B39DDB', oklch: 'oklch(0.68 0.10 295)', rgb: 'rgb(179, 157, 219)' },
      { name: 'Powder Blue', hex: '#BFDBFE', oklch: 'oklch(0.86 0.06 240)', rgb: 'rgb(191, 219, 254)' },
      { name: 'Blush', hex: '#FBCFE8', oklch: 'oklch(0.87 0.08 340)', rgb: 'rgb(251, 207, 232)' },
      { name: 'Cream', hex: '#FEF3C7', oklch: 'oklch(0.95 0.05 85)', rgb: 'rgb(254, 243, 199)' }
    ]
  },
  {
    id: 'monochrome-elegant',
    name: 'Monochrome Elegant',
    category: 'Monochrome',
    description: 'Sophisticated grayscale palette',
    colors: [
      { name: 'Black', hex: '#0A0A0A', oklch: 'oklch(0.10 0 0)', rgb: 'rgb(10, 10, 10)' },
      { name: 'Charcoal', hex: '#404040', oklch: 'oklch(0.35 0 0)', rgb: 'rgb(64, 64, 64)' },
      { name: 'Silver', hex: '#A3A3A3', oklch: 'oklch(0.68 0 0)', rgb: 'rgb(163, 163, 163)' },
      { name: 'Light Gray', hex: '#D4D4D4', oklch: 'oklch(0.85 0 0)', rgb: 'rgb(212, 212, 212)' },
      { name: 'Off White', hex: '#FAFAFA', oklch: 'oklch(0.98 0 0)', rgb: 'rgb(250, 250, 250)' }
    ]
  }
]

export const styleTemplates: StyleTemplate[] = [
  {
    id: 'gc-button-primary',
    name: 'GC Primary Button',
    category: 'GC Buttons',
    tags: ['button', 'government', 'primary'],
    description: 'Official Canada.ca primary button style',
    html: '<button class="gc-btn-primary">Submit Application</button>',
    css: `.gc-btn-primary {
  background: oklch(0.45 0.12 250);
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.gc-btn-primary:hover {
  background: oklch(0.35 0.12 250);
}

.gc-btn-primary:focus-visible {
  outline: 3px solid oklch(0.85 0.15 90);
  outline-offset: 2px;
}`
  },
  {
    id: 'gc-button-secondary',
    name: 'GC Secondary Button',
    category: 'GC Buttons',
    tags: ['button', 'government', 'secondary'],
    description: 'Canada.ca secondary button for less prominent actions',
    html: '<button class="gc-btn-secondary">Cancel</button>',
    css: `.gc-btn-secondary {
  background: transparent;
  color: oklch(0.45 0.12 250);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border: 2px solid oklch(0.45 0.12 250);
  border-radius: 0.25rem;
  cursor: pointer;
}

.gc-btn-secondary:hover {
  background: oklch(0.95 0.02 250);
}

.gc-btn-secondary:focus-visible {
  outline: 3px solid oklch(0.85 0.15 90);
  outline-offset: 2px;
}`
  },
  {
    id: 'gc-alert-success',
    name: 'GC Success Alert',
    category: 'GC Alerts',
    tags: ['alert', 'government', 'success'],
    description: 'Canada.ca success message pattern',
    html: '<div class="gc-alert-success"><strong>Success</strong> Your application has been submitted.</div>',
    css: `.gc-alert-success {
  background: oklch(0.95 0.08 150);
  border-left: 4px solid oklch(0.55 0.15 150);
  color: oklch(0.25 0.08 150);
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  margin: 1rem 0;
}

.gc-alert-success strong {
  display: block;
  font-weight: 700;
  margin-bottom: 0.25rem;
}`
  },
  {
    id: 'gc-input-field',
    name: 'GC Input Field',
    category: 'GC Forms',
    tags: ['input', 'government', 'form'],
    description: 'Canada.ca form input styling',
    html: '<div class="gc-input-wrapper"><label for="email">Email Address</label><input type="email" id="email" class="gc-input" placeholder="your.email@example.com"></div>',
    css: `.gc-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
}

.gc-input-wrapper label {
  font-weight: 600;
  color: oklch(0.25 0 0);
  display: block;
  margin-bottom: 0.5rem;
}

.gc-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid oklch(0.70 0 0);
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.gc-input:focus {
  border-color: oklch(0.45 0.12 250);
  outline: none;
  box-shadow: 0 0 0 3px oklch(0.85 0.15 90 / 0.3);
}`
  },
  {
    id: 'glass-card',
    name: 'Glass Card',
    category: 'Cards',
    tags: ['card', 'glass', 'modern'],
    description: 'Glassmorphism card effect',
    html: '<div class="glass-card"><h3>Modern Card</h3><p>Beautiful glass effect with blur</p></div>',
    css: `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.glass-card p {
  margin: 0;
  opacity: 0.9;
}`
  },
  {
    id: 'gradient-card',
    name: 'Gradient Card',
    category: 'Cards',
    tags: ['card', 'gradient', 'modern'],
    description: 'Card with gradient background effect',
    html: '<div class="gradient-card"><h3>Featured Content</h3><p>Eye-catching gradient design</p></div>',
    css: `.gradient-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}

.gradient-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.2) 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.gradient-card:hover::before {
  opacity: 1;
}

.gradient-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.gradient-card p {
  margin: 0;
  position: relative;
  z-index: 1;
}`
  }
]

export const graphicElements: GraphicElement[] = [
  {
    id: 'maple-leaf',
    name: 'Maple Leaf',
    category: 'GC Icons',
    customizable: true,
    description: 'Canadian maple leaf icon',
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M50,15 L53,35 L63,30 L58,45 L75,45 L62,55 L70,70 L55,63 L50,80 L45,63 L30,70 L38,55 L25,45 L42,45 L37,30 L47,35 Z"/>
</svg>`
  },
  {
    id: 'arrow-right',
    name: 'Arrow Right',
    category: 'Shapes',
    customizable: true,
    description: 'Simple arrow pointing right',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'wave-divider',
    name: 'Wave Divider',
    category: 'Dividers',
    customizable: true,
    description: 'Smooth wave separator',
    svg: `<svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"/>
  <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"/>
  <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"/>
</svg>`
  },
  {
    id: 'check-circle',
    name: 'Check Circle',
    category: 'Shapes',
    customizable: true,
    description: 'Success checkmark in circle',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
  <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: 'diagonal-lines',
    name: 'Diagonal Lines Pattern',
    category: 'Patterns',
    customizable: true,
    description: 'Repeating diagonal line pattern',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="10" height="10">
    <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="currentColor" stroke-width="1" opacity="0.3"/>
  </pattern>
  <rect width="100" height="100" fill="url(#diagonalLines)"/>
</svg>`
  },
  {
    id: 'dots-grid',
    name: 'Dots Grid Pattern',
    category: 'Patterns',
    customizable: true,
    description: 'Grid of dots for backgrounds',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <pattern id="dotsGrid" patternUnits="userSpaceOnUse" width="20" height="20">
    <circle cx="2" cy="2" r="2" fill="currentColor" opacity="0.3"/>
  </pattern>
  <rect width="100" height="100" fill="url(#dotsGrid)"/>
</svg>`
  }
]

export const categories = {
  css: ['Flexbox', 'Grid', 'Animation', 'Typography', 'Shadows', 'Effects', 'Borders', 'Accessibility', 'GC Components'],
  colors: ['Government', 'Professional', 'Vibrant', 'Natural', 'Pastel', 'Monochrome'],
  styles: ['GC Buttons', 'GC Alerts', 'GC Forms', 'Cards'],
  graphics: ['GC Icons', 'Dividers', 'Shapes', 'Patterns']
}

export interface CSSSnippet {
  id: string
  name: string
  category: string
  description: string
  tags: string[]
  code: string
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
  description: string
  tags: string[]
  html: string
  css: string
}

export interface GraphicElement {
  id: string
  name: string
  category: string
  description: string
  svg: string
  customizable: boolean
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
    id: 'gradient-border',
    name: 'Gradient Border',
    category: 'Borders',
    tags: ['border', 'gradient', 'effect'],
    code: `.gradient-border {
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2px;
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
    id: 'truncate-text',
    name: 'Truncate Text',
    category: 'Typography',
    tags: ['text', 'overflow', 'ellipsis'],
    code: `.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`,
    description: 'Single line text with ellipsis'
  },
  {
    id: 'smooth-shadow',
    name: 'Smooth Shadow',
    category: 'Shadows',
    tags: ['shadow', 'depth', 'elevation'],
    code: `.smooth-shadow {
  box-shadow: 
    0 1px 2px 0 rgba(0, 0, 0, 0.05),
    0 2px 4px 0 rgba(0, 0, 0, 0.04),
    0 4px 8px 0 rgba(0, 0, 0, 0.03);
}`,
    description: 'Layered smooth shadow effect'
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
    category: 'Neutral',
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
    id: 'gc-btn-primary',
    name: 'GC Primary Button',
    category: 'GC Components',
    description: 'Canada.ca primary button styling',
    tags: ['button', 'government', 'primary'],
    html: '<button class="gc-btn-primary">Submit Application</button>',
    css: `.gc-btn-primary {
  background: oklch(0.45 0.12 250);
  color: oklch(1 0 0);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background 0.2s;
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
    id: 'gc-btn-secondary',
    name: 'GC Secondary Button',
    category: 'GC Components',
    description: 'Canada.ca secondary button styling',
    tags: ['button', 'government', 'secondary'],
    html: '<button class="gc-btn-secondary">Cancel</button>',
    css: `.gc-btn-secondary {
  background: transparent;
  color: oklch(0.45 0.12 250);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border: 2px solid oklch(0.45 0.12 250);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background 0.2s;
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
    category: 'GC Components',
    description: 'Canada.ca success alert pattern',
    tags: ['alert', 'government', 'success'],
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
    description: 'Canada.ca form input styling',
    tags: ['input', 'form', 'government'],
    html: '<div class="gc-input-wrapper"><label for="email">Email Address</label><input type="email" id="email" class="gc-input" placeholder="your.email@example.com"></div>',
    css: `.gc-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
}

.gc-input:focus {
  border-color: oklch(0.45 0.12 250);
  outline: 3px solid oklch(0.85 0.15 90);
  outline-offset: 2px;
}`
  },
  {
    id: 'glass-card',
    name: 'Glass Card',
    category: 'Cards',
    description: 'Glassmorphism card effect',
    tags: ['card', 'glass', 'modern'],
    html: '<div class="glass-card"><h3>Modern Card</h3><p>Beautiful glass effect with blur</p></div>',
    css: `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
}

.glass-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.glass-card p {
  margin-top: 0.5rem;
  opacity: 0.9;
}`
  }
]

export const graphicElements: GraphicElement[] = [
  {
    id: 'wave-divider',
    name: 'Wave Divider',
    category: 'Dividers',
    description: 'Smooth wave section divider',
    customizable: true,
    svg: `<svg viewBox="0 0 1200 120" preserveAspectRatio="none" style="width: 100%; height: 100%;">
  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
</svg>`
  },
  {
    id: 'blob-shape',
    name: 'Blob Shape',
    category: 'Shapes',
    description: 'Organic blob background shape',
    customizable: true,
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.5,73.4C27.2,80.2,11.6,82.4,-3.9,79.3C-19.4,76.2,-34.8,67.8,-48.3,57.4C-61.8,47,-73.4,34.6,-78.9,19.8C-84.4,5,-83.8,-12.2,-78.5,-27.5C-73.2,-42.8,-63.2,-56.2,-50.1,-64.1C-37,-72,-18.5,-74.5,-0.7,-73.1C17.1,-71.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
</svg>`
  },
  {
    id: 'dotted-pattern',
    name: 'Dotted Pattern',
    category: 'Patterns',
    description: 'Subtle dotted background pattern',
    customizable: true,
    svg: `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle fill="currentColor" cx="2" cy="2" r="2" opacity="0.3"/>
    </pattern>
  </defs>
  <rect fill="url(#dots)" width="100" height="100"/>
</svg>`
  },
  {
    id: 'arrow-right',
    name: 'Arrow Right',
    category: 'Icons',
    description: 'Simple right arrow icon',
    customizable: true,
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="5" y1="12" x2="19" y2="12"></line>
  <polyline points="12 5 19 12 12 19"></polyline>
</svg>`
  },
  {
    id: 'checkmark',
    name: 'Checkmark',
    category: 'Icons',
    description: 'Success checkmark icon',
    customizable: true,
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="20 6 9 17 4 12"></polyline>
</svg>`
  }
]

export const categories = {
  css: ['All', 'Flexbox', 'Grid', 'Animation', 'Borders', 'Typography', 'Shadows'],
  colors: ['All', 'Government', 'Professional', 'Vibrant', 'Natural', 'Pastel', 'Neutral'],
  styles: ['All', 'GC Components', 'GC Forms', 'Cards'],
  graphics: ['All', 'Dividers', 'Shapes', 'Patterns', 'Icons']
}

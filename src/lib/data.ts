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
  customizable: boolean
  description: string
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
    description: 'Vertical flex layout with consistent gaps'
  },
  {
    id: 'grid-responsive',
    name: 'Responsive Grid',
    category: 'Grid',
    tags: ['grid', 'responsive', 'layout'],
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}`,
    description: 'Auto-responsive grid that fits content'
  },
  {
    id: 'grid-3col',
    name: '3 Column Grid',
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
    description: 'Smooth fade in effect for elements'
  },
  {
    id: 'slide-up',
    name: 'Slide Up Animation',
    category: 'Animation',
    tags: ['animation', 'transform', 'entrance'],
    code: `@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 0.4s ease-out;
}`,
    description: 'Slide and fade in from bottom'
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
  background: oklch(0.95 0.10 85);
  border-color: oklch(0.65 0.18 85);
  color: oklch(0.30 0.10 85);
}

.gc-alert.error {
  background: oklch(0.95 0.12 25);
  border-color: oklch(0.55 0.22 25);
  color: oklch(0.30 0.12 25);
}`,
    description: 'Canada.ca alert component with status colors'
  }
]

export const colorPalettes: ColorPalette[] = [
  {
    id: 'gc-official',
    name: 'GC Official Colors',
    category: 'Government',
    description: 'Official Government of Canada brand colors from design-system.alpha.canada.ca',
    colors: [
      { name: 'GC Blue', hex: '#26374A', oklch: 'oklch(0.28 0.03 250)', rgb: 'rgb(38, 55, 74)' },
      { name: 'GC Red', hex: '#AF3C43', oklch: 'oklch(0.45 0.12 25)', rgb: 'rgb(175, 60, 67)' },
      { name: 'GC White', hex: '#FFFFFF', oklch: 'oklch(1 0 0)', rgb: 'rgb(255, 255, 255)' },
      { name: 'Link Blue', hex: '#0535D2', oklch: 'oklch(0.42 0.20 270)', rgb: 'rgb(5, 53, 210)' },
      { name: 'Visited Purple', hex: '#7834BC', oklch: 'oklch(0.48 0.18 300)', rgb: 'rgb(120, 52, 188)' }
    ]
  },
  {
    id: 'gc-primary',
    name: 'GC Primary Palette',
    category: 'Government',
    description: 'Primary action colors for Government of Canada applications',
    colors: [
      { name: 'Primary', hex: '#26374A', oklch: 'oklch(0.45 0.12 250)', rgb: 'rgb(38, 55, 74)' },
      { name: 'Primary Hover', hex: '#1C2938', oklch: 'oklch(0.35 0.12 250)', rgb: 'rgb(28, 41, 56)' },
      { name: 'Primary Light', hex: '#F0F4F8', oklch: 'oklch(0.96 0.01 250)', rgb: 'rgb(240, 244, 248)' },
      { name: 'Primary Text', hex: '#0A1828', oklch: 'oklch(0.20 0.02 250)', rgb: 'rgb(10, 24, 40)' },
      { name: 'Background', hex: '#F8F9FA', oklch: 'oklch(0.98 0 0)', rgb: 'rgb(248, 249, 250)' }
    ]
  },
  {
    id: 'gc-semantic',
    name: 'GC Semantic Colors',
    category: 'Government',
    description: 'Status and feedback colors following GC design system',
    colors: [
      { name: 'Success', hex: '#2E8540', oklch: 'oklch(0.55 0.15 150)', rgb: 'rgb(46, 133, 64)' },
      { name: 'Warning', hex: '#FF9900', oklch: 'oklch(0.75 0.16 65)', rgb: 'rgb(255, 153, 0)' },
      { name: 'Error', hex: '#D3080C', oklch: 'oklch(0.50 0.22 25)', rgb: 'rgb(211, 8, 12)' },
      { name: 'Info', hex: '#269ABC', oklch: 'oklch(0.60 0.12 220)', rgb: 'rgb(38, 154, 188)' },
      { name: 'Neutral', hex: '#6C757D', oklch: 'oklch(0.52 0.01 250)', rgb: 'rgb(108, 117, 125)' }
    ]
  },
  {
    id: 'gc-grayscale',
    name: 'GC Grayscale',
    category: 'Government',
    description: 'Neutral grays for text, borders, and backgrounds',
    colors: [
      { name: 'Gray 900', hex: '#212529', oklch: 'oklch(0.18 0 0)', rgb: 'rgb(33, 37, 41)' },
      { name: 'Gray 700', hex: '#495057', oklch: 'oklch(0.38 0 0)', rgb: 'rgb(73, 80, 87)' },
      { name: 'Gray 500', hex: '#6C757D', oklch: 'oklch(0.52 0 0)', rgb: 'rgb(108, 117, 125)' },
      { name: 'Gray 300', hex: '#CED4DA', oklch: 'oklch(0.85 0 0)', rgb: 'rgb(206, 212, 218)' },
      { name: 'Gray 100', hex: '#F8F9FA', oklch: 'oklch(0.98 0 0)', rgb: 'rgb(248, 249, 250)' }
    ]
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    category: 'Professional',
    description: 'Cool and professional blue tones',
    colors: [
      { name: 'Deep Ocean', hex: '#0B4F6C', oklch: 'oklch(0.35 0.10 240)', rgb: 'rgb(11, 79, 108)' },
      { name: 'Sea Blue', hex: '#1E88E5', oklch: 'oklch(0.58 0.16 250)', rgb: 'rgb(30, 136, 229)' },
      { name: 'Sky Light', hex: '#64B5F6', oklch: 'oklch(0.72 0.12 250)', rgb: 'rgb(100, 181, 246)' },
      { name: 'Foam', hex: '#BBDEFB', oklch: 'oklch(0.88 0.06 250)', rgb: 'rgb(187, 222, 251)' },
      { name: 'Mist', hex: '#E3F2FD', oklch: 'oklch(0.96 0.02 250)', rgb: 'rgb(227, 242, 253)' }
    ]
  },
  {
    id: 'sunset-warmth',
    name: 'Sunset Warmth',
    category: 'Vibrant',
    description: 'Warm sunset-inspired palette',
    colors: [
      { name: 'Deep Purple', hex: '#6A1B9A', oklch: 'oklch(0.38 0.18 310)', rgb: 'rgb(106, 27, 154)' },
      { name: 'Magenta', hex: '#D81B60', oklch: 'oklch(0.52 0.22 350)', rgb: 'rgb(216, 27, 96)' },
      { name: 'Coral', hex: '#FF6F61', oklch: 'oklch(0.68 0.18 25)', rgb: 'rgb(255, 111, 97)' },
      { name: 'Peach', hex: '#FFAB91', oklch: 'oklch(0.78 0.12 40)', rgb: 'rgb(255, 171, 145)' },
      { name: 'Cream', hex: '#FFE0B2', oklch: 'oklch(0.90 0.06 65)', rgb: 'rgb(255, 224, 178)' }
    ]
  },
  {
    id: 'forest-fresh',
    name: 'Forest Fresh',
    category: 'Natural',
    description: 'Earthy greens and natural tones',
    colors: [
      { name: 'Forest', hex: '#1B5E20', oklch: 'oklch(0.35 0.12 145)', rgb: 'rgb(27, 94, 32)' },
      { name: 'Leaf', hex: '#43A047', oklch: 'oklch(0.58 0.16 145)', rgb: 'rgb(67, 160, 71)' },
      { name: 'Sage', hex: '#81C784', oklch: 'oklch(0.74 0.10 145)', rgb: 'rgb(129, 199, 132)' },
      { name: 'Mint', hex: '#C8E6C9', oklch: 'oklch(0.88 0.05 145)', rgb: 'rgb(200, 230, 201)' },
      { name: 'Frost', hex: '#E8F5E9', oklch: 'oklch(0.96 0.02 145)', rgb: 'rgb(232, 245, 233)' }
    ]
  },
  {
    id: 'lavender-dream',
    name: 'Lavender Dream',
    category: 'Pastel',
    description: 'Soft, calming lavender hues',
    colors: [
      { name: 'Deep Lavender', hex: '#673AB7', oklch: 'oklch(0.42 0.18 300)', rgb: 'rgb(103, 58, 183)' },
      { name: 'Purple', hex: '#9575CD', oklch: 'oklch(0.58 0.14 300)', rgb: 'rgb(149, 117, 205)' },
      { name: 'Lilac', hex: '#B39DDB', oklch: 'oklch(0.68 0.10 300)', rgb: 'rgb(179, 157, 219)' },
      { name: 'Pale Lilac', hex: '#D1C4E9', oklch: 'oklch(0.80 0.06 300)', rgb: 'rgb(209, 196, 233)' },
      { name: 'Whisper', hex: '#EDE7F6', oklch: 'oklch(0.92 0.02 300)', rgb: 'rgb(237, 231, 246)' }
    ]
  },
  {
    id: 'monochrome-elegance',
    name: 'Monochrome Elegance',
    category: 'Monochrome',
    description: 'Sophisticated grayscale palette',
    colors: [
      { name: 'Black', hex: '#000000', oklch: 'oklch(0 0 0)', rgb: 'rgb(0, 0, 0)' },
      { name: 'Charcoal', hex: '#424242', oklch: 'oklch(0.30 0 0)', rgb: 'rgb(66, 66, 66)' },
      { name: 'Slate', hex: '#757575', oklch: 'oklch(0.52 0 0)', rgb: 'rgb(117, 117, 117)' },
      { name: 'Silver', hex: '#BDBDBD', oklch: 'oklch(0.77 0 0)', rgb: 'rgb(189, 189, 189)' },
      { name: 'White', hex: '#FFFFFF', oklch: 'oklch(1 0 0)', rgb: 'rgb(255, 255, 255)' }
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
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background 0.2s ease;
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
  background: white;
  color: oklch(0.45 0.12 250);
  border: 2px solid oklch(0.45 0.12 250);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.gc-btn-secondary:hover {
  background: oklch(0.96 0.01 250);
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
    html: '<div class="gc-alert-success"><strong>Success:</strong> Your application has been submitted.</div>',
    css: `.gc-alert-success {
  background: oklch(0.95 0.08 150);
  border-left: 4px solid oklch(0.55 0.15 150);
  color: oklch(0.25 0.08 150);
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
}

.gc-alert-success strong {
  font-weight: 700;
  display: block;
  margin-bottom: 0.25rem;
}`
  },
  {
    id: 'gc-input-field',
    name: 'GC Input Field',
    category: 'GC Forms',
    tags: ['input', 'government', 'form'],
    description: 'Accessible input field following GC standards',
    html: '<div class="gc-input-wrapper"><label for="email">Email Address</label><input type="email" id="email" class="gc-input" /></div>',
    css: `.gc-input-wrapper {
  margin: 1rem 0;
}

.gc-input-wrapper label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: oklch(0.20 0 0);
}

.gc-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid oklch(0.75 0 0);
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.gc-input:focus {
  outline: none;
  border-color: oklch(0.45 0.12 250);
  box-shadow: 0 0 0 3px oklch(0.85 0.15 90 / 0.3);
}`
  },
  {
    id: 'glass-card',
    name: 'Glass Card',
    category: 'Cards',
    tags: ['card', 'glass', 'modern'],
    description: 'Modern glassmorphic card design',
    html: '<div class="glass-card"><h3>Card Title</h3><p>Card content with glass effect</p></div>',
    css: `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
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

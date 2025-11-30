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
  colors: {
    name: string
    hex: string
    oklch: string
    rgb: string
  }[]
  description: string
}

export interface StyleTemplate {
  id: string
  name: string
  category: string
  tags: string[]
  css: string
  html: string
  description: string
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
    tags: ['layout', 'center', 'flex'],
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    description: 'Center content both horizontally and vertically'
  },
  {
    id: 'flex-between',
    name: 'Flex Space Between',
    category: 'Flexbox',
    tags: ['layout', 'spacing', 'flex'],
    code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
    description: 'Distribute items with space between them'
  },
  {
    id: 'flex-column',
    name: 'Flex Column Stack',
    category: 'Flexbox',
    tags: ['layout', 'vertical', 'flex'],
    code: `.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}`,
    description: 'Stack items vertically with consistent spacing'
  },
  {
    id: 'grid-responsive',
    name: 'Responsive Grid',
    category: 'Grid',
    tags: ['layout', 'responsive', 'grid'],
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}`,
    description: 'Auto-responsive grid that adapts to container width'
  },
  {
    id: 'grid-3col',
    name: '3 Column Grid',
    category: 'Grid',
    tags: ['layout', 'columns', 'grid'],
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}`,
    description: 'Simple three column layout with equal widths'
  },
  {
    id: 'fade-in',
    name: 'Fade In Animation',
    category: 'Animation',
    tags: ['animation', 'opacity', 'entrance'],
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
    description: 'Create border with gradient effect'
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
    description: 'Calming blues and teals for corporate applications',
    colors: [
      { name: 'Primary', hex: '#0066CC', oklch: 'oklch(0.50 0.14 250)', rgb: 'rgb(0, 102, 204)' },
      { name: 'Secondary', hex: '#00A3A3', oklch: 'oklch(0.60 0.11 195)', rgb: 'rgb(0, 163, 163)' },
      { name: 'Accent', hex: '#66D9EF', oklch: 'oklch(0.82 0.10 210)', rgb: 'rgb(102, 217, 239)' },
      { name: 'Background', hex: '#F0F8FF', oklch: 'oklch(0.97 0.01 240)', rgb: 'rgb(240, 248, 255)' },
      { name: 'Text', hex: '#1A2B3C', oklch: 'oklch(0.20 0.02 250)', rgb: 'rgb(26, 43, 60)' }
    ]
  },
  {
    id: 'sunset-glow',
    name: 'Sunset Glow',
    category: 'Vibrant',
    description: 'Warm oranges and purples for energetic designs',
    colors: [
      { name: 'Primary', hex: '#FF6B35', oklch: 'oklch(0.65 0.20 35)', rgb: 'rgb(255, 107, 53)' },
      { name: 'Secondary', hex: '#A855F7', oklch: 'oklch(0.58 0.24 300)', rgb: 'rgb(168, 85, 247)' },
      { name: 'Accent', hex: '#FFD166', oklch: 'oklch(0.85 0.13 85)', rgb: 'rgb(255, 209, 102)' },
      { name: 'Background', hex: '#FFF9F0', oklch: 'oklch(0.98 0.01 70)', rgb: 'rgb(255, 249, 240)' },
      { name: 'Text', hex: '#2D1B2E', oklch: 'oklch(0.18 0.03 320)', rgb: 'rgb(45, 27, 46)' }
    ]
  },
  {
    id: 'forest-mist',
    name: 'Forest Mist',
    category: 'Natural',
    description: 'Earthy greens for organic and wellness brands',
    colors: [
      { name: 'Primary', hex: '#2D6A4F', oklch: 'oklch(0.42 0.08 155)', rgb: 'rgb(45, 106, 79)' },
      { name: 'Secondary', hex: '#52B788', oklch: 'oklch(0.68 0.10 160)', rgb: 'rgb(82, 183, 136)' },
      { name: 'Accent', hex: '#95D5B2', oklch: 'oklch(0.80 0.08 165)', rgb: 'rgb(149, 213, 178)' },
      { name: 'Background', hex: '#F8FBF6', oklch: 'oklch(0.98 0.005 140)', rgb: 'rgb(248, 251, 246)' },
      { name: 'Text', hex: '#1B3A2F', oklch: 'oklch(0.24 0.03 160)', rgb: 'rgb(27, 58, 47)' }
    ]
  },
  {
    id: 'lavender-dreams',
    name: 'Lavender Dreams',
    category: 'Pastel',
    description: 'Soft purples and pinks for gentle interfaces',
    colors: [
      { name: 'Primary', hex: '#B794F6', oklch: 'oklch(0.70 0.15 295)', rgb: 'rgb(183, 148, 246)' },
      { name: 'Secondary', hex: '#F8B4D9', oklch: 'oklch(0.80 0.12 340)', rgb: 'rgb(248, 180, 217)' },
      { name: 'Accent', hex: '#D4A5F9', oklch: 'oklch(0.75 0.13 305)', rgb: 'rgb(212, 165, 249)' },
      { name: 'Background', hex: '#FBF7FF', oklch: 'oklch(0.98 0.01 300)', rgb: 'rgb(251, 247, 255)' },
      { name: 'Text', hex: '#3D2B4F', oklch: 'oklch(0.25 0.04 295)', rgb: 'rgb(61, 43, 79)' }
    ]
  },
  {
    id: 'midnight-slate',
    name: 'Midnight Slate',
    category: 'Monochrome',
    description: 'Sophisticated grays for minimal elegance',
    colors: [
      { name: 'Primary', hex: '#475569', oklch: 'oklch(0.40 0.01 250)', rgb: 'rgb(71, 85, 105)' },
      { name: 'Secondary', hex: '#64748B', oklch: 'oklch(0.52 0.01 250)', rgb: 'rgb(100, 116, 139)' },
      { name: 'Accent', hex: '#94A3B8', oklch: 'oklch(0.68 0.01 250)', rgb: 'rgb(148, 163, 184)' },
      { name: 'Background', hex: '#F8FAFC', oklch: 'oklch(0.98 0 0)', rgb: 'rgb(248, 250, 252)' },
      { name: 'Text', hex: '#1E293B', oklch: 'oklch(0.20 0.01 250)', rgb: 'rgb(30, 41, 59)' }
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
  margin: 1rem 0;
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
  padding: 2rem;
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 600;
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
  opacity: 0.9;
  position: relative;
  z-index: 1;
}`
  },
  {
    id: 'pill-badge',
    name: 'Pill Badge',
    category: 'Badges',
    tags: ['badge', 'label', 'status'],
    description: 'Rounded badge for tags and status',
    html: '<span class="pill-badge">New</span>',
    css: `.pill-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background: #667eea;
  border-radius: 9999px;
  white-space: nowrap;
}

.pill-badge.success {
  background: #10b981;
}

.pill-badge.warning {
  background: #f59e0b;
}

.pill-badge.error {
  background: #ef4444;
}`
  },
  {
    id: 'neumorphic-card',
    name: 'Neumorphic Card',
    category: 'Cards',
    tags: ['card', 'neumorphism', 'soft'],
    description: 'Soft UI card with neumorphic design',
    html: '<div class="neumorphic-card"><h3>Neumorphic Design</h3><p>Soft UI elements</p></div>',
    css: `.neumorphic-card {
  padding: 2rem;
  background: #e0e5ec;
  border-radius: 1.5rem;
  box-shadow: 
    9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.neumorphic-card h3 {
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1.5rem;
}

.neumorphic-card p {
  margin: 0;
  color: #666;
}`
  }
]

export const graphicElements: GraphicElement[] = [
  {
    id: 'wave-divider',
    name: 'Wave Divider',
    category: 'Dividers',
    customizable: true,
    description: 'Smooth wave shape for section dividers',
    svg: `<svg viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"/>
</svg>`
  },
  {
    id: 'maple-leaf',
    name: 'Maple Leaf',
    category: 'GC Icons',
    customizable: true,
    description: 'Canadian maple leaf icon',
    svg: `<svg viewBox="0 0 100 100">
  <path fill="currentColor" d="M50,15 L53,35 L63,30 L58,45 L75,45 L62,55 L70,70 L55,63 L50,80 L45,63 L30,70 L38,55 L25,45 L42,45 L37,30 L47,35 Z"/>
</svg>`
  },
  {
    id: 'blob-1',
    name: 'Organic Blob',
    category: 'Shapes',
    customizable: true,
    description: 'Abstract organic shape for backgrounds',
    svg: `<svg viewBox="0 0 200 200">
  <path fill="currentColor" d="M43.4,-62.1C56.2,-54.5,67,-43.2,73.4,-29.8C79.8,-16.4,81.8,-1,78.3,13.3C74.8,27.6,65.8,40.8,54.3,51.2C42.8,61.6,28.8,69.2,13.5,72.4C-1.8,75.6,-18.4,74.4,-32.7,68.7C-47,63,-59,52.8,-67.8,40.2C-76.6,27.6,-82.2,12.6,-81.9,-2.5C-81.6,-17.6,-75.4,-33.8,-64.9,-44.8C-54.4,-55.8,-39.6,-61.6,-25.3,-68.5C-11,-75.4,3.8,-83.4,18.4,-84C33,-84.6,30.6,-69.7,43.4,-62.1Z" transform="translate(100 100)" />
</svg>`
  },
  {
    id: 'dots-pattern',
    name: 'Dots Pattern',
    category: 'Patterns',
    customizable: true,
    description: 'Subtle dot grid pattern for backgrounds',
    svg: `<svg width="100" height="100">
  <defs>
    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.5" fill="currentColor" opacity="0.3"/>
    </pattern>
  </defs>
  <rect width="100" height="100" fill="url(#dots)"/>
</svg>`
  },
  {
    id: 'arrow-divider',
    name: 'Arrow Divider',
    category: 'Dividers',
    customizable: true,
    description: 'Downward pointing arrow divider',
    svg: `<svg viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" fill="currentColor"/>
</svg>`
  },
  {
    id: 'triangle-pattern',
    name: 'Triangle Pattern',
    category: 'Patterns',
    customizable: true,
    description: 'Geometric triangle background pattern',
    svg: `<svg width="100" height="100">
  <defs>
    <pattern id="triangles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <polygon points="0,0 20,0 10,20" fill="currentColor" opacity="0.2"/>
      <polygon points="20,20 40,20 30,40" fill="currentColor" opacity="0.2"/>
    </pattern>
  </defs>
  <rect width="100" height="100" fill="url(#triangles)"/>
</svg>`
  },
  {
    id: 'curve-divider',
    name: 'Curve Divider',
    category: 'Dividers',
    customizable: true,
    description: 'Elegant curve for section transitions',
    svg: `<svg viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="currentColor"/>
</svg>`
  },
  {
    id: 'blob-2',
    name: 'Fluid Blob',
    category: 'Shapes',
    customizable: true,
    description: 'Flowing organic shape',
    svg: `<svg viewBox="0 0 200 200">
  <path fill="currentColor" d="M47.1,-65.3C59.9,-58.5,68.4,-43.8,72.8,-28.3C77.2,-12.8,77.5,3.5,72.8,17.8C68.1,32.1,58.4,44.4,46.3,53.8C34.2,63.2,19.7,69.7,3.9,71.8C-11.9,73.9,-29.1,71.6,-42.8,63.5C-56.5,55.4,-66.7,41.5,-71.7,26C-76.7,10.5,-76.5,-6.6,-71.2,-22.1C-65.9,-37.6,-55.5,-51.5,-42.1,-57.9C-28.7,-64.3,-12.8,-63.2,2.6,-66.7C18,-70.2,34.3,-72.1,47.1,-65.3Z" transform="translate(100 100)" />
</svg>`
  },
  {
    id: 'grid-pattern',
    name: 'Grid Pattern',
    category: 'Patterns',
    customizable: true,
    description: 'Clean grid lines for technical backgrounds',
    svg: `<svg width="100" height="100">
  <defs>
    <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    </pattern>
  </defs>
  <rect width="100" height="100" fill="url(#grid)"/>
</svg>`
  }
]

export const categories = {
  css: ['Flexbox', 'Grid', 'Animation', 'Typography', 'Shadows', 'Effects', 'Borders', 'Accessibility', 'GC Components'],
  colors: ['Government', 'Professional', 'Vibrant', 'Natural', 'Pastel', 'Monochrome'],
  styles: ['GC Buttons', 'GC Alerts', 'GC Forms', 'Buttons', 'Cards', 'Forms', 'Badges'],
  graphics: ['GC Icons', 'Dividers', 'Shapes', 'Patterns']
}

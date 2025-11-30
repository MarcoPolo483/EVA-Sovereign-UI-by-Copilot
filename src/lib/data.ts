export interface CSSSnippet {
  id: string
  name: string
  category: string
  tags: string[]
  code: string
  description: string
}

  name: string
  colors: {
    hex: strin
    rgb: string
  descripti

  id: string
  category: strin
  css: string
  des

 

  description: string
}
export const c
    id: 'flex-cent
    category: 'F
    code: `.c
  justify-cont
}`,
 

    category: 'Flexbox',
    code: `.
  justify-cont
}`,
  },
    id: 'flex-column'
    category:
 

}`,
  }
    id: 'grid-responsi
    category: 'Grid',
    code: `.grid {
  grid-template-columns: repeat(auto-fi
}`,
  },
    id: 'grid-3col',
    category: 'Grid',
   
  grid-template-columns: repeat(3, 1fr);
}`,
  }
    id: 'fade-in',
    category: 'Animation',
    code: `@keyframes fa
    opacity: 0;
  to {
  }

  animation: fadeIn 0.
   
  {
    
   
  from {
    transform: translateY(20px
  to {
    transform: translateY(0);
}
.slide-up {
}`,
  },
   
    category: 'Accessibility',
    
  o
}`,
  },
    id: 'gc-skip-link
    category: 'Accessibility',
    code: `.skip-l
  top: -40px;
  background: #000;
  padding: 8px
}
.skip-link:focus {
}`,
  }
    id: 'truncate',
    category: 'Typography'
    code: `.truncate 
  overflow: hidden;
}`,
  },
    id: 'line-clamp',
    category
   
  -webkit-line-clamp: 3;
  ov
   
  {
    name: 'Smooth Shadow',
    tags: ['shadow', 'elev
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.
}
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
      { name: 'Gray 500', hex: '#6C757D', oklch: 'okl
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
   
 

    id: 'midnight-slate',
   
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
  font-weight: 600;
  cursor: pointer;
}
.gc-btn-secondary:hover {
}
.gc-btn-secondary:focus-visible {
  outline-offset: 2px;
  },
    id: 'gc-alert-success',
    category: 'GC Alerts',
    d
    
  b
  padding: 1rem 1.5rem
  border-radius: 0.25rem

  font-weight: 700;
  margin-bott
  },
    id: 'gc-input-field',
    category: 'GC Forms',
    description: 'Accessible input field following GC standards',
    css: `.gc-input-wrapper {
}
.gc-
  f
  color: oklch(0.20 0 

  width: 100%;
  border: 2px solid oklch(0.75 0 0);
  font-size: 
}
.gc-input:focus {
  border-color: oklch(0.45 0.12 250);
}`
  {
    n
    
   
  background: rgba(255, 25
  padding: 2rem;
  border-radius: 1rem;
}
.glass-card h
  font-size: 1.5rem;
}
.glass-card p {
  opacity: 0.9;
  },
    i
    
   
    css: `.gradient-card 
  color: white;
  border-radius: 1rem;
  overflow: hidden;

  content: '';
  top: 0;
  right: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.2) 100%);
  transition: opacity 0.3s;

  }
]

export const styleTemplates: StyleTemplate[] = [
  f
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
  
  },

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
 

.gc-btn-secondary:hover {
  background: oklch(0.96 0.01 250);
 

.gc-btn-secondary:focus-visible {
  outline: 3px solid oklch(0.85 0.15 90);
  outline-offset: 2px;
}`
]
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
    description: 
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
    id: 'arrow
  padding: 0.75rem;
  border: 2px solid oklch(0.75 0 0);
  border-radius: 0.25rem;
    svg: `<svg vie
  transition: border-color 0.2s ease;
 

.gc-input:focus {
  outline: none;
  border-color: oklch(0.45 0.12 250);
  box-shadow: 0 0 0 3px oklch(0.85 0.15 90 / 0.3);
  
  },
   
    id: 'glass-card',
    name: 'Glass Card',
    category: 'Cards',
    tags: ['card', 'glass', 'modern'],
    description: 'Modern glassmorphic card design',
    html: '<div class="glass-card"><h3>Card Title</h3><p>Card content with glass effect</p></div>',
    css: `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  },
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
 

.glass-card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  styles: ['GC Butt
}

.glass-card p {

  opacity: 0.9;

  },

    id: 'gradient-card',
    name: 'Gradient Card',
    category: 'Cards',
    tags: ['card', 'gradient', 'modern'],
    description: 'Card with gradient background effect',
    html: '<div class="gradient-card"><h3>Featured Content</h3><p>Eye-catching gradient design</p></div>',
    css: `.gradient-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  padding: 2rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;


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


.gradient-card:hover::before {
  opacity: 1;


.gradient-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
}




  position: relative;
  z-index: 1;









































































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
























































































  css: ['Flexbox', 'Grid', 'Animation', 'Typography', 'Shadows', 'Effects', 'Borders', 'Accessibility', 'GC Components'],
  colors: ['Government', 'Professional', 'Vibrant', 'Natural', 'Pastel', 'Monochrome'],
  styles: ['GC Buttons', 'GC Alerts', 'GC Forms', 'Buttons', 'Cards', 'Forms', 'Badges'],
  graphics: ['GC Icons', 'Dividers', 'Shapes', 'Patterns']


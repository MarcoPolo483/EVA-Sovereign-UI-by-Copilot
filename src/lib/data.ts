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
}
expor
 

  html: string
}
export interfa
  name: string
  customizable: 
  svg: string

  {
 

  display: flex;
  align-item
    descriptio
  {
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
    name: 'Flex 
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
    tags: ['grid', 'colum
  display: g
  g
    description: 'Simple 3-column equal width grid'
  {
   
    tags: ['animation', 'f
  from {
  }
    opacity: 1;
}
.fade-in {
}`,
  },
   
    category: 'Animation',
    
   
  }
    opacity: 1;
  }

  animation: slideUp
    description:
  {
    name: 'G
   
  outline: 3px solid oklch(0.85 0.15 90);
  bo
   
  {
    name: 'GC Skip Link',
    tags: ['accessibility'
  position: absolute;
  left: 0;
  color:
  z-index: 100;

  top:
    description
  {
 

  white-sp
  text-overflow: ellipsis;
   
  {
    
   
  display: -webkit-
  -webkit-box-orient: vertical;
}`,
  },
    id: 'smooth-shadow',
    cate
    code: `.car
    0 1px 3px rgba(0, 0, 0, 0.12
  t

  box-shadow: 
    0 6px 6px rgba(0, 0, 0, 0
   
 

    tags: [
  background: rgba(255, 255, 255, 0
  b
}`,
  },
   
    category: 'Borders',
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

  },
    id: 'forest-fresh',
    category: 'Natural',
    colors: [
 

    ]
  {
    name: 'Lavender Dream',
    description: 'Soft, calmi
   
      { name: 'Lilac', hex: '#B39DDB', oklch: 'oklch(0.68 0.10 
   
 

    category: 'Monochrome',
   
      { name: 'Charcoa
      { name: 'Silver', hex: '#
    ]
]
export const 
    id: 'gc-button-primary',
    category: 'GC Buttons',
    description: 'Official Canada.ca primary button style',
    css: `.gc-btn-primary {
  color: white;
  pad
  fo
  c
}
.gc-btn-primary:hover {
}
.gc-btn-primary:focus-visible {
  outline-off
  },
    id: 'gc-button-secondary',
    category: 'GC Buttons',
    description: 'Canada.ca secondary button for less prominent actions',
    css: `.gc-btn-secondary {
  col
  pa
  f
  cursor: pointer;
}
.gc-btn-secondary:hover {
}
.gc-btn-secon
  outline-offset: 2px;
  },
    id: 'gc-alert-success',
    category: 'GC Alerts',
    description: 'Canada.ca success message pattern',
    c
  bo
  p
}
.gc-alert-success strong 
  display: block;
}`
  {
    name: 'GC Input Field',
    tags: ['input', 'government', 'form'],
    html: '<div class="gc-input-wrapper"><label for="email">Email Address</label><input type="em
  margin: 1rem 0;

  dis
  ma
}
.gc-input {
  padding: 0.75rem;
  border-radius: 0.25rem;
  transition: border-color 0.2s ease;

  outline: none;
  box-shadow: 0 0 0 3px oklch(0.85 0.15 90 / 0.3);
  },
    id: 'glass-card',
    category: 'Cards',
    d
    
  b
  padding: 2rem;
  box-shadow: 0 8px 32px r

  margin: 0 0 1rem 0;
}
.glass-card p {
  opacity: 0.9;
  },
    id: 'gradient-card',
    category: 'Cards',
    d
    
  c
  border-radius: 1rem;
  overflow: hidden;

  content: '';
  top: 0;
  right: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.2) 100%);
  transition: opacity 0.3s;

  opacity: 1;

  ma
  f
  z-index: 1;

  margin: 0;
  z-index: 1;
  }

  {
    name: 'Maple Leaf',
    customizable: true,
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
</svg
  {
   
    customizable: true,
    svg: `<svg viewBox="0 0 24 2
</svg>`
  {
    name: 'Wa
    customizable: true,
    svg: `<svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/200
  <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.1
</svg>`
  {
    n
   
 

  },
   
    category: 'Patterns',
    description: 'Repeating di
  <pattern id="diagonalLine
  </pattern>
</svg>`
  {
    name: 'Dots Grid Patter
    customizable: true,
    svg: `<svg 
    <circle cx=
  <rect width="100" height
  }

  css: ['Flexbox', 'Grid'
  styles: ['GC But
}









































































































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

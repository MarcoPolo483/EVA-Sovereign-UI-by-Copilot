export interface CSSSnippet {
  name: stri
  tags: string
  description: str

  id: string
  category: string
 

export interface ColorPalette {
  id: string
  name: string
  category: string
  description: string
  colors: {
    name: string
    hex: string
    oklch: string
  description: 
  css


  category: string
  customizab
}
export const cssSn
    id: 'flex-ce
    category: 'Flexbo
    code: `.ce
  justify-con
}

    id: 'flex-between',
    category
    code: `.sp
  justify-content:
}`,
  },
    id: 'flex
 

  flex-direction: column;
}`,
  },
    id: 'grid-3-col',
    category: 'Flexbox',
    tags: ['flexbox', 'centering', 'layout'],
    code: `.center {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    description: 'Perfect centering with flexbox'
  },
   
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
  f
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
  o
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
}
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
   
    description: 'Smooth fade in effect'
    
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
  b
    description: 'Element slides up while fading in'
}`,
  {
    id: 'gc-focus-ring',
    category: 'Borders',
    code: `.gradient-border {
  border-radius: 12px;
  background: linear-gradient(135deg,

  content: '';
  inset: 2px;
  b
    description: 'Modern gradient border effect'
  {
   
    tags: ['button', 'g
  background: oklch(0.45 
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
}
.gc-button:hover {
}`,
  },
    id: 'gc-alert-p
    category: 
    code: `.gc-
  padding: 1rem
 

  background: oklc
  color: 

  background: oklch(0.95 0.12 80);
  co

  background: oklch
  color: oklch(0.35 0.15 2
    description: 'Canada.ca
]
export const colorPale
    id: 'gc-official',
    category: 'Gove
    colors: [
   
      { name: 'GC Light Gray', hex: '#E1E4E7', oklch: 'okl
    
  {
    name: 'Ocean Bree
    description: 'Cool, profe
      { name: 'Deep Ocean',
      { name: 'Teal', hex: '#14B8A6', oklch:
      { name: 'Foam', hex:
  },
    id: 'sunset-warmth',
    category: 'Vibrant',
    colors: [
   
      { name: 'Coral', hex: '#FB923C', oklch: 'oklch(0.72 
    
  {
    name: 'Forest Fresh'
    description: 'Earthy g
      { name: 'Forest', 
      { name: 'Sage', hex: '#6EE7B7', oklch
      { name: 'Min
  },
    id: 'lavender-dream',
    category: 'Pastel',
    colors: [
 

    ]
  {
    name: 'Monochrome Elegant',
    description: 'Sophisticated gr
   
      { name: 'Silver', hex: '#A3A3A3', oklch: 'oklch(0.68
    
  }

  {
    name: 'GC Primary Bu
    tags: ['button', 'government', 'pr
    html: '<button 
  background: oklch(0.45 0.12 250);
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;

  background: oklch(0.35 0.12 250);

  o
}`
  {
    name: 'GC Secondary 
    tags: ['button', 'government', 'seconda
    html: '<button class="gc-
  background: transpa
  padding: 0.75rem 1.5
  border: 2px s
  cursor: pointer;



  outline: 3px
}`
  {
    name: 'GC Succes
    tags: ['alert', 'g
   
  background: oklch(0.95 0.08 150);
  co
  b
}
.gc-alert-success strong {
  font-weight: 700;
}`
  {
    name: 'GC Input Field',
    tags: ['inp
    html: '<div class="gc-
  display: flex
  gap: 0.5rem;
}
.

  margin-bottom: 0

  w
  border: 1px solid oklch(0.70 0 0);
  fo
}
.gc-input:focus {
  outline: none;
}`
  {
    name: 'Glass Card'
    tags: ['card', 'glass
    html: '<div class="
  background: rgb
  border: 1px solid rgba(
 

.glass-card h3 {
  font-size: 1.5rem;

  margin: 0;
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
}
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
  {
    name: 'Forest Fresh',
    category: 'Shapes',
    description: 'Earthy greens and browns',
    svg: `<sv
      { name: 'Forest', hex: '#064E3B', oklch: 'oklch(0.32 0.07 165)', rgb: 'rgb(6, 78, 59)' },
      { name: 'Emerald', hex: '#10B981', oklch: 'oklch(0.70 0.15 160)', rgb: 'rgb(16, 185, 129)' },
      { name: 'Sage', hex: '#6EE7B7', oklch: 'oklch(0.85 0.12 165)', rgb: 'rgb(110, 231, 183)' },
      { name: 'Moss', hex: '#84CC16', oklch: 'oklch(0.75 0.18 120)', rgb: 'rgb(132, 204, 22)' },
      { name: 'Mint', hex: '#D1FAE5', oklch: 'oklch(0.95 0.05 165)', rgb: 'rgb(209, 250, 229)' }
    d
  },
  <
    id: 'lavender-dream',
  },
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
  </pattern>
    description: 'Sophisticated grayscale palette',
    colors: [
      { name: 'Black', hex: '#0A0A0A', oklch: 'oklch(0.10 0 0)', rgb: 'rgb(10, 10, 10)' },
      { name: 'Charcoal', hex: '#404040', oklch: 'oklch(0.35 0 0)', rgb: 'rgb(64, 64, 64)' },
      { name: 'Silver', hex: '#A3A3A3', oklch: 'oklch(0.68 0 0)', rgb: 'rgb(163, 163, 163)' },
      { name: 'Light Gray', hex: '#D4D4D4', oklch: 'oklch(0.85 0 0)', rgb: 'rgb(212, 212, 212)' },
      { name: 'Off White', hex: '#FAFAFA', oklch: 'oklch(0.98 0 0)', rgb: 'rgb(250, 250, 250)' }
    <
  }
<

export const styleTemplates: StyleTemplate[] = [
  {
  colors: ['Government', 'Pr
    name: 'GC Primary Button',
}
    tags: ['button', 'government', 'primary'],

    html: '<button class="gc-btn-primary">Submit Application</button>',

  background: oklch(0.45 0.12 250);

  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;



  background: oklch(0.35 0.12 250);



  outline: 3px solid oklch(0.85 0.15 90);
  outline-offset: 2px;
}`

  {

    name: 'GC Secondary Button',

    tags: ['button', 'government', 'secondary'],

    html: '<button class="gc-btn-secondary">Cancel</button>',

  background: transparent;
  color: oklch(0.45 0.12 250);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border: 2px solid oklch(0.45 0.12 250);
  border-radius: 0.25rem;




  background: oklch(0.95 0.02 250);


.gc-btn-secondary:focus-visible {
  outline: 3px solid oklch(0.85 0.15 90);

}`

  {

    name: 'GC Success Alert',

    tags: ['alert', 'government', 'success'],

    html: '<div class="gc-alert-success"><strong>Success</strong> Your application has been submitted.</div>',
    css: `.gc-alert-success {
  background: oklch(0.95 0.08 150);
  border-left: 4px solid oklch(0.55 0.15 150);
  color: oklch(0.25 0.08 150);
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  margin: 1rem 0;


.gc-alert-success strong {

  font-weight: 700;
  margin-bottom: 0.25rem;

  },

    id: 'gc-input-field',

    category: 'GC Forms',

    description: 'Canada.ca form input styling',
    html: '<div class="gc-input-wrapper"><label for="email">Email Address</label><input type="email" id="email" class="gc-input" placeholder="your.email@example.com"></div>',
    css: `.gc-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;



.gc-input-wrapper label {
  font-weight: 600;
  color: oklch(0.25 0 0);
  display: block;
  margin-bottom: 0.5rem;
}


  width: 100%;

  border: 1px solid oklch(0.70 0 0);

  font-size: 1rem;

}

.gc-input:focus {
  border-color: oklch(0.45 0.12 250);


}`

  {

    name: 'Glass Card',

    tags: ['card', 'glass', 'modern'],
    description: 'Glassmorphism card effect',
    html: '<div class="glass-card"><h3>Modern Card</h3><p>Beautiful glass effect with blur</p></div>',
    css: `.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);














































































































































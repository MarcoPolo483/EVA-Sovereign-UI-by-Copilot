export interface CSSSnippet {
  id: string
  category: st
  tags: string[]
}
export interface
  name: string
 

    rgb: string
  }[]

  id: string
  category: string
  tags: str
  css: string

  id: string
  category: strin
  svg
}

    id: 'flex-center',
    category
    tags: ['fl
  display: flex;
  align-items: center
  },
    id: 'grid-
    category:
 

  gap: 1rem;
  },
    id: 'fade-
    category: 'Ani
    tags: ['animation
  from {
  }
 

export const cssSnippets: CSSSnippet[] = [
  {
    id: 'flex-center',
    name: 'Flex Center',
    category: 'Flexbox',
    description: 'Center content horizontally and vertically',
    tags: ['flexbox', 'center', 'alignment'],
    code: `.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}`
    
.sl
    id: 'grid-responsive',
    name: 'Responsive Grid',
    category: 'Grid',
    description: 'Auto-fit responsive grid layout',
    tags: ['grid', 'responsive', 'layout'],
    code: `.grid-responsive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}`
}`
   
    id: 'fade-in',
    name: 'Fade In Animation',
    category: 'Animation',
    description: 'Smooth fade in effect',
    tags: ['animation', 'fade', 'transition'],
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
}`
    
  {
    id: 'slide-up',
    name: 'Slide Up Animation',
    category: 'Animation',
    description: 'Element slides up while fading in',
    tags: ['animation', 'slide', 'transition'],
    code: `@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
   
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 0.4s ease-out;
}`
  },
  {
    name: 'Lavender Dream'
    description: 'Soft purpl
    category: 'Borders',
    description: 'Create a gradient border effect',
      { name: 'Cream', hex: '#F4ECF7', rgb:
    code: `.gradient-border {
    name: 'Modern Gray',
    description
  border-radius: 12px;
 

  }
  content: '';
  {
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
    css: `.gc-btn-pr
  color: oklch(1 0 0);
}`
  cu
}
.gc-btn-primary:hover {
}
.gc-btn-primary:focus-visib
    description: 'Single line text with ellipsis',
}`
  {
    name: 'GC Secon
    description: 'Canada.c
    html: '<button cla
}`
  },
  {
  transition: background

  background: oklch(0.95
    description: 'Layered smooth shadow effect',
.gc-btn-secondary:focus-visible {
  outline-offset: 2px;
  },
    id: 'gc-alert-success',
    category: 'GC Components',
    tags: ['alert', 'success', 'gove
}`
  b
]

export const colorPalettes: ColorPalette[] = [
  {
    id: 'gc-official',
    name: 'Government of Canada',
    category: 'Government',
    description: 'Official GC brand colors',
    colors: [
      { name: 'GC Red', hex: '#AF3C43', rgb: 'rgb(175, 60, 67)', oklch: 'oklch(0.50 0.12 15)' },
      { name: 'GC Blue', hex: '#26374A', rgb: 'rgb(38, 55, 74)', oklch: 'oklch(0.30 0.04 240)' },
      { name: 'GC Yellow', hex: '#F9C642', rgb: 'rgb(249, 198, 66)', oklch: 'oklch(0.85 0.15 90)' },
      { name: 'GC White', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', oklch: 'oklch(1 0 0)' },
      { name: 'GC Black', hex: '#000000', rgb: 'rgb(0, 0, 0)', oklch: 'oklch(0 0 0)' }
    ]
    
  {
    id: 'sunset-warmth',
    name: 'Sunset Warmth',
    category: 'Vibrant',
    description: 'Warm sunset-inspired palette',
    colors: [
      { name: 'Sunset Orange', hex: '#FF6B35', rgb: 'rgb(255, 107, 53)', oklch: 'oklch(0.68 0.20 35)' },
      { name: 'Coral Pink', hex: '#F7931E', rgb: 'rgb(247, 147, 30)', oklch: 'oklch(0.75 0.18 55)' },
      { name: 'Golden Yellow', hex: '#FDC830', rgb: 'rgb(253, 200, 48)', oklch: 'oklch(0.85 0.16 85)' },
      { name: 'Peach', hex: '#FFB88C', rgb: 'rgb(255, 184, 140)', oklch: 'oklch(0.82 0.12 50)' }
    ]
  },
  {
    description: 'Organ
    name: 'Forest Fresh',
</svg>`
    description: 'Earthy greens and browns',
    name: 'Do
      { name: 'Forest', hex: '#2D5016', rgb: 'rgb(45, 80, 22)', oklch: 'oklch(0.35 0.10 130)' },
      { name: 'Sage', hex: '#87A96B', rgb: 'rgb(135, 169, 107)', oklch: 'oklch(0.68 0.08 125)' },
      { name: 'Mint', hex: '#D1F2A5', rgb: 'rgb(209, 242, 165)', oklch: 'oklch(0.92 0.12 120)' },
      { name: 'Earth Brown', hex: '#8B7355', rgb: 'rgb(139, 115, 85)', oklch: 'oklch(0.55 0.06 60)' }
</svg
  },
   
    id: 'lavender-dream',
    svg: `<svg viewBox="0 0
    category: 'Pastel',
    description: 'Soft purple and lavender tones',
    colors: [
      { name: 'Deep Lavender', hex: '#9B59B6', rgb: 'rgb(155, 89, 182)', oklch: 'oklch(0.55 0.15 300)' },
      { name: 'Soft Lavender', hex: '#C39BD3', rgb: 'rgb(195, 155, 211)', oklch: 'oklch(0.72 0.10 300)' },
      { name: 'Lilac', hex: '#E8DAEF', rgb: 'rgb(232, 218, 239)', oklch: 'oklch(0.88 0.04 300)' },
      { name: 'Cream', hex: '#F4ECF7', rgb: 'rgb(244, 236, 247)', oklch: 'oklch(0.94 0.02 300)' }
    ]
  },
  {
    id: 'modern-gray',
    name: 'Modern Gray',

    description: 'Sophisticated gray scale',
    colors: [
      { name: 'Charcoal', hex: '#2C3E50', rgb: 'rgb(44, 62, 80)', oklch: 'oklch(0.30 0.02 240)' },
      { name: 'Slate', hex: '#7F8C8D', rgb: 'rgb(127, 140, 141)', oklch: 'oklch(0.58 0.01 220)' },
      { name: 'Silver', hex: '#BDC3C7', rgb: 'rgb(189, 195, 199)', oklch: 'oklch(0.78 0.01 240)' },
      { name: 'Cloud', hex: '#ECF0F1', rgb: 'rgb(236, 240, 241)', oklch: 'oklch(0.94 0.005 240)' }

  }


export const styleTemplates: StyleTemplate[] = [
  {

    name: 'GC Primary Button',


    tags: ['button', 'primary', 'government'],
    html: '<button class="gc-btn-primary">Submit</button>',

  background: oklch(0.50 0.12 15);

  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: 600;
  cursor: pointer;




  background: oklch(0.45 0.12 15);



  outline: 3px solid oklch(0.85 0.15 90);
  outline-offset: 2px;
}`

  {

    name: 'GC Secondary Button',


    tags: ['button', 'secondary', 'government'],
    html: '<button class="gc-btn-secondary">Cancel</button>',

  background: transparent;
  color: oklch(0.30 0.04 240);
  padding: 0.75rem 1.5rem;
  border: 2px solid oklch(0.30 0.04 240);
  border-radius: 0.25rem;
  font-weight: 600;





  background: oklch(0.95 0.01 240);


.gc-btn-secondary:focus-visible {
  outline: 3px solid oklch(0.85 0.15 90);

}`

  {

    name: 'GC Success Alert',


    tags: ['alert', 'success', 'government'],
    html: '<div class="gc-alert-success"><strong>Success:</strong> Your form has been submitted.</div>',
    css: `.gc-alert-success {
  background: oklch(0.95 0.08 140);
  border-left: 4px solid oklch(0.55 0.15 140);
  padding: 1rem;
  margin: 1rem 0;


.gc-alert-success strong {

  margin-bottom: 0.25rem;

  },

    id: 'gc-input',

    category: 'GC Forms',
    description: 'Canada.ca input field styling',

    html: '<input type="text" class="gc-input" placeholder="Enter text">',
    css: `.gc-input {
  width: 100%;

  border: 1px solid oklch(0.70 0.01 240);

  font-size: 1rem;
}

.gc-input:focus {
  border-color: oklch(0.30 0.04 240);


}`

  {

    name: 'Glass Card',

    description: 'Modern glassmorphism card',

    html: '<div class="glass-card"><h3>Glass Card</h3><p>Beautiful glassmorphism effect</p></div>',
    css: `.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);




















































































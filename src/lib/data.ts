export interface CSSSnippet {
  id: string
  name: string
  description: str
  description: string
  tags: string[]
  code: string
}

  description: string
    name: st
    oklch: str
  }[]

  id: strin
  category: stri
  tags: string[
  css: string
    rgb: string
  }[]
}

export interface StyleTemplate {
  id: string
  name: string
  {
  description: string
  tags: string[]
  html: string
  css: string
 

export interface GraphicElement {
  id: string
  name: string
  category: string
  description: string
  svg: string
  customizable: boolean
 

export const cssSnippets: CSSSnippet[] = [
  {
    id: 'flex-center',
    name: 'Flex Center',
  grid-template-columns:
}`,
  },
    id: 'fade-in
    category: 'Animation',
    code: `@keyframes 
   
  to {
  }
  {
  animation: fadeIn 0.3
    description: 'Smooth fade i
  {
    name: 'Slide Up Animation',
    tags: ['animation', 'sl
  from {
    opacity: 0;
  to {
   
}
.sli
  {
  },
    id: 'gradient-border
    category: 'Borders',
    code: `.gradient-border {
  background: linear
}
.gradient-border::before 
  position: 
  b
}`,
  },
  {
    category: 'Typogr
    code: `.truncate {
  text-overflow: elli
}`,
  },
    id: 'smooth-
    category: 'Shadows',
    code: `.
   
    0 4px 8px 0 rgba(0, 0, 0, 0.03);
    
  {
export const color
    id: 'gc-official',
    category: 'Government'
    colors: [
      { name: 'GC Red', hex: '
      { 
    ]
  {
    na
    description
   
 

  },
    id: 'sunset-warmth',
}`,
    colors: [
  },
   
    ]
  {
    name: 'Forest Fresh',
    description: 'Earthy greens and browns',
      { name: 'Forest', hex: '#
      { 
      { name: 'Mint', hex: '#D1F
  },
   
    ca
    colors: [
      { name: '
   
 

    name: '
    description: 'Sophisticated gra
   
    description: 'Element slides up while fading in'
  },
  }
    id: 'gradient-border',
    name: 'Gradient Border',
    id: 'gc-btn-primary'
    tags: ['border', 'gradient', 'effect'],
    description: 'Canada.ca p
    html: '<button cla
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2px;
}

.gradient-border::before {
  transition: 
  position: absolute;
.gc-btn-prima
  background: white;
  border-radius: 10px;
}`,
  outline-offset: 2px;
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

    description: 'Single line text with ellipsis'
}
  f
    id: 'smooth-shadow',
    name: 'Smooth Shadow',
    category: 'Shadows',
    tags: ['shadow', 'depth', 'elevation'],
    code: `.smooth-shadow {
  box-shadow: 
    0 1px 2px 0 rgba(0, 0, 0, 0.05),
    0 2px 4px 0 rgba(0, 0, 0, 0.04),
    0 4px 8px 0 rgba(0, 0, 0, 0.03);
  }
    description: 'Layered smooth shadow effect'
  c
 














  },



























    id: 'forest-fresh',

    category: 'Natural',

    colors: [





    ]

  {

    name: 'Lavender Dream',













    category: 'Neutral',







    ]

]



    id: 'gc-btn-primary',

    category: 'GC Components',
    description: 'Canada.ca primary button styling',


    css: `.gc-btn-primary {

  color: oklch(1 0 0);





  transition: background 0.2s;
}

.gc-btn-primary:hover {

}

.gc-btn-primary:focus-visible {



  },

    id: 'gc-btn-secondary',

    category: 'GC Components',
    description: 'Canada.ca secondary button styling',


    css: `.gc-btn-secondary {






  cursor: pointer;
  transition: background 0.2s;
}

.gc-btn-secondary:hover {

}



  outline-offset: 2px;

  },

    id: 'gc-alert-success',

    category: 'GC Components',
    description: 'Canada.ca success alert pattern',









}


  display: block;


}`

  {

    name: 'GC Input Field',


    tags: ['input', 'form', 'government'],





}








.gc-input {

  padding: 0.75rem;

  border-radius: 0.25rem;





  outline: 3px solid oklch(0.85 0.15 90);
  outline-offset: 2px;

  },

    id: 'glass-card',

    category: 'Cards',

    tags: ['card', 'glass', 'modern'],





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

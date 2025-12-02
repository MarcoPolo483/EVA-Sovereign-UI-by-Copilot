(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const n={background:"oklch(1 0 0)",foreground:"oklch(0.25 0 0)",card:"oklch(1 0 0)",cardForeground:"oklch(0.25 0 0)",primary:"oklch(0.30 0.04 250)",primaryForeground:"oklch(0.98 0 0)",secondary:"oklch(0.32 0.04 245)",secondaryForeground:"oklch(0.98 0 0)",accent:"oklch(0.45 0.08 10)",accentForeground:"oklch(0.98 0 0)",destructive:"oklch(0.55 0.22 25)",destructiveForeground:"oklch(0.98 0 0)",muted:"oklch(0.96 0.005 250)",mutedForeground:"oklch(0.50 0.01 250)",border:"oklch(0.90 0.005 250)",input:"oklch(0.90 0.005 250)",ring:"oklch(0.35 0.06 250)"},v=(m,e=10)=>`color-mix(in srgb, ${m} ${100-e}%, black ${e}%)`,u={fontHeading:'"Lato", sans-serif',fontBody:'"Noto Sans", system-ui, -apple-system, sans-serif',weightNormal:400,weightBold:700},o={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",12:"3rem",16:"4rem",20:"5rem"},A={contentMaxWidth:"65ch"},g={xs:"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"},y={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",all:"all 200ms cubic-bezier(0.4, 0, 0.2, 1)",colors:"color 200ms cubic-bezier(0.4, 0, 0.2, 1), background-color 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)",transform:"transform 200ms cubic-bezier(0.4, 0, 0.2, 1)"},f={fadeIn:{name:"fadeIn",keyframes:`
      from { opacity: 0; }
      to { opacity: 1; }
    `,duration:"200ms",easing:"ease-out"},fadeOut:{name:"fadeOut",keyframes:`
      from { opacity: 1; }
      to { opacity: 0; }
    `,duration:"200ms",easing:"ease-in"},slideInFromTop:{name:"slideInFromTop",keyframes:`
      from { transform: translateY(-100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    `,duration:"300ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},slideInFromBottom:{name:"slideInFromBottom",keyframes:`
      from { transform: translateY(100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    `,duration:"300ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},scaleIn:{name:"scaleIn",keyframes:`
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    `,duration:"200ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},spin:{name:"spin",keyframes:`
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    `,duration:"1000ms",easing:"linear"},pulse:{name:"pulse",keyframes:`
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    `,duration:"2000ms",easing:"cubic-bezier(0.4, 0, 0.6, 1)"}};function E(m){return`
    @keyframes ${m.name} {
      ${m.keyframes}
    }
  `}Object.values(f).map(E).join(`
`);const $={canada_gc:{id:"canada_gc",name:"Government of Canada",nameFr:"Gouvernement du Canada",colors:{primary:"#26374A",secondary:"#284162",accent:"#A62A1E",text:"#333"},assets:{wordmark:"/assets/canada-wordmark.svg",logo:"/assets/canada-logo.svg",flag:"/assets/canada-flag.svg"},footer:{copyright:"© His Majesty the King in Right of Canada",links:[{label:"Privacy",url:"https://canada.ca/en/transparency/privacy"},{label:"Terms and conditions",url:"https://canada.ca/en/transparency/terms"},{label:"Accessibility",url:"https://canada.ca/en/accessibility"},{label:"Canada.ca",url:"https://canada.ca"}]},locale:{primary:"en-CA",secondary:"fr-CA"}},usa_gov:{id:"usa_gov",name:"U.S. Government",colors:{primary:"#002868",secondary:"#BF0A30",accent:"#FFFFFF",text:"#1b1b1b"},assets:{logo:"/assets/usa-seal.svg",flag:"/assets/usa-flag.svg",seal:"/assets/usa-seal.svg"},footer:{copyright:"An official website of the United States government",links:[{label:"Privacy Policy",url:"https://www.usa.gov/privacy"},{label:"Accessibility",url:"https://www.usa.gov/accessibility"},{label:"USA.gov",url:"https://www.usa.gov"}]},locale:{primary:"en-US"}},uk_gov:{id:"uk_gov",name:"UK Government",colors:{primary:"#012169",secondary:"#C8102E",accent:"#FFFFFF",text:"#0b0c0c"},assets:{logo:"/assets/uk-crown.svg",flag:"/assets/uk-flag.svg"},footer:{copyright:"© Crown copyright",links:[{label:"Privacy",url:"https://www.gov.uk/help/privacy-notice"},{label:"Cookies",url:"https://www.gov.uk/help/cookies"},{label:"Accessibility",url:"https://www.gov.uk/help/accessibility-statement"},{label:"GOV.UK",url:"https://www.gov.uk"}]},locale:{primary:"en-GB"}},australia_gov:{id:"australia_gov",name:"Australian Government",colors:{primary:"#00008B",secondary:"#FFCD00",accent:"#FF0000",text:"#313131"},assets:{logo:"/assets/australia-coat-of-arms.svg",flag:"/assets/australia-flag.svg"},footer:{copyright:"© Commonwealth of Australia",links:[{label:"Privacy",url:"https://www.australia.gov.au/privacy"},{label:"Accessibility",url:"https://www.australia.gov.au/accessibility"},{label:"Australia.gov.au",url:"https://www.australia.gov.au"}]},locale:{primary:"en-AU"}},nz_gov:{id:"nz_gov",name:"New Zealand Government",colors:{primary:"#00247D",secondary:"#CC142B",accent:"#FFFFFF",text:"#212121"},assets:{logo:"/assets/nz-fern.svg",flag:"/assets/nz-flag.svg"},footer:{copyright:"© New Zealand Government",links:[{label:"Privacy",url:"https://www.govt.nz/privacy"},{label:"Accessibility",url:"https://www.govt.nz/accessibility"},{label:"Govt.nz",url:"https://www.govt.nz"}]},locale:{primary:"en-NZ"}}};function k(m){return $[m]||$.canada_gc}class x{constructor(){this.currentLocale="en-CA",this.translations={},this.listeners=new Set}static getInstance(){return x.instance||(x.instance=new x),x.instance}async loadLocale(e){if(!this.translations[e])try{const a=await(await fetch(`/src/i18n/locales/${e}.json`)).json();this.translations[e]=a}catch(t){console.error(`Failed to load locale ${e}:`,t),this.translations[e]={}}}async setLocale(e){this.translations[e]||await this.loadLocale(e),this.currentLocale=e,this.notifyListeners()}getLocale(){return this.currentLocale}t(e,t){const a=e.split(".");let s=this.translations[this.currentLocale];for(const r of a)if(s&&typeof s=="object")s=s[r];else return e;return typeof s!="string"?e:t?s.replace(/\{(\w+)\}/g,(r,i)=>t[i]!==void 0?String(t[i]):`{${i}}`):s}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>e(this.currentLocale))}getAvailableLocales(){return["en-CA","fr-CA","en-US","es-US","en-GB","cy-GB","en-AU","en-NZ","mi-NZ"]}isLocaleLoaded(e){return!!this.translations[e]}}const w=x.getInstance();class b extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.unsubscribeI18n=w.subscribe(()=>{this.render()}),this.render()}disconnectedCallback(){this.unsubscribeI18n&&this.unsubscribeI18n()}render(){}t(e,t){return w.t(e,t)}getAttr(e,t=""){return this.getAttribute(e)||t}getBoolAttr(e){return this.hasAttribute(e)}createStyles(e){const t=document.createElement("style");return t.textContent=e,t}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}}class F extends b{static get observedAttributes(){return["profile","app-name-key","logo-url","flag-url"]}attributeChangedCallback(){this.render()}render(){const e=k(this.getAttr("profile","canada_gc")),t=this.getAttr("app-name-key","esdc.title"),a=this.t(t);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        background: ${n.primary};
        color: ${n.primaryForeground};
        font-family: ${u.fontBody};
        box-shadow: ${g.md};
        position: relative;
        z-index: 50;
      }

      .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 ${o[4]};
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${o[4]};
        height: 4rem;
      }

      .logo-section {
        display: flex;
        align-items: center;
        gap: ${o[4]};
      }

      .logo-placeholder {
        width: 2.5rem;
        height: 2.5rem;
        background: color-mix(in srgb, ${n.primaryForeground} 20%, transparent);
        border-radius: ${o[2]};
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: ${u.weightBold};
        font-size: 1.125rem;
      }

      .wordmark {
        height: 40px;
        width: auto;
        transition: ${y.transform};
      }
      
      .wordmark:hover {
        transform: scale(1.02);
      }

      .flag {
        height: 32px;
        width: auto;
      }

      .app-title {
        font-family: ${u.fontHeading};
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0;
        color: ${n.primaryForeground};
      }

      .actions-section {
        display: flex;
        align-items: center;
        gap: ${o[4]};
      }

      nav {
        display: flex;
        align-items: center;
        gap: ${o[4]};
      }

      @media (max-width: 768px) {
        .header-container {
          height: auto;
          min-height: 4rem;
          flex-wrap: wrap;
          padding: ${o[3]} ${o[4]};
        }
        
        .logo-section {
          flex: 1;
        }

        .app-title {
          font-size: 1rem;
        }
        
        .actions-section {
          width: 100%;
          justify-content: flex-end;
        }
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .wordmark,
        * {
          transition-duration: 0.01ms !important;
        }
      }
    `));const s=document.createElement("div");s.className="header-container",s.setAttribute("role","banner");const r=document.createElement("div");r.className="logo-section";const i=this.getAttr("logo-url")||e.assets.wordmark||e.assets.logo;if(i){const p=document.createElement("img");p.src=i,p.alt=e.name,p.className="wordmark",r.appendChild(p)}else{const p=document.createElement("div");p.className="logo-placeholder",p.textContent="GC",p.setAttribute("aria-hidden","true"),r.appendChild(p)}const l=this.getAttr("flag-url")||e.assets.flag;if(l){const p=document.createElement("img");p.src=l,p.alt=`${e.name} flag`,p.className="flag",r.appendChild(p)}const d=document.createElement("h1");d.className="app-title",d.textContent=a,r.appendChild(d),s.appendChild(r);const c=document.createElement("nav");c.className="actions-section",c.setAttribute("aria-label",this.t("header.navigation")||"Header navigation");const h=document.createElement("slot");h.name="actions",c.appendChild(h),s.appendChild(c),this.shadow.appendChild(s)}}customElements.define("eva-gc-header",F);class L extends b{static get observedAttributes(){return["profile"]}attributeChangedCallback(){this.render()}render(){const e=k(this.getAttr("profile","canada_gc"));this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        background: ${n.primary};
        color: ${n.primaryForeground};
        font-family: ${u.fontBody};
        margin-top: auto;
        border-top: 1px solid color-mix(in srgb, ${n.primaryForeground} 10%, transparent);
      }

      .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: ${o[8]} ${o[4]};
      }

      .copyright {
        font-size: 0.875rem;
        margin: 0 0 ${o[4]} 0;
        color: color-mix(in srgb, ${n.primaryForeground} 90%, transparent);
      }

      .links {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: ${o[6]};
      }

      .links li {
        margin: 0;
      }

      .links a {
        color: ${n.primaryForeground};
        text-decoration: underline;
        text-underline-offset: 4px;
        font-size: 0.875rem;
        transition: ${y.colors};
      }

      .links a:hover {
        text-decoration: none;
        color: color-mix(in srgb, ${n.primaryForeground} 80%, transparent);
      }

      .links a:focus-visible {
        outline: 3px solid ${n.ring};
        outline-offset: 3px;
        border-radius: ${o[1]};
      }

      @media (max-width: 768px) {
        .footer-container {
          padding: ${o[6]} ${o[4]};
        }
        
        .links {
          flex-direction: column;
          gap: ${o[3]};
        }
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .links a {
          transition-duration: 0.01ms !important;
        }
      }
    `));const t=document.createElement("div");t.className="footer-container",t.setAttribute("role","contentinfo");const a=document.createElement("p");a.className="copyright",a.textContent=e.footer.copyright,t.appendChild(a);const s=document.createElement("nav");s.setAttribute("aria-label","Footer navigation");const r=document.createElement("ul");r.className="links",e.footer.links.forEach(i=>{const l=document.createElement("li"),d=document.createElement("a");d.href=i.url,d.textContent=this.t(`footer.${i.label.toLowerCase().replace(/\s+/g,"")}`)||i.label,l.appendChild(d),r.appendChild(l)}),s.appendChild(r),t.appendChild(s),this.shadow.appendChild(t)}}customElements.define("eva-gc-footer",L);class S extends b{static get observedAttributes(){return["variant","size","disabled","loading","aria-label"]}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","presentation"),super.connectedCallback()}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("variant","default"),t=this.getAttr("size","default"),a=this.getBoolAttr("disabled"),s=this.getBoolAttr("loading");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-block;
      }

      button {
        /* Base styles */
        display: inline-flex;
        align-items: center;
        justify-center: center;
        gap: 0.5rem;
        white-space: nowrap;
        border-radius: ${o[2]};
        font-family: ${u.fontBody};
        font-size: 0.875rem;
        font-weight: ${u.weightNormal};
        transition: ${y.all};
        cursor: pointer;
        border: 1px solid transparent;
        outline: none;
        
        /* Disabled state */
        &:disabled {
          pointer-events: none;
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* SVG handling */
        & svg {
          pointer-events: none;
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
        }
        
        /* Focus visible state (WCAG 2.2) */
        &:focus-visible {
          outline: 3px solid ${n.ring};
          outline-offset: 3px;
          border-color: ${n.ring};
          box-shadow: 0 0 0 3px color-mix(in srgb, ${n.ring} 20%, transparent);
        }
        
        /* Invalid state */
        &[aria-invalid="true"] {
          box-shadow: 0 0 0 3px color-mix(in srgb, ${n.destructive} 20%, transparent);
          border-color: ${n.destructive};
        }
      }

      /* Default variant - Primary blue */
      button.default {
        background: ${n.primary};
        color: ${n.primaryForeground};
        box-shadow: ${g.xs};
      }
      
      button.default:hover:not(:disabled) {
        background: ${v(n.primary,10)};
      }

      /* Destructive variant - Red */
      button.destructive {
        background: ${n.destructive};
        color: ${n.destructiveForeground};
        box-shadow: ${g.xs};
      }
      
      button.destructive:hover:not(:disabled) {
        background: ${v(n.destructive,10)};
      }
      
      button.destructive:focus-visible {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${n.destructive} 20%, transparent);
      }

      /* Outline variant */
      button.outline {
        border: 1px solid ${n.border};
        background: ${n.background};
        box-shadow: ${g.xs};
      }
      
      button.outline:hover:not(:disabled) {
        background: ${n.accent};
        color: ${n.accentForeground};
      }

      /* Secondary variant */
      button.secondary {
        background: ${n.secondary};
        color: ${n.secondaryForeground};
        box-shadow: ${g.xs};
      }
      
      button.secondary:hover:not(:disabled) {
        background: ${v(n.secondary,20)};
      }

      /* Ghost variant - Transparent */
      button.ghost:hover:not(:disabled) {
        background: ${n.accent};
        color: ${n.accentForeground};
      }

      /* Link variant */
      button.link {
        color: ${n.primary};
        text-decoration: underline;
        text-underline-offset: 4px;
      }
      
      button.link:hover:not(:disabled) {
        text-decoration: none;
      }

      /* Size variants */
      button.size-default {
        height: 2.25rem;
        padding: 0.5rem 1rem;
      }
      
      button.size-default:has(svg) {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
      
      button.size-sm {
        height: 2rem;
        border-radius: ${o[2]};
        gap: 0.375rem;
        padding: 0 0.75rem;
      }
      
      button.size-sm:has(svg) {
        padding-left: 0.625rem;
        padding-right: 0.625rem;
      }
      
      button.size-lg {
        height: 2.5rem;
        border-radius: ${o[2]};
        padding: 0 1.5rem;
      }
      
      button.size-lg:has(svg) {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      
      button.size-icon {
        width: 2.25rem;
        height: 2.25rem;
        padding: 0;
      }

      /* Loading spinner */
      .spinner {
        width: 1rem;
        height: 1rem;
        border: 2px solid currentColor;
        border-top-color: transparent;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        button {
          transition-duration: 0.01ms !important;
        }
        
        .spinner {
          animation-duration: 0.01ms !important;
        }
      }
      
      /* High contrast mode */
      @media (prefers-contrast: high) {
        button {
          border-width: 2px;
        }
        
        button:focus-visible {
          outline-width: 4px;
        }
      }
    `));const r=document.createElement("button");r.className=`${e} size-${t}`,r.disabled=a||s,r.setAttribute("type","button"),r.setAttribute("aria-disabled",a||s?"true":"false"),r.setAttribute("aria-busy",s?"true":"false");const i=this.getAttr("aria-label");if(i)r.setAttribute("aria-label",i),this.removeAttribute("aria-label");else{const h=(this.textContent||"").trim().length>0;t==="icon"&&!h&&r.setAttribute("aria-label",this.t("common.button"))}if(s){const h=document.createElement("span");h.className="spinner",h.setAttribute("role","status"),h.setAttribute("aria-label",this.t("accessibility.loading")),r.appendChild(h)}const l=document.createElement("slot");r.appendChild(l);const d=document.createElement("span"),c=()=>{const p=l.assignedNodes({flatten:!0}).map(C=>C.textContent||"").join("").trim();d.textContent=p};c(),l.addEventListener("slotchange",c),r.appendChild(d),this.shadow.appendChild(r)}}customElements.define("eva-gc-button",S);class N extends b{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: ${u.fontBody};
        color: ${n.foreground};
        background: ${n.background};
      }

      header {
        flex-shrink: 0;
      }

      main {
        flex: 1 0 auto;
        padding: 0;
        scroll-margin-top: 4rem;
      }
      
      main:focus {
        outline: none;
      }

      footer {
        flex-shrink: 0;
        margin-top: auto;
      }
    `));const e=document.createElement("header"),t=document.createElement("slot");t.name="header",e.appendChild(t),this.shadow.appendChild(e);const a=document.createElement("main");a.id="main-content",a.setAttribute("role","main"),a.setAttribute("tabindex","-1");const s=document.createElement("slot");a.appendChild(s),this.shadow.appendChild(a);const r=document.createElement("footer"),i=document.createElement("slot");i.name="footer",r.appendChild(i),this.shadow.appendChild(r)}}customElements.define("eva-page-shell",N);class z extends b{static get observedAttributes(){return["title-key","description-key","background"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("title-key","esdc.hero.title"),t=this.getAttr("description-key","esdc.hero.description"),a=this.getAttr("background",n.primary),s=this.t(e),r=this.t(t);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        background: ${a};
        background: linear-gradient(135deg, ${a} 0%, color-mix(in srgb, ${a} 85%, black) 100%);
        color: ${n.primaryForeground};
        position: relative;
        overflow: hidden;
      }
      
      :host::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at top right, color-mix(in srgb, ${n.primaryForeground} 5%, transparent) 0%, transparent 50%);
        pointer-events: none;
      }

      .hero-container {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding: ${o[20]} ${o[4]};
        text-align: center;
        animation: ${f.fadeIn.name} 0.6s ease-out;
      }

      @keyframes ${f.fadeIn.name} {
        from { 
          opacity: 0; 
          transform: translateY(1rem);
        }
        to { 
          opacity: 1; 
          transform: translateY(0);
        }
      }

      .hero-title {
        font-family: ${u.fontHeading};
        font-size: clamp(2rem, 5vw, 2.5625rem);
        font-weight: ${u.weightBold};
        margin: 0 0 ${o[6]} 0;
        line-height: 1.2;
        letter-spacing: -0.02em;
      }

      .hero-description {
        font-size: clamp(1rem, 2.5vw, 1.25rem);
        margin: 0;
        line-height: 1.6;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        color: color-mix(in srgb, ${n.primaryForeground} 95%, transparent);
      }

      @media (max-width: 768px) {
        .hero-container {
          padding: ${o[12]} ${o[4]};
        }
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .hero-container {
          animation: none;
        }
      }
    `));const i=document.createElement("div");i.className="hero-container";const l=document.createElement("h1");l.className="hero-title",l.textContent=s,i.appendChild(l);const d=document.createElement("p");d.className="hero-description",d.textContent=r,i.appendChild(d),this.shadow.appendChild(i)}}customElements.define("eva-hero-banner",z);class B extends b{static get observedAttributes(){return["max-width"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("max-width",A.contentMaxWidth);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        width: 100%;
      }

      .container {
        max-width: ${e};
        margin: 0 auto;
        padding: ${o[8]} ${o[4]};
      }
      
      @media (max-width: 768px) {
        .container {
          padding: ${o[6]} ${o[4]};
        }
      }
      
      @media (max-width: 640px) {
        .container {
          padding: ${o[4]} ${o[4]};
        }
      }
    `));const t=document.createElement("div");t.className="container";const a=document.createElement("slot");t.appendChild(a),this.shadow.appendChild(t)}}customElements.define("eva-container",B);class I extends b{static get observedAttributes(){return["target"]}connectedCallback(){super.connectedCallback(),this.setupEventListener()}setupEventListener(){this.shadow.addEventListener("click",e=>{e.preventDefault();const t=this.getAttr("target","#main-content"),a=document.querySelector(t)||document.querySelector("main")||this.getRootNode()&&this.getRootNode().querySelector(t);a&&(a.focus(),a.scrollIntoView())})}render(){const e=this.getAttr("target","#main-content");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .skip-link {
        position: fixed;
        left: -9999px;
        top: ${o[2]};
        z-index: 9999;
        padding: ${o[3]} ${o[6]};
        background: ${n.accent};
        color: ${n.accentForeground};
        font-family: ${u.fontBody};
        font-size: 0.875rem;
        font-weight: 600;
        text-decoration: none;
        border-radius: ${o[2]};
        box-shadow: ${g.lg};
        transition: ${y.all};
      }

      .skip-link:focus {
        left: ${o[2]};
        outline: 3px solid ${n.ring};
        outline-offset: 2px;
        animation: ${f.slideInFromTop.name} ${f.slideInFromTop.duration} ${y.easeInOut};
        box-shadow: ${g.xl}, 0 0 0 3px color-mix(in srgb, ${n.ring} 20%, transparent);
      }
      
      @keyframes ${f.slideInFromTop.name} {
        from {
          transform: translateY(-100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .skip-link {
          transition-duration: 0.01ms !important;
        }
        
        .skip-link:focus {
          animation: none;
        }
      }
    `));const t=document.createElement("a");t.className="skip-link",t.href=e;const a=document.createElement("slot");a.textContent=this.t("nav.skipToContent"),t.appendChild(a),this.shadow.appendChild(t)}}customElements.define("eva-skip-link",I);class P extends b{static get observedAttributes(){return["current-locale","available-locales"]}connectedCallback(){super.connectedCallback(),this.setupEventListeners()}attributeChangedCallback(){this.render()}setupEventListeners(){this.shadow.addEventListener("click",e=>{const t=e.target;if(t.classList.contains("lang-button")){const a=t.dataset.locale;a&&(w.setLocale(a),this.emit("language-changed",{locale:a}))}})}render(){const e=w.getLocale(),t=this.getAttr("available-locales",'["en-CA", "fr-CA"]');let a;try{a=JSON.parse(t)}catch{a=["en-CA","fr-CA"]}this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-block;
      }

      .switcher {
        display: flex;
        gap: ${o[2]};
        align-items: center;
      }

      .lang-button {
        font-family: ${u.fontBody};
        font-size: 0.875rem;
        font-weight: 600;
        padding: ${o[2]} ${o[3]};
        border: 2px solid ${n.primaryForeground};
        background: transparent;
        color: ${n.primaryForeground};
        cursor: pointer;
        border-radius: ${o[1]};
        text-transform: uppercase;
        min-height: 2rem;
        transition: ${y.all};
      }

      .lang-button:hover {
        background: color-mix(in srgb, ${n.primaryForeground} 10%, transparent);
        transform: translateY(-1px);
      }

      .lang-button:focus-visible {
        outline: 3px solid ${n.ring};
        outline-offset: 2px;
        box-shadow: 0 0 0 3px color-mix(in srgb, ${n.ring} 20%, transparent);
      }

      .lang-button[aria-current="true"] {
        background: ${n.primaryForeground};
        color: ${n.primary};
        border-color: ${n.primaryForeground};
      }
      
      .lang-button[aria-current="true"]:hover {
        background: color-mix(in srgb, ${n.primaryForeground} 95%, ${n.primary});
        transform: none;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .lang-button {
          transition-duration: 0.01ms !important;
        }
        
        .lang-button:hover {
          transform: none;
        }
      }
    `));const s=document.createElement("div");s.className="switcher",s.setAttribute("role","group"),s.setAttribute("aria-label",this.t("accessibility.language")),a.forEach(r=>{const i=r===e,l=document.createElement("button");if(l.className="lang-button",l.dataset.locale=r,l.setAttribute("aria-current",i.toString()),l.setAttribute("lang",r),i){const c=document.createElement("span");c.className="sr-only",c.textContent=this.t("language.current"),l.appendChild(c)}const d=r.split("-")[0].toUpperCase();l.appendChild(document.createTextNode(d)),s.appendChild(l)}),this.shadow.appendChild(s)}}customElements.define("eva-language-switcher",P);class T extends b{constructor(){super(...arguments),this.messages=[]}static get observedAttributes(){return["title-key","placeholder-key","assistant-name"]}connectedCallback(){super.connectedCallback(),this.setupEventListeners(),this.addWelcomeMessage()}attributeChangedCallback(){this.render()}addWelcomeMessage(){this.addMessage("assistant",this.t("chat.welcome"))}setupEventListeners(){this.shadow.addEventListener("submit",e=>{e.preventDefault(),this.handleSend()}),this.shadow.addEventListener("keydown",e=>{const t=e;t.key==="Enter"&&!t.shiftKey&&e.target.tagName==="INPUT"&&(e.preventDefault(),this.handleSend())})}handleSend(){if(!this.inputField)return;const e=this.inputField.value.trim();e&&(this.addMessage("user",e),this.inputField.value="",setTimeout(()=>{const t=this.getEVAResponse(e);this.addMessage("assistant",t)},500))}addMessage(e,t){const a={id:Date.now().toString(),type:e,content:t,timestamp:new Date};this.messages.push(a),this.renderMessages()}getEVAResponse(e){const t=e.toLowerCase();return t.includes("employment insurance")||t.includes("ei")?"Employment Insurance (EI) provides temporary financial assistance to unemployed Canadians while they look for work or upgrade their skills. You may be eligible if you have lost your job through no fault of your own and have worked enough insurable hours.":t.includes("old age security")||t.includes("oas")||t.includes("pension")?"Old Age Security (OAS) is a monthly payment available to most Canadians 65 years of age or older. You do not need to have worked to receive OAS. The amount depends on how long you have lived in Canada after age 18.":t.includes("canada pension")||t.includes("cpp")?"Canada Pension Plan (CPP) is a contributory, earnings-related social insurance program. It provides retirement pensions, disability benefits, and survivor benefits. You contribute to CPP through payroll deductions during your working years.":t.includes("job")||t.includes("work")||t.includes("employment")?"ESDC offers many job search resources including Job Bank (jobbank.gc.ca), skills training programs, and employment services. I can help you find the right program for your needs.":t.includes("benefit")?"ESDC administers several benefit programs including Employment Insurance (EI), Canada Pension Plan (CPP), Old Age Security (OAS), and the Canada Child Benefit. Which program would you like to know more about?":`I can help you with information about ESDC programs and services. Try asking about:
• Employment Insurance (EI)
• Old Age Security (OAS)
• Canada Pension Plan (CPP)
• Job search resources
• Benefits programs`}renderMessages(){if(!this.messageContainer)return;this.messageContainer.innerHTML="",this.messages.forEach(t=>{const a=document.createElement("eva-chat-message");a.setAttribute("type",t.type),a.setAttribute("timestamp",t.timestamp.toISOString()),a.textContent=t.content,this.messageContainer.appendChild(a)}),this.messageContainer.scrollTop=this.messageContainer.scrollHeight;const e=this.shadow.querySelector('[role="log"]');if(e&&this.messages.length>0){const t=this.messages[this.messages.length-1];e.textContent=`${t.type==="user"?"You":"EVA"}: ${t.content}`}}render(){const e=this.getAttr("title-key","chat.title"),t=this.getAttr("placeholder-key","chat.placeholder"),a=this.t(e),s=this.t(t);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        margin-top: ${o[16]};
      }

      .chat-panel {
        max-width: 800px;
        margin: 0 auto;
        border: 1px solid ${n.border};
        border-radius: ${o[3]};
        background: ${n.card};
        box-shadow: ${g.md};
        overflow: hidden;
      }

      .chat-header {
        background: ${n.primary};
        color: ${n.primaryForeground};
        padding: ${o[4]};
        font-family: ${u.fontHeading};
        font-size: 1.375rem;
        font-weight: ${u.weightBold};
        border-bottom: 1px solid color-mix(in srgb, ${n.primary} 90%, black);
      }

      .chat-messages {
        height: 400px;
        overflow-y: auto;
        padding: ${o[4]};
        background: ${n.muted};
        scroll-behavior: smooth;
      }
      
      .chat-messages::-webkit-scrollbar {
        width: 8px;
      }
      
      .chat-messages::-webkit-scrollbar-track {
        background: ${n.muted};
      }
      
      .chat-messages::-webkit-scrollbar-thumb {
        background: ${n.border};
        border-radius: 4px;
      }
      
      .chat-messages::-webkit-scrollbar-thumb:hover {
        background: color-mix(in srgb, ${n.border} 80%, black);
      }

      .chat-form {
        display: flex;
        gap: ${o[3]};
        padding: ${o[4]};
        border-top: 1px solid ${n.border};
        background: ${n.card};
      }

      .chat-input {
        flex: 1;
        padding: ${o[3]};
        border: 1px solid ${n.input};
        border-radius: ${o[2]};
        font-family: ${u.fontBody};
        font-size: 0.875rem;
        min-height: 2.5rem;
        transition: ${y.all};
        background: ${n.background};
      }

      .chat-input:hover {
        border-color: color-mix(in srgb, ${n.input} 70%, black);
      }

      .chat-input:focus {
        outline: none;
        border-color: ${n.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${n.ring} 20%, transparent);
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .chat-messages {
          scroll-behavior: auto;
        }
        
        .chat-input {
          transition-duration: 0.01ms !important;
        }
      }
    `));const r=document.createElement("div");r.className="chat-panel";const i=document.createElement("div");i.className="chat-header",i.textContent=a,r.appendChild(i),this.messageContainer=document.createElement("div"),this.messageContainer.className="chat-messages",this.messageContainer.setAttribute("role","log"),this.messageContainer.setAttribute("aria-live","polite"),this.messageContainer.setAttribute("aria-atomic","false"),r.appendChild(this.messageContainer);const l=document.createElement("div");l.className="sr-only",l.setAttribute("role","log"),l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),r.appendChild(l);const d=document.createElement("form");d.className="chat-form",this.inputField=document.createElement("input"),this.inputField.type="text",this.inputField.className="chat-input",this.inputField.placeholder=s,this.inputField.setAttribute("aria-label",s),d.appendChild(this.inputField);const c=document.createElement("eva-gc-button");c.setAttribute("variant","default"),c.setAttribute("type","submit"),c.textContent=this.t("chat.send"),d.appendChild(c),r.appendChild(d),this.shadow.appendChild(r),this.renderMessages()}}customElements.define("eva-chat-panel",T);class M extends b{static get observedAttributes(){return["type","timestamp"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("type","user"),t=this.getAttr("timestamp");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        margin-bottom: ${o[4]};
      }

      .message {
        display: flex;
        flex-direction: column;
        max-width: 75%;
        animation: ${f.fadeIn.name} ${f.fadeIn.duration} ease-out;
      }

      @keyframes ${f.fadeIn.name} {
        from { 
          opacity: 0; 
          transform: translateY(0.5rem);
        }
        to { 
          opacity: 1; 
          transform: translateY(0);
        }
      }

      .message.user {
        align-self: flex-end;
        margin-left: auto;
      }

      .message.assistant {
        align-self: flex-start;
      }

      .message-bubble {
        padding: ${o[3]} ${o[4]};
        border-radius: ${o[3]};
        font-family: ${u.fontBody};
        font-size: 0.875rem;
        line-height: 1.5;
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      .message.user .message-bubble {
        background: ${n.primary};
        color: ${n.primaryForeground};
        border-bottom-right-radius: ${o[1]};
        box-shadow: ${g.sm};
      }

      .message.assistant .message-bubble {
        background: ${n.card};
        color: ${n.cardForeground};
        border: 1px solid ${n.border};
        border-bottom-left-radius: ${o[1]};
        box-shadow: ${g.xs};
      }

      .message-meta {
        font-size: 0.75rem;
        color: ${n.mutedForeground};
        margin-top: ${o[1]};
        padding: 0 ${o[2]};
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .message {
          animation: none;
        }
      }
    `));const a=document.createElement("div");a.className=`message ${e}`;const s=document.createElement("div");s.className="message-bubble";const r=document.createElement("slot");if(s.appendChild(r),a.appendChild(s),t){const i=document.createElement("div");i.className="message-meta";const l=new Date(t);i.textContent=l.toLocaleTimeString(),a.appendChild(i)}this.shadow.appendChild(a)}}customElements.define("eva-chat-message",M);class H extends b{static get observedAttributes(){return["title-key","description-key","icon","link"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("title-key"),t=this.getAttr("description-key"),a=this.getAttr("icon","📄"),s=this.getAttr("link","#"),r=this.t(e),i=this.t(t);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        height: 100%;
      }

      .card {
        background: ${n.card};
        border: 1px solid ${n.border};
        border-radius: ${o[3]};
        padding: ${o[6]};
        transition: ${y.all};
        text-decoration: none;
        display: flex;
        flex-direction: column;
        height: 100%;
        box-shadow: ${g.sm};
      }

      .card:hover {
        border-color: ${n.primary};
        box-shadow: ${g.lg};
        transform: translateY(-4px);
      }

      .card:focus-visible {
        outline: 3px solid ${n.ring};
        outline-offset: 2px;
        box-shadow: ${g.lg}, 0 0 0 3px color-mix(in srgb, ${n.ring} 20%, transparent);
      }

      .icon {
        font-size: 3rem;
        margin-bottom: ${o[4]};
        display: block;
        line-height: 1;
      }

      .title {
        font-family: ${u.fontHeading};
        font-size: 1.5rem;
        font-weight: ${u.weightBold};
        color: ${n.primary};
        margin: 0 0 ${o[3]} 0;
        line-height: 1.3;
        transition: ${y.colors};
      }

      .description {
        font-family: ${u.fontBody};
        font-size: 0.875rem;
        color: ${n.mutedForeground};
        line-height: 1.6;
        margin: 0;
        flex: 1;
      }

      .card:hover .title {
        color: color-mix(in srgb, ${n.primary} 85%, black);
        text-decoration: underline;
        text-underline-offset: 4px;
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .card,
        .title {
          transition-duration: 0.01ms !important;
        }
        
        .card:hover {
          transform: none;
        }
      }
    `));const l=document.createElement("a");l.className="card",l.href=s;const d=document.createElement("span");d.className="icon",d.textContent=a,d.setAttribute("aria-hidden","true"),l.appendChild(d);const c=document.createElement("h3");c.className="title",c.textContent=r,l.appendChild(c);const h=document.createElement("p");h.className="description",h.textContent=i,l.appendChild(h),this.shadow.appendChild(l)}}customElements.define("eva-program-card",H);w.loadLocale("en-CA").then(()=>{w.loadLocale("fr-CA")});

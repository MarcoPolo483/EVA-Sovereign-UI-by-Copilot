(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();const a={background:"oklch(1 0 0)",foreground:"oklch(0.25 0 0)",card:"oklch(1 0 0)",cardForeground:"oklch(0.25 0 0)",primary:"oklch(0.30 0.04 250)",primaryForeground:"oklch(0.98 0 0)",secondary:"oklch(0.32 0.04 245)",secondaryForeground:"oklch(0.98 0 0)",accent:"oklch(0.45 0.08 10)",accentForeground:"oklch(0.98 0 0)",destructive:"oklch(0.55 0.22 25)",destructiveForeground:"oklch(0.98 0 0)",muted:"oklch(0.96 0.005 250)",mutedForeground:"oklch(0.50 0.01 250)",border:"oklch(0.90 0.005 250)",input:"oklch(0.90 0.005 250)",ring:"oklch(0.35 0.06 250)"},$=(d,e=10)=>`color-mix(in srgb, ${d} ${100-e}%, black ${e}%)`,u={fontHeading:'"Lato", sans-serif',fontBody:'"Noto Sans", system-ui, -apple-system, sans-serif',weightNormal:400,weightBold:700},s={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",12:"3rem",16:"4rem",20:"5rem"},L={contentMaxWidth:"65ch"},g={xs:"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"},y={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",all:"all 200ms cubic-bezier(0.4, 0, 0.2, 1)",colors:"color 200ms cubic-bezier(0.4, 0, 0.2, 1), background-color 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)",transform:"transform 200ms cubic-bezier(0.4, 0, 0.2, 1)"},f={fadeIn:{name:"fadeIn",keyframes:`
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
    `,duration:"2000ms",easing:"cubic-bezier(0.4, 0, 0.6, 1)"}};function S(d){return`
    @keyframes ${d.name} {
      ${d.keyframes}
    }
  `}Object.values(f).map(S).join(`
`);const C={canada_gc:{id:"canada_gc",name:"Government of Canada",nameFr:"Gouvernement du Canada",colors:{primary:"#26374A",secondary:"#284162",accent:"#A62A1E",text:"#333"},assets:{wordmark:"/assets/canada-wordmark.svg",logo:"/assets/canada-logo.svg",flag:"/assets/canada-flag.svg"},footer:{copyright:"© His Majesty the King in Right of Canada",links:[{label:"Privacy",url:"https://canada.ca/en/transparency/privacy"},{label:"Terms and conditions",url:"https://canada.ca/en/transparency/terms"},{label:"Accessibility",url:"https://canada.ca/en/accessibility"},{label:"Canada.ca",url:"https://canada.ca"}]},locale:{primary:"en-CA",secondary:"fr-CA"}},usa_gov:{id:"usa_gov",name:"U.S. Government",colors:{primary:"#002868",secondary:"#BF0A30",accent:"#FFFFFF",text:"#1b1b1b"},assets:{logo:"/assets/usa-seal.svg",flag:"/assets/usa-flag.svg",seal:"/assets/usa-seal.svg"},footer:{copyright:"An official website of the United States government",links:[{label:"Privacy Policy",url:"https://www.usa.gov/privacy"},{label:"Accessibility",url:"https://www.usa.gov/accessibility"},{label:"USA.gov",url:"https://www.usa.gov"}]},locale:{primary:"en-US"}},uk_gov:{id:"uk_gov",name:"UK Government",colors:{primary:"#012169",secondary:"#C8102E",accent:"#FFFFFF",text:"#0b0c0c"},assets:{logo:"/assets/uk-crown.svg",flag:"/assets/uk-flag.svg"},footer:{copyright:"© Crown copyright",links:[{label:"Privacy",url:"https://www.gov.uk/help/privacy-notice"},{label:"Cookies",url:"https://www.gov.uk/help/cookies"},{label:"Accessibility",url:"https://www.gov.uk/help/accessibility-statement"},{label:"GOV.UK",url:"https://www.gov.uk"}]},locale:{primary:"en-GB"}},australia_gov:{id:"australia_gov",name:"Australian Government",colors:{primary:"#00008B",secondary:"#FFCD00",accent:"#FF0000",text:"#313131"},assets:{logo:"/assets/australia-coat-of-arms.svg",flag:"/assets/australia-flag.svg"},footer:{copyright:"© Commonwealth of Australia",links:[{label:"Privacy",url:"https://www.australia.gov.au/privacy"},{label:"Accessibility",url:"https://www.australia.gov.au/accessibility"},{label:"Australia.gov.au",url:"https://www.australia.gov.au"}]},locale:{primary:"en-AU"}},nz_gov:{id:"nz_gov",name:"New Zealand Government",colors:{primary:"#00247D",secondary:"#CC142B",accent:"#FFFFFF",text:"#212121"},assets:{logo:"/assets/nz-fern.svg",flag:"/assets/nz-flag.svg"},footer:{copyright:"© New Zealand Government",links:[{label:"Privacy",url:"https://www.govt.nz/privacy"},{label:"Accessibility",url:"https://www.govt.nz/accessibility"},{label:"Govt.nz",url:"https://www.govt.nz"}]},locale:{primary:"en-NZ"}}};function E(d){return C[d]||C.canada_gc}class v{constructor(){this.currentLocale="en-CA",this.translations={},this.listeners=new Set}static getInstance(){return v.instance||(v.instance=new v),v.instance}async loadLocale(e){if(!this.translations[e])try{const t=await(await fetch(`/src/i18n/locales/${e}.json`)).json();this.translations[e]=t}catch(t){console.error(`Failed to load locale ${e}:`,t),this.translations[e]={}}}async setLocale(e){this.translations[e]||await this.loadLocale(e),this.currentLocale=e,this.notifyListeners()}getLocale(){return this.currentLocale}t(e,t){const r=e.split(".");let n=this.translations[this.currentLocale];for(const o of r)if(n&&typeof n=="object")n=n[o];else return e;return typeof n!="string"?e:t?n.replace(/\{(\w+)\}/g,(o,i)=>t[i]!==void 0?String(t[i]):`{${i}}`):n}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>e(this.currentLocale))}getAvailableLocales(){return["en-CA","fr-CA","en-US","es-US","en-GB","cy-GB","en-AU","en-NZ","mi-NZ"]}isLocaleLoaded(e){return!!this.translations[e]}}const w=v.getInstance();class b extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.unsubscribeI18n=w.subscribe(()=>{this.render()}),this.render()}disconnectedCallback(){this.unsubscribeI18n&&this.unsubscribeI18n()}render(){}t(e,t){return w.t(e,t)}getAttr(e,t=""){return this.getAttribute(e)||t}getBoolAttr(e){return this.hasAttribute(e)}createStyles(e){const t=document.createElement("style");return t.textContent=e,t}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}}class N extends b{static get observedAttributes(){return["profile","app-name-key","logo-url","flag-url"]}attributeChangedCallback(){this.render()}render(){const e=E(this.getAttr("profile","canada_gc")),t=this.getAttr("app-name-key","esdc.title"),r=this.t(t);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        background: ${a.primary};
        color: ${a.primaryForeground};
        font-family: ${u.fontBody};
        box-shadow: ${g.md};
        position: relative;
        z-index: 50;
      }

      .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 ${s[4]};
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${s[4]};
        height: 4rem;
      }

      .logo-section {
        display: flex;
        align-items: center;
        gap: ${s[4]};
      }

      .logo-placeholder {
        width: 2.5rem;
        height: 2.5rem;
        background: color-mix(in srgb, ${a.primaryForeground} 20%, transparent);
        border-radius: ${s[2]};
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
        color: ${a.primaryForeground};
      }

      .actions-section {
        display: flex;
        align-items: center;
        gap: ${s[4]};
      }

      nav {
        display: flex;
        align-items: center;
        gap: ${s[4]};
      }

      @media (max-width: 768px) {
        .header-container {
          height: auto;
          min-height: 4rem;
          flex-wrap: wrap;
          padding: ${s[3]} ${s[4]};
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
    `));const n=document.createElement("div");n.className="header-container",n.setAttribute("role","banner");const o=document.createElement("div");o.className="logo-section";const i=this.getAttr("logo-url")||e.assets.wordmark||e.assets.logo;if(i){const h=document.createElement("img");h.src=i,h.alt=e.name,h.className="wordmark",o.appendChild(h)}else{const h=document.createElement("div");h.className="logo-placeholder",h.textContent="GC",h.setAttribute("aria-hidden","true"),o.appendChild(h)}const l=this.getAttr("flag-url")||e.assets.flag;if(l){const h=document.createElement("img");h.src=l,h.alt=`${e.name} flag`,h.className="flag",o.appendChild(h)}const c=document.createElement("h1");c.className="app-title",c.textContent=r,o.appendChild(c),n.appendChild(o);const m=document.createElement("nav");m.className="actions-section",m.setAttribute("aria-label",this.t("header.navigation")||"Header navigation");const p=document.createElement("slot");p.name="actions",m.appendChild(p),n.appendChild(m),this.shadow.appendChild(n)}}customElements.define("eva-gc-header",N);class z extends b{static get observedAttributes(){return["profile"]}attributeChangedCallback(){this.render()}render(){const e=E(this.getAttr("profile","canada_gc"));this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        background: ${a.primary};
        color: ${a.primaryForeground};
        font-family: ${u.fontBody};
        margin-top: auto;
        border-top: 1px solid color-mix(in srgb, ${a.primaryForeground} 10%, transparent);
      }

      .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: ${s[8]} ${s[4]};
      }

      .copyright {
        font-size: 0.875rem;
        margin: 0 0 ${s[4]} 0;
        color: color-mix(in srgb, ${a.primaryForeground} 90%, transparent);
      }

      .links {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: ${s[6]};
      }

      .links li {
        margin: 0;
      }

      .links a {
        color: ${a.primaryForeground};
        text-decoration: underline;
        text-underline-offset: 4px;
        font-size: 0.875rem;
        transition: ${y.colors};
      }

      .links a:hover {
        text-decoration: none;
        color: color-mix(in srgb, ${a.primaryForeground} 80%, transparent);
      }

      .links a:focus-visible {
        outline: 3px solid ${a.ring};
        outline-offset: 3px;
        border-radius: ${s[1]};
      }

      @media (max-width: 768px) {
        .footer-container {
          padding: ${s[6]} ${s[4]};
        }
        
        .links {
          flex-direction: column;
          gap: ${s[3]};
        }
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .links a {
          transition-duration: 0.01ms !important;
        }
      }
    `));const t=document.createElement("div");t.className="footer-container",t.setAttribute("role","contentinfo");const r=document.createElement("p");r.className="copyright",r.textContent=e.footer.copyright,t.appendChild(r);const n=document.createElement("nav");n.setAttribute("aria-label","Footer navigation");const o=document.createElement("ul");o.className="links",e.footer.links.forEach(i=>{const l=document.createElement("li"),c=document.createElement("a");c.href=i.url,c.textContent=this.t(`footer.${i.label.toLowerCase().replace(/\s+/g,"")}`)||i.label,l.appendChild(c),o.appendChild(l)}),n.appendChild(o),t.appendChild(n),this.shadow.appendChild(t)}}customElements.define("eva-gc-footer",z);class I extends b{static get observedAttributes(){return["variant","size","disabled","loading","aria-label"]}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","presentation"),super.connectedCallback()}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("variant","default"),t=this.getAttr("size","default"),r=this.getBoolAttr("disabled"),n=this.getBoolAttr("loading");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
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
        border-radius: ${s[2]};
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
          outline: 3px solid ${a.ring};
          outline-offset: 3px;
          border-color: ${a.ring};
          box-shadow: 0 0 0 3px color-mix(in srgb, ${a.ring} 20%, transparent);
        }
        
        /* Invalid state */
        &[aria-invalid="true"] {
          box-shadow: 0 0 0 3px color-mix(in srgb, ${a.destructive} 20%, transparent);
          border-color: ${a.destructive};
        }
      }

      /* Default variant - Primary blue */
      button.default {
        background: ${a.primary};
        color: ${a.primaryForeground};
        box-shadow: ${g.xs};
      }
      
      button.default:hover:not(:disabled) {
        background: ${$(a.primary,10)};
      }

      /* Destructive variant - Red */
      button.destructive {
        background: ${a.destructive};
        color: ${a.destructiveForeground};
        box-shadow: ${g.xs};
      }
      
      button.destructive:hover:not(:disabled) {
        background: ${$(a.destructive,10)};
      }
      
      button.destructive:focus-visible {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${a.destructive} 20%, transparent);
      }

      /* Outline variant */
      button.outline {
        border: 1px solid ${a.border};
        background: ${a.background};
        box-shadow: ${g.xs};
      }
      
      button.outline:hover:not(:disabled) {
        background: ${a.accent};
        color: ${a.accentForeground};
      }

      /* Secondary variant */
      button.secondary {
        background: ${a.secondary};
        color: ${a.secondaryForeground};
        box-shadow: ${g.xs};
      }
      
      button.secondary:hover:not(:disabled) {
        background: ${$(a.secondary,20)};
      }

      /* Ghost variant - Transparent */
      button.ghost:hover:not(:disabled) {
        background: ${a.accent};
        color: ${a.accentForeground};
      }

      /* Link variant */
      button.link {
        color: ${a.primary};
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
        border-radius: ${s[2]};
        gap: 0.375rem;
        padding: 0 0.75rem;
      }
      
      button.size-sm:has(svg) {
        padding-left: 0.625rem;
        padding-right: 0.625rem;
      }
      
      button.size-lg {
        height: 2.5rem;
        border-radius: ${s[2]};
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
    `));const o=document.createElement("button");o.className=`${e} size-${t}`,o.disabled=r||n,o.setAttribute("type","button"),o.setAttribute("aria-disabled",r||n?"true":"false"),o.setAttribute("aria-busy",n?"true":"false");const i=this.getAttr("aria-label");if(i)o.setAttribute("aria-label",i),this.removeAttribute("aria-label");else{const p=(this.textContent||"").trim().length>0;t==="icon"&&!p&&o.setAttribute("aria-label",this.t("common.button"))}if(n){const p=document.createElement("span");p.className="spinner",p.setAttribute("role","status"),p.setAttribute("aria-label",this.t("accessibility.loading")),o.appendChild(p)}const l=document.createElement("slot");o.appendChild(l);const c=document.createElement("span"),m=()=>{const p=l.assignedNodes({flatten:!0}).map(h=>h.textContent||"").join("").trim();c.textContent=p};m(),l.addEventListener("slotchange",m),o.appendChild(c),this.shadow.appendChild(o)}}customElements.define("eva-gc-button",I);class B extends b{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: ${u.fontBody};
        color: ${a.foreground};
        background: ${a.background};
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
    `));const e=document.createElement("header"),t=document.createElement("slot");t.name="header",e.appendChild(t),this.shadow.appendChild(e);const r=document.createElement("main");r.id="main-content",r.setAttribute("role","main"),r.setAttribute("tabindex","-1");const n=document.createElement("slot");r.appendChild(n),this.shadow.appendChild(r);const o=document.createElement("footer"),i=document.createElement("slot");i.name="footer",o.appendChild(i),this.shadow.appendChild(o)}}customElements.define("eva-page-shell",B);class T extends b{static get observedAttributes(){return["title-key","description-key","background"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("title-key","esdc.hero.title"),t=this.getAttr("description-key","esdc.hero.description"),r=this.getAttr("background",a.primary),n=this.t(e),o=this.t(t);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        background: ${r};
        background: linear-gradient(135deg, ${r} 0%, color-mix(in srgb, ${r} 85%, black) 100%);
        color: ${a.primaryForeground};
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
        background: radial-gradient(circle at top right, color-mix(in srgb, ${a.primaryForeground} 5%, transparent) 0%, transparent 50%);
        pointer-events: none;
      }

      .hero-container {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding: ${s[20]} ${s[4]};
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
        margin: 0 0 ${s[6]} 0;
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
        color: color-mix(in srgb, ${a.primaryForeground} 95%, transparent);
      }

      @media (max-width: 768px) {
        .hero-container {
          padding: ${s[12]} ${s[4]};
        }
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .hero-container {
          animation: none;
        }
      }
    `));const i=document.createElement("div");i.className="hero-container";const l=document.createElement("h1");l.className="hero-title",l.textContent=n,i.appendChild(l);const c=document.createElement("p");c.className="hero-description",c.textContent=o,i.appendChild(c),this.shadow.appendChild(i)}}customElements.define("eva-hero-banner",T);class M extends b{static get observedAttributes(){return["max-width"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("max-width",L.contentMaxWidth);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        width: 100%;
      }

      .container {
        max-width: ${e};
        margin: 0 auto;
        padding: ${s[8]} ${s[4]};
      }
      
      @media (max-width: 768px) {
        .container {
          padding: ${s[6]} ${s[4]};
        }
      }
      
      @media (max-width: 640px) {
        .container {
          padding: ${s[4]} ${s[4]};
        }
      }
    `));const t=document.createElement("div");t.className="container";const r=document.createElement("slot");t.appendChild(r),this.shadow.appendChild(t)}}customElements.define("eva-container",M);class P extends b{static get observedAttributes(){return["target"]}connectedCallback(){super.connectedCallback(),this.setupEventListener()}setupEventListener(){this.shadow.addEventListener("click",e=>{e.preventDefault();const t=this.getAttr("target","#main-content"),r=document.querySelector(t)||document.querySelector("main")||this.getRootNode()&&this.getRootNode().querySelector(t);r&&(r.focus(),r.scrollIntoView())})}render(){const e=this.getAttr("target","#main-content");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .skip-link {
        position: fixed;
        left: -9999px;
        top: ${s[2]};
        z-index: 9999;
        padding: ${s[3]} ${s[6]};
        background: ${a.accent};
        color: ${a.accentForeground};
        font-family: ${u.fontBody};
        font-size: 0.875rem;
        font-weight: 600;
        text-decoration: none;
        border-radius: ${s[2]};
        box-shadow: ${g.lg};
        transition: ${y.all};
      }

      .skip-link:focus {
        left: ${s[2]};
        outline: 3px solid ${a.ring};
        outline-offset: 2px;
        animation: ${f.slideInFromTop.name} ${f.slideInFromTop.duration} ${y.easeInOut};
        box-shadow: ${g.xl}, 0 0 0 3px color-mix(in srgb, ${a.ring} 20%, transparent);
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
    `));const t=document.createElement("a");t.className="skip-link",t.href=e;const r=document.createElement("slot");r.textContent=this.t("nav.skipToContent"),t.appendChild(r),this.shadow.appendChild(t)}}customElements.define("eva-skip-link",P);class G extends b{static get observedAttributes(){return["current-locale","available-locales"]}connectedCallback(){super.connectedCallback(),this.setupEventListeners()}attributeChangedCallback(){this.render()}setupEventListeners(){this.shadow.addEventListener("click",e=>{const t=e.target;if(t.classList.contains("lang-button")){const r=t.dataset.locale;r&&(w.setLocale(r),this.emit("language-changed",{locale:r}))}})}render(){const e=w.getLocale(),t=this.getAttr("available-locales",'["en-CA", "fr-CA"]');let r;try{r=JSON.parse(t)}catch{r=["en-CA","fr-CA"]}this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-block;
      }

      .switcher {
        display: flex;
        gap: ${s[2]};
        align-items: center;
      }

      .lang-button {
        font-family: ${u.fontBody};
        font-size: 0.875rem;
        font-weight: 600;
        padding: ${s[2]} ${s[3]};
        border: 2px solid ${a.primaryForeground};
        background: transparent;
        color: ${a.primaryForeground};
        cursor: pointer;
        border-radius: ${s[1]};
        text-transform: uppercase;
        min-height: 2rem;
        transition: ${y.all};
      }

      .lang-button:hover {
        background: color-mix(in srgb, ${a.primaryForeground} 10%, transparent);
        transform: translateY(-1px);
      }

      .lang-button:focus-visible {
        outline: 3px solid ${a.ring};
        outline-offset: 2px;
        box-shadow: 0 0 0 3px color-mix(in srgb, ${a.ring} 20%, transparent);
      }

      .lang-button[aria-current="true"] {
        background: ${a.primaryForeground};
        color: ${a.primary};
        border-color: ${a.primaryForeground};
      }
      
      .lang-button[aria-current="true"]:hover {
        background: color-mix(in srgb, ${a.primaryForeground} 95%, ${a.primary});
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
    `));const n=document.createElement("div");n.className="switcher",n.setAttribute("role","group"),n.setAttribute("aria-label",this.t("accessibility.language")),r.forEach(o=>{const i=o===e,l=document.createElement("button");if(l.className="lang-button",l.dataset.locale=o,l.setAttribute("aria-current",i.toString()),l.setAttribute("lang",o),i){const m=document.createElement("span");m.className="sr-only",m.textContent=this.t("language.current"),l.appendChild(m)}const c=o.split("-")[0].toUpperCase();l.appendChild(document.createTextNode(c)),n.appendChild(l)}),this.shadow.appendChild(n)}}customElements.define("eva-language-switcher",G);class H extends b{constructor(){super(...arguments),this.messages=[]}static get observedAttributes(){return["title-key","placeholder-key","assistant-name"]}connectedCallback(){super.connectedCallback(),this.setupEventListeners(),this.addWelcomeMessage()}attributeChangedCallback(){this.render()}addWelcomeMessage(){this.addMessage("assistant",this.t("chat.welcome"))}setupEventListeners(){this.shadow.addEventListener("submit",e=>{e.preventDefault(),this.handleSend()}),this.shadow.addEventListener("keydown",e=>{const t=e;t.key==="Enter"&&!t.shiftKey&&e.target.tagName==="INPUT"&&(e.preventDefault(),this.handleSend())})}handleSend(){if(!this.inputField)return;const e=this.inputField.value.trim();e&&(this.addMessage("user",e),this.inputField.value="",setTimeout(()=>{const t=this.getEVAResponse(e);this.addMessage("assistant",t)},500))}addMessage(e,t){const r={id:Date.now().toString(),type:e,content:t,timestamp:new Date};this.messages.push(r),this.renderMessages()}getEVAResponse(e){const t=e.toLowerCase();return t.includes("employment insurance")||t.includes("ei")?"Employment Insurance (EI) provides temporary financial assistance to unemployed Canadians while they look for work or upgrade their skills. You may be eligible if you have lost your job through no fault of your own and have worked enough insurable hours.":t.includes("old age security")||t.includes("oas")||t.includes("pension")?"Old Age Security (OAS) is a monthly payment available to most Canadians 65 years of age or older. You do not need to have worked to receive OAS. The amount depends on how long you have lived in Canada after age 18.":t.includes("canada pension")||t.includes("cpp")?"Canada Pension Plan (CPP) is a contributory, earnings-related social insurance program. It provides retirement pensions, disability benefits, and survivor benefits. You contribute to CPP through payroll deductions during your working years.":t.includes("job")||t.includes("work")||t.includes("employment")?"ESDC offers many job search resources including Job Bank (jobbank.gc.ca), skills training programs, and employment services. I can help you find the right program for your needs.":t.includes("benefit")?"ESDC administers several benefit programs including Employment Insurance (EI), Canada Pension Plan (CPP), Old Age Security (OAS), and the Canada Child Benefit. Which program would you like to know more about?":`I can help you with information about ESDC programs and services. Try asking about:
• Employment Insurance (EI)
• Old Age Security (OAS)
• Canada Pension Plan (CPP)
• Job search resources
• Benefits programs`}renderMessages(){if(!this.messageContainer)return;this.messageContainer.innerHTML="",this.messages.forEach(t=>{const r=document.createElement("eva-chat-message");r.setAttribute("type",t.type),r.setAttribute("timestamp",t.timestamp.toISOString()),r.textContent=t.content,this.messageContainer.appendChild(r)}),this.messageContainer.scrollTop=this.messageContainer.scrollHeight;const e=this.shadow.querySelector('[role="log"]');if(e&&this.messages.length>0){const t=this.messages[this.messages.length-1];e.textContent=`${t.type==="user"?"You":"EVA"}: ${t.content}`}}render(){const e=this.getAttr("title-key","chat.title"),t=this.getAttr("placeholder-key","chat.placeholder"),r=this.t(e),n=this.t(t);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        margin-top: ${s[16]};
      }

      .chat-panel {
        max-width: 800px;
        margin: 0 auto;
        border: 1px solid ${a.border};
        border-radius: ${s[3]};
        background: ${a.card};
        box-shadow: ${g.md};
        overflow: hidden;
      }

      .chat-header {
        background: ${a.primary};
        color: ${a.primaryForeground};
        padding: ${s[4]};
        font-family: ${u.fontHeading};
        font-size: 1.375rem;
        font-weight: ${u.weightBold};
        border-bottom: 1px solid color-mix(in srgb, ${a.primary} 90%, black);
      }

      .chat-messages {
        height: 400px;
        overflow-y: auto;
        padding: ${s[4]};
        background: ${a.muted};
        scroll-behavior: smooth;
      }
      
      .chat-messages::-webkit-scrollbar {
        width: 8px;
      }
      
      .chat-messages::-webkit-scrollbar-track {
        background: ${a.muted};
      }
      
      .chat-messages::-webkit-scrollbar-thumb {
        background: ${a.border};
        border-radius: 4px;
      }
      
      .chat-messages::-webkit-scrollbar-thumb:hover {
        background: color-mix(in srgb, ${a.border} 80%, black);
      }

      .chat-form {
        display: flex;
        gap: ${s[3]};
        padding: ${s[4]};
        border-top: 1px solid ${a.border};
        background: ${a.card};
      }

      .chat-input {
        flex: 1;
        padding: ${s[3]};
        border: 1px solid ${a.input};
        border-radius: ${s[2]};
        font-family: ${u.fontBody};
        font-size: 0.875rem;
        min-height: 2.5rem;
        transition: ${y.all};
        background: ${a.background};
      }

      .chat-input:hover {
        border-color: color-mix(in srgb, ${a.input} 70%, black);
      }

      .chat-input:focus {
        outline: none;
        border-color: ${a.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${a.ring} 20%, transparent);
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
    `));const o=document.createElement("div");o.className="chat-panel";const i=document.createElement("div");i.className="chat-header",i.textContent=r,o.appendChild(i),this.messageContainer=document.createElement("div"),this.messageContainer.className="chat-messages",this.messageContainer.setAttribute("role","log"),this.messageContainer.setAttribute("aria-live","polite"),this.messageContainer.setAttribute("aria-atomic","false"),o.appendChild(this.messageContainer);const l=document.createElement("div");l.className="sr-only",l.setAttribute("role","log"),l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),o.appendChild(l);const c=document.createElement("form");c.className="chat-form",this.inputField=document.createElement("input"),this.inputField.type="text",this.inputField.className="chat-input",this.inputField.placeholder=n,this.inputField.setAttribute("aria-label",n),c.appendChild(this.inputField);const m=document.createElement("eva-gc-button");m.setAttribute("variant","default"),m.setAttribute("type","submit"),m.textContent=this.t("chat.send"),c.appendChild(m),o.appendChild(c),this.shadow.appendChild(o),this.renderMessages()}}customElements.define("eva-chat-panel",H);class O extends b{static get observedAttributes(){return["type","timestamp"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("type","user"),t=this.getAttr("timestamp");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        margin-bottom: ${s[4]};
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
        padding: ${s[3]} ${s[4]};
        border-radius: ${s[3]};
        font-family: ${u.fontBody};
        font-size: 0.875rem;
        line-height: 1.5;
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      .message.user .message-bubble {
        background: ${a.primary};
        color: ${a.primaryForeground};
        border-bottom-right-radius: ${s[1]};
        box-shadow: ${g.sm};
      }

      .message.assistant .message-bubble {
        background: ${a.card};
        color: ${a.cardForeground};
        border: 1px solid ${a.border};
        border-bottom-left-radius: ${s[1]};
        box-shadow: ${g.xs};
      }

      .message-meta {
        font-size: 0.75rem;
        color: ${a.mutedForeground};
        margin-top: ${s[1]};
        padding: 0 ${s[2]};
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .message {
          animation: none;
        }
      }
    `));const r=document.createElement("div");r.className=`message ${e}`;const n=document.createElement("div");n.className="message-bubble";const o=document.createElement("slot");if(n.appendChild(o),r.appendChild(n),t){const i=document.createElement("div");i.className="message-meta";const l=new Date(t);i.textContent=l.toLocaleTimeString(),r.appendChild(i)}this.shadow.appendChild(r)}}customElements.define("eva-chat-message",O);class U extends b{static get observedAttributes(){return["title-key","description-key","icon","link"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("title-key"),t=this.getAttr("description-key"),r=this.getAttr("icon","📄"),n=this.getAttr("link","#"),o=this.t(e),i=this.t(t);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        height: 100%;
      }

      .card {
        background: ${a.card};
        border: 1px solid ${a.border};
        border-radius: ${s[3]};
        padding: ${s[6]};
        transition: ${y.all};
        text-decoration: none;
        display: flex;
        flex-direction: column;
        height: 100%;
        box-shadow: ${g.sm};
      }

      .card:hover {
        border-color: ${a.primary};
        box-shadow: ${g.lg};
        transform: translateY(-4px);
      }

      .card:focus-visible {
        outline: 3px solid ${a.ring};
        outline-offset: 2px;
        box-shadow: ${g.lg}, 0 0 0 3px color-mix(in srgb, ${a.ring} 20%, transparent);
      }

      .icon {
        font-size: 3rem;
        margin-bottom: ${s[4]};
        display: block;
        line-height: 1;
      }

      .title {
        font-family: ${u.fontHeading};
        font-size: 1.5rem;
        font-weight: ${u.weightBold};
        color: ${a.primary};
        margin: 0 0 ${s[3]} 0;
        line-height: 1.3;
        transition: ${y.colors};
      }

      .description {
        font-family: ${u.fontBody};
        font-size: 0.875rem;
        color: ${a.mutedForeground};
        line-height: 1.6;
        margin: 0;
        flex: 1;
      }

      .card:hover .title {
        color: color-mix(in srgb, ${a.primary} 85%, black);
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
    `));const l=document.createElement("a");l.className="card",l.href=n;const c=document.createElement("span");c.className="icon",c.textContent=r,c.setAttribute("aria-hidden","true"),l.appendChild(c);const m=document.createElement("h3");m.className="title",m.textContent=o,l.appendChild(m);const p=document.createElement("p");p.className="description",p.textContent=i,l.appendChild(p),this.shadow.appendChild(l)}}customElements.define("eva-program-card",U);w.loadLocale("en-CA").then(()=>{w.loadLocale("fr-CA")});const x=document.getElementById("demo-lang-switcher"),k=document.querySelectorAll(".locale-btn"),A={"en-CA":"canada_gc","fr-CA":"canada_gc","en-US":"usa_gov","en-GB":"uk_gov","en-AU":"australia_gov","en-NZ":"nz_govt"},D={"en-CA":"Government of Canada","fr-CA":"Gouvernement du Canada","en-US":"U.S. Government","en-GB":"GOV.UK","en-AU":"Australian Government","en-NZ":"New Zealand Government"};k.forEach(d=>{d.addEventListener("click",()=>{const e=d.dataset.locale;if(k.forEach(o=>o.classList.remove("active")),d.classList.add("active"),x){x.setAttribute("current-locale",e);const o=new CustomEvent("locale-change",{detail:{locale:e},bubbles:!0,composed:!0});x.dispatchEvent(o)}document.documentElement.lang=e;const t=document.getElementById("demo-header");t&&A[e]&&t.setAttribute("profile",A[e]);const r=D[e]||"Government Services";document.title=`Five Eyes Demo - ${r}`;const n=document.createElement("div");n.setAttribute("role","status"),n.setAttribute("aria-live","polite"),n.textContent=`Locale changed to ${d.querySelector("span:nth-child(2)").textContent}`,n.style.position="absolute",n.style.left="-10000px",document.body.appendChild(n),setTimeout(()=>n.remove(),1e3)})});x&&x.addEventListener("locale-change",d=>{var t;const e=(t=d.detail)==null?void 0:t.locale;e&&k.forEach(r=>{r.dataset.locale===e?r.classList.add("active"):r.classList.remove("active")})});const F="en-CA";document.documentElement.lang=F;x&&x.setAttribute("current-locale",F);

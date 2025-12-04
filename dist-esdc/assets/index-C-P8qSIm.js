(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const s={background:"oklch(1 0 0)",foreground:"oklch(0.25 0 0)",card:"oklch(1 0 0)",cardForeground:"oklch(0.25 0 0)",popover:"oklch(1 0 0)",popoverForeground:"oklch(0.25 0 0)",primary:"oklch(0.28 0.04 250)",primaryForeground:"oklch(0.98 0 0)",secondary:"oklch(0.30 0.04 245)",secondaryForeground:"oklch(0.98 0 0)",accent:"oklch(0.45 0.08 10)",accentForeground:"oklch(0.98 0 0)",destructive:"oklch(0.55 0.22 25)",muted:"oklch(0.96 0.005 250)",mutedForeground:"oklch(0.45 0.01 250)",border:"oklch(0.90 0.005 250)",input:"oklch(0.90 0.005 250)",ring:"oklch(0.35 0.06 250)"},$=(d,e=10)=>`color-mix(in srgb, ${d} ${100-e}%, black ${e}%)`,f={fontHeading:'"Lato", sans-serif',fontBody:'"Noto Sans", system-ui, -apple-system, sans-serif',weightNormal:400,weightBold:700},r={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",6:"1.5rem",8:"2rem",12:"3rem",16:"4rem",20:"5rem"},F={contentMaxWidth:"65ch"},m={xs:"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"},g={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",all:"all 200ms cubic-bezier(0.4, 0, 0.2, 1)",colors:"color 200ms cubic-bezier(0.4, 0, 0.2, 1), background-color 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)",transform:"transform 200ms cubic-bezier(0.4, 0, 0.2, 1)"},y={fadeIn:{name:"fadeIn",keyframes:`
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
    `,duration:"2000ms",easing:"cubic-bezier(0.4, 0, 0.6, 1)"},bounce:{name:"bounce",keyframes:`
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-25%); }
    `,duration:"1000ms",easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},shake:{name:"shake",keyframes:`
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
      20%, 40%, 60%, 80% { transform: translateX(10px); }
    `,duration:"500ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},wiggle:{name:"wiggle",keyframes:`
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-5deg); }
      75% { transform: rotate(5deg); }
    `,duration:"500ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},slideInFromLeft:{name:"slideInFromLeft",keyframes:`
      from { transform: translateX(-100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    `,duration:"300ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},slideInFromRight:{name:"slideInFromRight",keyframes:`
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    `,duration:"300ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},slideOutToLeft:{name:"slideOutToLeft",keyframes:`
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(-100%); opacity: 0; }
    `,duration:"300ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},slideOutToRight:{name:"slideOutToRight",keyframes:`
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    `,duration:"300ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},slideOutToTop:{name:"slideOutToTop",keyframes:`
      from { transform: translateY(0); opacity: 1; }
      to { transform: translateY(-100%); opacity: 0; }
    `,duration:"300ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},slideOutToBottom:{name:"slideOutToBottom",keyframes:`
      from { transform: translateY(0); opacity: 1; }
      to { transform: translateY(100%); opacity: 0; }
    `,duration:"300ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},zoomIn:{name:"zoomIn",keyframes:`
      from { transform: scale(0); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    `,duration:"300ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},zoomOut:{name:"zoomOut",keyframes:`
      from { transform: scale(1); opacity: 1; }
      to { transform: scale(0); opacity: 0; }
    `,duration:"300ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},flipIn:{name:"flipIn",keyframes:`
      from { transform: perspective(400px) rotateY(-90deg); opacity: 0; }
      to { transform: perspective(400px) rotateY(0); opacity: 1; }
    `,duration:"400ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},flipOut:{name:"flipOut",keyframes:`
      from { transform: perspective(400px) rotateY(0); opacity: 1; }
      to { transform: perspective(400px) rotateY(90deg); opacity: 0; }
    `,duration:"400ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},spinSlow:{name:"spinSlow",keyframes:`
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    `,duration:"2000ms",easing:"linear"},spinFast:{name:"spinFast",keyframes:`
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    `,duration:"500ms",easing:"linear"},shimmer:{name:"shimmer",keyframes:`
      0% { background-position: -468px 0; }
      100% { background-position: 468px 0; }
    `,duration:"1500ms",easing:"linear"},progress:{name:"progress",keyframes:`
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    `,duration:"1500ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},heartbeat:{name:"heartbeat",keyframes:`
      0%, 100% { transform: scale(1); }
      25% { transform: scale(1.1); }
      50% { transform: scale(1); }
    `,duration:"1000ms",easing:"ease-in-out"},tada:{name:"tada",keyframes:`
      0%, 100% { transform: scale(1) rotate(0deg); }
      10%, 20% { transform: scale(0.9) rotate(-3deg); }
      30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
      40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
    `,duration:"1000ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},fadeSlideIn:{name:"fadeSlideIn",keyframes:`
      from { 
        opacity: 0;
        transform: translateY(-10px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    `,duration:"250ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},fadeSlideOut:{name:"fadeSlideOut",keyframes:`
      from { 
        opacity: 1;
        transform: translateY(0);
      }
      to { 
        opacity: 0;
        transform: translateY(-10px);
      }
    `,duration:"250ms",easing:"cubic-bezier(0.4, 0, 0.2, 1)"},scaleBounce:{name:"scaleBounce",keyframes:`
      0% { transform: scale(0); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    `,duration:"400ms",easing:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}};function N(d){return`
    @keyframes ${d.name} {
      ${d.keyframes}
    }
  `}Object.values(y).map(N).join(`
`);const T={canada_gc:{id:"canada_gc",name:"Government of Canada",nameFr:"Gouvernement du Canada",colors:{primary:"#26374A",secondary:"#284162",accent:"#A62A1E",text:"#333"},assets:{wordmark:"/assets/canada-wordmark.svg",logo:"/assets/canada-logo.svg",flag:"/assets/canada-flag.svg"},footer:{copyright:"© His Majesty the King in Right of Canada",links:[{label:"Privacy",url:"https://canada.ca/en/transparency/privacy"},{label:"Terms and conditions",url:"https://canada.ca/en/transparency/terms"},{label:"Accessibility",url:"https://canada.ca/en/accessibility"},{label:"Canada.ca",url:"https://canada.ca"}]},locale:{primary:"en-CA",secondary:"fr-CA"}},usa_gov:{id:"usa_gov",name:"U.S. Government",colors:{primary:"#002868",secondary:"#BF0A30",accent:"#FFFFFF",text:"#1b1b1b"},assets:{logo:"/assets/usa-seal.svg",flag:"/assets/usa-flag.svg",seal:"/assets/usa-seal.svg"},footer:{copyright:"An official website of the United States government",links:[{label:"Privacy Policy",url:"https://www.usa.gov/privacy"},{label:"Accessibility",url:"https://www.usa.gov/accessibility"},{label:"USA.gov",url:"https://www.usa.gov"}]},locale:{primary:"en-US"}},uk_gov:{id:"uk_gov",name:"UK Government",colors:{primary:"#012169",secondary:"#C8102E",accent:"#FFFFFF",text:"#0b0c0c"},assets:{logo:"/assets/uk-crown.svg",flag:"/assets/uk-flag.svg"},footer:{copyright:"© Crown copyright",links:[{label:"Privacy",url:"https://www.gov.uk/help/privacy-notice"},{label:"Cookies",url:"https://www.gov.uk/help/cookies"},{label:"Accessibility",url:"https://www.gov.uk/help/accessibility-statement"},{label:"GOV.UK",url:"https://www.gov.uk"}]},locale:{primary:"en-GB"}},australia_gov:{id:"australia_gov",name:"Australian Government",colors:{primary:"#00008B",secondary:"#FFCD00",accent:"#FF0000",text:"#313131"},assets:{logo:"/assets/australia-coat-of-arms.svg",flag:"/assets/australia-flag.svg"},footer:{copyright:"© Commonwealth of Australia",links:[{label:"Privacy",url:"https://www.australia.gov.au/privacy"},{label:"Accessibility",url:"https://www.australia.gov.au/accessibility"},{label:"Australia.gov.au",url:"https://www.australia.gov.au"}]},locale:{primary:"en-AU"}},nz_gov:{id:"nz_gov",name:"New Zealand Government",colors:{primary:"#00247D",secondary:"#CC142B",accent:"#FFFFFF",text:"#212121"},assets:{logo:"/assets/nz-fern.svg",flag:"/assets/nz-flag.svg"},footer:{copyright:"© New Zealand Government",links:[{label:"Privacy",url:"https://www.govt.nz/privacy"},{label:"Accessibility",url:"https://www.govt.nz/accessibility"},{label:"Govt.nz",url:"https://www.govt.nz"}]},locale:{primary:"en-NZ"}}};function L(d){return T[d]||T.canada_gc}class E{constructor(){this.currentLocale="en-CA",this.translations={},this.listeners=new Set}static getInstance(){return E.instance||(E.instance=new E),E.instance}async loadLocale(e){if(!this.translations[e])try{const i=await(await fetch(`/src/i18n/locales/${e}.json`)).json();this.translations[e]=i}catch(t){console.error(`Failed to load locale ${e}:`,t),this.translations[e]={}}}async setLocale(e){this.translations[e]||await this.loadLocale(e),this.currentLocale=e,this.notifyListeners()}getLocale(){return this.currentLocale}t(e,t){const i=e.split(".");let n=this.translations[this.currentLocale];for(const a of i)if(n&&typeof n=="object")n=n[a];else return e;return typeof n!="string"?e:t?n.replace(/\{(\w+)\}/g,(a,o)=>t[o]!==void 0?String(t[o]):`{${o}}`):n}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>e(this.currentLocale))}getAvailableLocales(){return["en-CA","fr-CA","en-US","es-US","en-GB","cy-GB","en-AU","en-NZ","mi-NZ"]}isLocaleLoaded(e){return!!this.translations[e]}}const C=E.getInstance();class c extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.unsubscribeI18n=C.subscribe(()=>{this.render()}),this.render()}disconnectedCallback(){this.unsubscribeI18n&&this.unsubscribeI18n()}render(){}t(e,t){return C.t(e,t)}getAttr(e,t=""){return this.getAttribute(e)||t}getBoolAttr(e){return this.hasAttribute(e)}createStyles(e){const t=document.createElement("style");return t.textContent=e,t}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}}class z extends c{static get observedAttributes(){return["profile","app-name-key","logo-url","flag-url"]}attributeChangedCallback(){this.render()}render(){const e=L(this.getAttr("profile","canada_gc")),t=this.getAttr("app-name-key","esdc.title"),i=this.t(t);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        background: ${s.primary};
        color: ${s.primaryForeground};
        font-family: ${f.fontBody};
        box-shadow: ${m.md};
        position: relative;
        z-index: 50;
      }

      .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 ${r[4]};
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${r[4]};
        height: 4rem;
      }

      .logo-section {
        display: flex;
        align-items: center;
        gap: ${r[4]};
      }

      .logo-placeholder {
        width: 2.5rem;
        height: 2.5rem;
        background: color-mix(in srgb, ${s.primaryForeground} 20%, transparent);
        border-radius: ${r[2]};
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: ${f.weightBold};
        font-size: 1.125rem;
      }

      .wordmark {
        height: 40px;
        width: auto;
        transition: ${g.transform};
      }
      
      .wordmark:hover {
        transform: scale(1.02);
      }

      .flag {
        height: 32px;
        width: auto;
      }

      .app-title {
        font-family: ${f.fontHeading};
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0;
        color: ${s.primaryForeground};
      }

      .actions-section {
        display: flex;
        align-items: center;
        gap: ${r[4]};
      }

      nav {
        display: flex;
        align-items: center;
        gap: ${r[4]};
      }

      @media (max-width: 768px) {
        .header-container {
          height: auto;
          min-height: 4rem;
          flex-wrap: wrap;
          padding: ${r[3]} ${r[4]};
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
    `));const n=document.createElement("div");n.className="header-container",n.setAttribute("role","banner");const a=document.createElement("div");a.className="logo-section";const o=this.getAttr("logo-url")||e.assets.wordmark||e.assets.logo;if(o){const b=document.createElement("img");b.src=o,b.alt=e.name,b.className="wordmark",a.appendChild(b)}else{const b=document.createElement("div");b.className="logo-placeholder",b.textContent="GC",b.setAttribute("aria-hidden","true"),a.appendChild(b)}const l=this.getAttr("flag-url")||e.assets.flag;if(l){const b=document.createElement("img");b.src=l,b.alt=`${e.name} flag`,b.className="flag",a.appendChild(b)}const u=document.createElement("h1");u.className="app-title",u.textContent=i,a.appendChild(u),n.appendChild(a);const h=document.createElement("nav");h.className="actions-section",h.setAttribute("aria-label",this.t("header.navigation")||"Header navigation");const p=document.createElement("slot");p.name="actions",h.appendChild(p),n.appendChild(h),this.shadow.appendChild(n)}}customElements.define("eva-gc-header",z);class B extends c{static get observedAttributes(){return["profile"]}attributeChangedCallback(){this.render()}render(){const e=L(this.getAttr("profile","canada_gc"));this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        background: ${s.primary};
        color: ${s.primaryForeground};
        font-family: ${f.fontBody};
        margin-top: auto;
        border-top: 1px solid color-mix(in srgb, ${s.primaryForeground} 10%, transparent);
      }

      .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: ${r[8]} ${r[4]};
      }

      .copyright {
        font-size: 0.875rem;
        margin: 0 0 ${r[4]} 0;
        color: color-mix(in srgb, ${s.primaryForeground} 90%, transparent);
      }

      .links {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: ${r[6]};
      }

      .links li {
        margin: 0;
      }

      .links a {
        color: ${s.primaryForeground};
        text-decoration: underline;
        text-underline-offset: 4px;
        font-size: 0.875rem;
        transition: ${g.colors};
      }

      .links a:hover {
        text-decoration: none;
        color: color-mix(in srgb, ${s.primaryForeground} 80%, transparent);
      }

      .links a:focus-visible {
        outline: 3px solid ${s.ring};
        outline-offset: 3px;
        border-radius: ${r[1]};
      }

      @media (max-width: 768px) {
        .footer-container {
          padding: ${r[6]} ${r[4]};
        }
        
        .links {
          flex-direction: column;
          gap: ${r[3]};
        }
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .links a {
          transition-duration: 0.01ms !important;
        }
      }
    `));const t=document.createElement("div");t.className="footer-container",t.setAttribute("role","contentinfo");const i=document.createElement("p");i.className="copyright",i.textContent=e.footer.copyright,t.appendChild(i);const n=document.createElement("nav");n.setAttribute("aria-label","Footer navigation");const a=document.createElement("ul");a.className="links",e.footer.links.forEach(o=>{const l=document.createElement("li"),u=document.createElement("a");u.href=o.url,u.textContent=this.t(`footer.${o.label.toLowerCase().replace(/\s+/g,"")}`)||o.label,l.appendChild(u),a.appendChild(l)}),n.appendChild(a),t.appendChild(n),this.shadow.appendChild(t)}}customElements.define("eva-gc-footer",B);class D extends c{static get observedAttributes(){return["variant","size","disabled","loading","aria-label","profile"]}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","presentation"),super.connectedCallback()}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("variant","default"),t=this.getAttr("size","default"),i=this.getBoolAttr("disabled"),n=this.getBoolAttr("loading"),o=L(this.getAttr("profile","canada_gc")).colors;this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
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
        border-radius: ${r[2]};
        font-family: ${f.fontBody};
        font-size: 0.875rem;
        font-weight: ${f.weightNormal};
        transition: ${g.all};
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
          outline: 3px solid ${o.primary};
          outline-offset: 3px;
          border-color: ${o.primary};
          box-shadow: 0 0 0 3px color-mix(in srgb, ${o.primary} 20%, transparent);
        }
        
        /* Invalid state */
        &[aria-invalid="true"] {
          box-shadow: 0 0 0 3px color-mix(in srgb, ${s.destructive} 20%, transparent);
          border-color: ${s.destructive};
        }
      }

      /* Default variant - Primary (country-specific) */
      button.default {
        background: ${o.primary};
        color: ${o.text};
        box-shadow: ${m.xs};
      }
      
      button.default:hover:not(:disabled) {
        background: ${$(o.primary,10)};
      }

      /* Destructive variant - Error color */
      button.destructive {
        background: ${s.destructive};
        color: ${o.text};
        box-shadow: ${m.xs};
      }
      
      button.destructive:hover:not(:disabled) {
        background: ${$(s.destructive,10)};
      }
      
      button.destructive:focus-visible {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.destructive} 20%, transparent);
      }

      /* Outline variant */
      button.outline {
        border: 1px solid ${o.primary};
        background: transparent;
        color: ${o.primary};
        box-shadow: ${m.xs};
      }
      
      button.outline:hover:not(:disabled) {
        background: ${o.primary};
        color: ${o.text};
      }

      /* Secondary variant */
      button.secondary {
        background: ${o.secondary};
        color: ${o.text};
        box-shadow: ${m.xs};
      }
      
      button.secondary:hover:not(:disabled) {
        background: ${$(o.secondary,20)};
      }

      /* Ghost variant - Transparent */
      button.ghost:hover:not(:disabled) {
        background: color-mix(in srgb, ${o.primary} 10%, transparent);
        color: ${o.primary};
      }

      /* Link variant */
      button.link {
        color: ${s.primary};
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
        border-radius: ${r[2]};
        gap: 0.375rem;
        padding: 0 0.75rem;
      }
      
      button.size-sm:has(svg) {
        padding-left: 0.625rem;
        padding-right: 0.625rem;
      }
      
      button.size-lg {
        height: 2.5rem;
        border-radius: ${r[2]};
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
    `));const l=document.createElement("button");l.className=`${e} size-${t}`,l.disabled=i||n,l.setAttribute("type","button"),l.setAttribute("aria-disabled",i||n?"true":"false"),l.setAttribute("aria-busy",n?"true":"false");const u=this.getAttr("aria-label");if(u)l.setAttribute("aria-label",u),this.removeAttribute("aria-label");else{const v=(this.textContent||"").trim().length>0;t==="icon"&&!v&&l.setAttribute("aria-label",this.t("common.button"))}if(n){const v=document.createElement("span");v.className="spinner",v.setAttribute("role","status"),v.setAttribute("aria-label",this.t("accessibility.loading")),l.appendChild(v)}const h=document.createElement("slot");l.appendChild(h);const p=document.createElement("span"),b=()=>{const x=h.assignedNodes({flatten:!0}).map(w=>w.textContent||"").join("").trim();p.textContent=x};b(),h.addEventListener("slotchange",b),l.appendChild(p),this.shadow.appendChild(l)}}customElements.define("eva-gc-button",D);class H extends c{constructor(){super(...arguments),this.items=[],this.allowMultiple=!1}static get observedAttributes(){return["allow-multiple"]}connectedCallback(){super.connectedCallback(),this.allowMultiple=this.getBoolAttr("allow-multiple"),this.setupItems()}setupItems(){const e=this.querySelectorAll("eva-accordion-item");this.items=Array.from(e),this.items.forEach((t,i)=>{t.setAttribute("accordion-id",i.toString()),t.addEventListener("toggle",n=>{!this.allowMultiple&&n.detail.open&&this.items.forEach((a,o)=>{o!==i&&a.close()})})})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        border-radius: ${r[2]};
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}class V extends c{constructor(){super(...arguments),this.isOpen=!1}connectedCallback(){super.connectedCallback()}open(){this.isOpen||(this.isOpen=!0,this.setAttribute("open",""),this.emit("toggle",{open:!0}),this.emit("accordion-toggle",{open:!0}),this.updateUI())}close(){this.isOpen&&(this.isOpen=!1,this.removeAttribute("open"),this.emit("toggle",{open:!1}),this.emit("accordion-toggle",{open:!1}),this.updateUI())}toggle(){this.isOpen?this.close():this.open()}render(){this.shadow.innerHTML="";const e=this.getAttribute("accordion-id")||Math.random().toString(36).slice(2);this.panelId=`panel-${e}`;const t=`trigger-${e}`;this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        border-bottom: 1px solid ${s.border};
      }

      :host(:last-child) {
        border-bottom: none;
      }

      .trigger {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: space-between;
        gap: ${r[4]};
        padding: ${r[4]} 0;
        font-family: ${f.fontBody};
        font-size: 0.875rem;
        font-weight: 500;
        text-align: left;
        background: none;
        border: none;
        cursor: pointer;
        transition: ${g.all};
        border-radius: ${r[2]};
        color: ${s.foreground};
      }

      .trigger:hover {
        text-decoration: underline;
      }

      .trigger:focus-visible {
        outline: none;
        border-color: ${s.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.ring} 20%, transparent);
      }

      .trigger:disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      .chevron {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        transform: translateY(0.125rem);
        transition: transform 200ms;
        color: ${s.mutedForeground};
      }

      .trigger[aria-expanded="true"] .chevron {
        transform: translateY(0.125rem) rotate(180deg);
      }

      .content {
        overflow: hidden;
        font-size: 0.875rem;
        transition: height 200ms ease-out;
      }

      .content[data-state="closed"] {
        height: 0;
        animation: accordion-up 200ms ease-out;
      }

      .content[data-state="open"] {
        animation: accordion-down 200ms ease-out;
      }

      @keyframes accordion-down {
        from {
          height: 0;
          opacity: 0;
        }
        to {
          height: var(--accordion-height);
          opacity: 1;
        }
      }

      @keyframes accordion-up {
        from {
          height: var(--accordion-height);
          opacity: 1;
        }
        to {
          height: 0;
          opacity: 0;
        }
      }

      .content-inner {
        padding-top: 0;
        padding-bottom: ${r[4]};
      }

      @media (prefers-reduced-motion: reduce) {
        .trigger,
        .chevron,
        .content {
          transition-duration: 0.01ms !important;
          animation-duration: 0.01ms !important;
        }
      }
    `));const i=document.createElement("button");i.className="trigger",i.id=t,i.setAttribute("aria-expanded",this.isOpen.toString()),i.setAttribute("aria-controls",this.panelId),i.setAttribute("type","button"),i.setAttribute("role","button");const n=document.createElement("slot");n.name="trigger",i.appendChild(n);const a=document.createElement("span");a.className="chevron",a.innerHTML="▼",a.setAttribute("aria-hidden","true"),i.appendChild(a),this.shadow.appendChild(i);const o=document.createElement("div");o.className="content",o.id=this.panelId,o.setAttribute("data-state",this.isOpen?"open":"closed"),o.setAttribute("role","region"),o.setAttribute("aria-labelledby",t),this.isOpen?o.removeAttribute("hidden"):o.setAttribute("hidden",""),o.style.height=this.isOpen?"auto":"0";const l=document.createElement("div");l.className="content-inner";const u=document.createElement("slot");l.appendChild(u),o.appendChild(l),this.shadow.appendChild(o),this.contentEl=o,this.triggerEl=i,i.addEventListener("click",()=>this.toggle()),i.addEventListener("keydown",h=>{if((h.key==="Enter"||h.key===" ")&&(h.preventDefault(),this.toggle()),h.key==="ArrowDown"||h.key==="ArrowUp"){h.preventDefault();const p=this.parentElement;if(!p)return;const b=p.querySelectorAll("eva-accordion-item"),v=[];b.forEach(w=>{var S;const I=(S=w.shadowRoot)==null?void 0:S.querySelector(".trigger");I&&v.push(I)});const x=v.indexOf(i);if(x!==-1){const w=h.key==="ArrowDown"?x+1:x-1;v[w]&&v[w].focus()}}})}updateUI(){!this.triggerEl||!this.contentEl||(this.triggerEl.setAttribute("aria-expanded",this.isOpen.toString()),this.isOpen?(this.contentEl.setAttribute("data-state","open"),this.contentEl.removeAttribute("hidden"),this.contentEl.style.height="auto"):(this.contentEl.setAttribute("data-state","closed"),this.contentEl.setAttribute("hidden",""),this.contentEl.style.height="0"))}}customElements.define("eva-accordion",H);customElements.define("eva-accordion-item",V);class P extends c{static get observedAttributes(){return["variant"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("variant","default");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .alert {
        position: relative;
        width: 100%;
        border-radius: ${r[3]};
        border: 1px solid ${s.border};
        padding: ${r[4]};
        font-size: 0.875rem;
        display: grid;
        grid-template-columns: auto 1fr;
        gap: ${r[3]};
        align-items: flex-start;
      }

      .alert.default {
        background: ${s.card};
        color: ${s.cardForeground};
      }

      .alert.destructive {
        color: ${s.destructive};
        background: ${s.card};
        border-color: ${s.destructive};
      }

      .icon {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        transform: translateY(0.125rem);
        color: currentColor;
      }

      .icon ::slotted(svg) {
        width: 1rem;
        height: 1rem;
      }

      .content {
        display: grid;
        gap: ${r[2]};
      }

      .title {
        min-height: 1rem;
        font-weight: 500;
        line-height: 1;
        letter-spacing: -0.01em;
      }

      .description {
        color: ${s.mutedForeground};
        font-size: 0.875rem;
        line-height: 1.5;
      }

      .alert.destructive .description {
        color: color-mix(in srgb, ${s.destructive} 90%, transparent);
      }
    `));const t=document.createElement("div");t.className=`alert ${e}`,t.setAttribute("role","alert");const i=document.createElement("div");i.className="icon";const n=document.createElement("slot");n.name="icon",i.appendChild(n),t.appendChild(i);const a=document.createElement("div");a.className="content";const o=document.createElement("div");o.className="title";const l=document.createElement("slot");l.name="title",o.appendChild(l),a.appendChild(o);const u=document.createElement("div");u.className="description";const h=document.createElement("slot");u.appendChild(h),a.appendChild(u),t.appendChild(a),this.shadow.appendChild(t)}}customElements.define("eva-alert",P);class R extends c{constructor(){super(...arguments),this.isOpen=!1}static get observedAttributes(){return["open"]}attributeChangedCallback(){this.isOpen=this.getBoolAttr("open"),this.render(),this.isOpen?document.body.style.overflow="hidden":document.body.style.overflow=""}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()})}close(){this.removeAttribute("open"),this.emit("close",{})}render(){if(this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: ${this.isOpen?"block":"none"};
        position: fixed;
        inset: 0;
        z-index: 50;
      }

      .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        animation: fadeIn 200ms;
      }

      .content {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 50;
        display: grid;
        width: calc(100% - 2rem);
        max-width: 32rem;
        transform: translate(-50%, -50%);
        gap: ${r[4]};
        border: 1px solid ${s.border};
        background: ${s.background};
        padding: ${r[6]};
        border-radius: ${r[3]};
        box-shadow: ${m.lg};
        animation: dialogIn 200ms;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes dialogIn {
        from { 
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.95);
        }
        to { 
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      }
    `)),!this.isOpen)return;const e=document.createElement("div");e.className="overlay",this.shadow.appendChild(e);const t=document.createElement("div");t.className="content",t.setAttribute("role","alertdialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",this.getAttr("aria-label","Alert"));const i=document.createElement("slot");t.appendChild(i),this.shadow.appendChild(t)}}customElements.define("eva-alert-dialog",R);class Y extends c{static get observedAttributes(){return["ratio"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("ratio","16/9");let t,i;if(e.includes("/")){const[u,h]=e.split("/");t=parseFloat(u),i=parseFloat(h),(!t||isNaN(t))&&(t=16),(!i||isNaN(i))&&(i=9)}else t=parseFloat(e),!t||isNaN(t)?(t=16,i=9):i=1;const n=i/t*100;this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        position: relative;
        width: 100%;
      }

      .wrapper {
        position: relative;
        width: 100%;
        padding-bottom: ${n}%;
      }

      .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `));const a=document.createElement("div");a.className="wrapper";const o=document.createElement("div");o.className="content";const l=document.createElement("slot");o.appendChild(l),a.appendChild(o),this.shadow.appendChild(a)}}customElements.define("eva-aspect-ratio",Y);class q extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        position: relative;
        display: flex;
        width: 2rem;
        height: 2rem;
        flex-shrink: 0;
        overflow: hidden;
        border-radius: 9999px;
      }

      .avatar {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
      }
    `));const e=document.createElement("div");e.className="avatar";const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class j extends c{static get observedAttributes(){return["src","alt"]}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        aspect-ratio: 1;
        width: 100%;
        height: 100%;
      }

      .image {
        aspect-ratio: 1;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `));const e=document.createElement("img");e.className="image",e.src=this.getAttr("src",""),e.alt=this.getAttr("alt",""),e.addEventListener("error",()=>{this.style.display="none"}),this.shadow.appendChild(e)}}class G extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        background: ${s.muted};
        color: ${s.mutedForeground};
        font-size: 0.875rem;
        font-weight: 500;
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}customElements.define("eva-avatar",q);customElements.define("eva-avatar-image",j);customElements.define("eva-avatar-fallback",G);class U extends c{static get observedAttributes(){return["variant"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("variant","default");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: ${r[2]};
        border: 1px solid transparent;
        padding: 0.125rem ${r[2]};
        font-size: 0.75rem;
        font-weight: 500;
        width: fit-content;
        white-space: nowrap;
        flex-shrink: 0;
        gap: ${r[1]};
        transition: ${g.colors};
        overflow: hidden;
      }

      .badge ::slotted(svg) {
        width: 0.75rem;
        height: 0.75rem;
        pointer-events: none;
      }

      .badge:focus-visible {
        outline: none;
        border-color: ${s.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.ring} 20%, transparent);
      }

      .badge[aria-invalid="true"] {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.destructive} 20%, transparent);
        border-color: ${s.destructive};
      }

      /* Variants */
      .badge.default {
        border-color: transparent;
        background: ${s.primary};
        color: ${s.primaryForeground};
      }

      a.badge.default:hover {
        background: color-mix(in srgb, ${s.primary} 90%, black);
      }

      .badge.secondary {
        border-color: transparent;
        background: ${s.secondary};
        color: ${s.secondaryForeground};
      }

      a.badge.secondary:hover {
        background: color-mix(in srgb, ${s.secondary} 90%, black);
      }

      .badge.destructive {
        border-color: transparent;
        background: ${s.destructive};
        color: white;
      }

      a.badge.destructive:hover {
        background: color-mix(in srgb, ${s.destructive} 90%, black);
      }

      .badge.destructive:focus-visible {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.destructive} 20%, transparent);
      }

      .badge.outline {
        color: ${s.foreground};
        border-color: ${s.border};
      }

      a.badge.outline:hover {
        background: ${s.accent};
        color: ${s.accentForeground};
      }

      @media (prefers-reduced-motion: reduce) {
        .badge {
          transition-duration: 0.01ms !important;
        }
      }
    `));const t=document.createElement("span");t.className=`badge ${e}`,t.setAttribute("data-slot","badge");const i=document.createElement("slot");t.appendChild(i),this.shadow.appendChild(t)}}customElements.define("eva-badge",U);class X extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      nav {
        display: contents;
      }
    `));const e=document.createElement("nav");e.setAttribute("aria-label","breadcrumb");const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class K extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
      }

      .list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: ${r[2]};
        font-size: 0.875rem;
        color: ${s.mutedForeground};
        word-break: break-word;
      }

      @media (min-width: 640px) {
        .list {
          gap: ${r[3]};
        }
      }
    `));const e=document.createElement("ol");e.className="list";const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class W extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
      }

      .item {
        display: inline-flex;
        align-items: center;
        gap: ${r[2]};
      }
    `));const e=document.createElement("li");e.className="item";const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class _ extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
      }

      .link {
        transition: ${g.colors};
        color: ${s.mutedForeground};
        text-decoration: none;
      }

      .link:hover {
        color: ${s.foreground};
      }
    `));const e=document.createElement("a");e.className="link";const t=this.getAttribute("href");t&&(e.href=t);const i=document.createElement("slot");e.appendChild(i),this.shadow.appendChild(e)}}class Z extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
      }

      .page {
        font-weight: 400;
        color: ${s.foreground};
      }
    `));const e=document.createElement("span");e.className="page",e.setAttribute("role","link"),e.setAttribute("aria-disabled","true"),e.setAttribute("aria-current","page");const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class J extends c{render(){var i;this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
      }

      .separator {
        display: contents;
      }

      .separator ::slotted(svg) {
        width: 0.875rem;
        height: 0.875rem;
      }
    `));const e=document.createElement("li");e.className="separator",e.setAttribute("role","presentation"),e.setAttribute("aria-hidden","true");const t=document.createElement("slot");e.appendChild(t),(i=this.textContent)!=null&&i.trim()||(e.textContent="›"),this.shadow.appendChild(e)}}customElements.define("eva-breadcrumb",X);customElements.define("eva-breadcrumb-list",K);customElements.define("eva-breadcrumb-item",W);customElements.define("eva-breadcrumb-link",_);customElements.define("eva-breadcrumb-page",Z);customElements.define("eva-breadcrumb-separator",J);class Q extends c{constructor(){super(...arguments),this.currentDate=new Date,this.selectedDate=null}static get observedAttributes(){return["value"]}attributeChangedCallback(){const e=this.getAttr("value","");e&&(this.selectedDate=new Date(e)),this.render()}previousMonth(){this.currentDate=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()-1,1),this.render()}nextMonth(){this.currentDate=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1,1),this.render()}selectDate(e){this.selectedDate=e,this.setAttribute("value",e.toISOString().split("T")[0]),this.emit("change",{date:e.toISOString()}),this.render()}handleDayKeydown(e,t){const i=t.getMonth()!==this.currentDate.getMonth();switch(e.key){case"ArrowLeft":i&&t<this.currentDate&&(this.previousMonth(),e.preventDefault());break;case"ArrowRight":i&&t>this.currentDate&&(this.nextMonth(),e.preventDefault());break;case"ArrowUp":t.getDate()<=7&&t.getMonth()!==this.currentDate.getMonth()&&(this.previousMonth(),e.preventDefault());break;case"ArrowDown":const n=new Date(t.getFullYear(),t.getMonth()+1,0).getDate();t.getDate()>n-7&&t.getMonth()!==this.currentDate.getMonth()&&(this.nextMonth(),e.preventDefault());break}}getDaysInMonth(){const e=this.currentDate.getFullYear(),t=this.currentDate.getMonth(),i=new Date(e,t,1),n=new Date(e,t+1,0),a=[],o=i.getDay();for(let l=o-1;l>=0;l--)a.push(new Date(e,t,-l));for(let l=1;l<=n.getDate();l++)a.push(new Date(e,t,l));return a}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-block;
        padding: ${r[4]};
        background: ${s.background};
        border: 1px solid ${s.border};
        border-radius: ${r[3]};
        box-shadow: ${m.md};
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${r[4]};
      }

      .header-title {
        font-size: 0.875rem;
        font-weight: 600;
      }

      .nav-button {
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${s.border};
        border-radius: ${r[1]};
        background: transparent;
        cursor: pointer;
        transition: ${g.colors};
        color: ${s.foreground};
      }

      .nav-button:hover {
        background: ${s.accent};
      }

      .weekdays {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: ${r[1]};
        margin-bottom: ${r[2]};
      }

      .weekday {
        text-align: center;
        font-size: 0.75rem;
        font-weight: 500;
        color: ${s.mutedForeground};
        padding: ${r[1]};
      }

      .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: ${r[1]};
      }

      .day {
        width: 2.25rem;
        height: 2.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        border-radius: ${r[1]};
        font-size: 0.875rem;
        cursor: pointer;
        transition: ${g.colors};
        background: transparent;
        color: ${s.foreground};
      }

      .day:hover:not(:disabled) {
        background: ${s.accent};
      }

      .day:focus-visible {
        outline: 3px solid ${s.ring};
        outline-offset: 2px;
        z-index: 10;
      }

      .day[data-outside="true"] {
        color: ${s.mutedForeground};
        opacity: 0.5;
      }

      .day[data-selected="true"] {
        background: ${s.primary};
        color: ${s.primaryForeground};
        border-color: ${s.primary};
      }

      .day[data-today="true"]:not([data-selected="true"]) {
        border-color: ${s.ring};
      }

      .day:disabled {
        pointer-events: none;
        opacity: 0.3;
      }
    `));const e=document.createElement("div"),t=document.createElement("div");t.className="header";const i=document.createElement("button");i.className="nav-button",i.textContent="‹",i.addEventListener("click",()=>this.previousMonth());const n=document.createElement("div");n.className="header-title",n.textContent=this.currentDate.toLocaleDateString("en-US",{month:"long",year:"numeric"});const a=document.createElement("button");a.className="nav-button",a.textContent="›",a.addEventListener("click",()=>this.nextMonth()),t.appendChild(i),t.appendChild(n),t.appendChild(a);const o=document.createElement("div");o.className="weekdays",["Su","Mo","Tu","We","Th","Fr","Sa"].forEach(h=>{const p=document.createElement("div");p.className="weekday",p.textContent=h,o.appendChild(p)});const l=document.createElement("div");l.className="days";const u=new Date;u.setHours(0,0,0,0),this.getDaysInMonth().forEach(h=>{const p=document.createElement("button");p.className="day",p.textContent=h.getDate().toString();const b=h.getMonth()!==this.currentDate.getMonth(),v=this.selectedDate&&h.getDate()===this.selectedDate.getDate()&&h.getMonth()===this.selectedDate.getMonth()&&h.getFullYear()===this.selectedDate.getFullYear(),x=h.getTime()===u.getTime();p.setAttribute("data-outside",b.toString()),p.setAttribute("data-selected",(!!v).toString()),p.setAttribute("data-today",x.toString()),p.addEventListener("click",()=>this.selectDate(h)),p.addEventListener("keydown",w=>this.handleDayKeydown(w,h)),l.appendChild(p)}),e.appendChild(t),e.appendChild(o),e.appendChild(l),this.shadow.appendChild(e)}}customElements.define("eva-calendar",Q);class ee extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .card {
        background: ${s.card};
        color: ${s.cardForeground};
        display: flex;
        flex-direction: column;
        gap: ${r[6]};
        border-radius: ${r[3]};
        border: 1px solid ${s.border};
        padding: ${r[6]};
        box-shadow: ${m.sm};
      }
    `));const e=document.createElement("div");e.className="card",e.setAttribute("data-slot","card");const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class te extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: grid;
        grid-template-rows: auto auto;
        align-items: flex-start;
        gap: ${r[2]};
      }

      :host([has-action]) {
        grid-template-columns: 1fr auto;
      }

      .header {
        display: contents;
      }
    `));const e=document.createElement("div");e.className="header",e.setAttribute("data-slot","card-header");const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class ie extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        line-height: 1;
        font-weight: 600;
      }

      .title {
        display: contents;
      }
    `));const e=document.createElement("div");e.className="title",e.setAttribute("data-slot","card-title");const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class se extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        color: ${s.mutedForeground};
        font-size: 0.875rem;
      }

      .description {
        display: contents;
      }
    `));const e=document.createElement("div");e.className="description",e.setAttribute("data-slot","card-description");const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class ne extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .content {
        display: contents;
      }
    `));const e=document.createElement("div");e.className="content",e.setAttribute("data-slot","card-content");const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class ae extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
        align-items: center;
      }

      .footer {
        display: contents;
      }
    `));const e=document.createElement("div");e.className="footer",e.setAttribute("data-slot","card-footer");const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}customElements.define("eva-card",ee);customElements.define("eva-card-header",te);customElements.define("eva-card-title",ie);customElements.define("eva-card-description",se);customElements.define("eva-card-content",ne);customElements.define("eva-card-footer",ae);class re extends c{constructor(){super(...arguments),this.currentIndex=0,this.totalItems=0}static get observedAttributes(){return["auto-advance","label"]}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>{this.updateItems(),this.updateIndicators(),this.updateLiveRegion()}),this.mutationObserver.observe(this,{childList:!0});const e=parseInt(this.getAttr("auto-advance","0"),10);e>0&&(this.autoAdvanceInterval=window.setInterval(()=>{this.next()},e)),this.updateItems(),this.updateIndicators(),this.updateLiveRegion()}disconnectedCallback(){super.disconnectedCallback(),this.autoAdvanceInterval&&clearInterval(this.autoAdvanceInterval),this.mutationObserver&&this.mutationObserver.disconnect()}updateItems(){const e=this.querySelectorAll("eva-carousel-item");this.totalItems=e.length,this.totalItems!==0&&(this.currentIndex>=this.totalItems&&(this.currentIndex=this.totalItems-1),e.forEach((t,i)=>{i===this.currentIndex?t.setAttribute("active",""):t.removeAttribute("active")}))}previous(){this.totalItems!==0&&(this.currentIndex=(this.currentIndex-1+this.totalItems)%this.totalItems,this.updateItems(),this.updateIndicators(),this.updateLiveRegion(),this.emit("change",{index:this.currentIndex}))}next(){this.totalItems!==0&&(this.currentIndex=(this.currentIndex+1)%this.totalItems,this.updateItems(),this.updateIndicators(),this.updateLiveRegion(),this.emit("change",{index:this.currentIndex}))}goTo(e){e<0||e>=this.totalItems||(this.currentIndex=e,this.updateItems(),this.updateIndicators(),this.updateLiveRegion(),this.emit("change",{index:this.currentIndex}))}updateIndicators(){const e=this.shadow.querySelector(".indicators");if(!e)return;const t=e.querySelectorAll(".indicator");if(t.length!==this.totalItems){e.innerHTML="";for(let i=0;i<this.totalItems;i++){const n=document.createElement("button");n.className="indicator",n.setAttribute("type","button"),n.setAttribute("aria-label",`Go to slide ${i+1}`),n.setAttribute("data-active",(i===this.currentIndex).toString()),n.setAttribute("tabindex",i===this.currentIndex?"0":"-1"),n.addEventListener("keydown",a=>this.handleIndicatorKey(a,i)),n.addEventListener("click",()=>this.goTo(i)),e.appendChild(n)}return}t.forEach((i,n)=>{i.setAttribute("data-active",(n===this.currentIndex).toString()),i.setAttribute("aria-current",n===this.currentIndex?"true":"false"),i.setAttribute("tabindex",n===this.currentIndex?"0":"-1")})}moveIndicatorFocus(e){const t=this.shadow.querySelector(".indicators");if(!t)return;const i=Array.from(t.querySelectorAll(".indicator"));e<0||e>=i.length||(i.forEach((n,a)=>n.setAttribute("tabindex",a===e?"0":"-1")),i[e].focus())}handleIndicatorKey(e,t){switch(e.key){case"ArrowRight":case"Right":e.preventDefault(),this.moveIndicatorFocus((t+1)%this.totalItems);break;case"ArrowLeft":case"Left":e.preventDefault(),this.moveIndicatorFocus((t-1+this.totalItems)%this.totalItems);break;case"Home":e.preventDefault(),this.moveIndicatorFocus(0);break;case"End":e.preventDefault(),this.moveIndicatorFocus(this.totalItems-1);break;case"Enter":case" ":e.preventDefault(),this.goTo(t);break}}updateLiveRegion(){if(this.liveRegion){if(this.totalItems===0){this.liveRegion.textContent="";return}this.liveRegion.textContent=`Slide ${this.currentIndex+1} of ${this.totalItems}`}}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        position: relative;
      }

      .carousel {
        position: relative;
        overflow: hidden;
        border-radius: ${r[3]};
      }

      .items {
        display: flex;
        transition: transform 300ms ease-out;
      }

      .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: color-mix(in srgb, ${s.background} 80%, transparent);
        border: 1px solid ${s.border};
        border-radius: 50%;
        cursor: pointer;
        transition: ${g.colors};
        box-shadow: ${m.md};
        color: ${s.foreground};
        font-size: 1.25rem;
        line-height: 1;
      }

      .nav-button:hover {
        background: ${s.background};
      }

      .nav-button.prev {
        left: ${r[4]};
      }

      .nav-button.next {
        right: ${r[4]};
      }

      .indicators {
        position: absolute;
        bottom: ${r[4]};
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: ${r[2]};
        z-index: 10;
      }

      .indicator {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: color-mix(in srgb, ${s.background} 50%, transparent);
        border: 1px solid ${s.border};
        cursor: pointer;
        transition: ${g.colors};
      }

      .indicator[data-active="true"] {
        background: ${s.primary};
        border-color: ${s.primary};
        width: 1.5rem;
        border-radius: 0.25rem;
      }
      .live-region {
        position: absolute;
        left: -9999px;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
    `));const e=document.createElement("div");e.className="carousel",e.setAttribute("aria-roledescription","carousel"),e.setAttribute("aria-label",this.getAttr("label","Carousel"));const t=document.createElement("div");t.className="items";const i=document.createElement("slot");t.appendChild(i);const n=document.createElement("button");n.className="nav-button prev",n.type="button",n.setAttribute("aria-label","Previous slide"),n.textContent="‹",n.addEventListener("click",()=>this.previous());const a=document.createElement("button");a.className="nav-button next",a.type="button",a.setAttribute("aria-label","Next slide"),a.textContent="›",a.addEventListener("click",()=>this.next());const o=document.createElement("div");o.className="indicators",this.liveRegion=document.createElement("div"),this.liveRegion.className="live-region",this.liveRegion.setAttribute("aria-live","polite"),e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(o),e.appendChild(this.liveRegion),this.shadow.appendChild(e)}}class oe extends c{constructor(){super(...arguments),this.isActive=!1}static get observedAttributes(){return["active"]}attributeChangedCallback(){this.isActive=this.getBoolAttr("active"),this.render()}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: ${this.isActive?"block":"none"};
        flex: 0 0 100%;
        width: 100%;
      }

      .item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item ::slotted(*) {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `));const e=document.createElement("div");e.className="item";const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}customElements.define("eva-carousel",re);customElements.define("eva-carousel-item",oe);class le extends c{constructor(){super(...arguments),this.checked=!1}static get observedAttributes(){return["checked","disabled","value","name","label"]}attributeChangedCallback(){this.checked=this.getBoolAttr("checked"),this.render(),this.inputEl&&(this.inputEl.checked=this.checked,this.inputEl.disabled=this.getBoolAttr("disabled"))}connectedCallback(){super.connectedCallback(),this.setupInput()}setupInput(){this.inputEl&&this.inputEl.addEventListener("change",e=>{const t=e.target;this.checked=t.checked,this.checked?this.setAttribute("checked",""):this.removeAttribute("checked"),this.emit("change",{checked:this.checked}),this.render()})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
      }

      .checkbox-wrapper {
        position: relative;
        display: inline-flex;
      }

      .checkbox {
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

      .visual {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        border-radius: 4px;
        border: 1px solid ${s.input};
        background: transparent;
        box-shadow: ${m.xs};
        transition: ${g.colors};
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .checkbox:checked + .visual {
        background: ${s.primary};
        border-color: ${s.primary};
        color: ${s.primaryForeground};
      }

      .checkbox:focus-visible + .visual {
        outline: none;
        border-color: ${s.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.ring} 50%, transparent);
      }

      .checkbox:disabled + .visual {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .checkbox[aria-invalid="true"] + .visual {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.destructive} 20%, transparent);
        border-color: ${s.destructive};
      }

      .checkbox:hover:not(:disabled) + .visual {
        background: color-mix(in srgb, ${s.input} 30%, transparent);
      }

      .indicator {
        display: ${this.checked?"flex":"none"};
        align-items: center;
        justify-content: center;
        width: 0.875rem;
        height: 0.875rem;
        transition: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .visual,
        .indicator {
          transition-duration: 0.01ms !important;
        }
      }
    `));const e=document.createElement("div");e.className="checkbox-wrapper",e.style.display="inline-flex",e.style.alignItems="center",e.style.gap=r[2];const t=document.createElement("input");t.type="checkbox",t.className="checkbox",t.checked=this.checked,t.disabled=this.getBoolAttr("disabled");const i=`chk-${Math.random().toString(36).slice(2)}`;t.id=i;const n=this.getAttr("name",""),a=this.getAttr("value","");n&&(t.name=n),a&&(t.value=a),e.appendChild(t);const o=document.createElement("div");o.className="visual",o.setAttribute("role","checkbox"),o.setAttribute("aria-checked",this.checked.toString()),o.setAttribute("tabindex","0"),o.addEventListener("click",()=>{this.getBoolAttr("disabled")||t.click()}),o.addEventListener("keydown",p=>{(p.key===" "||p.key==="Enter")&&(p.preventDefault(),t.click())});const l=document.createElement("div");l.className="indicator",l.innerHTML="✓",o.appendChild(l),e.appendChild(o);const u=this.getAttr("label",""),h=this.getAttr("aria-label","");if(u){this.labelId=this.labelId||`chk-label-${Math.random().toString(36).slice(2)}`;const p=document.createElement("label");p.id=this.labelId,p.htmlFor=i,p.textContent=u,p.style.fontSize="0.75rem",p.style.fontWeight="500",p.style.cursor="pointer",e.appendChild(p),o.setAttribute("aria-labelledby",this.labelId)}else o.removeAttribute("aria-labelledby"),h?(o.setAttribute("aria-label",h),t.setAttribute("aria-label",h)):(o.setAttribute("aria-label","Checkbox"),t.setAttribute("aria-label","Checkbox")),this.labelId=void 0;this.shadow.appendChild(e),this.inputEl=t,this.setupInput()}}customElements.define("eva-checkbox",le);class de extends c{constructor(){super(...arguments),this.isOpen=!1}static get observedAttributes(){return["open"]}attributeChangedCallback(){this.isOpen=this.getBoolAttr("open"),this.updateContent()}connectedCallback(){super.connectedCallback(),this.updateContent()}updateContent(){const e=this.querySelector("eva-collapsible-content");e&&(this.isOpen?e.setAttribute("open",""):e.removeAttribute("open"))}toggle(){this.isOpen=!this.isOpen,this.isOpen?this.setAttribute("open",""):this.removeAttribute("open"),this.emit("toggle",{open:this.isOpen})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}class ce extends c{connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{const e=this.closest("eva-collapsible");e&&e.toggle&&e.toggle()})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: contents;
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}class he extends c{constructor(){super(...arguments),this.isOpen=!1}static get observedAttributes(){return["open"]}attributeChangedCallback(){this.isOpen=this.getBoolAttr("open"),this.render()}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: ${this.isOpen?"block":"none"};
      }

      .content {
        overflow: hidden;
        transition: ${g.all};
        animation: ${this.isOpen?"collapsibleDown":"collapsibleUp"} 200ms ease-out;
      }

      @keyframes collapsibleDown {
        from {
          height: 0;
          opacity: 0;
        }
        to {
          height: auto;
          opacity: 1;
        }
      }

      @keyframes collapsibleUp {
        from {
          height: auto;
          opacity: 1;
        }
        to {
          height: 0;
          opacity: 0;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .content {
          transition-duration: 0.01ms !important;
          animation-duration: 0.01ms !important;
        }
      }
    `));const e=document.createElement("div");e.className="content";const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}customElements.define("eva-collapsible",de);customElements.define("eva-collapsible-trigger",ce);customElements.define("eva-collapsible-content",he);class ue extends c{constructor(){super(...arguments),this.isOpen=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",e=>{e.preventDefault(),this.isOpen=!0,this.lastX=e.clientX,this.lastY=e.clientY,this.render(),requestAnimationFrame(()=>this.positionMenu(this.lastX,this.lastY))}),document.addEventListener("click",()=>{this.isOpen&&(this.isOpen=!1,this.render())}),this.addEventListener("keydown",e=>this.handleMenuKeydown(e))}positionMenu(e,t){const i=this.shadow.querySelector(".menu");i&&(i.style.left=`${e}px`,i.style.top=`${t}px`,setTimeout(()=>{const n=i.getBoundingClientRect();n.right>window.innerWidth&&(i.style.left=`${e-n.width}px`),n.bottom>window.innerHeight&&(i.style.top=`${t-n.height}px`)},0))}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        position: relative;
      }

      .trigger {
        display: contents;
      }

      .menu {
        position: fixed;
        z-index: 50;
        min-width: 12rem;
        padding: ${r[1]};
        background: ${s.popover};
        border: 1px solid ${s.border};
        border-radius: ${r[2]};
        box-shadow: ${m.lg};
        display: ${this.isOpen?"block":"none"};
        animation: contextMenuIn 150ms ease-out;
      }

      @keyframes contextMenuIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `));const e=document.createElement("div");e.className="trigger";const t=document.createElement("slot");t.name="trigger",e.appendChild(t);const i=document.createElement("div");i.className="menu",i.setAttribute("role","menu"),i.setAttribute("aria-orientation","vertical"),i.addEventListener("keydown",a=>this.handleMenuKeydown(a));const n=document.createElement("slot");i.appendChild(n),this.shadow.appendChild(e),this.shadow.appendChild(i),this.isOpen&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.initializeRoving()))}getItemButtons(){return Array.from(this.querySelectorAll("eva-context-menu-item")).map(e=>{var t;return(t=e.shadowRoot)==null?void 0:t.querySelector("button.item")}).filter(Boolean)}initializeRoving(){const e=this.getItemButtons();e.forEach((t,i)=>t.setAttribute("tabindex",i===0?"0":"-1")),e[0]&&e[0].focus()}moveFocus(e){var a;const t=this.getItemButtons();if(!t.length)return;let i=t.findIndex(o=>o===document.activeElement);if(i===-1){const o=document.activeElement,l=(a=o==null?void 0:o.shadowRoot)==null?void 0:a.querySelector("button.item");l&&(i=t.findIndex(u=>u===l))}const n=i===-1?0:Math.min(Math.max(i+e,0),t.length-1);t.forEach((o,l)=>o.setAttribute("tabindex",l===n?"0":"-1")),t[n].focus()}handleMenuKeydown(e){var t;if(this.isOpen)switch(e.key){case"ArrowDown":case"Down":this.moveFocus(1),e.preventDefault();break;case"ArrowUp":case"Up":this.moveFocus(-1),e.preventDefault();break;case"Home":this.moveFocus(-9999),e.preventDefault();break;case"End":this.moveFocus(9999),e.preventDefault();break;case"Escape":this.isOpen=!1,this.render(),e.preventDefault();break;case"Enter":case" ":{let i=document.activeElement;if(i&&!i.classList.contains("item")){const n=(t=i.shadowRoot)==null?void 0:t.querySelector("button.item");n&&(i=n)}i&&i.classList.contains("item")&&(i.click(),e.preventDefault());break}}}}class pe extends c{render(){this.shadow.innerHTML="";const e=this.getAttr("variant","default");this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .item {
        position: relative;
        display: flex;
        align-items: center;
        gap: ${r[2]};
        width: 100%;
        padding: ${r[2]} ${r[3]};
        border-radius: ${r[1]};
        font-size: 0.875rem;
        cursor: pointer;
        transition: ${g.colors};
        background: transparent;
        border: none;
        text-align: left;
        color: ${e==="destructive"?s.destructive:s.foreground};
      }

      .item:hover {
        background: ${e==="destructive"?"color-mix(in srgb, "+s.destructive+" 10%, transparent)":s.accent};
      }

      .item:focus-visible {
        outline: none;
        background: ${s.accent};
      }

      .item:disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      .item ::slotted(svg) {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
      }
    `));const t=document.createElement("button");t.className="item",t.setAttribute("role","menuitem"),t.hasAttribute("tabindex")||t.setAttribute("tabindex","-1"),this.getBoolAttr("disabled")&&(t.disabled=!0);const i=document.createElement("slot");t.appendChild(i),this.shadow.appendChild(t)}}customElements.define("eva-context-menu",ue);customElements.define("eva-context-menu-item",pe);class me extends c{constructor(){super(...arguments),this.isOpen=!1}static get observedAttributes(){return["open"]}attributeChangedCallback(){this.isOpen=this.getBoolAttr("open"),this.render(),this.isOpen?this.handleOpen():this.handleClose()}connectedCallback(){super.connectedCallback(),this.setupEventListeners()}setupEventListeners(){document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()})}handleOpen(){document.body.style.overflow="hidden",this.emit("open",{})}handleClose(){document.body.style.overflow="",this.emit("close",{})}open(){this.setAttribute("open","")}close(){this.removeAttribute("open")}render(){if(this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: ${this.isOpen?"block":"none"};
        position: fixed;
        inset: 0;
        z-index: 50;
      }

      .overlay {
        position: fixed;
        inset: 0;
        z-index: 50;
        background: rgba(0, 0, 0, 0.5);
        animation: ${this.isOpen?"fadeIn":"fadeOut"} 200ms;
      }

      .content {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 50;
        display: grid;
        width: calc(100% - 2rem);
        max-width: 32rem;
        transform: translate(-50%, -50%);
        gap: ${r[4]};
        border: 1px solid ${s.border};
        background: ${s.background};
        padding: ${r[6]};
        box-shadow: ${m.lg};
        border-radius: ${r[3]};
        animation: ${this.isOpen?"dialogIn":"dialogOut"} 200ms;
      }

      .close-button {
        position: absolute;
        top: ${r[4]};
        right: ${r[4]};
        border-radius: ${r[1]};
        opacity: 0.7;
        background: none;
        border: none;
        cursor: pointer;
        padding: ${r[2]};
        transition: ${g.all};
        color: ${s.foreground};
      }

      .close-button:hover {
        opacity: 1;
        background: ${s.accent};
      }

      .close-button:focus-visible {
        outline: none;
        border-color: ${s.ring};
        box-shadow: 0 0 0 2px color-mix(in srgb, ${s.ring} 50%, transparent);
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

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }

      @keyframes dialogIn {
        from { 
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.95);
        }
        to { 
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      }

      @keyframes dialogOut {
        from { 
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        to { 
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.95);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .overlay,
        .content {
          animation-duration: 0.01ms !important;
        }
      }
    `)),!this.isOpen)return;const e=document.createElement("div");e.className="overlay",e.addEventListener("click",()=>this.close()),this.shadow.appendChild(e),this.overlayEl=e;const t=document.createElement("div");t.className="content",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true");const i=this.getAttr("aria-label");i?t.setAttribute("aria-label",i):t.setAttribute("aria-label","Dialog");const n=this.querySelector("eva-dialog-title");if(n){const u=n.getAttribute("id")||"dialog-title";n.setAttribute("id",u),t.setAttribute("aria-labelledby",u)}t.addEventListener("click",u=>u.stopPropagation());const a=document.createElement("slot");t.appendChild(a);const o=document.createElement("button");o.className="close-button",o.setAttribute("type","button"),o.innerHTML="✕",o.addEventListener("click",()=>this.close());const l=document.createElement("span");l.className="sr-only",l.textContent="Close",o.appendChild(l),t.appendChild(o),this.shadow.appendChild(t),this.contentEl=t}}class ge extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
        flex-direction: column;
        gap: ${r[2]};
        text-align: center;
      }

      @media (min-width: 640px) {
        :host {
          text-align: left;
        }
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}class be extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
        flex-direction: column-reverse;
        gap: ${r[2]};
      }

      @media (min-width: 640px) {
        :host {
          flex-direction: row;
          justify-content: flex-end;
        }
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}class fe extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        font-size: 1.125rem;
        line-height: 1;
        font-weight: 600;
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}class ve extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        color: ${s.mutedForeground};
        font-size: 0.875rem;
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}customElements.define("eva-dialog",me);customElements.define("eva-dialog-header",ge);customElements.define("eva-dialog-footer",be);customElements.define("eva-dialog-title",fe);customElements.define("eva-dialog-description",ve);class ye extends c{constructor(){super(...arguments),this.isOpen=!1}static get observedAttributes(){return["open","side"]}attributeChangedCallback(){const e=this.isOpen;this.isOpen=this.getBoolAttr("open"),this.render(),e&&!this.isOpen&&this.emit("close")}connectedCallback(){super.connectedCallback(),this.shadow.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()})}close(){this.isOpen=!1,this.removeAttribute("open"),this.emit("close"),this.render()}render(){this.shadow.innerHTML="";const e=this.getAttr("side","right");this.shadow.appendChild(this.createStyles(`
      :host {
        display: ${this.isOpen?"block":"none"};
      }

      .overlay {
        position: fixed;
        inset: 0;
        z-index: 50;
        background: rgba(0, 0, 0, 0.5);
        animation: fadeIn 200ms;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .drawer {
        position: fixed;
        z-index: 51;
        background: ${s.background};
        box-shadow: ${m.xl};
        display: flex;
        flex-direction: column;
        gap: ${r[6]};
        padding: ${r[6]};
        animation: slideIn 300ms ease-out;
        
        ${e==="right"?`
          top: 0;
          right: 0;
          bottom: 0;
          width: min(100%, 24rem);
        `:e==="left"?`
          top: 0;
          left: 0;
          bottom: 0;
          width: min(100%, 24rem);
        `:e==="top"?`
          top: 0;
          left: 0;
          right: 0;
          height: min(100%, 24rem);
        `:`
          bottom: 0;
          left: 0;
          right: 0;
          height: min(100%, 24rem);
        `}
      }

      @keyframes slideIn {
        from {
          transform: ${e==="right"?"translateX(100%)":e==="left"?"translateX(-100%)":e==="top"?"translateY(-100%)":"translateY(100%)"};
        }
        to {
          transform: translate(0);
        }
      }
    `));const t=document.createElement("div");t.className="overlay",t.addEventListener("click",()=>this.close());const i=document.createElement("div");i.className="drawer";const n=document.createElement("slot");i.appendChild(n),this.shadow.appendChild(t),this.shadow.appendChild(i)}}customElements.define("eva-drawer",ye);class we extends c{constructor(){super(...arguments),this.isOpen=!1,this.handleOutsideClick=e=>{this.contains(e.target)||this.close()}}static get observedAttributes(){return["open"]}attributeChangedCallback(){this.isOpen=this.getBoolAttr("open"),this.render(),this.isOpen?(this.positionContent(),document.addEventListener("click",this.handleOutsideClick)):document.removeEventListener("click",this.handleOutsideClick)}connectedCallback(){super.connectedCallback(),this.setupTrigger()}disconnectedCallback(){document.removeEventListener("click",this.handleOutsideClick)}setupTrigger(){const e=this.querySelector('[slot="trigger"]');e&&(this.triggerEl=e,e.addEventListener("click",t=>{t.stopPropagation(),this.toggle()}))}positionContent(){!this.contentEl||!this.triggerEl||requestAnimationFrame(()=>{const e=this.triggerEl.getBoundingClientRect(),t=this.contentEl.getBoundingClientRect();let i=e.bottom+4,n=e.left;i+t.height>window.innerHeight&&(i=e.top-t.height-4),n+t.width>window.innerWidth&&(n=window.innerWidth-t.width-8),this.contentEl.style.top=`${i}px`,this.contentEl.style.left=`${n}px`})}open(){this.setAttribute("open","")}close(){this.removeAttribute("open")}toggle(){this.isOpen?this.close():this.open()}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-block;
        position: relative;
      }

      .trigger {
        display: contents;
      }

      .content {
        display: ${this.isOpen?"block":"none"};
        position: fixed;
        z-index: 50;
        min-width: 8rem;
        max-height: var(--radix-dropdown-menu-content-available-height, 24rem);
        overflow-x: hidden;
        overflow-y: auto;
        border-radius: ${r[2]};
        border: 1px solid ${s.border};
        background: ${s.popover};
        color: ${s.popoverForeground};
        padding: ${r[1]};
        box-shadow: ${m.md};
        animation: ${this.isOpen?"menuIn":"menuOut"} 200ms;
      }

      @keyframes menuIn {
        from { 
          opacity: 0;
          transform: scale(0.95) translateY(-0.5rem);
        }
        to { 
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      @keyframes menuOut {
        from { 
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        to { 
          opacity: 0;
          transform: scale(0.95) translateY(-0.5rem);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .content {
          animation-duration: 0.01ms !important;
        }
      }
    `));const e=document.createElement("div");e.className="trigger";const t=document.createElement("slot");if(t.name="trigger",e.appendChild(t),this.shadow.appendChild(e),this.isOpen){const i=document.createElement("div");i.className="content",i.setAttribute("role","menu"),i.addEventListener("keydown",a=>this.handleMenuKeydown(a)),i.addEventListener("click",a=>{const o=a.target;(o.closest("eva-dropdown-menu-item")||o.classList.contains("item"))&&this.close()});const n=document.createElement("slot");i.appendChild(n),this.shadow.appendChild(i),this.contentEl=i,requestAnimationFrame(()=>{this.positionContent(),requestAnimationFrame(()=>this.initializeRovingItems())})}}getMenuItemButtons(){return Array.from(this.querySelectorAll("eva-dropdown-menu-item")).map(e=>{var t;return(t=e.shadowRoot)==null?void 0:t.querySelector(".item")}).filter(Boolean)}initializeRovingItems(){const e=this.getMenuItemButtons();e.forEach((t,i)=>{t.setAttribute("tabindex",i===0?"0":"-1"),t.setAttribute("role","menuitem")}),e[0]&&e[0].focus()}moveItemFocus(e){const t=this.getMenuItemButtons();if(!t.length)return;const i=t.findIndex(a=>a===document.activeElement),n=i===-1?0:Math.min(Math.max(i+e,0),t.length-1);t.forEach((a,o)=>a.setAttribute("tabindex",o===n?"0":"-1")),t[n].focus()}handleMenuKeydown(e){switch(e.key){case"ArrowDown":case"Down":this.moveItemFocus(1),e.preventDefault();break;case"ArrowUp":case"Up":this.moveItemFocus(-1),e.preventDefault();break;case"Home":this.moveItemFocus(-9999),e.preventDefault();break;case"End":this.moveItemFocus(9999),e.preventDefault();break;case"Escape":this.close(),e.preventDefault();break;case"Enter":case" ":{const t=document.activeElement;t&&t.classList.contains("item")&&(t.click(),e.preventDefault());break}}}}class xe extends c{static get observedAttributes(){return["variant","disabled"]}connectedCallback(){super.connectedCallback(),this.setupEventListeners()}setupEventListeners(){this.shadow.addEventListener("click",()=>{this.getBoolAttr("disabled")||this.emit("select",{})})}render(){const e=this.getAttr("variant","default");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .item {
        position: relative;
        display: flex;
        align-items: center;
        gap: ${r[2]};
        border-radius: ${r[1]};
        padding: ${r[2]};
        font-size: 0.875rem;
        outline: none;
        user-select: none;
        cursor: pointer;
        transition: ${g.colors};
        color: ${e==="destructive"?s.destructive:s.foreground};
      }

      .item:hover {
        background: ${e==="destructive"?"color-mix(in srgb, "+s.destructive+" 10%, transparent)":s.accent};
        color: ${e==="destructive"?s.destructive:s.accentForeground};
      }

      .item:focus-visible {
        background: ${s.accent};
      }

      .item[disabled] {
        pointer-events: none;
        opacity: 0.5;
      }

      .item ::slotted(svg) {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        pointer-events: none;
        color: ${s.mutedForeground};
      }

      @media (prefers-reduced-motion: reduce) {
        .item {
          transition-duration: 0.01ms !important;
        }
      }
    `));const t=document.createElement("div");t.className="item",t.setAttribute("role","menuitem"),t.hasAttribute("tabindex")||t.setAttribute("tabindex","-1"),this.getBoolAttr("disabled")&&t.setAttribute("disabled","");const i=document.createElement("slot");t.appendChild(i),this.shadow.appendChild(t)}}class ke extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .separator {
        background: ${s.border};
        height: 1px;
        margin: ${r[1]} -${r[1]};
        pointer-events: none;
      }
    `));const e=document.createElement("div");e.className="separator",e.setAttribute("role","separator"),this.shadow.appendChild(e)}}class Ee extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .label {
        padding: ${r[2]};
        font-size: 0.875rem;
        font-weight: 500;
        color: ${s.foreground};
      }
    `));const e=document.createElement("div");e.className="label";const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}customElements.define("eva-dropdown-menu",we);customElements.define("eva-dropdown-menu-item",xe);customElements.define("eva-dropdown-menu-separator",ke);customElements.define("eva-dropdown-menu-label",Ee);class Ce extends c{constructor(){super(...arguments),this.isOpen=!1}connectedCallback(){super.connectedCallback(),this.setupTrigger()}setupTrigger(){const e=this.querySelector('[slot="trigger"]');e&&(this.triggerEl=e,e.addEventListener("mouseenter",()=>{this.hoverTimeoutId=window.setTimeout(()=>{this.isOpen=!0,this.render(),requestAnimationFrame(()=>this.positionContent())},200)}),e.addEventListener("mouseleave",()=>{this.hoverTimeoutId&&clearTimeout(this.hoverTimeoutId),this.isOpen=!1,this.render()}))}positionContent(){if(!this.contentEl||!this.triggerEl)return;const e=this.triggerEl.getBoundingClientRect(),t=this.contentEl.getBoundingClientRect();let i=e.bottom+4,n=e.left+e.width/2-t.width/2;i+t.height>window.innerHeight&&(i=e.top-t.height-4),n<8&&(n=8),n+t.width>window.innerWidth-8&&(n=window.innerWidth-t.width-8),this.contentEl.style.top=`${i}px`,this.contentEl.style.left=`${n}px`}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-block;
        position: relative;
      }

      .trigger {
        display: contents;
      }

      .content {
        display: ${this.isOpen?"block":"none"};
        position: fixed;
        z-index: 50;
        width: 16rem;
        border-radius: ${r[2]};
        border: 1px solid ${s.border};
        background: ${s.popover};
        color: ${s.popoverForeground};
        padding: ${r[4]};
        box-shadow: ${m.md};
        outline: none;
        animation: hoverCardIn 200ms;
      }

      @keyframes hoverCardIn {
        from { 
          opacity: 0;
          transform: scale(0.95) translateY(-0.5rem);
        }
        to { 
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
    `));const e=document.createElement("div");e.className="trigger";const t=document.createElement("slot");if(t.name="trigger",e.appendChild(t),this.shadow.appendChild(e),this.isOpen){const i=document.createElement("div");i.className="content";const n=document.createElement("slot");i.appendChild(n),this.shadow.appendChild(i),this.contentEl=i,i.addEventListener("mouseenter",()=>{this.hoverTimeoutId&&clearTimeout(this.hoverTimeoutId)}),i.addEventListener("mouseleave",()=>{this.isOpen=!1,this.render()})}}}customElements.define("eva-hover-card",Ce);class $e extends c{static get observedAttributes(){return["type","value","placeholder","disabled","readonly","label","error","aria-label"]}attributeChangedCallback(){if(this.inputEl){const e=this.getAttr("type","text"),t=this.getAttr("value",""),i=this.getAttr("placeholder",""),n=this.getAttr("label",""),a=this.getAttr("error",""),o=this.getAttr("aria-label","");this.inputEl.type=e,this.inputEl.value=t,this.inputEl.placeholder=i,this.inputEl.disabled=this.getBoolAttr("disabled"),this.inputEl.readOnly=this.getBoolAttr("readonly"),n&&this.labelId?(this.inputEl.setAttribute("aria-labelledby",this.labelId),this.inputEl.removeAttribute("aria-label")):(this.inputEl.removeAttribute("aria-labelledby"),o?this.inputEl.setAttribute("aria-label",o):this.inputEl.setAttribute("aria-label","Input")),a&&this.errorId?(this.inputEl.setAttribute("aria-describedby",this.errorId),this.inputEl.setAttribute("aria-invalid","true")):(this.inputEl.removeAttribute("aria-describedby"),this.inputEl.removeAttribute("aria-invalid"))}}connectedCallback(){super.connectedCallback(),this.setupInput()}setupInput(){this.inputEl&&(this.inputEl.addEventListener("input",e=>{const t=e.target;this.setAttribute("value",t.value),this.emit("input",{value:t.value})}),this.inputEl.addEventListener("change",e=>{const t=e.target;this.emit("change",{value:t.value})}))}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-block;
        width: 100%;
      }

      .input {
        display: flex;
        height: 2.25rem;
        width: 100%;
        min-width: 0;
        border-radius: ${r[2]};
        border: 1px solid ${s.input};
        background: transparent;
        padding: ${r[1]} ${r[3]};
        font-size: 0.875rem;
        box-shadow: ${m.xs};
        transition: ${g.colors};
        outline: none;
        color: ${s.foreground};
      }

      .input::placeholder {
        color: ${s.mutedForeground};
      }

      .input::selection {
        background: ${s.primary};
        color: ${s.primaryForeground};
      }

      .input:hover {
        background: color-mix(in srgb, ${s.input} 30%, transparent);
      }

      .input:focus-visible {
        border-color: ${s.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.ring} 50%, transparent);
      }

      .input:disabled {
        pointer-events: none;
        cursor: not-allowed;
        opacity: 0.5;
      }

      .input[aria-invalid="true"] {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.destructive} 20%, transparent);
        border-color: ${s.destructive};
      }

      .input[type="file"] {
        cursor: pointer;
      }

      .input[type="file"]::file-selector-button {
        display: inline-flex;
        height: 1.75rem;
        border: 0;
        background: transparent;
        font-size: 0.875rem;
        font-weight: 500;
        margin-right: ${r[2]};
        cursor: pointer;
        color: ${s.foreground};
      }

      @media (prefers-reduced-motion: reduce) {
        .input {
          transition-duration: 0.01ms !important;
        }
      }

      @media (min-width: 768px) {
        .input {
          font-size: 0.875rem;
        }
      }
    `));const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap=r[1];const t=this.getAttr("label","");let i;t?(i=document.createElement("label"),this.labelId=this.labelId||`inp-label-${Math.random().toString(36).slice(2)}`,i.id=this.labelId,i.textContent=t,i.style.fontSize="0.75rem",i.style.fontWeight="500",i.style.color=s.mutedForeground,e.appendChild(i)):this.labelId=void 0;const n=document.createElement("input");n.className="input";const a=`inp-${Math.random().toString(36).slice(2)}`;if(n.id=a,n.type=this.getAttr("type","text"),n.value=this.getAttr("value",""),n.placeholder=this.getAttr("placeholder",""),n.disabled=this.getBoolAttr("disabled"),n.readOnly=this.getBoolAttr("readonly"),i)i.htmlFor=a,n.setAttribute("aria-labelledby",this.labelId);else{const l=this.getAttr("aria-label","");l?n.setAttribute("aria-label",l):n.setAttribute("aria-label","Input")}const o=this.getAttr("error","");if(o?(this.errorId=this.errorId||`inp-err-${Math.random().toString(36).slice(2)}`,n.setAttribute("aria-describedby",this.errorId),n.setAttribute("aria-invalid","true")):this.errorId=void 0,e.appendChild(n),o){const l=document.createElement("div");l.id=this.errorId,l.textContent=o,l.style.fontSize="0.75rem",l.style.color=s.destructive,e.appendChild(l)}this.shadow.appendChild(e),this.inputEl=n,this.setupInput()}}customElements.define("eva-input",$e);class Ae extends c{constructor(){super(...arguments),this.inputs=[],this.maxLength=6}static get observedAttributes(){return["max-length","value"]}attributeChangedCallback(){this.maxLength=parseInt(this.getAttr("max-length","6"),10),this.render()}handleInput(e,t){var a;t.target.value&&e<this.maxLength-1&&((a=this.inputs[e+1])==null||a.focus()),this.emitValue()}handleKeyDown(e,t){var n,a,o;const i=t.target;t.key==="Backspace"&&!i.value&&e>0?(n=this.inputs[e-1])==null||n.focus():t.key==="ArrowLeft"&&e>0?(a=this.inputs[e-1])==null||a.focus():t.key==="ArrowRight"&&e<this.maxLength-1&&((o=this.inputs[e+1])==null||o.focus())}handlePaste(e){var a,o;e.preventDefault();const i=(((a=e.clipboardData)==null?void 0:a.getData("text"))||"").split("").slice(0,this.maxLength);i.forEach((l,u)=>{this.inputs[u]&&(this.inputs[u].value=l)});const n=Math.min(i.length,this.maxLength-1);(o=this.inputs[n])==null||o.focus(),this.emitValue()}emitValue(){const e=this.inputs.map(t=>t.value).join("");this.emit("change",{value:e})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
        gap: ${r[2]};
      }

      .input {
        width: 2.5rem;
        height: 2.5rem;
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        border: 1px solid ${s.input};
        border-radius: ${r[2]};
        background: ${s.background};
        color: ${s.foreground};
        box-shadow: ${m.xs};
        transition: ${g.colors};
      }

      .input:hover {
        border-color: ${s.ring};
      }

      .input:focus {
        outline: none;
        border-color: ${s.ring};
        box-shadow: 0 0 0 2px color-mix(in srgb, ${s.ring} 50%, transparent);
      }

      .input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `));const e=document.createElement("div");e.style.display="contents",this.inputs=[];const t=this.getAttr("aria-label","One-time passcode");for(let i=0;i<this.maxLength;i++){const n=document.createElement("input");n.className="input",n.type="text",n.inputMode="numeric",n.maxLength=1,n.pattern="[0-9]",n.setAttribute("aria-label",`${t} ${i+1}/${this.maxLength}`),this.getBoolAttr("disabled")&&(n.disabled=!0),n.addEventListener("input",a=>this.handleInput(i,a)),n.addEventListener("keydown",a=>this.handleKeyDown(i,a)),i===0&&n.addEventListener("paste",a=>this.handlePaste(a)),this.inputs.push(n),e.appendChild(n)}this.shadow.appendChild(e)}}customElements.define("eva-input-otp",Ae);class Le extends c{static get observedAttributes(){return["for"]}connectedCallback(){super.connectedCallback();const e=this.getAttr("for","");e&&this.addEventListener("click",()=>{var i;const t=document.getElementById(e);t&&(t.focus(),(i=t.click)==null||i.call(t))})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
      }

      .label {
        display: flex;
        align-items: center;
        gap: ${r[2]};
        font-size: 0.875rem;
        line-height: 1;
        font-weight: 500;
        user-select: none;
        cursor: pointer;
        color: ${s.foreground};
      }

      :host([disabled]) .label,
      .label:has(+ :disabled) {
        pointer-events: none;
        opacity: 0.5;
      }

      .label ::slotted(svg) {
        width: 1rem;
        height: 1rem;
      }
    `));const e=document.createElement("label");e.className="label";const t=this.getAttr("for","");t&&e.setAttribute("for",t);const i=document.createElement("slot");e.appendChild(i),this.shadow.appendChild(e)}}customElements.define("eva-label",Le);class Ie extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
        height: 2.5rem;
        border: 1px solid ${s.border};
        border-radius: ${r[2]};
        background: ${s.background};
        padding: ${r[1]};
      }

      .menubar {
        display: flex;
        align-items: center;
        gap: ${r[1]};
        width: 100%;
      }
    `));const e=document.createElement("div");e.className="menubar",e.setAttribute("role","menubar"),e.addEventListener("keydown",i=>this.handleMenubarKeydown(i));const t=document.createElement("slot");t.addEventListener("slotchange",()=>this.initializeMenubarRoving()),e.appendChild(t),this.shadow.appendChild(e),requestAnimationFrame(()=>this.initializeMenubarRoving())}getMenuTriggers(){return Array.from(this.querySelectorAll("eva-menubar-menu")).map(e=>{var t;return(t=e.shadowRoot)==null?void 0:t.querySelector("button.trigger")}).filter(Boolean)}initializeMenubarRoving(){const e=this.getMenuTriggers();e.length&&e.forEach((t,i)=>{t.setAttribute("tabindex",i===0?"0":"-1"),t.setAttribute("role","menuitem")})}moveMenubarFocus(e){const t=this.getMenuTriggers();if(!t.length)return;const i=t.findIndex(a=>a===document.activeElement);let n=i===-1?0:i+e;n<0&&(n=t.length-1),n>=t.length&&(n=0),t.forEach((a,o)=>a.setAttribute("tabindex",o===n?"0":"-1")),t[n].focus()}handleMenubarKeydown(e){var t,i;switch(e.key){case"ArrowRight":case"Right":this.moveMenubarFocus(1),e.preventDefault();break;case"ArrowLeft":case"Left":this.moveMenubarFocus(-1),e.preventDefault();break;case"Home":this.moveMenubarFocus(-9999),e.preventDefault();break;case"End":this.moveMenubarFocus(9999),e.preventDefault();break;case"Enter":case" ":{const n=document.activeElement;n&&n.classList.contains("trigger")&&(n.click(),e.preventDefault());break}case"ArrowDown":case"Down":{const n=Array.from(this.querySelectorAll("eva-menubar-menu")).find(a=>{var o,l;return((l=(o=a.shadowRoot)==null?void 0:o.querySelector("button.trigger"))==null?void 0:l.getAttribute("data-open"))==="true"});if(n){const a=(t=n.shadowRoot)!=null&&t.querySelector("div.content slot")?n.querySelector("eva-menubar-item"):null,o=(i=a==null?void 0:a.shadowRoot)==null?void 0:i.querySelector("button.item");o&&(o.focus(),e.preventDefault())}break}}}}class Se extends c{constructor(){super(...arguments),this.isOpen=!1}connectedCallback(){super.connectedCallback(),document.addEventListener("click",e=>{!this.contains(e.target)&&this.isOpen&&(this.isOpen=!1,this.render())})}toggle(){this.isOpen=!this.isOpen,this.render()}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        position: relative;
        display: inline-flex;
      }

      .trigger {
        display: inline-flex;
        align-items: center;
        gap: ${r[2]};
        height: 2rem;
        padding: 0 ${r[3]};
        border-radius: ${r[1]};
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: ${g.colors};
        background: transparent;
        border: none;
        color: ${s.foreground};
      }

      .trigger:hover {
        background: ${s.accent};
      }

      .trigger[data-open="true"] {
        background: ${s.accent};
      }

      .content {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 50;
        min-width: 12rem;
        margin-top: ${r[1]};
        padding: ${r[1]};
        background: ${s.popover};
        border: 1px solid ${s.border};
        border-radius: ${r[2]};
        box-shadow: ${m.lg};
        display: ${this.isOpen?"block":"none"};
        animation: menuIn 150ms ease-out;
      }

      @keyframes menuIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    `));const e=document.createElement("button");e.className="trigger",e.setAttribute("data-open",this.isOpen.toString()),e.setAttribute("role","menuitem"),e.hasAttribute("tabindex")||e.setAttribute("tabindex","-1"),e.addEventListener("click",()=>this.toggle());const t=document.createElement("slot");t.name="trigger",e.appendChild(t);const i=document.createElement("div");i.className="content",i.setAttribute("role","menu");const n=document.createElement("slot");i.appendChild(n),this.shadow.appendChild(e),this.shadow.appendChild(i)}}class Te extends c{render(){this.shadow.innerHTML="";const e=this.getAttr("variant","default");this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .item {
        display: flex;
        align-items: center;
        gap: ${r[2]};
        width: 100%;
        padding: ${r[2]} ${r[3]};
        border-radius: ${r[1]};
        font-size: 0.875rem;
        cursor: pointer;
        transition: ${g.colors};
        background: transparent;
        border: none;
        text-align: left;
        color: ${e==="destructive"?s.destructive:s.foreground};
      }

      .item:hover:not(:disabled) {
        background: ${e==="destructive"?"color-mix(in srgb, "+s.destructive+" 10%, transparent)":s.accent};
      }

      .item:focus-visible {
        outline: none;
        background: ${s.accent};
      }

      .item:disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      .item ::slotted(svg) {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
      }
    `));const t=document.createElement("button");t.className="item",this.getBoolAttr("disabled")&&(t.disabled=!0);const i=document.createElement("slot");t.appendChild(i),this.shadow.appendChild(t)}}customElements.define("eva-menubar",Ie);customElements.define("eva-menubar-menu",Se);customElements.define("eva-menubar-item",Te);class Me extends c{constructor(){super(...arguments),this.currentPage=1,this.totalPages=1}static get observedAttributes(){return["current","total"]}attributeChangedCallback(){this.currentPage=parseInt(this.getAttr("current","1"),10),this.totalPages=parseInt(this.getAttr("total","1"),10),this.render()}handlePageClick(e){e<1||e>this.totalPages||(this.currentPage=e,this.setAttribute("current",e.toString()),this.emit("change",{page:e}),this.updateAriaCurrent())}getPageNumbers(){const e=[];if(this.totalPages<=7){for(let n=1;n<=this.totalPages;n++)e.push(n);return e}e.push(1),this.currentPage>3&&e.push("ellipsis");const t=Math.max(2,this.currentPage-1),i=Math.min(this.totalPages-1,this.currentPage+1);for(let n=t;n<=i;n++)e.push(n);return this.currentPage<this.totalPages-2&&e.push("ellipsis"),e.push(this.totalPages),e}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
        align-items: center;
        gap: ${r[2]};
      }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2.25rem;
        height: 2.25rem;
        padding: 0 ${r[2]};
        border: 1px solid ${s.border};
        border-radius: ${r[2]};
        font-size: 0.875rem;
        font-weight: 500;
        background: ${s.background};
        color: ${s.foreground};
        cursor: pointer;
        transition: ${g.colors};
        box-shadow: ${m.xs};
      }

      .button:hover:not(:disabled) {
        background: ${s.accent};
      }

      .button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .button[data-active="true"] {
        background: ${s.primary};
        color: ${s.primaryForeground};
        border-color: ${s.primary};
      }

      .ellipsis {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.25rem;
        height: 2.25rem;
      }
    `));const e=document.createElement("nav");e.setAttribute("aria-label","Pagination"),e.setAttribute("role","navigation"),e.style.display="inline-flex",e.style.gap=r[2],e.addEventListener("keydown",o=>this.handleKeydown(o));const t=document.createElement("div");t.style.display="contents";const i=document.createElement("button");i.className="button",i.textContent="‹",i.disabled=this.currentPage===1,i.addEventListener("click",()=>this.handlePageClick(this.currentPage-1)),t.appendChild(i),this.getPageNumbers().forEach(o=>{if(o==="ellipsis"){const l=document.createElement("span");l.className="ellipsis",l.textContent="...",t.appendChild(l)}else{const l=document.createElement("button");l.className="button",l.textContent=o.toString(),l.setAttribute("aria-label",`Go to page ${o}`),l.setAttribute("data-active",(o===this.currentPage).toString()),o===this.currentPage?(l.setAttribute("aria-current","page"),l.setAttribute("tabindex","0")):l.setAttribute("tabindex","-1"),l.addEventListener("click",()=>this.handlePageClick(o)),t.appendChild(l)}});const a=document.createElement("button");a.className="button",a.textContent="›",a.disabled=this.currentPage===this.totalPages,a.addEventListener("click",()=>this.handlePageClick(this.currentPage+1)),t.appendChild(a),e.appendChild(t),this.shadow.appendChild(e)}updateAriaCurrent(){this.shadow.querySelectorAll(".button").forEach(t=>{t.removeAttribute("aria-current"),parseInt(t.textContent||"0",10)===this.currentPage?(t.setAttribute("aria-current","page"),t.setAttribute("data-active","true"),t.setAttribute("tabindex","0")):(t.setAttribute("data-active","false"),t.setAttribute("tabindex","-1"))})}handleKeydown(e){const t=Array.from(this.shadow.querySelectorAll(".button")).filter(a=>!isNaN(parseInt(a.textContent||"",10)));if(!t.length)return;const i=t.findIndex(a=>parseInt(a.textContent||"0",10)===this.currentPage);if(i===-1)return;let n=i;switch(e.key){case"ArrowRight":case"Right":n=Math.min(t.length-1,i+1),e.preventDefault();break;case"ArrowLeft":case"Left":n=Math.max(0,i-1),e.preventDefault();break;case"Home":n=0,e.preventDefault();break;case"End":n=t.length-1,e.preventDefault();break;case"Enter":case" ":if(document.activeElement&&document.activeElement.classList.contains("button")){const a=parseInt(document.activeElement.textContent||"0",10);isNaN(a)||this.handlePageClick(a)}e.preventDefault();return;default:return}n!==i&&(t.forEach((a,o)=>a.setAttribute("tabindex",o===n?"0":"-1")),t[n].focus())}}customElements.define("eva-pagination",Me);class Oe extends c{constructor(){super(...arguments),this.isOpen=!1,this.handleOutsideClick=e=>{this.contains(e.target)||this.close()}}static get observedAttributes(){return["open"]}attributeChangedCallback(){this.isOpen=this.getBoolAttr("open"),this.render(),this.isOpen?(this.positionContent(),document.addEventListener("click",this.handleOutsideClick)):document.removeEventListener("click",this.handleOutsideClick)}connectedCallback(){super.connectedCallback(),this.setupTrigger()}disconnectedCallback(){document.removeEventListener("click",this.handleOutsideClick)}setupTrigger(){const e=this.querySelector('[slot="trigger"]');e&&(this.triggerEl=e,e.addEventListener("click",t=>{t.stopPropagation(),this.toggle()}))}positionContent(){!this.contentEl||!this.triggerEl||requestAnimationFrame(()=>{const e=this.triggerEl.getBoundingClientRect(),t=this.contentEl.getBoundingClientRect();let i=e.bottom+4,n=e.left;i+t.height>window.innerHeight&&(i=e.top-t.height-4),n+t.width>window.innerWidth&&(n=window.innerWidth-t.width-8),this.contentEl.style.top=`${i}px`,this.contentEl.style.left=`${n}px`})}open(){this.setAttribute("open","")}close(){this.removeAttribute("open")}toggle(){this.isOpen?this.close():this.open()}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-block;
        position: relative;
      }

      .trigger {
        display: contents;
      }

      .content {
        display: ${this.isOpen?"block":"none"};
        position: fixed;
        z-index: 50;
        width: 18rem;
        border-radius: ${r[2]};
        border: 1px solid ${s.border};
        background: ${s.popover};
        color: ${s.popoverForeground};
        padding: ${r[4]};
        box-shadow: ${m.md};
        outline: none;
        animation: ${this.isOpen?"popoverIn":"popoverOut"} 200ms;
      }

      @keyframes popoverIn {
        from { 
          opacity: 0;
          transform: scale(0.95) translateY(-0.5rem);
        }
        to { 
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      @keyframes popoverOut {
        from { 
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        to { 
          opacity: 0;
          transform: scale(0.95) translateY(-0.5rem);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .content {
          animation-duration: 0.01ms !important;
        }
      }
    `));const e=document.createElement("div");e.className="trigger";const t=document.createElement("slot");if(t.name="trigger",e.appendChild(t),this.shadow.appendChild(e),this.isOpen){const i=document.createElement("div");i.className="content",i.addEventListener("click",a=>a.stopPropagation());const n=document.createElement("slot");i.appendChild(n),this.shadow.appendChild(i),this.contentEl=i,requestAnimationFrame(()=>this.positionContent())}}}customElements.define("eva-popover",Oe);class Fe extends c{static get observedAttributes(){return["value","max"]}attributeChangedCallback(){this.render()}render(){const e=parseFloat(this.getAttr("value","0")),t=parseFloat(this.getAttr("max","100")),i=Math.min(100,Math.max(0,e/t*100)),n=this.getAttr("aria-label","");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        width: 100%;
      }

      .progress {
        position: relative;
        height: 0.5rem;
        width: 100%;
        overflow: hidden;
        border-radius: 9999px;
        background: color-mix(in srgb, ${s.primary} 20%, transparent);
      }

      .indicator {
        height: 100%;
        width: 100%;
        flex: 1 1 0%;
        background: ${s.primary};
        transition: ${g.all};
        transform: translateX(-${100-i}%);
      }

      @media (prefers-reduced-motion: reduce) {
        .indicator {
          transition-duration: 0.01ms !important;
        }
      }
    `));const a=document.createElement("div");a.className="progress",a.setAttribute("role","progressbar"),a.setAttribute("aria-valuemin","0"),a.setAttribute("aria-valuemax",t.toString()),a.setAttribute("aria-valuenow",e.toString()),a.setAttribute("aria-live","polite"),a.setAttribute("aria-atomic","true"),n?a.setAttribute("aria-label",n):a.setAttribute("aria-label",`${Math.round(i)}% complete`);const o=document.createElement("div");o.className="indicator",a.appendChild(o),this.shadow.appendChild(a)}}customElements.define("eva-progress",Fe);class Ne extends c{constructor(){super(...arguments),this.value=""}static get observedAttributes(){return["value","name"]}attributeChangedCallback(){this.value=this.getAttr("value",""),this.updateItems()}connectedCallback(){super.connectedCallback(),this.setupItems(),this.updateItems()}setupItems(){this.addEventListener("radio-select",e=>{this.value=e.detail.value,this.setAttribute("value",this.value),this.emit("change",{value:this.value}),this.updateItems()})}updateItems(){this.querySelectorAll("eva-radio-group-item").forEach(t=>{(t.getAttribute("value")||"")===this.value?t.setAttribute("checked",""):t.removeAttribute("checked")})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: grid;
        gap: ${r[3]};
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}class ze extends c{constructor(){super(...arguments),this.checked=!1}static get observedAttributes(){return["value","checked","disabled"]}attributeChangedCallback(){this.checked=this.getBoolAttr("checked"),this.render(),this.inputEl&&(this.inputEl.checked=this.checked,this.inputEl.disabled=this.getBoolAttr("disabled"))}connectedCallback(){super.connectedCallback(),this.setupInput()}setupInput(){this.inputEl&&this.inputEl.addEventListener("change",e=>{if(e.target.checked){const i=this.getAttr("value","");this.emit("radio-select",{value:i})}})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
      }

      .radio-wrapper {
        position: relative;
        display: inline-flex;
      }

      .radio {
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

      .visual {
        aspect-ratio: 1;
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        border-radius: 9999px;
        border: 1px solid ${s.input};
        background: transparent;
        box-shadow: ${m.xs};
        transition: ${g.colors};
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${s.primary};
      }

      .radio:focus-visible + .visual {
        outline: none;
        border-color: ${s.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.ring} 50%, transparent);
      }

      @media (forced-colors: active) {
        .radio:focus-visible + .visual {
          outline: 3px solid CanvasText;
          outline-offset: 2px;
        }
      }

      .radio:disabled + .visual {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .radio[aria-invalid="true"] + .visual {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.destructive} 20%, transparent);
        border-color: ${s.destructive};
      }

      .radio:hover:not(:disabled) + .visual {
        background: color-mix(in srgb, ${s.input} 30%, transparent);
      }

      .indicator {
        position: relative;
        display: ${this.checked?"flex":"none"};
        align-items: center;
        justify-content: center;
      }

      .indicator-dot {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 9999px;
        background: ${s.primary};
        transform: translate(-50%, -50%);
      }

      @media (prefers-reduced-motion: reduce) {
        .visual {
          transition-duration: 0.01ms !important;
        }
      }
    `));const e=document.createElement("div");e.className="radio-wrapper";const t=this.closest("eva-radio-group"),i=(t==null?void 0:t.getAttribute("name"))||"radio-group",n=document.createElement("input");n.type="radio",n.className="radio",n.name=i,n.checked=this.checked,n.disabled=this.getBoolAttr("disabled");const a=this.getAttr("value","");a&&(n.value=a),e.appendChild(n);const o=document.createElement("div");o.className="visual",o.setAttribute("role","radio"),o.setAttribute("aria-checked",this.checked.toString()),o.setAttribute("tabindex","0"),o.addEventListener("click",()=>{this.getBoolAttr("disabled")||n.click()}),o.addEventListener("keydown",h=>{(h.key===" "||h.key==="Enter")&&!this.getBoolAttr("disabled")&&(h.preventDefault(),n.click())});const l=document.createElement("div");l.className="indicator";const u=document.createElement("div");u.className="indicator-dot",l.appendChild(u),o.appendChild(l),e.appendChild(o),this.shadow.appendChild(e),this.inputEl=n,this.setupInput()}}customElements.define("eva-radio-group",Ne);customElements.define("eva-radio-group-item",ze);class Be extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        position: relative;
        overflow: hidden;
      }

      .scroll-area {
        width: 100%;
        height: 100%;
        overflow: auto;
        scroll-behavior: smooth;
      }

      /* Custom scrollbar */
      .scroll-area::-webkit-scrollbar {
        width: 0.75rem;
        height: 0.75rem;
      }

      .scroll-area::-webkit-scrollbar-track {
        background: transparent;
      }

      .scroll-area::-webkit-scrollbar-thumb {
        background: ${s.border};
        border-radius: ${r[2]};
        border: 2px solid ${s.background};
      }

      .scroll-area::-webkit-scrollbar-thumb:hover {
        background: ${s.mutedForeground};
      }

      /* Firefox */
      .scroll-area {
        scrollbar-width: thin;
        scrollbar-color: ${s.border} transparent;
      }
    `));const e=document.createElement("div");e.className="scroll-area";const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}customElements.define("eva-scroll-area",Be);class De extends c{constructor(){super(...arguments),this.value="",this.isOpen=!1,this.size="default"}static get observedAttributes(){return["value","size","disabled","placeholder"]}attributeChangedCallback(){this.value=this.getAttr("value",""),this.size=this.getAttr("size","default"),this.render()}connectedCallback(){super.connectedCallback(),this.setupEventListeners()}setupEventListeners(){document.addEventListener("click",e=>{!this.contains(e.target)&&this.isOpen&&(this.isOpen=!1,this.render())})}handleSelect(e){this.value=e,this.isOpen=!1,this.setAttribute("value",e),this.emit("change",{value:e}),this.render()}render(){this.shadow.innerHTML="";const e=this.size==="sm"?"2rem":"2.25rem";this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-block;
        position: relative;
      }

      .trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${r[2]};
        width: fit-content;
        min-width: 8rem;
        height: ${e};
        border-radius: ${r[2]};
        border: 1px solid ${s.input};
        background: transparent;
        padding: ${r[2]} ${r[3]};
        font-size: 0.875rem;
        white-space: nowrap;
        box-shadow: ${m.xs};
        transition: ${g.colors};
        cursor: pointer;
        color: ${this.value?s.foreground:s.mutedForeground};
      }

      .trigger:hover {
        background: ${s.input};
      }

      .trigger:focus-visible {
        outline: none;
        border-color: ${s.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.ring} 50%, transparent);
      }

      .trigger:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .trigger[aria-invalid="true"] {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.destructive} 20%, transparent);
        border-color: ${s.destructive};
      }

      .chevron {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        opacity: 0.5;
        color: ${s.mutedForeground};
        transition: transform 200ms;
      }

      .trigger[data-open="true"] .chevron {
        transform: rotate(180deg);
      }

      .dropdown {
        display: ${this.isOpen?"block":"none"};
        position: absolute;
        z-index: 50;
        top: calc(100% + 0.25rem);
        left: 0;
        right: 0;
        min-width: 8rem;
        max-height: 24rem;
        overflow-x: hidden;
        overflow-y: auto;
        border-radius: ${r[2]};
        border: 1px solid ${s.border};
        background: ${s.popover};
        color: ${s.popoverForeground};
        padding: ${r[1]};
        box-shadow: ${m.md};
        animation: dropdownIn 200ms;
      }

      @keyframes dropdownIn {
        from { 
          opacity: 0;
          transform: scale(0.95) translateY(-0.5rem);
        }
        to { 
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .chevron,
        .dropdown {
          transition-duration: 0.01ms !important;
          animation-duration: 0.01ms !important;
        }
      }
    `));const t=document.createElement("button");t.className="trigger",t.setAttribute("type","button"),t.setAttribute("data-open",this.isOpen.toString()),this.getBoolAttr("disabled")&&t.setAttribute("disabled","");const i=document.createElement("span");i.textContent=this.value||this.getAttr("placeholder","Select..."),t.appendChild(i);const n=document.createElement("span");if(n.className="chevron",n.innerHTML="▼",t.appendChild(n),t.addEventListener("click",a=>{a.stopPropagation(),this.isOpen=!this.isOpen,this.render()}),this.shadow.appendChild(t),this.isOpen){const a=document.createElement("div");a.className="dropdown",a.addEventListener("click",l=>l.stopPropagation());const o=document.createElement("slot");a.appendChild(o),this.shadow.appendChild(a)}}}class He extends c{static get observedAttributes(){return["value","disabled"]}connectedCallback(){super.connectedCallback(),this.setupEventListeners()}setupEventListeners(){this.shadow.addEventListener("click",()=>{var e;if(!this.getBoolAttr("disabled")){const t=this.getAttr("value","");this.emit("select-item",{value:t});const i=this.closest("eva-select");i&&((e=i.handleSelect)==null||e.call(i,t))}})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .item {
        position: relative;
        display: flex;
        width: 100%;
        align-items: center;
        gap: ${r[2]};
        border-radius: ${r[1]};
        padding: ${r[2]};
        font-size: 0.875rem;
        outline: none;
        user-select: none;
        cursor: pointer;
        transition: ${g.colors};
        color: ${s.foreground};
      }

      .item:hover {
        background: ${s.accent};
        color: ${s.accentForeground};
      }

      .item:focus-visible {
        background: ${s.accent};
        color: ${s.accentForeground};
      }

      .item[disabled] {
        pointer-events: none;
        opacity: 0.5;
      }

      .item ::slotted(svg) {
        width: 1rem;
        height: 1rem;
        color: ${s.mutedForeground};
      }

      @media (prefers-reduced-motion: reduce) {
        .item {
          transition-duration: 0.01ms !important;
        }
      }
    `));const e=document.createElement("div");e.className="item",e.setAttribute("role","option"),this.getBoolAttr("disabled")&&e.setAttribute("disabled","");const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}customElements.define("eva-select",De);customElements.define("eva-select-item",He);class Ve extends c{static get observedAttributes(){return["orientation"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("orientation","horizontal");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .separator {
        flex-shrink: 0;
        background: ${s.border};
      }

      .separator[data-orientation="horizontal"] {
        height: 1px;
        width: 100%;
      }

      .separator[data-orientation="vertical"] {
        height: 100%;
        width: 1px;
      }
    `));const t=document.createElement("div");t.className="separator",t.setAttribute("role","separator"),t.setAttribute("data-orientation",e),t.setAttribute("aria-orientation",e),this.shadow.appendChild(t)}}customElements.define("eva-separator",Ve);class Pe extends c{constructor(){super(...arguments),this.isOpen=!1,this.side="right"}static get observedAttributes(){return["open","side"]}attributeChangedCallback(){this.isOpen=this.getBoolAttr("open"),this.side=this.getAttr("side","right"),this.render(),this.isOpen?(document.body.style.overflow="hidden",this.emit("open",{})):(document.body.style.overflow="",this.emit("close",{}))}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()})}open(){this.setAttribute("open","")}close(){this.removeAttribute("open")}render(){this.shadow.innerHTML="";const e={right:`
        inset-y: 0;
        right: 0;
        height: 100%;
        width: 75%;
        max-width: 24rem;
        border-left: 1px solid ${s.border};
        animation: ${this.isOpen?"slideInFromRight":"slideOutToRight"} ${this.isOpen?"500ms":"300ms"};
      `,left:`
        inset-y: 0;
        left: 0;
        height: 100%;
        width: 75%;
        max-width: 24rem;
        border-right: 1px solid ${s.border};
        animation: ${this.isOpen?"slideInFromLeft":"slideOutToLeft"} ${this.isOpen?"500ms":"300ms"};
      `,top:`
        inset-x: 0;
        top: 0;
        height: auto;
        border-bottom: 1px solid ${s.border};
        animation: ${this.isOpen?"slideInFromTop":"slideOutToTop"} ${this.isOpen?"500ms":"300ms"};
      `,bottom:`
        inset-x: 0;
        bottom: 0;
        height: auto;
        border-top: 1px solid ${s.border};
        animation: ${this.isOpen?"slideInFromBottom":"slideOutToBottom"} ${this.isOpen?"500ms":"300ms"};
      `};if(this.shadow.appendChild(this.createStyles(`
      :host {
        display: ${this.isOpen?"block":"none"};
        position: fixed;
        inset: 0;
        z-index: 50;
      }

      .overlay {
        position: fixed;
        inset: 0;
        z-index: 50;
        background: rgba(0, 0, 0, 0.5);
        animation: ${this.isOpen?"fadeIn":"fadeOut"} 200ms;
      }

      .content {
        position: fixed;
        z-index: 50;
        display: flex;
        flex-direction: column;
        gap: ${r[4]};
        background: ${s.background};
        box-shadow: ${m.lg};
        transition: ease-in-out;
        ${e[this.side]}
      }

      .close-button {
        position: absolute;
        top: ${r[4]};
        right: ${r[4]};
        border-radius: ${r[1]};
        opacity: 0.7;
        background: none;
        border: none;
        cursor: pointer;
        padding: ${r[2]};
        transition: ${g.all};
        color: ${s.foreground};
      }

      .close-button:hover {
        opacity: 1;
        background: ${s.secondary};
      }

      .close-button:focus-visible {
        outline: none;
        border-color: ${s.ring};
        box-shadow: 0 0 0 2px color-mix(in srgb, ${s.ring} 50%, transparent);
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

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }

      @keyframes slideInFromRight {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
      }

      @keyframes slideOutToRight {
        from { transform: translateX(0); }
        to { transform: translateX(100%); }
      }

      @keyframes slideInFromLeft {
        from { transform: translateX(-100%); }
        to { transform: translateX(0); }
      }

      @keyframes slideOutToLeft {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
      }

      @keyframes slideInFromTop {
        from { transform: translateY(-100%); }
        to { transform: translateY(0); }
      }

      @keyframes slideOutToTop {
        from { transform: translateY(0); }
        to { transform: translateY(-100%); }
      }

      @keyframes slideInFromBottom {
        from { transform: translateY(100%); }
        to { transform: translateY(0); }
      }

      @keyframes slideOutToBottom {
        from { transform: translateY(0); }
        to { transform: translateY(100%); }
      }

      @media (prefers-reduced-motion: reduce) {
        .overlay,
        .content {
          animation-duration: 0.01ms !important;
        }
      }
    `)),!this.isOpen)return;const t=document.createElement("div");t.className="overlay",t.addEventListener("click",()=>this.close()),this.shadow.appendChild(t);const i=document.createElement("div");i.className="content",i.addEventListener("click",l=>l.stopPropagation());const n=document.createElement("slot");i.appendChild(n);const a=document.createElement("button");a.className="close-button",a.setAttribute("type","button"),a.innerHTML="✕",a.addEventListener("click",()=>this.close());const o=document.createElement("span");o.className="sr-only",o.textContent="Close",a.appendChild(o),i.appendChild(a),this.shadow.appendChild(i)}}class Re extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
        flex-direction: column;
        gap: ${r[2]};
        padding: ${r[4]};
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}class Ye extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
        flex-direction: column;
        gap: ${r[2]};
        margin-top: auto;
        padding: ${r[4]};
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}class qe extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        color: ${s.foreground};
        font-weight: 600;
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}class je extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        color: ${s.mutedForeground};
        font-size: 0.875rem;
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}customElements.define("eva-sheet",Pe);customElements.define("eva-sheet-header",Re);customElements.define("eva-sheet-footer",Ye);customElements.define("eva-sheet-title",qe);customElements.define("eva-sheet-description",je);class Ge extends c{static get observedAttributes(){return["variant","width","height","lines","circle"]}connectedCallback(){super.connectedCallback(),this.render()}render(){const e=this.getAttribute("variant")||"text",t=this.getAttribute("width")||"100%",i=this.getAttribute("height")||"1em",n=parseInt(this.getAttribute("lines")||"1"),a=this.hasAttribute("circle"),o=this.createStyles(`
      :host {
        display: block;
      }
      
      .skeleton {
        background: linear-gradient(
          90deg,
          var(--eva-background-secondary, #f0f0f0) 0%,
          var(--eva-background-tertiary, #e0e0e0) 50%,
          var(--eva-background-secondary, #f0f0f0) 100%
        );
        background-size: 200% 100%;
        animation: shimmer 1500ms ease-in-out infinite;
        border-radius: ${a?"50%":"4px"};
      }
      
      .skeleton-text {
        height: 1em;
        border-radius: 4px;
        margin-bottom: 0.5em;
      }
      
      .skeleton-text:last-child {
        margin-bottom: 0;
        width: 80%; /* Last line shorter */
      }
      
      .skeleton-rectangle {
        border-radius: 8px;
      }
      
      .skeleton-circle {
        border-radius: 50%;
        width: ${i};
        height: ${i};
      }
      
      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
      
      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .skeleton {
          animation: none;
          background: var(--eva-background-tertiary, #e0e0e0);
        }
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
        border: 0;
      }
    `);this.shadow.innerHTML="",this.shadow.appendChild(o);const l=document.createElement("div");l.setAttribute("role","status"),l.setAttribute("aria-busy","true");const u=document.createElement("span");if(u.textContent="Loading",u.className="sr-only",l.appendChild(u),a||e==="circle"){const h=document.createElement("div");h.className="skeleton skeleton-circle",h.style.width=t,h.style.height=i,l.appendChild(h)}else if(e==="text")for(let h=0;h<n;h++){const p=document.createElement("div");p.className="skeleton skeleton-text",p.style.width=h===n-1?"80%":t,p.style.height=i,l.appendChild(p)}else{const h=document.createElement("div");h.className="skeleton skeleton-rectangle",h.style.width=t,h.style.height=i,l.appendChild(h)}this.shadow.appendChild(l)}}customElements.define("eva-skeleton",Ge);class Ue extends c{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1}static get observedAttributes(){return["value","min","max","step","disabled","aria-label"]}attributeChangedCallback(){this.value=parseFloat(this.getAttr("value","50")),this.min=parseFloat(this.getAttr("min","0")),this.max=parseFloat(this.getAttr("max","100")),this.step=parseFloat(this.getAttr("step","1")),this.render(),this.inputEl&&(this.inputEl.value=this.value.toString(),this.inputEl.min=this.min.toString(),this.inputEl.max=this.max.toString(),this.inputEl.step=this.step.toString(),this.inputEl.disabled=this.getBoolAttr("disabled"))}connectedCallback(){super.connectedCallback(),this.setupInput()}setupInput(){this.inputEl&&(this.inputEl.addEventListener("input",e=>{const t=e.target;this.value=parseFloat(t.value),this.setAttribute("value",this.value.toString()),this.emit("input",{value:this.value}),this.render()}),this.inputEl.addEventListener("change",e=>{const t=e.target;this.emit("change",{value:parseFloat(t.value)})}))}getPercentage(){return(this.value-this.min)/(this.max-this.min)*100}render(){this.shadow.innerHTML="";const e=this.getPercentage();this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        width: 100%;
      }

      .slider-wrapper {
        position: relative;
        display: flex;
        width: 100%;
        touch-action: none;
        align-items: center;
        user-select: none;
      }

      .slider {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }

      .slider:disabled {
        cursor: not-allowed;
      }

      .track {
        position: relative;
        flex-grow: 1;
        overflow: hidden;
        border-radius: 9999px;
        background: ${s.muted};
        height: 0.375rem;
        width: 100%;
      }

      .range {
        position: absolute;
        background: ${s.primary};
        height: 100%;
        width: ${e}%;
      }

      .thumb {
        position: absolute;
        display: block;
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        border-radius: 9999px;
        border: 1px solid ${s.primary};
        background: ${s.background};
        box-shadow: ${m.sm};
        transition: ${g.colors};
        left: calc(${e}% - 0.5rem);
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
      }

      .slider:hover:not(:disabled) ~ .thumb {
        box-shadow: 0 0 0 4px color-mix(in srgb, ${s.ring} 50%, transparent);
      }

      .slider:focus-visible ~ .thumb {
        outline: none;
        box-shadow: 0 0 0 4px color-mix(in srgb, ${s.ring} 50%, transparent);
      }

      .slider:disabled ~ .track,
      .slider:disabled ~ .thumb {
        opacity: 0.5;
        pointer-events: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .thumb {
          transition-duration: 0.01ms !important;
        }
      }
    `));const t=document.createElement("div");t.className="slider-wrapper";const i=document.createElement("input");i.type="range",i.className="slider",i.value=this.value.toString(),i.min=this.min.toString(),i.max=this.max.toString(),i.step=this.step.toString(),i.disabled=this.getBoolAttr("disabled"),i.setAttribute("aria-valuemin",this.min.toString()),i.setAttribute("aria-valuemax",this.max.toString()),i.setAttribute("aria-valuenow",this.value.toString());const n=this.getAttr("aria-label","");n?i.setAttribute("aria-label",n):i.setAttribute("aria-label","Slider"),t.appendChild(i);const a=document.createElement("div");a.className="track";const o=document.createElement("div");o.className="range",a.appendChild(o),t.appendChild(a);const l=document.createElement("div");l.className="thumb",t.appendChild(l),this.shadow.appendChild(t),this.inputEl=i,this.setupInput()}}customElements.define("eva-slider",Ue);class Xe extends c{constructor(){super(...arguments),this.checked=!1}static get observedAttributes(){return["checked","disabled","value","name","aria-label"]}attributeChangedCallback(){this.checked=this.getBoolAttr("checked"),this.render(),this.inputEl&&(this.inputEl.checked=this.checked,this.inputEl.disabled=this.getBoolAttr("disabled"))}connectedCallback(){super.connectedCallback(),this.setupInput()}setupInput(){this.inputEl&&this.inputEl.addEventListener("change",e=>{const t=e.target;this.checked=t.checked,this.checked?this.setAttribute("checked",""):this.removeAttribute("checked"),this.emit("change",{checked:this.checked}),this.render()})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
      }

      .switch-wrapper {
        position: relative;
        display: inline-flex;
      }

      .switch {
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

      .visual {
        display: inline-flex;
        height: 1.15rem;
        width: 2rem;
        flex-shrink: 0;
        align-items: center;
        border-radius: 9999px;
        border: 1px solid transparent;
        box-shadow: ${m.xs};
        transition: ${g.all};
        cursor: pointer;
        background: ${this.checked?s.primary:s.input};
      }

      .switch:focus-visible + .visual {
        outline: none;
        border-color: ${s.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.ring} 50%, transparent);
      }

      .switch:disabled + .visual {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .thumb {
        pointer-events: none;
        display: block;
        width: 1rem;
        height: 1rem;
        border-radius: 9999px;
        background: ${s.background};
        box-shadow: ${m.sm};
        transition: transform 200ms;
        transform: ${this.checked?"translateX(calc(100% - 2px))":"translateX(0)"};
      }

      @media (prefers-reduced-motion: reduce) {
        .visual,
        .thumb {
          transition-duration: 0.01ms !important;
        }
      }
    `));const e=document.createElement("div");e.className="switch-wrapper";const t=document.createElement("input");t.type="checkbox",t.className="switch",t.checked=this.checked,t.disabled=this.getBoolAttr("disabled"),t.setAttribute("role","switch"),t.setAttribute("aria-checked",this.checked.toString());const i=this.getAttr("aria-label","");i?t.setAttribute("aria-label",i):t.setAttribute("aria-label","Switch");const n=this.getAttr("name",""),a=this.getAttr("value","");n&&(t.name=n),a&&(t.value=a),e.appendChild(t);const o=document.createElement("div");o.className="visual",o.setAttribute("tabindex","0"),o.addEventListener("click",()=>{this.getBoolAttr("disabled")||t.click()}),o.addEventListener("keydown",u=>{(u.key===" "||u.key==="Enter")&&(u.preventDefault(),t.click())});const l=document.createElement("div");l.className="thumb",o.appendChild(l),e.appendChild(o),this.shadow.appendChild(e),this.inputEl=t,this.setupInput()}}customElements.define("eva-switch",Xe);class Ke extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        width: 100%;
        overflow: auto;
      }

      .table-wrapper {
        width: 100%;
        overflow: auto;
      }

      table {
        width: 100%;
        caption-side: bottom;
        font-size: 0.875rem;
        border-collapse: collapse;
      }
    `));const e=document.createElement("div");e.className="table-wrapper";const t=document.createElement("table"),i=document.createElement("slot");t.appendChild(i),e.appendChild(t),this.shadow.appendChild(e)}}class We extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: table-header-group;
      }

      thead {
        display: contents;
      }
    `));const e=document.createElement("thead"),t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class _e extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: table-row-group;
      }

      tbody {
        display: contents;
      }
    `));const e=document.createElement("tbody"),t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class Ze extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: table-row;
        border-bottom: 1px solid ${s.border};
        transition: background-color 200ms;
      }

      :host(:hover) {
        background: ${s.muted};
      }

      :host(:focus-visible) {
        outline: none;
        box-shadow: inset 0 0 0 3px ${s.ring};
        position: relative;
        z-index: 10;
      }

      tr {
        display: contents;
      }
    `));const e=document.createElement("tr"),t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class Je extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: table-cell;
        height: 3rem;
        padding: 0 ${r[4]};
        text-align: left;
        font-weight: 500;
        color: ${s.mutedForeground};
        vertical-align: middle;
      }

      th {
        display: contents;
      }
    `));const e=document.createElement("th"),t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class Qe extends c{connectedCallback(){super.connectedCallback(),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: table-cell;
        padding: ${r[4]};
        vertical-align: middle;
      }

      :host(:focus-visible) {
        outline: none;
        box-shadow: inset 0 0 0 3px ${s.ring};
        position: relative;
        z-index: 10;
      }

      td {
        display: contents;
      }
    `));const e=document.createElement("td"),t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}customElements.define("eva-table",Ke);customElements.define("eva-table-header",We);customElements.define("eva-table-body",_e);customElements.define("eva-table-row",Ze);customElements.define("eva-table-head",Je);customElements.define("eva-table-cell",Qe);class et extends c{constructor(){super(...arguments),this.activeTab=""}static get observedAttributes(){return["active"]}attributeChangedCallback(){this.activeTab=this.getAttr("active",""),this.render()}connectedCallback(){super.connectedCallback(),this.addEventListener("tab-select",e=>{this.setAttribute("active",e.detail.value),this.emit("change",{value:e.detail.value})})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
        flex-direction: column;
        gap: ${r[2]};
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}class tt extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
        height: 2.25rem;
        width: fit-content;
        align-items: center;
        justify-content: center;
        border-radius: ${r[3]};
        background: ${s.muted};
        color: ${s.mutedForeground};
        padding: 3px;
      }
    `));const e=document.createElement("slot");this.shadow.appendChild(e)}}class it extends c{constructor(){super(...arguments),this.isActive=!1}static get observedAttributes(){return["value","disabled"]}attributeChangedCallback(){this.render()}connectedCallback(){super.connectedCallback(),this.setupEventListeners(),this.checkActive()}setupEventListeners(){this.shadow.addEventListener("click",()=>{if(!this.getBoolAttr("disabled")){const e=this.getAttr("value","");this.emit("tab-select",{value:e})}})}checkActive(){const e=this.closest("eva-tabs");if(e){const t=e.getAttribute("active"),i=this.getAttr("value","");this.isActive=t===i,this.render()}}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
      }

      .trigger {
        display: inline-flex;
        flex: 1;
        height: calc(100% - 1px);
        align-items: center;
        justify-content: center;
        gap: ${r[2]};
        border-radius: ${r[2]};
        border: 1px solid transparent;
        padding: ${r[1]} ${r[2]};
        font-size: 0.875rem;
        font-weight: 500;
        white-space: nowrap;
        transition: ${g.colors};
        background: none;
        cursor: pointer;
        color: ${s.foreground};
      }

      .trigger[data-active="true"] {
        background: ${s.background};
        box-shadow: ${m.sm};
        border-color: ${s.input};
      }

      .trigger:hover:not([disabled]) {
        background: color-mix(in srgb, ${s.background} 50%, transparent);
      }

      .trigger:focus-visible {
        outline: 1px solid ${s.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.ring} 50%, transparent);
        border-color: ${s.ring};
      }

      .trigger:disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      .trigger ::slotted(svg) {
        width: 1rem;
        height: 1rem;
      }

      @media (prefers-reduced-motion: reduce) {
        .trigger {
          transition-duration: 0.01ms !important;
        }
      }
    `));const e=document.createElement("button");e.className="trigger",e.setAttribute("type","button"),e.setAttribute("role","tab"),e.setAttribute("data-active",this.isActive.toString()),this.getBoolAttr("disabled")&&e.setAttribute("disabled","");const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class st extends c{constructor(){super(...arguments),this.isActive=!1}static get observedAttributes(){return["value"]}connectedCallback(){super.connectedCallback(),this.checkActive();const e=this.closest("eva-tabs");e&&e.addEventListener("change",()=>{this.checkActive()})}checkActive(){const e=this.closest("eva-tabs");if(e){const t=e.getAttribute("active"),i=this.getAttr("value","");this.isActive=t===i,this.render()}}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: ${this.isActive?"block":"none"};
        flex: 1;
        outline: none;
      }
    `));const e=document.createElement("div");e.setAttribute("role","tabpanel");const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}customElements.define("eva-tabs",et);customElements.define("eva-tabs-list",tt);customElements.define("eva-tabs-trigger",it);customElements.define("eva-tabs-content",st);class nt extends c{static get observedAttributes(){return["value","placeholder","disabled","readonly","rows","label","aria-label"]}attributeChangedCallback(){if(this.textareaEl){const e=this.getAttr("value",""),t=this.getAttr("placeholder",""),i=this.getAttr("rows","4"),n=this.getAttr("label",""),a=this.getAttr("aria-label","");this.textareaEl.value=e,this.textareaEl.placeholder=t,this.textareaEl.rows=parseInt(i),this.textareaEl.disabled=this.getBoolAttr("disabled"),this.textareaEl.readOnly=this.getBoolAttr("readonly"),n&&this.labelId?(this.textareaEl.setAttribute("aria-labelledby",this.labelId),this.textareaEl.removeAttribute("aria-label")):(this.textareaEl.removeAttribute("aria-labelledby"),a?this.textareaEl.setAttribute("aria-label",a):this.textareaEl.removeAttribute("aria-label"))}}connectedCallback(){super.connectedCallback(),this.setupTextarea()}setupTextarea(){this.textareaEl&&(this.textareaEl.addEventListener("input",e=>{const t=e.target;this.setAttribute("value",t.value),this.emit("input",{value:t.value})}),this.textareaEl.addEventListener("change",e=>{const t=e.target;this.emit("change",{value:t.value})}))}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        width: 100%;
      }

      .textarea {
        display: flex;
        min-height: 4rem;
        width: 100%;
        border-radius: ${r[2]};
        border: 1px solid ${s.input};
        background: transparent;
        padding: ${r[2]} ${r[3]};
        font-size: 0.875rem;
        line-height: 1.5;
        box-shadow: ${m.xs};
        transition: ${g.colors};
        outline: none;
        resize: vertical;
        font-family: inherit;
        color: ${s.foreground};
      }

      .textarea::placeholder {
        color: ${s.mutedForeground};
      }

      .textarea:hover {
        background: color-mix(in srgb, ${s.input} 30%, transparent);
      }

      .textarea:focus-visible {
        border-color: ${s.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.ring} 50%, transparent);
      }

      .textarea:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      .textarea[aria-invalid="true"] {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.destructive} 20%, transparent);
        border-color: ${s.destructive};
      }

      @media (prefers-reduced-motion: reduce) {
        .textarea {
          transition-duration: 0.01ms !important;
        }
      }

      @media (min-width: 768px) {
        .textarea {
          font-size: 0.875rem;
        }
      }
    `));const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap=r[1];const t=this.getAttr("label","");let i;t?(i=document.createElement("label"),this.labelId=this.labelId||`txt-label-${Math.random().toString(36).slice(2)}`,i.id=this.labelId,i.textContent=t,i.style.fontSize="0.75rem",i.style.fontWeight="500",i.style.color=s.mutedForeground,e.appendChild(i)):this.labelId=void 0;const n=document.createElement("textarea");n.className="textarea";const a=`txt-${Math.random().toString(36).slice(2)}`;if(n.id=a,n.value=this.getAttr("value",""),n.placeholder=this.getAttr("placeholder",""),n.rows=parseInt(this.getAttr("rows","4")),n.disabled=this.getBoolAttr("disabled"),n.readOnly=this.getBoolAttr("readonly"),i)i.htmlFor=a,n.setAttribute("aria-labelledby",this.labelId);else{const o=this.getAttr("aria-label","");o?n.setAttribute("aria-label",o):n.setAttribute("aria-label","Textarea")}e.appendChild(n),this.shadow.appendChild(e),this.textareaEl=n,this.setupTextarea()}}customElements.define("eva-textarea",nt);class at extends c{constructor(){super(...arguments),this.pressed=!1}static get observedAttributes(){return["variant","size","disabled","aria-label"]}attributeChangedCallback(e){(e==="variant"||e==="size"||e==="disabled"||e==="aria-label")&&this.render()}connectedCallback(){super.connectedCallback()}handlePress(){if(this.getBoolAttr("disabled"))return;this.pressed=!this.pressed,this.pressed?this.setAttribute("pressed",""):this.removeAttribute("pressed");const e=this.shadow.querySelector(".toggle");e&&(e.setAttribute("data-pressed",this.pressed.toString()),e.setAttribute("aria-pressed",this.pressed.toString())),this.emit("toggle",{pressed:this.pressed})}render(){const e=this.getAttr("variant","default"),t=this.getAttr("size","default"),i={sm:"2rem",default:"2.25rem",lg:"2.5rem"},n={sm:"2rem",default:"2.25rem",lg:"2.5rem"},a={sm:r[2],default:r[2],lg:r[3]};this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
      }

      .toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: ${r[2]};
        border-radius: ${r[2]};
        font-size: 0.875rem;
        font-weight: 500;
        white-space: nowrap;
        transition: ${g.colors};
        outline: none;
        cursor: pointer;
        height: ${i[t]};
        min-width: ${n[t]};
        padding: 0 ${a[t]};
        border: 1px solid transparent;
        background: transparent;
        color: ${s.foreground};
      }

      .toggle[data-variant="outline"] {
        border-color: ${s.input};
        background: transparent;
        box-shadow: ${m.xs};
      }

      .toggle:hover:not(:disabled) {
        background: ${s.muted};
        color: ${s.mutedForeground};
      }

      .toggle[data-variant="outline"]:hover:not(:disabled) {
        background: ${s.accent};
        color: ${s.accentForeground};
      }

      .toggle[data-pressed="true"] {
        background: ${s.accent};
        color: ${s.accentForeground};
      }

      .toggle:focus-visible {
        border-color: ${s.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.ring} 50%, transparent);
      }

      .toggle:disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      .toggle[aria-invalid="true"] {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.destructive} 20%, transparent);
        border-color: ${s.destructive};
      }

      .toggle ::slotted(svg) {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        pointer-events: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .toggle {
          transition-duration: 0.01ms !important;
        }
      }
    `));const o=document.createElement("button");o.className="toggle",o.type="button",o.setAttribute("data-variant",e),o.setAttribute("data-pressed",this.pressed.toString()),o.setAttribute("aria-pressed",this.pressed.toString());const l=this.getAttr("aria-label","");l?o.setAttribute("aria-label",l):o.setAttribute("aria-label","Toggle"),o.addEventListener("click",()=>this.handlePress()),o.addEventListener("keydown",h=>{(h.key===" "||h.key==="Enter")&&(h.preventDefault(),this.handlePress())}),this.getBoolAttr("disabled")&&(o.disabled=!0);const u=document.createElement("slot");o.appendChild(u),this.shadow.appendChild(o)}}customElements.define("eva-toggle",at);class rt extends c{constructor(){super(...arguments),this.value="",this.type="single"}static get observedAttributes(){return["value","type"]}attributeChangedCallback(){this.value=this.getAttr("value",""),this.type=this.getAttr("type","single")}connectedCallback(){super.connectedCallback(),this.addEventListener("toggle-item",e=>{this.type==="single"&&(this.value=e.detail.value,this.setAttribute("value",this.value),this.updateItems()),this.emit("change",{value:this.value})})}updateItems(){this.querySelectorAll("eva-toggle-group-item").forEach(t=>{(t.getAttribute("value")||"")===this.value?t.setAttribute("pressed",""):t.removeAttribute("pressed")})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
        border-radius: ${r[2]};
        background: ${s.muted};
        padding: ${r[1]};
      }

      .group {
        display: contents;
      }
    `));const e=document.createElement("div");e.className="group",e.setAttribute("role","group");const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}class ot extends c{constructor(){super(...arguments),this.pressed=!1}static get observedAttributes(){return["value","pressed","disabled"]}attributeChangedCallback(){this.pressed=this.getBoolAttr("pressed"),this.render()}connectedCallback(){super.connectedCallback(),this.shadow.addEventListener("click",()=>{if(!this.getBoolAttr("disabled")){const e=this.getAttr("value","");this.emit("toggle-item",{value:e})}})}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-flex;
      }

      .item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: ${r[2]};
        height: 2.25rem;
        min-width: 2.25rem;
        padding: 0 ${r[3]};
        border-radius: ${r[2]};
        border: 1px solid transparent;
        font-size: 0.875rem;
        font-weight: 500;
        white-space: nowrap;
        transition: ${g.colors};
        cursor: pointer;
        background: transparent;
        color: ${s.foreground};
      }

      .item:hover:not(:disabled) {
        background: color-mix(in srgb, ${s.muted} 80%, black);
      }

      .item[data-pressed="true"] {
        background: ${s.background};
        color: ${s.foreground};
        box-shadow: ${m.sm};
      }

      .item:focus-visible {
        outline: none;
        border-color: ${s.ring};
        box-shadow: 0 0 0 2px color-mix(in srgb, ${s.ring} 50%, transparent);
      }

      .item:disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      .item ::slotted(svg) {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
      }
    `));const e=document.createElement("button");e.className="item",e.type="button",e.setAttribute("data-pressed",this.pressed.toString()),e.setAttribute("aria-pressed",this.pressed.toString()),this.getBoolAttr("disabled")&&(e.disabled=!0);const t=document.createElement("slot");e.appendChild(t),this.shadow.appendChild(e)}}customElements.define("eva-toggle-group",rt);customElements.define("eva-toggle-group-item",ot);class lt extends c{constructor(){super(...arguments),this.isOpen=!1}connectedCallback(){super.connectedCallback(),this.setupTrigger()}setupTrigger(){const e=this.querySelector('[slot="trigger"]');e&&(this.triggerEl=e,e.addEventListener("mouseenter",()=>{this.timeoutId=window.setTimeout(()=>this.show(),0)}),e.addEventListener("mouseleave",()=>{this.timeoutId&&clearTimeout(this.timeoutId),this.hide()}),e.addEventListener("focus",()=>this.show()),e.addEventListener("blur",()=>this.hide()))}show(){this.isOpen=!0,this.render(),requestAnimationFrame(()=>this.positionContent())}hide(){this.isOpen=!1,this.render()}positionContent(){if(!this.contentEl||!this.triggerEl)return;const e=this.triggerEl.getBoundingClientRect(),t=this.contentEl.getBoundingClientRect();let i=e.top-t.height-8,n=e.left+e.width/2-t.width/2;i<0&&(i=e.bottom+8),n<8&&(n=8),n+t.width>window.innerWidth-8&&(n=window.innerWidth-t.width-8),this.contentEl.style.top=`${i}px`,this.contentEl.style.left=`${n}px`}render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-block;
        position: relative;
      }

      .trigger {
        display: contents;
      }

      .content {
        display: ${this.isOpen?"block":"none"};
        position: fixed;
        z-index: 50;
        width: fit-content;
        max-width: 20rem;
        border-radius: ${r[2]};
        background: ${s.primary};
        color: ${s.primaryForeground};
        padding: ${r[2]} ${r[3]};
        font-size: 0.75rem;
        line-height: 1.4;
        text-align: center;
        animation: ${this.isOpen?"tooltipIn":"tooltipOut"} 150ms;
        pointer-events: none;
      }

      @keyframes tooltipIn {
        from { 
          opacity: 0;
          transform: scale(0.95);
        }
        to { 
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes tooltipOut {
        from { 
          opacity: 1;
          transform: scale(1);
        }
        to { 
          opacity: 0;
          transform: scale(0.95);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .content {
          animation-duration: 0.01ms !important;
        }
      }
    `));const e=document.createElement("div");e.className="trigger";const t=document.createElement("slot");if(t.name="trigger",e.appendChild(t),this.shadow.appendChild(e),this.isOpen){const i=document.createElement("div");i.className="content",i.setAttribute("role","tooltip");const n=document.createElement("slot");i.appendChild(n),this.shadow.appendChild(i),this.contentEl=i}}}customElements.define("eva-tooltip",lt);class dt extends c{render(){this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        font-family: ${f.fontBody};
        color: ${s.foreground};
        background: ${s.background};
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
    `));const e=document.createElement("header"),t=document.createElement("slot");t.name="header",e.appendChild(t),this.shadow.appendChild(e);const i=document.createElement("main");i.id="main-content",i.setAttribute("role","main"),i.setAttribute("tabindex","-1");const n=document.createElement("slot");i.appendChild(n),this.shadow.appendChild(i);const a=document.createElement("footer"),o=document.createElement("slot");o.name="footer",a.appendChild(o),this.shadow.appendChild(a)}}customElements.define("eva-page-shell",dt);class ct extends c{static get observedAttributes(){return["title-key","description-key","background"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("title-key","esdc.hero.title"),t=this.getAttr("description-key","esdc.hero.description"),i=this.getAttr("background",s.primary),n=this.t(e),a=this.t(t);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        background: ${i};
        background: linear-gradient(135deg, ${i} 0%, color-mix(in srgb, ${i} 85%, black) 100%);
        color: ${s.primaryForeground};
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
        background: radial-gradient(circle at top right, color-mix(in srgb, ${s.primaryForeground} 5%, transparent) 0%, transparent 50%);
        pointer-events: none;
      }

      .hero-container {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding: ${r[20]} ${r[4]};
        text-align: center;
        animation: ${y.fadeIn.name} 0.6s ease-out;
      }

      @keyframes ${y.fadeIn.name} {
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
        font-family: ${f.fontHeading};
        font-size: clamp(2rem, 5vw, 2.5625rem);
        font-weight: ${f.weightBold};
        margin: 0 0 ${r[6]} 0;
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
        color: color-mix(in srgb, ${s.primaryForeground} 95%, transparent);
      }

      @media (max-width: 768px) {
        .hero-container {
          padding: ${r[12]} ${r[4]};
        }
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .hero-container {
          animation: none;
        }
      }
    `));const o=document.createElement("div");o.className="hero-container";const l=document.createElement("h1");l.className="hero-title",l.textContent=n,o.appendChild(l);const u=document.createElement("p");u.className="hero-description",u.textContent=a,o.appendChild(u),this.shadow.appendChild(o)}}customElements.define("eva-hero-banner",ct);class ht extends c{static get observedAttributes(){return["max-width"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("max-width",F.contentMaxWidth);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        width: 100%;
      }

      .container {
        max-width: ${e};
        margin: 0 auto;
        padding: ${r[8]} ${r[4]};
      }
      
      @media (max-width: 768px) {
        .container {
          padding: ${r[6]} ${r[4]};
        }
      }
      
      @media (max-width: 640px) {
        .container {
          padding: ${r[4]} ${r[4]};
        }
      }
    `));const t=document.createElement("div");t.className="container";const i=document.createElement("slot");t.appendChild(i),this.shadow.appendChild(t)}}customElements.define("eva-container",ht);class ut extends c{static get observedAttributes(){return["target"]}connectedCallback(){super.connectedCallback(),this.setupEventListener()}setupEventListener(){this.shadow.addEventListener("click",e=>{e.preventDefault();const t=this.getAttr("target","#main-content"),i=document.querySelector(t)||document.querySelector("main")||this.getRootNode()&&this.getRootNode().querySelector(t);i&&(i.focus(),i.scrollIntoView())})}render(){const e=this.getAttr("target","#main-content");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }

      .skip-link {
        position: fixed;
        left: -9999px;
        top: ${r[2]};
        z-index: 9999;
        padding: ${r[3]} ${r[6]};
        background: ${s.accent};
        color: ${s.accentForeground};
        font-family: ${f.fontBody};
        font-size: 0.875rem;
        font-weight: 600;
        text-decoration: none;
        border-radius: ${r[2]};
        box-shadow: ${m.lg};
        transition: ${g.all};
      }

      .skip-link:focus {
        left: ${r[2]};
        outline: 3px solid ${s.ring};
        outline-offset: 2px;
        animation: ${y.slideInFromTop.name} ${y.slideInFromTop.duration} ${g.easeInOut};
        box-shadow: ${m.xl}, 0 0 0 3px color-mix(in srgb, ${s.ring} 20%, transparent);
      }
      
      @keyframes ${y.slideInFromTop.name} {
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
    `));const t=document.createElement("a");t.className="skip-link",t.href=e;const i=document.createElement("slot");i.textContent=this.t("nav.skipToContent"),t.appendChild(i),this.shadow.appendChild(t)}}customElements.define("eva-skip-link",ut);class pt extends c{static get observedAttributes(){return["current-locale","available-locales"]}connectedCallback(){super.connectedCallback(),this.setupEventListeners()}attributeChangedCallback(){this.render()}setupEventListeners(){this.shadow.addEventListener("click",e=>{const t=e.target;if(t.classList.contains("lang-button")){const i=t.dataset.locale;i&&(C.setLocale(i),this.emit("language-changed",{locale:i}))}})}render(){const e=C.getLocale(),t=this.getAttr("available-locales",'["en-CA", "fr-CA"]');let i;try{i=JSON.parse(t)}catch{i=["en-CA","fr-CA"]}this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: inline-block;
      }

      .switcher {
        display: flex;
        gap: ${r[2]};
        align-items: center;
      }

      .lang-button {
        font-family: ${f.fontBody};
        font-size: 0.875rem;
        font-weight: 600;
        padding: ${r[2]} ${r[3]};
        border: 2px solid ${s.primaryForeground};
        background: transparent;
        color: ${s.primaryForeground};
        cursor: pointer;
        border-radius: ${r[1]};
        text-transform: uppercase;
        min-height: 2rem;
        transition: ${g.all};
      }

      .lang-button:hover {
        background: color-mix(in srgb, ${s.primaryForeground} 10%, transparent);
        transform: translateY(-1px);
      }

      .lang-button:focus-visible {
        outline: 3px solid ${s.ring};
        outline-offset: 2px;
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.ring} 20%, transparent);
      }

      .lang-button[aria-current="true"] {
        background: ${s.primaryForeground};
        color: ${s.primary};
        border-color: ${s.primaryForeground};
      }
      
      .lang-button[aria-current="true"]:hover {
        background: color-mix(in srgb, ${s.primaryForeground} 95%, ${s.primary});
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
    `));const n=document.createElement("div");n.className="switcher",n.setAttribute("role","group"),n.setAttribute("aria-label",this.t("accessibility.language")),i.forEach(a=>{const o=a===e,l=document.createElement("button");if(l.className="lang-button",l.dataset.locale=a,l.setAttribute("aria-current",o.toString()),l.setAttribute("lang",a),o){const h=document.createElement("span");h.className="sr-only",h.textContent=this.t("language.current"),l.appendChild(h)}const u=a.split("-")[0].toUpperCase();l.appendChild(document.createTextNode(u)),n.appendChild(l)}),this.shadow.appendChild(n)}}customElements.define("eva-language-switcher",pt);class mt extends c{constructor(){super(...arguments),this.messages=[]}static get observedAttributes(){return["title-key","placeholder-key","assistant-name"]}connectedCallback(){super.connectedCallback(),this.setupEventListeners(),this.addWelcomeMessage()}attributeChangedCallback(){this.render()}addWelcomeMessage(){this.addMessage("assistant",this.t("chat.welcome"))}setupEventListeners(){this.shadow.addEventListener("submit",e=>{e.preventDefault(),this.handleSend()}),this.shadow.addEventListener("keydown",e=>{const t=e;t.key==="Enter"&&!t.shiftKey&&e.target.tagName==="INPUT"&&(e.preventDefault(),this.handleSend())})}handleSend(){if(!this.inputField)return;const e=this.inputField.value.trim();e&&(this.addMessage("user",e),this.inputField.value="",setTimeout(()=>{const t=this.getEVAResponse(e);this.addMessage("assistant",t)},500))}addMessage(e,t){const i={id:Date.now().toString(),type:e,content:t,timestamp:new Date};this.messages.push(i),this.renderMessages()}getEVAResponse(e){const t=e.toLowerCase();return t.includes("employment insurance")||t.includes("ei")?"Employment Insurance (EI) provides temporary financial assistance to unemployed Canadians while they look for work or upgrade their skills. You may be eligible if you have lost your job through no fault of your own and have worked enough insurable hours.":t.includes("old age security")||t.includes("oas")||t.includes("pension")?"Old Age Security (OAS) is a monthly payment available to most Canadians 65 years of age or older. You do not need to have worked to receive OAS. The amount depends on how long you have lived in Canada after age 18.":t.includes("canada pension")||t.includes("cpp")?"Canada Pension Plan (CPP) is a contributory, earnings-related social insurance program. It provides retirement pensions, disability benefits, and survivor benefits. You contribute to CPP through payroll deductions during your working years.":t.includes("job")||t.includes("work")||t.includes("employment")?"ESDC offers many job search resources including Job Bank (jobbank.gc.ca), skills training programs, and employment services. I can help you find the right program for your needs.":t.includes("benefit")?"ESDC administers several benefit programs including Employment Insurance (EI), Canada Pension Plan (CPP), Old Age Security (OAS), and the Canada Child Benefit. Which program would you like to know more about?":`I can help you with information about ESDC programs and services. Try asking about:
• Employment Insurance (EI)
• Old Age Security (OAS)
• Canada Pension Plan (CPP)
• Job search resources
• Benefits programs`}renderMessages(){this.messageContainer&&(this.messageContainer.innerHTML="",this.messages.forEach(e=>{const t=document.createElement("eva-chat-message");t.setAttribute("type",e.type),t.setAttribute("timestamp",e.timestamp.toISOString()),t.textContent=e.content,this.messageContainer.appendChild(t)}),this.messageContainer.scrollTop=this.messageContainer.scrollHeight,this.announceTimeout&&clearTimeout(this.announceTimeout),this.announceTimeout=window.setTimeout(()=>{const e=this.shadow.querySelector('[role="log"][aria-atomic="true"]');if(e&&this.messages.length>0){const t=this.messages[this.messages.length-1];e.textContent=`${t.type==="user"?"You":"EVA"}: ${t.content}`}},500))}render(){const e=this.getAttr("title-key","chat.title"),t=this.getAttr("placeholder-key","chat.placeholder"),i=this.t(e),n=this.t(t);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        margin-top: ${r[16]};
      }

      .chat-panel {
        max-width: 800px;
        margin: 0 auto;
        border: 1px solid ${s.border};
        border-radius: ${r[3]};
        background: ${s.card};
        box-shadow: ${m.md};
        overflow: hidden;
      }

      .chat-header {
        background: ${s.primary};
        color: ${s.primaryForeground};
        padding: ${r[4]};
        font-family: ${f.fontHeading};
        font-size: 1.375rem;
        font-weight: ${f.weightBold};
        border-bottom: 1px solid color-mix(in srgb, ${s.primary} 90%, black);
      }

      .chat-messages {
        height: 400px;
        overflow-y: auto;
        padding: ${r[4]};
        background: ${s.muted};
        scroll-behavior: smooth;
      }
      
      .chat-messages::-webkit-scrollbar {
        width: 8px;
      }
      
      .chat-messages::-webkit-scrollbar-track {
        background: ${s.muted};
      }
      
      .chat-messages::-webkit-scrollbar-thumb {
        background: ${s.border};
        border-radius: 4px;
      }
      
      .chat-messages::-webkit-scrollbar-thumb:hover {
        background: color-mix(in srgb, ${s.border} 80%, black);
      }

      .chat-form {
        display: flex;
        gap: ${r[3]};
        padding: ${r[4]};
        border-top: 1px solid ${s.border};
        background: ${s.card};
      }

      .chat-input {
        flex: 1;
        padding: ${r[3]};
        border: 1px solid ${s.input};
        border-radius: ${r[2]};
        font-family: ${f.fontBody};
        font-size: 0.875rem;
        min-height: 2.5rem;
        transition: ${g.all};
        background: ${s.background};
      }

      .chat-input:hover {
        border-color: color-mix(in srgb, ${s.input} 70%, black);
      }

      .chat-input:focus {
        outline: none;
        border-color: ${s.ring};
        box-shadow: 0 0 0 3px color-mix(in srgb, ${s.ring} 20%, transparent);
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
    `));const a=document.createElement("div");a.className="chat-panel";const o=document.createElement("div");o.className="chat-header",o.textContent=i,a.appendChild(o),this.messageContainer=document.createElement("div"),this.messageContainer.className="chat-messages",this.messageContainer.setAttribute("role","log"),this.messageContainer.setAttribute("aria-live","polite"),this.messageContainer.setAttribute("aria-atomic","false"),a.appendChild(this.messageContainer);const l=document.createElement("div");l.className="sr-only",l.setAttribute("role","log"),l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),a.appendChild(l);const u=document.createElement("form");u.className="chat-form",this.inputField=document.createElement("input"),this.inputField.type="text",this.inputField.className="chat-input",this.inputField.placeholder=n,this.inputField.setAttribute("aria-label",n),u.appendChild(this.inputField);const h=document.createElement("eva-gc-button");h.setAttribute("variant","default"),h.setAttribute("type","submit"),h.textContent=this.t("chat.send"),u.appendChild(h),a.appendChild(u),this.shadow.appendChild(a),this.renderMessages()}}customElements.define("eva-chat-panel",mt);class gt extends c{static get observedAttributes(){return["type","timestamp"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("type","user"),t=this.getAttr("timestamp");this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        margin-bottom: ${r[4]};
      }

      .message {
        display: flex;
        flex-direction: column;
        max-width: 75%;
        animation: ${y.fadeIn.name} ${y.fadeIn.duration} ease-out;
      }

      @keyframes ${y.fadeIn.name} {
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
        padding: ${r[3]} ${r[4]};
        border-radius: ${r[3]};
        font-family: ${f.fontBody};
        font-size: 0.875rem;
        line-height: 1.5;
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      .message.user .message-bubble {
        background: ${s.primary};
        color: ${s.primaryForeground};
        border-bottom-right-radius: ${r[1]};
        box-shadow: ${m.sm};
      }

      .message.assistant .message-bubble {
        background: ${s.card};
        color: ${s.cardForeground};
        border: 1px solid ${s.border};
        border-bottom-left-radius: ${r[1]};
        box-shadow: ${m.xs};
      }

      .message-meta {
        font-size: 0.75rem;
        color: ${s.mutedForeground};
        margin-top: ${r[1]};
        padding: 0 ${r[2]};
      }
      
      /* Accessibility: Reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .message {
          animation: none;
        }
      }
    `));const i=document.createElement("div");i.className=`message ${e}`;const n=document.createElement("div");n.className="message-bubble";const a=document.createElement("slot");if(n.appendChild(a),i.appendChild(n),t){const o=document.createElement("div");o.className="message-meta";const l=new Date(t);o.textContent=l.toLocaleTimeString(),i.appendChild(o)}this.shadow.appendChild(i)}}customElements.define("eva-chat-message",gt);class bt extends c{static get observedAttributes(){return["title-key","description-key","icon","link"]}attributeChangedCallback(){this.render()}render(){const e=this.getAttr("title-key"),t=this.getAttr("description-key"),i=this.getAttr("icon","📄"),n=this.getAttr("link","#"),a=this.t(e),o=this.t(t);this.shadow.innerHTML="",this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        height: 100%;
      }

      .card {
        background: ${s.card};
        border: 1px solid ${s.border};
        border-radius: ${r[3]};
        padding: ${r[6]};
        transition: ${g.all};
        text-decoration: none;
        display: flex;
        flex-direction: column;
        height: 100%;
        box-shadow: ${m.sm};
      }

      .card:hover {
        border-color: ${s.primary};
        box-shadow: ${m.lg};
        transform: translateY(-4px);
      }

      .card:focus-visible {
        outline: 3px solid ${s.ring};
        outline-offset: 2px;
        box-shadow: ${m.lg}, 0 0 0 3px color-mix(in srgb, ${s.ring} 20%, transparent);
      }

      .icon {
        font-size: 3rem;
        margin-bottom: ${r[4]};
        display: block;
        line-height: 1;
      }

      .title {
        font-family: ${f.fontHeading};
        font-size: 1.5rem;
        font-weight: ${f.weightBold};
        color: ${s.primary};
        margin: 0 0 ${r[3]} 0;
        line-height: 1.3;
        transition: ${g.colors};
      }

      .description {
        font-family: ${f.fontBody};
        font-size: 0.875rem;
        color: ${s.mutedForeground};
        line-height: 1.6;
        margin: 0;
        flex: 1;
      }

      .card:hover .title {
        color: color-mix(in srgb, ${s.primary} 85%, black);
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
    `));const l=document.createElement("a");l.className="card",l.href=n;const u=document.createElement("span");u.className="icon",u.textContent=i,u.setAttribute("aria-hidden","true"),l.appendChild(u);const h=document.createElement("h3");h.className="title",h.textContent=a,l.appendChild(h);const p=document.createElement("p");p.className="description",p.textContent=o,l.appendChild(p),this.shadow.appendChild(l)}}customElements.define("eva-program-card",bt);C.loadLocale("en-CA").then(()=>{C.loadLocale("fr-CA")});const k=document.getElementById("demo-lang-switcher"),A=document.querySelectorAll(".locale-btn"),M={"en-CA":"canada_gc","fr-CA":"canada_gc","en-US":"usa_gov","en-GB":"uk_gov","en-AU":"australia_gov","en-NZ":"nz_govt"},ft={"en-CA":"Government of Canada","fr-CA":"Gouvernement du Canada","en-US":"U.S. Government","en-GB":"GOV.UK","en-AU":"Australian Government","en-NZ":"New Zealand Government"};A.forEach(d=>{d.addEventListener("click",()=>{const e=d.dataset.locale;if(A.forEach(a=>a.classList.remove("active")),d.classList.add("active"),k){k.setAttribute("current-locale",e);const a=new CustomEvent("locale-change",{detail:{locale:e},bubbles:!0,composed:!0});k.dispatchEvent(a)}document.documentElement.lang=e;const t=document.getElementById("demo-header");t&&M[e]&&t.setAttribute("profile",M[e]);const i=ft[e]||"Government Services";document.title=`Five Eyes Demo - ${i}`;const n=document.createElement("div");n.setAttribute("role","status"),n.setAttribute("aria-live","polite"),n.textContent=`Locale changed to ${d.querySelector("span:nth-child(2)").textContent}`,n.style.position="absolute",n.style.left="-10000px",document.body.appendChild(n),setTimeout(()=>n.remove(),1e3)})});k&&k.addEventListener("locale-change",d=>{var t;const e=(t=d.detail)==null?void 0:t.locale;e&&A.forEach(i=>{i.dataset.locale===e?i.classList.add("active"):i.classList.remove("active")})});const O="en-CA";document.documentElement.lang=O;k&&k.setAttribute("current-locale",O);

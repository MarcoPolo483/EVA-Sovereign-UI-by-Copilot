/**
 * GC Page Template Component
 * Production-ready Government of Canada page template
 * Includes header, footer, breadcrumbs, language toggle, and skip links
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('eva-gc-page')
export class EvaGCPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Skip Links */
    .skip-links {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10000;
    }

    .skip-link {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
      background: var(--eva-interactive-primary, #26374A);
      color: var(--eva-text-inverse, #fff);
      padding: 12px 16px;
      text-decoration: none;
      font-weight: 600;
    }

    .skip-link:focus {
      position: static;
      width: auto;
      height: auto;
    }

    /* Header */
    .gc-header {
      background: var(--eva-brand-primary, #26374A);
      color: var(--eva-text-inverse, #fff);
    }

    .gc-header-top {
      background: #000;
      padding: 8px 0;
    }

    .gc-header-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .gc-signature {
      display: flex;
      align-items: center;
      gap: 16px;
      text-decoration: none;
      color: inherit;
    }

    .gc-flag {
      width: 40px;
      height: 24px;
      background: linear-gradient(to right, #ff0000 33%, #fff 33%, #fff 66%, #ff0000 66%);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .gc-wordmark {
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 0.5px;
    }

    .lang-toggle {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.5);
      color: var(--eva-text-inverse, #fff);
      padding: 6px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.2s;
    }

    .lang-toggle:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.8);
    }

    .lang-toggle:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
    }

    .gc-header-main {
      padding: 16px 0;
    }

    .gc-header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .site-title {
      font-size: 24px;
      font-weight: 700;
      margin: 0;
      color: var(--eva-text-inverse, #fff);
    }

    .gc-search {
      display: flex;
      gap: 8px;
      min-width: 300px;
    }

    .gc-search-input {
      flex: 1;
      padding: 10px 16px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.1);
      color: var(--eva-text-inverse, #fff);
      font-size: 16px;
    }

    .gc-search-input::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    .gc-search-input:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
      background: rgba(255, 255, 255, 0.2);
    }

    .gc-search-button {
      padding: 10px 24px;
      background: var(--eva-text-inverse, #fff);
      color: var(--eva-brand-primary, #26374A);
      border: none;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .gc-search-button:hover {
      background: rgba(255, 255, 255, 0.9);
    }

    .gc-search-button:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
    }

    /* Navigation */
    .gc-nav {
      background: var(--eva-background-secondary, #f5f5f5);
      border-bottom: 4px solid var(--eva-brand-primary, #26374A);
    }

    .gc-nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Breadcrumbs */
    .gc-breadcrumbs {
      padding: 16px 0;
    }

    .breadcrumb-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
    }

    .breadcrumb-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
    }

    .breadcrumb-item::after {
      content: '›';
      color: var(--eva-text-secondary, #666);
      font-weight: bold;
    }

    .breadcrumb-item:last-child::after {
      content: '';
    }

    .breadcrumb-link {
      color: var(--eva-text-link, #26374A);
      text-decoration: underline;
    }

    .breadcrumb-link:hover {
      color: var(--eva-text-link-hover, #0c1a2b);
    }

    .breadcrumb-current {
      font-weight: 600;
      color: var(--eva-text-primary, #333);
    }

    /* Main Content */
    .gc-main {
      flex: 1;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: 32px 24px;
    }

    /* Footer */
    .gc-footer {
      background: var(--eva-brand-primary, #26374A);
      color: var(--eva-text-inverse, #fff);
      margin-top: auto;
    }

    .gc-footer-main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
    }

    .gc-footer-title {
      font-size: 20px;
      font-weight: 700;
      margin: 0 0 24px 0;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }

    .gc-footer-nav {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 32px;
    }

    .gc-footer-section h3 {
      font-size: 16px;
      font-weight: 700;
      margin: 0 0 16px 0;
    }

    .gc-footer-links {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .gc-footer-links li {
      margin-bottom: 12px;
    }

    .gc-footer-links a {
      color: var(--eva-text-inverse, #fff);
      text-decoration: underline;
      transition: opacity 0.2s;
    }

    .gc-footer-links a:hover {
      opacity: 0.8;
    }

    .gc-footer-sub {
      background: #000;
      padding: 16px 0;
    }

    .gc-footer-sub-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 14px;
    }

    .gc-footer-sub-links {
      display: flex;
      gap: 24px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .gc-footer-sub-links a {
      color: var(--eva-text-inverse, #fff);
      text-decoration: none;
    }

    .gc-footer-sub-links a:hover {
      text-decoration: underline;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .gc-header-content {
        flex-direction: column;
        align-items: stretch;
      }

      .gc-search {
        min-width: 100%;
      }

      .gc-footer-nav {
        grid-template-columns: 1fr;
      }

      .gc-footer-sub-content {
        flex-direction: column;
        align-items: flex-start;
      }

      .gc-footer-sub-links {
        flex-direction: column;
        gap: 12px;
      }
    }

    /* Print Styles */
    @media print {
      .skip-links,
      .lang-toggle,
      .gc-search,
      .gc-nav,
      .gc-footer-main {
        display: none;
      }

      .gc-header {
        background: white;
        color: black;
        border-bottom: 2px solid black;
      }
    }
  `;

  @property({ type: String })
  siteTitle = 'Government of Canada';

  @property({ type: String })
  siteTitleFr = 'Gouvernement du Canada';

  @property({ type: String })
  currentLang: 'en' | 'fr' = 'en';

  @property({ type: String })
  pageTitle = '';

  @property({ type: Array })
  breadcrumbs: Array<{ label: string; href?: string }> = [];

  @property({ type: Boolean })
  showSearch = true;

  @state()
  private searchQuery = '';

  private handleLangToggle() {
    const newLang = this.currentLang === 'en' ? 'fr' : 'en';
    this.dispatchEvent(
      new CustomEvent('lang-change', {
        detail: { lang: newLang },
        bubbles: true,
        composed: true,
      })
    );
  }

  private handleSearch(e: Event) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent('search', {
        detail: { query: this.searchQuery },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const isEnglish = this.currentLang === 'en';

    return html`
      <!-- Skip Links -->
      <div class="skip-links">
        <a href="#main-content" class="skip-link">
          ${isEnglish ? 'Skip to main content' : 'Passer au contenu principal'}
        </a>
        <a href="#footer" class="skip-link">
          ${isEnglish ? 'Skip to footer' : 'Passer au pied de page'}
        </a>
      </div>

      <!-- Header -->
      <header class="gc-header" role="banner">
        <div class="gc-header-top">
          <div class="gc-header-container">
            <a href="${isEnglish ? '/' : '/fr'}" class="gc-signature" aria-label="${isEnglish ? 'Government of Canada' : 'Gouvernement du Canada'}">
              <div class="gc-flag" role="img" aria-label="${isEnglish ? 'Canadian flag' : 'Drapeau canadien'}"></div>
              <span class="gc-wordmark">
                ${isEnglish ? this.siteTitle : this.siteTitleFr}
              </span>
            </a>
            <button
              class="lang-toggle"
              @click=${this.handleLangToggle}
              aria-label="${isEnglish ? 'Switch to French' : 'Passer à l\'anglais'}"
            >
              ${isEnglish ? 'Français' : 'English'}
            </button>
          </div>
        </div>

        <div class="gc-header-main">
          <div class="gc-header-content">
            <h1 class="site-title">
              <slot name="site-title">${this.pageTitle || (isEnglish ? this.siteTitle : this.siteTitleFr)}</slot>
            </h1>
            ${this.showSearch
              ? html`
                  <form class="gc-search" @submit=${this.handleSearch} role="search">
                    <input
                      type="search"
                      class="gc-search-input"
                      placeholder="${isEnglish ? 'Search' : 'Rechercher'}"
                      .value=${this.searchQuery}
                      @input=${(e: Event) => {
                        this.searchQuery = (e.target as HTMLInputElement).value;
                      }}
                      aria-label="${isEnglish ? 'Search' : 'Rechercher'}"
                    />
                    <button type="submit" class="gc-search-button">
                      ${isEnglish ? 'Search' : 'Rechercher'}
                    </button>
                  </form>
                `
              : ''}
          </div>
        </div>
      </header>

      <!-- Navigation/Breadcrumbs -->
      ${this.breadcrumbs.length > 0
        ? html`
            <nav class="gc-nav" aria-label="${isEnglish ? 'Breadcrumb' : 'Fil d\'Ariane'}">
              <div class="gc-nav-container">
                <div class="gc-breadcrumbs">
                  <ol class="breadcrumb-list">
                    ${this.breadcrumbs.map(
                      (crumb, index) => html`
                        <li class="breadcrumb-item">
                          ${crumb.href
                            ? html`<a href="${crumb.href}" class="breadcrumb-link">${crumb.label}</a>`
                            : html`<span class="breadcrumb-current" aria-current="page">${crumb.label}</span>`}
                        </li>
                      `
                    )}
                  </ol>
                </div>
              </div>
            </nav>
          `
        : ''}

      <!-- Main Content -->
      <main id="main-content" class="gc-main" role="main" tabindex="-1">
        <slot></slot>
      </main>

      <!-- Footer -->
      <footer id="footer" class="gc-footer" role="contentinfo">
        <div class="gc-footer-main">
          <h2 class="gc-footer-title">${isEnglish ? 'Government of Canada' : 'Gouvernement du Canada'}</h2>
          <nav class="gc-footer-nav" aria-label="${isEnglish ? 'Footer navigation' : 'Navigation du pied de page'}">
            <div class="gc-footer-section">
              <h3>${isEnglish ? 'About government' : 'À propos du gouvernement'}</h3>
              <ul class="gc-footer-links">
                <li><a href="#">${isEnglish ? 'Contact us' : 'Contactez-nous'}</a></li>
                <li><a href="#">${isEnglish ? 'Departments and agencies' : 'Ministères et organismes'}</a></li>
                <li><a href="#">${isEnglish ? 'Public service and military' : 'Fonction publique et force militaire'}</a></li>
                <li><a href="#">${isEnglish ? 'News' : 'Nouvelles'}</a></li>
              </ul>
            </div>
            <div class="gc-footer-section">
              <h3>${isEnglish ? 'About this site' : 'À propos de ce site'}</h3>
              <ul class="gc-footer-links">
                <li><a href="#">${isEnglish ? 'Social media' : 'Médias sociaux'}</a></li>
                <li><a href="#">${isEnglish ? 'Mobile applications' : 'Applications mobiles'}</a></li>
                <li><a href="#">${isEnglish ? 'About Canada.ca' : 'À propos de Canada.ca'}</a></li>
                <li><a href="#">${isEnglish ? 'Terms and conditions' : 'Avis'}</a></li>
                <li><a href="#">${isEnglish ? 'Privacy' : 'Confidentialité'}</a></li>
              </ul>
            </div>
            <slot name="footer-links"></slot>
          </nav>
        </div>

        <div class="gc-footer-sub">
          <div class="gc-footer-sub-content">
            <div class="gc-wordmark-footer">
              <a href="${isEnglish ? '/' : '/fr'}" style="color: inherit; text-decoration: none;">
                <strong>${isEnglish ? 'Government of Canada' : 'Gouvernement du Canada'}</strong>
              </a>
            </div>
            <ul class="gc-footer-sub-links">
              <li><a href="#">${isEnglish ? 'Terms and conditions' : 'Avis'}</a></li>
              <li><a href="#">${isEnglish ? 'Transparency' : 'Transparence'}</a></li>
            </ul>
          </div>
        </div>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-page': EvaGCPage;
  }
}

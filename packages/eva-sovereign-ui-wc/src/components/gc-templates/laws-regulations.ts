import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * EVA GC Laws Regulations Template
 * 
 * Template for displaying laws, regulations, and legal frameworks
 * with proper citations and structured sections.
 * 
 * @element eva-gc-laws-regulations
 */
@customElement('eva-gc-laws-regulations')
export class EvaGCLawsRegulations extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .laws-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .laws-header {
      background: var(--gc-color-primary, #26374A);
      color: white;
      padding: 32px 24px;
    }

    .header-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .law-title {
      font-size: 32px;
      font-weight: 700;
      margin: 0 0 8px 0;
    }

    .law-citation {
      font-size: 16px;
      opacity: 0.9;
      font-style: italic;
    }

    .content-layout {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
    }

    .toc {
      position: sticky;
      top: 20px;
      align-self: start;
    }

    .toc-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 16px 0;
    }

    .toc-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .toc-list li {
      margin-bottom: 8px;
    }

    .toc-list a {
      color: var(--gc-color-link, #0073e6);
      text-decoration: none;
      font-size: 14px;
    }

    .toc-list a:hover {
      text-decoration: underline;
    }

    .main-content {
      min-width: 0;
    }

    .section {
      margin-bottom: 40px;
      padding: 24px;
      background: white;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
    }

    .section-number {
      display: inline-block;
      background: var(--gc-color-primary, #26374A);
      color: white;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 12px;
    }

    .section-title {
      font-size: 24px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 16px 0;
    }

    .section-content {
      font-size: 16px;
      line-height: 1.7;
      color: var(--gc-color-text-primary, #333333);
    }

    @media (max-width: 1024px) {
      .content-layout {
        grid-template-columns: 1fr;
      }

      .toc {
        position: static;
        background: var(--gc-color-background-light, #f5f5f5);
        border: 1px solid var(--gc-color-border-default, #e0e0e0);
        border-radius: 4px;
        padding: 20px;
      }
    }

    @media (max-width: 768px) {
      .laws-header {
        padding: 24px 16px;
      }

      .law-title {
        font-size: 24px;
      }

      .content-layout {
        padding: 24px 16px;
      }
    }

    @media print {
      .laws-header {
        background: white;
        color: var(--gc-color-text-primary, #333333);
      }

      .toc {
        display: none;
      }

      .content-layout {
        grid-template-columns: 1fr;
      }
    }
  `;

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: String, attribute: 'law-title' })
  lawTitle = '';

  @property({ type: String, attribute: 'law-title-fr' })
  lawTitleFr = '';

  @property({ type: String })
  citation = '';

  @property({ type: String, attribute: 'citation-fr' })
  citationFr = '';

  private get currentLawTitle(): string {
    return this.lang === 'fr' && this.lawTitleFr ? this.lawTitleFr : this.lawTitle;
  }

  private get currentCitation(): string {
    return this.lang === 'fr' && this.citationFr ? this.citationFr : this.citation;
  }

  override render() {
    return html`
      <div class="laws-wrapper">
        <slot name="header"></slot>
        <slot name="breadcrumbs"></slot>

        <header class="laws-header">
          <div class="header-container">
            <h1 class="law-title">${this.currentLawTitle}</h1>
            ${this.citation ? html`
              <p class="law-citation">${this.currentCitation}</p>
            ` : ''}
          </div>
        </header>

        <div class="content-layout">
          <nav class="toc" aria-label="${this.lang === 'fr' ? 'Table des matières' : 'Table of contents'}">
            <h2 class="toc-title">
              ${this.lang === 'fr' ? 'Table des matières' : 'Table of contents'}
            </h2>
            <slot name="toc"></slot>
          </nav>

          <main class="main-content" role="main">
            <slot></slot>
          </main>
        </div>

        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-laws-regulations': EvaGCLawsRegulations;
  }
}

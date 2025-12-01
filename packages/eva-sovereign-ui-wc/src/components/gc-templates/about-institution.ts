import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * EVA GC About Institution Template
 * 
 * Template for "About the institution" pages with organizational
 * transparency information, reports, and accountability.
 * 
 * @element eva-gc-about-institution
 */
@customElement('eva-gc-about-institution')
export class EvaGCAboutInstitution extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .about-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .page-header {
      background: var(--gc-color-background-light, #f5f5f5);
      padding: 32px 24px;
      border-bottom: 4px solid var(--gc-color-primary, #26374A);
    }

    .header-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .page-title {
      font-size: 36px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0;
    }

    .about-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
    }

    .sections-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    .info-card {
      background: white;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      padding: 24px;
      transition: box-shadow 0.2s ease;
    }

    .info-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .card-icon {
      width: 48px;
      height: 48px;
      background: var(--gc-color-primary-light, #e8f4ff);
      color: var(--gc-color-primary, #26374A);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
    }

    .card-title {
      font-size: 20px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 12px 0;
    }

    .card-description {
      font-size: 16px;
      line-height: 1.5;
      color: var(--gc-color-text-secondary, #666666);
      margin-bottom: 16px;
    }

    .card-link {
      color: var(--gc-color-link, #0073e6);
      text-decoration: underline;
      font-weight: 700;
    }

    .card-link:hover {
      color: var(--gc-color-link-hover, #005bb5);
    }

    .transparency-section {
      background: var(--gc-color-background-light, #f5f5f5);
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      padding: 32px;
      margin-top: 40px;
    }

    .section-title {
      font-size: 28px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 24px 0;
    }

    @media (max-width: 768px) {
      .page-header {
        padding: 24px 16px;
      }

      .page-title {
        font-size: 28px;
      }

      .about-content {
        padding: 24px 16px;
      }

      .sections-grid {
        grid-template-columns: 1fr;
      }

      .transparency-section {
        padding: 24px 16px;
      }
    }

    @media print {
      .page-header {
        background: white;
      }

      .transparency-section {
        background: white;
      }
    }
  `;

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: String })
  title = '';

  @property({ type: String, attribute: 'title-fr' })
  titleFr = '';

  private get currentTitle(): string {
    return this.lang === 'fr' && this.titleFr ? this.titleFr : this.title;
  }

  private get defaultTitle(): string {
    return this.lang === 'fr' ? 'À propos de l\'institution' : 'About the institution';
  }

  override render() {
    return html`
      <div class="about-wrapper">
        <slot name="header"></slot>
        <slot name="breadcrumbs"></slot>

        <header class="page-header">
          <div class="header-container">
            <h1 class="page-title">${this.currentTitle || this.defaultTitle}</h1>
          </div>
        </header>

        <main class="about-content" role="main">
          <div class="sections-grid">
            <slot name="info-cards"></slot>
          </div>

          <div class="transparency-section">
            <slot name="transparency"></slot>
          </div>

          <slot></slot>
        </main>

        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-about-institution': EvaGCAboutInstitution;
  }
}

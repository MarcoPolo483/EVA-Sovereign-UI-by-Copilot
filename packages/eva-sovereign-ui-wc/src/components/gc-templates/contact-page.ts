import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * EVA GC Contact Page Template
 * 
 * Template for contact information pages with multiple contact methods,
 * office locations, and contact forms.
 * 
 * @element eva-gc-contact-page
 */
@customElement('eva-gc-contact-page')
export class EvaGCContactPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .contact-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .page-header {
      background: var(--gc-color-background-light, #f5f5f5);
      padding: 32px 24px;
      border-bottom: 3px solid var(--gc-color-primary, #26374A);
    }

    .header-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .page-title {
      font-size: 36px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 12px 0;
    }

    .page-intro {
      font-size: 18px;
      color: var(--gc-color-text-secondary, #666666);
      max-width: 800px;
    }

    .contact-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
    }

    .contact-methods {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    .contact-card {
      background: white;
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      padding: 24px;
      transition: box-shadow 0.2s ease;
    }

    .contact-card:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .contact-icon {
      width: 48px;
      height: 48px;
      background: var(--gc-color-primary-light, #e8f4ff);
      color: var(--gc-color-primary, #26374A);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
    }

    .contact-title {
      font-size: 20px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 12px 0;
    }

    .contact-details {
      font-size: 16px;
      line-height: 1.6;
      color: var(--gc-color-text-primary, #333333);
    }

    .contact-details a {
      color: var(--gc-color-link, #0073e6);
      text-decoration: underline;
    }

    .contact-details a:hover {
      color: var(--gc-color-link-hover, #005bb5);
    }

    .section-title {
      font-size: 28px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 40px 0 24px 0;
      padding-bottom: 12px;
      border-bottom: 3px solid var(--gc-color-primary, #26374A);
    }

    @media (max-width: 768px) {
      .page-header {
        padding: 24px 16px;
      }

      .page-title {
        font-size: 28px;
      }

      .contact-content {
        padding: 24px 16px;
      }

      .contact-methods {
        grid-template-columns: 1fr;
      }
    }

    @media print {
      .page-header {
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

  @property({ type: String })
  intro = '';

  @property({ type: String, attribute: 'intro-fr' })
  introFr = '';

  private get currentTitle(): string {
    return this.lang === 'fr' && this.titleFr ? this.titleFr : this.title;
  }

  private get currentIntro(): string {
    return this.lang === 'fr' && this.introFr ? this.introFr : this.intro;
  }

  override render() {
    return html`
      <div class="contact-wrapper">
        <slot name="header"></slot>
        <slot name="breadcrumbs"></slot>

        <header class="page-header">
          <div class="header-container">
            <h1 class="page-title">${this.currentTitle}</h1>
            ${this.intro ? html`
              <p class="page-intro">${this.currentIntro}</p>
            ` : ''}
          </div>
        </header>

        <main class="contact-content" role="main">
          <div class="contact-methods">
            <slot name="contact-methods"></slot>
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
    'eva-gc-contact-page': EvaGCContactPage;
  }
}

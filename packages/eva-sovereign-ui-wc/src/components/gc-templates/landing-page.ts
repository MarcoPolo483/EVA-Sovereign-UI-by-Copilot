import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * EVA GC Landing Page Template
 * 
 * Template for service or topic landing pages with featured content,
 * quick links, and call-to-action sections.
 * 
 * @element eva-gc-landing-page
 * 
 * @example
 * ```html
 * <eva-gc-landing-page
 *   title="Service Landing"
 *   lang="en">
 * </eva-gc-landing-page>
 * ```
 */
@customElement('eva-gc-landing-page')
export class EvaGCLandingPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .landing-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .intro-section {
      background: var(--gc-color-background-light, #f5f5f5);
      padding: 40px 24px;
      border-bottom: 4px solid var(--gc-color-primary, #26374A);
    }

    .intro-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .page-title {
      font-size: 36px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 16px 0;
    }

    .page-intro {
      font-size: 20px;
      line-height: 1.6;
      color: var(--gc-color-text-secondary, #666666);
      max-width: 800px;
    }

    .featured-section {
      padding: 60px 24px;
      background: white;
    }

    .section-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 28px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 32px 0;
    }

    .featured-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 24px;
    }

    .services-section {
      padding: 60px 24px;
      background: var(--gc-color-background-light, #f5f5f5);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
      margin-top: 32px;
    }

    .cta-section {
      padding: 60px 24px;
      background: white;
      text-align: center;
    }

    .cta-title {
      font-size: 32px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 16px 0;
    }

    .cta-description {
      font-size: 18px;
      color: var(--gc-color-text-secondary, #666666);
      margin: 0 0 32px 0;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 768px) {
      .intro-section {
        padding: 24px 16px;
      }

      .page-title {
        font-size: 28px;
      }

      .page-intro {
        font-size: 18px;
      }

      .featured-grid,
      .services-grid {
        grid-template-columns: 1fr;
      }

      .featured-section,
      .services-section,
      .cta-section {
        padding: 40px 16px;
      }
    }

    @media print {
      .intro-section,
      .featured-section,
      .services-section {
        background: white;
      }

      .cta-section {
        display: none;
      }
    }
  `;

  /** Language (en or fr) */
  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  /** Page title */
  @property({ type: String })
  title = '';

  /** French title */
  @property({ type: String, attribute: 'title-fr' })
  titleFr = '';

  /** Intro text */
  @property({ type: String })
  intro = '';

  /** French intro */
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
      <div class="landing-wrapper">
        <slot name="header"></slot>
        <slot name="breadcrumbs"></slot>

        <section class="intro-section">
          <div class="intro-container">
            <h1 class="page-title">${this.currentTitle}</h1>
            ${this.intro ? html`
              <p class="page-intro">${this.currentIntro}</p>
            ` : ''}
            <slot name="intro"></slot>
          </div>
        </section>

        <section class="featured-section">
          <div class="section-container">
            <h2 class="section-title">
              <slot name="featured-title">
                ${this.lang === 'fr' ? 'En vedette' : 'Featured'}
              </slot>
            </h2>
            <div class="featured-grid">
              <slot name="featured"></slot>
            </div>
          </div>
        </section>

        <section class="services-section">
          <div class="section-container">
            <h2 class="section-title">
              <slot name="services-title">
                ${this.lang === 'fr' ? 'Services et renseignements' : 'Services and information'}
              </slot>
            </h2>
            <div class="services-grid">
              <slot name="services"></slot>
            </div>
          </div>
        </section>

        <section class="cta-section">
          <div class="section-container">
            <slot name="cta"></slot>
          </div>
        </section>

        <main role="main">
          <slot></slot>
        </main>

        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-landing-page': EvaGCLandingPage;
  }
}

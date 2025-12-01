import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * EVA GC Campaign Page Template
 * 
 * Template for promotional campaigns with hero banner, features, and call-to-action.
 * Used for awareness campaigns, program launches, and public engagement.
 * 
 * @element eva-gc-campaign-page
 * 
 * @example
 * ```html
 * <eva-gc-campaign-page
 *   campaign-title="Campaign Name"
 *   tagline="Campaign tagline"
 *   lang="en">
 * </eva-gc-campaign-page>
 * ```
 */
@customElement('eva-gc-campaign-page')
export class EvaGCCampaignPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .campaign-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .hero-section {
      background: linear-gradient(135deg, var(--gc-color-primary, #26374A) 0%, var(--gc-color-primary-dark, #1c2c3a) 100%);
      color: white;
      padding: 80px 24px;
      text-align: center;
    }

    .hero-content {
      max-width: 900px;
      margin: 0 auto;
    }

    .campaign-title {
      font-size: 48px;
      font-weight: 700;
      margin: 0 0 16px 0;
      line-height: 1.2;
    }

    .campaign-tagline {
      font-size: 24px;
      font-weight: 400;
      margin: 0 0 32px 0;
      opacity: 0.95;
    }

    .hero-cta {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 16px 32px;
      background: white;
      color: var(--gc-color-primary, #26374A);
      border: none;
      border-radius: 4px;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      transition: transform 0.2s ease;
    }

    .hero-cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .features-section {
      padding: 60px 24px;
      background: white;
    }

    .features-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 32px;
      margin-top: 40px;
    }

    .content-section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
    }

    .section-title {
      font-size: 32px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 24px 0;
      text-align: center;
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 40px 16px;
      }

      .campaign-title {
        font-size: 32px;
      }

      .campaign-tagline {
        font-size: 18px;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }
    }

    @media print {
      .hero-section {
        background: white;
        color: var(--gc-color-text-primary, #333333);
        padding: 20px 0;
      }

      .hero-cta {
        display: none;
      }
    }
  `;

  /** Language (en or fr) */
  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  /** Campaign title */
  @property({ type: String, attribute: 'campaign-title' })
  campaignTitle = '';

  /** French campaign title */
  @property({ type: String, attribute: 'campaign-title-fr' })
  campaignTitleFr = '';

  /** Campaign tagline */
  @property({ type: String })
  tagline = '';

  /** French tagline */
  @property({ type: String, attribute: 'tagline-fr' })
  taglineFr = '';

  /** CTA text */
  @property({ type: String, attribute: 'cta-text' })
  ctaText = '';

  /** French CTA text */
  @property({ type: String, attribute: 'cta-text-fr' })
  ctaTextFr = '';

  /** CTA URL */
  @property({ type: String, attribute: 'cta-url' })
  ctaUrl = '';

  private get currentCampaignTitle(): string {
    return this.lang === 'fr' && this.campaignTitleFr ? this.campaignTitleFr : this.campaignTitle;
  }

  private get currentTagline(): string {
    return this.lang === 'fr' && this.taglineFr ? this.taglineFr : this.tagline;
  }

  private get currentCtaText(): string {
    return this.lang === 'fr' && this.ctaTextFr ? this.ctaTextFr : this.ctaText;
  }

  override render() {
    return html`
      <div class="campaign-wrapper">
        <slot name="header"></slot>

        <section class="hero-section">
          <div class="hero-content">
            <h1 class="campaign-title">${this.currentCampaignTitle}</h1>
            ${this.tagline ? html`
              <p class="campaign-tagline">${this.currentTagline}</p>
            ` : ''}
            ${this.ctaText && this.ctaUrl ? html`
              <a href="${this.ctaUrl}" class="hero-cta">
                ${this.currentCtaText}
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </a>
            ` : ''}
            <slot name="hero"></slot>
          </div>
        </section>

        <section class="features-section">
          <div class="features-container">
            <h2 class="section-title">
              <slot name="features-title"></slot>
            </h2>
            <div class="features-grid">
              <slot name="features"></slot>
            </div>
          </div>
        </section>

        <main class="content-section" role="main">
          <slot></slot>
        </main>

        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-campaign-page': EvaGCCampaignPage;
  }
}

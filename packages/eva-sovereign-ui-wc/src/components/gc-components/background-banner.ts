import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Banner alignment
 */
export type BannerAlignment = 'left' | 'center' | 'right';

/**
 * EVA GC Background Banner Component
 * 
 * Hero banner with background image, overlay, and call-to-action.
 * Follows GC Design System patterns for campaign/landing pages.
 * 
 * @element eva-gc-background-banner
 * 
 * @fires cta-click - Fired when call-to-action button is clicked
 * 
 * @example
 * ```html
 * <eva-gc-background-banner
 *   image="/images/hero.jpg"
 *   title="Welcome to Canada"
 *   cta-text="Learn more"
 *   cta-url="/about"
 *   lang="en">
 * </eva-gc-background-banner>
 * ```
 */
@customElement('eva-gc-background-banner')
export class EvaGCBackgroundBanner extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
    }

    .banner {
      position: relative;
      width: 100%;
      min-height: 400px;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    .banner-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }

    .banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    .banner-content {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 24px;
      color: white;
    }

    .banner-content.align-left {
      text-align: left;
    }

    .banner-content.align-center {
      text-align: center;
    }

    .banner-content.align-right {
      text-align: right;
    }

    .banner-title {
      font-size: 48px;
      font-weight: 700;
      margin: 0 0 16px 0;
      line-height: 1.2;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .banner-subtitle {
      font-size: 24px;
      font-weight: 400;
      margin: 0 0 32px 0;
      line-height: 1.5;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .banner-description {
      font-size: 18px;
      font-weight: 400;
      margin: 0 0 32px 0;
      line-height: 1.6;
      max-width: 700px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .align-center .banner-description {
      margin-left: auto;
      margin-right: auto;
    }

    .align-right .banner-description {
      margin-left: auto;
    }

    .banner-cta {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 16px 32px;
      background: var(--gc-color-primary, #26374A);
      color: white;
      border: 2px solid transparent;
      border-radius: 4px;
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease;
      min-height: 44px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .banner-cta:hover {
      background: var(--gc-color-primary-dark, #1c2c3a);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    }

    .banner-cta:focus {
      outline: 3px solid white;
      outline-offset: 2px;
    }

    .banner-cta svg {
      width: 20px;
      height: 20px;
    }

    /* Dark overlay variants */
    .banner-overlay.light {
      background: rgba(0, 0, 0, 0.3);
    }

    .banner-overlay.medium {
      background: rgba(0, 0, 0, 0.5);
    }

    .banner-overlay.dark {
      background: rgba(0, 0, 0, 0.7);
    }

    /* Height variants */
    .banner.small {
      min-height: 300px;
    }

    .banner.medium {
      min-height: 400px;
    }

    .banner.large {
      min-height: 500px;
    }

    .banner.fullscreen {
      min-height: 100vh;
    }

    @media (max-width: 768px) {
      .banner {
        min-height: 300px;
      }

      .banner.fullscreen {
        min-height: 70vh;
      }

      .banner-content {
        padding: 40px 16px;
      }

      .banner-title {
        font-size: 32px;
      }

      .banner-subtitle {
        font-size: 18px;
      }

      .banner-description {
        font-size: 16px;
      }

      .banner-cta {
        padding: 12px 24px;
        font-size: 16px;
      }
    }

    @media print {
      :host {
        display: none;
      }
    }
  `;

  /** Language (en or fr) */
  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  /** Background image URL */
  @property({ type: String })
  image = '';

  /** Banner title */
  @property({ type: String })
  title = '';

  /** French title */
  @property({ type: String, attribute: 'title-fr' })
  titleFr = '';

  /** Banner subtitle */
  @property({ type: String })
  subtitle = '';

  /** French subtitle */
  @property({ type: String, attribute: 'subtitle-fr' })
  subtitleFr = '';

  /** Banner description */
  @property({ type: String })
  description = '';

  /** French description */
  @property({ type: String, attribute: 'description-fr' })
  descriptionFr = '';

  /** Call-to-action button text */
  @property({ type: String, attribute: 'cta-text' })
  ctaText = '';

  /** French CTA text */
  @property({ type: String, attribute: 'cta-text-fr' })
  ctaTextFr = '';

  /** Call-to-action URL */
  @property({ type: String, attribute: 'cta-url' })
  ctaUrl = '';

  /** Content alignment */
  @property({ type: String })
  alignment: BannerAlignment = 'left';

  /** Overlay darkness (light, medium, dark) */
  @property({ type: String })
  overlay: 'light' | 'medium' | 'dark' = 'medium';

  /** Banner height (small, medium, large, fullscreen) */
  @property({ type: String })
  height: 'small' | 'medium' | 'large' | 'fullscreen' = 'medium';

  /** Alt text for background image */
  @property({ type: String })
  alt = '';

  /** French alt text */
  @property({ type: String, attribute: 'alt-fr' })
  altFr = '';

  private get currentTitle(): string {
    return this.lang === 'fr' && this.titleFr ? this.titleFr : this.title;
  }

  private get currentSubtitle(): string {
    return this.lang === 'fr' && this.subtitleFr ? this.subtitleFr : this.subtitle;
  }

  private get currentDescription(): string {
    return this.lang === 'fr' && this.descriptionFr ? this.descriptionFr : this.description;
  }

  private get currentCtaText(): string {
    return this.lang === 'fr' && this.ctaTextFr ? this.ctaTextFr : this.ctaText;
  }

  private get currentAlt(): string {
    return this.lang === 'fr' && this.altFr ? this.altFr : this.alt;
  }

  private handleCtaClick(e: Event) {
    this.dispatchEvent(new CustomEvent('cta-click', {
      detail: { url: this.ctaUrl },
      bubbles: true,
      composed: true
    }));
  }

  override render() {
    return html`
      <div class="banner ${this.height}">
        ${this.image ? html`
          <img
            class="banner-background"
            src="${this.image}"
            alt="${this.currentAlt}"
            loading="lazy" />
        ` : ''}
        
        <div class="banner-overlay ${this.overlay}"></div>

        <div class="banner-content align-${this.alignment}">
          ${this.title ? html`
            <h1 class="banner-title">${this.currentTitle}</h1>
          ` : ''}

          ${this.subtitle ? html`
            <p class="banner-subtitle">${this.currentSubtitle}</p>
          ` : ''}

          ${this.description ? html`
            <p class="banner-description">${this.currentDescription}</p>
          ` : ''}

          ${this.ctaText && this.ctaUrl ? html`
            <a
              href="${this.ctaUrl}"
              class="banner-cta"
              @click=${this.handleCtaClick}>
              ${this.currentCtaText}
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M5 12h14m-7-7l7 7-7 7"/>
              </svg>
            </a>
          ` : this.ctaText ? html`
            <button
              class="banner-cta"
              @click=${this.handleCtaClick}>
              ${this.currentCtaText}
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M5 12h14m-7-7l7 7-7 7"/>
              </svg>
            </button>
          ` : ''}

          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-background-banner': EvaGCBackgroundBanner;
  }
}

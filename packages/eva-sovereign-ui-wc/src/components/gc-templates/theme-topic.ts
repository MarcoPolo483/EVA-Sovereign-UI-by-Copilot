import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * EVA GC Theme Topic Template
 * 
 * Template for theme and topic pages that aggregate related content
 * and services around a specific theme.
 * 
 * @element eva-gc-theme-topic
 */
@customElement('eva-gc-theme-topic')
export class EvaGCThemeTopic extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .theme-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .theme-hero {
      background: linear-gradient(135deg, var(--gc-color-primary, #26374A) 0%, var(--gc-color-primary-dark, #1c2c3a) 100%);
      color: white;
      padding: 60px 24px;
    }

    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .theme-title {
      font-size: 44px;
      font-weight: 700;
      margin: 0 0 16px 0;
      line-height: 1.2;
    }

    .theme-description {
      font-size: 20px;
      max-width: 800px;
      opacity: 0.95;
    }

    .most-requested {
      background: white;
      padding: 40px 24px;
      border-bottom: 1px solid var(--gc-color-border-default, #e0e0e0);
    }

    .section-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 28px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 24px 0;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }

    .content-sections {
      background: var(--gc-color-background-light, #f5f5f5);
      padding: 40px 24px;
    }

    .content-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 32px;
      margin-top: 32px;
    }

    @media (max-width: 768px) {
      .theme-hero {
        padding: 40px 16px;
      }

      .theme-title {
        font-size: 32px;
      }

      .theme-description {
        font-size: 18px;
      }

      .most-requested,
      .content-sections {
        padding: 32px 16px;
      }

      .services-grid,
      .content-grid {
        grid-template-columns: 1fr;
      }
    }

    @media print {
      .theme-hero {
        background: white;
        color: var(--gc-color-text-primary, #333333);
        padding: 20px 0;
      }

      .content-sections {
        background: white;
      }
    }
  `;

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: String })
  theme = '';

  @property({ type: String, attribute: 'theme-fr' })
  themeFr = '';

  @property({ type: String })
  description = '';

  @property({ type: String, attribute: 'description-fr' })
  descriptionFr = '';

  private get currentTheme(): string {
    return this.lang === 'fr' && this.themeFr ? this.themeFr : this.theme;
  }

  private get currentDescription(): string {
    return this.lang === 'fr' && this.descriptionFr ? this.descriptionFr : this.description;
  }

  private get mostRequestedLabel(): string {
    return this.lang === 'fr' ? 'Services et renseignements les plus demandés' : 'Most requested';
  }

  override render() {
    return html`
      <div class="theme-wrapper">
        <slot name="header"></slot>
        <slot name="breadcrumbs"></slot>

        <section class="theme-hero">
          <div class="hero-container">
            <h1 class="theme-title">${this.currentTheme}</h1>
            ${this.description ? html`
              <p class="theme-description">${this.currentDescription}</p>
            ` : ''}
          </div>
        </section>

        <section class="most-requested">
          <div class="section-container">
            <h2 class="section-title">${this.mostRequestedLabel}</h2>
            <div class="services-grid">
              <slot name="most-requested"></slot>
            </div>
          </div>
        </section>

        <section class="content-sections">
          <div class="section-container">
            <slot name="sections-title"></slot>
            <div class="content-grid">
              <slot name="sections"></slot>
            </div>
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
    'eva-gc-theme-topic': EvaGCThemeTopic;
  }
}

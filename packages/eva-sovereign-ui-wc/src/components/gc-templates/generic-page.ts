import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * EVA GC Generic Page Template
 * 
 * Flexible template for various page types that don't fit
 * other specific templates. Provides maximum customization.
 * 
 * @element eva-gc-generic-page
 */
@customElement('eva-gc-generic-page')
export class EvaGCGenericPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .generic-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .page-container {
      flex: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
      width: 100%;
    }

    .page-container.full-width {
      max-width: none;
      padding: 0;
    }

    .page-container.narrow {
      max-width: 800px;
    }

    .page-header {
      margin-bottom: 32px;
    }

    .page-title {
      font-size: 36px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 16px 0;
      line-height: 1.2;
    }

    .page-intro {
      font-size: 18px;
      line-height: 1.6;
      color: var(--gc-color-text-secondary, #666666);
      max-width: 800px;
    }

    .page-content {
      font-size: 16px;
      line-height: 1.6;
      color: var(--gc-color-text-primary, #333333);
    }

    @media (max-width: 768px) {
      .page-container {
        padding: 24px 16px;
      }

      .page-title {
        font-size: 28px;
      }

      .page-intro {
        font-size: 16px;
      }
    }

    @media print {
      .page-container {
        padding: 0;
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

  @property({ type: String })
  width: 'default' | 'narrow' | 'full-width' = 'default';

  @property({ type: Boolean, attribute: 'hide-title' })
  hideTitle = false;

  private get currentTitle(): string {
    return this.lang === 'fr' && this.titleFr ? this.titleFr : this.title;
  }

  private get currentIntro(): string {
    return this.lang === 'fr' && this.introFr ? this.introFr : this.intro;
  }

  private get containerClass(): string {
    return this.width !== 'default' ? this.width : '';
  }

  override render() {
    return html`
      <div class="generic-wrapper">
        <slot name="header"></slot>
        <slot name="breadcrumbs"></slot>

        <main class="page-container ${this.containerClass}" role="main">
          ${!this.hideTitle && this.title ? html`
            <header class="page-header">
              <h1 class="page-title">${this.currentTitle}</h1>
              ${this.intro ? html`
                <p class="page-intro">${this.currentIntro}</p>
              ` : ''}
            </header>
          ` : ''}

          <div class="page-content">
            <slot></slot>
          </div>
        </main>

        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-generic-page': EvaGCGenericPage;
  }
}

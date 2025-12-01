import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * EVA GC Basic Page Template
 * 
 * Standard canada.ca basic content page with header, breadcrumbs, content, and footer.
 * Most common template for general information pages.
 * 
 * @element eva-gc-basic-page
 * 
 * @example
 * ```html
 * <eva-gc-basic-page
 *   title="Page Title"
 *   lang="en">
 *   <p>Page content goes here</p>
 * </eva-gc-basic-page>
 * ```
 */
@customElement('eva-gc-basic-page')
export class EvaGCBasicPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .page-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .page-header {
      background: white;
      border-bottom: 1px solid var(--gc-color-border-default, #e0e0e0);
    }

    .page-content {
      flex: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
      width: 100%;
    }

    .page-title {
      font-size: 36px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 24px 0;
      line-height: 1.2;
    }

    .page-meta {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--gc-color-border-default, #e0e0e0);
      font-size: 14px;
      color: var(--gc-color-text-secondary, #666666);
    }

    .content-body {
      line-height: 1.6;
      font-size: 20px;
      color: var(--gc-color-text-primary, #333333);
    }

    .content-body ::slotted(h2) {
      font-size: 28px;
      font-weight: 700;
      margin: 32px 0 16px 0;
      color: var(--gc-color-text-primary, #333333);
    }

    .content-body ::slotted(h3) {
      font-size: 24px;
      font-weight: 700;
      margin: 24px 0 12px 0;
      color: var(--gc-color-text-primary, #333333);
    }

    .content-body ::slotted(p) {
      margin: 0 0 16px 0;
    }

    .content-body ::slotted(ul),
    .content-body ::slotted(ol) {
      margin: 0 0 16px 0;
      padding-left: 40px;
    }

    .content-body ::slotted(li) {
      margin-bottom: 8px;
    }

    @media (max-width: 768px) {
      .page-content {
        padding: 24px 16px;
      }

      .page-title {
        font-size: 28px;
      }

      .content-body {
        font-size: 18px;
      }
    }

    @media print {
      .page-header,
      .page-meta {
        display: none;
      }

      .page-content {
        padding: 0;
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

  /** Show date modified */
  @property({ type: Boolean, attribute: 'show-date-modified' })
  showDateModified = true;

  /** Date modified */
  @property({ type: String, attribute: 'date-modified' })
  dateModified = '';

  private get currentTitle(): string {
    return this.lang === 'fr' && this.titleFr ? this.titleFr : this.title;
  }

  private get dateModifiedLabel(): string {
    return this.lang === 'fr' ? 'Date de modification :' : 'Date modified:';
  }

  override render() {
    return html`
      <div class="page-wrapper">
        <slot name="header"></slot>
        <slot name="breadcrumbs"></slot>

        <main class="page-content" role="main">
          <h1 class="page-title">${this.currentTitle}</h1>

          ${this.showDateModified && this.dateModified ? html`
            <div class="page-meta">
              <span>${this.dateModifiedLabel} ${this.dateModified}</span>
            </div>
          ` : ''}

          <div class="content-body">
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
    'eva-gc-basic-page': EvaGCBasicPage;
  }
}

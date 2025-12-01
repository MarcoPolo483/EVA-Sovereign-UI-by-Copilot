import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * EVA GC News Page Template
 * 
 * Template for news articles and press releases with metadata,
 * related content, and social sharing.
 * 
 * @element eva-gc-news-page
 */
@customElement('eva-gc-news-page')
export class EvaGCNewsPage extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .news-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .news-header {
      background: var(--gc-color-background-light, #f5f5f5);
      padding: 32px 24px 24px;
      border-bottom: 4px solid var(--gc-color-primary, #26374A);
    }

    .header-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .news-type {
      display: inline-block;
      background: var(--gc-color-primary, #26374A);
      color: white;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    .news-title {
      font-size: 36px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 16px 0;
      line-height: 1.2;
    }

    .news-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 14px;
      color: var(--gc-color-text-secondary, #666666);
      padding-bottom: 16px;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .content-layout {
      display: grid;
      grid-template-columns: 1fr 300px;
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
    }

    .article-content {
      font-size: 18px;
      line-height: 1.7;
      color: var(--gc-color-text-primary, #333333);
    }

    .sidebar {
      align-self: start;
      position: sticky;
      top: 20px;
    }

    .sidebar-section {
      background: var(--gc-color-background-light, #f5f5f5);
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      padding: 20px;
      margin-bottom: 20px;
    }

    .sidebar-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 12px 0;
    }

    @media (max-width: 1024px) {
      .content-layout {
        grid-template-columns: 1fr;
      }

      .sidebar {
        position: static;
      }
    }

    @media (max-width: 768px) {
      .news-header {
        padding: 24px 16px 16px;
      }

      .news-title {
        font-size: 28px;
      }

      .content-layout {
        padding: 24px 16px;
      }

      .article-content {
        font-size: 16px;
      }
    }

    @media print {
      .news-header {
        background: white;
      }

      .sidebar {
        display: none;
      }

      .content-layout {
        grid-template-columns: 1fr;
      }
    }
  `;

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: String })
  title = '';

  @property({ type: String, attribute: 'title-fr' })
  titleFr = '';

  @property({ type: String, attribute: 'news-type' })
  newsType: 'news' | 'media-advisory' | 'backgrounder' | 'statement' = 'news';

  @property({ type: String, attribute: 'publish-date' })
  publishDate = '';

  @property({ type: String })
  location = '';

  private get currentTitle(): string {
    return this.lang === 'fr' && this.titleFr ? this.titleFr : this.title;
  }

  private get newsTypeLabel(): string {
    const labels = {
      news: this.lang === 'fr' ? 'Nouvelles' : 'News',
      'media-advisory': this.lang === 'fr' ? 'Avis aux médias' : 'Media Advisory',
      backgrounder: this.lang === 'fr' ? 'Document d\'information' : 'Backgrounder',
      statement: this.lang === 'fr' ? 'Déclaration' : 'Statement'
    };
    return labels[this.newsType];
  }

  override render() {
    return html`
      <div class="news-wrapper">
        <slot name="header"></slot>
        <slot name="breadcrumbs"></slot>

        <header class="news-header">
          <div class="header-container">
            <span class="news-type">${this.newsTypeLabel}</span>
            <h1 class="news-title">${this.currentTitle}</h1>
            <div class="news-meta">
              ${this.publishDate ? html`
                <span class="meta-item">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                  ${this.publishDate}
                </span>
              ` : ''}
              ${this.location ? html`
                <span class="meta-item">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  ${this.location}
                </span>
              ` : ''}
            </div>
          </div>
        </header>

        <div class="content-layout">
          <main class="article-content" role="main">
            <slot></slot>
          </main>

          <aside class="sidebar">
            <slot name="sidebar"></slot>
          </aside>
        </div>

        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-news-page': EvaGCNewsPage;
  }
}

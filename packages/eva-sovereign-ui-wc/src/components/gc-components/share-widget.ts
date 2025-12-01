import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Social media platform for sharing
 */
export type SharePlatform = 'twitter' | 'facebook' | 'linkedin' | 'email' | 'copy';

/**
 * EVA GC Share Widget Component
 * 
 * Provides social media sharing functionality with standard GC patterns.
 * Supports sharing to Twitter, Facebook, LinkedIn, email, and copy link.
 * 
 * @element eva-gc-share-widget
 * 
 * @fires share - Fired when a share action is triggered
 * 
 * @example
 * ```html
 * <eva-gc-share-widget
 *   title="Share this page"
 *   url="https://example.gc.ca/page"
 *   lang="en">
 * </eva-gc-share-widget>
 * ```
 */
@customElement('eva-gc-share-widget')
export class EvaGCShareWidget extends LitElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
    }

    .share-widget {
      background: var(--gc-color-background-light, #f5f5f5);
      border: 1px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      padding: 20px;
    }

    .share-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--gc-color-text-primary, #333333);
      margin: 0 0 16px 0;
    }

    .share-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .share-button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      border: 2px solid var(--gc-color-border-default, #e0e0e0);
      border-radius: 4px;
      background: white;
      color: var(--gc-color-text-primary, #333333);
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
      transition: all 0.2s ease;
      min-height: 44px;
      text-decoration: none;
    }

    .share-button:hover {
      border-color: var(--gc-color-primary, #26374A);
      background: var(--gc-color-background-hover, #f0f0f0);
    }

    .share-button:focus {
      outline: 3px solid var(--gc-color-focus, #26374A);
      outline-offset: 2px;
    }

    .share-button:active {
      transform: translateY(1px);
    }

    .share-button svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .share-button.twitter:hover {
      border-color: #1DA1F2;
      color: #1DA1F2;
    }

    .share-button.facebook:hover {
      border-color: #1877F2;
      color: #1877F2;
    }

    .share-button.linkedin:hover {
      border-color: #0A66C2;
      color: #0A66C2;
    }

    .share-button.email:hover {
      border-color: #D44638;
      color: #D44638;
    }

    .share-button.copy:hover {
      border-color: #34A853;
      color: #34A853;
    }

    .copy-feedback {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--gc-color-success-background, #d4edda);
      color: var(--gc-color-success-text, #155724);
      border: 1px solid var(--gc-color-success-border, #c3e6cb);
      border-radius: 4px;
      padding: 12px 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      animation: slideUp 0.3s ease;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translate(-50%, 20px);
      }
      to {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }

    @media (max-width: 640px) {
      .share-buttons {
        flex-direction: column;
      }

      .share-button {
        width: 100%;
        justify-content: center;
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

  /** English title */
  @property({ type: String })
  title = 'Share this page';

  /** French title */
  @property({ type: String, attribute: 'title-fr' })
  titleFr = 'Partagez cette page';

  /** URL to share (defaults to current page) */
  @property({ type: String })
  url = '';

  /** Page title to share (defaults to document title) */
  @property({ type: String, attribute: 'page-title' })
  pageTitle = '';

  /** Description for email/social sharing */
  @property({ type: String })
  description = '';

  /** Platforms to show (comma-separated, e.g., "twitter,facebook,linkedin,email,copy") */
  @property({ type: String })
  platforms = 'twitter,facebook,linkedin,email,copy';

  /** Show copy feedback */
  @property({ type: Boolean, reflect: true })
  private showCopyFeedback = false;

  private get currentTitle(): string {
    return this.lang === 'fr' ? this.titleFr : this.title;
  }

  private get shareUrl(): string {
    return this.url || window.location.href;
  }

  private get shareTitle(): string {
    return this.pageTitle || document.title;
  }

  private get platformList(): SharePlatform[] {
    return this.platforms.split(',').map(p => p.trim() as SharePlatform);
  }

  private handleShare(platform: SharePlatform) {
    const url = encodeURIComponent(this.shareUrl);
    const title = encodeURIComponent(this.shareTitle);
    const description = encodeURIComponent(this.description);

    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
        break;

      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
        break;

      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
        break;

      case 'email':
        const subject = this.lang === 'fr' 
          ? `Je partage : ${this.shareTitle}`
          : `Sharing: ${this.shareTitle}`;
        const body = this.description
          ? `${this.description}\n\n${this.shareUrl}`
          : this.shareUrl;
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        break;

      case 'copy':
        this.copyToClipboard();
        break;
    }

    this.dispatchEvent(new CustomEvent('share', {
      detail: { platform, url: this.shareUrl, title: this.shareTitle },
      bubbles: true,
      composed: true
    }));
  }

  private async copyToClipboard() {
    try {
      await navigator.clipboard.writeText(this.shareUrl);
      this.showCopyFeedback = true;
      setTimeout(() => {
        this.showCopyFeedback = false;
      }, 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  private getPlatformLabel(platform: SharePlatform): string {
    const labels: Record<SharePlatform, { en: string; fr: string }> = {
      twitter: { en: 'Twitter', fr: 'Twitter' },
      facebook: { en: 'Facebook', fr: 'Facebook' },
      linkedin: { en: 'LinkedIn', fr: 'LinkedIn' },
      email: { en: 'Email', fr: 'Courriel' },
      copy: { en: 'Copy link', fr: 'Copier le lien' }
    };
    return this.lang === 'fr' ? labels[platform].fr : labels[platform].en;
  }

  private getPlatformIcon(platform: SharePlatform) {
    const icons: Record<SharePlatform, any> = {
      twitter: html`<svg fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>`,
      facebook: html`<svg fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
      linkedin: html`<svg fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
      email: html`<svg fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      copy: html`<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`
    };
    return icons[platform];
  }

  override render() {
    return html`
      <div class="share-widget">
        <h2 class="share-title">${this.currentTitle}</h2>
        <div class="share-buttons">
          ${this.platformList.map(platform => html`
            <button
              class="share-button ${platform}"
              @click=${() => this.handleShare(platform)}
              aria-label="${this.getPlatformLabel(platform)}">
              ${this.getPlatformIcon(platform)}
              <span>${this.getPlatformLabel(platform)}</span>
            </button>
          `)}
        </div>
      </div>

      ${this.showCopyFeedback ? html`
        <div class="copy-feedback" role="status" aria-live="polite">
          ${this.lang === 'fr' ? 'Lien copié dans le presse-papiers' : 'Link copied to clipboard'}
        </div>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-share-widget': EvaGCShareWidget;
  }
}

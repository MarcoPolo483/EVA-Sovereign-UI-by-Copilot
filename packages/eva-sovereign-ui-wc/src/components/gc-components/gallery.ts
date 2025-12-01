/**
 * GC Image Gallery Component
 * Image gallery with lightbox for Government of Canada
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface GalleryImage {
  src: string;
  alt: string;
  altFr?: string;
  caption?: string;
  captionFr?: string;
  thumbnail?: string;
}

@customElement('eva-gc-gallery')
export class EvaGCGallery extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: var(--eva-spacing-4, 16px) 0;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: var(--eva-spacing-4, 16px);
    }

    .gallery-item {
      position: relative;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      border-radius: 8px;
      cursor: pointer;
      border: 2px solid var(--eva-border-primary, #ddd);
      transition: all 0.2s;
    }

    .gallery-item:hover {
      border-color: var(--eva-brand-primary, #26374A);
      box-shadow: var(--eva-shadow-elevation-medium, 0 4px 8px rgba(0, 0, 0, 0.1));
    }

    .gallery-item:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
    }

    .gallery-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .gallery-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
      color: var(--eva-text-inverse, #fff);
      padding: var(--eva-spacing-3, 12px);
      font-size: 14px;
      opacity: 0;
      transition: opacity 0.2s;
    }

    .gallery-item:hover .gallery-caption {
      opacity: 1;
    }

    /* Lightbox */
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.95);
      z-index: 10000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: var(--eva-spacing-4, 16px);
    }

    .lightbox.open {
      display: flex;
    }

    .lightbox-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .lightbox-image {
      max-width: 100%;
      max-height: 80vh;
      object-fit: contain;
      border-radius: 4px;
    }

    .lightbox-caption {
      color: var(--eva-text-inverse, #fff);
      margin-top: var(--eva-spacing-4, 16px);
      text-align: center;
      font-size: 16px;
      max-width: 600px;
    }

    .lightbox-close {
      position: absolute;
      top: var(--eva-spacing-4, 16px);
      right: var(--eva-spacing-4, 16px);
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: var(--eva-text-inverse, #fff);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      transition: background 0.2s;
      z-index: 1;
    }

    .lightbox-close:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .lightbox-close:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
    }

    .lightbox-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: var(--eva-text-inverse, #fff);
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      transition: background 0.2s;
    }

    .lightbox-nav:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .lightbox-nav:focus {
      outline: 3px solid var(--eva-border-focus, #4169E1);
      outline-offset: 2px;
    }

    .lightbox-nav.prev {
      left: var(--eva-spacing-4, 16px);
    }

    .lightbox-nav.next {
      right: var(--eva-spacing-4, 16px);
    }

    .lightbox-nav:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .lightbox-counter {
      position: absolute;
      bottom: var(--eva-spacing-4, 16px);
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, 0.2);
      color: var(--eva-text-inverse, #fff);
      padding: var(--eva-spacing-2, 8px) var(--eva-spacing-4, 16px);
      border-radius: 20px;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: var(--eva-spacing-3, 12px);
      }

      .lightbox-nav {
        width: 40px;
        height: 40px;
        font-size: 20px;
      }

      .lightbox-close {
        width: 40px;
        height: 40px;
        font-size: 20px;
      }
    }
  `;

  @property({ type: Array })
  images: GalleryImage[] = [];

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @property({ type: Number })
  columns = 4;

  @state()
  private lightboxOpen = false;

  @state()
  private currentImageIndex = 0;

  private openLightbox(index: number) {
    this.currentImageIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  private closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  private nextImage() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  private prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  private handleKeydown = (e: KeyboardEvent) => {
    if (!this.lightboxOpen) return;

    switch (e.key) {
      case 'Escape':
        this.closeLightbox();
        break;
      case 'ArrowRight':
        this.nextImage();
        break;
      case 'ArrowLeft':
        this.prevImage();
        break;
    }
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this.handleKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.handleKeydown);
    document.body.style.overflow = '';
  }

  render() {
    const isEnglish = this.lang === 'en';
    const currentImage = this.images[this.currentImageIndex];

    return html`
      <div class="gallery-grid" style="grid-template-columns: repeat(auto-fill, minmax(${Math.floor(800 / this.columns)}px, 1fr))">
        ${this.images.map(
          (image, index) => html`
            <button
              class="gallery-item"
              @click=${() => this.openLightbox(index)}
              aria-label="${isEnglish ? `View image: ${image.alt}` : `Voir l'image: ${image.altFr || image.alt}`}"
            >
              <img
                class="gallery-image"
                src="${image.thumbnail || image.src}"
                alt="${isEnglish ? image.alt : (image.altFr || image.alt)}"
                loading="lazy"
              />
              ${image.caption || image.captionFr
                ? html`
                    <div class="gallery-caption">
                      ${isEnglish ? image.caption : (image.captionFr || image.caption)}
                    </div>
                  `
                : ''}
            </button>
          `
        )}
      </div>

      ${this.lightboxOpen && currentImage
        ? html`
            <div
              class="lightbox open"
              @click=${(e: MouseEvent) => {
                if (e.target === e.currentTarget) {
                  this.closeLightbox();
                }
              }}
              role="dialog"
              aria-modal="true"
              aria-label="${isEnglish ? 'Image viewer' : 'Visionneuse d\'images'}"
            >
              <button
                class="lightbox-close"
                @click=${this.closeLightbox}
                aria-label="${isEnglish ? 'Close' : 'Fermer'}"
              >
                ✕
              </button>

              <button
                class="lightbox-nav prev"
                @click=${this.prevImage}
                ?disabled=${this.currentImageIndex === 0}
                aria-label="${isEnglish ? 'Previous image' : 'Image précédente'}"
              >
                ‹
              </button>

              <div class="lightbox-content">
                <img
                  class="lightbox-image"
                  src="${currentImage.src}"
                  alt="${isEnglish ? currentImage.alt : (currentImage.altFr || currentImage.alt)}"
                />
                ${currentImage.caption || currentImage.captionFr
                  ? html`
                      <div class="lightbox-caption">
                        ${isEnglish ? currentImage.caption : (currentImage.captionFr || currentImage.caption)}
                      </div>
                    `
                  : ''}
              </div>

              <button
                class="lightbox-nav next"
                @click=${this.nextImage}
                ?disabled=${this.currentImageIndex === this.images.length - 1}
                aria-label="${isEnglish ? 'Next image' : 'Image suivante'}"
              >
                ›
              </button>

              <div class="lightbox-counter">
                ${this.currentImageIndex + 1} / ${this.images.length}
              </div>
            </div>
          `
        : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-gallery': EvaGCGallery;
  }
}

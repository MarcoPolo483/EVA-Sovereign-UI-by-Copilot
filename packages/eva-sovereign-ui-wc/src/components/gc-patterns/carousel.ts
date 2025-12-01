import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

/**
 * EVA GC Carousel Pattern
 * 
 * Accessible image/content carousel with autoplay, pagination,
 * keyboard navigation, and touch support.
 * 
 * @element eva-gc-carousel
 * 
 * @fires slide-change - Dispatched when the active slide changes
 * 
 * @slot - Carousel items (each item should be a container element)
 */
@customElement('eva-gc-carousel')
export class EvaGCCarousel extends LitElement {
  static override styles = css`
    :host {
      display: block;
      position: relative;
      font-family: 'Lato', 'Noto Sans', sans-serif;
    }

    .carousel-container {
      position: relative;
      overflow: hidden;
      border-radius: 4px;
    }

    .carousel-track {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }

    .carousel-track.no-transition {
      transition: none;
    }

    ::slotted(*) {
      flex: 0 0 100%;
      min-width: 0;
    }

    .carousel-controls {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      display: flex;
      justify-content: space-between;
      pointer-events: none;
      padding: 0 16px;
    }

    .carousel-button {
      pointer-events: all;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      border: 2px solid var(--gc-color-primary, #26374A);
      color: var(--gc-color-primary, #26374A);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      font-size: 20px;
      font-weight: 700;
    }

    .carousel-button:hover:not(:disabled) {
      background: var(--gc-color-primary, #26374A);
      color: white;
      transform: scale(1.1);
    }

    .carousel-button:focus-visible {
      outline: 3px solid var(--gc-color-focus, #0073e6);
      outline-offset: 2px;
    }

    .carousel-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .carousel-button svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }

    .carousel-pagination {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-top: 20px;
      padding: 0;
    }

    .pagination-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--gc-color-border-default, #e0e0e0);
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      padding: 0;
    }

    .pagination-dot:hover {
      background: var(--gc-color-primary-light, #e8f4ff);
      transform: scale(1.2);
    }

    .pagination-dot:focus-visible {
      outline: 2px solid var(--gc-color-focus, #0073e6);
      outline-offset: 2px;
    }

    .pagination-dot.active {
      background: var(--gc-color-primary, #26374A);
      width: 32px;
      border-radius: 6px;
    }

    .carousel-status {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    @media (max-width: 768px) {
      .carousel-button {
        width: 40px;
        height: 40px;
      }

      .carousel-button svg {
        width: 20px;
        height: 20px;
      }

      .carousel-controls {
        padding: 0 8px;
      }
    }

    @media print {
      .carousel-controls,
      .carousel-pagination {
        display: none;
      }

      .carousel-track {
        transform: none !important;
      }

      ::slotted(*) {
        page-break-inside: avoid;
      }
    }
  `;

  @property({ type: Number, attribute: 'active-index' })
  activeIndex = 0;

  @property({ type: Boolean })
  autoplay = false;

  @property({ type: Number, attribute: 'autoplay-interval' })
  autoplayInterval = 5000;

  @property({ type: Boolean })
  loop = true;

  @property({ type: Boolean, attribute: 'show-controls' })
  showControls = true;

  @property({ type: Boolean, attribute: 'show-pagination' })
  showPagination = true;

  @property({ type: String })
  lang: 'en' | 'fr' = 'en';

  @state()
  private slideCount = 0;

  @state()
  private autoplayTimerId?: number;

  @state()
  private touchStartX = 0;

  @state()
  private touchEndX = 0;

  @query('.carousel-track')
  private track!: HTMLElement;

  @query('slot')
  private rootSlotEl!: HTMLSlotElement;

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this.handleKeydown);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.stopAutoplay();
    this.removeEventListener('keydown', this.handleKeydown);
  }

  override firstUpdated() {
    this.updateSlideCount();
    this.rootSlotEl.addEventListener('slotchange', () => this.updateSlideCount());
    
    if (this.autoplay) {
      this.startAutoplay();
    }

    // Touch support
    this.addEventListener('touchstart', this.handleTouchStart);
    this.addEventListener('touchmove', this.handleTouchMove);
    this.addEventListener('touchend', this.handleTouchEnd);
  }

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('activeIndex')) {
      this.updateTransform();
      this.announceSlideChange();
      this.dispatchEvent(new CustomEvent('slide-change', {
        detail: { index: this.activeIndex },
        bubbles: true,
        composed: true
      }));
    }

    if (changedProperties.has('autoplay')) {
      if (this.autoplay) {
        this.startAutoplay();
      } else {
        this.stopAutoplay();
      }
    }
  }

  private updateSlideCount() {
    const items = this.rootSlotEl.assignedElements();
    this.slideCount = items.length;
  }

  private updateTransform() {
    if (this.track) {
      const offset = -this.activeIndex * 100;
      this.track.style.transform = `translateX(${offset}%)`;
    }
  }

  private goToSlide(index: number) {
    if (index < 0 || index >= this.slideCount) return;
    this.activeIndex = index;
    this.resetAutoplay();
  }

  private nextSlide() {
    if (this.activeIndex < this.slideCount - 1) {
      this.activeIndex++;
    } else if (this.loop) {
      this.activeIndex = 0;
    }
    this.resetAutoplay();
  }

  private prevSlide() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else if (this.loop) {
      this.activeIndex = this.slideCount - 1;
    }
    this.resetAutoplay();
  }

  private startAutoplay() {
    this.stopAutoplay();
    this.autoplayTimerId = window.setInterval(() => {
      this.nextSlide();
    }, this.autoplayInterval);
  }

  private stopAutoplay() {
    if (this.autoplayTimerId) {
      clearInterval(this.autoplayTimerId);
      this.autoplayTimerId = undefined;
    }
  }

  private resetAutoplay() {
    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  private handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      this.prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      this.nextSlide();
    } else if (e.key === 'Home') {
      e.preventDefault();
      this.goToSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      this.goToSlide(this.slideCount - 1);
    }
  };

  private handleTouchStart = (e: TouchEvent) => {
    this.touchStartX = e.touches[0].clientX;
  };

  private handleTouchMove = (e: TouchEvent) => {
    this.touchEndX = e.touches[0].clientX;
  };

  private handleTouchEnd = () => {
    const diff = this.touchStartX - this.touchEndX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }

    this.touchStartX = 0;
    this.touchEndX = 0;
  };

  private announceSlideChange() {
    const status = this.shadowRoot?.querySelector('.carousel-status');
    if (status) {
      const message = this.lang === 'fr' 
        ? `Diapositive ${this.activeIndex + 1} sur ${this.slideCount}`
        : `Slide ${this.activeIndex + 1} of ${this.slideCount}`;
      status.textContent = message;
    }
  }

  private get canGoPrev(): boolean {
    return this.activeIndex > 0 || this.loop;
  }

  private get canGoNext(): boolean {
    return this.activeIndex < this.slideCount - 1 || this.loop;
  }

  override render() {
    const prevLabel = this.lang === 'fr' ? 'Diapositive précédente' : 'Previous slide';
    const nextLabel = this.lang === 'fr' ? 'Diapositive suivante' : 'Next slide';
    const dotLabel = this.lang === 'fr' 
      ? (index: number) => `Aller à la diapositive ${index + 1}`
      : (index: number) => `Go to slide ${index + 1}`;

    return html`
      <div 
        class="carousel-container"
        role="region"
        aria-roledescription="${this.lang === 'fr' ? 'carrousel' : 'carousel'}"
        aria-label="${this.lang === 'fr' ? 'Carrousel de contenu' : 'Content carousel'}"
      >
        <div class="carousel-track">
          <slot></slot>
        </div>

        ${this.showControls ? html`
          <div class="carousel-controls">
            <button
              class="carousel-button"
              aria-label="${prevLabel}"
              @click="${this.prevSlide}"
              ?disabled="${!this.canGoPrev}"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button
              class="carousel-button"
              aria-label="${nextLabel}"
              @click="${this.nextSlide}"
              ?disabled="${!this.canGoNext}"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        ` : ''}

        ${this.showPagination && this.slideCount > 1 ? html`
          <div class="carousel-pagination" role="tablist">
            ${Array.from({ length: this.slideCount }, (_, i) => html`
              <button
                class="pagination-dot ${i === this.activeIndex ? 'active' : ''}"
                role="tab"
                aria-label="${dotLabel(i)}"
                aria-selected="${i === this.activeIndex}"
                @click="${() => this.goToSlide(i)}"
              ></button>
            `)}
          </div>
        ` : ''}

        <div class="carousel-status" role="status" aria-live="polite" aria-atomic="true"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-carousel': EvaGCCarousel;
  }
}

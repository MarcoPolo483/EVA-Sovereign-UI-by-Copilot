/**
 * EVA Carousel Component
 * Image/content carousel with navigation
 * Features: Previous/next buttons, indicator dots, auto-advance
 */

import { EVABaseComponent } from '../../utils/base-component';
import { 
  modernColors,
  gcSpacing,
  shadows,
  transitions,
} from '../../tokens';

export class EVACarousel extends EVABaseComponent {
  private currentIndex = 0;
  private totalItems = 0;
  private autoAdvanceInterval?: number;

  static get observedAttributes() {
    return ['auto-advance'];
  }

  connectedCallback() {
    super.connectedCallback();
    
    const autoAdvance = parseInt(this.getAttr('auto-advance', '0'), 10);
    if (autoAdvance > 0) {
      this.autoAdvanceInterval = window.setInterval(() => {
        this.next();
      }, autoAdvance);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.autoAdvanceInterval) {
      clearInterval(this.autoAdvanceInterval);
    }
  }

  private updateItems() {
    const items = this.querySelectorAll('eva-carousel-item');
    this.totalItems = items.length;

    items.forEach((item, index) => {
      if (index === this.currentIndex) {
        item.setAttribute('active', '');
      } else {
        item.removeAttribute('active');
      }
    });

    this.render();
  }

  private previous() {
    this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
    this.updateItems();
    this.emit('change', { index: this.currentIndex });
  }

  private next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalItems;
    this.updateItems();
    this.emit('change', { index: this.currentIndex });
  }

  private goTo(index: number) {
    this.currentIndex = index;
    this.updateItems();
    this.emit('change', { index: this.currentIndex });
  }

  protected render(): void {
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
        position: relative;
      }

      .carousel {
        position: relative;
        overflow: hidden;
        border-radius: ${gcSpacing[3]};
      }

      .items {
        display: flex;
        transition: transform 300ms ease-out;
      }

      .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: color-mix(in srgb, ${modernColors.background} 80%, transparent);
        border: 1px solid ${modernColors.border};
        border-radius: 50%;
        cursor: pointer;
        transition: ${transitions.colors};
        box-shadow: ${shadows.md};
        color: ${modernColors.foreground};
        font-size: 1.25rem;
        line-height: 1;
      }

      .nav-button:hover {
        background: ${modernColors.background};
      }

      .nav-button.prev {
        left: ${gcSpacing[4]};
      }

      .nav-button.next {
        right: ${gcSpacing[4]};
      }

      .indicators {
        position: absolute;
        bottom: ${gcSpacing[4]};
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: ${gcSpacing[2]};
        z-index: 10;
      }

      .indicator {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: color-mix(in srgb, ${modernColors.background} 50%, transparent);
        border: 1px solid ${modernColors.border};
        cursor: pointer;
        transition: ${transitions.colors};
      }

      .indicator[data-active="true"] {
        background: ${modernColors.primary};
        border-color: ${modernColors.primary};
        width: 1.5rem;
        border-radius: 0.25rem;
      }
    `));

    const carousel = document.createElement('div');
    carousel.className = 'carousel';

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'items';
    const slot = document.createElement('slot');
    itemsContainer.appendChild(slot);

    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-button prev';
    prevBtn.textContent = '‹';
    prevBtn.addEventListener('click', () => this.previous());

    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-button next';
    nextBtn.textContent = '›';
    nextBtn.addEventListener('click', () => this.next());

    const indicators = document.createElement('div');
    indicators.className = 'indicators';

    for (let i = 0; i < this.totalItems; i++) {
      const indicator = document.createElement('button');
      indicator.className = 'indicator';
      indicator.setAttribute('data-active', (i === this.currentIndex).toString());
      indicator.addEventListener('click', () => this.goTo(i));
      indicators.appendChild(indicator);
    }

    carousel.appendChild(itemsContainer);
    carousel.appendChild(prevBtn);
    carousel.appendChild(nextBtn);
    carousel.appendChild(indicators);

    this.shadow.appendChild(carousel);

    // Update after render
    setTimeout(() => this.updateItems(), 0);
  }
}

export class EVACarouselItem extends EVABaseComponent {
  private isActive = false;

  static get observedAttributes() {
    return ['active'];
  }

  attributeChangedCallback() {
    this.isActive = this.getBoolAttr('active');
    this.render();
  }

  protected render(): void {
    this.shadow.innerHTML = '';
    
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: ${this.isActive ? 'block' : 'none'};
        flex: 0 0 100%;
        width: 100%;
      }

      .item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item ::slotted(*) {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `));

    const item = document.createElement('div');
    item.className = 'item';
    
    const slot = document.createElement('slot');
    item.appendChild(slot);

    this.shadow.appendChild(item);
  }
}

customElements.define('eva-carousel', EVACarousel);
customElements.define('eva-carousel-item', EVACarouselItem);

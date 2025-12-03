/**
 * Skeleton Loader Component
 * 
 * Loading placeholder with shimmer animation for content loading states
 * 
 * Features:
 * - Multiple variants (text, circle, rectangle)
 * - Shimmer animation effect
 * - Reduced motion support
 * - Customizable dimensions
 * - Multiple lines support
 * - Accessible (aria-busy, aria-label)
 */

import { EVABaseComponent } from '../../utils/base-component';

export class EVASkeleton extends EVABaseComponent {
  static get observedAttributes() {
    return ['variant', 'width', 'height', 'lines', 'circle'];
  }
  
  connectedCallback(): void {
    super.connectedCallback();
    this.render();
  }
  
  protected render(): void {
    const variant = this.getAttribute('variant') || 'text';
    const width = this.getAttribute('width') || '100%';
    const height = this.getAttribute('height') || '1em';
    const lines = parseInt(this.getAttribute('lines') || '1');
    const isCircle = this.hasAttribute('circle');
    
    const style = this.createStyles(`
      :host {
        display: block;
      }
      
      .skeleton {
        background: linear-gradient(
          90deg,
          var(--eva-background-secondary, #f0f0f0) 0%,
          var(--eva-background-tertiary, #e0e0e0) 50%,
          var(--eva-background-secondary, #f0f0f0) 100%
        );
        background-size: 200% 100%;
        animation: shimmer 1500ms ease-in-out infinite;
        border-radius: ${isCircle ? '50%' : '4px'};
      }
      
      .skeleton-text {
        height: 1em;
        border-radius: 4px;
        margin-bottom: 0.5em;
      }
      
      .skeleton-text:last-child {
        margin-bottom: 0;
        width: 80%; /* Last line shorter */
      }
      
      .skeleton-rectangle {
        border-radius: 8px;
      }
      
      .skeleton-circle {
        border-radius: 50%;
        width: ${height};
        height: ${height};
      }
      
      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
      
      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .skeleton {
          animation: none;
          background: var(--eva-background-tertiary, #e0e0e0);
        }
      }
    `);
    
    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    
    const container = document.createElement('div');
    container.setAttribute('aria-busy', 'true');
    container.setAttribute('aria-label', 'Loading content');
    
    if (isCircle || variant === 'circle') {
      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton skeleton-circle';
      skeleton.style.width = width;
      skeleton.style.height = height;
      container.appendChild(skeleton);
    } else if (variant === 'text') {
      for (let i = 0; i < lines; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton skeleton-text';
        skeleton.style.width = i === lines - 1 ? '80%' : width;
        skeleton.style.height = height;
        container.appendChild(skeleton);
      }
    } else {
      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton skeleton-rectangle';
      skeleton.style.width = width;
      skeleton.style.height = height;
      container.appendChild(skeleton);
    }
    
    this.shadow.appendChild(container);
  }
}

customElements.define('eva-skeleton', EVASkeleton);

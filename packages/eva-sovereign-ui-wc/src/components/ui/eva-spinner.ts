/**
 * Loading Spinner Component
 * 
 * Accessible loading indicator with multiple variants:
 * - Circular spinner (default)
 * - Dots animation
 * - Bars animation
 * - Pulse animation
 * 
 * Features:
 * - ARIA live region announcements
 * - Reduced motion support
 * - Multiple sizes (sm, md, lg)
 * - Customizable colors
 * - Screen reader friendly
 */

import { BaseElement } from '../../base-element';
import { transitions } from '../../tokens/animations';

export class EvaSpinner extends BaseElement {
  static get observedAttributes() {
    return ['variant', 'size', 'label'];
  }
  
  connectedCallback(): void {
    super.connectedCallback();
    this.render();
    
    // Announce to screen readers
    const label = this.getAttribute('label') || 'Loading';
    this.announceLoading(label);
  }
  
  private announceLoading(label: string): void {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = label;
    this.shadow.appendChild(announcement);
  }
  
  protected render(): void {
    const variant = this.getAttribute('variant') || 'circular';
    const size = this.getAttribute('size') || 'md';
    const label = this.getAttribute('label') || 'Loading';
    
    const style = this.createStyles(`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      
      .spinner-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      
      /* Circular spinner */
      .spinner-circular {
        border: 3px solid var(--eva-border-secondary, #e0e0e0);
        border-top-color: var(--eva-interactive-primary, #26374A);
        border-radius: 50%;
        animation: spin 1000ms linear infinite;
      }
      
      .spinner-circular.sm {
        width: 16px;
        height: 16px;
        border-width: 2px;
      }
      
      .spinner-circular.md {
        width: 32px;
        height: 32px;
        border-width: 3px;
      }
      
      .spinner-circular.lg {
        width: 48px;
        height: 48px;
        border-width: 4px;
      }
      
      /* Dots spinner */
      .spinner-dots {
        display: flex;
        gap: 6px;
        align-items: center;
      }
      
      .spinner-dot {
        background: var(--eva-interactive-primary, #26374A);
        border-radius: 50%;
        animation: pulse 1400ms ease-in-out infinite;
      }
      
      .spinner-dot:nth-child(1) {
        animation-delay: 0ms;
      }
      
      .spinner-dot:nth-child(2) {
        animation-delay: 200ms;
      }
      
      .spinner-dot:nth-child(3) {
        animation-delay: 400ms;
      }
      
      .spinner-dots.sm .spinner-dot {
        width: 4px;
        height: 4px;
      }
      
      .spinner-dots.md .spinner-dot {
        width: 8px;
        height: 8px;
      }
      
      .spinner-dots.lg .spinner-dot {
        width: 12px;
        height: 12px;
      }
      
      /* Bars spinner */
      .spinner-bars {
        display: flex;
        gap: 4px;
        align-items: flex-end;
      }
      
      .spinner-bar {
        background: var(--eva-interactive-primary, #26374A);
        animation: bars 1200ms ease-in-out infinite;
      }
      
      .spinner-bar:nth-child(1) {
        animation-delay: 0ms;
      }
      
      .spinner-bar:nth-child(2) {
        animation-delay: 100ms;
      }
      
      .spinner-bar:nth-child(3) {
        animation-delay: 200ms;
      }
      
      .spinner-bar:nth-child(4) {
        animation-delay: 300ms;
      }
      
      .spinner-bars.sm .spinner-bar {
        width: 2px;
        height: 12px;
      }
      
      .spinner-bars.md .spinner-bar {
        width: 4px;
        height: 24px;
      }
      
      .spinner-bars.lg .spinner-bar {
        width: 6px;
        height: 36px;
      }
      
      /* Pulse spinner */
      .spinner-pulse {
        background: var(--eva-interactive-primary, #26374A);
        border-radius: 50%;
        animation: pulse 2000ms cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      
      .spinner-pulse.sm {
        width: 16px;
        height: 16px;
      }
      
      .spinner-pulse.md {
        width: 32px;
        height: 32px;
      }
      
      .spinner-pulse.lg {
        width: 48px;
        height: 48px;
      }
      
      /* Animations */
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(0.8); }
      }
      
      @keyframes bars {
        0%, 100% { transform: scaleY(0.4); }
        50% { transform: scaleY(1); }
      }
      
      /* Screen reader only */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
      
      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .spinner-circular,
        .spinner-dot,
        .spinner-bar,
        .spinner-pulse {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
        }
        
        .spinner-circular {
          border-top-color: var(--eva-interactive-primary, #26374A);
          border-right-color: var(--eva-interactive-primary, #26374A);
        }
      }
    `);
    
    this.shadow.innerHTML = '';
    this.shadow.appendChild(style);
    
    const container = document.createElement('div');
    container.className = 'spinner-container';
    container.setAttribute('role', 'progressbar');
    container.setAttribute('aria-label', label);
    container.setAttribute('aria-busy', 'true');
    
    if (variant === 'dots') {
      const dots = document.createElement('div');
      dots.className = `spinner-dots ${size}`;
      for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'spinner-dot';
        dots.appendChild(dot);
      }
      container.appendChild(dots);
    } else if (variant === 'bars') {
      const bars = document.createElement('div');
      bars.className = `spinner-bars ${size}`;
      for (let i = 0; i < 4; i++) {
        const bar = document.createElement('div');
        bar.className = 'spinner-bar';
        bars.appendChild(bar);
      }
      container.appendChild(bars);
    } else if (variant === 'pulse') {
      const pulse = document.createElement('div');
      pulse.className = `spinner-pulse ${size}`;
      container.appendChild(pulse);
    } else {
      // Default: circular
      const circular = document.createElement('div');
      circular.className = `spinner-circular ${size}`;
      container.appendChild(circular);
    }
    
    this.shadow.appendChild(container);
  }
}

customElements.define('eva-spinner', EvaSpinner);

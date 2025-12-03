/**
 * Error Boundary Component
 * 
 * Catches JavaScript errors anywhere in the component tree and displays
 * a fallback UI with bilingual error messages.
 * 
 * Features:
 * - Graceful error handling
 * - Bilingual error messages
 * - Error reporting capability
 * - Recovery mechanism
 * - ARIA live regions for screen readers
 */

import { EVABaseComponent } from './base-component';

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: string | null;
}

export class EVAErrorBoundary extends EVABaseComponent {
  private state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: null
  };
  
  private locale: 'en' | 'fr' = 'en';
  private onError?: (error: Error, errorInfo: string) => void;
  private onReset?: () => void;
  
  static get observedAttributes() {
    return ['locale', 'title', 'message'];
  }
  
  connectedCallback(): void {
    super.connectedCallback();
    
    // Get locale from attribute
    this.locale = (this.getAttribute('locale') as 'en' | 'fr') || 'en';
    
    // Set up error event listener
    window.addEventListener('error', this.handleError);
    window.addEventListener('unhandledrejection', this.handlePromiseRejection);
    
    this.render();
  }
  
  disconnectedCallback(): void {
    window.removeEventListener('error', this.handleError);
    window.removeEventListener('unhandledrejection', this.handlePromiseRejection);
  }
  
  private handleError = (event: ErrorEvent): void => {
    this.catchError(event.error, event.message);
  };
  
  private handlePromiseRejection = (event: PromiseRejectionEvent): void => {
    this.catchError(new Error(event.reason), 'Unhandled promise rejection');
  };
  
  public catchError(error: Error, errorInfo: string): void {
    this.state = {
      hasError: true,
      error,
      errorInfo
    };
    
    // Log error for debugging
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Call error callback if provided
    if (this.onError) {
      this.onError(error, errorInfo);
    }
    
    this.render();
  }
  
  public reset(): void {
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
    
    if (this.onReset) {
      this.onReset();
    }
    
    this.render();
  }
  
  protected render(): void {
    if (!this.state.hasError) {
      // Normal render - show slot content
      this.shadow.innerHTML = '';
      this.shadow.appendChild(this.createStyles(`
        :host {
          display: block;
        }
      `));
      
      const slot = document.createElement('slot');
      this.shadow.appendChild(slot);
      return;
    }
    
    // Error state - show fallback UI
    const title = this.getAttribute('title') || this.getDefaultTitle();
    const message = this.getAttribute('message') || this.getDefaultMessage();
    
    this.shadow.innerHTML = '';
    this.shadow.appendChild(this.createStyles(`
      :host {
        display: block;
      }
      
      .error-container {
        padding: 32px;
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
      }
      
      .error-icon {
        width: 64px;
        height: 64px;
        margin: 0 auto 24px;
        background: var(--eva-feedback-error, #d32f2f);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 32px;
      }
      
      .error-title {
        font-size: 24px;
        font-weight: 600;
        color: var(--eva-text-primary, #1a1a1a);
        margin: 0 0 16px 0;
      }
      
      .error-message {
        font-size: 16px;
        color: var(--eva-text-secondary, #666666);
        margin: 0 0 24px 0;
        line-height: 1.5;
      }
      
      .error-actions {
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
      }
      
      .error-button {
        padding: 12px 24px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: all 200ms ease-out;
      }
      
      .error-button-primary {
        background: var(--eva-interactive-primary, #26374A);
        color: white;
      }
      
      .error-button-primary:hover {
        background: var(--eva-interactive-primary-hover, #1a2633);
        transform: translateY(-1px);
      }
      
      .error-button-secondary {
        background: transparent;
        color: var(--eva-interactive-primary, #26374A);
        border: 2px solid var(--eva-interactive-primary, #26374A);
      }
      
      .error-button-secondary:hover {
        background: var(--eva-background-secondary, #f5f5f5);
      }
      
      .error-details {
        margin-top: 32px;
        padding: 16px;
        background: var(--eva-background-secondary, #f5f5f5);
        border-radius: 8px;
        text-align: left;
        max-height: 200px;
        overflow-y: auto;
      }
      
      .error-details-title {
        font-weight: 600;
        margin: 0 0 8px 0;
        color: var(--eva-text-primary, #1a1a1a);
      }
      
      .error-details-content {
        font-family: monospace;
        font-size: 12px;
        color: var(--eva-text-secondary, #666666);
        white-space: pre-wrap;
        word-break: break-word;
      }
      
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
    `));
    
    const container = document.createElement('div');
    container.className = 'error-container';
    container.setAttribute('role', 'alert');
    container.setAttribute('aria-live', 'assertive');
    
    // Error icon
    const icon = document.createElement('div');
    icon.className = 'error-icon';
    icon.innerHTML = '⚠';
    container.appendChild(icon);
    
    // Title
    const titleEl = document.createElement('h2');
    titleEl.className = 'error-title';
    titleEl.textContent = title;
    container.appendChild(titleEl);
    
    // Message
    const messageEl = document.createElement('p');
    messageEl.className = 'error-message';
    messageEl.textContent = message;
    container.appendChild(messageEl);
    
    // Actions
    const actions = document.createElement('div');
    actions.className = 'error-actions';
    
    // Retry button
    const retryBtn = document.createElement('button');
    retryBtn.className = 'error-button error-button-primary';
    retryBtn.textContent = this.locale === 'fr' ? 'Réessayer' : 'Try Again';
    retryBtn.addEventListener('click', () => this.reset());
    actions.appendChild(retryBtn);
    
    // Reload button
    const reloadBtn = document.createElement('button');
    reloadBtn.className = 'error-button error-button-secondary';
    reloadBtn.textContent = this.locale === 'fr' ? 'Recharger la page' : 'Reload Page';
    reloadBtn.addEventListener('click', () => window.location.reload());
    actions.appendChild(reloadBtn);
    
    container.appendChild(actions);
    
    // Error details (for development)
    if (this.state.error && process.env.NODE_ENV !== 'production') {
      const details = document.createElement('details');
      details.className = 'error-details';
      
      const summary = document.createElement('summary');
      summary.className = 'error-details-title';
      summary.textContent = this.locale === 'fr' ? 'Détails de l\'erreur' : 'Error Details';
      details.appendChild(summary);
      
      const content = document.createElement('pre');
      content.className = 'error-details-content';
      content.textContent = `${this.state.error.name}: ${this.state.error.message}\n\n${this.state.error.stack || ''}`;
      details.appendChild(content);
      
      container.appendChild(details);
    }
    
    // Screen reader announcement
    const announcement = document.createElement('div');
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.textContent = title;
    container.appendChild(announcement);
    
    this.shadow.appendChild(container);
  }
  
  private getDefaultTitle(): string {
    return this.locale === 'fr' 
      ? 'Une erreur s\'est produite' 
      : 'Something went wrong';
  }
  
  private getDefaultMessage(): string {
    return this.locale === 'fr'
      ? 'Nous nous excusons pour le désagrément. Veuillez réessayer ou recharger la page.'
      : 'We apologize for the inconvenience. Please try again or reload the page.';
  }
}

customElements.define('eva-error-boundary', EVAErrorBoundary);

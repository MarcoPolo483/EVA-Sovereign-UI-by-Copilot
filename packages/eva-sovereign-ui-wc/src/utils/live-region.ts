/**
 * ARIA Live Region Component
 * 
 * Accessible component for announcing dynamic content changes to screen readers.
 * Used for form validation errors, loading states, and status updates.
 * 
 * Features:
 * - Polite and assertive announcements
 * - Automatic clearing
 * - Queue management for multiple announcements
 * - Bilingual support
 */

import { EVABaseComponent } from './base-component';

export type LiveRegionPoliteness = 'polite' | 'assertive' | 'off';

export interface AnnouncementOptions {
  politeness?: LiveRegionPoliteness;
  clearAfter?: number; // milliseconds, 0 = don't clear
  priority?: number; // Higher priority interrupts lower priority
}

export class EVALiveRegion extends EVABaseComponent {
  private currentPriority: number = 0;
  private clearTimeout?: number;
  private announcementQueue: Array<{ message: string; options: AnnouncementOptions }> = [];
  
  static get observedAttributes() {
    return ['politeness', 'atomic'];
  }
  
  connectedCallback(): void {
    super.connectedCallback();
    this.render();
  }
  
  disconnectedCallback(): void {
    if (this.clearTimeout) {
      window.clearTimeout(this.clearTimeout);
    }
  }
  
  /**
   * Announce a message to screen readers
   */
  public announce(message: string, options: AnnouncementOptions = {}): void {
    const {
      politeness = 'polite',
      clearAfter = 5000,
      priority = 1
    } = options;
    
    // If message has lower priority than current, queue it
    if (priority < this.currentPriority) {
      this.announcementQueue.push({ message, options });
      return;
    }
    
    // Clear existing timeout
    if (this.clearTimeout) {
      window.clearTimeout(this.clearTimeout);
    }
    
    // Update politeness
    this.setAttribute('politeness', politeness);
    this.currentPriority = priority;
    
    // Set message
    const container = this.shadow.querySelector('.live-region-content');
    if (container) {
      container.textContent = message;
    }
    
    // Auto-clear after delay
    if (clearAfter > 0) {
      this.clearTimeout = window.setTimeout(() => {
        this.clear();
        this.processQueue();
      }, clearAfter);
    }
  }
  
  /**
   * Clear the live region
   */
  public clear(): void {
    const container = this.shadow.querySelector('.live-region-content');
    if (container) {
      container.textContent = '';
    }
    this.currentPriority = 0;
  }
  
  /**
   * Process queued announcements
   */
  private processQueue(): void {
    if (this.announcementQueue.length === 0) return;
    
    // Sort by priority (highest first)
    this.announcementQueue.sort((a, b) => 
      (b.options.priority || 1) - (a.options.priority || 1)
    );
    
    const next = this.announcementQueue.shift();
    if (next) {
      this.announce(next.message, next.options);
    }
  }
  
  /**
   * Announce form validation error
   */
  public announceError(fieldName: string, errorMessage: string, locale: 'en' | 'fr' = 'en'): void {
    const prefix = locale === 'fr' ? 'Erreur' : 'Error';
    this.announce(`${prefix}: ${fieldName} - ${errorMessage}`, {
      politeness: 'assertive',
      priority: 3
    });
  }
  
  /**
   * Announce success message
   */
  public announceSuccess(message: string): void {
    this.announce(message, {
      politeness: 'polite',
      priority: 2
    });
  }
  
  /**
   * Announce loading state
   */
  public announceLoading(message: string): void {
    this.announce(message, {
      politeness: 'polite',
      priority: 1,
      clearAfter: 0 // Don't auto-clear loading messages
    });
  }
  
  protected render(): void {
    const politeness = (this.getAttribute('politeness') as LiveRegionPoliteness) || 'polite';
    const atomic = this.hasAttribute('atomic') ? 'true' : 'false';
    
    this.shadow.innerHTML = '';
    this.shadow.appendChild(this.createStyles(`
      :host {
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
      
      .live-region-content {
        /* Visually hidden but accessible to screen readers */
      }
    `));
    
    const container = document.createElement('div');
    container.className = 'live-region-content';
    container.setAttribute('role', 'status');
    container.setAttribute('aria-live', politeness);
    container.setAttribute('aria-atomic', atomic);
    
    this.shadow.appendChild(container);
  }
}

customElements.define('eva-live-region', EVALiveRegion);

/**
 * Global live region manager for convenience
 */
class LiveRegionManager {
  private static instance: LiveRegionManager;
  private liveRegion: EVALiveRegion | null = null;
  
  private constructor() {
    this.ensureLiveRegion();
  }
  
  public static getInstance(): LiveRegionManager {
    if (!LiveRegionManager.instance) {
      LiveRegionManager.instance = new LiveRegionManager();
    }
    return LiveRegionManager.instance;
  }
  
  private ensureLiveRegion(): void {
    if (!this.liveRegion || !document.body.contains(this.liveRegion)) {
      this.liveRegion = document.createElement('eva-live-region') as EVALiveRegion;
      document.body.appendChild(this.liveRegion);
    }
  }
  
  public announce(message: string, options?: AnnouncementOptions): void {
    this.ensureLiveRegion();
    this.liveRegion?.announce(message, options);
  }
  
  public announceError(fieldName: string, errorMessage: string, locale?: 'en' | 'fr'): void {
    this.ensureLiveRegion();
    this.liveRegion?.announceError(fieldName, errorMessage, locale);
  }
  
  public announceSuccess(message: string): void {
    this.ensureLiveRegion();
    this.liveRegion?.announceSuccess(message);
  }
  
  public announceLoading(message: string): void {
    this.ensureLiveRegion();
    this.liveRegion?.announceLoading(message);
  }
  
  public clear(): void {
    this.liveRegion?.clear();
  }
}

// Export singleton instance
export const liveRegion = LiveRegionManager.getInstance();

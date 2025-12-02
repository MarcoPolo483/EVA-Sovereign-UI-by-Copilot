// Export Svelte actions for two-way binding
export { bind, bindChecked, forwardEvents } from './actions';

// Export types
export type * from './types';

// Version
export const version = '1.1.0';

// Type declarations for web components
declare global {
  namespace svelteHTML {
    interface IntrinsicElements {
      // GC Components
      'eva-gc-button': any;
      'eva-gc-header': any;
      'eva-gc-footer': any;
      'eva-language-switcher': any;
      
      // Chat Components
      'eva-chat-panel': any;
      'eva-chat-message': any;
      
      // Card Components
      'eva-card': any;
      'eva-card-header': any;
      'eva-card-title': any;
      'eva-card-description': any;
      'eva-card-content': any;
      'eva-card-footer': any;
      
      // Dialog Components
      'eva-dialog': any;
      'eva-dialog-header': any;
      'eva-dialog-title': any;
      'eva-dialog-description': any;
      'eva-dialog-footer': any;
      'eva-alert-dialog': any;
      'eva-drawer': any;
      
      // Form Components
      'eva-input': any;
      'eva-textarea': any;
      'eva-checkbox': any;
      'eva-switch': any;
      'eva-select': any;
      'eva-select-item': any;
      'eva-radio-group': any;
      'eva-radio-group-item': any;
      'eva-slider': any;
      'eva-label': any;
      'eva-input-otp': any;
      
      // Tabs
      'eva-tabs': any;
      'eva-tabs-list': any;
      'eva-tabs-trigger': any;
      'eva-tabs-content': any;
      
      // Sheet
      'eva-sheet': any;
      'eva-sheet-trigger': any;
      'eva-sheet-content': any;
      'eva-sheet-header': any;
      'eva-sheet-footer': any;
      'eva-sheet-title': any;
      'eva-sheet-description': any;
      
      // UI Components
      'eva-button': any;
      'eva-badge': any;
      'eva-alert': any;
      'eva-tooltip': any;
      'eva-popover': any;
      'eva-separator': any;
      'eva-progress': any;
      'eva-skeleton': any;
      'eva-aspect-ratio': any;
      
      // Accordion
      'eva-accordion': any;
      'eva-accordion-item': any;
      
      // Collapsible
      'eva-collapsible': any;
      'eva-collapsible-trigger': any;
      'eva-collapsible-content': any;
      
      // Avatar
      'eva-avatar': any;
      'eva-avatar-image': any;
      'eva-avatar-fallback': any;
      
      // Menu Components
      'eva-dropdown-menu': any;
      'eva-dropdown-menu-item': any;
      'eva-dropdown-menu-separator': any;
      'eva-dropdown-menu-label': any;
      'eva-context-menu': any;
      'eva-context-menu-item': any;
      'eva-menubar': any;
      'eva-menubar-menu': any;
      'eva-menubar-item': any;
      
      // Breadcrumb
      'eva-breadcrumb': any;
      'eva-breadcrumb-list': any;
      'eva-breadcrumb-item': any;
      'eva-breadcrumb-link': any;
      'eva-breadcrumb-page': any;
      'eva-breadcrumb-separator': any;
      
      // Toggle
      'eva-toggle': any;
      'eva-toggle-group': any;
      'eva-toggle-group-item': any;
      
      // Table
      'eva-table': any;
      'eva-table-header': any;
      'eva-table-body': any;
      'eva-table-row': any;
      'eva-table-head': any;
      'eva-table-cell': any;
      
      // Hover Card
      'eva-hover-card': any;
      'eva-hover-card-trigger': any;
      'eva-hover-card-content': any;
      
      // Advanced Components
      'eva-calendar': any;
      'eva-carousel': any;
      'eva-carousel-item': any;
      'eva-pagination': any;
      'eva-scroll-area': any;
      
      // Layout Components
      'eva-page-shell': any;
      'eva-container': any;
      'eva-hero-banner': any;
      'eva-skip-link': any;
      
      // ESDC
      'eva-program-card': any;
    }
  }
}

export {};

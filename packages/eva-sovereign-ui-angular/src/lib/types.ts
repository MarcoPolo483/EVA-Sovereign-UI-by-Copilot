/**
 * TypeScript definitions for EVA Sovereign UI Angular components
 */

// Component prop interfaces
export interface EVAGCButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'ghost' | 'link';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface EVAInputProps {
  value?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
}

export interface EVADialogProps {
  open?: boolean;
  modal?: boolean;
}

export interface EVATabsProps {
  value?: string;
  orientation?: 'horizontal' | 'vertical';
}

export interface EVAGCHeaderProps {
  'logo-text'?: string;
  'app-name'?: string;
  lang?: string;
}

export interface EVAChatPanelProps {
  messages?: string; // JSON string
  loading?: boolean;
  'assistant-name'?: string;
}

// Custom element type declarations for Angular templates
declare global {
  interface HTMLElementTagNameMap {
    'eva-gc-button': HTMLElement & EVAGCButtonProps;
    'eva-gc-header': HTMLElement & EVAGCHeaderProps;
    'eva-gc-footer': HTMLElement;
    'eva-input': HTMLElement & EVAInputProps;
    'eva-textarea': HTMLElement;
    'eva-checkbox': HTMLElement;
    'eva-switch': HTMLElement;
    'eva-select': HTMLElement;
    'eva-radio-group': HTMLElement;
    'eva-slider': HTMLElement;
    'eva-button': HTMLElement;
    'eva-card': HTMLElement;
    'eva-dialog': HTMLElement & EVADialogProps;
    'eva-tabs': HTMLElement & EVATabsProps;
    'eva-accordion': HTMLElement;
    'eva-alert': HTMLElement;
    'eva-badge': HTMLElement;
    'eva-progress': HTMLElement;
    'eva-tooltip': HTMLElement;
    'eva-skeleton': HTMLElement;
    'eva-pagination': HTMLElement;
    'eva-breadcrumb': HTMLElement;
    'eva-menubar': HTMLElement;
    'eva-dropdown-menu': HTMLElement;
    'eva-context-menu': HTMLElement;
    'eva-table': HTMLElement;
    'eva-avatar': HTMLElement;
    'eva-collapsible': HTMLElement;
    'eva-popover': HTMLElement;
    'eva-hover-card': HTMLElement;
    'eva-sheet': HTMLElement;
    'eva-drawer': HTMLElement;
    'eva-alert-dialog': HTMLElement;
    'eva-carousel': HTMLElement;
    'eva-calendar': HTMLElement;
    'eva-scroll-area': HTMLElement;
    'eva-toggle': HTMLElement;
    'eva-toggle-group': HTMLElement;
    'eva-label': HTMLElement;
    'eva-separator': HTMLElement;
    'eva-aspect-ratio': HTMLElement;
    'eva-input-otp': HTMLElement;
    'eva-language-switcher': HTMLElement;
    'eva-chat-panel': HTMLElement & EVAChatPanelProps;
    'eva-chat-message': HTMLElement;
    'eva-page-shell': HTMLElement;
    'eva-hero-banner': HTMLElement;
    'eva-container': HTMLElement;
    'eva-skip-link': HTMLElement;
    'eva-program-card': HTMLElement;
  }
}

export {};

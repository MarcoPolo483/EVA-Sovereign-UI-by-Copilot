/**
 * EVA-Sovereign-UI Web Components
 * Main entry point - registers all components
 */

// Tokens
export * from './tokens';

// I18n
export { i18n } from './i18n/i18n-service';
export * from './i18n/formatters';

// Base Component
export { EVABaseComponent } from './utils/base-component';

// GC Design System Components
import './components/gc-design/eva-gc-header';
import './components/gc-design/eva-gc-footer';
import './components/gc-design/eva-gc-button';

// UI Components (all components including form controls)
import './components/ui/eva-accordion';
import './components/ui/eva-alert';
import './components/ui/eva-alert-dialog';
import './components/ui/eva-aspect-ratio';
import './components/ui/eva-avatar';
import './components/ui/eva-badge';
import './components/ui/eva-breadcrumb';
import './components/ui/eva-calendar';
import './components/ui/eva-card';
import './components/ui/eva-carousel';
import './components/ui/eva-checkbox';
import './components/ui/eva-collapsible';
import './components/ui/eva-context-menu';
import './components/ui/eva-dialog';
import './components/ui/eva-drawer';
import './components/ui/eva-dropdown-menu';
import './components/ui/eva-hover-card';
import './components/ui/eva-input';
import './components/ui/eva-input-otp';
import './components/ui/eva-label';
import './components/ui/eva-menubar';
import './components/ui/eva-pagination';
import './components/ui/eva-popover';
import './components/ui/eva-progress';
import './components/ui/eva-radio-group';
import './components/ui/eva-scroll-area';
import './components/ui/eva-select';
import './components/ui/eva-separator';
import './components/ui/eva-sheet';
import './components/ui/eva-skeleton';
import './components/ui/eva-slider';
// import './components/ui/eva-spinner'; // TODO: Fix - uses wrong base class
import './components/ui/eva-switch';
import './components/ui/eva-table';
import './components/ui/eva-tabs';
import './components/ui/eva-textarea';
// import './components/ui/eva-theme-switcher'; // TODO: Fix - uses wrong base class
import './components/ui/eva-toggle';
import './components/ui/eva-toggle-group';
import './components/ui/eva-tooltip';

// Layout Components
import './components/layout/eva-page-shell';
import './components/layout/eva-hero-banner';
import './components/layout/eva-container';

// Accessibility Components
import './components/accessibility/eva-skip-link';

// I18n Components
import './components/i18n/eva-language-switcher';

// Chat Components
import './components/chat/eva-chat-panel';
import './components/chat/eva-chat-message';

// ESDC Components
import './components/agency/eva-program-card';

// Initialize i18n with default locale
import { i18n } from './i18n/i18n-service';
i18n.loadLocale('en-CA').then(() => {
  i18n.loadLocale('fr-CA');
});

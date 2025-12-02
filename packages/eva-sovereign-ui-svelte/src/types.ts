// Component Props Interfaces for TypeScript support

export interface BaseComponentProps {
  class?: string;
  id?: string;
  style?: string;
}

// Button Components
export interface EVAGCButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'link';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface EVAButtonProps extends BaseComponentProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

// Form Components
export interface EVAInputProps extends BaseComponentProps {
  value?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  name?: string;
  maxlength?: number;
  minlength?: number;
  pattern?: string;
  autocomplete?: string;
  error?: string;
}

export interface EVATextareaProps extends BaseComponentProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  rows?: number;
  cols?: number;
  maxlength?: number;
  name?: string;
  error?: string;
}

export interface EVACheckboxProps extends BaseComponentProps {
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  indeterminate?: boolean;
  value?: string;
  name?: string;
  label?: string;
}

export interface EVASwitchProps extends BaseComponentProps {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
}

export interface EVASelectProps extends BaseComponentProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  multiple?: boolean;
  error?: string;
}

export interface EVARadioGroupProps extends BaseComponentProps {
  value?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

export interface EVASliderProps extends BaseComponentProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  name?: string;
}

export interface EVAInputOTPProps extends BaseComponentProps {
  value?: string;
  length?: number;
  disabled?: boolean;
  mask?: boolean;
  name?: string;
}

// Dialog Components
export interface EVADialogProps extends BaseComponentProps {
  open?: boolean;
  modal?: boolean;
}

export interface EVAAlertDialogProps extends BaseComponentProps {
  open?: boolean;
}

export interface EVADrawerProps extends BaseComponentProps {
  open?: boolean;
  side?: 'left' | 'right' | 'top' | 'bottom';
}

export interface EVASheetProps extends BaseComponentProps {
  open?: boolean;
  side?: 'left' | 'right' | 'top' | 'bottom';
}

// Tabs
export interface EVATabsProps extends BaseComponentProps {
  value?: string;
  orientation?: 'horizontal' | 'vertical';
}

// Accordion
export interface EVAAccordionProps extends BaseComponentProps {
  value?: string | string[];
  type?: 'single' | 'multiple';
  collapsible?: boolean;
}

// Card
export interface EVACardProps extends BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined';
}

// Chat Components
export interface EVAChatPanelProps extends BaseComponentProps {
  locale?: string;
  placeholder?: string;
  'show-language-switcher'?: boolean;
}

export interface EVAChatMessageProps extends BaseComponentProps {
  message?: string;
  sender?: string;
  timestamp?: string;
  role?: 'user' | 'assistant';
  avatar?: string;
}

// GC Header
export interface EVAGCHeaderProps extends BaseComponentProps {
  locale?: string;
  'site-title'?: string;
  'breadcrumbs'?: string; // JSON string
  'show-search'?: boolean;
  'show-language'?: boolean;
  'show-theme'?: boolean;
}

// GC Footer
export interface EVAGCFooterProps extends BaseComponentProps {
  locale?: string;
  'show-newsletter'?: boolean;
  'show-social'?: boolean;
}

// Language Switcher
export interface EVALanguageSwitcherProps extends BaseComponentProps {
  locale?: string;
  'available-locales'?: string; // JSON string
}

// Layout Components
export interface EVAPageShellProps extends BaseComponentProps {
  locale?: string;
  'site-title'?: string;
  'show-header'?: boolean;
  'show-footer'?: boolean;
}

export interface EVAContainerProps extends BaseComponentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export interface EVAHeroBannerProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  'image-url'?: string;
  'cta-text'?: string;
  'cta-href'?: string;
}

// Navigation
export interface EVABreadcrumbProps extends BaseComponentProps {
  items?: string; // JSON string
  separator?: string;
}

export interface EVASkipLinkProps extends BaseComponentProps {
  href?: string;
  label?: string;
}

// UI Components
export interface EVABadgeProps extends BaseComponentProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export interface EVAAlertProps extends BaseComponentProps {
  variant?: 'default' | 'destructive' | 'warning' | 'success';
  title?: string;
  dismissible?: boolean;
}

export interface EVATooltipProps extends BaseComponentProps {
  content?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
}

export interface EVAProgressProps extends BaseComponentProps {
  value?: number;
  max?: number;
  indeterminate?: boolean;
}

export interface EVASkeletonProps extends BaseComponentProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string;
  height?: string;
}

export interface EVAAspectRatioProps extends BaseComponentProps {
  ratio?: string; // e.g., "16/9", "4/3"
}

export interface EVACarouselProps extends BaseComponentProps {
  'auto-play'?: boolean;
  interval?: number;
  loop?: boolean;
}

export interface EVAPaginationProps extends BaseComponentProps {
  'current-page'?: number;
  'total-pages'?: number;
  'page-size'?: number;
}

export interface EVACalendarProps extends BaseComponentProps {
  value?: string; // ISO date string
  locale?: string;
  'min-date'?: string;
  'max-date'?: string;
}

// ESDC Components
export interface EVAProgramCardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  href?: string;
  'image-url'?: string;
}

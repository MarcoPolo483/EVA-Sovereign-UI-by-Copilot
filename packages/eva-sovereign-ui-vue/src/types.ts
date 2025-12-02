/**
 * TypeScript definitions for EVA Sovereign UI Vue components
 */

// Base component props
export interface BaseComponentProps {
  class?: string;
  style?: string | Record<string, any>;
  id?: string;
  [key: string]: any;
}

// Component-specific props
export interface ComponentProps extends BaseComponentProps {}

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'ghost' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface EVAGCButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface EVAInputProps extends BaseComponentProps {
  modelValue?: string;
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

export interface EVATextareaProps extends BaseComponentProps {
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  cols?: number;
  minlength?: number;
  maxlength?: number;
}

export interface EVACheckboxProps extends BaseComponentProps {
  modelValue?: boolean;
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  value?: string;
}

export interface EVASwitchProps extends BaseComponentProps {
  modelValue?: boolean;
  disabled?: boolean;
  checked?: boolean;
}

export interface EVASelectProps extends BaseComponentProps {
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  multiple?: boolean;
}

export interface EVARadioGroupProps extends BaseComponentProps {
  modelValue?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface EVASliderProps extends BaseComponentProps {
  modelValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}

export interface EVADialogProps extends BaseComponentProps {
  open?: boolean;
  modal?: boolean;
}

export interface EVAAlertDialogProps extends BaseComponentProps {
  open?: boolean;
}

export interface EVASheetProps extends BaseComponentProps {
  open?: boolean;
  side?: 'left' | 'right' | 'top' | 'bottom';
}

export interface EVATabsProps extends BaseComponentProps {
  value?: string;
  orientation?: 'horizontal' | 'vertical';
}

export interface EVAAccordionProps extends BaseComponentProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  value?: string | string[];
}

export interface EVAAlertProps extends BaseComponentProps {
  variant?: 'default' | 'destructive' | 'success' | 'warning';
}

export interface EVABadgeProps extends BaseComponentProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export interface EVAProgressProps extends BaseComponentProps {
  value?: number;
  max?: number;
}

export interface EVATooltipProps extends BaseComponentProps {
  content?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
}

export interface EVAAvatarProps extends BaseComponentProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
}

export interface EVABreadcrumbProps extends BaseComponentProps {
  separator?: string;
}

export interface EVAPaginationProps extends BaseComponentProps {
  current?: number;
  total?: number;
  pageSize?: number;
  showSizeChanger?: boolean;
}

export interface EVACalendarProps extends BaseComponentProps {
  value?: Date | string;
  locale?: string;
  minDate?: Date | string;
  maxDate?: Date | string;
}

export interface EVACarouselProps extends BaseComponentProps {
  autoplay?: boolean;
  interval?: number;
  loop?: boolean;
}

export interface EVATableProps extends BaseComponentProps {
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
}

export interface EVAGCHeaderProps extends BaseComponentProps {
  'logo-text'?: string;
  'app-name'?: string;
  lang?: string;
}

export interface EVALanguageSwitcherProps extends BaseComponentProps {
  locale?: string;
  locales?: string[];
}

export interface EVAChatPanelProps extends BaseComponentProps {
  messages?: Array<{
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp?: string;
  }>;
  loading?: boolean;
  'assistant-name'?: string;
}

export interface EVASkipLinkProps extends BaseComponentProps {
  target?: string;
  label?: string;
}

export interface EVAProgramCardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  href?: string;
}

export interface EVAHeroBannerProps extends BaseComponentProps {
  title?: string;
  description?: string;
  'background-image'?: string;
}

// Event types
export interface EVAComponentEvent extends Event {
  detail?: any;
}

export interface EVAChangeEvent extends EVAComponentEvent {
  detail?: {
    value: any;
  };
}

export interface EVAClickEvent extends EVAComponentEvent {}

export interface EVAInputEvent extends EVAComponentEvent {
  detail?: {
    value: string;
  };
}

export interface EVASubmitEvent extends EVAComponentEvent {
  detail?: {
    content: string;
  };
}

// Type guards
export function isEVAComponentEvent(event: Event): event is EVAComponentEvent {
  return 'detail' in event;
}

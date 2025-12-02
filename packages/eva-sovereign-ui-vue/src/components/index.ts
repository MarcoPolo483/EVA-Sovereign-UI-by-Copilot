import { createComponent } from '../utils';

// Government of Canada Components
export const EVAGCButton = createComponent('eva-gc-button', ['click']);
export const EVAGCHeader = createComponent('eva-gc-header', []);
export const EVAGCFooter = createComponent('eva-gc-footer', []);
export const EVALanguageSwitcher = createComponent('eva-language-switcher', ['languageChange']);

// Form Components with v-model
export const EVAInput = createComponent('eva-input', ['input', 'change'], {
  prop: 'modelValue',
  event: 'input'
});

export const EVATextarea = createComponent('eva-textarea', ['input', 'change'], {
  prop: 'modelValue',
  event: 'input'
});

export const EVACheckbox = createComponent('eva-checkbox', ['change'], {
  prop: 'modelValue',
  event: 'change'
});

export const EVASwitch = createComponent('eva-switch', ['change'], {
  prop: 'modelValue',
  event: 'change'
});

export const EVASelect = createComponent('eva-select', ['change'], {
  prop: 'modelValue',
  event: 'change'
});

export const EVARadioGroup = createComponent('eva-radio-group', ['change'], {
  prop: 'modelValue',
  event: 'change'
});

export const EVASlider = createComponent('eva-slider', ['change'], {
  prop: 'modelValue',
  event: 'change'
});

// UI Components
export const EVAButton = createComponent('eva-button', ['click']);
export const EVACard = createComponent('eva-card', []);
export const EVACardHeader = createComponent('eva-card-header', []);
export const EVACardTitle = createComponent('eva-card-title', []);
export const EVACardDescription = createComponent('eva-card-description', []);
export const EVACardContent = createComponent('eva-card-content', []);

export const EVADialog = createComponent('eva-dialog', ['open', 'close']);
export const EVAAlertDialog = createComponent('eva-alert-dialog', ['open', 'close']);
export const EVAAlertDialogTrigger = createComponent('eva-alert-dialog-trigger', []);
export const EVAAlertDialogContent = createComponent('eva-alert-dialog-content', []);
export const EVAAlertDialogHeader = createComponent('eva-alert-dialog-header', []);
export const EVAAlertDialogTitle = createComponent('eva-alert-dialog-title', []);
export const EVAAlertDialogDescription = createComponent('eva-alert-dialog-description', []);
export const EVAAlertDialogFooter = createComponent('eva-alert-dialog-footer', []);
export const EVAAlertDialogAction = createComponent('eva-alert-dialog-action', ['click']);
export const EVAAlertDialogCancel = createComponent('eva-alert-dialog-cancel', ['click']);

export const EVADrawer = createComponent('eva-drawer', ['open', 'close']);
export const EVASheet = createComponent('eva-sheet', ['open', 'close']);
export const EVASheetTrigger = createComponent('eva-sheet-trigger', []);
export const EVASheetContent = createComponent('eva-sheet-content', []);
export const EVASheetHeader = createComponent('eva-sheet-header', []);
export const EVASheetFooter = createComponent('eva-sheet-footer', []);
export const EVASheetTitle = createComponent('eva-sheet-title', []);
export const EVASheetDescription = createComponent('eva-sheet-description', []);

export const EVATabs = createComponent('eva-tabs', ['change']);
export const EVATabsList = createComponent('eva-tabs-list', []);
export const EVATabsTrigger = createComponent('eva-tabs-trigger', ['click']);
export const EVATabsContent = createComponent('eva-tabs-content', []);

export const EVAAccordion = createComponent('eva-accordion', ['change']);
export const EVAAccordionItem = createComponent('eva-accordion-item', []);

export const EVAAlert = createComponent('eva-alert', []);
export const EVABadge = createComponent('eva-badge', []);
export const EVALabel = createComponent('eva-label', []);
export const EVASeparator = createComponent('eva-separator', []);
export const EVATooltip = createComponent('eva-tooltip', []);
export const EVAProgress = createComponent('eva-progress', []);
export const EVASkeleton = createComponent('eva-skeleton', []);
export const EVAAspectRatio = createComponent('eva-aspect-ratio', []);

// Navigation Components
export const EVABreadcrumb = createComponent('eva-breadcrumb', []);
export const EVABreadcrumbList = createComponent('eva-breadcrumb-list', []);
export const EVABreadcrumbItem = createComponent('eva-breadcrumb-item', []);
export const EVABreadcrumbLink = createComponent('eva-breadcrumb-link', ['click']);
export const EVABreadcrumbPage = createComponent('eva-breadcrumb-page', []);
export const EVABreadcrumbSeparator = createComponent('eva-breadcrumb-separator', []);
export const EVABreadcrumbs = createComponent('eva-breadcrumbs', []);

export const EVAMenubar = createComponent('eva-menubar', []);
export const EVAMenubarMenu = createComponent('eva-menubar-menu', []);
export const EVAMenubarItem = createComponent('eva-menubar-item', ['click']);

export const EVADropdownMenu = createComponent('eva-dropdown-menu', ['open', 'close']);
export const EVADropdownMenuItem = createComponent('eva-dropdown-menu-item', ['click']);
export const EVADropdownMenuSeparator = createComponent('eva-dropdown-menu-separator', []);
export const EVADropdownMenuLabel = createComponent('eva-dropdown-menu-label', []);

export const EVAContextMenu = createComponent('eva-context-menu', ['open', 'close']);
export const EVAContextMenuItem = createComponent('eva-context-menu-item', ['click']);

export const EVAPagination = createComponent('eva-pagination', ['change']);

// Table Components
export const EVATable = createComponent('eva-table', []);
export const EVATableHeader = createComponent('eva-table-header', []);
export const EVATableBody = createComponent('eva-table-body', []);
export const EVATableRow = createComponent('eva-table-row', []);
export const EVATableHead = createComponent('eva-table-head', []);
export const EVATableCell = createComponent('eva-table-cell', []);

// Advanced Components
export const EVAAvatar = createComponent('eva-avatar', []);
export const EVAAvatarImage = createComponent('eva-avatar-image', []);
export const EVAAvatarFallback = createComponent('eva-avatar-fallback', []);

export const EVACollapsible = createComponent('eva-collapsible', ['change']);
export const EVACollapsibleTrigger = createComponent('eva-collapsible-trigger', ['click']);
export const EVACollapsibleContent = createComponent('eva-collapsible-content', []);

export const EVAPopover = createComponent('eva-popover', ['open', 'close']);
export const EVAHoverCard = createComponent('eva-hover-card', ['open', 'close']);
export const EVAHoverCardTrigger = createComponent('eva-hover-card-trigger', []);
export const EVAHoverCardContent = createComponent('eva-hover-card-content', []);

export const EVASelectItem = createComponent('eva-select-item', ['click']);
export const EVARadioGroupItem = createComponent('eva-radio-group-item', ['change']);
export const EVAToggleGroup = createComponent('eva-toggle-group', ['change']);
export const EVAToggleGroupItem = createComponent('eva-toggle-group-item', ['click']);
export const EVAToggle = createComponent('eva-toggle', ['change']);

export const EVACalendar = createComponent('eva-calendar', ['change']);
export const EVACarousel = createComponent('eva-carousel', ['change']);
export const EVAScrollArea = createComponent('eva-scroll-area', []);
export const EVAInputOTP = createComponent('eva-input-otp', ['input', 'change'], {
  prop: 'modelValue',
  event: 'input'
});

// Custom Components
export const EVAChatPanel = createComponent('eva-chat-panel', ['messageSubmit']);
export const EVAPageShell = createComponent('eva-page-shell', []);
export const EVAContainer = createComponent('eva-container', []);
export const EVASkipLinks = createComponent('eva-skip-links', []);
export const EVAProgramCard = createComponent('eva-program-card', ['click']);
export const EVAHeroBanner = createComponent('eva-hero-banner', []);

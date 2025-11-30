# Planning Guide

EVA-Sovereign-UI is a standards-based web components design system that provides accessible, internationalized UI components following Government of Canada design patterns, with extensible "sovereign profiles" for public-sector UX across Five Eyes countries.

**Experience Qualities**:
1. **Trustworthy** - Government services demand clarity, reliability, and institutional confidence through consistent, professional design patterns
2. **Accessible** - WCAG 2.1 AA compliance ensures inclusive access for all citizens regardless of ability or assistive technology
3. **Adaptable** - Sovereign profiles allow the same component library to serve different national design systems while maintaining quality standards

**Complexity Level**: Light Application (multiple features with basic state)
  - The demo showcases interactive web components with state management (language switching, theme toggling), but focuses on demonstration rather than full application functionality

## Essential Features

### Accessibility Implementation ✅ COMPLETED
- **Functionality**: WCAG 2.1 AA compliant accessibility features including keyboard navigation, screen reader support, and semantic HTML
- **Purpose**: Ensure inclusive access for all citizens regardless of ability or assistive technology
- **Trigger**: Always active, respects user preferences (reduced motion, high contrast)
- **Progression**: Component mount → semantic structure rendered → ARIA attributes applied → keyboard/screen reader accessible
- **Success criteria**: 
  - All interactive elements keyboard accessible
  - Skip to main content link functional
  - Proper ARIA labels and landmarks
  - Screen reader announcements for dynamic content
  - Focus management and visible focus indicators
  - Reduced motion and high contrast support
  - Color contrast ratios meet WCAG AA standards
  - HTML lang attribute updates with locale changes

### Web Components Library
- **Functionality**: Standards-based Custom Elements with Shadow DOM encapsulation
- **Purpose**: Framework-agnostic components usable in any web application
- **Trigger**: Component registration on script load
- **Progression**: Script import → component registration → declarative HTML usage → shadow DOM rendering
- **Success criteria**: Components render correctly, accept attributes, emit events, and work without framework dependencies

### Internationalization System
- **Functionality**: Key-based translation lookup supporting en-CA and fr-CA
- **Purpose**: Bilingual support required for Canadian government services
- **Trigger**: Language switcher interaction or programmatic locale change
- **Progression**: User clicks language toggle → event emission → locale update → component re-render with new translations
- **Success criteria**: All text content updates instantly when language changes, no page reload required

### Sovereign Profile Theming
- **Functionality**: CSS custom property-based themes for different government design systems
- **Purpose**: Allow same component library to match Canada GC, UK Gov, and other national styles
- **Trigger**: Profile selection in demo controls
- **Progression**: Profile selector change → theme class update → CSS variables swap → visual refresh
- **Success criteria**: Visual appearance matches government design guidelines for selected profile

### GC Header Component
- **Functionality**: Government of Canada standard header with bilingual title
- **Purpose**: Consistent branding and navigation entry point
- **Trigger**: Component mount in page
- **Progression**: Component added to DOM → i18n title lookup → themed header render
- **Success criteria**: Displays official GC visual identity, accessible, translatable

### Page Shell Component
- **Functionality**: Semantic layout structure with header/main/footer slots
- **Purpose**: Enforce consistent page structure and landmark regions
- **Trigger**: Component mount as page wrapper
- **Progression**: Component added → slots defined → child content distributed → semantic HTML structure
- **Success criteria**: Screen readers announce proper landmarks, content flows correctly

### Hero Banner Component
- **Functionality**: Prominent call-to-action area with title and description
- **Purpose**: Direct user attention to primary page purpose or action
- **Trigger**: Component mount with i18n keys
- **Progression**: Component added → keys parsed → translations loaded → styled banner render
- **Success criteria**: Text translates, proper heading hierarchy, visually prominent

### Language Switcher Component
- **Functionality**: EN/FR toggle button
- **Purpose**: Allow users to switch interface language per government bilingual requirements
- **Trigger**: User click on language option
- **Progression**: Click → event dispatch → global locale update → all components re-render
- **Success criteria**: Single click switches all text, current language visually indicated

### Quick Actions Component
- **Functionality**: Grid of actionable cards or buttons
- **Purpose**: Provide shortcuts to common government service tasks
- **Trigger**: Component mount with configuration
- **Progression**: Component added → config parsed → action cards rendered → keyboard navigation enabled
- **Success criteria**: Fully keyboard accessible, screen reader friendly, clear action labels

### Chat Panel Component
- **Functionality**: Message list with input field for conversational interface
- **Purpose**: Demonstrate EVA-style AI assistant integration pattern
- **Trigger**: Component mount and user message submission
- **Progression**: User types message → submit → message added to list → simulated bot response → scroll to bottom
- **Success criteria**: Messages display chronologically, accessible form, auto-scroll works

## Edge Case Handling

- **Missing Translations**: Fall back to English if translation key not found, log warning
- **Invalid Profile**: Default to Canada GC profile if unknown profile specified
- **Component Nesting**: Shadow DOM prevents style leakage, slots handle content distribution properly
- **Browser Support**: Graceful degradation message for browsers without Custom Elements support
- **Focus Management**: Trap focus in modal-like components, restore on close
- **Empty States**: Show helpful messages when components have no content/config

## Design Direction

The design should feel authoritative, accessible, and service-oriented - reflecting government institutional trust while remaining modern and user-friendly. A minimal interface prioritizes clarity and task completion over decoration, with generous whitespace and clear visual hierarchy appropriate for both public citizens and internal civil service users.

## Color Selection

Analogous color scheme with institutional blues and neutrals
- Blue communicates trust, stability, and official government authority
- Used for primary actions and branding elements with supporting neutral grays

**Canada GC Intranet Profile:**
- **Primary Color**: GC Blue (oklch(0.45 0.12 250)) - Official Government of Canada brand blue, communicates authority and trust
- **Secondary Colors**: 
  - GC Red (oklch(0.50 0.20 25)) - Canadian flag red for accents and important notices
  - Neutral Gray (oklch(0.55 0.01 250)) - Supporting color for secondary UI elements
- **Accent Color**: Action Blue (oklch(0.55 0.15 250)) - Interactive element highlighting
- **Foreground/Background Pairings**:
  - Background (White oklch(0.99 0 0)): Text (Dark Gray oklch(0.25 0.01 250)) - Ratio 12.5:1 ✓
  - Primary (GC Blue oklch(0.45 0.12 250)): White text (oklch(0.99 0 0)) - Ratio 7.8:1 ✓
  - Secondary (GC Red oklch(0.50 0.20 25)): White text (oklch(0.99 0 0)) - Ratio 6.2:1 ✓
  - Accent (Action Blue oklch(0.55 0.15 250)): White text (oklch(0.99 0 0)) - Ratio 4.9:1 ✓
  - Card (Light Gray oklch(0.97 0 0)): Text (Dark Gray oklch(0.25 0.01 250)) - Ratio 12.2:1 ✓

**UK Gov Profile:**
- **Primary Color**: Gov.UK Green (oklch(0.35 0.10 180)) - Distinctive UK government identity
- **Secondary Colors**: Similar neutral approach with UK-specific accent colors

## Font Selection

Typefaces should convey institutional credibility and maximum readability for diverse audiences including users with reading difficulties, chosen fonts should be system fonts or widely available for performance.

- **Typographic Hierarchy**:
  - H1 (Page Title): system-ui Bold/36px/tight leading, used sparingly for main page heading
  - H2 (Section Heading): system-ui SemiBold/28px/normal leading, major content sections
  - H3 (Component Heading): system-ui SemiBold/22px/normal leading, component-level headings
  - Body Text: system-ui Regular/16px/relaxed leading, main content and descriptions
  - Small Text: system-ui Regular/14px/relaxed leading, metadata and supporting information
  - Button Text: system-ui SemiBold/16px/normal leading, all actionable elements

## Animations

Animations should be purposeful and subtle, primarily for state feedback and spatial continuity - motion reduces uncertainty about interface responses but must respect prefers-reduced-motion for accessibility.

- **Purposeful Meaning**: Minimal motion conveys government professionalism, small transitions confirm actions (button press, language switch), avoid decorative animation
- **Hierarchy of Movement**: Focus state changes deserve subtle transitions, language/theme switching gets smooth fade, chat messages ease in from bottom

## Component Selection

- **Components**: Custom Web Components built with Shadow DOM for:
  - `<eva-gc-header>` - Government header bar with branding
  - `<eva-page-shell>` - Semantic page structure with slots
  - `<eva-hero-banner>` - Call-to-action area
  - `<eva-language-switcher>` - EN/FR toggle
  - `<eva-quick-actions>` - Action card grid
  - `<eva-chat-panel>` - Message interface with input
  - `<eva-button>` - Base button component

- **Customizations**: 
  - Shadow DOM with CSS custom properties for theming
  - Slot-based content distribution
  - Event-driven communication between components
  - Attribute-based configuration with i18n key support

- **States**: 
  - Buttons: default, hover, focus (visible outline), active, disabled (reduced opacity)
  - Inputs: default, focus (blue ring), error (red border), disabled
  - Language switcher: current language highlighted with bold weight and underline
  - Theme selector: selected profile indicated with checkmark

- **Icon Selection**: 
  - Minimal icon use, leveraging unicode symbols and CSS for basic indicators
  - Language icon: 🌐 globe
  - Chat send: → arrow
  - Microphone: 🎤 for voice option

- **Spacing**: 
  - Design tokens define: --spacing-xs (4px), --spacing-sm (8px), --spacing-md (16px), --spacing-lg (24px), --spacing-xl (32px), --spacing-2xl (48px)
  - Component padding: --spacing-md to --spacing-lg
  - Section gaps: --spacing-xl to --spacing-2xl
  - Consistent 8px grid system

- **Mobile**: 
  - Mobile-first Shadow DOM styles
  - Header: simplified at <768px, possible hamburger for menu
  - Quick actions: single column stack on mobile, 2-3 column grid on tablet+
  - Chat panel: full-width on mobile, max-width container on desktop
  - Text scales proportionally, touch targets minimum 44×44px

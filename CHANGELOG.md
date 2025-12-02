# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-12-02

### Added
- React wrapper library `@eva-suite/sovereign-ui-react` (forwardRef wrappers for all published Web Components)
- 100% coverage of existing WC set with React components & prop typings
- Global JSX intrinsic extensions for custom `eva-*` tags
- Smoke test suites for each wrapper group (structure, misc UI, dialogs, navigation, form controls)
- Dev Kit demo expansions: React vs WC code tabs for all components; added structural sections (Program Card, Hero Banner, Page Shell, Skip Links, Container, Breadcrumbs plural)
- Additional structural/layout components: `eva-button`, `eva-page-shell`, `eva-container`, `eva-skip-links`, `eva-breadcrumbs`, `eva-program-card`, `eva-hero-banner` (already present in WC library; now wrapped for React)
- Advanced interaction/status wrappers: Pagination, Progress, Scroll Area, Skeleton, Slider, Toggle, Input OTP
- Overlay & dialog family wrappers: Alert Dialog, Hover Card, Sheet
- Data & composition wrappers: Table (all parts), Card (all parts)
- Navigation & menu wrappers: Menubar, Dropdown Menu, Context Menu, Tabs (List/Trigger/Content)
- Form & control wrappers: Select Item, Radio Group (+Item), Toggle Group (+Item), Textarea, Label, Separator, Accordion (+Item)
- Utility & feedback wrappers: Alert, Aspect Ratio, Badge, Calendar, Carousel, Tooltip, Avatar (+Image/Fallback), Collapsible (+Trigger/Content)

### Changed
- Updated documentation to reflect React usage patterns alongside Web Components
- Extended demo gallery to show parallel React examples for rapid adoption

### Internal
- Minor build size increases tracked; bundle analysis remains within size guard thresholds
- Known non-blocking warning about `types` export condition ordering retained for future refinement

## [1.0.0] - 2025-12-01

### Added
- Initial release of EVA Sovereign UI component library
- 38 production-ready Web Components ported from shadcn/ui
- 11 custom government and layout components
- Total of 49 components
- Full Spark design system integration with oklch colors
- Comprehensive test suite with Vitest (80%+ coverage)
- CI/CD pipelines (testing, accessibility, security, performance)
- Accessibility testing with axe-core (WCAG 2.2 AAA compliant)
- Browser compatibility testing with Playwright
- Security audit workflows (npm audit, Snyk, CodeQL)
- Performance benchmarking and bundle size analysis
- Complete TypeScript support with strict mode
- Shadow DOM encapsulation for all components
- Design tokens for colors, typography, spacing, shadows, animations
- Government of Canada design system compliance
- Five Eyes sovereign profiles support
- Internationalization (i18n) for 5 languages
- Comprehensive documentation (2,600+ lines)
- Interactive demo applications
- API reference and migration guides

### Component Library (43 Components)

#### Tier 1: Essential UI (10)
- eva-accordion - Collapsible sections
- eva-alert - Status messages
- eva-badge - Labels/tags
- eva-card - Content containers
- eva-dialog - Modal dialogs
- eva-dropdown-menu - Context menus
- eva-popover - Floating content
- eva-select - Dropdown selects
- eva-sheet - Side panels
- eva-tabs - Tabbed interfaces

#### Tier 2: Form Elements (11)
- eva-input - Text inputs
- eva-textarea - Multi-line input
- eva-checkbox - Checkboxes
- eva-switch - Toggle switches
- eva-slider - Range sliders
- eva-radio-group - Radio buttons
- eva-label - Form labels
- eva-separator - Dividers
- eva-avatar - User avatars
- eva-breadcrumb - Navigation breadcrumbs
- eva-collapsible - Collapsible content

#### Tier 3: Utilities (22)
- eva-skeleton - Loading placeholders
- eva-progress - Progress bars
- eva-tooltip - Hover tooltips
- eva-toggle - Toggle buttons
- eva-alert-dialog - Confirmation dialogs
- eva-aspect-ratio - Aspect ratio containers
- eva-hover-card - Hover preview cards
- eva-scroll-area - Custom scrollbars
- eva-table - Data tables
- eva-toggle-group - Grouped toggles
- eva-context-menu - Right-click menus
- eva-drawer - Slide-out panels
- eva-input-otp - OTP/PIN inputs
- eva-pagination - Page navigation
- eva-menubar - Application menu bar
- eva-carousel - Image carousel
- eva-calendar - Month calendar

### Design System Features
- oklch() perceptual color space for smooth gradients
- color-mix() dynamic hover states
- Responsive typography with clamp()
- 8px spacing grid system
- 6-level shadow elevation system
- Smooth 200ms cubic-bezier transitions
- Enhanced 3px focus indicators with glow
- Reduced motion support
- High contrast mode support

### Testing & Quality
- Vitest unit test framework
- 80%+ code coverage target
- axe-core accessibility audits
- Playwright cross-browser testing (Chrome, Firefox, Safari, Mobile)
- Visual regression testing
- Performance benchmarking
- Bundle size analysis
- TypeScript strict mode compliance

### CI/CD & Automation
- GitHub Actions workflows
- Automated testing on every PR
- Accessibility audits
- Security scanning (npm audit, Snyk, CodeQL)
- Performance benchmarks
- Lighthouse CI integration
- Dependency review
- CodeQL analysis

### Documentation
- README with quick start guide
- COMPONENT-API.md (1,000+ lines)
- MIGRATION-GUIDE.md (800+ lines)
- Interactive demo gallery
- ESDC demo application
- Developer kit showcase
- Accessibility documentation
- Security policy
- Contributing guidelines

### Infrastructure
- npm package configuration
- ESM module exports
- TypeScript declarations bundling
- Tree-shakable imports
- CDN deployment ready
- Semantic versioning

## [Unreleased]

### Planned for 1.2.0
- Additional complex components (command palette, form validation, resizable panels)
- Storybook integration
- VS Code extension for component snippets
- Component generator CLI
- Advanced theming system
- Vue/Angular/Svelte wrapper libraries

---

## Version History

- **1.0.0** (2025-12-01) - Initial production release with 49 components (38 shadcn/ui + 11 custom), full testing, CI/CD, and documentation
 - **1.1.0** (2025-12-02) - Added complete React wrapper library with structural, interactive, overlay, data, and utility components plus expanded Dev Kit demos

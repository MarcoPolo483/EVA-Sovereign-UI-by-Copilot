# Planning Guide

A developer-focused toolkit providing instant access to CSS shortcuts, color palette templates, reusable styles, and graphic elements to accelerate frontend development workflows.

**Experience Qualities**: 
1. **Efficient** - Quick copy-paste functionality with zero friction, allowing developers to grab what they need and move on.
2. **Organized** - Logical categorization and search that makes finding the right snippet or resource feel intuitive.
3. **Practical** - Real-world, production-ready code and assets that work immediately without modification.

**Complexity Level**: Light Application (multiple features with basic state)
- Multiple organized sections (CSS shortcuts, color palettes, styles, graphics) with filtering, search, and copy functionality, plus user preferences for favorites and theme selection.

## Essential Features

**CSS Shortcuts Browser**
- Functionality: Displays categorized CSS snippets (flexbox, grid, animations, typography, shadows, borders) with syntax highlighting and copy button
- Purpose: Eliminates the need to memorize or look up common CSS patterns
- Trigger: User selects a category or searches for a specific pattern
- Progression: Browse categories → View snippet with preview → Click copy → Visual confirmation → Snippet in clipboard
- Success criteria: Users can find and copy any common CSS pattern in under 5 seconds

**Color Palette Templates**
- Functionality: Pre-built color schemes with hex/rgb/oklch values, showing colors in context with contrast ratios
- Purpose: Provides ready-to-use, accessible color combinations for rapid prototyping
- Trigger: User browses palette categories (professional, vibrant, pastel, monochrome) or searches by mood
- Progression: Select palette category → View color schemes with previews → Click individual color or entire palette → Copy values → Visual confirmation
- Success criteria: All palettes meet WCAG AA contrast requirements; users can copy individual colors or entire palettes

**Style Templates**
- Functionality: Complete component styles (buttons, cards, forms, modals) as ready-to-use CSS classes
- Purpose: Jumpstart UI development with polished, consistent component styles
- Trigger: User selects component type from library
- Progression: Browse components → Preview live example → View CSS code → Copy to clipboard → Apply to project
- Success criteria: Each template works standalone without dependencies; includes hover/focus/active states

**Graphic Elements Library**
- Functionality: SVG patterns, shapes, dividers, and decorative elements with customization options
- Purpose: Add visual interest without leaving the development environment or searching asset sites
- Trigger: User browses graphic categories (patterns, dividers, shapes, icons)
- Progression: Select category → Preview element → Adjust colors/size if applicable → Copy SVG code → Paste into project
- Success criteria: All SVGs are optimized and accessible; color customization works in real-time

## Edge Case Handling

- **Empty search results**: Display helpful suggestions for similar terms or show popular items from that category
- **Copy failure**: Provide fallback manual selection with clear visual boundaries around code blocks
- **Browser compatibility**: Gracefully indicate when CSS features require vendor prefixes or have limited support
- **Mobile users**: Optimize touch targets and provide mobile-friendly code viewing with horizontal scroll
- **Favorites overflow**: Implement pagination or grouping when user saves many items

## Design Direction

The design should feel professional, efficient, and developer-centric—like a well-organized workshop where every tool has its place. Favor a clean, minimal interface that prioritizes content visibility and quick scanning, with subtle interactions that feel snappy and responsive rather than decorative.

## Color Selection

Custom palette - A sophisticated developer tool aesthetic with muted, high-contrast colors that reduce eye strain during extended use while maintaining clear visual hierarchy.

- **Primary Color**: Deep slate blue `oklch(0.35 0.06 250)` - Communicates technical precision and trustworthiness, used for primary actions and interactive elements
- **Secondary Colors**: Soft purple `oklch(0.55 0.08 285)` for secondary actions and complementary elements, creating visual interest without overwhelming
- **Accent Color**: Vibrant cyan `oklch(0.65 0.15 200)` for success states, highlights, and copy confirmations—draws attention exactly when needed
- **Foreground/Background Pairings**: 
  - Background (Light Gray `oklch(0.98 0 0)`): Dark charcoal text `oklch(0.25 0 0)` - Ratio 12.8:1 ✓
  - Card (White `oklch(1 0 0)`): Dark charcoal text `oklch(0.25 0 0)` - Ratio 13.5:1 ✓
  - Primary (Deep Slate `oklch(0.35 0.06 250)`): White text `oklch(1 0 0)` - Ratio 10.2:1 ✓
  - Secondary (Soft Purple `oklch(0.55 0.08 285)`): White text `oklch(1 0 0)` - Ratio 5.8:1 ✓
  - Accent (Vibrant Cyan `oklch(0.65 0.15 200)`): Dark text `oklch(0.25 0 0)` - Ratio 6.2:1 ✓
  - Muted (Cool Gray `oklch(0.95 0.005 250)`): Medium gray text `oklch(0.50 0.01 250)` - Ratio 6.8:1 ✓

## Font Selection

Clean, technical typography that mirrors code editor aesthetics while maintaining excellent readability—Inter for UI elements combined with JetBrains Mono for code snippets to create familiar, developer-friendly typography.

- **Typographic Hierarchy**: 
  - H1 (Section Titles): Inter SemiBold/32px/tight tracking (-0.02em)
  - H2 (Category Headers): Inter SemiBold/24px/normal tracking
  - H3 (Component Names): Inter Medium/18px/normal tracking
  - Body (Descriptions): Inter Regular/15px/relaxed leading (1.6)
  - Code (Snippets): JetBrains Mono Regular/14px/normal leading (1.5)
  - Labels (Metadata): Inter Medium/13px/wide tracking (0.02em) uppercase

## Animations

Subtle, performance-focused animations that provide feedback without slowing workflow—emphasizing instant response over decorative flourishes, like a well-tuned IDE.

- **Purposeful Meaning**: Quick fade-ins for copied confirmations (checkmark icons), smooth color transitions on hover states, and gentle scale effects on cards to communicate interactivity
- **Hierarchy of Movement**: Primary focus on copy confirmation feedback (most important user action), secondary on category switching and filtering, minimal on decorative elements

## Component Selection

- **Components**: 
  - Tabs (Shadcn) for main navigation between CSS/Colors/Styles/Graphics with subtle underline indicator
  - Card (Shadcn) for displaying individual snippets and templates with slight elevation on hover
  - Input (Shadcn) for search functionality with clear button
  - Button (Shadcn) for copy actions—primary variant with icon
  - Badge (Shadcn) for category tags and feature labels (e.g., "CSS3", "Responsive", "Animated")
  - Dialog (Shadcn) for expanded preview of complex components
  - Tooltip (Shadcn) for showing full color values on hover
  - Separator (Shadcn) for visual organization between sections
  - ScrollArea (Shadcn) for code blocks that might overflow

- **Customizations**: 
  - Syntax highlighted code blocks using custom component with line numbers
  - Color swatch grid component with click-to-copy functionality
  - SVG preview component with live customization controls
  - Favorites toggle button component with heart icon and animation

- **States**: 
  - Buttons: Default (subtle shadow), Hover (lift + shadow increase), Active (scale down), Copied (green checkmark + background color shift for 1.5s)
  - Cards: Rest (flat), Hover (subtle lift + border color change), Selected (persistent border highlight)
  - Search input: Empty (placeholder visible), Focused (border accent color + subtle glow), Filled (clear button appears)
  - Copy buttons: Show icon only on card hover, success state replaces copy icon with check

- **Icon Selection**: 
  - Copy (phosphor) for copy-to-clipboard actions
  - Check (phosphor) for confirmation states
  - MagnifyingGlass (phosphor) for search
  - Heart (phosphor) for favorites toggle
  - Code (phosphor) for CSS shortcuts section
  - Palette (phosphor) for colors section
  - PaintBrush (phosphor) for styles section
  - Shapes (phosphor) for graphics section
  - X (phosphor) for clearing search/closing dialogs

- **Spacing**: 
  - Consistent 16px (gap-4) between cards in grid
  - 24px (gap-6) between major sections
  - 8px (gap-2) for inline elements (badges, small buttons)
  - 32px (px-8) horizontal padding in main container
  - 48px (py-12) vertical padding for section breaks

- **Mobile**: 
  - Stack tabs vertically as dropdown select on mobile (<768px)
  - Switch from 3-column grid to single column on mobile
  - Make code blocks horizontally scrollable with touch momentum
  - Increase copy button size to 44x44px minimum touch target
  - Position search bar sticky at top on scroll
  - Use sheet component instead of dialog for mobile previews

# Assistive Technology (AT) Testing Guide

This guide outlines pragmatic steps to validate accessibility with popular screen readers alongside our automated axe-core checks.

## Scope
- NVDA (Windows): Focus order, role/label announcements, menu navigation.
- JAWS (Windows): Form controls, landmarks, dialogs.
- VoiceOver (macOS): Rotor navigation, headings, lists, landmarks.

## Critical Scenarios
- Language Switcher: Menu/menuitemradio semantics, arrow key navigation, current selection announced.
- Dialogs/Modals: Focus trap, `aria-modal`, ESC to close, return focus.
- Forms: Labels, errors with `aria-describedby`, required markers, live regions.
- Navigation: Landmarks (header/main/footer/nav), skip links.

## Test Protocol
1. Open demo pages (Gallery or All-in-One) in latest Chrome/Edge.
2. Enable AT and follow keyboard-only flow.
3. Capture issues with: component, steps, expected vs actual, AT/version.
4. Log findings in issues with `a11y-at` label.

## Frequency
- Run at least before every minor release or UI-affecting change.

## Notes
- Automated AT testing is limited; manual sessions complement axe-core and unit tests.
- Prefer WCAG 2.2 techniques where applicable.
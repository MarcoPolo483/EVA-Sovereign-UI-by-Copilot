# Design Tokens & Storybook

This project exposes core design tokens and showcases them in Storybook to help designers and developers work consistently across components.

## Storybook Sections

- Colors: Palette and semantic roles displayed with contrast-friendly swatches.
- Typography: Font families, sizes, weights, and line-heights with sample text.
- Spacing: Scale for margin/padding and layout rhythm.
- Shadows: Elevation presets and focus outlines.
- Language Switcher: ARIA-compliant menu/menuitemradio behavior, available in prefix and event modes.

Open Storybook via `npm run storybook:open` and navigate to these sections under Tokens and GC Components.

## Using Tokens

- CSS Variables: Tokens are provided as CSS variables; import the global styles or scope them per component.
- Theming: Override token variables in `theme.json` or a custom theme file to brand an implementation without code changes.
- Web Components & React: Components consume tokens via CSS variables, so frameworks can share the same theme.

## References

- THEMING-AND-TOKENS.md: Deep dive into token architecture and theming.
- COMPONENT-API.md: Coverage overview and the Custom Elements manifest.
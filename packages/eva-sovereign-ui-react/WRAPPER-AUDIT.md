# React Wrapper Audit

This audit lists implemented React wrappers vs. gaps across the 49 core Web Components to guide Tasks 10–12.

## Implemented Wrappers (5)
## Implemented Wrappers (13)
- `EVACard` → `eva-card`
- `EVADialog` → `eva-dialog`
- `EVATabs` → `eva-tabs`
- `EVASelect` → `eva-select`
- `EVAPopover` → `eva-popover`
- `EVACheckbox` → `eva-checkbox`
- `EVAInput` → `eva-input`
- `EVASwitch` → `eva-switch`
- `EVADrawer` → `eva-drawer`

- UI Essentials: `eva-accordion`, `eva-alert`, `eva-badge`, `eva-dropdown-menu`, `eva-sheet`
- Form: `eva-textarea`, `eva-slider`, `eva-radio-group`, `eva-label`, `eva-separator`, `eva-avatar`, `eva-breadcrumb`, `eva-collapsible`
- Utilities: `eva-skeleton`, `eva-progress`, `eva-tooltip`, `eva-toggle`, `eva-alert-dialog`, `eva-aspect-ratio`, `eva-hover-card`, `eva-scroll-area`, `eva-table`, `eva-toggle-group`, `eva-context-menu`, `eva-drawer`, `eva-input-otp`, `eva-pagination`, `eva-menubar`, `eva-carousel` (beta), `eva-calendar` (beta)

Beta components should be marked with `status: 'beta'` in wrapper exports and Dev Kit.

## Conventions
- Use `forwardRef` to expose the underlying custom element.
- Props map directly to WC attributes/properties; events re-emitted via props (e.g., `onChange`).
- Preserve accessibility attributes and avoid altering focus/tabIndex.

## Next Steps
1. Prioritize foundational UI: Button (done), Card, Dialog, Tabs, Select.
2. Implement layout & GC components for complete page shells.
3. Add tests (unit + axe) for dialog, menu, form controls.
4. Expose examples in Dev Kit React tab.

Refer to `WRAPPER-CONVENTIONS.md` for detailed mapping rules.

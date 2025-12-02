# Wrapper Conventions (React / Vue / Angular / Svelte)

This document defines the cross-framework rules for adapting EVA Sovereign Web Components (WC) into idiomatic framework components while preserving accessibility, internationalization, performance and design token integrity.

## 1. Goals

- Consistent prop, event, and slot semantics across React, Vue, Angular, Svelte.
- Zero divergence from WC behavior (no re-implementation of logic).
- Preserve a11y guarantees (roles, focus management, ARIA attributes).
- Seamless i18n propagation and reactive locale updates.
- Thin adapters: minimal overhead, tree-shake friendly, SSR-friendly where possible.

## 2. Naming & File Structure

```
packages/
  eva-sovereign-ui-<framework>/
    src/
      components/
        Eva<Button>.tsx|.vue|.ts|.svelte   (PascalCase exports)
      index.ts                             (barrel)
```

- Export PascalCase components (e.g., `EvaButton`).
- Underlying custom element tag remains `eva-gc-button`, etc.
- Avoid aliasing: 1 wrapper ↔ 1 primary WC tag.

## 3. Prop Mapping Rules

| WC Attribute | Wrapper Prop | Direction | Notes |
|--------------|--------------|-----------|-------|
| `variant` | `variant` | attr → prop | string union types per component |
| `disabled` | `disabled` | attr ⇄ prop | boolean; reflect changes |
| `loading` | `loading` | attr ⇄ prop | boolean; triggers progress UI |
| `current` (pagination) | `current` | attr ⇄ prop | number; watch for updates |
| `total` (pagination) | `total` | attr | readonly on wrapper side |
| `profile` (GC header/footer) | `profile` | attr ⇄ prop | sovereign profile id |
| `locale` (language switcher) | `locale` | attr ⇄ prop | synced to i18n service |

Guidelines:
- Boolean attributes use presence/absence at WC layer; wrappers normalize to boolean props.
- Numeric attributes parse to number on initial render and observe mutation (MutationObserver when needed).
- Complex data (objects/arrays) pass via properties: set directly on underlying element (e.g., `element.options = props.options`).

## 4. Event Bridging

Standard pattern: listen for CustomEvent from WC → re-emit framework event.

| WC Event | React | Vue | Angular | Svelte |
|----------|-------|-----|---------|--------|
| `change` | `onChange` | `@change` | `(change)` | `on:change` |
| `open` | `onOpen` | `@open` | `(open)` | `on:open` |
| `close` | `onClose` | `@close` | `(close)` | `on:close` |
| `select` | `onSelect` | `@select` | `(select)` | `on:select` |
| `message` | `onMessage` | `@message` | `(message)` | `on:message` |

React: use `forwardRef` and attach listeners in `useEffect` (cleanup on unmount).
Vue: expose emits via `defineEmits` with `emits: ['change','open',...]` for TS infer.
Angular: create `@Output() change = new EventEmitter<any>()` and subscribe in `ngAfterViewInit`.
Svelte: `onMount` addEventListener; forward using `createEventDispatcher` if mapping names differ (prefer direct element events). 

## 5. Slot / Children Mapping

- Default slot: wrapper children become light DOM children appended inside the custom element.
- Named slots: React/Vue/Angular/Svelte wrappers wrap children with `slot="name"` if user passes specialized prop or dedicated sub-component.
- React: Provide helper components, e.g., `<EvaCard.Header>...</EvaCard.Header>` renders `<div slot="header">`.
- Vue: Named slots pass directly: `<EvaCard><template #header>...</template></EvaCard>` wrapper projects templates into element with dynamic mounting.
- Angular: Use `<ng-content select="[slot=header]"></ng-content>` pattern; developer supplies `slot="header"` attribute manually.
- Svelte: Encourage direct `<div slot="header">` usage; minimal abstraction to reduce complexity.

## 6. Ref / Element Access

- React: `forwardRef<HTMLDivElement | HTMLElement>` returns underlying custom element instance.
- Vue: `ref` on component returns Vue wrapper; expose underlying element via `expose({ el })`.
- Angular: Use `@ViewChild('el') elRef!: ElementRef<HTMLElement>`; template ref assigned internally.
- Svelte: `bind:this={element}` binds to underlying custom element directly.

## 7. Internationalization Integration

- Wrappers do not duplicate translation logic; they react to locale changes by listening to global i18n service events (subscribe if necessary when prop `locale` provided).
- Ensure reactive update: when locale changes, underlying WC re-renders automatically; wrapper only passes through initial keys.
- Document i18n-prop pattern: props ending in `-key` (e.g., `titleKey`) remain attributes; direct text props (e.g., `title`) override translated value.

## 8. Accessibility Preservation

- Never strip ARIA attributes; pass unknown props through to underlying element.
- Focus management (dialogs, menus, roving tab index) handled by WC; wrappers avoid altering tabIndex.
- Provide type safety for critical ARIA props (`ariaLabel`, `ariaDescribedby`).

## 9. Performance Considerations

- Avoid state mirrors: read values on demand from element rather than storing duplicate state.
- Only attach listeners to events explicitly declared by user (React: check if prop exists before binding).
- Batch updates: multi-prop changes in framework lifecycle → set attributes sequentially; rely on WC internal microtask batching.

## 10. Testing Strategy

| Layer | Tooling | Scope |
|-------|---------|-------|
| WC | Vitest + axe | Core logic, a11y, i18n |
| Wrapper | Vitest / framework test utils | Prop → attribute mapping, event re-emit |
| Integration | Playwright | Cross-framework gallery examples |

Accessibility tests re-run across wrappers for representative components (dialog, menu, form control). Snapshot for structure; axe for violations.

## 11. Type Definitions

- Shared `@eva-suite/sovereign-ui-wc` types imported directly; wrappers augment with framework generics (e.g., React `ComponentPropsWithoutRef`).
- Event payload interfaces re-exported for consistency.

## 12. Versioning & Stability

- Wrapper packages follow semver aligned to core WC: MAJOR sync; MINOR may lag until adapter features added; PATCH independent for wrapper internal fixes.
- Beta components (e.g., `eva-carousel`, `eva-calendar`) flagged via `status: 'beta'` export for Dev Kit highlighting.

## 13. Migration Guidelines

React/Vue/Angular/Svelte migration from pure WC usage:
1. Replace direct tags with wrapper imports.
2. Remove manual event bridging code.
3. Replace inline attributes with typed props (ensures DX + autocomplete).
4. Keep slot markup unchanged; wrappers handle projection.

## 14. Future Enhancements

- Auto-generation: script to scaffold wrappers from `custom-elements.json`.
- Dynamic event typing: derive from `EventMap` metadata.
- SSR hints: provide `hydrate:false` flag for non-interactive render in static contexts.

---
**Status**: React implemented; Vue/Angular/Svelte pending (placeholders). This document governs upcoming implementations (Tasks 13–22).

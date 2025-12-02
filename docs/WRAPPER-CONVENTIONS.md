# Wrapper Conventions (Cross‑Framework)

This file references the canonical conventions document maintained at the repo root.

See: ../WRAPPER-CONVENTIONS.md

These conventions govern:
- Naming: `eva-accordion` → `EVAAccordion` (React), etc.
- Props mapping: boolean attrs → boolean props; data attrs → camelCase props
- Events: DOM CustomEvents → framework callbacks (e.g., `send-message` → `onSendMessage`)
- Slots: mapped to children/named slots as documented
- A11y & perf guidelines that all wrappers must follow

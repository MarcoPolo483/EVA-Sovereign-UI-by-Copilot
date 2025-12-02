# EVA Sovereign UI — v1.1.0 Release Notes

Date: 2025-12-02

## Highlights

- React wrapper library delivering full parity with the EVA Web Components set, enabling enterprise app teams to adopt EVA in React codebases without friction.
- Expanded Developer Kit demos with side-by-side WC vs React examples, improving onboarding and documentation clarity.
- Structural components wrapped for React: Button, Page Shell, Container, Skip Links, Breadcrumbs (plural), Program Card, Hero Banner.

## Security, Accessibility, and Compliance

- Accessibility: WCAG 2.2 AAA-oriented checks via axe-core and keyboard navigation tests across components.
- Internationalization: Locale switching validations and graceful error handling in i18n services (Five Eyes profiles prepared).
- Security: npm audit JSON export available; SBOM generation via CycloneDX; license audit added.

## Build & CI Improvements

- Semantic-release configuration and CI workflow added to support automated changelog and GitHub releases.
- Local monorepo builds hardened: wrapper props aligned (Progress, Slider), demo imports fixed, optional peers to avoid registry lookups in non-publish builds.

## Getting Started

- Demos: `apps/dev-kit-demo` and `apps/esdc-demo` built artifacts under `dist-devkit/` and `dist-esdc/`.
- Packages: React wrappers under `@eva-suite/sovereign-ui-react` with type-safe props and global JSX intrinsic tags.

## Known Warnings (Non-blocking)

- Package.json `exports.types` ordering warning during builds; tracked for future cleanup without functional impact.

## Next

- Wire npm publishing secrets (NPM_TOKEN) and provenance for automated package publishes.
- Expand Storybook integration and advanced component sets (command palette, validators, resizable panels).

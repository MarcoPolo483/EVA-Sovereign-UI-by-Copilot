# Contributing Guide

Thank you for contributing to EVA Sovereign UI. This project targets world-class enterprise and government-grade quality.

## Standards & Governance

- Accessibility: WCAG 2.2 AA baseline; interactive components keyboard operable, ARIA-accurate.
- Performance: Benchmarks must pass (avg ≤16ms, total ≤200ms).
- Bundle size: ES ≤50 KB gzip, UMD ≤75 KB gzip.
- Internationalization: Components respond to locale changes via i18n service.
- Visual Regression: Playwright baselines stable across browsers.

## Branching & Commits

- Branch from `main`.
- Conventional commits are required:
  - `feat:`, `fix:`, `perf:`, `docs:`, `refactor:`, `test:`, `chore:`
  - Scope examples: `feat(pagination): add Home/End nav`

## Required Checks

CI enforces, in order:
- No skipped tests (`scripts/check-no-skips.mjs`).
- Unit tests (`vitest`).
- Visual regression (`playwright`).
- Performance benchmark (`scripts/perf-benchmark.mjs`).
- Size guard (`scripts/size-guard.mjs`).
- Build artifacts (`vite build`).
- Semantic release (`release.yml`).

## Development Workflow

1. `npm ci` then `npm run dev` for local development.
2. Add/modify components in `src/components/**` using EVABaseComponent.
3. Write unit tests in `tests/**`. For keyboard interactions, use provided test-utils.
4. Run `npm test` locally; fix failures.
5. Update docs: `COMPONENT-API.md`, `docs/THEMING-AND-TOKENS.md`.
6. Commit using conventional messages.
7. Open PR; ensure CI passes.

## Release Process

- Merges to `main` trigger `release.yml`.
- Requires `NPM_TOKEN` secret for publishing.
- Semantic-release updates version, `CHANGELOG.md`, tags, and publishes.

## Security & Compliance

- Follow `SECURITY.md` for vulnerability reporting.
- Do not include PII or sensitive data in examples/tests.

## Contact

Open issues or discussions in the repository. For government deployments, coordinate via designated maintainers.

# EVA-Sovereign-UI Enterprise & Government Readiness

This document summarizes the maturity criteria for production deployments in enterprise and government contexts.

## Compliance & Standards
- Accessibility: WCAG 2.1 AA (target 2.2); automated axe + manual keyboard and screen reader checks.
- Internationalization: Multi-locale routing (prefix + event modes) and static fallback content.
- Privacy: No collection of PII by default; integrators responsible for telemetry opt-in.
- Security: CodeQL scanning, dependency update automation (Dependabot), `npm audit` script, license compliance tracking.
- Governance: Transparent release cadence, semantic versioning, conventional commits.

## Release Engineering
- Automated Release: Semantic-release on `main` with changelog + GitHub + npm publish.
- Versioning: SemVer with prerelease `next` branch option.
- Artifact Integrity: SBOM generation script (refine with production-only prune for reproducibility).
- Reproducibility: Deterministic build via Vite + TypeScript; locked dependency tree via exact versions in lockfile.

## Quality Gates (CI)
- Unit Tests: Vitest coverage + a11y tests.
- Visual Regression: Playwright snapshot tests for critical UI components.
- Performance: Benchmarks + bundle size guard thresholds.
- Accessibility: Component & template audit scripts.
- Lighthouse CI: Performance, Accessibility, Best Practices thresholds.

## Security & Supply Chain
- Dependency Updates: Grouped weekly Dependabot updates (testing, linting, types, storybook, tooling).
- Vulnerability Scanning: `security:audit` script; encourage integration with organization-wide SCA tools.
- SBOM: CycloneDX generation (improve by running after `npm ci && npm prune --production`).
- Code Analysis: CodeQL workflow (JavaScript/TypeScript).

## Documentation
- COMPONENT-API.md: Coverage & manifest consumption.
- TOKENS-README.md and THEMING-AND-TOKENS.md: Design tokens and theming strategy.
- INTERNATIONAL-DEPLOYMENT-READINESS-REPORT.md: Locale considerations.
- SECURITY.md: Baseline security posture.

## Observability (Integrator Guidance)
- Recommend OpenTelemetry integration at host app level (not built-in to components to avoid PII risk).
- Provide stable component event surface (e.g., `locale-change`).

## Operational Guidance
- SLO Targets (Suggested): Availability 99.9%, Median render < 200ms, P95 interaction latency < 100ms.
- Incident Response: Tag releases; rollback by redeploying prior npm version; immutable artifacts.
- Compatibility Matrix: Node 18+, 20+; Evergreen browsers (Chrome, Edge, Firefox, Safari current -1).

## Roadmap Enhancements
- Add automated screen reader smoke tests (NVDA scripts) – future.
- Integrate OpenSSF Scorecard workflow.
- Add Sigstore-based provenance for published packages.

## Deployment Checklist
1. Run CI: all tests green (unit, a11y, VR, lighthouse).
2. Generate SBOM: `npm ci && npm prune --production && npm run sbom`.
3. Run security audit: `npm run security:audit` and triage highs/criticals.
4. Verify license list: `npm run licenses:audit`; confirm all acceptable.
5. Execute release workflow (semantic-release) or dry run for preview.
6. Publish & verify artifact integrity (size guard unchanged; manifest present).

## Governance
See `GOVERNANCE.md` for decision process, support tiers, and triage policy.

## Status
This repository is approaching production-ready status; remaining enhancements (provenance signing, improved SBOM reproducibility) are planned for future iteration.

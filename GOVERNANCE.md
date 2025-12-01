# EVA-Sovereign-UI Governance & Support Policy

## Purpose
Establish clear processes for decision-making, release cadence, contribution, and long-term maintenance suitable for enterprise and government adopters.

## Roles
- Maintainers: Review PRs, enforce standards (accessibility, tests, docs). Responsible for releases and security triage.
- Contributors: External or internal developers submitting PRs aligned with CONTRIBUTING guidelines.
- Security Contacts: Point of contact for vulnerability disclosures (see SECURITY.md).

## Decision Process
- Minor Changes (docs, tests, fixes): Reviewed and merged by one maintainer.
- Feature Additions: Require issue with design outline and accessibility/i18n impact assessment.
- Breaking Changes: Require RFC (issue labeled `rfc`) with migration notes and consensus from 2+ maintainers.

## Release Cadence
- Patch: As needed (fixes/security) – automated via semantic-release.
- Minor: Bi-weekly target; aggregates non-breaking enhancements.
- Major: Infrequent; only when necessary after deprecation cycle.

## Support Tiers
- Core Components: Guaranteed patch maintenance (buttons, layout, language switcher).
- Extended Components: Best-effort (demos, experimental tokens).
- Experimental: Marked clearly; no stability guarantee.

## Issue & PR Triage
1. Label (type: bug, feature, a11y, perf, docs, security).
2. Assess severity (security, accessibility, regression prioritized).
3. Assign milestone (upcoming minor, patch queue, backlog).
4. Ensure tests & docs present before merge.

## Accessibility & I18n Gate
Every UI-affecting PR must:
- Preserve keyboard/tab order and ARIA roles.
- Include locale-safe changes (no hard-coded language strings).

## Security Gate
- Run `npm run security:audit` for dependency changes; high/critical issues must be addressed or justified.
- CodeQL alerts reviewed weekly.

## Deprecation Policy
- Announce in CHANGELOG with `Deprecated:` note.
- Provide alternative and migration doc (MIGRATION-GUIDE.md).
- Minimum one minor release before removal.

## Quality Criteria for Merge
- Unit tests passing (including new coverage where applicable).
- A11y tests passing (no new violations).
- Visual regression unchanged or approved.
- Performance thresholds not regressed.
- Docs updated (COMPONENT-API.md or relevant README).

## Communication
- Changelog is source of truth for release notes.
- Security advisories via GitHub Security tab.

## Escalation
Security vulnerabilities: Follow SECURITY.md contact process.
Critical regressions: Open issue labeled `critical` and notify maintainers.

## Future Enhancements
- Formal SLA definition.
- Community contribution guide with templates.
- Provenance signing (Sigstore) and OpenSSF Scorecard automation.

## Reference Docs
See ENTERPRISE-READY.md, SECURITY.md, COMPONENT-API.md, TOKENS-README.md.

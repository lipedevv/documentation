# Maintaining MRK Doctor documentation

This repository contains one GitBook documentation space: **MRK Doctor**. Do not add a multi-product hub or plugin selector.

## Edit and validate

Use Node.js 20 or later. No dependency installation is required.

```bash
npm run validate
```

`README.md` is the public homepage. `SUMMARY.md` defines navigation. Every public page has a Font Awesome `icon` in YAML frontmatter and a Markdown H1 title. Use relative `.md` links, GitBook hints, steppers, tabs, and native card tables. Cards also have visible pictograms and text labels; never rely on an icon alone.

The validator checks navigation coverage, icon metadata, local links, block nesting, assets, leftover MDX, and known internal-only topics. It does not replace a rendered GitBook preview. Review the homepage, installation steps, hints, and navigation on desktop and mobile in GitBook before publishing.

Repeated security notices are included directly in the relevant pages, without a reusable-content subscription. Keep them consistent when editing.

## Source of truth

Public documentation is customer-facing only. Do not publish implementation architecture, algorithms, scoring formulas, database structures, source paths, class names, developer APIs, or build-protection details. Customer settings, operational instructions, and honest feature limitations remain in scope. Keep internal notes outside this repository.

Check plugin source code first, then generated configuration, descriptors, tests, and project notes. The main documentation covers the Universal 1.8.9–26.2 artifact. Explicitly distinguish behavior belonging only to the separate optimized Paper artifact.

Do not present planned commands, integration adapters, tracing targets, recovery automation, or dashboard modes as implemented. Never invent support destinations or legal policies.

## Publish

Push reviewed documentation changes to `main` in `lipedevv/documentation`. Only documentation belongs here; the plugin and dashboard applications live elsewhere.

See [GitBook setup](GITBOOK_SETUP.md) for Git Sync and branding. This file and the setup guide are maintainer files, intentionally excluded from `SUMMARY.md`.

The former site is recoverable from Git history. A local pre-migration copy is also stored outside the documentation directory in `documentation-archive/mintlify-before-gitbook-2026-08-27` in the source workspace.

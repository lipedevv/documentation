# Connect the MRK Doctor GitBook site

The content is ready for GitBook Git Sync. Pushing this repository does not itself create a GitBook organization, connect a site, select a plan, or publish a URL.

## Git Sync

1. In GitBook, create or select a documentation site named **MRK Doctor** with a single content space.
2. Connect GitHub and select **lipedevv/documentation**, branch **main**.
3. Map the content space to the **repository root (`./`)**, not `/docs`. The published repository already contains the local `docs` directory contents at its root.
4. Initially import **GitHub → GitBook** so an empty space cannot overwrite this content. Preserve existing content before replacing any existing space mapping.
5. GitBook reads `.gitbook.yaml`, `README.md`, and `SUMMARY.md`. If setup creates `docs.yaml`, retain its generated single-space mapping; do not introduce sections for other plugins.
6. Preview the content, then publish from GitBook when the site and domain are approved.

Do not use the discontinued legacy `gitbook-cli` to validate the current hosted product. Run local structural checks with `npm run validate`; visual verification requires the connected GitBook space.

## MRK identity

Use the supplied logo unchanged, without redrawing, recoloring, stretching, or cropping the emblem:

- Header icon and favicon: `images/brand/mrk-icon-rounded.svg`. This self-contained asset clips the unchanged original PNG to a rounded square with a 180px corner radius on a 644px canvas. Use it for both light and dark modes in GitBook's Icon controls, not in the homepage body.
- Original animation: `images/brand/mrk-original.gif`. Retain the source asset, but do not display a logo or animation in the homepage body.
- Site title: **MRK Doctor**. Brand owner: **MRK Studios**.
- Page icons are configured in frontmatter. Use a consistent regular icon style if the plan offers it.

In the site's **Customization** panel, apply this palette to the matching controls available on the selected plan:

| Role | Color |
| --- | --- |
| Primary brand | `#A800C7` |
| Bright accent for dark surfaces | `#EB4DFF` |
| Deep purple background | `#16051F` |
| Purple surface | `#2C063E` |
| Pale text | `#F9D9FF` |
| Light background | `#FDF8FF` |

Choose dark appearance by default while allowing light mode if supported. Use **Manrope** for headings and **DM Sans** for body text where custom font controls are available. Keep GitBook's native layout and code typography.

These are customization targets, not settings applied by `.gitbook.yaml`. Custom logos, fonts, icon weights, and advanced themes depend on the GitBook plan. Do not purchase or upgrade automatically. If a control is unavailable, report the limitation; do not add an inline logo as a substitute.

No custom CSS or injected JavaScript is required. The homepage uses native cards, buttons, and an evidence-led reading path.

## Review before publishing

- Navigation contains only MRK Doctor, support pages, and legal notices.
- All 29 public pages display an icon and open correctly.
- Installation renders steps and an unchanged shell-output example.
- Dashboard instructions cover secure access without publishing internal APIs or implementation details.
- Security warnings remain visible; card titles make sense without recognizing pictograms.
- Check light/dark appearance and mobile navigation.
- Confirm the logo is undistorted and animated only when explicitly opened.

Official references: [Git Sync configuration](https://gitbook.com/docs/docs-as-code/git-sync/content-configuration), [site customization](https://gitbook.com/docs/manage-your-site/customization).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = file => fs.readFileSync(path.resolve(root, file), 'utf8').replace(/\r\n/g, '\n');
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
function walk(dir) {
  return fs.readdirSync(path.resolve(root, dir), {withFileTypes:true}).flatMap(entry => {
    if (['node_modules', '.git'].includes(entry.name)) return [];
    const file = path.posix.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}
const files = walk('.');
const summary = read('SUMMARY.md');
const pages = [...summary.matchAll(/^\* \[[^\]]+\]\(([^)]+)\)$/gm)].map(m => m[1]);
const locales = ['es','ru','de','fr','pt-BR','pl','tr','zh','id','it','vi','nl','ko','cs','th','hu','ar','ja','uk','sv'];
const localizedPrefix = new RegExp(`^(?:${locales.join('|')})/`);
const sourcePages = pages.filter(file => !localizedPrefix.test(file));
const localizedPages = locales.flatMap(locale => sourcePages.map(file => `${locale}/${file}`));
const contentPages = [...new Set([...pages, ...localizedPages])];
check(pages.length > 0, 'SUMMARY.md has no pages');
check(new Set(pages).size === pages.length, 'Duplicate pages in SUMMARY.md');
check(pages[0] === 'README.md', 'Homepage must be the first page');
check(!files.some(f => f.endsWith('.mdx')), 'MDX files remain');
check(!files.includes('docs.json') && !files.includes('style.css'), 'Old platform configuration remains');
for (const file of files.filter(f => f.startsWith('mrk-doctor/') && f.endsWith('.md'))) {
  check(pages.includes(file), `Unlisted technical page: ${file}`);
}
for (const file of ['changelog.md','support.md','privacy.md','terms.md']) check(pages.includes(file), `Unlisted public page: ${file}`);
for (const locale of locales) {
  check(pages.includes(`${locale}/README.md`), `Missing ${locale} language entry in SUMMARY.md`);
  check(files.includes(`${locale}/SUMMARY.md`), `Missing ${locale}/SUMMARY.md`);
  if (files.includes(`${locale}/SUMMARY.md`)) {
    const localizedSummary = read(`${locale}/SUMMARY.md`);
    const localizedTargets = [...localizedSummary.matchAll(/^\* \[[^\]]+\]\(([^)]+)\)$/gm)].map(m => m[1]);
    check(JSON.stringify(localizedTargets) === JSON.stringify(sourcePages), `${locale}/SUMMARY.md does not mirror the English source tree`);
  }
}
const removeCode = text => text.replace(/^[ \t]*```[^\n]*\n[\s\S]*?^[ \t]*```[ \t]*$/gm, '').replace(/`[^`\n]+`/g, '');
const slug = heading => heading.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^\p{L}\p{N}\s-]/gu, '').trim().replace(/\s/g, '-');
function checkLink(file, url) {
  if (/^(?:[a-z]+:|\/\/)/i.test(url)) return;
  const [pathname, anchor] = url.split('#');
  const clean = pathname.split('?')[0];
  check(!clean.startsWith('/'), `${file}: root-relative link ${url}`);
  const resolved = path.resolve(root, path.dirname(file), decodeURIComponent(clean || path.basename(file)));
  check(resolved === root || resolved.startsWith(root + path.sep), `${file}: link escapes documentation: ${url}`);
  if (!fs.existsSync(resolved)) { errors.push(`${file}: missing target ${url}`); return; }
  if (anchor && resolved.endsWith('.md')) {
    const content = removeCode(fs.readFileSync(resolved, 'utf8'));
    const anchors = [...content.matchAll(/^#{1,6}\s+(.+)$/gm)].map(m => slug(m[1]));
    const explicit = [...content.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
    check([...anchors, ...explicit].includes(decodeURIComponent(anchor)), `${file}: missing anchor ${url}`);
  }
}
for (const file of contentPages) {
  if (!files.includes(file)) { errors.push(`Missing page: ${file}`); continue; }
  const content = read(file);
  const frontmatter = content.match(/^---\n([\s\S]*?)\n---\n/);
  check(!!frontmatter, `${file}: missing frontmatter`);
  check(/^icon: [a-z][a-z0-9-]*$/m.test(frontmatter?.[1] || ''), `${file}: missing icon`);
  check(/^description: .+/m.test(frontmatter?.[1] || ''), `${file}: missing description`);
  const body = removeCode(content.replace(/^---\n[\s\S]*?\n---\n/, ''));
  check(!/\[\]\(/.test(body), `${file}: empty Markdown link label`);
  if (localizedPrefix.test(file)) {
    check(/Machine-translated edition/.test(content), `${file}: missing translation notice`);
    check(!/XQZPH|<unk>|NEXT_PUBLIC_DOCTOR_(?:API|WS)|\b7855\b/i.test(content), `${file}: placeholder or obsolete dashboard deployment instruction remains`);
    if (file.endsWith('/README.md')) check(/^# MRK Doctor$/m.test(content), `${file}: product title must remain MRK Doctor`);
  }
  check(!/com\.mrkdoctor|src\/main|CREATE TABLE|PBKDF2|ObjectMapper|SHA-256|universal_metrics|confidence weights|database schema|correlation pipeline/i.test(content), `${file}: internal-only implementation content`);
  check([...body.matchAll(/^# /gm)].length === 1, `${file}: expected one H1 title`);
  check(!/<\/?(?:Card|CardGroup|Columns|Step|Steps|Snippet|Info|Note|Warning|Danger|Tip|CodeGroup)\b|className=|@@CODE/.test(body), `${file}: unconverted component`);
  const stack = [];
  for (const match of body.matchAll(/\{%\s*(\w+)[\s\S]*?%\}/g)) {
    const tag = match[1];
    if (['hint','stepper','step','tabs','tab'].includes(tag)) {
      if (tag === 'step') check(stack.at(-1) === 'stepper', `${file}: step outside stepper`);
      if (tag === 'tab') check(stack.at(-1) === 'tabs', `${file}: tab outside tabs`);
      stack.push(tag);
    } else if (tag.startsWith('end')) check(stack.pop() === tag.slice(3), `${file}: mismatched ${tag}`);
    else errors.push(`${file}: unexpected block ${tag}`);
  }
  check(stack.length === 0, `${file}: unclosed blocks ${stack}`);
  check([...content.matchAll(/^\s*```/gm)].length % 2 === 0, `${file}: unbalanced code fences`);
  for (const match of body.matchAll(/!?\[[^\]\n]*\]\(([^\s)]+)\)|(?:href|src)="([^"]+)"/g)) checkLink(file, match[1] || match[2]);
  for (const match of body.matchAll(/<img\b[^>]*>/g)) check(/alt="[^"]+"/.test(match[0]), `${file}: image lacks alt text`);
}
const config = read('.gitbook.yaml');
check(/^root: \.\/$/m.test(config), 'GitBook root must be ./');
check(/readme: README.md/.test(config) && /summary: SUMMARY.md/.test(config), 'Missing content mapping');
for (const match of config.matchAll(/^  [^\n:]+: (\S+\.md)$/gm)) check(files.includes(match[1]), `GitBook config target missing: ${match[1]}`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else console.log(`PASS: ${contentPages.length} public pages across English and ${locales.length} localized editions; icons, navigation, links, anchors, assets, and native blocks checked.`);

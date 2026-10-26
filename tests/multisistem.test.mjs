// Calculatorul multi-sistem (v2.0.0): pitagoreic / caldeean / ordinal / gematria ebraică. Rulare: node tests/multisistem.test.mjs
import {createRequire} from 'module'; import path from 'node:path'; import {fileURLToPath} from 'node:url';
const require = createRequire(process.env.PW_ROOT || import.meta.url); const {chromium} = require('playwright');
const HERE = path.dirname(fileURLToPath(import.meta.url)); const FILE = 'file://' + path.join(HERE, '..', 'index.html');
let ok = 0, bad = 0; const t = (n, c, x) => { if (c) { ok++; console.log('  ok  ', n); } else { bad++; console.log('  FAIL', n, x ?? ''); } };
const b = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox']});
const ctx = await b.newContext({viewport: {width: 1100, height: 900}, locale: 'en-US'});
const net = []; await ctx.route(/^https?:/, r => { net.push(r.request().url()); r.abort(); });
const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto(FILE); await p.waitForTimeout(600); await p.selectOption('#langSel', 'en');
await p.click('a[data-target="sisteme"]');
t('panou vizibil', await p.isVisible('#sisteme'));
await p.fill('#msName', 'Abc'); await p.click('#msForm button[type=submit]');
const rows = await p.$$eval('#msOut table.calc-out:first-of-type tbody tr', trs => trs.map(r => [r.cells[0].textContent, r.cells[1].textContent]));
// ABC: pitagoreic 1+2+3=6; caldeean 1+2+3=6; ordinal 1+2+3=6 -> folosește un nume cu diferențe
t('trei sisteme afișate', rows.length === 3, rows);
await p.fill('#msName', 'Ion Popescu'); await p.click('#msForm button[type=submit]');
const r2 = await p.$$eval('#msOut table.calc-out:first-of-type tbody tr', trs => trs.map(r => +r.cells[1].textContent));
// ION=9+6+5=20? pitagoreic: I9 O6 N5 | P7 O6 P7 E5 S1 C3 U3 E5
const pyth = (s) => [...s.toUpperCase()].reduce((a, c) => a + ((c.charCodeAt(0) - 65) % 9) + 1, 0);
const chal = [1,2,3,4,5,8,3,5,1,1,2,3,4,5,7,8,1,2,3,4,6,6,6,5,1,7];
const chalSum = s => [...s.toUpperCase()].reduce((a, c) => a + chal[c.charCodeAt(0) - 65], 0);
const ordSum = s => [...s.toUpperCase()].reduce((a, c) => a + c.charCodeAt(0) - 64, 0);
t('sume pitagoreic/caldeean/ordinal corecte', r2[0] === pyth('IONPOPESCU') && r2[1] === chalSum('IONPOPESCU') && r2[2] === ordSum('IONPOPESCU'), r2);
t('cele trei sume diferă între ele', new Set(r2).size === 3, r2);
// gematria: שלום = 300+30+6+40 = 376 (final mem = 40)
await p.fill('#msName', ''); await p.fill('#msHeb', 'שלום'); await p.click('#msForm button[type=submit]');
const g = await p.$$eval('#msOut table.calc-out tbody tr', trs => trs.map(r => [r.cells[0].textContent, r.cells[1].textContent]));
t('gematria שלום = 376', g[0] && g[0][1] === '376', g);
t('mispar katan שלום = 3+3+6+4 = 16 -> 7', g[1] && g[1][1] === '7', g);
// paleta
await p.fill('#msHeb', ''); await p.click('.heb-key >> nth=0'); await p.click('.heb-key >> nth=21');
t('paleta adaugă litere (א…ת)', (await p.inputValue('#msHeb')) === 'את');
await p.click('#msForm button[type=submit]');
t('אית/את = 1 + 400 = 401', /401/.test(await p.textContent('#msOut')));
t('avertisment informativ prezent', /not a science and not a forecast/.test(await p.textContent('#msOut')));
// intrări invalide
await p.fill('#msName', ''); await p.fill('#msHeb', 'xyz'); await p.click('#msForm button[type=submit]');
t('mesaj pentru text non-ebraic', /No Hebrew letters/.test(await p.textContent('#msOut')));
await p.fill('#msHeb', ''); await p.click('#msForm button[type=submit]');
t('mesaj pentru câmpuri goale', /Type a Latin name/.test(await p.textContent('#msOut')));
await p.fill('#msName', 'Ion'); await p.click('#msForm button[type=submit]'); await p.selectOption('#langSel', 'ro');
t('RO: tabel retradus', /Sistem/.test(await p.textContent('#msOut')) && /Pitagoreic/.test(await p.textContent('#msOut')));
t('fără erori/CSP', errs.length === 0, errs); t('0 cereri de rețea', net.length === 0, net);
await b.close(); console.log(`\n${ok} reușite, ${bad} eșuate`); process.exit(bad ? 1 : 0);

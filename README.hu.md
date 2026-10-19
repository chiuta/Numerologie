# Numerológia — interaktív tanfolyam

[English](README.md) · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · **Magyar**

**Verzió:** 1.2.0 · **Utolsó frissítés:** 2026-10-19

Román nyelvű tanfolyam a numerológiáról (pitagoreus, káldeai és kabbalisztikus rendszer), helyi számológéppel, egyetlen HTML-fájlban.

**Online alkalmazás:** https://chiuta.github.io/Numerologie/

![Képernyőkép](screenshot.png)

## Mi ez

Interaktív tanfolyam a numerológiáról mint szimbolikus hagyományról: történet, négy szint (alapszámok, névnumerológia, összehasonlított rendszerek, ciklusok és kompatibilitások), gyakorlatok, összehasonlító melléklet, szószedet, napló, önértékelés és egy számológép, amely a tanfolyam szabályait alkalmazza. A numerológia hagyományként és szórakozásként jelenik meg, tudományos igazolás nélkül.

## Funkciók

Szakaszok: Bevezetés, Történet, a négy szint, Gyakorlati alkalmazások, Számológép, Összehasonlított hagyományok, Szószedet, Napló, Önértékelés.

A kódban ellenőrizve és a böngészőben tesztelve:
- Helyi számológép: Életút-szám, Személyes év, Kifejezés-szám, Belső vágy száma (magánhangzók) és Személyiségszám (mássalhangzók). Pitagoreus A–Z táblázat (A,J,S=1 … I,R=9), a 11/22/33 mesterszámok megmaradnak a dátum és a név redukálásakor, a Személyes évet 1–9-re redukálja. A román ékezetes betűket az alapbetűként számolja (ă, â → A; î → I; ș, ț → S, T; valamint a cedillás változatok); az Y mássalhangzó. A számológép megmutatja a felhasznált betűket és értékeket, és jelzi, ha a nap/hónap/év külön redukálásának módszere más eredményt ad.
- A számológép hozzáadja a Születésnap-számot (a redukált nap, 11-nél, 22-nél megállva) és az Érettségi számot (Életút + Kifejezés, 11-nél, 22-nél, 33-nál megállva) — hagyományos konvenciók, nem mérések; a „Eredmények másolása” és a „Hozzáadás a naplóhoz” gombok (csak a számszerű eredmények, név és dátum nélkül) az oldalon maradnak.
- A számológép hozzáadja a név értékét a káldeai rendszerben (hagyományos, hangalapú táblázat, a 9-es számjegy nélkül; összetett összeg → redukált), a pitagoreus Kifejezés mellett megjelenítve, a betűk részletezésével.
- Automatikus sötét mód (`prefers-color-scheme: dark`; nyomtatáskor visszatér a világos palettához).
- Ékezetfüggetlen keresés; közvetlen hivatkozás a szakaszokra (`#calculator`, `#quiz`).
- A napló letölthető `.txt` fájlként; 10 kérdéses teszt kevert válaszsorrenddel (Fisher–Yates).
- Nyomtatás (az aktuális szakasz), hivatkozás megosztása/másolása, teljes képernyő, a képernyő ébren tartása (ahol a böngésző támogatja).

## Használati útmutató

1. Válassz egy szakaszt a menüből (mobilon koppints a ☰ jelre).
2. Haladj végig a szinteken és a gyakorlatokon.
3. A „Számológépben” írd be a nevet és/vagy a születési dátumot (a választóból kapott dátumformátum vagy `nap.hónap.év`), ellenőrizd az évet a Személyes évhez, és nyomd meg a „Számítás” gombot.
4. Jegyezd fel a megfigyeléseidet a „Naplóban”, és az oldal bezárása előtt töltsd le `.txt` fájlként.
5. Oldd meg az „Önértékelést”; a „Teszt újraindítása” összekeveri a válaszokat.

## Adatvédelem és hálózat

- Tárolás: nem használ `localStorage`-ot, `sessionStorage`-ot, IndexedDB-t vagy sütiket. A számológépbe beírt név és dátum az oldalon marad, és nem kerül elküldésre vagy mentésre.
- Hálózat: nincs külső kérés (nincs betűtípus, szkript, kép, analitika). A CSP `default-src 'none'` blokkolja a kapcsolatokat. Nincsenek külső hivatkozások.
- Engedélyek: betöltéskor semmit sem kér; a gombok megnyomásakor használható a teljes képernyő, a wake lock, a vágólap (hivatkozás másolása) és mobilon a rezgés a teszt során.

## Korlátok és figyelmeztetések

- A numerológia szimbolikus hagyomány, amelyet elmélkedésre és szórakozásra használnak. Nincs tudományos bizonyíték arra, hogy a név vagy a születési dátum meghatározná a jellemet, a kapcsolatokat vagy a sorsot.
- A tartalom nem helyettesíti az orvosi, pszichológiai, jogi vagy pénzügyi tanácsadást; ne hozz egészségre, pénzre, kapcsolatokra vagy munkavállalásra vonatkozó döntéseket egy számítás alapján.
- Nincs egységes számítási konvenció; más források más eredményt adhatnak (az Y kezelése, az ékezetes betűk kezelése, a redukció sorrendje).
- A káldeai rendszer babiloni eredete és Pitagorasz közvetlen kapcsolata a modern rendszerrel hagyományos tulajdonítások, nem megerősített történeti tények; a román gyakorlók említése tájékoztató jellegű, értékelés nélkül.

## Futtatás helyben / offline

Töltsd le az `index.html` fájlt, és nyisd meg a böngészőben; internet nélkül működik.

## Licenc

MIT — lásd a LICENSE fájlt.

## Előzmények / Changelog

### 1.2.0 — 2026-10-19
- Opcionális „Bővített elemzés a NumeroLogIA-ban” hivatkozás (új lap, `rel="noopener noreferrer"`), csak kifejezett kattintásra: a név és a születési dátum a NumeroLogIA címének `#` töredékében jelenik meg (nem kerülnek elküldésre a hálózaton, de a böngésző előzményeiben megmaradnak); látható megjegyzés a hivatkozás mellett. A „sehová nem kerülnek elküldésre” állítást ennek megfelelően módosítottuk.

### 1.1.0 — 2026-10-14
- Biztonsági mentés és adatcímkézés (fff-kit).

### 1.0.0 — 2026-10-12
- A verzió és az utolsó frissítés dátuma megjelenik az alkalmazásban (lábléc).

### 2026. október 11. (7. kör)
- Új: sötét mód (a paletta a `--ink`-et háttérként is használta; a rögzített hátterek `--navy`-ra váltottak, a nyomtatás pedig a világos palettát erőlteti); axe-core-ral tesztelve mind a 13 szakaszon, világos és sötét sémában, 1280 és 360 px-en.
- Új: a név káldeai értéke a számológépben.
- Javítva: a címsorrend a „Gyakorlati alkalmazásokban” (h2 → h4; axe `heading-order`).

### 2026. október 11. (6. kör)
- Biztonság: CSP `script-src` az egyetlen szkript sha256 hash-e alapján, `'unsafe-inline'` nélkül a szkriptekhez.
- Hozzáadva: Születésnap-szám és Érettségi szám a számológépben; eredmények másolása és hozzáadása a Naplóhoz.

### 2026. október 11.
- Javítva: az oldalnak most van 1. szintű címsora a fő területen (mobilon az oldalmenü rejtett, így a menüben lévő cím már nem számított); a menüben lévő cím ugyanolyan megjelenésű dekoratív elem. 0 axe-core hiba 1280 és 360 px-en.
- Ellenőrizve: a számológép dinamikusan kiszámított aktuális évet használ (Személyes év 2026 2026.10.11-én).

## Szerző

Alexio — Alexandru-Ionuț Chiuță, kapcsolat: alexio@trom.tf

## Összefoglaló

Egyetlen fájlból álló, offline, román nyelvű tanfolyam a numerológiáról (pitagoreus, káldeai, kabbalisztikus hagyományok) helyi számológéppel az életúthoz, a személyes évhez és a névszámokhoz (kifejezés, belső vágy, személyiség), amely kezeli a mesterszámokat és a román ékezetes betűket. Nincs tárolás, nincsenek külső kérések, nincs telemetria. Hagyományként és szórakozásként jelenik meg, tudományos igazolás nélkül; nem helyettesíti a szakmai tanácsadást. Licenc: MIT (lásd a LICENSE fájlt).

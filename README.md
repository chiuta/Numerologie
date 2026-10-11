# Numerologie — curs interactiv

Curs în română despre numerologie (sisteme pitagoreic, caldeean, kabbalistic), cu calculator local, într-un singur fișier HTML.

**Live:** https://chiuta.github.io/Numerologie/

![Captura de ecran](screenshot.png)

**Ultima actualizare:** 11 octombrie 2026

## Ce este

Un curs interactiv despre numerologie ca tradiție simbolică: istoric, patru niveluri (numere de bază, numerologia numelui, sisteme comparate, cicluri și compatibilități), exerciții, anexă comparativă, glosar, jurnal, autoevaluare și un calculator care aplică regulile din curs. Numerologia este prezentată ca tradiție și divertisment, fără validare științifică.

## Funcții

Secțiuni: Introducere, Istoric, cele patru niveluri, Aplicații practice, Calculator, Tradiții comparate, Glosar, Jurnal, Autoevaluare.

Verificate în cod și testate în browser:
- Calculator local: Numărul Drumului Vieții, Anul Personal, Numărul Expresiei, al Dorinței Interioare (vocale) și al Personalității (consoane). Tabel pitagoreic A–Z (A,J,S=1 … I,R=9), numere maestre 11/22/33 păstrate la reducerea datei și a numelui, Anul Personal redus la 1–9. Diacriticele românești se calculează ca litera de bază (ă, â → A; î → I; ș, ț → S, T; și variantele cu sedilă); Y este consoană. Calculatorul arată literele și valorile folosite și semnalează când metoda cu reducere separată a zilei/lunii/anului dă alt rezultat.
- Căutare fără sensibilitate la diacritice; link direct la secțiuni (`#calculator`, `#quiz`).
- Jurnal descărcabil `.txt`; test de 10 întrebări cu ordinea răspunsurilor amestecată (Fisher–Yates).
- Printare (secțiunea curentă), distribuire/copiere link, ecran complet, păstrare ecran activ (unde browserul le acceptă).

## Manual de utilizare

1. Alege o secțiune din meniu (pe mobil apasă ☰).
2. Parcurge nivelurile și exercițiile.
3. În „Calculator” scrie numele și/sau data nașterii (format de dată din selector sau `zi.lună.an`), verifică anul pentru Anul Personal și apasă „Calculează”.
4. Notează observațiile în „Jurnal” și descarcă-le ca `.txt` înainte de a închide pagina.
5. Rezolvă „Autoevaluarea”; „Reia testul” amestecă răspunsurile.

## Confidențialitate și rețea

- Stocare: nu folosește `localStorage`, `sessionStorage`, IndexedDB sau cookie-uri. Numele și data introduse în calculator rămân în pagină și nu sunt trimise sau salvate.
- Rețea: nicio cerere externă (fără fonturi, scripturi, imagini, analitice). CSP `default-src 'none'` blochează conexiunile. Nu există linkuri externe.
- Permisiuni: nu cere nimic la încărcare; la apăsarea butoanelor pot fi folosite ecran complet, wake lock, clipboard (copiere link) și vibrații pe mobil la test.

## Limite și avertismente

- Numerologia este o tradiție simbolică, folosită ca reflecție și divertisment. Nu există dovezi științifice că numele sau data nașterii determină caracterul, relațiile sau destinul.
- Conținutul nu înlocuiește sfatul medical, psihologic, juridic sau financiar; nu lua decizii despre sănătate, bani, relații sau angajări pe baza unui calcul.
- Nu există o convenție unică de calcul; alte surse pot da alte rezultate (tratarea lui Y, a diacriticelor, ordinea reducerii).
- Originea babiloniană a sistemului caldeean și legătura directă a lui Pitagora cu sistemul modern sunt atribuiri tradiționale, nu fapte istorice confirmate; menționarea unor practicieni români este informativă, fără evaluare.

## Rulare locală / offline

Descarcă `index.html` și deschide-l în browser; funcționează fără internet.

## Licență

Licența nu este încă declarată.

## Istoric / Changelog

### 11 octombrie 2026
- Reparat: pagina are acum un titlu de nivel 1 în zona principală (pe mobil meniul lateral este ascuns, deci titlul din meniu nu mai conta); titlul din meniu este un element decorativ cu același aspect. 0 violări axe-core la 1280 și 360 px.
- Verificat: calculatorul folosește anul curent calculat dinamic (Anul Personal 2026 la 11.10.2026).

## Autor

Alexio — Alexandru-Ionuț Chiuță, contact: alexio@trom.tf

## English summary

A single-file, offline Romanian-language course on numerology (Pythagorean, Chaldean, Kabbalistic traditions) with a local calculator for life path, personal year and name numbers (expression, soul urge, personality), handling master numbers and Romanian diacritics. No storage, no external requests, no telemetry. Presented as tradition and entertainment with no scientific validation; not a substitute for professional advice. License not yet declared.

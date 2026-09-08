# Figma rematch — remaining work

Source of truth: [final canvas](https://www.figma.com/design/G6lLn4pUGRVgCKLBv0ZE2N/My--Copy-?node-id=111-2)

| Page | Figma node | Size |
| --- | --- | --- |
| Home | `196:2` | 1440 × 2260 |
| Work | `185:2504` | 1440 × 1822 |
| About | `185:1596` | 1440 × 1822 |

There is **no Contact or Gallery frame** on this canvas. Gallery was removed on purpose. Contact still exists in the app as an extra page.

Local URL: `http://localhost:5173/drishti-s-portfolio/`

---

## Status

JSX already has a lot of the right content (project copy, hobby icons, stat icons, skill labels, work title + category). **CSS has not been rematched yet**, so the live site still looks off.

Assets that are already in `public/assets/` and should be used (not redrawn):

- Home: `hero-desk.png`, `hero-character.png`, `stat-palette.png`, `stat-folder.png`, `stat-chat.png`, project thumbs, polaroids, `tools.png`, `companies.png`, `badge-hmm.png`, `skill-tail.svg`
- Work: `work-thinkly.png`, `work-senior-sakhi.png`, `work-magazines.png`, `work-social.png`
- About: `about-character.png`, hobby icon PNGs, `tools-about.png`, `badge-thats-me.png`

---

## Home

### Hero

- [ ] Layer the desk collage and the standing character the way Figma does:
  - desk `196:163` — 847 × 449 at (576, 158)
  - character `196:180` — 344 × 622 at (827, 103)
- [ ] CSS for `.hero-art`, `.hero-scene`, `.hero-character` is still missing, so the two images currently stack as normal flow
- [ ] Title type:
  - lines 1–2: Source Serif, 48px / 56px
  - “Welcome to my little corner”: 40px
  - “Drishti”: Caveat (Buttercup in Figma), **64px**, pink `#eb6a7f`
- [ ] Confirm the overlay in the browser. `hero-desk.png` already includes a photo of the person; if two figures show, drop the character overlay and keep the desk only

### Stats

- [ ] Style `.stat-icon` (39 × 39 clip). Markup uses the clay PNGs; CSS still has unused `.stat-square`
- [ ] Numbers: serif ~43px (Figma uses Playfair Display Medium 42.8px)
- [ ] Bar: 1017 × 131, 19px radius, sits overlapping the bottom of the hero

### Featured projects

- [ ] Keep order: Thinkly, Senior Sakshi, Magazines, Marketing Assets
- [ ] Thumb crop: 280 × 183 clip. Thinkly art is 280 × 280 offset upward (~−25px)
- [ ] Heading stays serif ~28px; “View All” is the small cream pill on the right

### Skill chips

- [ ] Speech bubbles, not plain rounded pills
  - 145 × 50, gap 32px, one row
  - radius `16px 16px 16px 0`
  - bottom-left tail (`skill-tail.svg` or `::after`)
- [ ] Soft shadow, not the current heavy 3px drop shadow
- [ ] Colors already match: UI/UX `#e6d8ed`, Brand Identity `#fee4db`, Social Media `#e2ebf3`, Publication `#e5ead4`, Infographics `#e6d8ed`, Visual `#fce4c4`, Illustration `#fee2d0`

### Footer block

- [ ] Replace the 2-column grid with a single relative stage (~620px tall)
- [ ] Polaroids on the left (Figma frames `196:1531`, `196:4`, `196:1527`, `196:1523`). One already has “Usability Testing” on the photo
- [ ] “Know More” copy more centered (`598, 1444`, 425px wide)
- [ ] Hmm badge at right (`1060, 1433`, 219 × 219)
- [ ] Tools row under the badge (`832, 1718`, 577 × 82)
- [ ] “Past Associations” is **script**, 32px, letter-spacing ~2.6px — not Poppins 28px bold

---

## Work

Markup already splits title and category. CSS still treats them as one block.

- [ ] Style `.work-category`: grey `#6b605c`, medium weight
  - featured: 20px under 32px bold “Thinkly”
  - cards: ~14px under ~22px bold titles
- [ ] Featured image crop: 649 × 649 image inside a 371px-tall clip, `top: -75px`
- [ ] Featured card: 1184 × 371, 28px radius, shadow `0 4.3px 5.73px rgba(0,0,0,0.25)`
- [ ] Grid cards: 376 × 498, media 376 × 312
- [ ] “loved” is Caveat **64px** pink, not the same size as the Poppins 49px heading
- [ ] Heading stays Poppins (not serif)

---

## About

- [ ] “Me” is Caveat **49px** pink — remove `.huge` (92px)
- [ ] Character is a large left overlay (`185:1673`, 1024 × 1536 at −53, 255), behind the type (`z-index`)
- [ ] Hobby tiles: 213 × 88, radius ~23px, 2 × 4 grid, gap 29px
- [ ] Hobby icons: 40 × 38 clips, **no cream square** behind them (`.hobby-icon` still has `background: var(--paper-2)`)
- [ ] Tools row: use `tools-about.png` (`185:7216`, 600 × 85). Add `.about-tools-row` CSS (class exists in JSX, not in CSS)
- [ ] Lead text sits at the right (~872px), 16–18px, 537px wide

---

## Shared chrome

- [ ] Sidebar on **Home** in Figma is Home / Work / About only. Work and About frames still show leftover Gallery / Contact
- [ ] Decide: keep Contact in the live nav, or match Home and drop it
- [ ] Social icons are **67px** in Figma; CSS still uses 48px
- [ ] Do not bring Gallery back

---

## Cleanup after CSS lands

- [ ] Delete unused `src/hobbyIcons.jsx` if About no longer imports it
- [ ] Delete temp download scripts (`tmp-dl.mjs`, `tmp-home.png`, etc.)
- [ ] Confirm `src/pages/Gallery.jsx` stays gone (OneDrive/undo has restored it before)
- [ ] Rebuild and hard-refresh `/drishti-s-portfolio/`
- [ ] Check Home, Work, About (and Contact if it stays) at desktop 1440 and a mobile width

---

## Suggested order

1. Home CSS: skill bubbles, stats icons, hero layering, footer stage, Past Associations script
2. Work CSS: category line, featured crop, “loved” size
3. About CSS: “Me” size, hobby icon clips, tools row, character placement
4. Sidebar social size + Contact decision
5. Browser pass against the three Figma frames

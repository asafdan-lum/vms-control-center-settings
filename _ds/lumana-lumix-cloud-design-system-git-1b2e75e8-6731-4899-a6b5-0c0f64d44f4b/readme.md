# Lumana Design System

The design language of **Lumana** — an AI video-security platform — as shipped in the
**Lumix Cloud** product family.

Lumana sells cameras, on-premise "Core" appliances and a cloud application that watches the
video for you: it detects people, vehicles, weapons, line crossings, loitering, tailgating and
occupancy, raises alerts, and lets an operator search hours of footage in plain language. The
brand tagline is **"See what matters."**

The product is an *operations console*, not a consumer app. It is used all day, on large
monitors, often in a security room. That single fact explains almost every design decision in
here: high information density, low chrome, a 4px corner radius everywhere, near-white
surfaces, one accent colour, and colour reserved almost exclusively for **state** — green
online, red offline, amber unhealthy.

---

## Sources

Everything in this system was read out of one private monorepo:

- **`lumanaai/lumix-cloud`** (branch `dev`) — https://github.com/lumanaai/lumix-cloud

The design-relevant parts are all under `frontend/`:

| Path | What it is |
| --- | --- |
| `frontend/projects/ui/src/lib/styles/` | The shared style layer: `colors.scss`, `fonts.scss`, `font-family.scss`, `icons.scss`, `ui-input.scss`, `ui-modal.scss` |
| `frontend/projects/ui/src/lib/ui-kit/` | ~90 Angular component families — the authoritative component inventory |
| `frontend/projects/ui/src/lib/assets/fonts/` | Satoshi and the `lumix-icons` IcoMoon font |
| `frontend/projects/web/src/app/theme/` | Web-client theme layer: `ui-table.scss`, `ui-grid.scss`, `ui-icons.scss`, `colors.scss` |
| `frontend/projects/web/src/app/pages/` | The real product screens (`location-v2`, `alerts-v2`, `wall-v2`, `search`, …) |
| `frontend/projects/web/src/assets/i18n/en.json` | Every string in the product — the source for the tone-of-voice rules below |
| `frontend/CLAUDE.md`, `CLAUDE.md` | The team's own written UI rules |

**Read those repos yourself when you can.** This design system captures the visual and verbal
system faithfully, but the codebase has far more component families, states and edge cases than
are reproduced here — see *Coverage & gaps* at the bottom.

`github.md` records the sync state and maps every file here back to its source paths.

### Products in the family

`frontend/projects/` contains several Angular apps sharing the same `ui` library:

| App | What it is | Covered here |
| --- | --- | --- |
| **web** | Lumana Cloud — the main operator console | ✅ UI kit |
| **control-center** | Internal admin / fleet operations console | ❌ |
| **parking** | Parking and traffic-violation product | ❌ |
| **site-planner** | Camera coverage planning tool | ❌ |
| **panic** | Mobile panic-button app | ❌ |
| **chat**, **demo** | AI chat surface and demo harness | ❌ |
| `standalone-pages/`, `auth0/universal-login/` | External upload, access-control and login pages | ❌ |

---

## Index

| File / folder | What's in it |
| --- | --- |
| `styles.css` | The single entry point. Import this and you get everything. |
| `tokens/colors.css` | Raw palette + ~200 semantic aliases (the real product API) |
| `tokens/dark.css` | Dark theme, applied via a `.dark-theme` wrapper |
| `tokens/typography.css` | The named type scale + `.ui-font-*` utility classes |
| `tokens/fonts.css` | Satoshi `@font-face` declarations |
| `tokens/icons.css` | `lumix-icons` `@font-face` + ~330 `ui-icon-*` classes |
| `tokens/spacing.css` | Spacing, radii, control heights, chrome dimensions, motion |
| `tokens/elevation.css` | Shadows, inset accents, blur |
| `tokens/base.css` | Resets plus `.ui-header`, `.ui-table`, `.ui-grid`, `.ui-modal` |
| `components/` | 36 React components in 6 groups (list below) |
| `guidelines/` | 25 specimen cards for the Design System tab |
| `ui_kits/lumana-cloud/` | Click-through recreation of the web console |
| `templates/cloud-screen/` | Starter template: the full console shell, ready to fill |
| `assets/` | Fonts, logos, illustrations, device artwork, imagery |
| `SKILL.md` | Agent Skill front-matter for use in Claude Code |
| `github.md` | Upstream sync record + screen map |

### Components

**core** — `Button`, `IconButton`, `Badge`, `Toggle`, `Avatar`, `Preloader`, `FilterChip`, `TagChip`, `CardLine`
**forms** — `Input`, `Search`, `Select`, `Checkbox`, `OptionToggle`, `Counter`
**feedback** — `Alert`, `Toaster`, `NoData`, `ConfirmDialog`, `SelectionSnackbar`
**navigation** — `HeaderBar`, `SegmentTabs`, `Sidebar`, `Dropdown`, `Submenu`
**video** — `CameraCard`, `DeviceStatus`, `CameraControls`, `PersonTile`, `Occupancy`
**data** — `DataTable`, `TableCard`, `Modal`, `Drawer` (+ `DrawerField`), `JsonViewer`

**Drawers:** every right-side panel uses `Drawer` — see `components/data/Drawer.prompt.md` for the rules and `templates/drawer/Drawer.dc.html` for the reference markup.

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, with a usage example).

---

## CONTENT FUNDAMENTALS

Lumana's copy is **plain, calm, operational English**. It sounds like a competent colleague
telling you what happened, not like marketing. All examples below are verbatim from
`web/src/assets/i18n/en.json`.

**Casing — sentence case, always.** Buttons, headers, labels, menu items, empty states.
"Add alert", not "Add Alert". The frontend rulebook explicitly bans
`text-transform: uppercase` on labels. The only uppercase in the product is small-caps-styled
column headers rendered at 12px/500 — and even those are written sentence case in the source.

**Person — second person, implicit imperative.** The product addresses the user as *you* and
talks about *your* things: "Add doors that appear on your cameras", "Add group that appear on
your cameras", "It helps save your bandwidth usage." The product never says "I". "We" appears
only in support/legal contexts.

**Instructions are imperative and start with a verb.** "Assign zones and policies to each
account." "Search and add people to exclude from the alert." "Create a building in order to
start adding floor plans." "Generate credentials to access the API programmatically."

**Empty states follow two fixed shapes:**
1. *Nothing exists yet* — say what the thing is **for**, then offer the create button.
   "Archives are the way to download and share video recordings."
   "Alerts are the way to receive live alerts from your edge."
   "Create reports to get a custom summary of events."
   "Collect evidence, organize data, and collaborate with your team in a single view."
2. *A query returned nothing* — say what to try, offer no button.
   "Try adjusting your search or filter." · "Try to search for a different name, period or type."
   "Try adjusting your filters or check back later for new synchronization data."

**Length.** Titles are 2–5 words. Descriptions are a single sentence, usually under 12 words,
and **frequently have no full stop** when they're a fragment ("Add doors that appear on your
cameras"). Full sentences do take a full stop.

**No exclamation marks. No emoji. Anywhere.** Not in the UI, not in the emails, not in the
i18n files. Security operators do not want cheer.

**Tooltips explain the affordance, not the noun.** "Click to view issue details."
"Browse available cores to connect." "Add tags to quickly find data using filters."

**Destructive copy names the object.** "Are you sure you want to remove organization {{name}}?"
Never a bare "Are you sure?".

**Domain vocabulary — use these exact words:**

| Term | Means |
| --- | --- |
| **Core** | The on-prem appliance (formerly "edge" — both appear; prefer *Core* in new work) |
| **Wall** | A multi-camera video wall layout |
| **Alert** | A configured rule; an **alert event** is one firing of it |
| **Alert group** | A set of alerts sharing recipients/schedule |
| **Case** | An investigation folder holding clips, objects and comments |
| **Archive** | A saved, downloadable and shareable video clip |
| **Location / sub-location** | Site hierarchy; devices hang off locations |
| **Object** | Anything the AI detects — person, vehicle, plate, weapon, fire |
| **Custom object** | A user-trained object class |
| **Zone / region** | A drawn area on a camera view |
| **Workflow** | A node graph automating a response to events |

**Localisation is real.** English, Spanish and Hebrew ship, and Hebrew means RTL. Never
hard-code direction-dependent layout; never bake text into images.

---

## VISUAL FOUNDATIONS

### The shape of the system

Lumana is a **low-contrast, low-radius, low-shadow, high-density** system. If in doubt: make it
flatter, tighter and quieter than you think.

### Colour

- **One accent: `#4367f6`** (`--color-primary-500`). It is the only brand colour in the UI. It
  marks the primary action, the selected state, links and focus. Nothing decorative is blue.
- **A ten-step neutral ramp does the heavy lifting** — `#fcfcfd` through `#101828`. Four of
  those near-whites are used as distinct *surfaces*: page (`#fff`), submenu/hover (`#fcfcfd`),
  table header (`#f9fafb`), segment track (`#f2f4f7`). Borders are `#eaecf0`; a 1px hairline is
  the default separator everywhere.
- **Colour means state, not decoration.** Green `#22c55e` online, red `#dc2626` offline/alert,
  amber `#eab308` unhealthy/warning, blue `#3b82f6` informational. A toggle turning on is green,
  not blue — that is deliberate.
- **Accent hues** (amber, orange, teal, violet, pink, indigo, rose) exist only as chip and
  category fills, always at `-subtle` background strength with a `-bold` text pairing.
- **Never hard-code a hex.** The codebase's own rule: "Only CSS variables from colors.scss."
- **A full dark theme exists**, applied with a `.dark-theme` class. Surfaces invert to
  `#101828` / `#161f31` / `#212d3f`; the primary lightens to `#748ced` and selected text to
  `#9bacf2`. Build both when you build product UI.
- **No gradients in the UI.** The only gradients in the whole brand are inside the Lumix.ai
  logo mark. No gradient backgrounds, no gradient buttons, ever.

### Type

**Satoshi** is the only typeface, everywhere, in every app. Monospace appears in exactly one
place: JSON/payload viewers.

The scale is **named, not numeric** — the SCSS mixin is `fonts.font(m)`, `fonts.font(xs)`.
Reproduced as `--ui-font-<key>-{size,weight,height}` and `.ui-font-<key>` classes:

| Key | Size / line / weight | Where |
| --- | --- | --- |
| `xxl` | 64/64/500 | Hero metrics |
| `page-title2` | 36/44/400 | Marketing-scale headings |
| `xxxl-medium` | 32/40/500 | Large numbers |
| `page-title` | 24/32/500 | Page titles |
| `h2` / `lx` | 20/32/500 · 20/28/500 | Section headings |
| `page-title3` | 18/28/400 | Sub-headings |
| `l` / `lxx` | 16/24/500 · 16/24/400 | Emphasis body |
| **`m`** | **14/24/500** | **Labels, buttons, menu items — the workhorse** |
| **`xm`** | **14/24/400** | **Body copy — the other workhorse** |
| `xxm` | 14/20/400 | Header and breadcrumb text |
| `s` | 12/20/500 | Table headers, chips, metadata labels |
| `xs` | 12/20/400 | Timestamps, secondary metadata |
| `badge-label` | 12/24/600 | Badges |
| `xxs` | 10/16/400 | Count pills |

Weights in play: 400 and 500 carry ~95% of the product; 600 for badges and card titles; 700/800
are effectively unused in the app. **Note a quirk faithfully reproduced in `tokens/fonts.css`:**
the repo maps `font-weight: 600` to the Satoshi *Medium* file, so 500 and 600 render identically.

### Spacing & density

`8px` is the default gap between sibling controls. `16px` is the table-cell and card padding.
`24px` is the modal body and section padding. Page gutters are `32px` in list views, `40px` in
settings. Rows are **72px** in standard tables, **52px** in the dense device list, **40px**
compact. The header bar is exactly **49px**; the nav rail exactly **65px**.

### Corners

**4px is the house radius** — buttons, inputs, cards, tables, modals, badges, menus. Deviations
are deliberate and few: 6px video chrome, 8px icon tiles and the notification panel, 10px the
`Badge` pill, 16px the camera-name capsule, 20→50px the free-text search field, 24px tag chips,
25px the toggle track. Nothing else is rounded.

### Cards & containers

A card is **white, 1px `#eaecf0` border, 4px radius, no shadow**. Elevation is not how Lumana
separates things — borders are. Shadow appears in only four situations:

- `--shadow-md` — dropdown panels, the notification panel, and a **hovered row in a spaced table**
- `--shadow-sm` — the selected pill inside a segmented control
- `--shadow-overlay` — the display picker floating over video
- `--box-shadow-default` — an *inset* 1px hairline used as a row separator

Toaster and Alert accents are a **3px inset shadow on the left edge**, not a border. There is
no "card with a coloured left border" pattern anywhere.

### Backgrounds

Flat colour only. No patterns, no textures, no illustrations behind content, no full-bleed
photography inside the app. The app is white on white on very slightly grey.

### Transparency & blur

Reserved for **video chrome only**. Over a camera feed, controls are `rgba(16,24,40,.7)` with
`backdrop-filter: blur(6px)`; panels use a 10px blur. Mobile headers use a translucent white
`rgba(255,255,255,.75)` with blur. Nowhere else in the product is anything translucent.

### Motion

Understated and short. `0.3s` is the house transition (hover backgrounds, chevron rotation,
chip and search radius); `0.15s` for chrome fading in over video; `0.2s ease-in-out` for the
toggle thumb; `0.5s` for the submenu width. Angular route transitions are fades: 700ms in,
300ms fast-in, 200ms out. Only `opacity`, `background`, `border-color`, `width` and `rotation`
animate. **Nothing scales, bounces, springs or slides.**

### Interaction states

- **Hover** — a light background wash, never a colour change on text. Neutral controls wash to
  `#f9fafb`/`#f2f4f7`; primary-tinted controls wash to `#f4f6fe`. Table rows wash to `#fcfcfd`;
  spaced rows lift with `--shadow-md`. Row action icons are hidden until row hover.
- **Focus** — the border **thickens to 3px** and the background lightens. This is Lumana's
  distinctive focus treatment; there is no outer focus ring except on the free-text search,
  which gets `0 0 1px 3px rgba(52,86,224,.15)`.
- **Pressed** — a slightly deeper background tint. Nothing shrinks or translates.
- **Selected** — `#e1e6fa` background with `#3456e0` text and icon.
- **Disabled** — `opacity: .32` on the whole control (0.5 on toggles and checkboxes) plus
  `pointer-events: none`. Never dim a label independently.

### Imagery

Cool and desaturated: near-white studio backdrops, soft light, blue-tinted highlights, hardware
and screens on plain pedestals. No people, no warm filters, no grain, no duotones. Inside the
app the only imagery is real camera video — presented on a **pure black** tile with a 4px
radius. When there's no snapshot, the tile stays black with a 30px camera glyph at 50% white.

Empty-state illustrations are flat grey line art, rendered at 140×120, in
`assets/illustrations/`. Device types are represented by photographic PNG thumbnails in
`assets/devices/` — never by icons.

### Layout rules

Fixed chrome, scrolling content. The 65px rail is always present and never widens. An optional
256px location/device tree sits next to it (collapsible to 29px via `Submenu`). The 49px
`HeaderBar` is pinned; only the page body scrolls. There is no page-title element — **the last
breadcrumb is the title**, and all page actions are right-aligned in the header. Mobile
breakpoint is **768px**, below which table rows become `TableCard`s and dialogs go fullscreen.

---

## ICONOGRAPHY

**Lumana has its own icon font and it is the only icon system in the product.**

`lumix-icons` is an IcoMoon-built font shipped at `assets/fonts/lumix-icons.woff` (and `.ttf`).
Every glyph is exposed as a class with a `ui-icon-` prefix, used on an empty span:

```html
<span class="ui-icon-camera"></span>
<span class="ui-icon-status-online ui-icon-20"></span>
```

`tokens/icons.css` declares the `@font-face` and ~330 single-glyph classes, grouped by purpose:
navigation, devices/video, player controls, AI objects, alerts/events, charts, views, actions,
files/org/admin. The four browsable specimen cards live under **Icons** in the Design System tab.

**Rules, taken from the codebase's own guidance:**

- Only use icons from this font. *"Verify existence before use. Never invent icon names."*
- **Never hand-draw an SVG icon.** If a glyph doesn't exist, that's a signal to reconsider the
  interaction, or to ask for the glyph to be added to the font.
- Standard sizes: **16px** in table rows, headers and buttons; **20px** for status glyphs and
  video chrome; **24px** in the nav rail and dropdown menu items.
- Default colour is `--icon-default-no-bg` (`#667085`). Selected icons go
  `--icon-selected` (`#4367f6`). Status icons carry their own semantic colour and nothing else.
- **Emoji are never used.** No unicode characters are used as icons either, with one exception:
  an **em dash (—)** stands in for an empty table cell.
- A handful of glyphs are multi-colour and are composed in production from layered
  `.path1….pathN` spans (`ui-icon-alert`, `ui-icon-people`, `ui-icon-no-wall`,
  `ui-icon-not-found-icon`, `ui-icon-archive-default`, `ui-icon-workspace-main`,
  `ui-icon-resize-dots`, `ui-icon-check_in_green`). These are **not** in `tokens/icons.css` —
  use the SVG illustrations in `assets/illustrations/` instead.
- The Angular apps additionally register a few Material `svgIcon`s (`door`, `local`,
  `not-recording`, `edge-sync-cloud`, `status-online`, `status-offline`). Those SVGs were not
  reachable in the repo tree; the equivalent font glyphs are used here instead.

### Logos

| File | What it is |
| --- | --- |
| `assets/logo-mark-alt.svg` | **Canonical mark.** The **Lumana spark** — a two-stroke four-point star in `#475467`. 32px. Use this everywhere, including the top of the nav rail. |
| `assets/logo-lumana-action.svg` | Same mark at 16px. |
| `assets/imagery/login-brand.png` | The full **Lumana wordmark + tagline** lockup, as a raster. |

**Deprecated — do not use in new work.** The Lumix.ai marks predate the Lumana rebrand and are
kept only so upstream screens stay readable. Replace any occurrence with `logo-mark-alt.svg`.

| Deprecated file | Was |
| --- | --- |
| `assets/logo-lumix-mark.svg` | Lumix.ai app mark — blue ribbon "S", white→`#4367f6` gradient, 38px; formerly the nav-rail mark. |
| `assets/logo-lumix-wordmark.svg` / `.png` | Lumix.ai mark + wordmark lockup. |
| `assets/logo-lumix-splash.svg` | Splash-loader form of the Lumix mark. |

**Missing asset — please supply.** The vector Lumana wordmark (`lumana_logo.svg` in the repo)
is an SVG wrapper around an embedded raster image; the embedded data did not survive import, so
only the 711-byte shell is present and it has been dropped. The spark mark is available as true
vector; the **wordmark** is currently only available as pixels inside `login-brand.png`. If you
have a real vector Lumana wordmark, drop it into `assets/` and it will be picked up.

---

## Coverage & gaps

### Component families **not** built here

The Angular `ui-kit` defines roughly 90 component directories. This system implements the 34
that are genuinely reusable primitives. The following families exist upstream and were
**deliberately not** reproduced — most are large, stateful, or specific to one screen:

`ui-calendar` · `ui-calendar-inline` · `ui-time-picker` · `ui-period` · `ui-dataset-table`
(the full builder-driven table) · `ui-wall-viewer` · `ui-wall-tile` · `ui-zone-map` ·
`ui-live-view-player` · `ui-playback-player` · `ui-ws-video-player` · `ui-playback-error-handler` ·
`ui-quality-selector` (+ v2) · `ui-snapshot` (+ v2) · `ui-crop` · `ui-img-ratio` ·
`ui-area-selector` · `ui-tracker-class-selector` · `ui-color-select` · `ui-chip-select` ·
`ui-chip-group` · `ui-phone-input` (+ v2) · `ui-prefix-input` · `ui-contact-form` ·
`ui-comment-form` · `ui-confirm-name-modal` · `ui-custom-object-card` ·
`ui-custom-object-edit-name-dialog` · `ui-camera-select-button` · `ui-copy-clipboard` ·
`ui-free-text-search` · `ui-binary-toggle` · `ui-bottom-sheet` · `ui-mobile-header` ·
`ui-mobile-segment-tabs` · `ui-pull-to-refresh` · `ui-motion` · `ui-unusual-event` ·
`ui-not-found` · `ui-something-went-wrong` · `ui-v2-*` · `ui-custom-toast` · `ui-progress-toast` ·
`ui-email-notification-preview` · `ui-user-settings-date` · `ui-table-header-order` ·
`ui-truncated-html` · `ui-no-rotate-text` · `ui-header` · `ui-header-with-breadcrumbs` (shared copy)

Say the word and any of them can be added.

### Intentional additions

Three components here have no single 1:1 upstream file — they codify a pattern that exists in
the product but lives in page SCSS rather than in the `ui-kit`:

- **`SegmentTabs`** — the `.view-menu` view switcher from `device-list.component.scss`.
- **`Sidebar`** — the rail from `web/src/app/layout/sidebar-v2/`, which is a web-app component rather than a library one.
- **`DataTable`** — a thin React expression of `theme/ui-table.scss`. The real product uses
  `ui-dataset-table`, a config-driven table far too large to mirror usefully here.

### Other gaps

- Only the **web** console has a UI kit. Control Center, Parking, Site Planner and Panic
  share these tokens but have their own screens.
- The **Control Center** and **Parking** apps each carry their own `themes.scss`; those were
  not diffed against the web theme.
- No slide template exists — none was provided.
- Camera imagery in the UI kit renders as the product's own black "no snapshot" tile rather
  than stock video stills.

---
name: noRoof development
description: A container yard on the Montevideo quay, where every service, product and industry is cargo that is stacked, sealed and declared on a manifest.
colors:
  seal: "#1fc83d"
  seal-press: "#19ad34"
  seal-ink: "#0b1a10"
  signal: "#49ee46"
  box: "#17803a"
  box-dark: "#126b30"
  box-light: "#1a8f41"
  box-ink: "#f7f7f3"
  steel-charcoal: "#343b38"
  steel-charcoal-frame: "#232826"
  steel-quay: "#b8b5ab"
  steel-quay-frame: "#9d9a91"
  quay: "#dcdad3"
  quay-deep: "#cfccc3"
  ink: "#1b211f"
  ink-2: "#2a302d"
  ink-3: "#3b423f"
  ink-soft: "#4a524e"
  on-dark-soft: "#b9c0bc"
  paper: "#f7f7f3"
  paper-ink-soft: "#55605a"
  rule: "#b8b5ab"
  error-ink: "#9b2c1f"
  error-wash: "#fbeeec"
typography:
  display:
    fontFamily: "'Big Shoulders Stencil Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(3.25rem, 7.4vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "0.005em"
  headline:
    fontFamily: "'Big Shoulders Stencil Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(3rem, 7.5vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "0.005em"
  title:
    fontFamily: "'Big Shoulders Stencil Variable', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.25rem, 3.4vw, 3rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "0.005em"
  quote:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)"
    fontWeight: 700
    lineHeight: 1.15
    fontVariation: "'wdth' 92"
  lead:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.35
    fontVariation: "'wdth' 96"
  body:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 112"
  button:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1
    fontVariation: "'wdth' 112"
  data:
    fontFamily: "'Red Hat Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.02em"
    fontFeature: "'tnum'"
rounded:
  none: "0px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
  2xl: "2rem"
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  section: "clamp(4.5rem, 10vw, 8.5rem)"
  max: "83rem"
  rail-h: "4rem"
components:
  seal:
    backgroundColor: "{colors.seal}"
    textColor: "{colors.seal-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
    height: "3rem"
  seal-hover:
    backgroundColor: "{colors.seal-press}"
    textColor: "{colors.seal-ink}"
  seal-large:
    backgroundColor: "{colors.seal}"
    textColor: "{colors.seal-ink}"
    height: "3.5rem"
  rail:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    height: "{spacing.rail-h}"
  rail-link:
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.label}"
  rail-seal:
    backgroundColor: "{colors.seal}"
    textColor: "{colors.seal-ink}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "2.5rem"
  plate:
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.data}"
    width: "2.75rem"
    height: "2.25rem"
  plate-current:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  bill-of-lading:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
  container-side:
    backgroundColor: "{colors.box}"
    textColor: "{colors.box-ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
  code-plate:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.data}"
    padding: "0.3rem 0.55rem"
  unit-face:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "1.5rem"
  unit-toggle:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "3rem"
  unit-toggle-hover:
    backgroundColor: "{colors.seal}"
    textColor: "{colors.seal-ink}"
  mini-live:
    backgroundColor: "{colors.box}"
    textColor: "{colors.paper}"
    height: "5.5rem"
  mini-development:
    backgroundColor: "{colors.steel-charcoal}"
    textColor: "{colors.paper}"
    height: "5.5rem"
  mini-paused:
    backgroundColor: "{colors.steel-quay}"
    textColor: "{colors.ink}"
    height: "5.5rem"
  manifest-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0.75rem 1rem 0.5rem"
  field-invalid:
    backgroundColor: "{colors.error-wash}"
    textColor: "{colors.error-ink}"
  approval-plate:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "clamp(1.75rem, 3.5vw, 3rem)"
  inspection-chip:
    textColor: "{colors.ink}"
    padding: "0.35rem 0.75rem"
  stamp:
    textColor: "{colors.box}"
    typography: "{typography.data}"
    padding: "0.4rem 0.9rem"
---

# Design System: noRoof development

## Overview

**Creative North Star: "The Quay Yard"**

noroof.dev is a container yard on the Montevideo quay. Quay concrete is the ground, steel charcoal is the ink, the cargo is corrugated container steel in the logo's green, and the paperwork is off-white manifest stock with dashed ruled rows. Services, products and industries are not presented as cards. They are cargo: stacked as containers, routed through gantry stations, declared on a manifest, and sealed. The page reads as a working yard in which every element has a physical counterpart.

Density is industrial but legible: large stencilled names, heavy 2–3px ink lines, square steel edges, and plenty of quay between the stacks. Depth comes from the objects themselves (frames, corner castings, doors that swing on hinges) and from soft ground shadows under objects that sit on the quay. Ornament has to correspond to a real yard object. Green is split by job: the container steel greens are cargo paint, and one brighter green, the seal, is the only accent and marks every action.

The world rejects the agency template of a split hero over a grid of icon cards. Its own composition is a container side with a bill of lading on its door end, a quay line, and the stack.

**Key Characteristics:**
- Corrugated container steel, drawn as a repeating gradient, is the world's own surface.
- One action colour, the seal green; everything clickable that commits is a seal.
- Square steel: no radius anywhere.
- Three typefaces with strict jobs: stencil for cargo names, Archivo for prose, Red Hat Mono for codes and declared data.
- Paper documents (bill of lading, manifest, approval plate, slip) carry 2px ink borders and dashed ruled rows.
- Container paint encodes real status: green is live, charcoal is in development, quay grey is paused.
- The signature interaction is a pair of container doors that swing open in CSS 3D. With reduced motion they open with no animation.

## Colors

The palette is concrete, charcoal, manifest paper and two greens: container green for the cargo and seal green for the action.

### Primary
- **Seal Green** (`seal`): the only accent and every action. It is used for the seal button, the rail's "Hablemos", the focus ring (3px outline), text selection, the skip link and the toggle hover. It always carries Seal Ink text.
- **Seal Press** (`seal-press`): the seal's hover and pressed state, one step darker.
- **Seal Ink** (`seal-ink`): near-black green text on any seal surface.
- **Signal Green** (`signal`): the seal's sibling on dark ground. It marks the live-status lamp and border on a container face, link underlines and hover colour in the footer, and the underline on rail links. It is never a fill for an action on light ground.

### Secondary
- **Container Green** (`box`), **Frame Green** (`box-dark`), **Rib Green** (`box-light`): the three paints of corrugated steel. They repeat horizontally as 1.375rem / 0.5rem / 0.875rem ribs (the `--corrugation` gradient). Frame Green is also the container's frame, 0.625–0.875rem thick. Container Green doubles as the stamp ink on paper and the underline colour of the contact email.
- **Container Text** (`box-ink`): stencilled text on green steel (the same value as paper).

### Tertiary (status paint)
- **Charcoal Steel** (`steel-charcoal`, frame `steel-charcoal-frame`): container paint for a product in development. Ribs run #343b38 / #272d2a / #3a413e.
- **Quay-Grey Steel** (`steel-quay`, frame `steel-quay-frame`): container paint for a product on hold. Ribs run #b8b5ab / #a9a69c / #bfbcb3, with ink text.

### Neutral
- **Quay Concrete** (`quay`): the page ground and scrollbar track.
- **Deep Quay** (`quay-deep`): the ground of the process band, bounded by 3px ink lines. It also fills the hollow of the station markers.
- **Steel Charcoal** (`ink`): text, every structural line, the rail, the "Why" band, the footer, container end walls and the code plates.
- **Charcoal 2 / 3** (`ink-2`, `ink-3`): corner castings, locking bars, the backing behind screenshots, the rail and footer edge lines (3px `ink-3`), the scrollbar thumb, and plate hover.
- **Soft Ink** (`ink-soft`): secondary prose on quay (section intros, station text, step numbers).
- **Soft Light** (`on-dark-soft`): secondary text on charcoal (rail links, inactive plates, footer captions).
- **Manifest Paper** (`paper`): every document surface.
- **Paper Grey** (`paper-ink-soft`): labels, column heads, item numbers and struck text on paper.
- **Ruling** (`rule`): 1px dashed row dividers on paper and between stations.
- **Error Ink / Error Wash** (`error-ink`, `error-wash`): form validation only (`:user-invalid` label colour and field wash).

### Named Rules
**The One Seal Rule.** Seal Green is the only accent and is spent only on actions, focus and selection. Container greens are cargo paint and never mark an action. Seal Green never paints a container.

**The Honest Paint Rule.** A container's paint states its product's real status: green steel is live, charcoal steel is in development, quay-grey steel is on hold. Paint is never picked for variety.

## Typography

**Display Font:** Big Shoulders Stencil (variable), with Arial Narrow as fallback
**Body Font:** Archivo (variable, with width axis), with Helvetica Neue and Arial as fallback
**Label/Mono Font:** Red Hat Mono 500/700, with ui-monospace and Menlo as fallback

**Character:** The condensed stencil is paint sprayed on steel through a template: always uppercase, heavy (850–900), and tightly leaded. Archivo carries the honest, plain voice, and its width axis does real work: it is widened to 112% for buttons and labels and narrowed to 92–96% for the lead and the quote. Red Hat Mono is the clerk's typewriter.

### Hierarchy
- **Display** (900, clamp(3.25rem, 7.4vw, 6rem), 0.88): the hero headline stencilled on the container side, one span per line. The final line steps down to 0.62em.
- **Headline** (850, clamp(3rem, 7.5vw, 6rem), 0.92): section titles (h2), uppercase and balanced.
- **Title** (850, clamp(2.25rem, 3.4vw, 3rem), 0.92): station verbs and pillar titles. Container end-wall names run larger (clamp(2.5rem, 4.4vw, 3.75rem)), strip names smaller (clamp(1.75rem, 2.6vw, 2.375rem), 900), and industries in the manifest at 1.75rem.
- **Quote** (Archivo 700, clamp(1.5rem, 2.6vw, 2.125rem), 1.15, width 92%): the single partnership line under the process headline.
- **Lead** (Archivo 600, 1.1875rem, 1.35, width 96%): the bill-of-lading opener. Section intros use 1.1875rem at 400 in Soft Ink, max 62ch.
- **Body** (Archivo 400, 1.0625rem, 1.6): default prose. Content blocks run 1rem at 1.55, max 52–58ch.
- **Label** (Archivo 650–750, 0.75–0.8125rem, 0.04–0.06em, uppercase, width 112%): rail links, form labels, service names under stations, footer column captions.
- **Data** (Red Hat Mono 500/700, 0.75–0.9375rem, tabular numerals, 0.02em, often uppercase): ISO 6346 container codes, item and step numbers, dt labels, table column heads, document titles, status, the language plates and the stamp.

### Named Rules
**The Stencil-Is-Cargo Rule.** The stencil face is reserved for names painted on cargo and for headings (h1–h3, product names, industries). It is always uppercase and never used for prose, labels or buttons.

**The Clerk's Hand Rule.** Red Hat Mono appears only where a clerk would type: codes, numbers, column heads, declared fields, status and stamps. Using it for prose or as decoration breaks the manifest.

## Layout

A single centred column (max 83rem, side gutter clamp(1rem, 4vw, 3.5rem)) sits under a sticky charcoal rail (4rem minimum height, which also sets the scroll offset). Sections breathe at clamp(4.5rem, 10vw, 8.5rem) vertically, and each section head (max 52rem) sits above its cargo with clamp(2.5rem, 5vw, 4rem) between them.

The quay line is the axis. A 3px ink line runs the full width under the hero, and every band (process, the "Why" band, the footer) begins and ends on a 3px edge. The first viewport is a two-column grid: the container side takes the flexible track and the bill of lading takes minmax(18rem, 23rem). The three-up product strip sits below the quay line. Further down the page: a vertical stack of product containers, a five-station process line hung from a 0.75rem gantry beam, a full-width manifest table, a sticky-headed two-column "Why" plate on charcoal, and a two-column contact block.

Spacing climbs a quarter-rem ladder (0.25 / 0.5 / 0.75 / 1 / 1.5 / 2rem), and fluid clamps handle the larger gaps.

Responsive behaviour: the rail wraps its links onto a second ruled line at 60rem. The hero, the strip and the containers go to one column at 56rem (the container end wall becomes a header row). Stations drop to two columns at 64rem and one at 36rem. The manifest table turns each row into a stacked entry at 48rem. Paired form fields stack at 30rem, and the seal goes full width.

## Elevation & Depth

Depth is physical. Objects that sit on the quay (containers, paper sheets, the approval plate, the slip) cast a soft ground shadow with a large negative spread, so the shadow pools beneath the object and never outlines it. Paper never floats without its ink border. Inside an object, depth comes from structure: steel frames, dark corner castings, end walls and the 3D door swing.

### Shadow Vocabulary
- **Ground** (`box-shadow: 0 1.25rem 2.5rem -1.75rem rgb(27 33 31 / 0.6)`): containers in the stack and the notice slip. The hero side uses a -1.5rem spread at 0.55.
- **Sheet** (`box-shadow: 0 1rem 2rem -1.5rem rgb(27 33 31 / 0.45)`): manifest sheet and contact form on quay.
- **Plate on charcoal** (`box-shadow: 0 1.5rem 3rem -2rem rgb(0 0 0 / 0.8)`): the approval plate on the dark "Why" band.
- **Lift** (`box-shadow: 0 0.75rem 1.25rem -0.75rem rgb(27 33 31 / 0.6)` plus translateY(-3px)): hover on a strip container.
- **Door swing** (`box-shadow: ±1.5rem 0 2.5rem -1rem rgb(0 0 0 / 0.35)`): cast by an open door.

### Named Rules
**The Ground-Shadow Rule.** Shadows only pool beneath objects resting on the quay, with negative spread and a downward offset. They are never hard, never offset to the side as decoration, and never used without the object's border or frame.

## Shapes

Square steel. Every corner is 0px: seals, plates, fields, sheets, containers and chips alike. The only curve in the system is the 0.25rem slot cut into each corner casting. Borders follow weight classes: **container frames** in Frame Green are 0.625rem (stack) or 0.875rem / 0.625rem (hero, block / inline), and 0.375rem on strip containers. **Structural lines** are 3px ink (quay line, band edges, station rail and markers, door seam). **Document borders** are 2px ink (bill, sheets, seal, toggle, form, slip, chips, heads of tables and lists). **Plates and fields** use 1.5px ink lines. **Ruled rows** are 1px dashed Ruling. Status lamps are small squares, and a half-filled square marks development. The only rotation is the stamp at -8deg.

## Components

### Seal (primary button)
Tactile and decisive; it is the one way to commit.
- **Shape:** square (0px), 2px ink border, minimum height 3rem (3.5rem in the bill of lading and the form).
- **Primary:** Seal Green fill, Seal Ink text, Archivo 800 at width 112%, 0.75rem 1.25rem padding, label and arrow pushed apart (space-between, 1.25rem gap).
- **Hover / Focus / Active:** fill shifts to Seal Press over 160ms. The arrow slides 3px right over 220ms. Active presses down 1px. Focus is the global 3px Seal Green outline at 3px offset. While sending, the opacity drops to 0.75 and the cursor shows progress.
- **Icon:** a single 20px stroked arrow (stroke-width 2.25, square caps) pointing right, down or out (diagonal for external links). It is the only icon in the system.
- **Secondary:** a plain bold text link with a down arrow ("Ver productos"), with a 0.09em underline at a 0.22em offset.

### Rail (navigation)
- **Style:** sticky charcoal bar with a 3px Charcoal 3 bottom edge, the white full logo at 9.5rem, uppercase labels in Soft Light.
- **States:** a link hover turns it to paper with a Signal Green underline.
- **Language plates:** ES/EN in Red Hat Mono inside a 1.5px Charcoal 3 frame, each 2.75 × 2.25rem. The current locale is a paper plate with ink text. The other is a link that fills with Charcoal 2 on hover.
- **Rail seal:** a compact seal (2.5rem high, 1rem padding, no ink border).
- **Mobile:** below 60rem the links wrap onto a second row under a 1px Charcoal 3 rule. Below 26rem the logo shrinks to 7.5rem.

### Container Side (hero)
A 40-ft container in side elevation: a corrugated green field inside Frame Green borders, four dark corner castings with slotted centres, an ink code plate top right ("NRDU 000001 5 / 45G1 · MVD"), and the stencilled display headline set low on the left.

### Bill of Lading
A paper document on the container's door end: a 2px ink frame, a mono uppercase document title closed by a 2px rule, the lead, then a definition list of shipper / consignee / method / cargo rows (a 6.75rem mono dt column, 1px dashed dividers). In the consignee row "clientes" is struck out and "socios" written after it. The seal and the secondary link sit at the foot.

### Product Strip
Three mini containers below the quay line, each painted by status (Honest Paint), with a 0.375rem frame, the stencilled name and an ink code-and-status plate. On hover a strip container lifts 3px with a lift shadow. Clicking one scrolls to its stacked unit and opens that unit's doors.

### Unit (product container with doors)
The signature component. Each unit has a charcoal end wall on the left (name, code, a status chip with a square lamp, and the door toggle) and a side on the right with two full-height doors over the cargo.
- **Closed:** every unit stands at the same height (15rem; 10.5rem on mobile). The doors carry the code and status as ink stencil plates, along with vertical locking bars in Charcoal 2. The interior is inert.
- **Toggle:** a paper button (3rem, 2px paper border, Archivo 800) with a locking-bar handle that stands upright when locked and rotates 90deg when open. On hover it fills with Seal Green. The label switches between "Abrir puertas" and "Cerrar puertas".
- **Open:** the doors swing to rotateY(∓104deg) from their outer hinges, with perspective 140rem, over 1100ms on the ease-out curve. Each door casts a sideways shadow, and the doors are hidden once the swing ends. The cargo is a screenshot on Charcoal 2 next to a manifest (summary, mono "CARGA" title, dashed list, and a seal with an out-arrow when a product has a URL).
- **Auto-open:** the first unit opens itself once it is 55% in view (after a 250ms delay).
- **Reduced motion:** the doors, handle and visibility change all lose their transitions, and the first unit starts open.
- **Status chip:** a 1.5px Soft Light border and a 0.625rem square lamp. Live uses a Signal Green border and a filled lamp. Development uses a half-filled lamp. On hold uses an empty lamp.

### Stations (process)
A 0.75rem ink gantry beam with an ink label plate hung from it, above a five-column line on a 3px ink rail. Each station hangs a 1rem square hollow marker (3px ink border, Deep Quay fill) on the rail. Each station shows a mono two-digit stop number, a stencil verb, an uppercase service label and Soft Ink text. Stations are separated by 1px dashed Ruling.

### Manifest Table (experience)
A paper sheet with a 2px ink frame and the sheet shadow. Its head line is in mono (company on the left, origin on the right). Column heads are mono, uppercase and Paper Grey, closed by 2px ink. Rows are split by 1px dashed Ruling and tint to #eeeee8 on hover. Columns: a three-digit item number, the industry in stencil, the work in Archivo (max 58ch), and the stack in mono separated by middle dots. Below 48rem each row becomes a two-column stacked entry.

### Approval Plate (pillars)
A paper plate on the charcoal band, beside the sticky section head. Each pillar row pairs a stencil title with prose and ends in a dashed rule. An inspection list follows: a Paper Grey caption and square chips (2px ink border, Archivo 700).

### Form (contact)
- **Style:** one paper sheet built from ruled cells. Each field is a cell with an uppercase Paper Grey label above a borderless input, and cells are divided by 1.5px ink lines. Paired fields share a row with a 1.5px ink divider between them.
- **Focus:** the cell washes to #eef6ef and takes a 3px Seal Green inset outline. The input itself shows no outline.
- **Error:** `:user-invalid` washes the cell with Error Wash and turns its label Error Ink.
- **Submit:** a large seal (minimum 14rem wide, 3.5rem high) aligned right, full width below 30rem.

### Slip (thanks / 404)
A paper slip (max 40rem) centred on the quay with a ground shadow. It holds a stencil title, Paper Grey body text and a seal back home. Its foot sits under a 2px rule and carries the mono container code and a rubber stamp: Container Green with a 3px border, rotated -8deg ("RECIBIDO" / "RECEIVED", or "404").

## Do's and Don'ts

### Do:
- **Do** make every committing action a seal (Seal Green, Seal Ink, 2px ink border, square), and keep Seal Green for actions, focus and selection only.
- **Do** paint containers by real status: green corrugation when live, charcoal when in development, quay grey when on hold.
- **Do** build steel surfaces from the corrugation gradient (1.375 / 0.5 / 0.875rem ribs) inside a frame in that paint's darker frame colour.
- **Do** put documents on Manifest Paper with a 2px ink border, a mono title closed by a 2px ink rule, and 1px dashed Ruling between rows.
- **Do** set ISO 6346 codes, numbers, column heads and status in Red Hat Mono with tabular numerals.
- **Do** bound bands and axes with 3px ink lines, and align sections to the quay line.
- **Do** honour `prefers-reduced-motion`: drop transitions and show the end state (open doors, no smooth scroll).
- **Do** keep state transitions at 160ms, small movements at 220ms and the door swing at 1100ms, all on cubic-bezier(0.16, 1, 0.3, 1).

### Don't:
- **Don't** round any corner; the system is 0px throughout.
- **Don't** introduce a second accent hue, use Seal Green as container paint, or use container greens to mark actions.
- **Don't** fall back to a split hero over a grid of icon cards; present work as cargo (containers, stations, manifest rows).
- **Don't** use hard offset shadows or side-cast decorative shadows; only the ground shadow pools beneath objects, and only a swinging door casts sideways.
- **Don't** set prose, labels or buttons in the stencil face, or set prose in mono.
- **Don't** add glyph or pictogram icons; the stroked arrow is the only icon.
- **Don't** hide a closed container's code or status; the doors repeat them.
- **Don't** rotate anything but the stamp.

# Roaring Brook Abstract — Pennsylvania (Pike County) Website

## About the business
Roaring Brook Abstract is a title insurance and real estate closing company
based in Milford, Pennsylvania (Pike County / the Poconos / tri-state area).
It is the original/legacy Roaring Brook Abstract business — the same name
and brand that relocated its ownership to Florida (see the sibling site,
roaringbrookfl.com). The PA operation is being taken over and run going
forward by two local attorneys:

- **Jason R. Ohliger** — Temple University Beasley School of Law (2005),
  licensed in NY, NJ, PA and multiple federal courts. Trial attorney with
  Ohliger Injury Law / Ohliger & McIntyre, LLC, 410 Broad Street, Milford,
  PA 18337. Over $35M recovered for clients; two of Pike County's highest
  injury verdicts, including the county's first verdict over $1M.
- **Nicholas J. McIntyre** — Ursinus College (B.A. Political Science, 2017),
  University of Akron School of Law (J.D. 2019). Licensed in PA (admitted
  2019, Pike County / District 3). Practice has included personal injury,
  criminal defense, general litigation, and estate planning.

Both are partners at the same Milford, PA law firm and are now also running
the Roaring Brook Abstract title company as a related but distinct business
(same pattern as Chris Kimler's setup in Florida: a law firm affiliated with
a separately-branded title company).

**Services (same four as FL):**
- Title insurance policies
- Title searches
- Title examination
- Real estate closings

**Affiliated with:** Ohliger & McIntyre, LLC (the attorneys' law firm) — for
deals that need legal representation beyond title work.

## Where this project came from
This repo is a direct copy of the roaringbrookfl.com codebase (Next.js app,
same components, same styling system), used as the starting template per
the family's explicit request. The PA site should feel like a sibling of
the FL site — same editorial, trustworthy, attorney-led positioning — but
with its own regional identity:

- **FL = coastal.** Ocean/beach drone footage, "ocean/sky" blue.
- **PA = forest.** Aerial drone footage over Pennsylvania/Pocono forest
  canopy instead of waves. A real compressed drone clip already exists at
  `public/hero-video-pa-compressed.mp4` (1920x1080, ~6s loop, dense green
  forest canopy, slow aerial pan) — this is the hero background, already
  wired into `components/hero.tsx`.

## What makes us different
Same core differentiators as the FL site, adapted to two attorneys instead
of one:
- **Attorney-led title work.** Both Jason and Nick are licensed PA
  attorneys as well as the principals behind the title company — most
  title companies aren't run by practicing trial lawyers. Complicated
  matters (disputed title, estates, liens) get handled in-house.
- **Personal service.** Same promise as FL — calls returned same-day,
  matters don't get pushed off to a junior assistant.
- **Local roots.** Milford / Pike County / the Poconos, not an out-of-area
  national title company.

## Goals for this site
- Establish Jason and Nick as the new faces of Roaring Brook Abstract in PA
  while preserving trust in the existing Roaring Brook name/history
  (it isn't a new company — new ownership of a known local name)
  — mirrors how the FL site frames "new to Brevard, not new to title"
- Make the attorney-led angle unmistakable for both attorneys
- Make ordering title / getting a quote as easy as possible (reuse FL's
  Order Title / Submit a Contract flow)
- Show local Pike County / Pocono roots through imagery (forest, not ocean)
- Carry over or rebuild a reviews section once Google reviews exist for the
  PA entity

## Visual direction
- **Hero background:** looping aerial drone footage over PA/Pocono forest
  canopy (already sourced — see `public/hero-video-pa-compressed.mp4`).
  Same slow, calm, no-fast-cuts treatment as the FL ocean footage.
- **Interior pages:** still imagery, lots of whitespace, no competing
  animation — same approach as FL.
- **Aesthetic:** same editorial-clean boutique-firm look as FL. Not a
  SaaS dashboard, not a 2015 WordPress theme.

## Brand
- **Primary color:** needs a PA-appropriate adjustment — probably a deeper
  forest-green or a muted navy (vs. FL's bright coastal blue) to feel
  distinct from the FL site while still reading as "Roaring Brook." Not
  yet finalized — **open question, confirm direction before a full color
  pass.**
- **Logo:** keep "Roaring Brook Abstract" wordmark, consistent with FL.
  Do not reuse Ohliger Injury Law's own navy diamond logo — that belongs
  to the unrelated law firm brand, not the title company.
- **Typography:** same serif/sans editorial pairing as FL, for consistency
  across the two sibling sites.

## Voice and content
- Same confident, warm, plainspoken voice as FL.
- The "When you need to move quickly on your real estate transaction..."
  core promise likely still applies and should carry over.
- Be clear this is a continuation of the existing Roaring Brook Abstract
  PA business under new ownership (Jason + Nick), not a brand-new startup
  — the opposite framing from FL, which IS new to its market.

## Site structure
Same structure as the FL site:
- Home
- About (now: bios for both Jason Ohliger and Nick McIntyre, their legal
  credentials, and the Roaring Brook Abstract PA story/history)
- Services (Title Insurance / Title Searches / Title Examination / Closings)
- Resources / FAQs
- Contact (Milford office, hours, map, contact form)
- Order Title (primary CTA, always visible in header)

### Known content gaps vs. the FL site
The FL `About` page is built entirely around a single owner (Chris Kimler)
— his solo bio, his family, his family-photo slideshow. All of that is
FL/Chris-specific and needs to be replaced, not just reworded:
- Needs a **two-attorney bio layout** (Jason + Nick) instead of one.
- The family-slideshow component and `family-*.jpg` photos are Chris's
  actual family — **do not reuse on the PA site.** Either remove the
  "outside the office" section entirely or replace with something
  Jason/Nick-appropriate if they want a personal-touch section later.
- Jason's real bio copy/credentials have been sourced from
  tristatetrial.com (Ohliger Injury Law's site) — see attorney details
  above. A real headshot of Jason was also pulled from that site.
- Nick's bio is thinner (sourced from PA disciplinary board + web search,
  not a dedicated bio page) and **no individual headshot of Nick exists
  yet** — only a group team photo that may include him. Needs a real
  headshot and a proper bio paragraph from the client.

## Functional features
Same as FL: Order Title button, click-to-call, contact form, Net Sheet
calculator, FAQ, floating Quick Quote (if used on FL).

## What's carrying over from the FL template (unchanged structurally)
- Full Next.js/Tailwind/Framer Motion component system
- Page structure and section ordering
- Forms and API routes (contact, submit-contract, start-closing)
- Core "When you need to move quickly..." tagline (pending confirmation
  it still applies verbatim for PA)

## What's new/different for PA
- Two attorneys instead of one (Jason Ohliger + Nick McIntyre)
- Forest hero footage instead of coastal footage (asset already in repo)
- Milford, PA office instead of Melbourne, FL office
- PA-specific licensing/credentials and PA Bar / PA title agent info
- Likely a distinct (not identical) accent color from FL to differentiate
  the two sibling sites despite the shared template
- `roaringbrookabstract.com` is being turned into a simple hub/landing
  page that splits traffic to roaringbrookfl.com and roaringbrookpa.com
  — a separate, much smaller build, not part of this repo

## Rebrand sweep status (done)
The full FL → PA mechanical/content rebrand pass across the site is
complete: navbar, footer, consultation, cta-band, chatbot (genuinely
rewritten — not just find/replace — for two co-owner attorneys instead of
one), and every app/ page (contact, lenders, faq, buyers-sellers,
submit-contract, realtors, start-closing), plus contract-form.tsx and
start-closing-form.tsx. All phone numbers now point to (570) 296-7300,
all addresses to 410 Broad Street, Milford, PA 18337, all "Florida"/
"Melbourne"/"Brevard"/"Chris Kimler" references removed or replaced.
`npx tsc --noEmit` passes clean with zero errors.

**Testimonials intentionally left out of the homepage for now.**
`components/testimonials-section.tsx` still contains the FL site's real
Google reviews, which name Chris Kimler and his staff by name — those
can't be reused for Jason/Nick's PA business (it would be misattributing
real customers' words to the wrong attorneys). The component still exists
in the repo but is no longer imported/rendered in `app/page.tsx`. Re-add
it (or build a new one) once real Roaring Brook Abstract PA reviews are
sourced — see open question below.

**reCAPTCHA de-hardcoded.** The site key is no longer hardcoded in
`app/layout.tsx` / `components/consultation.tsx` — both now read
`process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, which is unset until a new
key is registered (see open question below). Forms will silently no-op
on verification until that's set.

## Open questions to resolve
- **Office address/phone for the title company specifically** — currently
  using the law firm's Milford address (410 Broad Street, Milford, PA
  18337) and phone (570-296-7300) as a placeholder. Confirm whether the
  title company uses the same office/number or its own.
- **reCAPTCHA site key** — register a new reCAPTCHA v3 site key for
  roaringbrookpa.com in the Google reCAPTCHA admin console (the FL key is
  domain-locked to roaringbrookfl.com) and set
  `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` in the Vercel project's env vars.
- **Nick McIntyre's headshot** — need a real individual photo; currently
  only have a cropped group photo as a placeholder.
- **Final bio copy for both attorneys** — current copy is assembled from
  their existing legal website and public records; client should review/
  approve the actual wording used on the title company site.
- **Brand color direction** — forest green vs. muted navy vs. something
  else; not yet decided.
- **PA title agent licensing / underwriter relationship** — same question
  as FL had; confirm status.
- ~~**Logo file**~~ — resolved. The real Roaring Brook Abstract wordmark
  (navy serif "ROARING BROOK ABSTRACT" with wave-swoosh underline,
  sourced from the family's existing assets) is now in place, recolored
  white, as `public/logo-rb-horizontal.png` (the only logo file actually
  referenced in code, used by both `navbar.tsx` and `footer.tsx`).
- **Legacy/real PA reviews** — need real Google reviews for the PA entity
  before re-enabling a testimonials section (see above).
- **roaringbrookabstract.com hub page** — confirm scope/design before
  building (not started yet).

**Confirmed — not an open question:** the homepage stats band (30+ years,
10,000+ closings, $1.5B+ in closings, 4.8★ Google rating) and the BBB A+
accreditation badge, inherited unchanged from the FL template during the
rebrand sweep, are accurate for the PA entity too. Jason and Nick are
taking over the actual existing Roaring Brook Abstract PA business (same
history/track record), not starting a new one, so these numbers don't
need to be replaced or treated as placeholders.

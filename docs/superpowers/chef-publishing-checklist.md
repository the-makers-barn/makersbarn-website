# Chef Publishing Checklist

Tick every item before flipping a chef from `ChefStatus.DRAFT` to `ChefStatus.PUBLISHED`.

- [ ] Chef has approved the page (email reply on file)
- [ ] Bio (`about.headline` + at least one `about.paragraphs` entry) provided in EN minimum
- [ ] At least one signature dish provided
- [ ] At least one testimonial provided
- [ ] Avatar uploaded (≥ 240×240) at `public/images/chefs/{slug}/avatar.jpg`
- [ ] Hero gallery image uploaded (≥ 1200×800) at `public/images/chefs/{slug}/hero.jpg`
- [ ] At least 4 supporting gallery images uploaded
- [ ] Alt-text registered for every chef image in `src/data/imageAltText.ts`
- [ ] `inquiryEmail` is the chef's actual address (not a placeholder)
- [ ] `homeBase` and `servesRegions` accurate (and on the SVG outline)
- [ ] `dayRate.amountEur` and `dayRate.tier` confirmed with chef
- [ ] `updatedAt` set to today's date via `asIsoDateString('YYYY-MM-DD')`

After ticking, change `status: ChefStatus.DRAFT` → `status: ChefStatus.PUBLISHED`, commit with message `feat(chefs): publish {chef-name}`, and merge.

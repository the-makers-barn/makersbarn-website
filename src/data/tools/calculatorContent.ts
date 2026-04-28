export { CALCULATOR_CONTENT } from './content'

/*
 * Sources cited for verified yoga retreat pricing benchmarks (accessed 2026-04-28):
 *
 * - Om Away — "How Much Does a Yoga Retreat Really Cost — and Why"
 *   https://om-away.com/yoga-and-wellness-retreats/how-much-does-a-yoga-retreat-really-cost-and-why/
 *   (European tier pricing: budget €400–800, mid-range €1,000–1,800, premium €2,000+
 *   per week; group sizes per tier; 10–15% hidden cost buffer.)
 *
 * - WeTravel Academy — "How to Price Your Yoga Retreat"
 *   https://academy.wetravel.com/price-yoga-retreat
 *   (Three cost layers: out-of-pocket, hidden, facilitator compensation;
 *   8–12 break-even guideline on a 15-spot retreat; first-time facilitator pitfalls.)
 *
 * - SquadTrip — "How To Price a Retreat for Success (and Profit)"
 *   https://squadtrip.com/guides/how-to-price-a-retreat/
 *   (30–50% margin target, breakeven at 55% capacity in worked example,
 *   pricing mistakes including underpricing and mid-window price changes.)
 *
 * - Basundari — "How to Price a Retreat for Maximum Profitability"
 *   https://basundari.com/how-to-price-a-retreat-for-profitability/
 *   (Marketing as ~20% of profits; 20–30% premium for differentiated experiences;
 *   5–10% contingency budget.)
 *
 * - Be Yogi — "How Much Do Yoga Teachers Really Make on Retreats?"
 *   https://beyogi.com/teach-yoga/how-much-do-yoga-teachers-make-on-retreats/
 *   (Facilitator pay model and 25–40% standard margin; ~$100/guest/day
 *   net profit benchmark.)
 *
 * - InsightTimer / SquadTrip / TheFlowOps marketing guides
 *   https://insighttimer.com/blog/how-to-market-a-yoga-retreat/
 *   https://squadtrip.com/guides/how-to-market-a-yoga-retreat/
 *   (Registration timeline: open 6–9 months out for domestic retreats,
 *   9–12 months out for international/destination retreats.)
 *
 * - Multiple cancellation-policy references (Clear Vision Yoga, MyYogicAdventure,
 *   Above Yoga, Terranova Yoga) corroborating 20–30% non-refundable deposit
 *   and balance 60–90 days before start as the prevailing industry pattern.
 *
 * Sources cited for verified wellness retreat pricing benchmarks (accessed 2026-04-28):
 *
 * - SquadTrip — "Wellness Retreat Cost: How to Price Retreat and Profit"
 *   https://squadtrip.com/guides/wellness-retreat-cost/
 *   (Wellness pricing tiers, 20–40% margin target, breakeven calculation,
 *   common pricing mistakes including ignored payment fees and missing buffers.)
 *
 * - SquadTrip — "Are Wellness Retreats Profitable?"
 *   https://squadtrip.com/guides/are-wellness-retreats-profitable/
 *   ($1,500–$5,000 per-person pricing for 3–7 day wellness retreats,
 *   30–50% margin band, 10–25 group size, fixed vs variable cost split.)
 *
 * - BookRetreats — "Best Wellness Retreats in Europe 2026"
 *   https://bookretreats.com/s/wellness-retreats/europe
 *   (European mid-range pricing of $1,000–$1,800 per person for 5–8 night
 *   wellness retreats; duration patterns clustering at 5–7 nights.)
 *
 * - Basundari — "Retreat Business Model"
 *   https://basundari.com/retreat-business-model/
 *   (Cost breakdown: venue 30–40%, staff 20–30%, food 15–25%, marketing 10–20%;
 *   $1,500–$4,000 per attendee for 5–7 day retreats; 90% vs 60% occupancy
 *   roughly doubling net profit due to fixed-cost leverage.)
 *
 * - Health Travel — "Best Budget Wellness Retreats in Europe"
 *   https://www.health.travel/read/the-best-budget-wellness-retreats-in-europe/
 *   (Per-night benchmarks for budget European wellness retreats:
 *   £60–£172/night, with 7-night programs from £509 in Portugal/Spain.)
 *
 * - Healing Holidays — "Top 10 Luxury Detox Retreats in Europe (2026)"
 *   https://www.healingholidays.com/blog/top-10-luxury-detox-retreats-in-europe
 *   (Premium and medical wellness pricing: Lanserhof 7-night Cure Classic
 *   from ~$7,230, Chenot Palace Weggis Advanced Detox from CHF 5,500–7,500
 *   for 6–7 nights, supporting €3,000+ premium tier.)
 *
 * - Wise — "How much does a wellness retreat cost?"
 *   https://wise.com/us/blog/wellness-retreat-cost
 *   (Luxury wellness benchmark of $3,000–$15,000+ per person for 7-night
 *   stays at established medical-wellness destinations.)
 *
 * - Thervo / Veeva — practitioner and bodywork session pricing
 *   https://thervo.com/costs/massage-prices
 *   https://veevaclinics.com/massage-therapy-session-cost/
 *   (€60–€150 per session for standard massage/bodywork; €100–€300+ per
 *   session for specialty modalities like lymphatic drainage, craniosacral,
 *   myofascial release.)
 *
 * - SquadTrip — "Retreat Refund and Cancellation Policies"
 *   https://www.squadtrip.com/guides/retreat-refund-and-cancellation-policies-what-hosts-and-guests-should-know
 *   (Industry-standard tiered cancellation timelines and the rationale for
 *   tighter inside-30-day clauses on protocol-driven wellness programs.)
 *
 * Sources cited for verified meditation retreat pricing benchmarks (accessed 2026-04-28):
 *
 * - Plum Village — "Accommodation & Contributions"
 *   https://plumvillage.org/retreats/visiting-us/accomodation-price
 *   (Four-tier sliding scale per week: scholarship €401, reduced €535,
 *   sustaining €803, supporting €1,070 for dormitory accommodation;
 *   accommodation €18–50/day, full board ~€12/day, facilities ~€25/day,
 *   dana offering ~€100/week, ~5% admin fee.)
 *
 * - Insight Meditation Society — "Residential Fees" and "Forest Refuge Fees"
 *   https://www.dharma.org/retreats/retreat-center/fees/
 *   https://www.dharma.org/retreats/forest-refuge/fees/
 *   (Four-tier sliding scale: scholarship, supported, sustaining, benefactor;
 *   course fees explicitly do not include teacher compensation, which is
 *   provided through end-of-retreat dana offerings.)
 *
 * - Spirit Rock Meditation Center — retreats and dana FAQ
 *   https://www.spiritrock.org/programs/retreats
 *   https://www.spiritrock.org/giving/dana-faq
 *   (Sliding-scale ranges: 8-night summer retreat $440–$4,160; month-long
 *   retreat $4,060–$11,620; scholarship rate $55/night; teachers paid
 *   through dana with center now guaranteeing minimum dana to certain
 *   teachers for income stability.)
 *
 * - Retreat Guru — European meditation retreat listings
 *   https://retreat.guru/be/meditation-retreats/europe
 *   (European pricing tiers: budget €420–575, mid-range €779–2,150,
 *   premium €5,555+; durations 2 to 8+ nights; group sizes typically
 *   limited to 8–20 sitters.)
 *
 * - BookRetreats — European meditation retreat listings
 *   https://bookretreats.com/s/meditation-retreats/europe
 *   (Specific European retreat examples: 7-day Vipassana Romania $351,
 *   8-day silent meditation Netherlands $901, 6-day mental detox
 *   Portugal $877; common durations clustered at 3–5 days and 7–8 days.)
 *
 * - Dhamma Vipassana centers — donation guidelines
 *   https://www.dhamma.org/en-US/dana
 *   https://paphulla.dhamma.org/dana-donations/
 *   (10-day vipassana courses run on voluntary donation; observed dana
 *   range $10–400 per retreatant with majority $50–150; centers suggest
 *   considering 10 days of own food cost as a guideline.)
 *
 * - Bodhi College — "Course pricing and Dāna"
 *   https://bodhi-college.org/how-can-i-help/about-dana-generosity/
 *   (Split-fee model: course fee covers facility and admin while teachers
 *   compensated separately through dana; trade-offs versus fixed-fee model.)
 *
 * - Tara Mandala — Retreat Dana Offering guidelines
 *   https://www.taramandala.org/about/tara-mandala-retreat-center/registration-information/retreat-dana-offering/
 *   (Suggested participant dana range of $20–$60 per retreat day per
 *   teacher; example $60–$180 dana for a 3-day retreat.)
 *
 * - Insight Timer / WeTravel Academy — guest teacher day rates
 *   https://insighttimer.com/blog/what-is-a-silent-meditation-retreat/
 *   https://academy.wetravel.com/price-yoga-retreat
 *   (Hired guest teacher day rates around $1,200/day plus travel and
 *   lodging; net profit benchmark of ~$100/guest/day for retreat leaders.)
 *
 * Sources cited for verified coaching retreat pricing benchmarks (accessed 2026-04-28):
 *
 * - Studiocart — "How to Sell a High-Ticket Business Retreat for Coaches"
 *   https://www.studiocart.co/guide/how-to-sell-high-ticket-business-retreat-for-coaches/
 *   (Five pricing models including all-inclusive premium $2,500–$10,000+,
 *   core + VIP upgrade $2,000–$4,000 base with $1,000–$3,000 upgrade,
 *   pay-to-apply $97–$297 deposit screening, program bundles $10K–$25K.)
 *
 * - Studiocart — "How to Sell a VIP Day or Intensive Coaching Sessions"
 *   https://www.studiocart.co/guide/how-to-sell-a-vip-day-or-intensive-coaching-sessions/
 *   (VIP day pricing: half-day $1,500–$5,000, full-day $2,500–$15,000,
 *   two-day intensive $5,000–$25,000, virtual $1,500–$7,500, follow-up
 *   support add-ons $500–$3,000; application/screening best practices.)
 *
 * - Heights Platform — "How to Price Your Online Coaching Programs"
 *   https://www.heightsplatform.com/blog/how-to-price-your-online-coaching-programs
 *   (Mastermind pricing $15,000–$30,000+ per year for exclusive groups,
 *   typical mastermind size ~10 members, group coaching pricing tiers,
 *   value-based pricing principles for high-ticket coaching.)
 *
 * - Jill Johnson Coaching — "Fees for Executive Coaching in 2025"
 *   https://www.jilljohnsoncoaching.com/blog/executive-coaching-fees-in-2025
 *   (Western Europe average $293/hour, North America $288/hour, C-suite
 *   specialist rates $1,000–$3,000/hour, ICF PCC/MCC credential premium.)
 *
 * - Business Builder Camp — "How Much Does a Business Mastermind Group Cost?"
 *   https://businessbuildercamp.com/how-much-does-a-business-mastermind-group-cost/
 *   (Established mastermind pricing: War Room $20,000–$50,000/year,
 *   Genius Network $25,000–$100,000/year, Tiger 21 $30,000–$35,000/year,
 *   Strategic Coach $12,000–$60,000/year, typical full mastermind
 *   $5,000–$15,000 with high end reaching $100,000.)
 *
 * - SquadTrip — "Why So Many Coaches Are Starting a Retreat Business"
 *   https://squadtrip.com/guides/why-so-many-coaches-are-starting-a-retreat-business/
 *   (Coaching retreat business model fundamentals, payment structures,
 *   common pitfalls including overloaded schedules and unclear pricing,
 *   small-group economics for coaches.)
 *
 * - Retreat Venues — "Marketing Your Retreat Without Paid Ads"
 *   https://retreatvenues.com/marketing-retreat-no-ads/
 *   (Three-pillar marketing approach for coaching retreats: digital
 *   magazine lead magnet, evergreen email sequences, live info sessions;
 *   referral and partnership channels favored over paid acquisition.)
 *
 * - ReferralRock / Extole — referral marketing statistics
 *   https://referralrock.com/blog/referral-marketing/
 *   https://www.extole.com/blog/15-referral-marketing-statistics-you-need-to-know/
 *   (86% of consumers rely on reviews and referrals when purchasing,
 *   only 2% consider traditional ads; relevant marketing economics for
 *   list-driven and referral-driven coaching retreat sales.)
 *
 * - International Coaching Federation — Global Consumer Awareness Study
 *   https://coachingfederation.org/credentialing/
 *   (85% of coaching clients value credentialed coaches, 28% higher
 *   client satisfaction with credentialed coaches; corporate procurement
 *   filters for ICF accreditation in vendor onboarding.)
 *
 * - Retreat Guru / BookRetreats — European coaching retreat listings
 *   https://retreat.guru/be/coaching-retreats
 *   https://retreat.guru/be/executive-coaching-retreats
 *   https://bookretreats.com/s/wellness-retreats/life-coaching-retreats/europe
 *   (Live European coaching retreat pricing examples, durations clustered
 *   at 3–5 nights and weekend formats, typical group sizes 4–10.)
 *
 * Sources cited for the canonical/generic retreat pricing variant
 * (accessed 2026-04-28):
 *
 * - RetreatVenues — "How to Price Your Retreat: Complete Budget Breakdown"
 *   https://retreatvenues.com/price-retreat-budget/
 *   (Six universal cost categories — venue, meals, activities, supplies,
 *   marketing, transportation — and 5–15% contingency cushion.)
 *
 * - BusinessDojo — "Retreat Pricing Strategy (2026)"
 *   https://dojobusiness.com/blogs/news/spiritual-retreat-ideal-price-point
 *   (Cost structure percentages: venue 30–45%, staff 20–30%, marketing
 *   10–18%, operations 10–15%, materials 5–10%; 25–50% deposit standard;
 *   60–70% breakeven occupancy threshold; ancillary revenue 15–30%
 *   uplift via add-ons.)
 *
 * - Wanderlust Entrepreneur — "Retreat Pricing: How to Properly Crunch
 *   the Numbers"
 *   https://www.wanderlustentrepreneur.com/retreat-pricing/
 *   (First-retreat pricing principle — price for minimum attendance,
 *   not optimistic projections; all-inclusive vs modular comparison
 *   with all-inclusive favoured for clarity and conversion.)
 *
 * - Basundari — "Retreat Business Model" (cross-referenced)
 *   https://basundari.com/retreat-business-model/
 *   (Industry margin and occupancy-leverage data: 90% vs 60% occupancy
 *   roughly doubles net profit due to fixed-cost structure.)
 *
 * - WeTravel Academy — "Liability Waivers and Retreat Legalities"
 *   https://academy.wetravel.com/liability-waivers-retreat-legalities
 *   (Recommendation to incorporate via LLC/BV/Ltd/GmbH and carry
 *   professional liability / errors-and-omissions cover, plus written
 *   participant agreements.)
 */

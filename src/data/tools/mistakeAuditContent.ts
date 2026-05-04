import { AuditVariant } from '@/constants/tools'
import { Language } from '@/types/common'
import type { LocalizedString } from '@/types/tools'

/**
 * Long-form, niche-specific guide content per audit variant. Renders into the
 * ToolPageShell `guideSections` slot for SEO depth and to give value to
 * visitors who arrive from search but do not want to take the quiz.
 *
 * EN-verbatim across NL/DE for v1, matching the calendar pattern. Proper
 * NL/DE translations land once the question copy stabilises.
 */

const sameAcrossLocales = (value: string): LocalizedString => ({
  [Language.EN]: value,
  [Language.NL]: value,
  [Language.DE]: value,
})

export interface AuditGuideSection {
  heading: LocalizedString
  paragraphs: readonly LocalizedString[]
}

export interface AuditPreviewMistake {
  category: LocalizedString
  title: LocalizedString
  body: LocalizedString
}

export interface AuditVariantContent {
  /**
   * Long-form body sections rendered below the audit. Niche-specific so
   * the six variants are meaningfully different to search engines and humans.
   */
  guideSections: readonly AuditGuideSection[]
  /**
   * A pull-out preview of mistakes for visitors who don't want to take the
   * quiz — captures search intent and gives the page real value as content.
   */
  previewMistakes: readonly AuditPreviewMistake[]
  /**
   * Niche-specific FAQ entries (3 per variant). The shared 4-entry FAQ is
   * appended after these by the server composer.
   */
  nicheFaq: readonly { question: LocalizedString; answer: LocalizedString }[]
}

const GENERIC_CONTENT: AuditVariantContent = {
  guideSections: [
    {
      heading: sameAcrossLocales('Why most retreats fail in the same six places'),
      paragraphs: [
        sameAcrossLocales(
          "Across two dozen retreat-industry sources — WeTravel, SquadTrip, Wanderlust Entrepreneur, Retreat & Grow Rich, Insight Timer and others — the same mistakes show up almost every time. They cluster into six categories: pricing and money, audience and marketing, venue and contracts, programme and schedule, legal and risk, and audience fit. A retreat that lands in the green on five of these and red on one will usually still happen. A retreat in the red on two or more is the one that gets cancelled, refunded, or quietly never repeated.",
        ),
        sameAcrossLocales(
          "This audit weights questions by the cost of getting them wrong, not by how often the mistake comes up. \"Did you visit the venue in person?\" is a one-time, irreversible cost. \"Are you using more than one promotion channel?\" is recoverable. The result is a per-category risk band and a ranked list of what to fix first — the small set of decisions that account for most of the financial and reputational damage when retreats go sideways.",
        ),
      ],
    },
    {
      heading: sameAcrossLocales('The five mistakes that account for most retreat losses'),
      paragraphs: [
        sameAcrossLocales(
          "Pricing for sell-out instead of half capacity is the single most expensive mistake. A retreat that only breaks even when fully booked turns every empty bed into a personal loss; one or two drop-outs in the final week tip the maths from \"thin year\" to \"underwriting it from savings\". The fix is to set the price so that the retreat is profitable at roughly 50% occupancy.",
        ),
        sameAcrossLocales(
          "Launching without a warm list is the second. Retreats are a high-trust, four-figure sale; cold audiences do not convert well at that price point. The third is committing to a venue that has not been visited in person — photos hide a steep approach road, an undersized practice room, kitchen capacity, road noise. The fourth is assuming the venue's insurance covers you. It does not. The fifth is a flat or absent cancellation policy: the dispute it produces will cost more than the policy ever would have.",
        ),
      ],
    },
    {
      heading: sameAcrossLocales('What this audit is not'),
      paragraphs: [
        sameAcrossLocales(
          "It is not a calculator. The pricing and profitability calculators in the tools hub do that work; the audit checks whether the assumptions feeding those calculators are sound in the first place. It is not a planning tool either — the launch calendar covers timeline. The audit sits before both: it asks whether the right plan is the one you are about to execute, and where the risk concentrations are.",
        ),
      ],
    },
  ],
  previewMistakes: [
    {
      category: sameAcrossLocales('Pricing'),
      title: sameAcrossLocales('Pricing for a sell-out instead of half-capacity'),
      body: sameAcrossLocales(
        "Most retreats do not sell out — especially first or second editions. Pricing that only works at full capacity makes every empty bed a personal loss. Set the price so the retreat is profitable at ~50% occupancy.",
      ),
    },
    {
      category: sameAcrossLocales('Audience'),
      title: sameAcrossLocales('Launching without a warm list'),
      body: sameAcrossLocales(
        "A four-figure ticket is a high-trust sale. Cold audiences do not convert. Build the list 6+ months before you build the retreat — without it you are cold-selling a 2,000-euro experience to strangers.",
      ),
    },
    {
      category: sameAcrossLocales('Venue'),
      title: sameAcrossLocales('Booking a venue you have not visited'),
      body: sameAcrossLocales(
        "Photos lie. Steep approach roads, undersized practice rooms, kitchen capacity limits and ambient noise do not show up on Instagram. Visit before signing — ideally stay one night.",
      ),
    },
    {
      category: sameAcrossLocales('Legal'),
      title: sameAcrossLocales('Relying on the venue\'s insurance'),
      body: sameAcrossLocales(
        "Their policy covers them. Carry your own general-liability and professional-liability cover, and have guests sign a full assumption-of-risk form — not a one-paragraph waiver.",
      ),
    },
    {
      category: sameAcrossLocales('Programme'),
      title: sameAcrossLocales('A schedule with no downtime'),
      body: sameAcrossLocales(
        "Above 80% structured time produces the burnout guests came to escape. Aim for around 60% structured / 40% unstructured. Integration time is what makes the practice stick.",
      ),
    },
  ],
  nicheFaq: [
    {
      question: sameAcrossLocales('Is this audit useful before I have set a date?'),
      answer: sameAcrossLocales(
        "Yes — most categories (audience, pricing, fit, legal) can be checked the moment you have a draft plan. Programme and venue questions get more accurate once you have a venue shortlist.",
      ),
    },
    {
      question: sameAcrossLocales('How is the score weighted?'),
      answer: sameAcrossLocales(
        "Every option carries 0, 1 or 2 risk points. Eight high-impact questions also carry a 2× multiplier — the mistakes the literature treats as catastrophic (no warm list, pricing for sell-out, no liability paperwork). The result is per-category and ranked top to bottom.",
      ),
    },
    {
      question: sameAcrossLocales('Should I take the audit again later?'),
      answer: sameAcrossLocales(
        "Yes. Most hosts move from amber to green on at least one category between first run and launch. The audit only takes 5 minutes — running it monthly during planning is a useful habit.",
      ),
    },
  ],
}

const FIRST_TIME_CONTENT: AuditVariantContent = {
  guideSections: [
    {
      heading: sameAcrossLocales('What first-time retreat hosts almost always underestimate'),
      paragraphs: [
        sameAcrossLocales(
          "First retreats fail at the budget more than at the practice. Hosts who teach beautifully run into the same handful of money mistakes: forgetting their own travel and time, building the budget without a 10–20% hidden-cost buffer, and pricing based on \"what people seem willing to pay\" rather than what the retreat actually has to earn. The result is a retreat that feels successful in the room but loses 1,500 euros at the desk.",
        ),
        sameAcrossLocales(
          "Time is the second underestimate. Most first-time hosts plan for the retreat week itself; the literature is consistent that the planning, marketing, vendor coordination, and follow-up takes between 80 and 200 hours spread over six months. If your day rate is on the books, that work is paid for. If it is not, the retreat is paying you below minimum wage for the first one.",
        ),
      ],
    },
    {
      heading: sameAcrossLocales('Why first retreats almost never sell out — and why that is fine'),
      paragraphs: [
        sameAcrossLocales(
          "Industry guidance is unanimous: a first retreat reaching 60–70% capacity is doing well. The temptation to price for a full room is exactly what makes the maths fragile. Build the price so the retreat is profitable at half capacity, and treat the back half as upside, not as the plan. This single decision is the difference between \"a successful first edition\" and \"breaking even and never repeating it\".",
        ),
        sameAcrossLocales(
          "The corollary is that a smaller list of warm contacts can sell a first retreat. Twelve guests from a list of 200 is a 6% conversion — entirely normal for a high-trust four-figure offer. The unrealistic version is twelve guests from a list of zero. Build the list while you build the retreat, not after.",
        ),
      ],
    },
    {
      heading: sameAcrossLocales('The three mistakes most likely to derail a first retreat'),
      paragraphs: [
        sameAcrossLocales(
          "First — committing to a venue without staying there. A photo-driven choice produces stories about steep gravel access, missing power points in the practice room, kitchen capacity limits, road noise from the main road, and water pressure that fails at 6am. The fix is non-negotiable: stay at the venue for at least one night before signing.",
        ),
        sameAcrossLocales(
          "Second — not collecting deposits before holding the venue. A first-time host putting down 5,000 euros of their own money to hold a venue, while still hoping people sign up, is how the retreat becomes a personal financial event regardless of how it goes. Get three or four deposits in first.",
        ),
        sameAcrossLocales(
          "Third — assuming the venue's insurance covers you. It does not. Carry your own general-liability cover and have guests sign a full assumption-of-risk form. The cost of doing this is small. The cost of skipping it, in the event you need it, is not recoverable.",
        ),
      ],
    },
  ],
  previewMistakes: [
    {
      category: sameAcrossLocales('Money'),
      title: sameAcrossLocales('Building the budget without a buffer'),
      body: sameAcrossLocales(
        "Transaction fees, gratuities, exchange rates, last-minute supply runs, staff tips — these eat 10–20% of an unbuffered budget. Bake the buffer in.",
      ),
    },
    {
      category: sameAcrossLocales('Pricing'),
      title: sameAcrossLocales('Pricing for sell-out on the first edition'),
      body: sameAcrossLocales(
        "First retreats rarely fill. Price so it is profitable at 50% capacity, not 100%.",
      ),
    },
    {
      category: sameAcrossLocales('Time'),
      title: sameAcrossLocales('Forgetting your own time and travel'),
      body: sameAcrossLocales(
        "Planning, marketing and follow-up is 80–200 hours over six months. Put your day rate and travel on the books, or you are giving yourself a discount you never agreed to.",
      ),
    },
    {
      category: sameAcrossLocales('Venue'),
      title: sameAcrossLocales('Booking on photos and a video call'),
      body: sameAcrossLocales(
        "Stay one night before signing. The thing the photos hide is what creates the refund situation.",
      ),
    },
    {
      category: sameAcrossLocales('Audience'),
      title: sameAcrossLocales('Building the retreat before building the list'),
      body: sameAcrossLocales(
        "A high-trust four-figure ticket needs warm contacts. Twelve guests from a list of 200 is normal. Twelve guests from a list of zero is not.",
      ),
    },
  ],
  nicheFaq: [
    {
      question: sameAcrossLocales('How long does a first retreat take to plan?'),
      answer: sameAcrossLocales(
        "Most first-time hosts spend 80–200 hours over 6 months. The audit checks whether your plan accounts for that time — the most common first-time mistake is leaving it off the books.",
      ),
    },
    {
      question: sameAcrossLocales('What is a realistic capacity for a first retreat?'),
      answer: sameAcrossLocales(
        "60–70% of the maximum is a good first-edition target. Pricing should make the retreat profitable at 50%, with the remaining capacity treated as upside.",
      ),
    },
    {
      question: sameAcrossLocales('Should a first-time host work with a retreat venue or hire à la carte?'),
      answer: sameAcrossLocales(
        "A dedicated retreat venue with itemised, all-in pricing usually has fewer hidden costs and clearer contracts than an à la carte arrangement. The audit's venue questions are tuned to surface those hidden-cost risks.",
      ),
    },
  ],
}

const YOGA_CONTENT: AuditVariantContent = {
  guideSections: [
    {
      heading: sameAcrossLocales('Pricing pitfalls specific to yoga retreats'),
      paragraphs: [
        sameAcrossLocales(
          "Yoga retreat pricing has three places where money quietly leaks. First — your own time, often forgotten because hosting a retreat feels continuous with teaching classes. The planning months and the retreat itself are work and need to be paid for. Second — the income you skip from regular teaching during the retreat block; if you teach 15 classes a week, the retreat costs you that revenue plus a chunk of preparation time. Third — payment processing fees of around 3% on every booking, often forgotten until they show up in the bank statement.",
        ),
        sameAcrossLocales(
          "European yoga retreats split into three rough tiers: budget at €400–800 per person per week, mid-range at €1,000–1,800, and premium at €2,000+. The most common pricing mistake is sitting in the budget tier with mid-range expectations — small group, organic food, individual attention — and ending the year having effectively paid yourself to teach. If the retreat is mid-range in design, it needs to be mid-range in price.",
        ),
      ],
    },
    {
      heading: sameAcrossLocales('Why yoga retreats fill late, or not at all'),
      paragraphs: [
        sameAcrossLocales(
          "The retreats that fill consistently start marketing six months out and treat the warm list as the asset, not the venue. The retreats that stall start promoting six weeks out, lead with the location and dates, and rely on a single channel — usually Instagram. The fix is unglamorous: an email list of past students, a sales page that leads with what changes inside the student rather than the schedule, and at least one in-person mention every week of regular classes during the promotion window.",
        ),
        sameAcrossLocales(
          "A second pattern: yoga retreats that promise too much. \"Better health, deeper practice, business breakthrough, life clarity, weight loss\" reads as disjointed. Pick one transformation and write the whole sales page from there. The retreats that sell out tend to have a sentence-long answer to \"who is this for and what changes\" — \"a reset for women in their 30s and 40s who have stopped showing up to their own practice\" outsells \"a transformative week of yoga and self-discovery\" every time.",
        ),
      ],
    },
    {
      heading: sameAcrossLocales('Insurance and waivers — the gap most yoga teachers miss'),
      paragraphs: [
        sameAcrossLocales(
          "Most yoga teachers carry teaching insurance for their regular classes. Few carry retreat-specific cover, and most assume the venue's policy covers them. It does not. The venue's policy covers the venue. A retreat involves overnight stays, food, transfers, optional excursions, possibly bodywork or breathwork from guest practitioners — all of which sit outside a standard yoga-class policy.",
        ),
        sameAcrossLocales(
          "The waiver question is the second blind spot. A short \"I assume the risks of yoga practice\" sentence is not a legal form. A full assumption-of-risk and release, signed before arrival, listing the specific activities (asana, pranayama, optional excursions, transfers, food provided), is what insurance defends behind. Skipping this turns the waiver itself into a liability when it is needed.",
        ),
      ],
    },
  ],
  previewMistakes: [
    {
      category: sameAcrossLocales('Pricing'),
      title: sameAcrossLocales('Charging budget-tier prices for mid-range retreats'),
      body: sameAcrossLocales(
        "Small groups, organic food and 1:1 attention belong in the €1,000–1,800 tier, not the €400–800 tier. Pricing in the wrong tier means you effectively pay yourself to teach.",
      ),
    },
    {
      category: sameAcrossLocales('Marketing'),
      title: sameAcrossLocales('Promoting six weeks out instead of six months'),
      body: sameAcrossLocales(
        "Yoga retreats that fill start marketing 6 months ahead. Six-week launches stall at half capacity or scramble for last-minute attendees.",
      ),
    },
    {
      category: sameAcrossLocales('Positioning'),
      title: sameAcrossLocales('Promising too many transformations'),
      body: sameAcrossLocales(
        "\"Health, practice, breakthrough, clarity\" reads as disjointed. Pick one transformation and write the page from there.",
      ),
    },
    {
      category: sameAcrossLocales('Legal'),
      title: sameAcrossLocales('Relying on a teaching insurance policy'),
      body: sameAcrossLocales(
        "Class cover does not extend to overnight stays, food, transfers and guest practitioners. Carry retreat-specific cover.",
      ),
    },
    {
      category: sameAcrossLocales('Logistics'),
      title: sameAcrossLocales('Running the practice and the schedule alone'),
      body: sameAcrossLocales(
        "Teaching attentively while also running transfers, dietary changes and the WhatsApp group is what burns out lead facilitators. Bring a logistics buddy.",
      ),
    },
  ],
  nicheFaq: [
    {
      question: sameAcrossLocales('Should yoga retreat insurance be separate from my teaching policy?'),
      answer: sameAcrossLocales(
        "Yes. A standard teaching policy covers regular classes, not overnight stays, food provision, transfers or optional activities. A retreat-specific policy or rider covers the additional surface area.",
      ),
    },
    {
      question: sameAcrossLocales('How long should yoga retreat marketing run?'),
      answer: sameAcrossLocales(
        "Industry consensus is 4–6 months for domestic retreats and 6–9 months for international destinations. Six-week launches consistently underfill.",
      ),
    },
    {
      question: sameAcrossLocales('What is a realistic group size for a yoga retreat?'),
      answer: sameAcrossLocales(
        "Most facilitators land at 8–15 students — small enough to teach attentively, large enough to absorb a fixed venue cost without the per-person price feeling out of reach.",
      ),
    },
  ],
}

const WELLNESS_CONTENT: AuditVariantContent = {
  guideSections: [
    {
      heading: sameAcrossLocales('Why wellness retreats hide more cost than they show'),
      paragraphs: [
        sameAcrossLocales(
          "Wellness retreats run longer (typically 6–8 nights) and use higher-end catering, multiple practitioners, and treatment rooms — all of which create more places for hidden costs to land. Per-guest food at €45–70 per day is a real number; multiplied across seven days and a dozen guests it dwarfs many other line items, and tends to be where first budgets miscalculate. Treatment-room rentals, additional practitioner fees, gratuities for spa staff, and consumables (essential oils, supplements, juices) routinely get left off the spreadsheet.",
        ),
        sameAcrossLocales(
          "The pricing tier sits at €1,500–2,500 per guest for a 6–8 night programme, and the most common pricing mistake is sitting in that tier with under-buffered costs. A 10–20% hidden-cost buffer is essential at this scale; without it, two practitioner cancellations or a kitchen issue absorbs the entire margin. Build the buffer into the price, not into your overdraft.",
        ),
      ],
    },
    {
      heading: sameAcrossLocales('The cancellation-policy trap for 7-day retreats'),
      paragraphs: [
        sameAcrossLocales(
          "Longer retreats produce more cancellations. A 7-day wellness programme costs more, books earlier, and has more time for life to intervene between deposit and arrival. A flat \"no refunds\" policy will lose disputes and reputation. A flat \"full refund up to start\" policy will produce the cancellation that empties one bed in a 10-bed retreat and tips the maths into a loss.",
        ),
        sameAcrossLocales(
          "Industry-standard tiering looks like: full refund minus a non-refundable deposit up to 90 days out, 50% refund 30–90 days out, no refund inside 30 days, with a strong recommendation (or requirement) for travel insurance covering medical and family-emergency cancellations. This is defensible, easy to explain, and aligns with the actual cost recovery curve as the retreat approaches.",
        ),
      ],
    },
    {
      heading: sameAcrossLocales('Practitioner liability across multiple modalities'),
      paragraphs: [
        sameAcrossLocales(
          "Wellness retreats often layer modalities — yoga, breathwork, sound healing, massage, nutritional consults, ice baths, sauna. Each modality has its own risk profile, and a single \"retreat liability\" line on an insurance schedule rarely covers all of them. The audit asks whether subcontractor practitioners are explicitly named in your policy and whether their own cover overlaps yours.",
        ),
        sameAcrossLocales(
          "The waiver question matters more here than for a single-modality retreat. A full assumption-of-risk form should list every activity provided and require an additional signature for higher-risk items (cold exposure, fasting protocols, breathwork that may produce strong physiological responses). This is what your insurance defends behind in the rare scenario where it is needed.",
        ),
      ],
    },
  ],
  previewMistakes: [
    {
      category: sameAcrossLocales('Budget'),
      title: sameAcrossLocales('Under-buffering at €45–70 per guest per day'),
      body: sameAcrossLocales(
        "Wellness food costs add up fast across 7 nights. Without a 10–20% hidden-cost buffer, two practitioner cancellations absorb the margin.",
      ),
    },
    {
      category: sameAcrossLocales('Cancellations'),
      title: sameAcrossLocales('Running a flat refund policy on a 7-day retreat'),
      body: sameAcrossLocales(
        "Longer retreats produce more cancellations. Use a tiered policy (90/30 day windows) and require travel insurance.",
      ),
    },
    {
      category: sameAcrossLocales('Liability'),
      title: sameAcrossLocales('Insurance that does not name guest practitioners'),
      body: sameAcrossLocales(
        "Sound healers, massage therapists, breathwork facilitators each carry distinct risk profiles. A single retreat-liability line rarely covers all of them.",
      ),
    },
    {
      category: sameAcrossLocales('Programme'),
      title: sameAcrossLocales('Stacking high-arousal modalities back to back'),
      body: sameAcrossLocales(
        "Cold exposure, breathwork, fasted yoga and intensive bodywork in a single day produces the burnout guests came to escape. Pace by modality energy, not by available slots.",
      ),
    },
    {
      category: sameAcrossLocales('Pricing'),
      title: sameAcrossLocales('Mid-tier pricing on a premium-tier programme'),
      body: sameAcrossLocales(
        "If the retreat has resident practitioners and treatment rooms, it sits at €2,000+ per guest, not in the €1,500 tier.",
      ),
    },
  ],
  nicheFaq: [
    {
      question: sameAcrossLocales('How does a wellness retreat refund policy work in practice?'),
      answer: sameAcrossLocales(
        "Most successful wellness retreats run a 90/30/0-day tier — full refund minus deposit before 90 days, 50% between 30 and 90 days, no refund inside 30 days — combined with a travel-insurance requirement.",
      ),
    },
    {
      question: sameAcrossLocales('Do guest practitioners need to be on my insurance?'),
      answer: sameAcrossLocales(
        "Either named on yours or carrying their own that explicitly covers retreat work. Verify before contracts go out — afterwards is too late.",
      ),
    },
    {
      question: sameAcrossLocales('What buffer should a 7-night wellness retreat budget include?'),
      answer: sameAcrossLocales(
        "10–20% of the total budget. The longer the retreat and the more practitioners involved, the closer to 20% you should sit.",
      ),
    },
  ],
}

const MEDITATION_CONTENT: AuditVariantContent = {
  guideSections: [
    {
      heading: sameAcrossLocales('Screening mistakes that destroy a silent container'),
      paragraphs: [
        sameAcrossLocales(
          "Meditation retreats — and silent retreats especially — are the format most sensitive to participant fit. An unscreened group will, statistically, produce one or two participants in acute psychological distress who absorb attention, destabilise the container, and require interventions the lead teacher is not always equipped for. The fix is unglamorous: a 10-minute intake call before payment, with explicit questions about active mental-health treatment, recent bereavement, current medication changes, and prior retreat experience.",
        ),
        sameAcrossLocales(
          "An intake form alone is rarely enough. People underreport on forms in ways they do not on a call; the call also lets you describe what the container actually requires (sustained sitting, no devices, possible difficult emotions surfacing) and gives the prospective participant an honest off-ramp. Industry guidance is consistent: a quick screening call protects the retreat, the teacher, and the participant — in that order.",
        ),
      ],
    },
    {
      heading: sameAcrossLocales('Why meditation retreat marketing fails on social'),
      paragraphs: [
        sameAcrossLocales(
          "Meditation retreats convert poorly through Instagram. The format is interior, the imagery is repetitive (cushions, candles, foreheads in profile), and the audience is older and more email-driven than wellness or yoga audiences. The retreats that fill consistently rely on email lists from teaching, sangha mailing lists, and word of mouth — channels that the audit's marketing questions test for.",
        ),
        sameAcrossLocales(
          "A second pattern: meditation retreats that lead with promised transformation. \"Awaken to your true nature\" reads as overstated and faintly evangelical to people who have meditated for a while; \"five days of formal practice with light guidance\" reads as honest. The audience for a meditation retreat is generally meditation-aware and notices the difference. Lead with the structure and lineage, not the promise.",
        ),
      ],
    },
    {
      heading: sameAcrossLocales('Cancellation gotchas for residential dharma centres'),
      paragraphs: [
        sameAcrossLocales(
          "Meditation retreats often run at residential dharma centres on a donation-plus-fee model that is not always written into a contract you signed. The cancellation rules are the centre's, not yours; if a participant cancels and asks for a refund, the answer depends on a policy you may not have read carefully. The audit's venue questions surface this: read the centre's full policy before promoting the retreat, and pass the same terms through to your participants.",
        ),
        sameAcrossLocales(
          "A second issue: many centres have minimum-numbers thresholds. If your retreat books fewer than the minimum, the centre may cancel — and the participants you have signed up are, contractually, your refund problem. Get the minimum-numbers clause and the centre's no-show policy in writing before tickets go on sale.",
        ),
      ],
    },
  ],
  previewMistakes: [
    {
      category: sameAcrossLocales('Screening'),
      title: sameAcrossLocales('Open booking on a silent or contemplative format'),
      body: sameAcrossLocales(
        "Unscreened groups produce one or two acute-distress cases that absorb the teacher's attention. A 10-minute intake call before payment is the difference.",
      ),
    },
    {
      category: sameAcrossLocales('Marketing'),
      title: sameAcrossLocales('Relying on Instagram for a meditation audience'),
      body: sameAcrossLocales(
        "Meditation audiences skew older and email-driven. Sangha lists, teaching lists and word of mouth outperform social by a wide margin.",
      ),
    },
    {
      category: sameAcrossLocales('Positioning'),
      title: sameAcrossLocales('Over-promising transformation'),
      body: sameAcrossLocales(
        "\"Awaken to your true nature\" reads as overstated to a meditation-aware audience. Lead with structure, lineage and schedule.",
      ),
    },
    {
      category: sameAcrossLocales('Venue'),
      title: sameAcrossLocales('Booking a dharma centre without reading the full policy'),
      body: sameAcrossLocales(
        "The centre's cancellation, no-show and minimum-numbers policies become yours by default. Read them before promoting.",
      ),
    },
    {
      category: sameAcrossLocales('Programme'),
      title: sameAcrossLocales('No support pathway for distress'),
      body: sameAcrossLocales(
        "Sustained sitting surfaces difficult material. Have a named on-call person, a quiet room and a clear early-departure policy.",
      ),
    },
  ],
  nicheFaq: [
    {
      question: sameAcrossLocales('Should meditation retreats screen participants?'),
      answer: sameAcrossLocales(
        "Yes. A 10-minute intake call before payment is the standard recommendation — it protects the participant, the teacher, and the container, in that order.",
      ),
    },
    {
      question: sameAcrossLocales('Why does meditation retreat marketing underperform on social?'),
      answer: sameAcrossLocales(
        "The audience skews older and is more email-driven; the imagery is interior and repetitive. Email lists, sangha networks and word of mouth outperform social channels.",
      ),
    },
    {
      question: sameAcrossLocales('How do residential dharma-centre cancellation policies work?'),
      answer: sameAcrossLocales(
        "The centre's policy applies to you, and through you to your participants. Read it carefully — including minimum-numbers and no-show clauses — before tickets go on sale.",
      ),
    },
  ],
}

const COACHING_CONTENT: AuditVariantContent = {
  guideSections: [
    {
      heading: sameAcrossLocales('Group composition mistakes that kill the room'),
      paragraphs: [
        sameAcrossLocales(
          "Coaching retreats live or die on group composition. Mixing strong power differences (boss and direct reports, founder and investor, senior and junior in the same field) suppresses exactly the vulnerability the retreat is selling. Mixing strong skill or experience differences (first-time founder and ten-year operator) creates two retreats running in parallel — one too advanced for half the room, one too basic for the other half. Both produce the same outcome: a polite week with no breakthroughs and no testimonials.",
        ),
        sameAcrossLocales(
          "The fix is screening and a clear \"who this is for\" sentence on the sales page. \"For B2B SaaS founders between €1M and €10M ARR\" filters more usefully than \"for ambitious entrepreneurs\". A short application form before payment is industry standard at this price point and rarely loses qualified leads — it usually increases conversion because the buyer trusts the cohort more.",
        ),
      ],
    },
    {
      heading: sameAcrossLocales('Why coaching retreats need a 50%-capacity breakeven'),
      paragraphs: [
        sameAcrossLocales(
          "Coaching retreats run at smaller cohorts (4–8 typically) and higher prices (€2,000–5,000 per person). Both factors make the maths fragile. Losing one guest from a six-person retreat is a 17% revenue hit; losing two is a third. A retreat priced for full attendance at six does not survive two cancellations the week before. The fix is to set the price so the retreat is profitable at four out of six, with the remaining slots as upside.",
        ),
        sameAcrossLocales(
          "Compounding the issue: coaching clients tend to be senior people whose calendars are unstable, which means cancellations are higher than for yoga or wellness retreats. A non-refundable deposit of 25–50% of the ticket, combined with a tiered cancellation policy and explicit travel-insurance recommendation, is the protection layer that lets the maths still work when one or two people drop out.",
        ),
      ],
    },
    {
      heading: sameAcrossLocales('When the executive client expects more than the contract'),
      paragraphs: [
        sameAcrossLocales(
          "At €2,000+ per ticket, expectations escalate. Senior clients arrive with implicit assumptions about meal quality, room comfort, transfer arrangements, off-hours availability of the facilitator, and 1:1 time. The audit's contract questions surface whether these assumptions are explicitly named in the contract or live as unwritten expectations that produce friction or refund requests.",
        ),
        sameAcrossLocales(
          "The scope-creep mistake is over-promising 1:1 access. \"Unlimited 1:1 time\" sounds generous on a sales page and produces a facilitator whose own practice and rest disappear during the retreat itself. Specific 1:1 windows (two 30-minute sessions per guest, scheduled in advance) are easier to deliver and equally valued by clients who arrived expecting structure, not unlimited access.",
        ),
      ],
    },
  ],
  previewMistakes: [
    {
      category: sameAcrossLocales('Composition'),
      title: sameAcrossLocales('Mixing strong power or skill differences in the same room'),
      body: sameAcrossLocales(
        "Boss + reports, or first-timer + ten-year operator, produces two retreats running in parallel. Screen for cohort fit before payment.",
      ),
    },
    {
      category: sameAcrossLocales('Pricing'),
      title: sameAcrossLocales('Pricing for full attendance on a 4–8 person cohort'),
      body: sameAcrossLocales(
        "Losing one of six is a 17% revenue hit. Price so the retreat is profitable at four of six, not six of six.",
      ),
    },
    {
      category: sameAcrossLocales('Audience'),
      title: sameAcrossLocales('Vague "who this is for" copy at a 3,000-euro price point'),
      body: sameAcrossLocales(
        "\"For ambitious entrepreneurs\" filters nothing. \"For B2B SaaS founders between €1M and €10M ARR\" actually qualifies the cohort.",
      ),
    },
    {
      category: sameAcrossLocales('Logistics'),
      title: sameAcrossLocales('Promising unlimited 1:1 access'),
      body: sameAcrossLocales(
        "Specific 1:1 windows (two 30-minute sessions per guest) are easier to deliver and equally valued by senior clients.",
      ),
    },
    {
      category: sameAcrossLocales('Cancellations'),
      title: sameAcrossLocales('Soft deposit policy on volatile senior calendars'),
      body: sameAcrossLocales(
        "Senior clients cancel more. A 25–50% non-refundable deposit + tiered policy + travel-insurance requirement is the protection layer.",
      ),
    },
  ],
  nicheFaq: [
    {
      question: sameAcrossLocales('How small should a coaching retreat be?'),
      answer: sameAcrossLocales(
        "4–8 is the working range. Below 4 the room feels exposed; above 8 the 1:1 component becomes hard to deliver at the depth the price promises.",
      ),
    },
    {
      question: sameAcrossLocales('Should coaching retreats screen applicants?'),
      answer: sameAcrossLocales(
        "Yes — a short application form before payment is industry standard at this price point. It tends to increase conversion, not decrease it, because the buyer trusts the cohort more.",
      ),
    },
    {
      question: sameAcrossLocales('What deposit structure works for senior clients?'),
      answer: sameAcrossLocales(
        "25–50% non-refundable deposit plus a tiered cancellation policy. Senior calendars are volatile — a soft deposit produces revenue holes that a small cohort cannot absorb.",
      ),
    },
  ],
}

export const AUDIT_CONTENT: Record<AuditVariant, AuditVariantContent> = {
  [AuditVariant.GENERIC]: GENERIC_CONTENT,
  [AuditVariant.FIRST_TIME]: FIRST_TIME_CONTENT,
  [AuditVariant.YOGA]: YOGA_CONTENT,
  [AuditVariant.WELLNESS]: WELLNESS_CONTENT,
  [AuditVariant.MEDITATION]: MEDITATION_CONTENT,
  [AuditVariant.COACHING]: COACHING_CONTENT,
}

/**
 * Sources cited for the audit content (accessed 2026-04-28). Surfaced in a
 * visible footer block on each page for credibility and to give crawlers a
 * factual basis for the claims in the body content.
 */
export const AUDIT_SOURCES: readonly { name: string; url: string }[] = [
  { name: 'WeTravel Academy — retreat planning + budgeting + marketing guides', url: 'https://academy.wetravel.com/' },
  { name: 'SquadTrip — retreat pricing, marketing, and wellness profitability guides', url: 'https://squadtrip.com/guides/' },
  { name: 'Wanderlust Entrepreneur — retreat pricing and venue selection', url: 'https://www.wanderlustentrepreneur.com/' },
  { name: 'Retreat & Grow Rich — top reasons retreats lose money', url: 'https://www.retreatandgrowrich.com/' },
  { name: 'Insight Timer — yoga retreat marketing + first-time mistakes', url: 'https://insighttimer.com/blog/' },
  { name: 'Mindful Ecotourism — why most retreats don\'t make money', url: 'https://www.mindfulecotourism.com/' },
  { name: 'Sarah Canney — five mistakes first time retreat hosts make', url: 'https://sarahcanney.com/blog/five-retreat-mistakes' },
  { name: 'Basundari — retreat cancellation, insurance and business model guides', url: 'https://basundari.com/' },
] as const

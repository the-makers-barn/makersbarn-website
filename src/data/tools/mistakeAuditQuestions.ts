import { Language } from '@/types/common'
import type { LocalizedString } from '@/types/tools'

// Translation helper — emitted by scripts/apply_audit_translations.py.
const localized = (en: string, nl: string, de: string): LocalizedString => ({
  [Language.EN]: en,
  [Language.NL]: nl,
  [Language.DE]: de,
})

/**
 * The 25-question retreat-mistakes audit. Each question maps to a researched
 * mistake category (see commit message / research notes). Weights stay 0–2:
 *   0 = green (no risk signal)
 *   1 = amber (worth flagging)
 *   2 = red   (high-risk pattern from the research)
 *
 * Some questions carry a `multiplier` > 1 because the underlying mistake is
 * disproportionately catastrophic in the literature (e.g. pricing for max
 * capacity, no liability paperwork, no warm audience). The multiplier is
 * applied once to the chosen option's weight at scoring time.
 */

export enum AuditCategory {
  PRICING = 'pricing',
  AUDIENCE = 'audience',
  VENUE = 'venue',
  PROGRAMME = 'programme',
  LEGAL = 'legal',
  FIT = 'fit',
}

export const AUDIT_CATEGORIES_ORDER: readonly AuditCategory[] = [
  AuditCategory.PRICING,
  AuditCategory.AUDIENCE,
  AuditCategory.VENUE,
  AuditCategory.PROGRAMME,
  AuditCategory.LEGAL,
  AuditCategory.FIT,
] as const

export const AUDIT_CATEGORY_LABELS: Record<AuditCategory, LocalizedString> = {
  [AuditCategory.PRICING]: {
    [Language.EN]: 'Pricing & money',
    [Language.NL]: 'Prijs & geld',
    [Language.DE]: 'Preis & Geld',
  },
  [AuditCategory.AUDIENCE]: {
    [Language.EN]: 'Audience & marketing',
    [Language.NL]: 'Publiek & marketing',
    [Language.DE]: 'Publikum & Marketing',
  },
  [AuditCategory.VENUE]: {
    [Language.EN]: 'Venue & contracts',
    [Language.NL]: 'Locatie & contracten',
    [Language.DE]: 'Location & Verträge',
  },
  [AuditCategory.PROGRAMME]: {
    [Language.EN]: 'Programme & schedule',
    [Language.NL]: 'Programma & schema',
    [Language.DE]: 'Programm & Ablauf',
  },
  [AuditCategory.LEGAL]: {
    [Language.EN]: 'Legal & risk',
    [Language.NL]: 'Juridisch & risico',
    [Language.DE]: 'Recht & Risiko',
  },
  [AuditCategory.FIT]: {
    [Language.EN]: 'Audience fit & screening',
    [Language.NL]: 'Doelgroep-fit & screening',
    [Language.DE]: 'Zielgruppen-Fit & Screening',
  },
}

export interface AuditOption {
  id: string
  label: LocalizedString
  weight: 0 | 1 | 2
}

export interface AuditQuestion {
  id: string
  category: AuditCategory
  prompt: LocalizedString
  /** Why this is a mistake — shown in the report when the user picks a risky option. */
  fix: LocalizedString
  options: readonly AuditOption[]
  /** Multiplier applied to the chosen option's weight (default 1). */
  multiplier?: 1 | 2 | 3
  /** Optional cross-link to an existing tool when this mistake is flagged. */
  crossLinkToolKey?: 'pricing' | 'profitability' | 'calendar' | 'host'
}

const yes: AuditOption = { id: 'yes', label: localized('Yes', 'Ja', 'Ja'), weight: 0 }
const no: AuditOption = { id: 'no', label: localized('No', 'Nee', 'Nein'), weight: 2 }
const partly: AuditOption = { id: 'partly', label: localized('Roughly / not in writing', 'Ongeveer / niet op papier', 'Grob — nicht schriftlich'), weight: 1 }

export const AUDIT_QUESTIONS: readonly AuditQuestion[] = [
  // ── PRICING ────────────────────────────────────────────────────────────────
  {
    id: 'p1-priced-from-fear',
    category: AuditCategory.PRICING,
    multiplier: 2,
    prompt: localized('How did you decide your ticket price?', 'Hoe heb je je ticketprijs bepaald?', 'Wie hast du deinen Ticketpreis festgelegt?'),
    fix: localized('Pricing from fear is the most common reason retreats break even or lose money. Build the price up from real costs — your own time, hidden fees, payment processing, tax — plus the margin you actually need.', 'Prijzen vanuit angst is de meest voorkomende reden dat retraites break-even draaien of verlies maken. Bouw de prijs op vanuit reële kosten — je eigen tijd, verborgen kosten, betalingsverwerking, belasting — plus de marge die je daadwerkelijk nodig hebt.', 'Preisstellung aus Angst ist der häufigste Grund, warum Retreats nur den Breakeven erreichen oder Verluste machen. Bau den Preis von den echten Kosten her auf — deine eigene Zeit, versteckte Gebühren, Zahlungsabwicklung, Steuern — plus der Marge, die du tatsächlich brauchst.'),
    crossLinkToolKey: 'pricing',
    options: [
      { id: 'cost-plus', label: localized('Built up from real costs + the margin I need', 'Opgebouwd vanuit reële kosten + de marge die ik nodig heb', 'Auf Basis der echten Kosten plus der Marge, die ich brauche'), weight: 0 },
      { id: 'matched', label: localized('I matched what other hosts charge', 'Ik heb gespiegeld wat andere hosts vragen', 'Ich habe mich an dem orientiert, was andere Hosts verlangen'), weight: 1 },
      { id: 'gut', label: localized('What I think people will pay', 'Wat ik denk dat mensen ervoor willen betalen', 'Was ich glaube, was die Leute zahlen würden'), weight: 2 },
      { id: 'undecided', label: localized('Not sure yet', 'Nog niet zeker', 'Noch nicht sicher'), weight: 2 },
    ],
  },
  {
    id: 'p2-breakeven-basis',
    category: AuditCategory.PRICING,
    multiplier: 2,
    prompt: localized('At what occupancy does your retreat break even?', 'Bij welke bezetting draait je retraite break-even?', 'Bei welcher Auslastung ist dein Retreat im Breakeven?'),
    fix: localized('Most successful hosts price so the retreat breaks even at ~50% capacity. Pricing for "fully sold out" is the single most common path to losing money.', 'De meest succesvolle hosts prijzen zo dat de retraite break-even draait bij circa 50% bezetting. Prijzen alsof je "helemaal volgeboekt" bent, is veruit de meest voorkomende route naar verlies.', 'Die meisten erfolgreichen Hosts kalkulieren so, dass das Retreat bei rund 50 % Auslastung den Breakeven erreicht. Auf "voll ausgebucht" zu kalkulieren ist der häufigste Weg, Geld zu verlieren.'),
    crossLinkToolKey: 'profitability',
    options: [
      { id: 'half', label: localized('At ~50% full or below', 'Bij circa 50% bezetting of lager', 'Bei rund 50 % oder weniger'), weight: 0 },
      { id: 'twothirds', label: localized('At ~70% full', 'Bij circa 70% bezetting', 'Bei rund 70 %'), weight: 1 },
      { id: 'sellout', label: localized('Only when fully sold out', 'Pas bij volledig volgeboekt', 'Erst bei voller Auslastung'), weight: 2 },
      { id: 'unknown', label: localized('I haven\'t calculated this', 'Dit heb ik niet berekend', 'Ich habe das nicht berechnet'), weight: 2 },
    ],
  },
  {
    id: 'p3-buffer',
    category: AuditCategory.PRICING,
    prompt: localized('Did you add a 10–20% buffer for hidden costs?', 'Heb je een buffer van 10–20% voor verborgen kosten meegerekend?', 'Hast du einen Puffer von 10–20 % für versteckte Kosten eingeplant?'),
    fix: localized('Transaction fees, gratuities, exchange rates, last-minute supply runs, staff tips — these eat 10–20% of an unbuffered budget. Bake the buffer into the price, not your savings.', 'Transactiekosten, fooien, wisselkoersen, last-minute boodschappen, fooien voor staf — die slokken samen 10–20% van een budget zonder buffer op. Bouw die buffer in de prijs, niet in je spaargeld.', 'Transaktionsgebühren, Trinkgelder, Wechselkurse, kurzfristige Einkäufe, Tipps fürs Personal — diese Posten verschlingen 10–20 % eines Budgets ohne Puffer. Bau den Puffer in den Preis ein, nicht in deine Ersparnisse.'),
    options: [yes, partly, no],
  },
  {
    id: 'p4-pay-yourself',
    category: AuditCategory.PRICING,
    multiplier: 2,
    prompt: localized('Is your own time and travel a budget line item?', 'Staan jouw eigen tijd en reiskosten als post in het budget?', 'Sind deine eigene Zeit und Anreise eine Position im Budget?'),
    fix: localized('Hosting is a generous act, but it should not be free. Most under-earning hosts forgot to pay themselves and forgot to include their own flights and lodging.', 'Hosten is een gulle daad, maar het mag niet gratis zijn. De meeste hosts die te weinig overhouden, vergaten zichzelf te betalen en vergaten hun eigen vluchten en accommodatie mee te rekenen.', 'Hosting ist ein großzügiger Akt, aber er sollte nicht umsonst sein. Die meisten unterbezahlten Hosts haben vergessen, sich selbst zu bezahlen — und ihre eigenen Flüge und Übernachtungen einzuplanen.'),
    options: [
      { id: 'yes-paid', label: localized('Yes, with a day rate', 'Ja, met een dagtarief', 'Ja, mit einem Tagessatz'), weight: 0 },
      { id: 'travel-only', label: localized('Travel only', 'Alleen reiskosten', 'Nur die Anreise'), weight: 1 },
      { id: 'no', label: localized('No, I take what is left over', 'Nee, ik neem wat overblijft', 'Nein, ich nehme, was übrig bleibt'), weight: 2 },
    ],
  },
  {
    id: 'p5-deposits',
    category: AuditCategory.PRICING,
    prompt: localized('Do you collect non-refundable deposits before holding a venue?', 'Vraag je niet-restitueerbare aanbetalingen vóórdat je een locatie vastlegt?', 'Holst du nicht erstattbare Anzahlungen ein, bevor du eine Location buchst?'),
    fix: localized('Putting down a 5,000+ euro venue deposit before any guest has paid is how hosts end up personally underwriting their own retreat. Get 3–4 deposits in first.', 'Een aanbetaling van 5.000+ euro aan de locatie betalen voordat één gast heeft betaald, is dé manier om je eigen retraite uit eigen zak te financieren. Haal eerst 3 à 4 aanbetalingen binnen.', 'Eine Location-Anzahlung von 5.000 € oder mehr zu hinterlegen, bevor ein einziger Gast bezahlt hat, ist der schnellste Weg, das eigene Retreat persönlich vorzufinanzieren. Hol dir vorher 3–4 Anzahlungen.'),
    options: [yes, partly, no],
  },

  // ── AUDIENCE & MARKETING ───────────────────────────────────────────────────
  {
    id: 'a1-warm-list',
    category: AuditCategory.AUDIENCE,
    multiplier: 2,
    prompt: localized('How big is the warm list (email + DMs) you can promote to?', 'Hoe groot is het warme netwerk (e-mail + DM\'s) waaraan je kunt promoten?', 'Wie groß ist deine warme Liste (E-Mail + DMs), an die du bewerben kannst?'),
    fix: localized('Retreats are a high-trust, high-ticket sale. Without a warm list you trust, you are cold-selling a 2,000-euro ticket. Build the list before you build the retreat.', 'Retraites zijn een verkoop met hoog vertrouwen en een hoog ticket. Zonder warm netwerk dat je vertrouwt, verkoop je een ticket van 2.000 euro koud. Bouw eerst het netwerk, dan de retraite.', 'Retreats sind ein hochpreisiger Verkauf, der auf Vertrauen basiert. Ohne eine warme Liste, die dir vertraut, verkaufst du ein Ticket für 2.000 € kalt. Bau die Liste auf, bevor du das Retreat planst.'),
    crossLinkToolKey: 'host',
    options: [
      { id: 'large', label: localized('500+ engaged contacts', '500+ betrokken contacten', '500+ engagierte Kontakte'), weight: 0 },
      { id: 'medium', label: localized('100–500 contacts', '100–500 contacten', '100–500 Kontakte'), weight: 1 },
      { id: 'small', label: localized('Under 100, mostly social followers', 'Minder dan 100, vooral social media-volgers', 'Unter 100, vor allem Social-Media-Follower'), weight: 2 },
      { id: 'none', label: localized('No real list yet', 'Nog geen echte lijst', 'Noch keine echte Liste'), weight: 2 },
    ],
  },
  {
    id: 'a2-runway',
    category: AuditCategory.AUDIENCE,
    multiplier: 2,
    prompt: localized('How many months before the retreat does promotion begin?', 'Hoeveel maanden vóór de retraite begin je met promoten?', 'Wie viele Monate vor dem Retreat startet deine Bewerbung?'),
    fix: localized('Six weeks is too late: most hosts who marketed late report half-empty rooms. Plan for at least 4–6 months of marketing runway.', 'Zes weken is te laat: de meeste hosts die laat begonnen met marketen, melden halflege kamers. Reken op minstens 4–6 maanden marketingrunway.', 'Sechs Wochen sind zu spät: Die meisten Hosts, die spät vermarkten, berichten von halb leeren Zimmern. Plane mindestens 4–6 Monate Marketing-Vorlauf.'),
    crossLinkToolKey: 'calendar',
    options: [
      { id: 'long', label: localized('6+ months', '6+ maanden', '6+ Monate'), weight: 0 },
      { id: 'medium', label: localized('3–5 months', '3–5 maanden', '3–5 Monate'), weight: 1 },
      { id: 'short', label: localized('Under 3 months', 'Minder dan 3 maanden', 'Unter 3 Monaten'), weight: 2 },
    ],
  },
  {
    id: 'a3-copy-shape',
    category: AuditCategory.AUDIENCE,
    prompt: localized('Does your hero copy lead with transformation or with logistics?', 'Begint je hero-tekst met transformatie of met logistiek?', 'Setzt deine Hero-Copy bei der Transformation oder bei der Logistik an?'),
    fix: localized('"Come back to yourself" outsells "3 nights, 4 days in Costa Rica". Lead with the change in the guest, not the itinerary.', '"Kom thuis bij jezelf" verkoopt beter dan "3 nachten, 4 dagen in Costa Rica". Open met de verandering bij de gast, niet met het programma.', '"Komm zu dir selbst zurück" verkauft sich besser als "3 Nächte, 4 Tage in Costa Rica". Beginne mit der Veränderung beim Gast, nicht mit der Tagesplanung.'),
    options: [
      { id: 'transform', label: localized('Transformation first', 'Transformatie eerst', 'Transformation zuerst'), weight: 0 },
      { id: 'mixed', label: localized('A mix', 'Een mix', 'Eine Mischung'), weight: 1 },
      { id: 'logistics', label: localized('Mostly dates, location, what is included', 'Vooral data, locatie en wat erbij is inbegrepen', 'Vor allem Daten, Ort, was inkludiert ist'), weight: 2 },
    ],
  },
  {
    id: 'a4-channel-mix',
    category: AuditCategory.AUDIENCE,
    prompt: localized('Are you using more than one promotion channel?', 'Gebruik je meer dan één promotiekanaal?', 'Nutzt du mehr als einen Promotion-Kanal?'),
    fix: localized('Email-only or Instagram-only retreats stall at half capacity. Combine email + social + in-person word of mouth + at least one partner channel.', 'Retraites die alleen via e-mail of alleen via Instagram lopen, blijven steken op halve bezetting. Combineer e-mail + social + mond-tot-mondreclame in persoon + minstens één partnerkanaal.', 'Retreats, die nur per E-Mail oder nur über Instagram beworben werden, bleiben bei halber Auslastung stecken. Kombiniere E-Mail + Social Media + persönliche Mund-zu-Mund-Empfehlung + mindestens einen Partnerkanal.'),
    options: [
      { id: 'multi', label: localized('Three or more channels', 'Drie of meer kanalen', 'Drei oder mehr Kanäle'), weight: 0 },
      { id: 'two', label: localized('Two channels', 'Twee kanalen', 'Zwei Kanäle'), weight: 1 },
      { id: 'one', label: localized('Just one', 'Slechts één', 'Nur einen'), weight: 2 },
    ],
  },

  // ── VENUE & CONTRACTS ──────────────────────────────────────────────────────
  {
    id: 'v1-visited',
    category: AuditCategory.VENUE,
    multiplier: 2,
    prompt: localized('Have you visited the venue in person, or stayed there?', 'Heb je de locatie persoonlijk bezocht of er overnacht?', 'Hast du die Location persönlich besucht oder dort übernachtet?'),
    fix: localized('Photos lie. Steep unpaved access roads, undersized practice rooms, kitchen capacity, noise — none of these show up on Instagram. Visit before you sign.', 'Foto\'s liegen. Steile onverharde toegangswegen, te kleine oefenruimtes, keukencapaciteit, geluidsoverlast — niets daarvan zie je op Instagram. Ga langs voordat je tekent.', 'Fotos lügen. Steile, unbefestigte Zufahrtswege, zu kleine Praxisräume, Küchenkapazität, Lärm — das alles taucht auf Instagram nicht auf. Besuch die Location, bevor du unterschreibst.'),
    options: [
      { id: 'stayed', label: localized('Stayed at least one night', 'Minstens één nacht overnacht', 'Mindestens eine Nacht übernachtet'), weight: 0 },
      { id: 'visited', label: localized('Day visit only', 'Alleen daguitje', 'Nur Tagesbesuch'), weight: 1 },
      { id: 'photos', label: localized('Photos and a video call', 'Foto\'s en een videocall', 'Fotos und ein Videocall'), weight: 2 },
    ],
  },
  {
    id: 'v2-contract',
    category: AuditCategory.VENUE,
    prompt: localized('Are all promises (capacity, food, staff, equipment) in the contract?', 'Staan alle afspraken (capaciteit, eten, staf, materiaal) in het contract?', 'Stehen alle Zusagen (Kapazität, Verpflegung, Personal, Equipment) im Vertrag?'),
    fix: localized('If it is not in the contract, it does not exist. Push back and get every promise in writing before you sign — this is the most common venue regret.', 'Wat niet in het contract staat, bestaat niet. Push terug en zet elke afspraak op papier voordat je tekent — dit is de meest voorkomende locatiespijt.', 'Was nicht im Vertrag steht, existiert nicht. Hak nach und lass jede Zusage schriftlich festhalten, bevor du unterschreibst — das ist das häufigste Location-Bedauern.'),
    options: [yes, partly, no],
  },
  {
    id: 'v3-deposit-size',
    category: AuditCategory.VENUE,
    prompt: localized('What deposit is the venue asking for?', 'Welke aanbetaling vraagt de locatie?', 'Welche Anzahlung verlangt die Location?'),
    fix: localized('A normal deposit is 25–50%. Above 50% is a red flag — either the venue is over-leveraged or your contract is unbalanced.', 'Een gangbare aanbetaling is 25–50%. Boven de 50% is een rode vlag — óf de locatie zit te krap, óf je contract is uit balans.', 'Eine normale Anzahlung liegt bei 25–50 %. Über 50 % ist ein Warnsignal — entweder die Location ist überschuldet oder dein Vertrag ist unausgewogen.'),
    options: [
      { id: 'normal', label: localized('25–50%', '25–50%', '25–50 %'), weight: 0 },
      { id: 'high', label: localized('Above 50%', 'Boven 50%', 'Über 50 %'), weight: 1 },
      { id: 'very-high', label: localized('Above 75% or full prepayment', 'Boven 75% of volledige vooruitbetaling', 'Über 75 % oder vollständige Vorauszahlung'), weight: 2 },
    ],
  },
  {
    id: 'v4-fees-itemised',
    category: AuditCategory.VENUE,
    prompt: localized('Are cleaning, gratuities, taxes, and surcharges itemised in writing?', 'Zijn schoonmaak, fooien, belastingen en toeslagen schriftelijk gespecificeerd?', 'Sind Reinigung, Trinkgelder, Steuern und Zuschläge schriftlich aufgeschlüsselt?'),
    fix: localized('À la carte venues are where hidden fees live. Demand a line-itemised quote — sales tax, gratuities, cleaning, transfers, late check-out — before signing.', 'À la carte-locaties zijn waar de verborgen kosten zich verschuilen. Eis een gespecificeerde offerte — btw, fooien, schoonmaak, transfers, late check-out — voordat je tekent.', 'À-la-carte-Locations sind das Zuhause versteckter Gebühren. Verlange ein detailliert aufgeschlüsseltes Angebot — Mehrwertsteuer, Trinkgelder, Reinigung, Transfers, späte Abreise — bevor du unterschreibst.'),
    options: [yes, partly, no],
  },

  // ── PROGRAMME & SCHEDULE ───────────────────────────────────────────────────
  {
    id: 'pr1-density',
    category: AuditCategory.PROGRAMME,
    prompt: localized('Roughly how much of each day is structured activity?', 'Hoeveel van elke dag is gestructureerde activiteit, ongeveer?', 'Wie viel von jedem Tag ist ungefähr strukturierte Aktivität?'),
    fix: localized('Research-backed retreats sit around 60% structured / 40% unstructured. Above 80% structured leads to attendee burnout — the very thing they came to escape.', 'Goed onderbouwde retraites zitten rond 60% gestructureerd / 40% ongestructureerd. Boven de 80% gestructureerd leidt tot burn-out bij deelnemers — precies datgene waarvoor ze juist kwamen om aan te ontsnappen.', 'Studien zeigen: Gut funktionierende Retreats liegen bei rund 60 % strukturierter und 40 % unstrukturierter Zeit. Über 80 % strukturiert führt zum Burnout der Teilnehmer — also genau dem, dem sie entkommen wollten.'),
    options: [
      { id: 'balanced', label: localized('Around 60% — there is real downtime', 'Rond 60% — er is echte vrije tijd', 'Rund 60 % — es gibt echte freie Zeit'), weight: 0 },
      { id: 'busy', label: localized('Around 75–80%', 'Rond 75–80%', 'Rund 75–80 %'), weight: 1 },
      { id: 'packed', label: localized('Above 80% — every slot is filled', 'Boven 80% — elk slot is gevuld', 'Über 80 % — jeder Slot ist gefüllt'), weight: 2 },
    ],
  },
  {
    id: 'pr2-host-doing-logistics',
    category: AuditCategory.PROGRAMME,
    prompt: localized('Will the lead facilitator also be running on-site logistics?', 'Doet de hoofdfacilitator ook de logistiek ter plaatse?', 'Wird der lead Facilitator vor Ort auch die Logistik übernehmen?'),
    fix: localized('When the facilitator runs the schedule, transfers, dietary changes, and the WhatsApp group at the same time, the practice quality drops. Have a logistics buddy on site.', 'Als de facilitator tegelijk het schema, de transfers, dieetwijzigingen en de WhatsApp-groep beheert, daalt de kwaliteit van de praktijk. Zorg voor een logistiek partner ter plaatse.', 'Wenn der Facilitator gleichzeitig Zeitplan, Transfers, Ernährungsänderungen und WhatsApp-Gruppe managt, leidet die Qualität der Praxis. Hab einen Logistik-Buddy vor Ort.'),
    options: [
      { id: 'separate', label: localized('No, a logistics buddy is on site', 'Nee, er is een logistiek partner ter plaatse', 'Nein, ein Logistik-Buddy ist vor Ort'), weight: 0 },
      { id: 'mostly', label: localized('Mostly separate, but I cover gaps', 'Grotendeels gescheiden, maar ik vul gaten op', 'Größtenteils getrennt, aber ich springe ein'), weight: 1 },
      { id: 'solo', label: localized('Yes, I am doing both', 'Ja, ik doe beide', 'Ja, ich mache beides'), weight: 2 },
    ],
  },
  {
    id: 'pr3-outcomes-promised',
    category: AuditCategory.PROGRAMME,
    prompt: localized('How many transformations does your sales page promise?', 'Hoeveel transformaties belooft je verkooppagina?', 'Wie viele Transformationen verspricht deine Sales Page?'),
    fix: localized('Promising "more money + best-shape body + better relationships + spiritual awakening" reads as disjointed. Pick one transformation and own it.', 'Beloven dat je "meer geld + topfit lichaam + betere relaties + spirituele ontwaking" krijgt, leest als versnipperd. Kies één transformatie en claim die.', 'Wer "mehr Geld + bester Körper + bessere Beziehungen + spirituelles Erwachen" verspricht, wirkt unstimmig. Wähle eine Transformation und stehe dafür ein.'),
    options: [
      { id: 'one', label: localized('One clear outcome', 'Eén helder resultaat', 'Ein klares Ergebnis'), weight: 0 },
      { id: 'two', label: localized('Two related outcomes', 'Twee gerelateerde resultaten', 'Zwei verwandte Ergebnisse'), weight: 1 },
      { id: 'many', label: localized('Three or more', 'Drie of meer', 'Drei oder mehr'), weight: 2 },
    ],
  },
  {
    id: 'pr4-backup-plan',
    category: AuditCategory.PROGRAMME,
    prompt: localized('Is there a written plan for bad weather, illness, or a no-show facilitator?', 'Is er een geschreven plan voor slecht weer, ziekte of een afwezige facilitator?', 'Gibt es einen schriftlichen Plan B für schlechtes Wetter, Krankheit oder einen ausfallenden Facilitator?'),
    fix: localized('A 5-line plan B per scenario (rain, illness, transfers, kitchen issue) is the difference between a story you laugh about and a refund situation.', 'Een plan B van vijf regels per scenario (regen, ziekte, transfers, keukenprobleem) is het verschil tussen een verhaal waar je later om lacht en een terugbetalingssituatie.', 'Ein 5-Zeilen-Plan B pro Szenario (Regen, Krankheit, Transfer, Küchenpanne) ist der Unterschied zwischen einer Anekdote zum Lachen und einer Erstattungssituation.'),
    options: [yes, partly, no],
  },

  // ── LEGAL & RISK ───────────────────────────────────────────────────────────
  {
    id: 'l1-insurance',
    category: AuditCategory.LEGAL,
    multiplier: 2,
    prompt: localized('Do you carry your own retreat liability insurance?', 'Heb je je eigen aansprakelijkheidsverzekering voor retraites?', 'Hast du eine eigene Retreat-Haftpflichtversicherung?'),
    fix: localized('Assuming the venue\'s insurance covers you is the most common legal mistake. Their policy covers them. Get your own general liability + professional liability cover.', 'Aannemen dat de verzekering van de locatie jou dekt, is de meest voorkomende juridische fout. Hun polis dekt hen. Regel je eigen aansprakelijkheids- en beroepsaansprakelijkheidsverzekering.', 'Anzunehmen, dass die Versicherung der Location dich abdeckt, ist der häufigste Rechtsfehler. Deren Police schützt sie. Hol dir deine eigene Betriebs- und Berufshaftpflichtversicherung.'),
    options: [
      { id: 'own', label: localized('Yes, my own policy', 'Ja, mijn eigen polis', 'Ja, eine eigene Police'), weight: 0 },
      { id: 'venue', label: localized('I\'m relying on the venue\'s', 'Ik leun op die van de locatie', 'Ich verlasse mich auf die der Location'), weight: 2 },
      { id: 'none', label: localized('No coverage in place', 'Geen dekking geregeld', 'Keine Versicherung vorhanden'), weight: 2 },
    ],
  },
  {
    id: 'l2-waivers',
    category: AuditCategory.LEGAL,
    multiplier: 2,
    prompt: localized('Will guests sign a full liability + assumption-of-risk form?', 'Ondertekenen gasten een volledige aansprakelijkheids- en risico-aanvaardingsverklaring?', 'Unterschreiben deine Gäste eine vollwertige Haftungs- und Risikoübernahmeerklärung?'),
    fix: localized('A short waiver is not a legal form. Use a full assumption-of-risk + release tailored to retreat activities, signed before arrival.', 'Een korte vrijwaring is geen juridisch document. Gebruik een volledige risico-aanvaardings- en vrijwaringsverklaring, toegespitst op retraite-activiteiten, ondertekend vóór aankomst.', 'Eine kurze Verzichtserklärung ist kein rechtliches Dokument. Nutze eine vollständige Risikoübernahme- und Freistellungserklärung, zugeschnitten auf die Retreat-Aktivitäten — vor Anreise unterschrieben.'),
    options: [
      { id: 'full', label: localized('Full legal form, signed pre-arrival', 'Volledig juridisch document, ondertekend vóór aankomst', 'Vollwertiges Rechtsdokument, vor Anreise unterschrieben'), weight: 0 },
      { id: 'short', label: localized('A short waiver', 'Een korte vrijwaring', 'Eine kurze Verzichtserklärung'), weight: 1 },
      { id: 'none', label: localized('None planned', 'Geen plannen', 'Nicht geplant'), weight: 2 },
    ],
  },
  {
    id: 'l3-cancellation',
    category: AuditCategory.LEGAL,
    prompt: localized('Is your cancellation policy tiered (e.g. > 90 days vs < 30 days)?', 'Heeft je annuleringsbeleid meerdere niveaus (bijv. > 90 dagen vs < 30 dagen)?', 'Ist deine Stornoregelung gestaffelt (z. B. > 90 Tage vs. < 30 Tage)?'),
    fix: localized('A flat "no refunds" or "100% refund up to start" policy will lose disputes and goodwill. A tiered policy is industry standard and easier to defend.', 'Een vlak "geen restitutie"- of "100% restitutie tot aan de start"-beleid verliest disputen en goodwill. Een gelaagd beleid is industriestandaard en makkelijker te verdedigen.', 'Eine pauschale "keine Erstattung"- oder "100 % Erstattung bis Beginn"-Regelung verliert Streitfälle und Goodwill. Eine gestaffelte Regelung ist Branchenstandard und leichter zu verteidigen.'),
    options: [
      { id: 'tiered', label: localized('Yes, multiple tiers', 'Ja, meerdere niveaus', 'Ja, mehrere Stufen'), weight: 0 },
      { id: 'flat', label: localized('Flat policy', 'Vlak beleid', 'Pauschale Regelung'), weight: 1 },
      { id: 'none', label: localized('No written policy', 'Geen schriftelijk beleid', 'Keine schriftliche Regelung'), weight: 2 },
    ],
  },
  {
    id: 'l4-travel-insurance',
    category: AuditCategory.LEGAL,
    prompt: localized('Do you require or strongly recommend travel insurance?', 'Verplicht of adviseer je nadrukkelijk een reisverzekering?', 'Verlangst oder empfiehlst du dringend eine Reiseversicherung?'),
    fix: localized('Medical, family-emergency, and trip-cancellation insurance is what protects guests when life intervenes. Make it a booking requirement, not a footnote.', 'Een verzekering voor medische zaken, familie-noodgevallen en reisannulering beschermt gasten als het leven tussenbeide komt. Maak het een boekingsvereiste, geen voetnoot.', 'Eine Versicherung für Krankheit, Familiennotfälle und Reiserücktritt schützt deine Gäste, wenn das Leben dazwischenkommt. Mach sie zur Buchungsvoraussetzung, nicht zur Fußnote.'),
    options: [
      { id: 'required', label: localized('Required', 'Verplicht', 'Verpflichtend'), weight: 0 },
      { id: 'recommended', label: localized('Recommended', 'Aanbevolen', 'Empfohlen'), weight: 1 },
      { id: 'silent', label: localized('Not mentioned', 'Niet genoemd', 'Nicht erwähnt'), weight: 2 },
    ],
  },

  // ── FIT & SCREENING ────────────────────────────────────────────────────────
  {
    id: 'f1-who-its-for',
    category: AuditCategory.FIT,
    prompt: localized('Can you describe who this retreat is for in one sentence?', 'Kun je in één zin omschrijven voor wie deze retraite is?', 'Kannst du in einem Satz beschreiben, für wen dieses Retreat ist?'),
    fix: localized('Retreats that try to please everyone please no one. "For burnt-out 35-50 yr-old founders" outsells "for anyone seeking peace" every time.', 'Retraites die iedereen willen plezieren, plezieren niemand. "Voor opgebrande oprichters van 35–50" verkoopt elke keer beter dan "voor iedereen die rust zoekt".', 'Retreats, die es allen recht machen wollen, sprechen niemanden an. "Für ausgebrannte Gründer zwischen 35 und 50" verkauft sich jedes Mal besser als "für alle, die Frieden suchen".'),
    options: [
      { id: 'sharp', label: localized('Yes — a single, sharp sentence', 'Ja — één scherpe zin', 'Ja — ein einziger, scharfer Satz'), weight: 0 },
      { id: 'fuzzy', label: localized('Roughly, but it\'s a bit broad', 'Ongeveer, maar nog wat breed', 'Grob, aber etwas zu breit'), weight: 1 },
      { id: 'none', label: localized('Not really', 'Niet echt', 'Nicht wirklich'), weight: 2 },
    ],
  },
  {
    id: 'f2-screening',
    category: AuditCategory.FIT,
    prompt: localized('Is there a screening step (intake form or call) before payment?', 'Is er een screeningstap (intakeformulier of -gesprek) vóór betaling?', 'Gibt es einen Screening-Schritt (Intake-Formular oder -Call) vor der Zahlung?'),
    fix: localized('Unscreened groups end up with one or two participants in acute crisis who absorb attention from everyone else. A short intake form filters fit, allergies, and red flags.', 'Ongescreende groepen eindigen met één of twee deelnemers in acute crisis die alle aandacht opslokken. Een kort intakeformulier filtert op fit, allergieën en rode vlaggen.', 'Ungescreente Gruppen enden mit ein, zwei Teilnehmern in akuter Krise, die alle Aufmerksamkeit absorbieren. Ein kurzes Intake-Formular filtert nach Fit, Allergien und Warnsignalen.'),
    options: [
      { id: 'call', label: localized('Intake call for every guest', 'Intakegesprek voor elke gast', 'Intake-Call mit jedem Gast'), weight: 0 },
      { id: 'form', label: localized('Intake form only', 'Alleen intakeformulier', 'Nur Intake-Formular'), weight: 1 },
      { id: 'none', label: localized('Open booking, no screening', 'Open boeking, geen screening', 'Offene Buchung, kein Screening'), weight: 2 },
    ],
  },
  {
    id: 'f3-power-mix',
    category: AuditCategory.FIT,
    prompt: localized('Does the group mix strong power or skill differences?', 'Mengt de groep grote verschillen in macht of vaardigheid?', 'Mischt die Gruppe starke Macht- oder Kompetenz-Unterschiede?'),
    fix: localized('Mixed-power rooms suppress the very vulnerability the retreat is selling. If you must mix, structure for it (sub-groups, ground rules, optional sessions).', 'Een groep met machtsverschillen onderdrukt juist de kwetsbaarheid waar de retraite om draait. Als je toch mengt, geef het structuur (subgroepen, grondregels, optionele sessies).', 'Räume mit gemischten Machtverhältnissen unterdrücken genau die Verletzlichkeit, die das Retreat verspricht. Wenn du mischen musst, gestalte das Format entsprechend (Untergruppen, Grundregeln, optionale Sessions).'),
    options: [
      { id: 'no', label: localized('No, the group is fairly homogenous', 'Nee, de groep is redelijk homogeen', 'Nein, die Gruppe ist ziemlich homogen'), weight: 0 },
      { id: 'structured', label: localized('Yes, but the format accounts for it', 'Ja, maar het format houdt er rekening mee', 'Ja, aber das Format berücksichtigt das'), weight: 1 },
      { id: 'unstructured', label: localized('Yes, and the format does not address it', 'Ja, en het format vangt het niet op', 'Ja, und das Format geht nicht darauf ein'), weight: 2 },
    ],
  },
  {
    id: 'f4-on-call-care',
    category: AuditCategory.FIT,
    prompt: localized('Is there a clear support pathway if a guest has a wellbeing crisis on retreat?', 'Is er een duidelijke ondersteuningsroute als een gast tijdens de retraite een welzijnscrisis krijgt?', 'Gibt es einen klaren Support-Pfad, wenn ein Gast vor Ort eine Wohlbefindens-Krise hat?'),
    fix: localized('You will have one. Plan for it: a named on-call person, a quiet room, the local emergency number, the policy on early departure refunds.', 'Je gaat er een meemaken. Bereid je voor: een aangewezen oproepbaar persoon, een rustige ruimte, het lokale alarmnummer en het beleid rond restitutie bij vroegtijdig vertrek.', 'Du wirst eine erleben. Plane vor: eine namentlich benannte Ansprechperson auf Abruf, einen ruhigen Raum, die örtliche Notrufnummer, die Regelung zu Erstattungen bei vorzeitiger Abreise.'),
    options: [yes, partly, no],
  },
] as const

export const AUDIT_QUESTIONS_BY_CATEGORY: Record<
  AuditCategory,
  readonly AuditQuestion[]
> = AUDIT_CATEGORIES_ORDER.reduce(
  (acc, category) => {
    acc[category] = AUDIT_QUESTIONS.filter((q) => q.category === category)
    return acc
  },
  {} as Record<AuditCategory, readonly AuditQuestion[]>,
)

export interface CategoryRiskBand {
  min: number
  max: number
  band: 'green' | 'amber' | 'red'
}

/**
 * Risk bands as a fraction of the category's max possible weighted score.
 * Used to colour each category card on the result page.
 */
export const CATEGORY_RISK_BANDS: readonly CategoryRiskBand[] = [
  { min: 0, max: 0.2, band: 'green' },
  { min: 0.2, max: 0.5, band: 'amber' },
  { min: 0.5, max: 1, band: 'red' },
] as const

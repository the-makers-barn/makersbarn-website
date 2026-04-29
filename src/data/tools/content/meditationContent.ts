import type { CalculatorVariantContent } from '@/types/tools'

import { localized } from './helpers'

export const MEDITATION_CONTENT: CalculatorVariantContent = {
  guideSections: [
    {
      heading: localized(
        'What goes into meditation retreat pricing',
        'Wat zit er in de prijs van een meditatieretraite',
      ),
      body: [
        localized(
          'A meditation retreat price has to cover three things, and the structure is unusual compared to yoga or wellness because tradition often splits them. The first is the operational cost: venue, vegetarian or plant-based meals, transfers, materials, payment processing fees, and any insurance. The second is teacher compensation, which in established Buddhist and mindfulness traditions is treated as separate from the course fee — paid through dana (voluntary offerings) at the end of the retreat rather than rolled into the price. The third is your own time as the organizer: the months of design, registration handling, kitchen coordination, and on-the-ground hosting that happen whether the retreat fills or not.',
          'Een prijs voor een meditatieretraite moet drie dingen dekken, en de structuur is anders dan bij yoga of wellness omdat de traditie ze vaak splitst. Het eerste zijn de operationele kosten: locatie, vegetarische of plantaardige maaltijden, transfers, materialen, transactiekosten en eventuele verzekering. Het tweede is de vergoeding voor de docent, die in gevestigde boeddhistische en mindfulness-tradities los wordt gezien van de cursusbijdrage — betaald via dana (vrijwillige offering) aan het eind van de retraite in plaats van verwerkt in de prijs. Het derde is je eigen tijd als organisator: de maanden van ontwerp, inschrijvingen verwerken, keukencoördinatie en ter plaatse host zijn die plaatsvinden ongeacht of de retraite volloopt.',
        ),
        localized(
          'Many newer organizers and Western centers use a fixed-fee model instead, where the published price covers everything including a teacher fee. Both models are defensible, but mixing them silently — quoting a low course fee and hoping dana covers the gap — is the most common path to a retreat that runs at a loss. Decide upfront which model you are using, write it on the registration page, and budget the teacher line accordingly.',
          'Veel nieuwere organisatoren en westerse centra gebruiken in plaats daarvan een model met vaste prijs, waarin de gepubliceerde prijs alles dekt inclusief een docentenfee. Beide modellen zijn verdedigbaar, maar ze stilzwijgend mengen — een lage cursusbijdrage publiceren en hopen dat dana het gat dicht — is het meest voorkomende pad naar een retraite die verlieslijdend draait. Bepaal vooraf welk model je gebruikt, zet het op de inschrijfpagina, en begroot de docentenregel daarop.',
        ),
      ],
    },
    {
      heading: localized(
        'Benchmark pricing for meditation retreats',
        'Benchmarkprijzen voor meditatieretraites',
      ),
      body: [
        localized(
          'European meditation retreats sit lower than yoga or wellness across the board. A 3 to 5 night retreat typically prices at €700 to €1,200 per person all-in, with shorter weekend formats around €300 to €700 and 7 to 10 night silent intensives running €1,000 to €1,800. Plum Village publishes a sliding-scale week at roughly €400 (scholarship), €535 (reduced), €800 (sustaining), and €1,070 (supporting), which is a useful reference point for any organizer using tiered pricing. Donation-based vipassana courses in the Goenka tradition charge nothing upfront, with end-of-course dana from past students typically falling between €50 and €150 for a 10-day program.',
          'Europese meditatieretraites liggen over de hele linie lager dan yoga of wellness. Een retraite van 3 tot 5 nachten kost meestal €700 tot €1.200 per persoon all-in, met kortere weekendformats rond €300 tot €700 en stille intensives van 7 tot 10 nachten op €1.000 tot €1.800. Plum Village publiceert een sliding-scale week op ongeveer €400 (scholarship), €535 (gereduceerd), €800 (sustaining) en €1.070 (ondersteunend), wat een bruikbaar referentiepunt is voor elke organisator die met getrapte prijzen werkt. Donatie-gebaseerde vipassanacursussen in de Goenka-traditie rekenen vooraf niets, met dana van eerdere deelnemers aan het eind van de cursus die meestal tussen €50 en €150 ligt voor een 10-daags programma.',
        ),
        localized(
          'Group sizes for meditation retreats run larger than yoga: 12 to 16 is the practical band most facilitators report, with established centers comfortably hosting 20 or more in a silent setting because there is no hands-on teaching to scale. Most Western retreats settle on 3 to 5 nights as the working duration; this is enough time for the silence to actually drop in but short enough that working professionals can attend without taking a full week off. Anything under 3 nights tends to function as a workshop with sleeping arrangements, not a retreat — fine to sell, but it should be priced and described differently.',
          'Groepsgroottes voor meditatieretraites liggen hoger dan bij yoga: 12 tot 16 is de praktische bandbreedte die de meeste facilitators noemen, en gevestigde centra hosten in stille setting moeiteloos 20 of meer omdat er geen praktische correcties zijn die meeschalen. De meeste westerse retraites kiezen voor 3 tot 5 nachten als werkduur; dat is genoeg tijd voor de stilte om echt te landen maar kort genoeg dat werkende mensen kunnen deelnemen zonder een hele week vrij te nemen. Alles onder de 3 nachten functioneert eerder als een workshop met overnachting dan als een retraite — prima om te verkopen, maar moet anders geprijsd en omschreven worden.',
        ),
      ],
    },
    {
      heading: localized(
        'How to calculate your breakeven',
        'Hoe je je break-even berekent',
      ),
      body: [
        localized(
          'Breakeven is the number of guests at which revenue exactly covers total costs. For a meditation retreat the calculation is simpler than for a treatment-heavy wellness program but still requires a clean split. Fixed costs are the venue minimum, your own organizer fee, marketing already spent, insurance, transfers, and any guest teacher booked on a flat day rate regardless of attendance. Variable costs are food per guest per day, transaction fees of around 3 percent, and any per-session or per-guest expenses. Divide fixed costs by the contribution margin per guest — price per guest minus variable costs per guest — to find the breakeven count.',
          'Break-even is het aantal gasten waarbij de omzet de totale kosten precies dekt. Voor een meditatieretraite is de berekening simpeler dan voor een wellness-programma met veel behandelingen, maar vraagt nog steeds een schone splitsing. Vaste kosten zijn het minimum van de locatie, je eigen organisator-fee, de al uitgegeven marketing, verzekering, transfers en eventuele gastdocent die op een vast dagtarief geboekt is ongeacht het aantal deelnemers. Variabele kosten zijn eten per gast per dag, transactiekosten van rond de 3 procent en alle per-sessie- of per-gast-uitgaven. Deel de vaste kosten door de bijdragemarge per gast — prijs per gast min variabele kosten per gast — om het break-even aantal te vinden.',
        ),
        localized(
          'Aim to break even at 60 to 70 percent of your maximum capacity. With 16 spots, the retreat should clear costs by around 10 or 11 sign-ups. Meditation retreats benefit from one structural advantage over yoga or wellness: variable costs per guest are low (vegetarian meals, no treatments, minimal materials), so each booking above breakeven contributes a lot to net profit. The flip side is that low variable cost makes the venue minimum the dominant driver — if the venue requires you to pay for 16 beds whether you fill them or not, your breakeven is set by that floor more than by your price.',
          'Mik op break-even bij 60 tot 70 procent van je maximale capaciteit. Bij 16 plekken zou de retraite kostendekkend moeten zijn rond 10 of 11 inschrijvingen. Meditatieretraites hebben één structureel voordeel ten opzichte van yoga of wellness: de variabele kosten per gast zijn laag (vegetarische maaltijden, geen behandelingen, minimale materialen), dus elke boeking boven break-even draagt veel bij aan de netto winst. De keerzijde is dat lage variabele kosten het locatieminimum de dominante factor maken — als de locatie eist dat je voor 16 bedden betaalt of je ze nu vult of niet, wordt je break-even meer bepaald door die ondergrens dan door je prijs.',
        ),
      ],
    },
    {
      heading: localized(
        'Common pricing mistakes',
        'Veelgemaakte prijsfouten',
      ),
      body: [
        localized(
          'The most common mistake on a meditation retreat is under-pricing because the work feels spiritual. Time spent in silence is still time at work — kitchen coordination, schedule management, accommodation logistics, and emotional support for participants who hit difficult states are all real labour, and a price that does not pay for them is a discount the organizer is giving themselves without noticing. The second mistake is leaning on dana to make the math work. Dana is a real tradition with serious meaning in established lineages, but it is not a budget line: average dana per retreatant is genuinely unpredictable, and treating it as expected income is how organizers end up losing money on programs they thought were fully funded.',
          'De meest voorkomende fout op een meditatieretraite is onder-prijzen omdat het werk spiritueel voelt. Tijd in stilte is nog steeds werktijd — keukencoördinatie, dagindeling, accommodatielogistiek en emotionele ondersteuning voor deelnemers die in moeilijke toestanden komen zijn allemaal reëel werk, en een prijs die daar niet voor betaalt is een korting die de organisator zichzelf onbewust geeft. De tweede fout is leunen op dana om de rekensom kloppend te krijgen. Dana is een echte traditie met serieuze betekenis in gevestigde lineages, maar het is geen begrotingsregel: gemiddelde dana per deelnemer is werkelijk onvoorspelbaar, en het als verwachte inkomsten behandelen is precies hoe organisatoren verlies maken op programma’s die ze dachten dat gedekt waren.',
        ),
        localized(
          'Other recurring mistakes: forgetting payment processing fees of around 3 percent, ignoring no-shows that for short retreats can spike because participants who book a 4-night silent retreat often cancel under work pressure, leaving no contingency for last-minute teacher cancellations, and bundling sliding-scale tiers without checking the math. A sliding scale only works if the higher tiers are taken by enough participants to subsidise the lower ones; if every guest selects scholarship pricing, the program has to be viable at that floor or it is not viable at all. Plum Village and IMS publish their tiers transparently for exactly this reason — the sustaining tier is what actually covers operating cost.',
          'Andere terugkerende fouten: vergeten dat transactiekosten van rond de 3 procent op elke boeking drukken, no-shows negeren die bij korte retraites kunnen oplopen omdat deelnemers die een 4-nachten stille retraite boeken vaak op het laatste moment afzeggen door werkdruk, geen buffer aanhouden voor laatste-minuut afzeggingen van een docent, en sliding-scale niveaus in elkaar steken zonder de rekensom te controleren. Een sliding scale werkt alleen als de hogere niveaus door genoeg deelnemers worden gekozen om de lagere te subsidiëren; als elke gast scholarship-prijs kiest, moet het programma haalbaar zijn op die ondergrens of het is helemaal niet haalbaar. Plum Village en IMS publiceren hun niveaus precies daarom transparant — het sustaining-niveau is wat de operationele kosten daadwerkelijk dekt.',
        ),
      ],
    },
    {
      heading: localized(
        'When you can charge more',
        'Wanneer je meer kunt vragen',
      ),
      body: [
        localized(
          'A higher price is defensible when something concrete justifies it. A named teacher with an established body of work, a published book, or recognised authorisation in a specific lineage moves the program out of the general-mindfulness market and into something participants actively travel for. Lineage credentials matter on meditation retreats in a way they do not on yoga retreats: dharma transmission, a Mindfulness-Based Stress Reduction (MBSR) certification, formal authorisation in a Theravada, Zen, or Tibetan tradition, or training under a recognised teacher each give participants a reason to pay above market rather than choose a cheaper local sit.',
          'Een hogere prijs is verdedigbaar als er iets concreets is dat het rechtvaardigt. Een docent met naam, een gepubliceerd boek of formele bevoegdheid binnen een specifieke lineage tilt het programma uit de algemene mindfulness-markt naar iets waar deelnemers actief voor reizen. Lineage-credentials wegen op een meditatieretraite anders dan op een yoga retraite: dharma-overdracht, een Mindfulness-Based Stress Reduction (MBSR) certificering, formele bevoegdheid in een Theravada-, Zen- of Tibetaanse traditie, of opleiding onder een erkende docent geven deelnemers een reden om boven marktprijs te betalen in plaats van een goedkopere lokale zit te kiezen.',
        ),
        localized(
          'Silent retreats with strong noble-silence containers also command higher pricing than guided programs, because the operational requirements are more demanding: the venue has to support full silence end-to-end, meals have to be served in silence, and the schedule has to be tight enough to hold the form. A clearly defined niche supports a 20 to 30 percent premium over a generic mindfulness week — trauma-sensitive meditation, meditation for grief, somatic mindfulness, MBSR-aligned programs for healthcare workers, or retreats specifically for people in early recovery each narrow the audience but let the people inside that audience feel the program is built for them. Smaller groups capped at 8 to 10 with one-on-one practice interviews also support a different price than a 20-person silent sit.',
          'Stille retraites met een sterke noble-silence container vragen ook een hogere prijs dan begeleide programma’s, omdat de operationele eisen zwaarder zijn: de locatie moet volledige stilte van begin tot eind ondersteunen, maaltijden moeten in stilte geserveerd worden en het rooster moet strak genoeg zijn om de vorm vast te houden. Een duidelijk afgebakende niche ondersteunt een toeslag van 20 tot 30 procent op een generieke mindfulness-week — traumagevoelige meditatie, meditatie bij rouw, somatische mindfulness, MBSR-gerichte programma’s voor zorgverleners, of retraites specifiek voor mensen in vroeg herstel maken de doelgroep kleiner maar zorgen dat de mensen erbinnen voelen dat het programma voor hen is gebouwd. Kleinere groepen met een maximum van 8 tot 10 deelnemers met individuele praktijkgesprekken ondersteunen ook een andere prijs dan een stille sit met 20 mensen.',
        ),
      ],
    },
    {
      heading: localized(
        'Marketing budget rules of thumb',
        'Vuistregels voor je marketingbudget',
      ),
      body: [
        localized(
          'A workable rule of thumb is reserving roughly 10 to 20 percent of the total retreat budget for marketing — landing pages, design, photography, paid social, platform fees, and any affiliate or referral spend. Meditation audiences research carefully and tend to value credentials over visuals, so spend on a long-form program description, clear teacher biography with lineage, and a transparent schedule does more work than glossy lifestyle imagery. First retreats often need the upper end of that range because there is no past attendee list yet, and meditation buyers in particular look for testimonials from previous sitters before they commit.',
          'Een bruikbare vuistregel is ongeveer 10 tot 20 procent van het totale retraitebudget reserveren voor marketing — landingspagina’s, vormgeving, fotografie, betaalde social media, platformkosten en eventuele affiliate- of referraluitgaven. Meditatiedoelgroepen onderzoeken zorgvuldig en hechten meer waarde aan credentials dan aan beeld, dus uitgaven aan een uitgebreide programmabeschrijving, een heldere biografie van de docent met lineage en een transparant rooster doen meer dan gepolijste lifestyle-fotografie. Eerste retraites zitten vaak aan de bovenkant van die range omdat er nog geen lijst eerdere deelnemers is, en meditatiekopers kijken in het bijzonder naar getuigenissen van eerdere zitters voordat ze zich vastleggen.',
        ),
        localized(
          'On timing, opening registration 4 to 6 months before the start date is enough for most domestic meditation retreats — shorter than the 6 to 9 months recommended for yoga, because meditation retreats run shorter and participants do not need long lead times to plan international travel. Silent intensives and retreats with named teachers should open earlier, 6 to 9 months out, because they sell to a smaller pool of serious sitters who plan their year around them. The most reliable channels remain your own email list, your local sangha or sit group, and listings on meditation-specific platforms like Retreat Guru — paid ads usually amplify these rather than replace them.',
          'Qua timing is 4 tot 6 maanden vóór de startdatum genoeg voor de meeste binnenlandse meditatieretraites — korter dan de 6 tot 9 maanden die voor yoga worden geadviseerd, omdat meditatieretraites korter duren en deelnemers geen lange aanlooptijd nodig hebben om internationaal reizen te plannen. Stille intensives en retraites met een docent met naam moeten eerder open, 6 tot 9 maanden van tevoren, omdat ze verkopen aan een kleinere groep serieuze zitters die hun jaar eromheen plannen. De meest betrouwbare kanalen blijven je eigen mailinglijst, je lokale sangha of zitgroep, en listings op meditatie-specifieke platforms zoals Retreat Guru — betaalde advertenties versterken dit meestal in plaats van het te vervangen.',
        ),
      ],
    },
  ],
  faq: [
    {
      question: localized(
        'Should I offer dana or sliding-scale pricing?',
        'Moet ik dana of sliding-scale prijzen aanbieden?',
      ),
      answer: localized(
        'Both are defensible but they have to be deliberate, not a fallback for an under-priced program. Dana is a real practice in established Buddhist lineages where the course fee covers facility and admin and the teacher is supported by donations at the end — it works because the audience knows what dana is and gives. Sliding scale (Plum Village, Spirit Rock, IMS all use four-tier versions of this) requires that the sustaining tier actually covers operating cost without subsidy, and that enough participants choose the higher tiers to fund the lower ones. Mixing a published course fee with implicit dana expectations is the structure most likely to lose money — pick a model and write the math down.',
        'Beide zijn verdedigbaar maar moeten bewust gekozen worden, niet als terugvaloptie voor een te laag geprijsd programma. Dana is een echte praktijk in gevestigde boeddhistische lineages waar de cursusbijdrage facilitaire en administratieve kosten dekt en de docent wordt gesteund door donaties aan het eind — het werkt omdat het publiek weet wat dana is en geeft. Sliding scale (Plum Village, Spirit Rock en IMS gebruiken allemaal vier-niveau versies hiervan) vereist dat het sustaining-niveau de operationele kosten daadwerkelijk dekt zonder subsidie, en dat genoeg deelnemers de hogere niveaus kiezen om de lagere te financieren. Een gepubliceerde cursusprijs combineren met impliciete dana-verwachtingen is de structuur die het meest waarschijnlijk verlies maakt — kies een model en zet de rekensom op papier.',
      ),
    },
    {
      question: localized(
        'Silent retreat versus guided retreat — does pricing differ?',
        'Stille retraite versus begeleide retraite — verschilt de prijs?',
      ),
      answer: localized(
        'Silent retreats typically price 10 to 25 percent higher than guided programs of the same length at the same venue. The reason is operational: the venue has to support full noble silence end-to-end, the kitchen has to serve in silence, schedules are tighter, and participants need more individual practice interviews. Silent retreats also attract a more serious audience that researches teachers and lineage carefully — which makes premium pricing easier to defend if you have credentials, and harder to defend if you do not. Guided programs sell to a broader audience but at a lower per-night number.',
        'Stille retraites zitten meestal 10 tot 25 procent hoger geprijsd dan begeleide programma’s van dezelfde duur op dezelfde locatie. De reden is operationeel: de locatie moet volledige noble silence ondersteunen van begin tot eind, de keuken moet in stilte serveren, roosters zijn strakker en deelnemers hebben meer individuele praktijkgesprekken nodig. Stille retraites trekken ook een serieuzer publiek aan dat docenten en lineage zorgvuldig onderzoekt — wat premium prijzen makkelijker verdedigbaar maakt als je credentials hebt, en lastiger als je die niet hebt. Begeleide programma’s verkopen aan een breder publiek maar tegen een lager bedrag per nacht.',
      ),
    },
    {
      question: localized(
        'What is a typical group size for a meditation retreat?',
        'Wat is een typische groepsgrootte voor een meditatieretraite?',
      ),
      answer: localized(
        'Most facilitators settle between 12 and 16 sitters. Below 12 the venue minimum starts to dominate the per-person price, and above 20 the practice interviews and one-on-one check-ins become harder to schedule across the retreat days. Silent retreats can comfortably run larger because there is no group dialogue to manage; established centers like IMS host groups of 30 or more in silence. Smaller intentional containers — 8 to 10 sitters with one practice interview per day per participant — sell at a meaningfully higher price point because the teacher attention is the product.',
        'De meeste facilitators komen uit op 12 tot 16 deelnemers. Onder de 12 begint het locatieminimum de prijs per persoon te domineren, en boven de 20 worden de praktijkgesprekken en individuele check-ins lastiger in te plannen over de retraitedagen. Stille retraites kunnen comfortabel groter draaien omdat er geen groepsgesprek te managen is; gevestigde centra zoals IMS hosten groepen van 30 of meer in stilte. Kleinere bewuste settings — 8 tot 10 deelnemers met één praktijkgesprek per dag per deelnemer — worden verkocht op een merkbaar hoger prijspunt omdat docentaandacht het product is.',
      ),
    },
    {
      question: localized(
        'How does meditation retreat pricing differ from yoga retreats?',
        'Hoe verschilt de prijs van een meditatieretraite van een yoga retraite?',
      ),
      answer: localized(
        'Meditation retreats sit one tier lower than yoga across the board and run shorter on average. A 3 to 5 night meditation retreat in Europe typically prices at €700 to €1,200 per person, where a comparable yoga week runs €1,000 to €1,800. The difference comes from three places: meditation retreats use simpler vegetarian catering rather than yoga retreat-style sourced menus, they run fewer practitioner-billed sessions, and the audience expects pricing in line with established donation-model centers like Plum Village or IMS. Yoga retreats can charge for asana practice as a billable activity in a way meditation programs typically cannot.',
        'Meditatieretraites zitten over de hele linie één segment lager dan yoga en zijn gemiddeld korter. Een meditatieretraite van 3 tot 5 nachten in Europa kost meestal €700 tot €1.200 per persoon, waar een vergelijkbare yoga week €1.000 tot €1.800 doet. Het verschil komt uit drie hoeken: meditatieretraites gebruiken eenvoudige vegetarische catering in plaats van zorgvuldig samengestelde yoga-menu’s, ze hebben minder per-sessie gefactureerde activiteiten, en het publiek verwacht prijzen in lijn met gevestigde donatie-modelcentra zoals Plum Village of IMS. Yoga retraites kunnen asana-praktijk als gefactureerde activiteit doorberekenen op een manier die meditatieprogramma’s meestal niet kunnen.',
      ),
    },
    {
      question: localized(
        'What is appropriate to pay a guest meditation teacher?',
        'Wat is een redelijke vergoeding voor een gastmeditatiedocent?',
      ),
      answer: localized(
        'Pay structures vary by tradition. For a fixed-fee model, day rates of €600 to €1,000 plus travel, meals, and lodging are typical for an authorised teacher in Europe, with €1,000 to €1,500 per day for named teachers with published work or formal lineage authorisation. For a dana model, you cover travel and accommodation and pass through end-of-retreat dana — typical participant offerings run €20 to €60 per retreat day per person, so a 4-day retreat with 14 sitters generates €1,100 to €3,400 of dana to the teacher on top of expenses. Whichever model you choose, agree it in writing before the retreat opens for registration so neither side is guessing.',
        'Vergoedingsstructuren verschillen per traditie. Bij een vaste prijs zijn dagtarieven van €600 tot €1.000 plus reis, maaltijden en logies gangbaar voor een bevoegde docent in Europa, met €1.000 tot €1.500 per dag voor docenten met naam, gepubliceerd werk of formele bevoegdheid binnen een lineage. Bij een dana-model dek je reis en logies en geef je de dana van het einde van de retraite door — gangbare deelnemersofferings liggen op €20 tot €60 per retraitedag per persoon, dus een 4-daagse retraite met 14 deelnemers genereert €1.100 tot €3.400 dana voor de docent bovenop de onkostenvergoeding. Welk model je ook kiest, leg het schriftelijk vast voordat de inschrijving opent zodat geen van beide partijen hoeft te gokken.',
      ),
    },
    {
      question: localized(
        'How long should a meditation retreat be?',
        'Hoe lang moet een meditatieretraite duren?',
      ),
      answer: localized(
        'Three to five nights is the standard for a working professional audience, and 7 to 10 nights for serious silent intensives. The first night and morning are usually spent settling the silence and the schedule, so anything under 3 nights barely covers the arrival; 4 nights is the minimum that lets the practice actually drop in. Goenka-tradition vipassana defaults to 10 nights for a reason — the protocol needs that runway — but most non-residential teachers running their own retreats in Europe choose 4 or 5 nights as the sweet spot between depth and accessibility.',
        'Drie tot vijf nachten is de standaard voor een publiek van werkende mensen, en 7 tot 10 nachten voor serieuze stille intensives. De eerste avond en ochtend gaan meestal op aan het landen in de stilte en het rooster, dus alles onder de 3 nachten dekt nauwelijks de aankomst; 4 nachten is het minimum waarop de praktijk werkelijk kan landen. Vipassana in de Goenka-traditie kiest niet voor niets standaard voor 10 nachten — het protocol vraagt die aanloop — maar de meeste niet-residentiele docenten die hun eigen retraites in Europa draaien kiezen voor 4 of 5 nachten als de gulden middenweg tussen diepte en toegankelijkheid.',
      ),
    },
    {
      question: localized(
        'What deposit should I require?',
        'Welke aanbetaling moet ik vragen?',
      ),
      answer: localized(
        'A 20 to 30 percent non-refundable deposit at booking is the prevailing pattern, with the balance due 30 to 60 days before the start date — tighter than the 60 to 90 days typical for yoga because meditation retreats are shorter and registration tends to happen closer to the start. The deposit needs to be large enough to cover your non-refundable venue commitment for that bed; for short retreats with low total prices that often means a higher percentage than yoga retreats use, sometimes 30 to 40 percent.',
        'Een niet-restitueerbare aanbetaling van 20 tot 30 procent bij boeking is het gangbare patroon, met de rest betaalbaar 30 tot 60 dagen voor aanvang — strakker dan de 60 tot 90 dagen die typisch zijn voor yoga, omdat meditatieretraites korter zijn en inschrijvingen dichter op de startdatum gebeuren. De aanbetaling moet groot genoeg zijn om jouw niet-restitueerbare verplichting aan de locatie voor dat bed te dekken; voor korte retraites met lage totaalprijzen betekent dat vaak een hoger percentage dan bij yoga, soms 30 tot 40 procent.',
      ),
    },
    {
      question: localized(
        'How early should I open registration?',
        'Hoe vroeg moet ik de inschrijving openen?',
      ),
      answer: localized(
        'For a domestic meditation retreat, opening 4 to 6 months out is enough — shorter than the 6 to 9 months recommended for yoga, because meditation retreats run shorter and participants do not need long lead times to plan international travel or take a full week off work. Silent intensives and retreats with named teachers should open 6 to 9 months out because they sell to a smaller pool of serious sitters who plan their year carefully. Earlier is rarely a problem; later usually is, because meditation buyers research credentials and lineage carefully before they commit and need time to do that work.',
        'Voor een binnenlandse meditatieretraite is 4 tot 6 maanden vóór de startdatum genoeg — korter dan de 6 tot 9 maanden die voor yoga worden geadviseerd, omdat meditatieretraites korter zijn en deelnemers geen lange aanlooptijd nodig hebben om internationaal reizen te plannen of een hele week vrij te nemen. Stille intensives en retraites met een docent met naam moeten 6 tot 9 maanden van tevoren open omdat ze verkopen aan een kleinere groep serieuze zitters die hun jaar zorgvuldig plannen. Eerder openen is zelden een probleem; later openen meestal wel, omdat meditatiekopers credentials en lineage zorgvuldig onderzoeken voordat ze zich vastleggen en daar tijd voor nodig hebben.',
      ),
    },
    {
      question: localized(
        'How do I handle cancellations?',
        'Hoe ga ik om met annuleringen?',
      ),
      answer: localized(
        'Publish a written policy before you take any deposit, and put it in the booking confirmation. A common shape for short meditation retreats is: deposit non-refundable from booking, full refund minus deposit if cancelled more than 60 days out, partial or no refund inside 30 days, no refund inside 14 days. The window is tighter than yoga or wellness because the retreats are shorter and the venue commitment locks in faster. Recommend travel insurance in the same email — meditation participants often cancel under late work pressure or because the silence felt like more than they could commit to, and insurance shifts that conversation away from your refund inbox.',
        'Publiceer een schriftelijk annuleringsbeleid voordat je een aanbetaling aanneemt en zet het ook in de boekingsbevestiging. Een gangbare opzet voor korte meditatieretraites is: aanbetaling niet-restitueerbaar vanaf boeking, volledige terugbetaling minus aanbetaling bij annulering meer dan 60 dagen voor aanvang, gedeeltelijke of geen terugbetaling binnen 30 dagen, geen terugbetaling binnen 14 dagen. Het venster is strakker dan bij yoga of wellness omdat de retraites korter zijn en de locatieverplichting sneller vastligt. Adviseer in dezelfde mail een reisverzekering — meditatiedeelnemers annuleren vaak onder late werkdruk of omdat de stilte meer voelde dan ze konden committeren, en een verzekering verschuift dat gesprek weg van jouw inbox.',
      ),
    },
  ],
}

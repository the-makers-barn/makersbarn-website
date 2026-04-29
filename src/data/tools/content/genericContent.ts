import type { CalculatorVariantContent } from '@/types/tools'

import { localized } from './helpers'

export const GENERIC_CONTENT: CalculatorVariantContent = {
  guideSections: [
    {
      heading: localized(
        'What goes into retreat pricing',
        'Wat zit er in de prijs van een retraite',
      ),
      body: [
        localized(
          'A retreat price has to cover three layers of cost, and the structure is broadly the same whether you run yoga, wellness, meditation, or coaching programs. The first layer is your direct, out-of-pocket spend: accommodation, meals, transfers, materials, and any specialist fees you pay per session. The second layer is the costs that are easy to forget — payment processing fees of around 3 percent, insurance, contingency for currency or supplier price changes, and the income you give up while you are running the retreat instead of your normal work. The third layer is your own compensation as the host, treated as a real budget line rather than whatever happens to be left over.',
          'Een prijs voor een retraite moet drie kostenlagen dekken, en de structuur is in grote lijnen hetzelfde of je nu yoga-, wellness-, meditatie- of coachingprogramma’s draait. De eerste laag zijn je directe, contante uitgaven: accommodatie, maaltijden, transfers, materialen en eventuele specialistenvergoedingen per sessie. De tweede laag zijn de kosten die je makkelijk vergeet — transactiekosten van rond de 3 procent, verzekering, een buffer voor wisselkoers- of leveranciersschommelingen, en de inkomsten die je misloopt doordat je de retraite draait in plaats van je gewone werk. De derde laag is je eigen vergoeding als host, behandeld als een echte begrotingspost in plaats van wat er toevallig overblijft.',
        ),
        localized(
          'Industry expense breakdowns put venue at roughly 30 to 45 percent of the total budget, staff and facilitators at 20 to 30 percent, food and accommodation at 15 to 25 percent, marketing at 10 to 20 percent, and materials at 5 to 10 percent. A 5 to 15 percent contingency buffer on top of those is the standard cushion for unexpected costs. If your numbers do not leave a 25 to 40 percent net margin after every layer is accounted for, the price is too low for the program you are actually running. If your retreat fits a specific niche — yoga, wellness, meditation, coaching — the niche calculators surface the cost lines and benchmarks that matter for that audience.',
          'Industrie-uitgavenpatronen leggen locatie op ruwweg 30 tot 45 procent van het totale budget, personeel en facilitators op 20 tot 30 procent, eten en accommodatie op 15 tot 25 procent, marketing op 10 tot 20 procent en materialen op 5 tot 10 procent. Een buffer van 5 tot 15 procent bovenop die kosten is de standaard reservering voor onverwachte uitgaven. Als jouw getallen na al die lagen geen netto marge van 25 tot 40 procent overhouden, is de prijs te laag voor het programma dat je werkelijk draait. Past je retraite in een specifieke niche — yoga, wellness, meditatie, coaching — dan brengen de niche-calculators de kostenposten en benchmarks naar boven die voor dat publiek tellen.',
        ),
      ],
    },
    {
      heading: localized(
        'Benchmark pricing across retreat types',
        'Benchmarkprijzen per retraitetype',
      ),
      body: [
        localized(
          'European retreat pricing varies meaningfully by category, and a single benchmark range across all retreat types is misleading. As a working overview: yoga retreats run roughly €900 to €1,800 per person for a mid-range 5 to 7 night week, with budget at €400 to €800 and premium at €2,000 and above. Meditation retreats sit lower at €700 to €1,200 per person for 3 to 5 nights, with donation-model and sliding-scale programs from established centers (Plum Village, IMS, Spirit Rock) tiering between €400 and €1,070 per week. Wellness and detox retreats run €1,500 to €2,500 per person for 6 to 8 nights at the mid-range, climbing to €5,000 and above for medical-wellness destinations. Coaching retreats vary the most widely — €2,000 to €4,000 for entry-level group programs, €4,000 to €8,000 for business and leadership intensives, and €15,000 to €30,000 for executive masterminds.',
          'De prijzen van Europese retraites verschillen merkbaar per categorie, en één enkele benchmarkrange over alle retraitetypen heen is misleidend. Als werkbaar overzicht: yoga retraites lopen ruwweg €900 tot €1.800 per persoon voor een mid-range week van 5 tot 7 nachten, met budget op €400 tot €800 en premium op €2.000 of hoger. Meditatieretraites zitten lager op €700 tot €1.200 per persoon voor 3 tot 5 nachten, met donatie- en sliding-scale modellen van gevestigde centra (Plum Village, IMS, Spirit Rock) op €400 tot €1.070 per week. Wellness- en detoxretraites lopen €1.500 tot €2.500 per persoon voor 6 tot 8 nachten in het mid-range segment, en lopen op tot €5.000 of meer voor medisch-wellness bestemmingen. Coaching retraites variëren het breedst — €2.000 tot €4.000 voor instap-groepsprogramma’s, €4.000 tot €8.000 voor business- en leadership intensives, en €15.000 tot €30.000 voor executive masterminds.',
        ),
        localized(
          'Group size and duration cluster differently per category as well. Yoga retreats land at 8 to 15 students over 4 to 7 nights; meditation retreats run 12 to 16 sitters over 3 to 5 nights, with longer 7 to 10 night silent intensives at the upper end; wellness retreats hold 10 to 20 guests over 6 to 8 nights; coaching retreats stay smaller at 4 to 8 participants over 3 to 5 nights because the product is concentrated facilitator attention. If your retreat clearly belongs to one of these niches, use the dedicated calculator — the cost lines, default values, and benchmark ranges are tuned to the audience and pricing logic of that category.',
          'Groepsgrootte en duur clusteren ook per categorie anders. Yoga retraites komen uit op 8 tot 15 deelnemers over 4 tot 7 nachten; meditatieretraites draaien 12 tot 16 deelnemers over 3 tot 5 nachten, met langere 7 tot 10-daagse stille intensives aan de bovenkant; wellness retraites houden 10 tot 20 gasten over 6 tot 8 nachten; coaching retraites blijven kleiner met 4 tot 8 deelnemers over 3 tot 5 nachten omdat het product geconcentreerde facilitator-aandacht is. Past je retraite duidelijk in één van deze niches, gebruik dan de aparte calculator — de kostenposten, standaardwaarden en benchmarkranges zijn afgestemd op de doelgroep en prijslogica van die categorie.',
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
          'Breakeven is the number of guests at which revenue exactly covers total costs — your retreat is no longer losing money but is not yet making any. To calculate it, separate fixed costs (the ones that stay the same whether 6 or 16 people show up: venue minimums, your fee, marketing already spent, insurance, travel, any specialist booked on a flat day rate) from variable costs (food per person per day, transaction fees, anything that scales with attendance). Then divide fixed costs by the contribution margin per guest, which is your price per guest minus the variable costs per guest. The result is the number of confirmed bookings that pay for the retreat before you make a euro of profit.',
          'Break-even is het aantal gasten waarbij de omzet de totale kosten precies dekt — je retraite verliest dan geen geld meer maar maakt ook nog geen winst. Om dit te berekenen splits je vaste kosten (kosten die hetzelfde blijven of er nu 6 of 16 mensen komen: minimum afnameplicht van de locatie, je eigen fee, de al uitgegeven marketing, verzekering, reis, en eventuele specialist op een vast dagtarief) van variabele kosten (eten per persoon per dag, transactiekosten, alles dat meeschaalt met het aantal deelnemers). Daarna deel je de vaste kosten door de bijdragemarge per gast: de prijs per gast min de variabele kosten per gast. Het resultaat is het aantal bevestigde boekingen dat de retraite dekt voordat je een euro winst maakt.',
        ),
        localized(
          'A useful target is breaking even at 60 to 70 percent of your maximum capacity. If you have 15 spots, the retreat should cover its costs by around 9 to 11 sign-ups; for a small coaching cohort of 6, by around 4. That cushion is what protects you when two people drop out the week before, when a deposit refund is unavoidable, or when one room can only be sold as a single. Pricing that requires a sell-out to be profitable puts the entire retreat under stress every cycle, and operator data consistently shows retreats hitting 90 percent occupancy roughly double the net profit of those at 60 percent because so much of the cost stack is fixed.',
          'Een goed richtpunt is break-even halen bij 60 tot 70 procent van je maximale capaciteit. Bij 15 plekken zou de retraite kostendekkend moeten zijn rond 9 tot 11 inschrijvingen; bij een klein coachingcohort van 6 rond de 4. Die buffer is wat je redt als twee mensen een week voor aanvang afzeggen, een terugbetaling onvermijdelijk is of een kamer alleen als single verkocht kan worden. Een prijs die alleen werkt bij een uitverkochte retraite zet elke editie onder druk, en operatordata laten consequent zien dat retraites die 90 procent bezetting halen ongeveer het dubbele aan netto winst maken als die op 60 procent zitten omdat zo’n groot deel van de kostenopbouw vast is.',
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
          'The most common mistake across every retreat category is pricing as if a sell-out is guaranteed. A first retreat almost never sells out, and a price that only works at full capacity turns every empty bed into a personal loss. The second universal mistake is leaving your own time off the books. The months you spend designing the program, writing emails, running calls, and showing up before sunrise during the retreat itself are work, and a price that does not pay you for that work is a discount you are giving yourself without noticing. The third is skipping the breakeven calculation entirely and pricing on instinct — operator surveys consistently flag this as the single largest reason first retreats lose money.',
          'De meest voorkomende fout in elke retraitecategorie is prijzen alsof uitverkocht zijn vanzelfsprekend is. Een eerste retraite raakt zelden vol, en een prijs die alleen klopt bij volle bezetting maakt elk leeg bed een persoonlijk verlies. De tweede universele fout is je eigen tijd niet meerekenen. De maanden waarin je het programma ontwerpt, mails schrijft, gesprekken voert en tijdens de retraite zelf voor zonsopgang klaarstaat zijn werk, en een prijs die je daar niet voor betaalt is feitelijk een korting die je jezelf onbewust geeft. De derde is de break-even berekening helemaal overslaan en op gevoel prijzen — operatorenquêtes noemen dit consequent als de belangrijkste reden waarom eerste retraites verlies maken.',
        ),
        localized(
          'Other recurring mistakes show up across every retreat type: forgetting payment processing fees of around 3 percent on every booking, ignoring the income you skip from your normal work during the retreat block, leaving no contingency for currency or supplier swings, and changing the price midway through a sales window. Once people have paid, raising or lowering the price creates refund requests and a credibility problem that costs more than the few extra euros it might earn. A 5 to 15 percent contingency line on top of the rest of the budget is the standard fix for the supplier-swing risk; a written, published refund policy is the fix for the rest.',
          'Andere terugkerende fouten duiken op in elk retraitetype: vergeten dat transactiekosten van rond de 3 procent op elke boeking drukken, de gemiste inkomsten uit normaal werk tijdens de retraiteperiode niet meerekenen, geen buffer aanhouden voor wisselkoers- of leveranciersschommelingen, en de prijs aanpassen tijdens een lopend verkoopvenster. Zodra mensen betaald hebben, leidt verhogen of verlagen tot terugbetalingsverzoeken en een vertrouwensprobleem dat meer kost dan de paar euro extra opleveren. Een buffer van 5 tot 15 procent bovenop de rest van de begroting is de standaardoplossing voor het leveranciersrisico; een schriftelijk, gepubliceerd annuleringsbeleid is de oplossing voor de rest.',
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
          'A higher price is defensible when something concrete justifies it, and the levers are similar across retreat types. Positioning is the first: a clearly defined niche — trauma-informed, postnatal recovery, founders in transition, mid-career professionals on sabbatical, a specific lineage or methodology — narrows the audience but lets the people inside that audience feel the retreat is built for them. That kind of fit usually supports a 20 to 30 percent price bump over a generic retreat at the same venue. Reputation does similar work: an established following, published work, a recognised credential (ICF, EMCC, MBSR, registered yoga teacher with significant teaching hours, certified naturopath), or years of experience leading retreats give prospective guests a reason to pay above market rather than choose the cheaper option next door.',
          'Een hogere prijs is verdedigbaar als er iets concreets is dat het rechtvaardigt, en de hefbomen zijn vergelijkbaar over retraitetypen heen. Positionering is de eerste: een duidelijk afgebakende niche — traumagevoelig, postnatal herstel, founders in transitie, mid-career professionals op sabbatical, een specifieke lineage of methodologie — maakt de doelgroep kleiner maar zorgt dat de mensen erbinnen voelen dat de retraite voor hen is gebouwd. Zo’n match ondersteunt meestal een prijstoeslag van 20 tot 30 procent ten opzichte van een generieke retraite op dezelfde locatie. Reputatie doet vergelijkbaar werk: een bestaand publiek, publicaties, een erkende credential (ICF, EMCC, MBSR, een geregistreerd yogadocent met substantiële lesuren, een gecertificeerde naturopaat), of jaren ervaring met het leiden van retraites geven mensen een reden om boven marktprijs te betalen in plaats van de goedkopere buurman te kiezen.',
        ),
        localized(
          'Smaller groups also support higher pricing because attention scales inversely with attendance. A retreat capped at 6 to 8 with one-on-one time and individual integration sells at a different price than the same week with 20 participants. Premium guests are paying for the cap as much as for the program. The same applies to genuinely exceptional venues, in-house specialist staff, or treatments and integration sessions included in the package — but only if those things are real, deliverable on schedule, and not just language on a sales page. The cleanest test: would you pay this price as a guest, given the credentials and access on offer? If the answer is no, the price is wrong even if the math closes.',
          'Kleinere groepen ondersteunen ook een hogere prijs omdat aandacht omgekeerd evenredig schaalt met groepsgrootte. Een retraite met maximaal 6 tot 8 deelnemers, individuele tijd en persoonlijke integratie verkoopt zich tegen een andere prijs dan dezelfde week met 20 deelnemers. Premium gasten betalen evenveel voor het maximum als voor het programma zelf. Hetzelfde geldt voor werkelijk uitzonderlijke locaties, vaste specialisten of behandelingen en integratiesessies die in het pakket zitten — maar alleen als die er echt zijn, op tijd geleverd worden, en niet alleen op de salespagina staan. De duidelijkste toets: zou je deze prijs zelf als gast betalen, gegeven de credentials en toegang die geboden worden? Is het antwoord nee, dan klopt de prijs niet, ook als de rekensom uitkomt.',
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
          'A workable rule of thumb across every retreat type is reserving roughly 10 to 20 percent of the total retreat budget for marketing — paid ads, design, photography, landing pages, platform fees, and any affiliate or referral spend. First retreats often need the upper end of that range because there is no past attendee list to draw from; established facilitators with a warm email list sometimes spend less because their main channel is owned, not bought. The exception is coaching retreats, where established practices typically spend well under 10 percent because the dominant sources of bookings are warm — the existing 1:1 client list, past mastermind alumni, and referral partners — rather than paid acquisition.',
          'Een bruikbare vuistregel voor elk retraitetype is ongeveer 10 tot 20 procent van het totale retraitebudget reserveren voor marketing — betaalde advertenties, vormgeving, fotografie, landingspagina’s, platformkosten en eventuele affiliate- of referraluitgaven. Eerste retraites zitten vaak aan de bovenkant van die range omdat er nog geen lijst eerdere deelnemers is; gevestigde facilitators met een warme mailinglijst geven soms minder uit omdat hun belangrijkste kanaal eigen bezit is en niet ingekocht. De uitzondering zijn coaching retraites, waar gevestigde praktijken meestal ruim onder de 10 procent uitgeven omdat de dominante bron van boekingen warm is — de bestaande 1:1 klantenlijst, alumni van eerdere masterminds en verwijzingspartners — in plaats van betaalde acquisitie.',
        ),
        localized(
          'On timing, retreat industry guides recommend opening registration 6 to 9 months before the start date for domestic retreats and 9 to 12 months out for international or destination retreats. Wellness and detox programs sit at the longer end because guests coordinate around medical schedules; meditation and coaching retreats often work with 4 to 8 months because the audiences are warmer and decide faster. The most reliable channels remain your own email list, an Instagram or content presence built before the launch, and word of mouth from past guests — paid ads usually amplify these rather than replace them. Vertical platforms like Retreat Guru, BookRetreats, Health and Fitness Travel, and Wellbeing Escapes can fill the audience gap on a first edition, at a typical commission of single-digit to mid-teen percentage of bookings.',
          'Qua timing adviseren retraitegidsen om de inschrijving 6 tot 9 maanden vóór de startdatum te openen voor binnenlandse retraites, en 9 tot 12 maanden van tevoren voor internationale of bestemmingsretraites. Wellness- en detoxprogramma’s zitten aan de langere kant omdat gasten afstemmen rond medische schema’s; meditatie- en coaching retraites werken vaak met 4 tot 8 maanden omdat de doelgroepen warmer zijn en sneller beslissen. De meest betrouwbare kanalen blijven je eigen mailinglijst, een Instagram- of contentaanwezigheid die je vóór de lancering hebt opgebouwd, en mond-tot-mondreclame van eerdere gasten — betaalde advertenties versterken dit meestal in plaats van het te vervangen. Verticale platforms zoals Retreat Guru, BookRetreats, Health and Fitness Travel en Wellbeing Escapes kunnen de publieksgap dichten op een eerste editie, tegen een gangbare commissie van een eencijferig tot midden-tienprocent percentage van de boekingen.',
        ),
      ],
    },
  ],
  faq: [
    {
      question: localized(
        'How do I know if my retreat is priced correctly?',
        'Hoe weet ik of mijn retraite goed geprijsd is?',
      ),
      answer: localized(
        'Three quick tests. First, the math: list every cost (venue, food, your fee, marketing, transfers, processing fees, contingency), divide by your expected attendance at 60 to 70 percent capacity, and check the per-guest price covers it with a 25 to 40 percent net margin on top. Second, the comparison: against three or four published European retreats in the same niche and tier, your price should not be the cheapest or the most expensive without a clear reason. Third, the personal test: would you pay this price yourself for the program on offer? If the math closes but you would not pay it, the offer needs sharpening before the price changes.',
        'Drie snelle toetsen. Ten eerste de rekensom: zet elke kostenpost op een rij (locatie, eten, je fee, marketing, transfers, transactiekosten, buffer), deel die door je verwachte bezetting op 60 tot 70 procent van de capaciteit, en kijk of de prijs per gast dit dekt met een nettomarge van 25 tot 40 procent erbovenop. Ten tweede de vergelijking: ten opzichte van drie of vier gepubliceerde Europese retraites in dezelfde niche en hetzelfde segment hoort je prijs niet de goedkoopste of duurste te zijn zonder een duidelijke reden. Ten derde de persoonlijke toets: zou je zelf deze prijs betalen voor het aangeboden programma? Klopt de rekensom maar zou je hem zelf niet betalen, dan moet eerst het aanbod scherper voordat de prijs verandert.',
      ),
    },
    {
      question: localized(
        'What is a healthy profit margin for a retreat?',
        'Wat is een gezonde winstmarge voor een retraite?',
      ),
      answer: localized(
        'A 25 to 40 percent net margin is the band most retreat business guides treat as healthy for yoga, wellness, and meditation retreats. Coaching retreats can hold higher — 40 to 60 percent — because the cost stack is structurally lighter and the facilitator fee does double duty as compensation. Below 20 percent there is almost no room for things to go wrong, which on a retreat is not an if but a when: late cancellations, supplier price jumps, a single no-show on a small cohort. The buffer is what separates a retreat that pays you for your time from one where you end up working for free after refunds settle.',
        'Een nettomarge van 25 tot 40 procent is de range die de meeste retraitegidsen als gezond beschouwen voor yoga-, wellness- en meditatieretraites. Coaching retraites kunnen hoger zitten — 40 tot 60 procent — omdat de kostenopbouw structureel lichter is en de facilitator fee dubbel werk doet als vergoeding. Onder de 20 procent is er nauwelijks ruimte voor tegenslag, en op een retraite is dat geen kwestie van of maar van wanneer: late annuleringen, prijsstijgingen bij leveranciers, één no-show op een klein cohort. De buffer is wat een retraite die je voor je tijd betaalt onderscheidt van een retraite waar je na alle terugbetalingen feitelijk gratis hebt gewerkt.',
      ),
    },
    {
      question: localized(
        'How do I set the price for my first retreat?',
        'Hoe bepaal ik de prijs voor mijn eerste retraite?',
      ),
      answer: localized(
        'Build the price from costs, not from what you think people will pay. List every line — venue, food, your own fee at a rate close to what you charge for normal work, marketing, transfers, processing fees, insurance — and add a 5 to 15 percent contingency for the things you have not thought of yet. Divide the total by 60 to 70 percent of your maximum capacity, not by full capacity, because first retreats almost never sell out. Compare the result against three or four published retreats in the same niche; if the number is far below the comparison, the price is too low and you are subsidising the audience. Once the price is set, do not move it during the sales window — discounting first retreats is one of the fastest ways to lose money and credibility at the same time.',
        'Bouw de prijs op vanuit kosten, niet vanuit wat je denkt dat mensen willen betalen. Zet elke regel op papier — locatie, eten, je eigen fee tegen een tarief dicht bij wat je rekent voor regulier werk, marketing, transfers, transactiekosten, verzekering — en voeg een buffer van 5 tot 15 procent toe voor wat je nog niet bedacht hebt. Deel het totaal door 60 tot 70 procent van je maximale capaciteit, niet door volle capaciteit, want eerste retraites raken zelden vol. Vergelijk het resultaat met drie of vier gepubliceerde retraites in dezelfde niche; ligt het bedrag ver onder de vergelijking, dan is de prijs te laag en subsidieer je het publiek. Zodra de prijs staat, beweeg hem niet tijdens het verkoopvenster — korting geven op een eerste retraite is een van de snelste manieren om tegelijk geld en geloofwaardigheid te verliezen.',
      ),
    },
    {
      question: localized(
        'How early should I open registration?',
        'Hoe vroeg moet ik de inschrijving openen?',
      ),
      answer: localized(
        'For a domestic retreat, opening 6 to 9 months out is a reasonable window. For international or destination retreats, 9 to 12 months gives serious travelers time to request leave, arrange flights, and commit a deposit. Meditation and coaching retreats often work with 4 to 6 months because the audiences are warmer and decide faster; wellness and detox programs sit at the longer end because guests coordinate around medical schedules. Earlier is rarely a problem; later usually is, because the people most likely to book are also the ones who plan furthest ahead.',
        'Voor een binnenlandse retraite is een venster van 6 tot 9 maanden vooraf redelijk. Voor internationale of bestemmingsretraites geeft 9 tot 12 maanden serieuze reizigers tijd om vrij te vragen, vluchten te regelen en een aanbetaling te doen. Meditatie- en coaching retraites werken vaak met 4 tot 6 maanden omdat de doelgroepen warmer zijn en sneller beslissen; wellness- en detoxprogramma’s zitten aan de langere kant omdat gasten afstemmen rond medische schema’s. Eerder openen is zelden een probleem; later openen meestal wel, omdat de mensen die het eerst boeken ook degenen zijn die het verst vooruit plannen.',
      ),
    },
    {
      question: localized(
        'What deposit should I require?',
        'Welke aanbetaling moet ik vragen?',
      ),
      answer: localized(
        'A 20 to 30 percent non-refundable deposit at the moment of booking is the most common structure across the retreat industry, with the balance due roughly 30 to 90 days before the start date depending on retreat type. High-ticket coaching retreats often run a 25 to 50 percent deposit because total prices are higher and the cohort is smaller; short meditation retreats sometimes run 30 to 40 percent because the absolute total is lower and a small percentage would not cover the venue commitment. Whatever the percentage, the deposit needs to be large enough to cover your non-refundable venue commitment for that bed, otherwise a single cancellation can cost you more than the deposit recovers.',
        'Een niet-restitueerbare aanbetaling van 20 tot 30 procent bij boeking is de meest gangbare structuur in de retraitebranche, met de rest betaalbaar ongeveer 30 tot 90 dagen voor aanvang afhankelijk van het retraitetype. High-ticket coaching retraites werken vaak met 25 tot 50 procent omdat de totaalprijzen hoger liggen en het cohort kleiner is; korte meditatieretraites soms met 30 tot 40 procent omdat de absolute som laag is en een klein percentage de locatieverplichting niet zou dekken. Welk percentage je ook kiest, de aanbetaling moet groot genoeg zijn om jouw niet-restitueerbare verplichting aan de locatie voor dat bed te dekken, anders kost één annulering je meer dan de aanbetaling teruglevert.',
      ),
    },
    {
      question: localized(
        'How do I handle cancellations?',
        'Hoe ga ik om met annuleringen?',
      ),
      answer: localized(
        'Publish a written policy before you take any deposit, and put it in the booking confirmation. A common shape is: deposit non-refundable from booking, full refund minus deposit if cancelled more than 90 days out, partial or no refund inside 60 days, no refund inside 30 days. Tighter windows apply on shorter or smaller retreats — meditation programs often cut to 14 days inside, coaching cohorts of 6 often run 30 days non-refundable end-to-end. Recommend travel insurance in the same email — it shifts the conversation away from your refund inbox when life happens. A transfer clause that lets a cancelling participant nominate a replacement is a quiet but useful addition: it keeps the cohort intact and the goodwill intact when the cancellation is genuinely unavoidable.',
        'Publiceer een schriftelijk annuleringsbeleid voordat je een aanbetaling aanneemt en zet het ook in de boekingsbevestiging. Een gangbare opzet is: aanbetaling niet-restitueerbaar vanaf boeking, volledige terugbetaling minus aanbetaling bij annulering meer dan 90 dagen voor aanvang, gedeeltelijke of geen terugbetaling binnen 60 dagen, geen terugbetaling binnen 30 dagen. Bij kortere of kleinere retraites gelden strakkere vensters — meditatieprogramma’s gaan vaak naar 14 dagen, coachingcohorten van 6 werken vaak met 30 dagen end-to-end niet-restitueerbaar. Adviseer in dezelfde mail een reisverzekering — dat verschuift het gesprek weg van jouw inbox als er onverwacht iets gebeurt. Een overdraagbaarheidsclausule waarmee een afzeggende deelnemer een vervanger kan aandragen is een stille maar nuttige toevoeging: het houdt het cohort en de goodwill intact als de annulering werkelijk onvermijdelijk is.',
      ),
    },
    {
      question: localized(
        'Should I price all-inclusive or modular?',
        'Moet ik all-inclusive of modulair prijzen?',
      ),
      answer: localized(
        'All-inclusive is simpler to sell because the price on the page is the price the guest pays — no surprises and fewer abandoned checkouts. Modular pricing splits the same total into accommodation, retreat fee, and extras, and tends to read as more expensive even when the headline number is identical. Hybrid pricing usually wins: an all-inclusive base for the core retreat, plus a short, transparent list of optional extras (private sessions, excursions, treatments, airport transfers) that are genuinely optional and clearly priced. Operators report that thoughtful add-ons can lift average revenue per guest by 15 to 30 percent without damaging conversion on the base package.',
        'All-inclusive is eenvoudiger te verkopen omdat de prijs op de pagina ook de prijs is die de gast betaalt — geen verrassingen en minder afhakers in het afrekenproces. Modulair prijzen splitst hetzelfde totaal in accommodatie, retraitebijdrage en extras, en leest meestal duurder ook als het bedrag identiek is. Een hybride model werkt meestal het beste: een all-inclusive basisprijs voor de kernretraite, plus een korte transparante lijst optionele extras (privésessies, excursies, behandelingen, transfers van het vliegveld) die echt optioneel zijn en helder geprijsd. Operators melden dat doordachte add-ons de gemiddelde omzet per gast met 15 tot 30 procent kunnen verhogen zonder de conversie op het basispakket te schaden.',
      ),
    },
    {
      question: localized(
        'Do I need an LLC or business entity to run retreats?',
        'Heb ik een rechtsvorm nodig om retraites te organiseren?',
      ),
      answer: localized(
        'For anything beyond a one-off small retreat among friends, yes. Most retreat operators choose a limited-liability structure (BV in the Netherlands, LLC in the United States, Ltd in the United Kingdom, GmbH in Germany) to separate personal assets from the business in case of a dispute, an injury, or an unrecoverable supplier deposit. On top of the entity, professional liability insurance — sometimes called errors and omissions cover — is the standard protection for the work itself. The third piece is a written participant agreement and liability waiver signed before arrival, covering the activities you actually run. None of this is glamorous, but the absence of any of the three is the most common reason a single difficult retreat ends a facilitator’s career.',
        'Voor alles wat verder gaat dan een eenmalige kleine retraite tussen vrienden: ja. De meeste retraite-organisatoren kiezen een rechtsvorm met beperkte aansprakelijkheid (BV in Nederland, LLC in de Verenigde Staten, Ltd in het Verenigd Koninkrijk, GmbH in Duitsland) om privévermogen te scheiden van het bedrijf voor het geval er een geschil, een blessure of een onverhaalbare aanbetaling aan een leverancier ontstaat. Bovenop de rechtsvorm is een beroepsaansprakelijkheidsverzekering — soms errors and omissions genoemd — de standaardbescherming voor het werk zelf. Het derde stuk is een schriftelijke deelnemersovereenkomst met aansprakelijkheidsuitsluiting die vóór aankomst getekend wordt en die de activiteiten dekt die je werkelijk draait. Niets hiervan is glamoureus, maar het ontbreken van één van de drie is de meest voorkomende reden waarom één lastige retraite een carrière van een facilitator beëindigt.',
      ),
    },
    {
      question: localized(
        'Should I use a retreat platform like Retreat Guru or BookRetreats?',
        'Moet ik een platform als Retreat Guru of BookRetreats gebruiken?',
      ),
      answer: localized(
        'Listing platforms put you in front of an audience already searching for retreats, which is genuinely useful for a first edition without a following. They take a commission — typically a single-digit to mid-teen percentage of bookings — so factor that into your price the same way you factor in payment processing fees. Vertical platforms tend to outperform generic ones for their specific niche: Retreat Guru and BookRetreats for general retreats, Health and Fitness Travel and Wellbeing Escapes for wellness, dedicated coaching directories for executive programs. Once you have a warm email list and recurring guests, direct booking through your own page usually outperforms platforms.',
        'Lijstplatforms zetten je voor een publiek dat al actief naar retraites zoekt, wat echt nuttig is voor een eerste editie zonder eigen achterban. Ze rekenen een commissie — meestal een eencijferig tot midden-tienprocent percentage van de boekingen — dus reken dat in je prijs op dezelfde manier mee als transactiekosten. Verticale platforms presteren vaak beter dan generieke voor hun specifieke niche: Retreat Guru en BookRetreats voor algemene retraites, Health and Fitness Travel en Wellbeing Escapes voor wellness, eigen coachingdirectories voor executive programma’s. Zodra je een warme mailinglijst en terugkerende gasten hebt, presteert directe boeking via je eigen pagina meestal beter dan een platform.',
      ),
    },
    {
      question: localized(
        'How much should I budget for marketing?',
        'Hoeveel moet ik aan marketing besteden?',
      ),
      answer: localized(
        'Plan for roughly 10 to 20 percent of the total retreat budget. First retreats usually need the upper end because there is no past attendee list yet, and most spend goes into landing pages, design, paid social, and platform or referral fees. Established facilitators with a warm email list and recurring guests can often hold marketing under 10 percent because their highest-converting channel is something they already own. Coaching retreats typically run lowest of all because the dominant booking source is the existing 1:1 client list and referral partners; wellness and detox programs typically run highest because health buyers research carefully and need long-form proof points before they commit.',
        'Reken op ruwweg 10 tot 20 procent van het totale retraitebudget. Eerste retraites zitten meestal aan de bovenkant omdat er nog geen lijst eerdere deelnemers is, en het grootste deel gaat naar landingspagina’s, vormgeving, betaalde social media en platform- of referralkosten. Gevestigde facilitators met een warme mailinglijst en terugkerende gasten kunnen marketing vaak onder de 10 procent houden omdat hun best converterende kanaal iets is dat ze zelf al bezitten. Coaching retraites zitten meestal het laagst omdat de dominante boekingsbron de bestaande 1:1 klantenlijst en verwijzingspartners is; wellness- en detoxprogramma’s zitten meestal het hoogst omdat gezondheidskopers zorgvuldig onderzoeken en lange bewijsstukken nodig hebben voor ze zich vastleggen.',
      ),
    },
  ],
}

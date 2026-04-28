import { ToolVariant } from '@/constants/tools'
import { Language } from '@/types/common'
import type {
  CalculatorContentMap,
  CalculatorVariantContent,
  LocalizedString,
} from '@/types/tools'

const localized = (en: string, nl: string): LocalizedString => ({
  [Language.EN]: en,
  [Language.NL]: nl,
  [Language.DE]: en,
  [Language.ES]: en,
  [Language.FR]: en,
})

const placeholder = localized

const PLACEHOLDER_VARIANT_CONTENT: CalculatorVariantContent = {
  howToSteps: [
    placeholder(
      'Set the number of guests and nights using the sliders.',
      'Stel het aantal gasten en nachten in met de schuifbalken.',
    ),
    placeholder(
      'Set your price per guest, guided by the benchmark range.',
      'Stel je prijs per gast in, met de benchmark als richtlijn.',
    ),
    placeholder(
      'Enter the costs you know — venue, food, your fee, marketing.',
      'Voer de kosten in die je kent — locatie, eten, jouw fee, marketing.',
    ),
    placeholder(
      'Read the live summary for profit, margin, and breakeven.',
      'Lees rechts de live samenvatting voor winst, marge en break-even.',
    ),
  ],
  guideSections: [
    {
      heading: placeholder(
        'What goes into retreat pricing',
        'Wat komt er kijken bij retraiteprijzen',
      ),
      body: [
        placeholder(
          'PLACEHOLDER paragraph — to be replaced by verified content per variant.',
          'PLACEHOLDER alinea — wordt vervangen door geverifieerde content per variant.',
        ),
      ],
    },
    {
      heading: placeholder('Benchmark pricing', 'Benchmarkprijzen'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
    {
      heading: placeholder('How to calculate your breakeven', 'Hoe je break-even berekent'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
    {
      heading: placeholder('Common pricing mistakes', 'Veelgemaakte prijsfouten'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
    {
      heading: placeholder('When to charge more', 'Wanneer je meer kunt vragen'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
    {
      heading: placeholder('Marketing budget rules of thumb', 'Vuistregels voor marketingbudget'),
      body: [placeholder('PLACEHOLDER paragraph.', 'PLACEHOLDER alinea.')],
    },
  ],
  faq: [
    {
      question: placeholder(
        'How long should a first retreat be?',
        'Hoe lang moet een eerste retraite duren?',
      ),
      answer: placeholder(
        'PLACEHOLDER answer to be replaced by verified content.',
        'PLACEHOLDER antwoord wordt vervangen door geverifieerde content.',
      ),
    },
  ],
}

const YOGA_CONTENT: CalculatorVariantContent = {
  howToSteps: [
    localized(
      'Set the group size and number of nights for your yoga retreat — most facilitators run 8 to 15 students over 4 to 7 nights.',
      'Stel de groepsgrootte en het aantal nachten van je yoga retraite in — de meeste facilitators draaien 8 tot 15 deelnemers over 4 tot 7 nachten.',
    ),
    localized(
      'Set the price per guest, using the benchmark range as a sanity check against comparable European retreats.',
      'Bepaal de prijs per gast en gebruik de benchmarkrange als toets tegenover vergelijkbare Europese retraites.',
    ),
    localized(
      'Enter the costs you have on paper — venue, food, your own fee, co-teachers, travel, marketing, and insurance.',
      'Voer de kosten in die je op papier hebt staan — locatie, eten, je eigen fee, co-docenten, reizen, marketing en verzekering.',
    ),
    localized(
      'Read the live summary on the right for profit, margin, breakeven occupancy, and profit per planning day.',
      'Lees rechts de live samenvatting voor winst, marge, break-even bezetting en winst per planningsdag.',
    ),
  ],
  guideSections: [
    {
      heading: localized(
        'What goes into yoga retreat pricing',
        'Wat zit er in de prijs van een yoga retraite',
      ),
      body: [
        localized(
          'A yoga retreat price has to cover three layers of cost, not just the venue invoice. The first layer is your direct, out-of-pocket spend: accommodation, meals, optional excursions, transfers, equipment, and any co-teachers or guest facilitators. The second layer is the costs that are easy to forget — payment processing fees, travel insurance, contingency for currency or supplier price changes, and the income you give up by stepping away from regular classes during the retreat week and the planning months around it.',
          'Een prijs voor een yoga retraite moet drie kostenlagen dekken, niet alleen de factuur van de locatie. De eerste laag zijn je directe, contante uitgaven: accommodatie, maaltijden, optionele excursies, vervoer, materialen en eventuele co-docenten of gastdocenten. De tweede laag zijn de kosten die je makkelijk vergeet — transactiekosten, reisverzekering, een buffer voor wisselkoers- of leverancierswijzigingen, en de inkomsten die je misloopt doordat je tijdens de retraiteweek en de planningsmaanden eromheen geen reguliere lessen geeft.',
        ),
        localized(
          'The third layer is your own compensation. Most retreat guides treat the facilitator fee as a real line item, not a leftover. A common reference point is paying yourself enough that the retreat clears at least €100 of net profit per guest per day after every other cost is covered. If your numbers do not allow that, the price is wrong — not the math.',
          'De derde laag is je eigen vergoeding. De meeste retraitegidsen behandelen de facilitator fee als een echte begrotingspost, niet als wat er overblijft. Een gangbaar richtpunt is jezelf zoveel betalen dat de retraite minstens €100 netto winst per gast per dag overhoudt nadat alle andere kosten gedekt zijn. Lukt dat niet binnen je getallen, dan is de prijs verkeerd — niet de rekensom.',
        ),
      ],
    },
    {
      heading: localized(
        'Benchmark pricing for yoga retreats',
        'Benchmarkprijzen voor yoga retraites',
      ),
      body: [
        localized(
          'European yoga retreats split into three rough tiers. Budget retreats sit around €400 to €800 per person per week, usually with shared rooms, buffet meals, and groups of 15 to 25. The mid-range or boutique tier runs roughly €1,000 to €1,800 per week with curated groups of 8 to 12, organic food, and more individual attention. Premium retreats sit at €2,000 and above per week, with smaller groups, designed accommodation, resident chefs, and integrated therapies.',
          'Europese yoga retraites vallen grofweg in drie segmenten. Budgetretraites zitten rond €400 tot €800 per persoon per week, meestal met gedeelde kamers, buffetmaaltijden en groepen van 15 tot 25. Het mid-range of boutique segment loopt ongeveer van €1.000 tot €1.800 per week met geselecteerde groepen van 8 tot 12, biologisch eten en meer individuele aandacht. Premium retraites starten bij €2.000 per week en hoger, met kleinere groepen, ontworpen accommodaties, vaste chef en geïntegreerde therapieën.',
        ),
        localized(
          'Most facilitators settle on 5 to 7 nights as the working duration. Weekends are easier to fill but harder to make profitable per planning hour, and 5-day formats often end just as the group settles in. Group size of 8 to 15 is the range most facilitators report as practical: small enough to teach attentively, large enough to absorb a fixed venue cost without the price feeling out of reach.',
          'De meeste facilitators kiezen voor 5 tot 7 nachten als werkduur. Weekenden zijn makkelijker te vullen maar lastiger winstgevend te maken per planningsuur, en 5-daagse formats eindigen vaak net wanneer de groep echt landt. Een groepsgrootte van 8 tot 15 is het bereik dat de meeste facilitators als werkbaar noemen: klein genoeg om aandachtig te kunnen lesgeven, groot genoeg om vaste locatiekosten te dragen zonder dat de prijs onhaalbaar wordt.',
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
          'Breakeven is the number of guests at which revenue exactly covers total costs — your retreat is no longer losing money but is not yet making any. To calculate it, separate fixed costs (the ones that stay the same whether 6 or 16 people show up: venue minimums, your fee, marketing already spent, insurance, travel) from variable costs (food per person per day, transaction fees, anything that scales with attendance). Then divide fixed costs by the contribution margin per guest, which is your price per guest minus the variable costs per guest.',
          'Break-even is het aantal gasten waarbij de omzet de totale kosten precies dekt — je retraite verliest dan geen geld meer maar maakt ook nog geen winst. Om dit te berekenen splits je vaste kosten (kosten die hetzelfde blijven of er nu 6 of 16 mensen komen: minimum afnameplicht van de locatie, je eigen fee, de marketing die al uitgegeven is, verzekering, reis) van variabele kosten (eten per persoon per dag, transactiekosten, alles dat meeschaalt met het aantal deelnemers). Daarna deel je de vaste kosten door de bijdragemarge per gast: de prijs per gast min de variabele kosten per gast.',
        ),
        localized(
          'A useful target is breaking even at 60 to 70 percent of your maximum capacity. If you have 15 spots, the retreat should cover its costs by around 9 to 11 sign-ups. That cushion is what protects you when two people drop out the week before, when a deposit refund is unavoidable, or when one room can only be sold as a single. Pricing that requires a sell-out to be profitable puts the entire retreat under stress every cycle.',
          'Een goed richtpunt is break-even halen bij 60 tot 70 procent van je maximale capaciteit. Bij 15 plekken zou de retraite kostendekkend moeten zijn rond 9 tot 11 inschrijvingen. Die buffer is wat je redt als twee mensen een week voor aanvang afzeggen, een terugbetaling onvermijdelijk is of een kamer alleen als single verkocht kan worden. Een prijs die alleen werkt bij een uitverkochte retraite zet elke editie onder druk.',
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
          'The most common mistake is pricing as if a sell-out is guaranteed. A first retreat almost never sells out, and a price that only works at full capacity turns every empty bed into a personal loss. The second mistake is leaving your own time off the books. The months you spend designing the program, writing emails, running calls, and showing up before sunrise during the retreat itself are work, and a price that does not pay you for that work is a discount you are giving yourself without noticing.',
          'De meest voorkomende fout is prijzen alsof uitverkocht zijn vanzelfsprekend is. Een eerste retraite raakt zelden vol, en een prijs die alleen klopt bij volle bezetting maakt elk leeg bed een persoonlijk verlies. De tweede fout is je eigen tijd niet meerekenen. De maanden waarin je het programma ontwerpt, mails schrijft, gesprekken voert en tijdens de retraite zelf voor zonsopgang klaarstaat zijn werk, en een prijs die je daar niet voor betaalt is feitelijk een korting die je jezelf onbewust geeft.',
        ),
        localized(
          'Other recurring mistakes: forgetting payment processing fees of around 3 percent on every booking, ignoring the income you skip from regular teaching during the retreat block, leaving no contingency for currency or supplier swings, and changing the price midway through a sales window. Once people have paid, raising or lowering the price creates refund requests and a credibility problem that costs more than the few extra euros it might earn.',
          'Andere terugkerende fouten: vergeten dat transactiekosten van rond de 3 procent op elke boeking drukken, de gemiste inkomsten uit reguliere lessen tijdens de retraiteperiode niet meerekenen, geen buffer aanhouden voor wisselkoers- of leveranciersschommelingen, en de prijs aanpassen tijdens een lopend verkoopvenster. Zodra mensen betaald hebben, leidt verhogen of verlagen tot terugbetalingsverzoeken en een vertrouwensprobleem dat meer kost dan de paar euro extra opleveren.',
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
          'A higher price is defensible when something concrete justifies it. A clearly defined niche — trauma-informed yoga, yoga for runners, a specific lineage, a women-only or men-only container — narrows the audience but lets the people inside that audience feel the retreat is built for them. That kind of fit usually supports a 20 to 30 percent price bump over a generic retreat at the same venue. Teacher reputation does similar work: an established following, published work, or years of teacher-training experience gives prospective guests a reason to pay above market rather than choose the cheaper option next door.',
          'Een hogere prijs is verdedigbaar als er iets concreets is dat het rechtvaardigt. Een duidelijk afgebakende niche — traumagevoelige yoga, yoga voor hardlopers, een specifieke lineage, een container alleen voor vrouwen of alleen voor mannen — maakt de doelgroep kleiner maar zorgt dat de mensen erbinnen voelen dat de retraite voor hen gebouwd is. Zo’n match ondersteunt meestal een prijstoeslag van 20 tot 30 procent ten opzichte van een generieke retraite op dezelfde locatie. Reputatie van de docent doet vergelijkbaar werk: een bestaand publiek, publicaties of jaren ervaring met opleidingen geven mensen een reden om boven marktprijs te betalen in plaats van de goedkopere buurman te kiezen.',
        ),
        localized(
          'Smaller groups also support higher pricing, because attention scales inversely with attendance. A retreat capped at 8 with one-on-one adjustments, individual intentions, and bodywork sessions sells at a different price than the same week with 20 students. Premium guests are paying for the cap as much as for the program. The same applies to genuinely exceptional venues, in-house chefs with dietary expertise, or therapies and integration sessions included in the package — but only if those things are real, not language on a sales page.',
          'Kleinere groepen ondersteunen ook een hogere prijs, omdat aandacht omgekeerd evenredig schaalt met groepsgrootte. Een retraite met maximaal 8 deelnemers, individuele aanpassingen, persoonlijke intenties en bodywork-sessies verkoopt zich tegen een andere prijs dan dezelfde week met 20 mensen. Premium gasten betalen evenveel voor het maximum als voor het programma zelf. Hetzelfde geldt voor echt uitzonderlijke locaties, vaste chefs met expertise in dieetwensen, of therapieën en integratiesessies die in het pakket zitten — maar alleen als ze er echt zijn, niet alleen op de salespagina staan.',
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
          'A workable rule of thumb is reserving roughly 10 to 20 percent of the total retreat budget for marketing — paid ads, design, photography, landing pages, platform fees, and any affiliate or referral spend. First-time retreats often need the upper end of that range because there is no past attendee list to draw from; established facilitators with a warm email list sometimes spend less because their main channel is owned, not bought.',
          'Een bruikbare vuistregel is ongeveer 10 tot 20 procent van het totale retraitebudget reserveren voor marketing — betaalde advertenties, vormgeving, fotografie, landingspagina’s, platformkosten en eventuele affiliate- of referraluitgaven. Eerste retraites zitten vaak aan de bovenkant van die range omdat er nog geen lijst eerdere deelnemers is; gevestigde facilitators met een warme mailinglijst geven soms minder uit omdat hun belangrijkste kanaal eigen bezit is en niet ingekocht.',
        ),
        localized(
          'On timing, retreat industry guides typically recommend opening registration 6 to 9 months before the start date for domestic retreats and 9 to 12 months out for international or destination retreats. The reason is practical: serious retreat travelers plan months ahead, request time off work, and need that runway to commit. The most reliable channels remain your own email list, an Instagram or content presence built before the launch, and word of mouth from past guests — paid ads usually amplify these rather than replace them.',
          'Qua timing adviseren retraitegidsen meestal om de inschrijving 6 tot 9 maanden vóór de startdatum te openen voor binnenlandse retraites, en 9 tot 12 maanden van tevoren voor internationale of bestemmingsretraites. De reden is praktisch: serieuze retraitegasten plannen maanden vooruit, vragen vrije dagen aan en hebben die aanloop nodig om commitment te maken. De meest betrouwbare kanalen blijven je eigen mailinglijst, een Instagram- of contentaanwezigheid die je vóór de lancering hebt opgebouwd, en mond-tot-mondreclame van eerdere gasten — betaalde advertenties versterken dit meestal in plaats van het te vervangen.',
        ),
      ],
    },
  ],
  faq: [
    {
      question: localized(
        'What is a typical group size for a yoga retreat?',
        'Wat is een typische groepsgrootte voor een yoga retraite?',
      ),
      answer: localized(
        'Most facilitators land between 8 and 15 students. Below 8 the fixed costs of venue and your own time become hard to cover at a reasonable per-guest price; above 15 it gets harder to teach with individual attention and bodies start to feel like a class. Premium retreats often cap at 6 to 10 specifically to support that closer container.',
        'De meeste facilitators zitten tussen de 8 en 15 deelnemers. Onder de 8 worden de vaste kosten van locatie en je eigen tijd lastig te dekken tegen een redelijke prijs per gast; boven de 15 wordt het moeilijker om persoonlijk les te geven en begint het meer op een gewone klas te lijken. Premium retraites zetten het maximum vaak bewust op 6 tot 10 om die kleinere setting te ondersteunen.',
      ),
    },
    {
      question: localized(
        'Should I price all-inclusive or with à la carte add-ons?',
        'Moet ik all-inclusive prijzen of met losse add-ons werken?',
      ),
      answer: localized(
        'All-inclusive is simpler to sell because the price on the page is the price the guest pays — no surprises and fewer abandoned checkouts. Add-ons (private sessions, excursions, massage, airport transfers) work well when they are genuinely optional and clearly priced, and they can lift average revenue per guest. Hybrid pricing usually wins: an all-inclusive base for the retreat itself, plus a short, transparent list of optional extras.',
        'All-inclusive is eenvoudiger te verkopen omdat de prijs op de pagina ook de prijs is die de gast betaalt — geen verrassingen en minder afhakers in het afrekenproces. Add-ons (privésessies, excursies, massage, transfers van het vliegveld) werken goed als ze echt optioneel zijn en helder geprijsd, en kunnen de gemiddelde omzet per gast verhogen. Een hybride model werkt meestal het beste: een all-inclusive basisprijs voor de retraite zelf, plus een korte transparante lijst optionele extras.',
      ),
    },
    {
      question: localized(
        'How early should I open registration?',
        'Hoe vroeg moet ik de inschrijving openen?',
      ),
      answer: localized(
        'For a domestic retreat, opening 6 to 9 months out is a reasonable window. For international or destination retreats, 9 to 12 months gives serious travelers time to request leave, arrange flights, and commit a deposit. Earlier is rarely a problem; later usually is, because the people most likely to book are also the ones who plan furthest ahead.',
        'Voor een binnenlandse retraite is een venster van 6 tot 9 maanden vooraf redelijk. Voor internationale of bestemmingsretraites geeft 9 tot 12 maanden serieuze reizigers tijd om vrij te vragen, vluchten te regelen en een aanbetaling te doen. Eerder openen is zelden een probleem; later openen meestal wel, omdat de mensen die het eerst boeken ook het verst vooruit plannen.',
      ),
    },
    {
      question: localized(
        'What deposit should I require?',
        'Welke aanbetaling moet ik vragen?',
      ),
      answer: localized(
        'A 20 to 30 percent non-refundable deposit at the moment of booking is the most common structure across the industry, with the balance due roughly 60 to 90 days before the start date. The deposit needs to be large enough to cover your non-refundable venue commitment for that bed, otherwise a single cancellation can cost you more than the deposit recovers.',
        'Een niet-restitueerbare aanbetaling van 20 tot 30 procent bij boeking is de meest gangbare structuur in de sector, met de rest betaalbaar ongeveer 60 tot 90 dagen voor aanvang. De aanbetaling moet groot genoeg zijn om jouw niet-restitueerbare verplichting aan de locatie voor dat bed te dekken, anders kost één annulering je meer dan de aanbetaling teruglevert.',
      ),
    },
    {
      question: localized(
        'How do I handle cancellations?',
        'Hoe ga ik om met annuleringen?',
      ),
      answer: localized(
        'Publish a written policy before you take any deposit, and put it in the booking confirmation. A common shape is: deposit non-refundable from booking, full refund minus deposit if cancelled more than 90 days out, partial or no refund inside 60 days, no refund inside 30 days. Recommend travel insurance in the same email — it shifts the conversation away from your refund inbox when life happens.',
        'Publiceer een schriftelijk annuleringsbeleid voordat je een aanbetaling aanneemt en zet het ook in de boekingsbevestiging. Een gangbare opzet is: aanbetaling niet-restitueerbaar vanaf boeking, volledige terugbetaling minus aanbetaling bij annulering meer dan 90 dagen voor aanvang, gedeeltelijke of geen terugbetaling binnen 60 dagen, geen terugbetaling binnen 30 dagen. Adviseer in dezelfde mail een reisverzekering — dat verschuift het gesprek weg van jouw inbox als er onverwacht iets gebeurt.',
      ),
    },
    {
      question: localized(
        'What profit margin should I aim for?',
        'Welke winstmarge moet ik aanhouden?',
      ),
      answer: localized(
        'A 25 to 40 percent net margin is the range most retreat business guides treat as healthy. The buffer absorbs late cancellations, refund requests, currency or supplier shifts, and the simple fact that not every retreat sells out. Below 20 percent there is almost no room for things to go wrong, which on a retreat is not an if but a when.',
        'Een nettomarge van 25 tot 40 procent is de range die de meeste retraitegidsen als gezond beschouwen. Die buffer vangt late annuleringen, terugbetalingen, koers- of leveranciersschommelingen op, en het simpele feit dat niet elke retraite uitverkoopt. Onder de 20 procent is er nauwelijks ruimte voor tegenslag, en op een retraite is dat geen kwestie van of maar van wanneer.',
      ),
    },
    {
      question: localized(
        'How much should I budget for marketing?',
        'Hoeveel moet ik aan marketing besteden?',
      ),
      answer: localized(
        'Plan for roughly 10 to 20 percent of the total retreat budget. First retreats usually need the upper end because there is no past attendee list yet, and most spend goes into landing pages, design, paid social, and platform or referral fees. Established facilitators with a warm email list and recurring guests can often hold marketing under 10 percent because their highest-converting channel is something they already own.',
        'Reken op ruwweg 10 tot 20 procent van het totale retraitebudget. Eerste retraites zitten meestal aan de bovenkant omdat er nog geen lijst eerdere deelnemers is, en het grootste deel gaat naar landingspagina’s, vormgeving, betaalde social media en platform- of referralkosten. Gevestigde facilitators met een warme mailinglijst en terugkerende gasten kunnen marketing vaak onder de 10 procent houden omdat hun best converterende kanaal iets is dat ze zelf al bezitten.',
      ),
    },
    {
      question: localized(
        'Should I use a platform like Retreat Guru or BookRetreats?',
        'Moet ik een platform als Retreat Guru of BookRetreats gebruiken?',
      ),
      answer: localized(
        'Listing platforms bring you in front of an audience already searching for retreats, which is useful for a first edition without a following. They take a commission — typically a single-digit to mid-teen percentage of bookings — so factor that into your price the same way you factor in payment processing fees. For a second or third retreat, direct booking through your own page usually outperforms platforms once your list is built.',
        'Lijstplatforms zetten je voor een publiek dat al actief naar retraites zoekt, wat nuttig is voor een eerste editie zonder eigen achterban. Ze rekenen een commissie — meestal een eencijferig tot midden-tienprocent percentage van de boekingen — dus reken dat in je prijs op dezelfde manier mee als transactiekosten. Vanaf een tweede of derde retraite presteert directe boeking via je eigen pagina meestal beter dan een platform, zodra je lijst opgebouwd is.',
      ),
    },
    {
      question: localized(
        'How do I price single occupancy versus shared rooms?',
        'Hoe prijs ik een eenpersoonskamer ten opzichte van een gedeelde kamer?',
      ),
      answer: localized(
        'A single supplement should reflect the actual cost of holding a room that could otherwise sleep two paying guests. The simplest method: take the price for a guest in a shared room, double it, subtract the second guest’s variable costs (food, transfer, fees), and use the result as the single rate. This protects your margin without making the single feel arbitrarily punished.',
        'Een single-toeslag moet de werkelijke kosten weerspiegelen van een kamer die anders twee betalende gasten kan herbergen. De simpelste methode: neem de prijs voor een gast in een gedeelde kamer, verdubbel die, trek de variabele kosten van de tweede gast eraf (eten, transfer, fees), en gebruik dat als de single-prijs. Zo bescherm je je marge zonder dat de single-prijs willekeurig hoog voelt.',
      ),
    },
  ],
}

const WELLNESS_CONTENT: CalculatorVariantContent = {
  howToSteps: [
    localized(
      'Set the group size and number of nights — wellness and detox retreats usually run 6 to 8 nights, with medical or fasting programs stretching to 10 to 14, and groups of 10 to 20 guests.',
      'Stel de groepsgrootte en het aantal nachten in — wellness- en detoxretraites duren meestal 6 tot 8 nachten, met medische of vastenprogramma’s die uitlopen tot 10 tot 14, en groepen van 10 tot 20 gasten.',
    ),
    localized(
      'Set the price per guest using the benchmark range, remembering that wellness pricing sits noticeably above generic yoga retreats once organic catering and treatments are included.',
      'Stel de prijs per gast in met de benchmarkrange als richtlijn, en houd er rekening mee dat wellnessprijzen duidelijk boven generieke yoga retraites liggen zodra biologische catering en behandelingen worden meegerekend.',
    ),
    localized(
      'Enter every cost line — venue, organic food, your facilitator fee, practitioner or therapist fees, marketing, travel, and insurance. Treatment-heavy programs need a dedicated practitioner cost line, not a vague extras bucket.',
      'Vul elke kostenpost in — locatie, biologisch eten, je eigen facilitator fee, vergoedingen voor behandelaars of therapeuten, marketing, reizen en verzekering. Behandelprogramma’s hebben een aparte kostenpost voor behandelaars nodig, geen vage extras-categorie.',
    ),
    localized(
      'Read the live summary on the right for profit, margin, breakeven occupancy, and profit per planning day, and stress-test the numbers at 60 to 70 percent occupancy before you commit to a venue.',
      'Lees rechts de live samenvatting voor winst, marge, break-even bezetting en winst per planningsdag, en test de getallen op 60 tot 70 procent bezetting voordat je een locatie vastlegt.',
    ),
  ],
  guideSections: [
    {
      heading: localized(
        'What goes into wellness retreat pricing',
        'Wat zit er in de prijs van een wellness retraite',
      ),
      body: [
        localized(
          'A wellness retreat price has to absorb a heavier cost stack than a typical yoga week. The first layer is the same — accommodation, meals, transfers, materials — but the menu is usually organic, plant-based, or specialised for fasting and detox protocols, which lifts the food cost per guest per day rather than just the headline figure. The second layer is practitioner cost: massage therapists, naturopaths, nutritionists, breathwork facilitators, and any medical supervision are paid per session or per day, and that is real money tied to bodies in the room rather than a cost that scales by group size.',
          'Een prijs voor een wellness retraite moet een zwaardere kostenopbouw dragen dan een gewone yoga week. De eerste laag is dezelfde — accommodatie, maaltijden, transfers, materialen — maar het menu is meestal biologisch, plantaardig of specifiek voor vasten- en detoxprotocollen, wat de eten-per-gast-per-dag duurder maakt en niet alleen het totale bedrag. De tweede laag zijn de behandelaars: masseurs, naturopaten, voedingsdeskundigen, ademwerkfacilitators en eventuele medische begeleiding worden per sessie of per dag betaald, en dat is geld dat direct gekoppeld is aan lichamen in de kamer en niet meeschaalt met de groepsgrootte.',
        ),
        localized(
          'The third layer is your own compensation as the host, and the fourth — easy to forget — is the longer planning runway a wellness retreat actually needs. A detox program with custom meal plans, daily treatments, and intake calls demands more design hours than a 5-day yoga week. Industry expense breakdowns put venue at 30 to 40 percent of the budget, staff and practitioners at 20 to 30 percent, food and accommodation at 15 to 25 percent, and marketing at 10 to 20 percent. If your numbers do not leave a 25 to 40 percent net margin on top of those, the price is too low for the program you are actually running.',
          'De derde laag is je eigen vergoeding als host, en de vierde — die makkelijk vergeten wordt — is de langere planningsperiode die een wellness retraite eigenlijk nodig heeft. Een detoxprogramma met persoonlijke maaltijdplannen, dagelijkse behandelingen en intakegesprekken vraagt meer ontwerpuren dan een 5-daagse yoga week. Industrie-uitgavenpatronen leggen locatie op 30 tot 40 procent van het budget, personeel en behandelaars op 20 tot 30 procent, eten en accommodatie op 15 tot 25 procent, en marketing op 10 tot 20 procent. Als jouw getallen daar geen netto marge van 25 tot 40 procent bovenop laten, is de prijs te laag voor het programma dat je werkelijk draait.',
        ),
      ],
    },
    {
      heading: localized(
        'Benchmark pricing for wellness retreats',
        'Benchmarkprijzen voor wellness retraites',
      ),
      body: [
        localized(
          'European wellness and detox retreats split into three broad tiers, and they sit higher than yoga across every tier. Budget wellness retreats in Spain, Portugal, Greece, and Italy run roughly €700 to €1,200 per person for a full 7-night program, often around €70 to €140 per night, with shared rooms and group treatments. The mid-range or boutique tier — the largest segment of the European market — runs €1,500 to €2,500 per person for 6 to 8 nights, with private rooms, organic catering, individual nutritional consultations, and several treatment sessions included. Premium and medical wellness sits at €3,000 and above per week, with destination retreats like Lanserhof, SHA, or Chenot Palace starting at €5,000 to €7,500 for a 6 to 7 night stay including diagnostics and supervised protocols.',
          'Europese wellness- en detoxretraites vallen in drie segmenten en liggen op elk niveau hoger dan yoga. Budget wellnessretraites in Spanje, Portugal, Griekenland en Italië gaan ongeveer €700 tot €1.200 per persoon voor een volledig 7-nachten programma, vaak rond €70 tot €140 per nacht, met gedeelde kamers en groepsbehandelingen. Het mid-range of boutique segment — de grootste schijf van de Europese markt — loopt van €1.500 tot €2.500 per persoon voor 6 tot 8 nachten, met privékamers, biologische catering, individuele voedingsadviezen en meerdere behandelsessies inbegrepen. Premium en medische wellness zit op €3.000 per week en hoger, met bestemmingsretraites zoals Lanserhof, SHA of Chenot Palace die starten bij €5.000 tot €7.500 voor een verblijf van 6 tot 7 nachten inclusief diagnostiek en begeleide protocollen.',
        ),
        localized(
          'Most wellness facilitators settle on 6 to 8 nights as the working duration, longer than the 4 to 7 typical for yoga. Detox and fasting programs in particular need that runway because the first two days are spent settling in and the last two on reintroduction — a 4-night format barely covers the cleanse itself. Group size of 10 to 20 is the practical band reported across operator guides: small enough to schedule individual treatments without bottlenecks, large enough to absorb the higher fixed cost of practitioner days, organic kitchen, and supervision.',
          'De meeste wellnessfacilitators komen uit op 6 tot 8 nachten als werkduur, langer dan de 4 tot 7 die typisch zijn voor yoga. Vooral detox- en vastenprogramma’s hebben die aanloop nodig omdat de eerste twee dagen voor landen zijn en de laatste twee voor herintroductie — een format van 4 nachten dekt de kuur zelf nauwelijks. Een groepsgrootte van 10 tot 20 is de praktische bandbreedte die in operatorgidsen wordt gerapporteerd: klein genoeg om individuele behandelingen zonder bottlenecks in te plannen, groot genoeg om de hogere vaste kosten van behandeldagen, biologische keuken en begeleiding te dragen.',
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
          'Breakeven is the number of guests at which revenue exactly covers total costs. Wellness retreats need a careful split between fixed and variable costs because more lines are practitioner-dependent than they look. Fixed costs are the venue minimum, your own fee, marketing already spent, insurance, transfers, and any practitioner you have booked on a flat day rate regardless of attendance. Variable costs are food per guest per day, treatments billed per session, transaction fees, and anything that scales with the headcount. Divide fixed costs by the contribution margin per guest — price per guest minus variable costs per guest — to find the breakeven number.',
          'Break-even is het aantal gasten waarbij de omzet de totale kosten precies dekt. Wellness retraites vereisen een zorgvuldige splitsing tussen vaste en variabele kosten, omdat meer kostenposten behandelaargebonden zijn dan ze lijken. Vaste kosten zijn het minimum van de locatie, je eigen fee, de al uitgegeven marketing, verzekering, transfers, en eventuele behandelaars die je op een vast dagtarief geboekt hebt ongeacht het aantal deelnemers. Variabele kosten zijn eten per gast per dag, behandelingen die per sessie afgerekend worden, transactiekosten en alles wat meeschaalt met het aantal mensen. Deel de vaste kosten door de bijdragemarge per gast — prijs per gast min variabele kosten per gast — om het break-even aantal te vinden.',
        ),
        localized(
          'Aim to break even at 60 to 70 percent of your maximum capacity. With 16 spots, the retreat should clear its costs by around 10 or 11 sign-ups. That cushion matters more for wellness than for yoga because cancellations correlate with the very things wellness guests are trying to address — illness, burnout, unstable schedules. A wellness retreat that only works at full capacity is one no-show away from a loss every cycle, and the operator guides flag that retreats hitting 90 percent occupancy roughly double the net profit of those at 60 percent because so much of the cost stack is fixed.',
          'Mik op break-even bij 60 tot 70 procent van je maximale capaciteit. Bij 16 plekken zou de retraite kostendekkend moeten zijn rond 10 of 11 inschrijvingen. Die buffer is voor wellness belangrijker dan voor yoga, omdat annuleringen correleren met precies de dingen waar wellnessgasten aan willen werken — ziekte, burn-out, onstabiele agenda’s. Een wellnessretraite die alleen op volle capaciteit werkt, is één no-show verwijderd van verlies per editie, en operatorgidsen melden dat retraites die 90 procent bezetting halen ongeveer het dubbele aan netto winst maken als die op 60 procent zitten omdat zo’n groot deel van de kostenopbouw vast is.',
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
          'The most common mistake on a wellness retreat is under-pricing the catering. Organic, anti-inflammatory, or detox-specific menus run two to three times the cost of a generic retreat buffet, and a kitchen that has to source seasonal organic produce, gluten-free baking, and individual dietary swaps cannot be costed at the same per-guest rate as a yoga week. The second mistake is treating practitioner fees as a vague extras line. Massage, bodywork, and nutritional consultations bill at €60 to €150 per session for standard work and €100 to €300 per session for specialty modalities like lymphatic drainage or craniosacral, and those numbers belong on their own line in the budget — not folded into facilitator fee.',
          'De meest gemaakte fout op een wellness retraite is de catering te laag inschatten. Biologische, ontstekingsremmende of detox-specifieke menu’s kosten twee tot drie keer zoveel als een gewoon retraitebuffet, en een keuken die seizoensgebonden biologische producten, glutenvrij bakwerk en individuele dieetaanpassingen moet leveren kan niet tegen dezelfde prijs per gast geboekt worden als een yoga week. De tweede fout is behandelaarvergoedingen als een vage extras-regel behandelen. Massage, bodywork en voedingsadviezen worden gefactureerd tegen €60 tot €150 per sessie voor regulier werk en €100 tot €300 per sessie voor specialismen zoals lymfedrainage of craniosacraal, en die bedragen horen op een eigen begrotingsregel — niet weggemoffeld onder facilitator fee.',
        ),
        localized(
          'Other recurring mistakes: forgetting payment processing fees of around 3 percent on every booking, ignoring no-shows that on wellness retreats can spike up to a 35 percent variance because guests are by definition stressed or unwell, leaving no contingency for supplier price swings on organic produce, and bundling treatments into the package without checking that the practitioner schedule actually has the hours to deliver them at full capacity. A package that promises four massages per guest at 16 guests is committing 64 sessions in 6 days, which most single-practitioner setups cannot service without overtime or a second therapist on retainer.',
          'Andere terugkerende fouten: vergeten dat transactiekosten van rond de 3 procent op elke boeking drukken, no-shows negeren die bij wellness retraites kunnen oplopen tot 35 procent variantie omdat gasten per definitie gestrest of niet in topvorm zijn, geen buffer aanhouden voor prijsschommelingen bij biologische producten, en behandelingen in het pakket stoppen zonder te controleren of het rooster van de behandelaar de uren feitelijk aankan op volle capaciteit. Een pakket dat vier massages per gast belooft bij 16 gasten committeert 64 sessies in 6 dagen, en dat halen de meeste setups met één behandelaar niet zonder overuren of een tweede therapeut op afroep.',
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
          'A higher price is defensible when something concrete justifies it. Certified protocols carry the most weight on a wellness retreat: a Mayr-trained practitioner, a registered naturopath, a clinical nutritionist, or a doctor on site moves the program out of the general wellness category and into something insurance, employers, and serious guests treat differently. A clearly defined niche — postnatal recovery, perimenopause, burnout, gut health, hormonal reset — narrows the audience but lets the people inside that audience feel the retreat is built specifically for them, and that fit usually supports a 20 to 30 percent price bump over a generic wellness week at the same venue.',
          'Een hogere prijs is verdedigbaar als er iets concreets is dat het rechtvaardigt. Gecertificeerde protocollen wegen het zwaarst op een wellness retraite: een Mayr-opgeleide behandelaar, een geregistreerde naturopaat, een klinisch voedingsdeskundige of een arts ter plaatse tilt het programma uit de algemene wellnesscategorie naar iets dat verzekeraars, werkgevers en serieuze gasten anders behandelen. Een duidelijk afgebakende niche — postnatal herstel, perimenopauze, burn-out, darmgezondheid, hormonale reset — maakt de doelgroep kleiner maar zorgt dat de mensen erbinnen voelen dat de retraite specifiek voor hen is gebouwd, en die match ondersteunt meestal een prijstoeslag van 20 tot 30 procent boven een generieke wellnessweek op dezelfde locatie.',
        ),
        localized(
          'Smaller groups and more individual treatment time also support higher pricing, because attention scales inversely with attendance. A wellness retreat capped at 8 with daily one-on-one bodywork, a personal nutrition plan, and individual integration sessions sells at a different price than the same week with 20 guests pooling group treatments. Premium guests are paying for the cap and the practitioner time as much as for the program. The same applies to genuinely exceptional venues with on-site spa infrastructure, hydrotherapy or thermal facilities, or in-house chefs with formal dietetic credentials — but only if those things are real, deliverable on schedule, and not just language on a sales page.',
          'Kleinere groepen en meer individuele behandeltijd ondersteunen ook een hogere prijs, omdat aandacht omgekeerd evenredig schaalt met groepsgrootte. Een wellness retraite met maximaal 8 deelnemers, dagelijks individueel bodywork, een persoonlijk voedingsplan en individuele integratiesessies verkoopt zich tegen een andere prijs dan dezelfde week met 20 gasten die groepsbehandelingen delen. Premium gasten betalen evenveel voor het maximum en de behandeltijd als voor het programma zelf. Hetzelfde geldt voor werkelijk uitzonderlijke locaties met spa-infrastructuur, hydrotherapie of thermale faciliteiten, of vaste chefs met formele diëtistencertificering — maar alleen als die er echt zijn, op tijd geleverd worden, en niet alleen op de salespagina staan.',
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
          'A workable rule of thumb is reserving roughly 10 to 20 percent of the total retreat budget for marketing — paid ads, design, photography, landing pages, platform fees, and any affiliate or referral spend. Wellness retreats often need the upper end of that range on a first edition because the proof points buyers look for (testimonials, before-and-after stories, practitioner credentials in context) take time to accumulate. Health and wellness audiences also research more carefully than yoga audiences, so you typically need long-form landing pages, a clear program outline, and credentials visible above the fold rather than only on a separate page.',
          'Een bruikbare vuistregel is ongeveer 10 tot 20 procent van het totale retraitebudget reserveren voor marketing — betaalde advertenties, vormgeving, fotografie, landingspagina’s, platformkosten en eventuele affiliate- of referraluitgaven. Wellness retraites zitten vaak aan de bovenkant van die range bij een eerste editie, omdat de bewijsstukken die kopers zoeken (testimonials, voor-en-na verhalen, credentials van behandelaars in context) tijd nodig hebben om op te bouwen. Gezondheids- en wellnessdoelgroepen onderzoeken ook zorgvuldiger dan yogadoelgroepen, dus je hebt meestal lange landingspagina’s, een duidelijk programma-overzicht en credentials boven de vouw nodig in plaats van alleen op een aparte pagina.',
        ),
        localized(
          'On timing, retreat industry guides consistently recommend opening registration 9 to 12 months before the start date for wellness retreats — earlier than the 6 to 9 months suggested for general yoga retreats. The reason is practical: wellness guests often plan around medical schedules, fertility windows, or recovery from a specific event, and they need that runway to coordinate with doctors, employers, and family. The most reliable channels remain your own email list, partnerships with practitioners who already see your target audience, listings on wellness-specific platforms like Health and Fitness Travel or Wellbeing Escapes, and word of mouth from past guests — paid ads usually amplify these rather than replace them.',
          'Qua timing adviseren retraitegidsen consequent om de inschrijving 9 tot 12 maanden vóór de startdatum te openen voor wellness retraites — eerder dan de 6 tot 9 maanden die voor algemene yoga retraites geadviseerd wordt. De reden is praktisch: wellnessgasten plannen vaak rond medische schema’s, vruchtbaarheidsvensters of herstel van een specifieke gebeurtenis, en hebben die aanloop nodig om af te stemmen met artsen, werkgevers en familie. De meest betrouwbare kanalen blijven je eigen mailinglijst, samenwerkingen met behandelaars die jouw doelgroep al zien, listings op wellness-specifieke platforms zoals Health and Fitness Travel of Wellbeing Escapes, en mond-tot-mondreclame van eerdere gasten — betaalde advertenties versterken dit meestal in plaats van het te vervangen.',
        ),
      ],
    },
  ],
  faq: [
    {
      question: localized(
        'How is wellness retreat pricing different from yoga retreat pricing?',
        'Hoe verschilt de prijs van een wellness retraite van die van een yoga retraite?',
      ),
      answer: localized(
        'Wellness sits roughly one tier higher across the board. Where a mid-range European yoga week runs €1,000 to €1,800 per person, a comparable wellness or detox week runs €1,500 to €2,500 because catering is organic or protocol-specific, treatments are billed per session, and the program usually runs longer. Premium wellness can reach €5,000 to €7,500 for 6 to 7 nights at established medical-wellness destinations, a tier that has no real equivalent in yoga.',
        'Wellness ligt over de hele linie ongeveer één segment hoger. Waar een mid-range Europese yoga week €1.000 tot €1.800 per persoon kost, ligt een vergelijkbare wellness- of detoxweek op €1.500 tot €2.500 omdat catering biologisch of protocolgebonden is, behandelingen per sessie afgerekend worden en het programma meestal langer duurt. Premium wellness kan oplopen tot €5.000 tot €7.500 voor 6 tot 7 nachten op gevestigde medisch-wellness bestemmingen, een segment dat in yoga geen echte tegenhanger heeft.',
      ),
    },
    {
      question: localized(
        'Should I include treatments in the package or charge separately?',
        'Moet ik behandelingen in het pakket opnemen of apart factureren?',
      ),
      answer: localized(
        'A clear core package with a fixed number of included treatments — typically two to four sessions per guest — sells better than an à la carte menu, because it removes the in-the-moment money decisions guests do not want to make on a wellness retreat. Add-ons (extra massages, private practitioner time, specialty modalities) work alongside that base if they are genuinely optional and clearly priced. The risk to avoid is bundling unlimited treatments at full capacity: a single therapist physically cannot deliver them, and the package collapses the moment the retreat sells out.',
        'Een helder basispakket met een vast aantal inbegrepen behandelingen — meestal twee tot vier sessies per gast — verkoopt beter dan een losse menukaart, omdat het de financiële beslissingen op het moment zelf wegneemt die gasten op een wellness retraite niet willen maken. Add-ons (extra massages, privétijd met een behandelaar, specialistische modaliteiten) werken naast die basis prima zolang ze echt optioneel zijn en helder geprijsd. De val die je moet vermijden is onbeperkt behandelingen aanbieden bij volle bezetting: één therapeut kan dat fysiek niet leveren, en het pakket valt om zodra de retraite uitverkocht raakt.',
      ),
    },
    {
      question: localized(
        'How do I price detox retreats versus general wellness retreats?',
        'Hoe prijs ik detoxretraites versus algemene wellness retraites?',
      ),
      answer: localized(
        'Detox programs sit at the upper end of the wellness band because they are longer, food cost goes up rather than down (juices, broths, supplements, supervised reintroduction), and they almost always require a clinical practitioner on site for intake and follow-up. A 7-night juice-and-fasting protocol at a credentialed venue typically prices at €2,000 to €3,500 per person, where a non-detox wellness week at the same venue might sit at €1,500 to €2,200. The longer duration also means a higher absolute deposit — guests are committing to a clinical-feeling program, and the price needs to reflect that level of supervision.',
        'Detoxprogramma’s zitten aan de bovenkant van de wellnessband omdat ze langer duren, de eten-kosten juist stijgen in plaats van dalen (sappen, bouillons, supplementen, begeleide herintroductie) en er bijna altijd een klinische behandelaar ter plaatse moet zijn voor intake en nazorg. Een 7-nachten sap-en-vasten protocol op een gecertificeerde locatie ligt meestal op €2.000 tot €3.500 per persoon, terwijl een niet-detox wellness week op dezelfde locatie €1.500 tot €2.200 zou kosten. De langere duur betekent ook een hogere aanbetaling in absolute zin — gasten committeren zich aan een programma met een klinisch karakter, en de prijs moet dat niveau van begeleiding weerspiegelen.',
      ),
    },
    {
      question: localized(
        'What deposit and cancellation policy is standard for wellness retreats?',
        'Welke aanbetaling en welk annuleringsbeleid is standaard voor wellness retraites?',
      ),
      answer: localized(
        'A 20 to 30 percent non-refundable deposit at booking is the prevailing pattern, with the balance due 60 to 90 days before the start date. Wellness retreats often add a tighter clause: cancellations inside 30 days are non-refundable rather than partially refundable, because the kitchen has already ordered protocol-specific supplies and the practitioner schedule is locked. Recommend travel insurance in the booking confirmation — for wellness audiences, who frequently cancel due to the conditions they are trying to address, that recommendation is doing real work, not paperwork.',
        'Een niet-restitueerbare aanbetaling van 20 tot 30 procent bij boeking is het gangbare patroon, met de rest betaalbaar 60 tot 90 dagen voor aanvang. Wellness retraites voegen vaak een strakkere clausule toe: annuleringen binnen 30 dagen zijn niet-restitueerbaar in plaats van gedeeltelijk restitueerbaar, omdat de keuken al protocol-specifieke voorraden besteld heeft en het behandelaarrooster vastligt. Adviseer een reisverzekering in de boekingsbevestiging — voor wellnessdoelgroepen, die regelmatig annuleren vanwege precies de klachten waar ze aan willen werken, doet dat advies echt iets en is het geen formaliteit.',
      ),
    },
    {
      question: localized(
        'How long should a wellness retreat be?',
        'Hoe lang moet een wellness retraite duren?',
      ),
      answer: localized(
        'Six to eight nights is the standard for a meaningful wellness or detox program, longer than the 4 to 7 typical for yoga. Detox and fasting protocols frequently need 7 to 10 nights to cover preparation, the cleanse itself, and reintroduction. Anything below 5 nights tends to function as a wellness weekend rather than a program — which is a fine product to sell, but it should be priced and marketed differently and not as a shorter version of the longer retreat.',
        'Zes tot acht nachten is de standaard voor een betekenisvol wellness- of detoxprogramma, langer dan de 4 tot 7 die typisch zijn voor yoga. Detox- en vastenprotocollen vragen vaak 7 tot 10 nachten om voorbereiding, de kuur zelf en herintroductie te dekken. Alles onder de 5 nachten functioneert eerder als een wellnessweekend dan als een programma — dat is een prima product om te verkopen, maar het moet anders geprijsd en gepositioneerd worden, niet als een verkorte versie van de langere retraite.',
      ),
    },
    {
      question: localized(
        'What profit margin should I aim for on a wellness retreat?',
        'Welke winstmarge moet ik aanhouden op een wellness retraite?',
      ),
      answer: localized(
        'A 25 to 40 percent net margin is the band most retreat business guides treat as healthy, and wellness retreats can hold the upper end of that more easily than yoga because price points are higher and ancillary revenue (extra treatments, supplement packs, post-retreat coaching) is a natural fit. Below 20 percent there is almost no room for the things that go wrong on a wellness retreat — late cancellations, organic supply price jumps, a practitioner pulling out — and operators typically report doubling net profit when occupancy moves from 60 to 90 percent because so much of the cost stack is fixed.',
        'Een nettomarge van 25 tot 40 procent is de range die de meeste retraitegidsen als gezond beschouwen, en wellness retraites kunnen de bovenkant daarvan makkelijker vasthouden dan yoga omdat de prijzen hoger liggen en bij-omzet (extra behandelingen, supplementpakketten, post-retraite coaching) er logisch in past. Onder de 20 procent is er nauwelijks ruimte voor wat er op een wellness retraite mis kan gaan — late annuleringen, prijsstijgingen op biologische inkoop, een behandelaar die uitvalt — en operators melden meestal een verdubbeling van de nettowinst als de bezetting van 60 naar 90 procent gaat, omdat een groot deel van de kostenopbouw vast is.',
      ),
    },
    {
      question: localized(
        'How do I budget for practitioner and treatment costs?',
        'Hoe begroot ik kosten voor behandelaars en therapieën?',
      ),
      answer: localized(
        'Treat practitioner cost as its own budget line, separate from your facilitator fee. Standard massage and bodywork sessions in Europe bill at €60 to €150 per session, and specialty modalities like lymphatic drainage, craniosacral, myofascial release, or naturopathic consultations run €100 to €300 per session. Many practitioners prefer a flat day rate of €350 to €600 for an on-site day, which is often cheaper than per-session billing once volume is high. Decide upfront whether the practitioner is a fixed cost (booked for the week regardless of guest count) or variable (paid per session delivered) — the breakeven calculation depends on it.',
        'Behandel behandelaarkosten als een aparte begrotingsregel, los van je eigen facilitator fee. Reguliere massage en bodywork sessies in Europa worden gefactureerd tegen €60 tot €150 per sessie, en specialismen zoals lymfedrainage, craniosacraal, myofasciale release of naturopathische consulten lopen van €100 tot €300 per sessie. Veel behandelaars prefereren een vast dagtarief van €350 tot €600 voor een dag ter plaatse, wat vaak goedkoper uitvalt dan per-sessie afrekenen zodra het volume hoog is. Bepaal vooraf of de behandelaar een vaste kost is (geboekt voor de week ongeacht het aantal gasten) of variabel (betaald per geleverde sessie) — de break-even berekening hangt daarvan af.',
      ),
    },
    {
      question: localized(
        'How early should I open registration for a wellness retreat?',
        'Hoe vroeg moet ik de inschrijving openen voor een wellness retraite?',
      ),
      answer: localized(
        'Open 9 to 12 months before the start date for most wellness and detox retreats, longer than the 6 to 9 months suggested for general yoga retreats. Wellness guests often coordinate around medical appointments, fertility windows, recovery timelines, or employer health programs, and they need a longer runway to commit. Earlier is rarely a problem; later usually is, because the people most likely to book a wellness program are also the ones planning their year carefully.',
        'Open 9 tot 12 maanden vóór de startdatum voor de meeste wellness- en detoxretraites, langer dan de 6 tot 9 maanden die voor algemene yoga retraites geadviseerd wordt. Wellnessgasten plannen vaak rond medische afspraken, vruchtbaarheidsvensters, hersteltrajecten of bedrijfsgezondheidsprogramma’s, en hebben een langere aanloop nodig om commitment te maken. Eerder openen is zelden een probleem; later openen meestal wel, omdat de mensen die het eerst boeken ook degenen zijn die hun jaar zorgvuldig plannen.',
      ),
    },
    {
      question: localized(
        'Should I list on platforms like BookRetreats or Retreat Guru?',
        'Moet ik op platforms als BookRetreats of Retreat Guru staan?',
      ),
      answer: localized(
        'Listing platforms put you in front of an audience already searching for wellness and detox programs, which is genuinely useful for a first edition before you have a list of past guests. They take a commission — typically a single-digit to mid-teen percentage of bookings — so factor that into your price the same way you factor in payment processing fees. For wellness in particular, vertical platforms like Health and Fitness Travel and Wellbeing Escapes often outperform generic listings because their audience is already screening for credentials and protocols. Once you have a warm email list and recurring guests, direct booking through your own page usually outperforms platforms.',
        'Lijstplatforms zetten je voor een publiek dat al actief zoekt naar wellness- en detoxprogramma’s, wat echt nuttig is voor een eerste editie voordat je een lijst eerdere gasten hebt. Ze rekenen een commissie — meestal een eencijferig tot midden-tienprocent percentage van de boekingen — dus reken dat in je prijs op dezelfde manier mee als transactiekosten. Specifiek voor wellness presteren verticale platforms zoals Health and Fitness Travel en Wellbeing Escapes vaak beter dan generieke listings omdat hun publiek al filtert op credentials en protocollen. Zodra je een warme mailinglijst en terugkerende gasten hebt, presteert directe boeking via je eigen pagina meestal beter dan een platform.',
      ),
    },
  ],
}

const MEDITATION_CONTENT: CalculatorVariantContent = {
  howToSteps: [
    localized(
      'Set the group size and number of nights — most meditation retreats run 12 to 16 sitters over 3 to 5 nights, with longer 7 to 10 night silent intensives at the upper end.',
      'Stel de groepsgrootte en het aantal nachten in — de meeste meditatieretraites draaien 12 tot 16 deelnemers over 3 tot 5 nachten, met langere 7 tot 10-daagse stille intensives aan de bovenkant.',
    ),
    localized(
      'Set the price per guest using the benchmark range, and decide upfront whether you are running a fixed-fee model or splitting a course fee from a separate dana offering for the teacher.',
      'Stel de prijs per gast in met de benchmarkrange als richtlijn, en beslis vooraf of je met een vaste prijs werkt of een cursusbijdrage afsplitst van een aparte dana-bijdrage voor de docent.',
    ),
    localized(
      'Enter the costs you have on paper — venue, vegetarian meals, your own fee or expected dana, any guest teacher day rate, marketing, travel, and insurance.',
      'Voer de kosten in die je op papier hebt staan — locatie, vegetarische maaltijden, je eigen fee of verwachte dana, het dagtarief van een eventuele gastdocent, marketing, reizen en verzekering.',
    ),
    localized(
      'Read the live summary on the right for profit, margin, breakeven occupancy, and profit per planning day, and stress-test the numbers at 60 to 70 percent occupancy before committing to a venue minimum.',
      'Lees rechts de live samenvatting voor winst, marge, break-even bezetting en winst per planningsdag, en test de getallen op 60 tot 70 procent bezetting voordat je je vastlegt aan een minimum afnameplicht.',
    ),
  ],
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

export const CALCULATOR_CONTENT: CalculatorContentMap = {
  [ToolVariant.GENERIC]: PLACEHOLDER_VARIANT_CONTENT,
  [ToolVariant.YOGA]: YOGA_CONTENT,
  [ToolVariant.WELLNESS]: WELLNESS_CONTENT,
  [ToolVariant.MEDITATION]: MEDITATION_CONTENT,
  [ToolVariant.COACHING]: PLACEHOLDER_VARIANT_CONTENT,
}

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
 */

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

const COACHING_CONTENT: CalculatorVariantContent = {
  howToSteps: [
    localized(
      'Set the group size and number of nights — coaching retreats and intensives typically run 4 to 8 participants over 3 to 5 nights, with weekend VIP intensives at the short end and week-long mastermind retreats at the longer end.',
      'Stel de groepsgrootte en het aantal nachten in — coaching retraites en intensives draaien meestal 4 tot 8 deelnemers over 3 tot 5 nachten, met weekend VIP intensives aan de korte kant en week-lange mastermind retraites aan de langere kant.',
    ),
    localized(
      'Set the price per guest using the benchmark range, but expect coaching retreat pricing to vary much more widely than yoga or wellness — credentials, niche, and positioning move the price by a factor of 5 or more, not 20 percent.',
      'Stel de prijs per gast in met de benchmarkrange, maar verwacht dat de prijzen voor coaching retraites veel breder uiteenlopen dan bij yoga of wellness — credentials, niche en positionering verschuiven de prijs met een factor 5 of meer, niet met 20 procent.',
    ),
    localized(
      'Enter every cost line — venue, catering, your own coaching fee, any co-facilitator or specialist day rates, marketing, travel, and insurance. Coaching retreats typically have lower marketing cost as a percentage but higher facilitator compensation than other retreat types.',
      'Vul elke kostenpost in — locatie, catering, je eigen coachingfee, dagtarieven van eventuele co-facilitators of specialisten, marketing, reizen en verzekering. Coaching retraites hebben meestal lagere marketingkosten als percentage maar een hogere facilitatorvergoeding dan andere retraitetypen.',
    ),
    localized(
      'Read the live summary on the right for profit, margin, breakeven, and profit per planning day, and stress-test the numbers at 60 to 75 percent occupancy — small groups make every empty seat hurt more than on a larger retreat.',
      'Lees rechts de live samenvatting voor winst, marge, break-even en winst per planningsdag, en test de getallen op 60 tot 75 procent bezetting — kleine groepen maken elke lege plek pijnlijker dan op een grotere retraite.',
    ),
  ],
  guideSections: [
    {
      heading: localized(
        'What goes into coaching retreat pricing',
        'Wat zit er in de prijs van een coaching retraite',
      ),
      body: [
        localized(
          'Coaching retreat pricing is built on three things that are not the same as yoga or wellness pricing. The first is your time — not just the days at the venue, but the intake calls, pre-work review, individual prep per participant, and the post-retreat integration calls or accountability that high-ticket clients now expect as standard. A coach charging €500 per hour for 1:1 work cannot price a 4-day retreat using the same per-night logic as a yoga teacher, because the underlying unit of value is concentrated facilitator attention, not group instruction. The second is the transformation outcome the program promises. Coaching buyers compare the retreat price to the value of the result — a sales breakthrough, a leadership decision, a business pivot — rather than to the cost of comparable accommodation.',
          'De prijs van een coaching retraite wordt opgebouwd uit drie dingen die niet hetzelfde zijn als bij yoga of wellness. Het eerste is je tijd — niet alleen de dagen op de locatie, maar ook de intakegesprekken, het bekijken van voorwerk, individuele voorbereiding per deelnemer en de post-retraite integratiegesprekken of accountability die high-ticket klanten inmiddels als standaard verwachten. Een coach die €500 per uur rekent voor 1:1 werk kan een 4-daagse retraite niet prijzen volgens dezelfde per-nacht logica als een yogadocent, omdat de onderliggende waarde-eenheid geconcentreerde facilitator-aandacht is, geen groepsles. Het tweede is de transformatie die het programma belooft. Coachingkopers vergelijken de prijs van de retraite met de waarde van het resultaat — een salesdoorbraak, een leiderschapsbeslissing, een bedrijfspivot — niet met de kosten van vergelijkbaar verblijf.',
        ),
        localized(
          'The third layer is the operational stack — venue, food, transfers, materials, payment processing, insurance — and on most coaching retreats this is a smaller share of total cost than on a yoga or wellness program. A coaching retreat with 6 participants paying €5,000 each generates €30,000 of revenue from a venue cost that might sit at €5,000 to €8,000 for the week. The ratio is structurally different, and so is the planning ratio: coaching retreats often need 80 to 150 hours of design and pre-work per cohort because every participant gets bespoke attention rather than a fixed program. If your numbers do not pay you for that prep time at a rate close to your private 1:1 rate, the retreat is undercutting your own coaching practice.',
          'De derde laag is de operationele stack — locatie, eten, transfers, materialen, transactiekosten, verzekering — en op de meeste coaching retraites is dit een kleiner deel van de totale kosten dan op een yoga- of wellness-programma. Een coaching retraite met 6 deelnemers die ieder €5.000 betalen genereert €30.000 omzet uit een locatiekost die misschien op €5.000 tot €8.000 voor de week zit. De verhouding is structureel anders, en de planningsverhouding ook: coaching retraites vragen vaak 80 tot 150 uur ontwerp en voorwerk per cohort omdat elke deelnemer maatwerk-aandacht krijgt in plaats van een vast programma. Als jouw getallen je niet betalen voor die voorbereidingstijd tegen een tarief dicht bij je private 1:1 tarief, ondergraaft de retraite je eigen coachingpraktijk.',
        ),
      ],
    },
    {
      heading: localized(
        'Benchmark pricing for coaching retreats',
        'Benchmarkprijzen voor coaching retraites',
      ),
      body: [
        localized(
          'Coaching retreat pricing varies more widely than any other retreat category — there is no single tier structure that holds across the market. As a working reference, life coaching retreats and entry-level group intensives in Europe typically price at €2,000 to €4,000 per person for 3 to 5 nights, with 6 to 10 participants and shared coaching time. Mid-tier business and leadership coaching retreats run €4,000 to €8,000 per person for 4 to 6 nights with smaller groups of 4 to 8 and meaningful 1:1 time. Executive coaching retreats and high-end masterminds price at €10,000 and above per person, often €15,000 to €30,000 for a single in-person retreat included inside a larger annual mastermind, and named-coach programs (Genius Network, Tiger 21, Strategic Coach) charge €20,000 to €100,000 per year with one or more retreats included.',
          'De prijzen van coaching retraites variëren breder dan enige andere retraitecategorie — er is geen enkele tier-structuur die in de hele markt geldt. Als werkbare referentie: life coaching retraites en groepsintensives op instapniveau in Europa kosten meestal €2.000 tot €4.000 per persoon voor 3 tot 5 nachten, met 6 tot 10 deelnemers en gedeelde coachingtijd. Mid-tier business- en leadership coaching retraites lopen van €4.000 tot €8.000 per persoon voor 4 tot 6 nachten met kleinere groepen van 4 tot 8 en serieuze 1:1 tijd. Executive coaching retraites en high-end masterminds zitten op €10.000 of hoger per persoon, vaak €15.000 tot €30.000 voor één in-person retraite die deel uitmaakt van een groter jaarprogramma, en programma’s met een docent met naam (Genius Network, Tiger 21, Strategic Coach) rekenen €20.000 tot €100.000 per jaar met één of meerdere retraites inbegrepen.',
        ),
        localized(
          'Group size on coaching retreats is structurally smaller than on yoga or wellness programs because the product is concentrated attention. Most facilitators settle on 4 to 8 participants for a working retreat, with VIP days and 1:1 intensives sitting at 1 to 3, and only mastermind formats running larger at 10 to 20. Duration also clusters tighter: 3 to 5 nights is the most common working format, weekend VIP intensives running 2 to 3 nights price at €3,000 to €10,000 per person, and week-long retreats only show up at the upper end of the market. The European market sits slightly above North American pricing on a per-hour basis (around €280 versus €270 per coaching hour for credentialed coaches), but the retreat premium narrows that gap because logistics scale similarly.',
          'De groepsgrootte op coaching retraites is structureel kleiner dan op yoga- of wellness-programma’s omdat het product geconcentreerde aandacht is. De meeste facilitators komen uit op 4 tot 8 deelnemers voor een werkbare retraite, met VIP-dagen en 1:1 intensives op 1 tot 3, en alleen mastermind-formats die groter draaien met 10 tot 20. Ook de duur clustert strakker: 3 tot 5 nachten is het meest voorkomende werkbare format, weekend VIP intensives van 2 tot 3 nachten zitten op €3.000 tot €10.000 per persoon, en week-lange retraites verschijnen alleen aan de bovenkant van de markt. De Europese markt ligt op uurbasis iets boven de Noord-Amerikaanse (rond €280 versus €270 per coachuur voor gecertificeerde coaches), maar de retraite-premie verkleint dat verschil omdat logistiek vergelijkbaar schaalt.',
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
          'Breakeven on a coaching retreat is the number of participants at which revenue exactly covers total costs. The calculation is the same as for any retreat — fixed costs divided by contribution margin per guest — but the cost split looks different because the largest fixed cost is your own time, not the venue. Fixed costs are the venue minimum, your facilitator fee, marketing already spent, insurance, transfers, and any specialist or co-coach booked on a flat day rate. Variable costs are food per participant per day, transaction fees of around 3 percent, and any per-participant materials. Divide fixed costs by the contribution margin per participant — price minus variable costs — to find the breakeven count.',
          'Break-even op een coaching retraite is het aantal deelnemers waarbij de omzet de totale kosten precies dekt. De berekening is hetzelfde als bij elke retraite — vaste kosten gedeeld door bijdragemarge per gast — maar de kostenverdeling ziet er anders uit omdat de grootste vaste kost je eigen tijd is, niet de locatie. Vaste kosten zijn het minimum van de locatie, je eigen facilitator fee, de al uitgegeven marketing, verzekering, transfers en een eventuele specialist of co-coach op een vast dagtarief. Variabele kosten zijn eten per deelnemer per dag, transactiekosten van rond de 3 procent en eventuele per-deelnemer materialen. Deel de vaste kosten door de bijdragemarge per deelnemer — prijs min variabele kosten — om het break-even aantal te vinden.',
        ),
        localized(
          'On a small-group coaching retreat the breakeven math is unforgiving. Aim to break even at 60 to 75 percent of capacity — at 6 spots that means clearing costs by 4 confirmed bookings. Below that floor, every empty seat hurts more than on a 15-person yoga retreat because there are fewer paying participants to absorb your fixed time and venue commitment. The structural advantage runs the other way once you cross breakeven: with low variable costs (no per-participant treatments or specialist sessions billed by the hour), each additional booking contributes most of its price directly to net profit. The implication is operational rather than mathematical — you cannot afford a slow application funnel. Open registration earlier, screen tighter, and price the program so that 4 of 6 confirmed bookings cover everything.',
          'Op een coaching retraite met een kleine groep is de break-even rekensom onverbiddelijk. Mik op break-even bij 60 tot 75 procent van de capaciteit — bij 6 plekken betekent dat kostendekking bij 4 bevestigde boekingen. Onder die ondergrens doet elke lege plek meer pijn dan op een yoga retraite met 15 deelnemers, omdat er minder betalende deelnemers zijn om jouw vaste tijd en locatieverplichting op te vangen. Het structurele voordeel loopt de andere kant op zodra je break-even passeert: met lage variabele kosten (geen per-deelnemer behandelingen of per-uur gefactureerde sessies) draagt elke extra boeking het grootste deel van zijn prijs direct bij aan de netto winst. Het gevolg is operationeel, niet wiskundig — je kunt je geen trage applicatie-funnel veroorloven. Open de inschrijving eerder, screen scherper, en prijs het programma zo dat 4 van de 6 bevestigde boekingen alles dekken.',
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
          'The most common pricing mistake on a coaching retreat is undercharging for 1:1 time. A coach who lists a 4-day retreat at €3,000 with three private sessions per participant is selling those sessions at well below their normal hourly rate, and the retreat is silently subsidising the participant out of the coach’s standard practice. The fix is to price the retreat at the value of the time delivered: if your private rate is €400 per hour and the program includes 4 hours of 1:1 work, those hours alone are worth €1,600 before group sessions, accommodation, food, and transformation outcome are added. The second mistake is ignoring the prep work. Coaching retreats with intake calls, pre-work review, individual planning per participant, and post-retreat integration calls regularly require 15 to 25 hours of facilitator time per participant outside the retreat days themselves — and that time has to be in the price.',
          'De meest gemaakte prijsfout op een coaching retraite is te weinig vragen voor 1:1 tijd. Een coach die een 4-daagse retraite voor €3.000 aanbiedt met drie privésessies per deelnemer verkoopt die sessies ver onder zijn normale uurtarief, en de retraite subsidieert in stilte de deelnemer ten koste van de reguliere praktijk van de coach. De oplossing is de retraite prijzen op de waarde van de geleverde tijd: als je privétarief €400 per uur is en het programma omvat 4 uur 1:1 werk, dan zijn alleen die uren al €1.600 waard voordat groepssessies, verblijf, eten en transformatieresultaat erbij komen. De tweede fout is voorbereidingswerk negeren. Coaching retraites met intakegesprekken, beoordeling van voorwerk, individuele planning per deelnemer en post-retraite integratiegesprekken vragen regelmatig 15 tot 25 uur facilitatortijd per deelnemer buiten de retraitedagen zelf — en die tijd moet in de prijs zitten.',
        ),
        localized(
          'Other recurring mistakes: pricing the retreat against accommodation cost rather than transformation value, which anchors buyers to a logic that does not apply to high-ticket coaching; quoting one group price without an application process, which sells you whoever can afford the number rather than whoever fits the program; bundling unlimited follow-up coaching after the retreat, which extends your delivery obligation indefinitely without extending the price; and discounting at the end of a sales window. Discounting in particular damages a coaching brand more than any other category because it signals to high-ticket buyers that the price was negotiable from the start. If a retreat is not filling, the right response is usually a tighter screening process or a sharper niche, not a lower price.',
          'Andere terugkerende fouten: de retraite prijzen tegen accommodatiekosten in plaats van transformatiewaarde, waardoor kopers worden verankerd in een logica die niet geldt voor high-ticket coaching; één groepsprijs publiceren zonder applicatieproces, waardoor je verkoopt aan iedereen die het bedrag kan opbrengen in plaats van aan wie bij het programma past; onbeperkte vervolgcoaching na de retraite inbouwen, wat je leveringsverplichting onbeperkt verlengt zonder de prijs te verhogen; en korting geven aan het eind van een verkoopvenster. Vooral korting beschadigt een coachingmerk meer dan in welke andere categorie ook, omdat het high-ticket kopers signaleert dat de prijs vanaf het begin onderhandelbaar was. Vult een retraite zich niet, dan is het juiste antwoord meestal een strakker screeningproces of een scherpere niche, niet een lagere prijs.',
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
          'A higher price is defensible when something concrete justifies it, and on coaching retreats credentials matter in a measurable way. The 2022 ICF Global Consumer Awareness Study found 85 percent of coaching clients value credentialed coaches and report 28 percent higher satisfaction when their coach is credentialed, and corporate procurement departments increasingly filter for ICF PCC or MCC, EMCC, or comparable accreditation when sourcing executive coaching. A credentialed coach with a published book, a documented client roster, or formal authorisation in a specific methodology (Co-Active, Hudson, ORSC, Gestalt) can defensibly price a retreat at two to five times the market rate of an uncredentialed life coaching weekend. Niche specialisation works the same way: retreats for venture-backed founders, mid-career attorneys in transition, surgeons facing burnout, or sales leaders preparing for an IPO each narrow the audience but let the people inside it pay an order of magnitude more than they would for general life coaching.',
          'Een hogere prijs is verdedigbaar als er iets concreets is dat het rechtvaardigt, en op coaching retraites tellen credentials op een meetbare manier mee. Het ICF Global Consumer Awareness Study uit 2022 vond dat 85 procent van de coachingklanten waarde hecht aan gecertificeerde coaches en 28 procent meer tevredenheid rapporteert wanneer hun coach een credential heeft, en inkoopafdelingen filteren steeds vaker op ICF PCC of MCC, EMCC of vergelijkbare accreditatie bij het inkopen van executive coaching. Een gecertificeerde coach met een gepubliceerd boek, een gedocumenteerd klantenbestand of formele bevoegdheid binnen een specifieke methodologie (Co-Active, Hudson, ORSC, Gestalt) kan een retraite verdedigbaar prijzen op twee tot vijf keer het markttarief van een life coaching weekend zonder credentials. Niche-specialisatie werkt op dezelfde manier: retraites voor venture-backed founders, mid-career advocaten in transitie, chirurgen met burn-out of sales leaders die zich voorbereiden op een IPO maken de doelgroep kleiner maar laten de mensen erbinnen een orde van grootte meer betalen dan voor generieke life coaching.',
        ),
        localized(
          'Results-based pricing — pricing the retreat against the financial or career outcome the participant is paying for — is the other lever that justifies the highest tier. A retreat that helps a founder close a €500,000 funding round, a leader negotiate a €100,000 raise, or a coach build a six-figure practice can defensibly price at €15,000 to €30,000 because the buyer is comparing it to that result rather than to a hotel bill. Smaller groups support this directly: a retreat capped at 4 with daily 1:1 sessions, individual case work, and a follow-up integration program runs at a different price than the same week with 12 participants in shared coaching time. Premium buyers are paying for the cap and the access as much as for the program — and an in-person setting at a high-quality venue (rather than virtual) typically supports a 50 to 100 percent premium over the same content delivered remotely.',
          'Resultaatgebaseerde prijzen — de retraite prijzen tegen het financiële of carrièreresultaat dat de deelnemer betaalt — is de andere hefboom die het hoogste segment rechtvaardigt. Een retraite die een founder een fundingronde van €500.000 helpt sluiten, een leider een loonsverhoging van €100.000 helpt onderhandelen of een coach een zescijferige praktijk helpt opbouwen kan verdedigbaar geprijsd worden op €15.000 tot €30.000, omdat de koper het vergelijkt met dat resultaat en niet met een hotelrekening. Kleinere groepen ondersteunen dit direct: een retraite met maximaal 4 deelnemers, dagelijkse 1:1 sessies, individueel casuswerk en een vervolg-integratieprogramma loopt op een andere prijs dan dezelfde week met 12 deelnemers in gedeelde coachingtijd. Premium kopers betalen evenveel voor het maximum en de toegang als voor het programma zelf — en een fysieke setting op een hoogwaardige locatie (in plaats van virtueel) ondersteunt meestal een toeslag van 50 tot 100 procent op dezelfde inhoud die op afstand wordt geleverd.',
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
          'Coaching retreats run on different marketing economics than yoga or wellness. Where a yoga retreat might allocate 10 to 20 percent of the budget to paid acquisition, a coaching retreat with an established practice typically spends well under 10 percent on paid channels because the dominant sources of bookings are warm — the existing 1:1 client list, past mastermind alumni, podcast or content audience, professional referrals, and partnership introductions from other coaches. Multiple sources put 86 percent of coaching buyers as relying on referrals or reviews when choosing a program, and only 2 percent on traditional ads. The practical implication is that the marketing budget on a coaching retreat shifts from acquisition spend to relationship infrastructure: a clean CRM, an evergreen email sequence, a referral incentive structure for past clients, and one or two strategic partnerships with adjacent practitioners.',
          'Coaching retraites draaien op andere marketingeconomie dan yoga of wellness. Waar een yoga retraite 10 tot 20 procent van het budget toewijst aan betaalde acquisitie, geeft een coaching retraite met een gevestigde praktijk meestal ruim onder de 10 procent uit aan betaalde kanalen omdat de dominante bronnen van boekingen warm zijn — de bestaande 1:1 klantenlijst, alumni van eerdere masterminds, podcast- of contentpubliek, professionele verwijzingen en partnerintroducties van andere coaches. Verschillende bronnen leggen 86 procent van de coachingkopers op verwijzingen of reviews bij hun keuze, en slechts 2 procent op traditionele advertenties. De praktische implicatie is dat het marketingbudget op een coaching retraite verschuift van acquisitie-uitgaven naar relatie-infrastructuur: een schone CRM, een evergreen e-mailreeks, een referral-incentive voor eerdere klanten en één of twee strategische partnerschappen met aangrenzende behandelaars.',
        ),
        localized(
          'On timing, opening registration 4 to 8 months before the start date is enough for most coaching retreats — shorter than the 6 to 9 months recommended for yoga because coaching audiences are smaller, warmer, and decide faster once they trust the facilitator. The exception is executive and corporate coaching retreats, which need 6 to 12 months because participants coordinate with assistants, employers, and budget cycles. The most reliable channels remain a private invitation to the existing 1:1 client list, an application form opened to the warm audience first and only later to the public, podcast appearances on shows that already reach the target buyer, and a small number of strategic referral partners. Paid ads, when used at all, work best as retargeting to people who have already engaged with the content rather than as cold acquisition.',
          'Qua timing is 4 tot 8 maanden vóór de startdatum genoeg voor de meeste coaching retraites — korter dan de 6 tot 9 maanden die voor yoga worden geadviseerd, omdat coachingdoelgroepen kleiner en warmer zijn en sneller beslissen zodra ze de facilitator vertrouwen. De uitzondering zijn executive en corporate coaching retraites, die 6 tot 12 maanden nodig hebben omdat deelnemers afstemmen met assistenten, werkgevers en budgetcycli. De meest betrouwbare kanalen blijven een privé-uitnodiging aan de bestaande 1:1 klantenlijst, een applicatieformulier dat eerst voor het warme publiek en pas later voor het algemene publiek opengaat, podcastoptredens op shows die de doelgroep al bereiken, en een klein aantal strategische verwijzingspartners. Betaalde advertenties, voor zover ze gebruikt worden, werken het beste als retargeting voor mensen die al contact hebben gehad met de content, niet als koude acquisitie.',
        ),
      ],
    },
  ],
  faq: [
    {
      question: localized(
        'How is coaching retreat pricing different from yoga or wellness retreat pricing?',
        'Hoe verschilt de prijs van een coaching retraite van die van een yoga- of wellnessretraite?',
      ),
      answer: localized(
        'Coaching retreats sit structurally higher and vary much more widely. A mid-range yoga week prices at €1,000 to €1,800 per person and a wellness week at €1,500 to €2,500, while a comparable coaching retreat starts around €2,000 to €4,000 for entry-level life coaching and runs to €15,000 to €30,000 for executive masterminds. The difference is not a tier shift, it is a different pricing logic: yoga and wellness price against accommodation and program cost, coaching retreats price against the value of the transformation and the credentials of the facilitator. Group sizes are also smaller — typically 4 to 8 against 8 to 15 — because concentrated 1:1 attention is the product, not group instruction.',
        'Coaching retraites zitten structureel hoger en variëren veel breder. Een mid-range yoga week kost €1.000 tot €1.800 per persoon en een wellness week €1.500 tot €2.500, terwijl een vergelijkbare coaching retraite start rond €2.000 tot €4.000 voor instap-life-coaching en oploopt tot €15.000 tot €30.000 voor executive masterminds. Het verschil is niet een verschuiving van segment, het is een andere prijslogica: yoga en wellness prijzen tegen accommodatie- en programmakosten, coaching retraites prijzen tegen de waarde van de transformatie en de credentials van de facilitator. Groepsgroottes zijn ook kleiner — meestal 4 tot 8 tegenover 8 tot 15 — omdat geconcentreerde 1:1 aandacht het product is, geen groepsles.',
      ),
    },
    {
      question: localized(
        'What is the right group size for a coaching intensive?',
        'Wat is de juiste groepsgrootte voor een coaching intensive?',
      ),
      answer: localized(
        'Most coaching facilitators settle between 4 and 8 participants for a working retreat. Below 4 the venue and your time become hard to cover unless you are pricing at the very top of the market with a 1:1 or 1:2 ratio; above 8 the 1:1 attention that defines the product starts to dilute. VIP days and intensives often run at 1 to 3 participants and price accordingly (€2,500 to €15,000 per day). Mastermind formats can hold 10 to 20 because the model relies on peer dynamics rather than facilitator attention, but the price per participant is usually lower per night for the same total revenue.',
        'De meeste coaching facilitators komen uit op 4 tot 8 deelnemers voor een werkbare retraite. Onder de 4 worden de locatie en je tijd lastig te dekken tenzij je aan de absolute top van de markt prijst met een 1:1 of 1:2 ratio; boven de 8 begint de 1:1 aandacht die het product definieert te verwateren. VIP-dagen en intensives draaien vaak met 1 tot 3 deelnemers en worden ook zo geprijsd (€2.500 tot €15.000 per dag). Mastermind-formats kunnen 10 tot 20 deelnemers aan, omdat het model leunt op peer-dynamiek in plaats van op facilitator-aandacht, maar de prijs per deelnemer ligt meestal lager per nacht voor dezelfde totale omzet.',
      ),
    },
    {
      question: localized(
        'Should I price the retreat or the transformation?',
        'Moet ik de retraite of de transformatie prijzen?',
      ),
      answer: localized(
        'Price the transformation. A coaching retreat that helps a founder close funding, a leader negotiate a promotion, or a coach build a six-figure practice should be priced against that outcome — not against what a comparable hotel and meal package would cost. The math test is simple: if the program reliably delivers an outcome worth ten times the price, the price is defensible at almost any level the buyer can afford. If the program does not have that ratio, the issue is the offer, not the price. The structural pitfall is anchoring the price to accommodation cost, because that pulls coaching retreats down into yoga retreat pricing where they cannot pay for the facilitator time and credentials they actually require.',
        'Prijs de transformatie. Een coaching retraite die een founder helpt funding rond te krijgen, een leider helpt een promotie te onderhandelen of een coach helpt een zescijferige praktijk op te bouwen moet worden geprijsd tegen dat resultaat — niet tegen wat een vergelijkbaar hotel- en maaltijdpakket zou kosten. De wiskundige toets is simpel: als het programma betrouwbaar een resultaat oplevert dat tien keer de prijs waard is, is de prijs verdedigbaar op vrijwel elk niveau dat de koper kan opbrengen. Heeft het programma die verhouding niet, dan ligt het probleem bij het aanbod, niet bij de prijs. De structurele valkuil is de prijs aan accommodatiekosten verankeren, want dat trekt coaching retraites de yoga-prijsklasse in waar ze de facilitatortijd en credentials die ze werkelijk vereisen niet kunnen betalen.',
      ),
    },
    {
      question: localized(
        'How do I price executive coaching retreats versus general life coaching?',
        'Hoe prijs ik executive coaching retraites versus algemene life coaching?',
      ),
      answer: localized(
        'Executive coaching retreats price at three to ten times general life coaching for the same number of nights, because the buyer profile, decision context, and outcome are different. A general life coaching weekend in Europe with 6 to 10 participants typically prices at €2,000 to €4,000 per person; a comparable executive coaching retreat with 4 to 6 senior leaders prices at €8,000 to €25,000 per person, often paid by the company rather than the individual. The drivers are credentials (ICF PCC or MCC, EMCC, formal leadership-coaching authorisation), the seniority of the participants, the corporate budget cycle (executive coaching is regularly invoiced through procurement), and the outcome being purchased — strategic clarity, succession decisions, or board-level performance, not personal development.',
        'Executive coaching retraites zitten drie tot tien keer hoger geprijsd dan algemene life coaching voor hetzelfde aantal nachten, omdat het koperprofiel, de beslissingscontext en het resultaat anders zijn. Een algemeen life coaching weekend in Europa met 6 tot 10 deelnemers kost meestal €2.000 tot €4.000 per persoon; een vergelijkbare executive coaching retraite met 4 tot 6 senior leaders kost €8.000 tot €25.000 per persoon, vaak betaald door het bedrijf in plaats van het individu. De drijvers zijn credentials (ICF PCC of MCC, EMCC, formele bevoegdheid in leadership coaching), de seniority van de deelnemers, de bedrijfsbudgetcyclus (executive coaching wordt regelmatig via inkoop gefactureerd) en het resultaat dat wordt gekocht — strategische helderheid, opvolgingsbesluiten of bestuursprestaties, geen persoonlijke ontwikkeling.',
      ),
    },
    {
      question: localized(
        'Is it OK to require an application before allowing booking?',
        'Mag ik een applicatie verplicht stellen voordat iemand kan boeken?',
      ),
      answer: localized(
        'For high-ticket coaching retreats, an application is the standard rather than the exception. Above roughly €3,000 per participant, most operators require an application form, a short call, or a refundable deposit (€100 to €300) to apply, and only confirm a place after a fit conversation. The reason is operational and protective: small-group coaching retreats fail when the wrong person is in the room, because the cohort is the product as much as the facilitator. Screening also signals quality to the buyer — a program someone has to qualify for reads as more selective than one they can swipe a card to join, and that perception supports the price. The application should be short (under 10 minutes), specific to the cohort you are building, and answered within 48 hours either way.',
        'Voor high-ticket coaching retraites is een applicatie de standaard in plaats van de uitzondering. Boven ongeveer €3.000 per deelnemer vragen de meeste operators een applicatieformulier, een kort gesprek of een terugbetaalbare aanbetaling (€100 tot €300) om te kunnen solliciteren, en bevestigen ze pas een plek na een fit-gesprek. De reden is operationeel en beschermend: small-group coaching retraites mislukken als de verkeerde persoon in de ruimte zit, want het cohort is even goed het product als de facilitator. Screenen signaleert ook kwaliteit aan de koper — een programma waarvoor iemand zich moet kwalificeren leest selectiever dan een programma waar je je met een betaalkaart bij aansluit, en die perceptie ondersteunt de prijs. De applicatie moet kort zijn (onder de 10 minuten), specifiek voor het cohort dat je bouwt, en binnen 48 uur op beide manieren beantwoord.',
      ),
    },
    {
      question: localized(
        'How do I handle 1:1 time inside a group retreat?',
        'Hoe ga ik om met 1:1 tijd binnen een groepsretraite?',
      ),
      answer: localized(
        'Decide upfront how many 1:1 hours each participant gets, schedule them on the program, and price them at something close to your private hourly rate. A working pattern is two to four 1:1 sessions per participant across a 4-night retreat — for 6 participants that is 12 to 24 sessions, which is realistic for a single coach without burning out, and gives the participant the concentrated attention that justifies the retreat price over a virtual program. If you offer more than 4 hours of 1:1 per participant, scale the price accordingly or bring in a co-coach. The mistake to avoid is unlimited 1:1 access on a small group: it is uncapped delivery for capped revenue, and at full capacity it is physically undeliverable.',
        'Bepaal vooraf hoeveel 1:1 uren elke deelnemer krijgt, plan ze in het programma, en prijs ze tegen iets in de buurt van je private uurtarief. Een werkbaar patroon is twee tot vier 1:1 sessies per deelnemer over een 4-nachten retraite — bij 6 deelnemers is dat 12 tot 24 sessies, wat haalbaar is voor één coach zonder uitgeput te raken, en geeft de deelnemer de geconcentreerde aandacht die de prijs van de retraite ten opzichte van een virtueel programma rechtvaardigt. Bied je meer dan 4 uur 1:1 per deelnemer, schaal dan de prijs mee of haal een co-coach erbij. De fout die je moet vermijden is onbeperkte 1:1 toegang op een kleine groep: het is ongelimiteerde levering bij begrensde omzet, en op volle bezetting is het fysiek niet te leveren.',
      ),
    },
    {
      question: localized(
        'What is the standard deposit for a high-ticket coaching retreat?',
        'Wat is de standaard aanbetaling voor een high-ticket coaching retraite?',
      ),
      answer: localized(
        'A 25 to 50 percent non-refundable deposit at booking is the prevailing pattern on high-ticket coaching retreats, with the balance due 30 to 60 days before the start date. The percentage runs higher than the 20 to 30 percent typical for yoga because total prices are higher in absolute terms, the participant pool is smaller (one cancellation has a larger impact), and the deposit functions as a commitment device for transformation work, not just a venue protection. A retreat priced at €8,000 with a €2,500 to €4,000 deposit screens for participants who are serious about the work; a €500 deposit on the same retreat does not. Pair the deposit with an application step and a clear refund timeline in writing.',
        'Een niet-restitueerbare aanbetaling van 25 tot 50 procent bij boeking is het gangbare patroon op high-ticket coaching retraites, met de rest betaalbaar 30 tot 60 dagen voor aanvang. Het percentage ligt hoger dan de 20 tot 30 procent die typisch is voor yoga, omdat de totale prijzen in absolute zin hoger liggen, de deelnemerspool kleiner is (één annulering heeft meer impact) en de aanbetaling functioneert als commitment-instrument voor transformatiewerk, niet alleen als bescherming van de locatie. Een retraite met een prijs van €8.000 met een aanbetaling van €2.500 tot €4.000 selecteert op deelnemers die het werk serieus nemen; een aanbetaling van €500 op dezelfde retraite doet dat niet. Koppel de aanbetaling aan een applicatiestap en een schriftelijk vastgelegde restitutietermijn.',
      ),
    },
    {
      question: localized(
        'What profit margin should I aim for on a coaching retreat?',
        'Welke winstmarge moet ik aanhouden op een coaching retraite?',
      ),
      answer: localized(
        'A 40 to 60 percent net margin is realistic for a well-priced coaching retreat — higher than the 25 to 40 percent typical for yoga or wellness because the cost stack is structurally lighter (no per-participant treatments, smaller group, lower food and venue share of revenue) and the facilitator fee does double duty as your own compensation. Margins below 30 percent on a high-ticket coaching retreat usually signal that the retreat is under-priced for the 1:1 time and prep work being delivered, not that costs are too high. The buffer matters because cohorts of 4 to 8 are sensitive to a single cancellation, and a healthy margin is what keeps a no-show from turning the retreat into a loss.',
        'Een nettomarge van 40 tot 60 procent is realistisch voor een goed geprijsde coaching retraite — hoger dan de 25 tot 40 procent die typisch is voor yoga of wellness, omdat de kostenopbouw structureel lichter is (geen behandelingen per deelnemer, kleinere groep, lager aandeel eten en locatie in de omzet) en de facilitator fee dubbel werk doet als je eigen vergoeding. Marges onder de 30 procent op een high-ticket coaching retraite signaleren meestal dat de retraite te laag geprijsd is voor de 1:1 tijd en voorbereiding die geleverd wordt, niet dat de kosten te hoog zijn. De buffer is belangrijk omdat cohorten van 4 tot 8 gevoelig zijn voor één annulering, en een gezonde marge is wat een no-show ervan weerhoudt de retraite een verlies te maken.',
      ),
    },
    {
      question: localized(
        'How do I handle cancellations on a small-group coaching retreat?',
        'Hoe ga ik om met annuleringen op een coaching retraite met een kleine groep?',
      ),
      answer: localized(
        'Publish a tighter policy than the yoga or wellness norm, because the impact of a cancellation is bigger when the cohort is 6 instead of 15. A workable shape is: deposit non-refundable from booking, full refund minus deposit if cancelled more than 90 days out, 50 percent refund inside 60 days, no refund inside 30 days. For corporate-paid executive coaching retreats, the 30-day window is often non-refundable end-to-end because budget commitments and procurement cycles cannot be unwound late. Pair the policy with a transfer clause — allowing a participant to nominate a replacement who passes the application — which preserves goodwill and keeps the cohort intact when life genuinely intervenes.',
        'Publiceer een strakker beleid dan de yoga- of wellnessnorm, omdat de impact van een annulering groter is wanneer het cohort 6 in plaats van 15 deelnemers heeft. Een werkbare opzet is: aanbetaling niet-restitueerbaar vanaf boeking, volledige terugbetaling minus aanbetaling bij annulering meer dan 90 dagen voor aanvang, 50 procent terugbetaling binnen 60 dagen, geen terugbetaling binnen 30 dagen. Voor door bedrijven betaalde executive coaching retraites is het venster van 30 dagen vaak end-to-end niet-restitueerbaar omdat budgetverplichtingen en inkoopcycli niet meer terug te draaien zijn. Koppel het beleid aan een overdraagbaarheidsclausule — waarmee een deelnemer een vervanger kan aandragen die de applicatie doorloopt — wat goodwill bewaart en het cohort intact houdt als er werkelijk iets onverwachts gebeurt.',
      ),
    },
    {
      question: localized(
        'How early should I open registration for a coaching retreat?',
        'Hoe vroeg moet ik de inschrijving openen voor een coaching retraite?',
      ),
      answer: localized(
        'For most coaching retreats, opening 4 to 8 months before the start date is enough — shorter than the 6 to 9 months recommended for yoga because coaching audiences are warmer and decide faster once they trust the facilitator. Open privately to your existing 1:1 client list and past participants first, give them 2 to 4 weeks of priority access, and only then open to the broader audience. Executive and corporate coaching retreats need a longer runway of 6 to 12 months because participants coordinate with assistants, employers, and budget cycles, and procurement-paid programs sometimes require approval cycles that take a quarter on their own.',
        'Voor de meeste coaching retraites is 4 tot 8 maanden vóór de startdatum genoeg — korter dan de 6 tot 9 maanden die voor yoga worden geadviseerd, omdat coachingdoelgroepen warmer zijn en sneller beslissen zodra ze de facilitator vertrouwen. Open eerst privé voor je bestaande 1:1 klantenlijst en eerdere deelnemers, geef ze 2 tot 4 weken voorrang, en open pas daarna voor het bredere publiek. Executive- en corporate coaching retraites hebben een langere aanloop van 6 tot 12 maanden nodig omdat deelnemers afstemmen met assistenten, werkgevers en budgetcycli, en programma’s die door de inkoopafdeling worden betaald soms goedkeuringscycli kennen die op zichzelf al een kwartaal duren.',
      ),
    },
  ],
}

const GENERIC_CONTENT: CalculatorVariantContent = {
  howToSteps: [
    localized(
      'Set the group size and number of nights for your retreat — most working formats sit between 8 and 16 guests over 3 to 7 nights, depending on retreat type.',
      'Stel de groepsgrootte en het aantal nachten van je retraite in — de meeste werkbare formats zitten tussen 8 en 16 gasten over 3 tot 7 nachten, afhankelijk van het retraitetype.',
    ),
    localized(
      'Set the price per guest using the benchmark range, then sanity-check it against comparable European retreats in the same niche.',
      'Stel de prijs per gast in met de benchmarkrange als richtlijn en toets hem aan vergelijkbare Europese retraites in dezelfde niche.',
    ),
    localized(
      'Enter every cost line you have on paper — venue, food, your own facilitator fee, any co-facilitators, marketing, travel, and insurance.',
      'Vul elke kostenpost in die je op papier hebt — locatie, eten, je eigen facilitator fee, eventuele co-facilitators, marketing, reizen en verzekering.',
    ),
    localized(
      'Read the live summary on the right for profit, margin, breakeven occupancy, and profit per planning day, and stress-test the numbers at 60 to 70 percent occupancy before committing.',
      'Lees rechts de live samenvatting voor winst, marge, break-even bezetting en winst per planningsdag, en test de getallen op 60 tot 70 procent bezetting voordat je je vastlegt.',
    ),
  ],
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

export const CALCULATOR_CONTENT: CalculatorContentMap = {
  [ToolVariant.GENERIC]: GENERIC_CONTENT,
  [ToolVariant.YOGA]: YOGA_CONTENT,
  [ToolVariant.WELLNESS]: WELLNESS_CONTENT,
  [ToolVariant.MEDITATION]: MEDITATION_CONTENT,
  [ToolVariant.COACHING]: COACHING_CONTENT,
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

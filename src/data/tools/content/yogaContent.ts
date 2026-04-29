import type { CalculatorVariantContent } from '@/types/tools'

import { localized } from './helpers'

export const YOGA_CONTENT: CalculatorVariantContent = {
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
          'Een hogere prijs is verdedigbaar als er iets concreets is dat het rechtvaardigt. Een duidelijk afgebakende niche — traumagevoelige yoga, yoga voor hardlopers, een specifieke lineage, een container alleen voor vrouwen of alleen voor mannen — maakt de doelgroep kleiner maar zorgt dat de mensen erbinnen voelen dat de retraite voor hen gebouwd is. Zo\'n match ondersteunt meestal een prijstoeslag van 20 tot 30 procent ten opzichte van een generieke retraite op dezelfde locatie. Reputatie van de docent doet vergelijkbaar werk: een bestaand publiek, publicaties of jaren ervaring met opleidingen geven mensen een reden om boven marktprijs te betalen in plaats van de goedkopere buurman te kiezen.',
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
          'Een bruikbare vuistregel is ongeveer 10 tot 20 procent van het totale retraitebudget reserveren voor marketing — betaalde advertenties, vormgeving, fotografie, landingspagina\'s, platformkosten en eventuele affiliate- of referraluitgaven. Eerste retraites zitten vaak aan de bovenkant van die range omdat er nog geen lijst eerdere deelnemers is; gevestigde facilitators met een warme mailinglijst geven soms minder uit omdat hun belangrijkste kanaal eigen bezit is en niet ingekocht.',
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
        'Reken op ruwweg 10 tot 20 procent van het totale retraitebudget. Eerste retraites zitten meestal aan de bovenkant omdat er nog geen lijst eerdere deelnemers is, en het grootste deel gaat naar landingspagina\'s, vormgeving, betaalde social media en platform- of referralkosten. Gevestigde facilitators met een warme mailinglijst en terugkerende gasten kunnen marketing vaak onder de 10 procent houden omdat hun best converterende kanaal iets is dat ze zelf al bezitten.',
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
        'A single supplement should reflect the actual cost of holding a room that could otherwise sleep two paying guests. The simplest method: take the price for a guest in a shared room, double it, subtract the second guest\'s variable costs (food, transfer, fees), and use the result as the single rate. This protects your margin without making the single feel arbitrarily punished.',
        'Een single-toeslag moet de werkelijke kosten weerspiegelen van een kamer die anders twee betalende gasten kan herbergen. De simpelste methode: neem de prijs voor een gast in een gedeelde kamer, verdubbel die, trek de variabele kosten van de tweede gast eraf (eten, transfer, fees), en gebruik dat als de single-prijs. Zo bescherm je je marge zonder dat de single-prijs willekeurig hoog voelt.',
      ),
    },
  ],
}

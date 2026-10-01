import { AccommodationCabin, BookingPlatform, Language, type CabinReview } from '@/types'

/**
 * Guest reviews from the cabins' Natuurhuisje listings. The Dutch text is the
 * guest's own; the English and German versions are our translations and the
 * page labels them as such.
 */
export const CABIN_REVIEWS: readonly CabinReview[] = [
  {
    id: 'cosmos-anouk-2026-09',
    cabin: AccommodationCabin.COSMOS,
    author: 'Anouk',
    date: '2026-09-22',
    score: 9,
    outOf: 10,
    platform: BookingPlatform.NATUURHUISJE,
    sourceLanguage: Language.NL,
    text: {
      [Language.NL]:
        'Ik heb in de nazomer een paar heerlijke dagen gehad in het huisje. Hoewel het op een erf zit voelt het toch privé, met een fijn uitzicht. Er zijn diverse leuke zitplekken, ook buiten op de veranda. De binnen- en buitenhaard was een bonus. De keuken is goed uitgerust, inclusief veel pannen en een grote oven. Het bed ligt lekker en mooie verlichting en vele kaarsjes zorgen voor een gezellige sfeer in de avond. Echt een aanrader!',
      [Language.EN]:
        'I spent a few wonderful days in the cabin in late summer. Although it sits on a shared yard, it still feels private, with a lovely view. There are plenty of nice places to sit, including outside on the veranda. The indoor and outdoor fireplace was a bonus. The kitchen is well equipped, with lots of pans and a large oven. The bed is comfortable, and beautiful lighting and lots of candles create a cosy atmosphere in the evening. Highly recommended!',
      [Language.DE]:
        'Ich habe im Spätsommer ein paar herrliche Tage in der Hütte verbracht. Obwohl sie auf einem gemeinsamen Hof steht, fühlt sie sich privat an, mit einer schönen Aussicht. Es gibt viele gemütliche Sitzplätze, auch draußen auf der Veranda. Der Kamin drinnen und draußen war ein Bonus. Die Küche ist gut ausgestattet, mit vielen Töpfen und einem großen Backofen. Das Bett ist bequem, und schönes Licht und viele Kerzen sorgen abends für eine gemütliche Atmosphäre. Absolut empfehlenswert!',
    },
  },
  {
    id: 'cosmos-berit-2026-09',
    cabin: AccommodationCabin.COSMOS,
    author: 'Berit',
    date: '2026-09-03',
    score: 10,
    outOf: 10,
    platform: BookingPlatform.NATUURHUISJE,
    sourceLanguage: Language.NL,
    text: {
      [Language.NL]:
        'Echt een dikke 10! We hadden graag nog langer willen blijven. Het huisje heeft alles wat je nodig hebt: een heerlijk bed, een goede douche en een keuken waar je goed in kan koken. Daarbij komt het mooie stuk land waar het huis zich op bevindt. Je kan er door het groen struinen, de hottub in en op je veranda genieten van alle rust. Daar komt nog bij dat Noud en Nana super lieve hosts waren. Ze waren altijd bereikbaar en gaven ons een welkom gevoel.',
      [Language.EN]:
        'A solid 10! We would have loved to stay longer. The cabin has everything you need: a lovely bed, a good shower and a kitchen you can really cook in. Then there is the beautiful piece of land the cabin stands on. You can wander through the greenery, get into the hot tub and enjoy all the peace on your veranda. On top of that, Noud and Nana were wonderfully kind hosts. They were always reachable and made us feel welcome.',
      [Language.DE]:
        'Eine glatte 10! Wir wären gern noch länger geblieben. Die Hütte hat alles, was man braucht: ein herrliches Bett, eine gute Dusche und eine Küche, in der man richtig kochen kann. Dazu kommt das schöne Stück Land, auf dem die Hütte steht. Man kann durchs Grüne streifen, in den Hot Tub steigen und auf der Veranda die Ruhe genießen. Außerdem waren Noud und Nana super liebe Gastgeber. Sie waren immer erreichbar und gaben uns das Gefühl, willkommen zu sein.',
    },
  },
  {
    id: 'horizon-nausikaa-2026-07',
    cabin: AccommodationCabin.HORIZON,
    author: 'Nausikaä',
    date: '2026-07-19',
    score: 10,
    outOf: 10,
    platform: BookingPlatform.NATUURHUISJE,
    sourceLanguage: Language.NL,
    text: {
      [Language.NL]:
        'Wij verbleven 3 nachten op de zolder die met veel smaak ingericht was. Zeer nette ruimte waar we helemaal niets tekort kwamen. Een aanrader! Heel erg genoten van de stilte en de prachtige omgeving.',
      [Language.EN]:
        'We stayed three nights in the attic loft, which is furnished with great taste. A very tidy space where we lacked absolutely nothing. Highly recommended! We really enjoyed the silence and the beautiful surroundings.',
      [Language.DE]:
        'Wir haben drei Nächte im Dachloft verbracht, das mit viel Geschmack eingerichtet ist. Ein sehr gepflegter Raum, in dem uns absolut nichts gefehlt hat. Sehr zu empfehlen! Die Stille und die wunderschöne Umgebung haben wir sehr genossen.',
    },
  },
  {
    id: 'horizon-kamiel-2026-05',
    cabin: AccommodationCabin.HORIZON,
    author: 'Kamièl',
    date: '2026-05-22',
    score: 10,
    outOf: 10,
    platform: BookingPlatform.NATUURHUISJE,
    sourceLanguage: Language.NL,
    text: {
      [Language.NL]:
        'Zeer genoten van de puurheid. Een plek waar nog ruimte is voor de natuur. We verbleven 3 nachten op de zolder, die met liefde was ingericht en zeer compleet is. Prachtig weer, zodat we ook konden genieten van de zwemvijver met aangelegd strandje. Idyllische plek als je van puur en natuur houdt.',
      [Language.EN]:
        'We really enjoyed how unspoilt it is — a place where there is still room for nature. We stayed three nights in the attic loft, which is lovingly furnished and very complete. The weather was beautiful, so we could also enjoy the swimming pond with its little beach. An idyllic place if you love things pure and natural.',
      [Language.DE]:
        'Wir haben die Ursprünglichkeit sehr genossen — ein Ort, an dem die Natur noch Raum hat. Wir haben drei Nächte im Dachloft verbracht, das liebevoll und sehr vollständig eingerichtet ist. Bei herrlichem Wetter konnten wir auch den Schwimmteich mit dem kleinen Strand genießen. Ein idyllischer Ort, wenn man es pur und natürlich mag.',
    },
  },
]

export function getCabinReviews(cabin: AccommodationCabin): CabinReview[] {
  return CABIN_REVIEWS.filter((review) => review.cabin === cabin)
}

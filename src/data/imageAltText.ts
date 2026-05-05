import { Language } from '@/types'

/**
 * Centralized mapping of image keys to multilingual alt text.
 * Keys are either file paths (e.g., '/images/sauna.jpg') or logical identifiers
 * (e.g., 'chef.liesbeth-van-der-velden.avatar') — chef images use logical keys
 * so file paths can evolve (jpg→webp/avif) without breaking the registry.
 * Each entry contains alt text for each supported language.
 */
export const IMAGE_ALT_TEXT: Record<string, Record<Language, string>> = {
  // Hero images
  '/images/chefs/chefs-hero.png': {
    [Language.EN]: 'Hands plating a retreat dish — chef directory hero',
    [Language.NL]: 'Handen leggen een retraitegerecht op — chef-gids hero',
    [Language.DE]: 'Hände richten ein Retreat-Gericht an — Hero-Bild der Köcheübersicht',
  },
  '/images/field-walking-women.jpg': {
    [Language.EN]: 'Retreat guests walking through the fields around The Makers Barn',
    [Language.NL]: 'Retreat gasten wandelend door de velden rondom The Makers Barn',
    [Language.DE]: 'Retreat-Gäste, die durch die Felder rund um The Makers Barn spazieren',
  },
  '/images/sauna.jpg': {
    [Language.EN]: 'Outdoor sauna at The Makers Barn',
    [Language.NL]: 'Buitensauna bij The Makers Barn',
    [Language.DE]: 'Außensauna bei The Makers Barn',
  },
  '/images/arial-overview.JPG': {
    [Language.EN]: 'Aerial overview of The Makers Barn and surrounding countryside',
    [Language.NL]: 'Luchtoverzicht van The Makers Barn en omringend platteland',
    [Language.DE]: 'Luftaufnahme von The Makers Barn und der umliegenden Landschaft',
  },
  '/images/arial-view.jpg': {
    [Language.EN]: 'Aerial view of The Makers Barn and surrounding countryside',
    [Language.NL]: 'Luchtfoto van The Makers Barn en omringend platteland',
    [Language.DE]: 'Luftbild von The Makers Barn und der umliegenden Landschaft',
  },
  '/images/man-in-hammock-looking-on-field.jpg': {
    [Language.EN]: 'Person relaxing in a hammock looking out over the field at The Makers Barn',
    [Language.NL]: 'Persoon ontspant in een hangmat met uitzicht over het veld bij The Makers Barn',
    [Language.DE]: 'Person entspannt in einer Hängematte mit Blick über das Feld bei The Makers Barn',
  },
  '/images/hot-tub-in-field.jpeg': {
    [Language.EN]: 'Hot tub in the field at The Makers Barn',
    [Language.NL]: 'Bubbelbad in het veld bij The Makers Barn',
    [Language.DE]: 'Whirlpool auf der Wiese bei The Makers Barn',
  },
  '/images/outside-shower-in-field.jpg': {
    [Language.EN]: 'Outside shower in the field at The Makers Barn',
    [Language.NL]: 'Buitendouche in het veld bij The Makers Barn',
    [Language.DE]: 'Außendusche auf der Wiese bei The Makers Barn',
  },
  '/images/fire-circle-wood-logs.jpg': {
    [Language.EN]: 'Fire circle with wood logs at The Makers Barn',
    [Language.NL]: 'Vuurplaats met houtblokken bij The Makers Barn',
    [Language.DE]: 'Feuerstelle mit Holzscheiten bei The Makers Barn',
  },
  '/images/fire-circle-gathering.jpg': {
    [Language.EN]: 'Gathering around the fire circle at The Makers Barn',
    [Language.NL]: 'Samenkomen rond de vuurplaats bij The Makers Barn',
    [Language.DE]: 'Zusammenkommen rund um die Feuerstelle bei The Makers Barn',
  },
  '/images/playing-music-around-the-fire-pit.jpg': {
    [Language.EN]: 'Playing music around the fire pit at The Makers Barn',
    [Language.NL]: 'Muziek maken rond de vuurplaats bij The Makers Barn',
    [Language.DE]: 'Musizieren rund um die Feuerstelle bei The Makers Barn',
  },

  // Facilities images
  '/images/hay-house-against-sun.jpg': {
    [Language.EN]: 'Hay House glowing in the evening sun',
    [Language.NL]: 'Hooihuis gloeiend in de avondzon',
    [Language.DE]: 'Hay House, das in der Abendsonne leuchtet',
  },
  '/images/hay-house-bench-sunset.jpg': {
    [Language.EN]: 'Hay House bench at sunset',
    [Language.NL]: 'Hooihuis bank bij zonsondergang',
    [Language.DE]: 'Bank am Hay House bei Sonnenuntergang',
  },
  '/images/practice-rooms-with-mats.jpg': {
    [Language.EN]: 'Practice rooms with mats in the Hay House',
    [Language.NL]: 'Oefenruimtes met matten in het Hooihuis',
    [Language.DE]: 'Übungsräume mit Matten im Hay House',
  },
  '/images/main-house.jpg': {
    [Language.EN]: 'The Makers Barn main house in the landscape',
    [Language.NL]: 'Het hoofdgebouw van The Makers Barn in het landschap',
    [Language.DE]: 'Das Haupthaus von The Makers Barn in der Landschaft',
  },
  '/images/attic-beds.jpg': {
    [Language.EN]: 'Attic bedroom with comfy beds',
    [Language.NL]: 'Zolderslaapkamer met comfortabele bedden',
    [Language.DE]: 'Dachschlafzimmer mit gemütlichen Betten',
  },
  '/images/attic-chill.jpg': {
    [Language.EN]: 'Cozy attic space for relaxing',
    [Language.NL]: 'Gezellige zolderruimte om te ontspannen',
    [Language.DE]: 'Gemütlicher Dachraum zum Entspannen',
  },
  '/images/cosmos-outside-wooden-cabin.jpeg': {
    [Language.EN]: 'Outside view of the Cosmos wooden cabin',
    [Language.NL]: 'Buitenaanzicht van de Cosmos houten cabin',
    [Language.DE]: 'Außenansicht der Holzhütte Cosmos',
  },
  '/images/cosmos-view-living-room.jpg': {
    [Language.EN]: 'View from the Cosmos living room',
    [Language.NL]: 'Uitzicht vanuit de Cosmos woonkamer',
    [Language.DE]: 'Blick aus dem Wohnzimmer von Cosmos',
  },
  '/images/cosmos-luxury-couch.jpg': {
    [Language.EN]: 'Cosy couch in the Cosmos space',
    [Language.NL]: 'Gezellige bank in de Cosmos ruimte',
    [Language.DE]: 'Gemütliches Sofa im Cosmos-Raum',
  },
  '/images/cosmos-kitchen.jpg': {
    [Language.EN]: 'Kitchen in the Cosmos wooden cabin with wood stove',
    [Language.NL]: 'Keuken in de Cosmos houten cabin met houtkachel',
    [Language.DE]: 'Küche in der Holzhütte Cosmos mit Holzofen',
  },
  '/images/double-ensuite.jpg': {
    [Language.EN]: 'Double ensuite bedroom',
    [Language.NL]: 'Tweepersoons slaapkamer met eigen badkamer',
    [Language.DE]: 'Doppelzimmer mit eigenem Bad',
  },
  '/images/teahous-with-chair.jpg': {
    [Language.EN]: 'Teahouse with a chair and window',
    [Language.NL]: 'Theehuis met stoel en raam',
    [Language.DE]: 'Teehaus mit Stuhl und Fenster',
  },
  '/images/ducks.jpg': {
    [Language.EN]: 'Ducks swimming in the natural pond at The Makers Barn',
    [Language.NL]: 'Eenden zwemmend in de natuurlijke vijver bij The Makers Barn',
    [Language.DE]: 'Enten schwimmen im natürlichen Teich bei The Makers Barn',
  },
  '/images/pond-complete.jpg': {
    [Language.EN]: 'Complete view of the swimming pond at The Makers Barn',
    [Language.NL]: 'Volledig overzicht van de zwemvijver bij The Makers Barn',
    [Language.DE]: 'Vollständige Ansicht des Schwimmteichs bei The Makers Barn',
  },
  '/images/yoga-pond-jetty-reflection.jpg': {
    [Language.EN]: 'Yoga session at the pond jetty with reflection',
    [Language.NL]: 'Yogasessie bij de vijversteiger met reflectie',
    [Language.DE]: 'Yoga-Session am Steg des Teichs mit Spiegelung',
  },
  '/images/pond-coaching-session.jpg': {
    [Language.EN]: 'Coaching session by the pond at The Makers Barn',
    [Language.NL]: 'Coachingsessie bij de vijver van The Makers Barn',
    [Language.DE]: 'Coaching-Session am Teich bei The Makers Barn',
  },
  '/images/woman-in-pond.jpg': {
    [Language.EN]: 'Woman swimming in the natural pond at The Makers Barn',
    [Language.NL]: 'Vrouw zwemmend in de natuurlijke vijver bij The Makers Barn',
    [Language.DE]: 'Frau schwimmt im natürlichen Teich bei The Makers Barn',
  },
  '/images/outside-walk.jpg': {
    [Language.EN]: 'Peaceful walk through the grounds of The Makers Barn',
    [Language.NL]: 'Rustige wandeling over het terrein van The Makers Barn',
    [Language.DE]: 'Ruhiger Spaziergang über das Gelände von The Makers Barn',
  },
  '/images/outside-guitar-circle.jpg': {
    [Language.EN]: 'Outdoor guitar circle gathering at The Makers Barn',
    [Language.NL]: 'Buitenbijeenkomst met gitaarcirkel bij The Makers Barn',
    [Language.DE]: 'Gitarrenkreis im Freien bei The Makers Barn',
  },
  '/images/you-are-where-you-need-to-be.jpg': {
    [Language.EN]: 'Inspirational quote: You are where you need to be',
    [Language.NL]: 'Inspirerend citaat: Je bent waar je moet zijn',
    [Language.DE]: 'Inspirierendes Zitat: Du bist, wo du sein sollst',
  },
  '/images/two-beds-in-horizon.jpg': {
    [Language.EN]: 'Two beds in the Horizon facilities space',
    [Language.NL]: 'Twee bedden in de Horizon faciliteiten',
    [Language.DE]: 'Zwei Betten in den Räumen von Horizon',
  },
  '/images/single-bed-with-wood.jpg': {
    [Language.EN]: 'Single bed with wooden details in Horizon facilities',
    [Language.NL]: 'Eenpersoonsbed met houten details in Horizon faciliteiten',
    [Language.DE]: 'Einzelbett mit Holzdetails in den Räumen von Horizon',
  },
  '/images/horizon-kitchen.jpg': {
    [Language.EN]: 'Kitchen on the second floor of the Horizon facility',
    [Language.NL]: 'Keuken op de tweede verdieping van de Horizon faciliteit',
    [Language.DE]: 'Küche im zweiten Stock der Räume von Horizon',
  },
  '/images/horizon-shower.jpg': {
    [Language.EN]: 'Shower facilities in the Horizon accommodation',
    [Language.NL]: 'Douchefaciliteiten in de Horizon accommodatie',
    [Language.DE]: 'Duschräume in der Unterkunft Horizon',
  },

  // Team images
  '/images/nana-stairs.jpg': {
    [Language.EN]: 'Nana',
    [Language.NL]: 'Nana',
    [Language.DE]: 'Nana',
  },
  '/images/benny-smile.jpg': {
    [Language.EN]: 'Benny',
    [Language.NL]: 'Benny',
    [Language.DE]: 'Benny',
  },
  '/images/noud-banjo.jpg': {
    [Language.EN]: 'Noud',
    [Language.NL]: 'Noud',
    [Language.DE]: 'Noud',
  },

  // Location / Surroundings images
  '/images/Kasteel_Het_Nijenhuis.jpg': {
    [Language.EN]: 'Kasteel Het Nijenhuis - historic castle with sculpture garden near The Makers Barn',
    [Language.NL]: 'Kasteel Het Nijenhuis - historisch kasteel met beeldentuin nabij The Makers Barn',
    [Language.DE]: 'Kasteel Het Nijenhuis - historisches Schloss mit Skulpturengarten in der Nähe von The Makers Barn',
  },
  '/images/Havezate Den Alerdinck.webp': {
    [Language.EN]: 'Havezate Den Alerdinck - historic manor house in the surrounding area',
    [Language.NL]: 'Havezate Den Alerdinck - historisch landhuis in de omgeving',
    [Language.DE]: 'Havezate Den Alerdinck - historisches Herrenhaus in der Umgebung',
  },
  '/images/Havezate Den Alerdinck tress.png': {
    [Language.EN]: 'Tree-lined avenue at Havezate Den Alerdinck estate',
    [Language.NL]: 'Bomenlaan bij landgoed Havezate Den Alerdinck',
    [Language.DE]: 'Baumallee am Anwesen Havezate Den Alerdinck',
  },

  // Logo
  '/tmb-logo.webp': {
    [Language.EN]: 'Makers Barn Logo',
    [Language.NL]: 'Makers Barn Logo',
    [Language.DE]: 'Makers Barn Logo',
  },

  // Chef: Liesbeth van der Velden
  'chef.liesbeth-van-der-velden.avatar': {
    [Language.EN]: 'Portrait of chef Liesbeth van der Velden',
    [Language.NL]: 'Portret van chef Liesbeth van der Velden',
    [Language.DE]: 'Porträt von Chefköchin Liesbeth van der Velden',
  },
  'chef.liesbeth-van-der-velden.hero': {
    [Language.EN]: 'Plated dish on a long table set for a retreat dinner',
    [Language.NL]: 'Bord met gerecht op een lange retraite-tafel',
    [Language.DE]: 'Angerichteter Teller auf einer langen Retreat-Tafel',
  },
  'chef.liesbeth-van-der-velden.gallery-1': {
    [Language.EN]: 'Family-style spread with multiple shared dishes',
    [Language.NL]: 'Family-style maaltijd met meerdere gedeelde gerechten',
    [Language.DE]: 'Family-Style-Tafel mit mehreren geteilten Gerichten',
  },
  'chef.liesbeth-van-der-velden.gallery-2': {
    [Language.EN]: 'Plated breakfast bowl with vegetables and herbs',
    [Language.NL]: 'Ontbijtbord met groenten en kruiden',
    [Language.DE]: 'Frühstücksschale mit Gemüse und Kräutern',
  },
  'chef.liesbeth-van-der-velden.gallery-3': {
    [Language.EN]: 'Recipe card on a wooden surface with limes and herbs',
    [Language.NL]: 'Receptkaart op een houten oppervlak met limoenen en kruiden',
    [Language.DE]: 'Rezeptkarte auf Holzfläche mit Limetten und Kräutern',
  },
  'chef.liesbeth-van-der-velden.gallery-4': {
    [Language.EN]: 'Plated family-style dishes with roasted vegetables and grains',
    [Language.NL]: 'Family-style borden met geroosterde groenten en granen',
    [Language.DE]: 'Family-Style-Teller mit geröstetem Gemüse und Körnern',
  },

  // Chef: Brenda Anna (Brenda Anna aan de KOOK)
  'chef.brenda-anna.avatar': {
    [Language.EN]: 'Portrait of chef Brenda Anna',
    [Language.NL]: 'Portret van chef Brenda Anna',
    [Language.DE]: 'Porträt von Chefköchin Brenda Anna',
  },
  'chef.brenda-anna.hero': {
    [Language.EN]: 'Brenda Anna in her kitchen, plating plant-based retreat food',
    [Language.NL]: 'Brenda Anna in haar keuken, plantaardig retraite-eten opmakend',
    [Language.DE]: 'Brenda Anna in ihrer Küche, pflanzliches Retreat-Essen anrichtend',
  },
  'chef.brenda-anna.gallery-1': {
    [Language.EN]: 'Brenda Anna preparing a vegetarian dish',
    [Language.NL]: 'Brenda Anna bereidt een vegetarisch gerecht',
    [Language.DE]: 'Brenda Anna bereitet ein vegetarisches Gericht zu',
  },
  'chef.brenda-anna.gallery-2': {
    [Language.EN]: 'Brenda Anna at work in the kitchen',
    [Language.NL]: 'Brenda Anna aan het werk in de keuken',
    [Language.DE]: 'Brenda Anna bei der Arbeit in der Küche',
  },
  'chef.brenda-anna.gallery-3': {
    [Language.EN]: 'Fragrant spiced Indian vegetable and lentil soup',
    [Language.NL]: 'Geurige Indiase groente- en linzensoep',
    [Language.DE]: 'Würzige indische Gemüse-Linsen-Suppe',
  },

  // Chef: Anne Hopman (Buro Broccoli)
  'chef.buro-broccoli.avatar': {
    [Language.EN]: 'Portrait of Anne Hopman, vegan retreat chef behind Buro Broccoli',
    [Language.NL]: 'Portret van Anne Hopman, vegan retraitekok achter Buro Broccoli',
    [Language.DE]: 'Porträt von Anne Hopman, veganer Retreat-Köchin hinter Buro Broccoli',
  },
  'chef.buro-broccoli.hero': {
    [Language.EN]: 'Vegan retreat dish plated by Buro Broccoli',
    [Language.NL]: 'Vegan retraite­gerecht opgemaakt door Buro Broccoli',
    [Language.DE]: 'Veganes Retreat-Gericht von Buro Broccoli angerichtet',
  },
  'chef.buro-broccoli.gallery-1': {
    [Language.EN]: 'Plant-based catering plate from Buro Broccoli',
    [Language.NL]: 'Plantaardig cateringgerecht van Buro Broccoli',
    [Language.DE]: 'Pflanzliches Catering-Gericht von Buro Broccoli',
  },
  'chef.buro-broccoli.gallery-2': {
    [Language.EN]: 'Buro Broccoli vegan menu component, organic and gluten-free',
    [Language.NL]: 'Onderdeel van een Buro Broccoli vegan menu, biologisch en glutenvrij',
    [Language.DE]: 'Bestandteil eines Buro-Broccoli-Veganmenüs, biologisch und glutenfrei',
  },
  'chef.buro-broccoli.gallery-3': {
    [Language.EN]: 'Vegan retreat spread by Buro Broccoli',
    [Language.NL]: 'Vegan retraite­buffet van Buro Broccoli',
    [Language.DE]: 'Veganes Retreat-Buffet von Buro Broccoli',
  },

  // Chef: Alexandra van Rijen (De Groene Chef)
  'chef.de-groene-chef.avatar': {
    [Language.EN]: 'Portrait of Alexandra van Rijen, chef behind De Groene Chef',
    [Language.NL]: 'Portret van Alexandra van Rijen, chef achter De Groene Chef',
    [Language.DE]: 'Porträt von Alexandra van Rijen, Chefköchin hinter De Groene Chef',
  },
  'chef.de-groene-chef.hero': {
    [Language.EN]: 'Plant-based shared dinner served by De Groene Chef',
    [Language.NL]: 'Plantaardig deeldiner geserveerd door De Groene Chef',
    [Language.DE]: 'Pflanzliches Gemeinschaftsessen serviert von De Groene Chef',
  },
  'chef.de-groene-chef.gallery-1': {
    [Language.EN]: 'Outdoor wedding catering by De Groene Chef',
    [Language.NL]: 'Buitencatering bij een bruiloft door De Groene Chef',
    [Language.DE]: 'Open-Air-Hochzeitscatering von De Groene Chef',
  },
  'chef.de-groene-chef.gallery-2': {
    [Language.EN]: 'Plant-based borrelplank styled by De Groene Chef',
    [Language.NL]: 'Plantaardige borrelplank gestyled door De Groene Chef',
    [Language.DE]: 'Pflanzliche Borrelplank von De Groene Chef gestaltet',
  },
  'chef.de-groene-chef.gallery-3': {
    [Language.EN]: 'Plated plant-based dish from De Groene Chef',
    [Language.NL]: 'Plantaardig gerecht van De Groene Chef',
    [Language.DE]: 'Pflanzliches Gericht von De Groene Chef',
  },

  // Chef: De Kookstudio (Belgium)
  'chef.de-kookstudio.avatar': {
    [Language.EN]: 'Portrait of the De Kookstudio founder',
    [Language.NL]: 'Portret van de oprichter van De Kookstudio',
    [Language.DE]: 'Porträt der Gründerin von De Kookstudio',
  },
  'chef.de-kookstudio.hero': {
    [Language.EN]: 'De Kookstudio chef preparing plant-based retreat food',
    [Language.NL]: 'Chef van De Kookstudio bereidt plantaardig retreat-eten',
    [Language.DE]: 'Köchin von De Kookstudio bereitet pflanzliches Retreat-Essen zu',
  },

  // Chef: Eveline Delnooz (Eveline Cooks)
  'chef.eveline-cooks.avatar': {
    [Language.EN]: 'Portrait of vegan chef Eveline Delnooz of Eveline Cooks',
    [Language.NL]: 'Portret van vegan chef Eveline Delnooz van Eveline Cooks',
    [Language.DE]: 'Porträt der veganen Köchin Eveline Delnooz von Eveline Cooks',
  },
  'chef.eveline-cooks.hero': {
    [Language.EN]: 'Eveline Delnooz cooking outdoors during golden hour',
    [Language.NL]: 'Eveline Delnooz kookt buiten tijdens golden hour',
    [Language.DE]: 'Eveline Delnooz kocht draußen in der goldenen Stunde',
  },
  'chef.eveline-cooks.gallery-1': {
    [Language.EN]: 'Plated dish from the cookbook Vegan de wereld rond',
    [Language.NL]: 'Gerecht uit het kookboek Vegan de wereld rond',
    [Language.DE]: 'Gericht aus dem Kochbuch Vegan de wereld rond',
  },
  'chef.eveline-cooks.gallery-2': {
    [Language.EN]: 'Eveline Cooks plant-based catering spread',
    [Language.NL]: 'Plantaardige cateringopstelling van Eveline Cooks',
    [Language.DE]: 'Pflanzliches Catering-Buffet von Eveline Cooks',
  },
  'chef.eveline-cooks.gallery-3': {
    [Language.EN]: 'Vegan world-cuisine dishes by Eveline Cooks',
    [Language.NL]: 'Vegan wereldgerechten van Eveline Cooks',
    [Language.DE]: 'Vegane Weltgerichte von Eveline Cooks',
  },

  // Chef: Marko (Groentje)
  'chef.groentje.avatar': {
    [Language.EN]: 'Marko of Groentje preparing a plant-based home dinner',
    [Language.NL]: 'Marko van Groentje bereidt een plantaardig thuisdiner',
    [Language.DE]: 'Marko von Groentje bereitet ein pflanzliches Hausdinner zu',
  },
  'chef.groentje.hero': {
    [Language.EN]: 'Plant-based catering spread laid out for a group',
    [Language.NL]: 'Plantaardige catering uitgestald voor een gezelschap',
    [Language.DE]: 'Pflanzliches Catering-Buffet für eine Gruppe',
  },
  'chef.groentje.gallery-1': {
    [Language.EN]: 'Vegan chocolate cake by Groentje',
    [Language.NL]: 'Vegan chocoladetaart van Groentje',
    [Language.DE]: 'Veganer Schokoladenkuchen von Groentje',
  },
  'chef.groentje.gallery-2': {
    [Language.EN]: 'Vegan high tea spread by Groentje',
    [Language.NL]: 'Vegan high tea van Groentje',
    [Language.DE]: 'Veganer High Tea von Groentje',
  },
  'chef.groentje.gallery-3': {
    [Language.EN]: 'Plant-based lunch plated by Groentje',
    [Language.NL]: 'Plantaardige lunch van Groentje',
    [Language.DE]: 'Pflanzliches Mittagessen von Groentje',
  },

  // Chef: Jennifer Abeck (ChefRetreats)
  'chef.jennifer-abeck.avatar': {
    [Language.EN]: 'Portrait of chef Jennifer Abeck',
    [Language.NL]: 'Portret van chef Jennifer Abeck',
    [Language.DE]: 'Porträt der Köchin Jennifer Abeck',
  },
  'chef.jennifer-abeck.hero': {
    [Language.EN]: 'Plated wellness meal styled by Jennifer Abeck',
    [Language.NL]: 'Welzijnsgerecht opgemaakt door Jennifer Abeck',
    [Language.DE]: 'Wellness-Gericht angerichtet von Jennifer Abeck',
  },
  'chef.jennifer-abeck.gallery-1': {
    [Language.EN]: 'Fresh, plant-forward dish from a yoga retreat menu',
    [Language.NL]: 'Verse, plantaardige creatie van een yoga-retraitemenu',
    [Language.DE]: 'Frisches, pflanzenbetontes Gericht aus einem Yoga-Retreat-Menü',
  },
  'chef.jennifer-abeck.gallery-2': {
    [Language.EN]: 'Catering setup at a women\'s wellness event',
    [Language.NL]: 'Catering-opstelling bij een women\'s wellness-event',
    [Language.DE]: 'Catering-Aufbau bei einem Frauen-Wellness-Event',
  },
  'chef.jennifer-abeck.gallery-3': {
    [Language.EN]: 'Nourishing retreat dish with locally sourced ingredients',
    [Language.NL]: 'Voedzaam retraitegerecht met lokaal ingekochte ingrediënten',
    [Language.DE]: 'Nahrhaftes Retreat-Gericht mit lokal bezogenen Zutaten',
  },

  // Chef: Karin van Hal (Cuisine Pachamama)
  'chef.karin-van-hal.avatar': {
    [Language.EN]: 'Portrait of Karin van Hal, plant-based chef behind Cuisine Pachamama',
    [Language.NL]: 'Portret van Karin van Hal, plantaardige chef achter Cuisine Pachamama',
    [Language.DE]: 'Porträt von Karin van Hal, pflanzliche Köchin hinter Cuisine Pachamama',
  },
  'chef.karin-van-hal.hero': {
    [Language.EN]: 'Plant-based dish styled by Karin van Hal of Cuisine Pachamama',
    [Language.NL]: 'Plantaardig gerecht gestyled door Karin van Hal van Cuisine Pachamama',
    [Language.DE]: 'Pflanzliches Gericht gestaltet von Karin van Hal von Cuisine Pachamama',
  },
  'chef.karin-van-hal.gallery-1': {
    [Language.EN]: 'Colourful retreat plate from Cuisine Pachamama',
    [Language.NL]: 'Kleurrijk retraitegerecht van Cuisine Pachamama',
    [Language.DE]: 'Farbenfrohes Retreat-Gericht von Cuisine Pachamama',
  },
  'chef.karin-van-hal.gallery-2': {
    [Language.EN]: 'Plant-based course plated by Cuisine Pachamama',
    [Language.NL]: 'Plantaardig gerecht opgemaakt door Cuisine Pachamama',
    [Language.DE]: 'Pflanzlicher Gang angerichtet von Cuisine Pachamama',
  },
  'chef.karin-van-hal.gallery-3': {
    [Language.EN]: 'Healing-retreat dish styled by Karin van Hal',
    [Language.NL]: 'Healing-retraitegerecht gestyled door Karin van Hal',
    [Language.DE]: 'Healing-Retreat-Gericht gestaltet von Karin van Hal',
  },

  // Chef: Marjolijn (La Mama Gaia)
  'chef.la-mama-gaia.avatar': {
    [Language.EN]: 'Portrait of Marjolijn, plant-forward private chef behind La Mama Gaia',
    [Language.NL]: 'Portret van Marjolijn, plantaardige privéchef achter La Mama Gaia',
    [Language.DE]: 'Porträt von Marjolijn, pflanzlicher Privatköchin hinter La Mama Gaia',
  },
  'chef.la-mama-gaia.hero': {
    [Language.EN]: 'Colourful plant-based dish plated by chef Marjolijn of La Mama Gaia',
    [Language.NL]: 'Kleurrijk plantaardig gerecht gepresenteerd door chef Marjolijn van La Mama Gaia',
    [Language.DE]: 'Farbenfrohes pflanzliches Gericht von Köchin Marjolijn von La Mama Gaia',
  },
  'chef.la-mama-gaia.gallery-1': {
    [Language.EN]: 'Vegan retreat dish from a La Mama Gaia private chef menu',
    [Language.NL]: 'Veganistisch retraitegerecht van een La Mama Gaia-privéchefmenu',
    [Language.DE]: 'Veganes Retreat-Gericht aus einem La-Mama-Gaia-Privatkochmenü',
  },
  'chef.la-mama-gaia.gallery-2': {
    [Language.EN]: 'Plant-based seasonal plate prepared by La Mama Gaia for a retreat',
    [Language.NL]: 'Plantaardig seizoensgerecht bereid door La Mama Gaia voor een retreat',
    [Language.DE]: 'Pflanzliches Saisongericht zubereitet von La Mama Gaia für ein Retreat',
  },
  'chef.la-mama-gaia.gallery-3': {
    [Language.EN]: 'Wholefood vegetarian dish styled by La Mama Gaia',
    [Language.NL]: 'Volwaardig vegetarisch gerecht gestyled door La Mama Gaia',
    [Language.DE]: 'Vollwertiges vegetarisches Gericht gestaltet von La Mama Gaia',
  },

  // Chef: Marije van den Oever (Grote Pannen / Studiomamma)
  'chef.marije-grote-pannen.avatar': {
    [Language.EN]: 'Portrait of Marije van den Oever, chef behind Grote Pannen',
    [Language.NL]: 'Portret van Marije van den Oever, chef achter Grote Pannen',
    [Language.DE]: 'Porträt von Marije van den Oever, Chefköchin hinter Grote Pannen',
  },
  'chef.marije-grote-pannen.hero': {
    [Language.EN]: 'Retreat catering spread by Grote Pannen',
    [Language.NL]: 'Retraite­catering van Grote Pannen',
    [Language.DE]: 'Retreat-Catering von Grote Pannen',
  },
  'chef.marije-grote-pannen.gallery-1': {
    [Language.EN]: 'Plated dish from a Grote Pannen retreat menu',
    [Language.NL]: 'Gerecht van een Grote Pannen retraitemenu',
    [Language.DE]: 'Gericht aus einem Grote-Pannen-Retreat-Menü',
  },
  'chef.marije-grote-pannen.gallery-2': {
    [Language.EN]: 'Multi-day retreat meal prepared by Grote Pannen',
    [Language.NL]: 'Maaltijd voor een meerdaagse retraite bereid door Grote Pannen',
    [Language.DE]: 'Mahlzeit für ein mehrtägiges Retreat zubereitet von Grote Pannen',
  },
  'chef.marije-grote-pannen.gallery-3': {
    [Language.EN]: 'Shared family-style table set by Grote Pannen',
    [Language.NL]: 'Gedeelde family-style tafel gedekt door Grote Pannen',
    [Language.DE]: 'Family-Style-Tafel gedeckt von Grote Pannen',
  },

  // Chef: Nitzan Zeira
  'chef.nitzan-zeira.avatar': {
    [Language.EN]: 'Portrait of Nitzan Zeira, vegan and Ayurvedic chef in Amsterdam',
    [Language.NL]: 'Portret van Nitzan Zeira, vegan en Ayurvedische chef in Amsterdam',
    [Language.DE]: 'Porträt von Nitzan Zeira, veganer und ayurvedischer Köchin in Amsterdam',
  },
  'chef.nitzan-zeira.hero': {
    [Language.EN]: 'Plant-based dish styled by chef Nitzan Zeira',
    [Language.NL]: 'Plantaardig gerecht opgemaakt door chef Nitzan Zeira',
    [Language.DE]: 'Pflanzliches Gericht angerichtet von Köchin Nitzan Zeira',
  },

  // Chef: Jill & Chris (Planticious Bliss)
  'chef.planticious-bliss.avatar': {
    [Language.EN]: 'Jill and Chris, founders of Planticious Bliss',
    [Language.NL]: 'Jill en Chris, oprichters van Planticious Bliss',
    [Language.DE]: 'Jill und Chris, Gründer von Planticious Bliss',
  },
  'chef.planticious-bliss.hero': {
    [Language.EN]: 'Plant-based plated course by Planticious Bliss',
    [Language.NL]: 'Plantaardig bord van Planticious Bliss',
    [Language.DE]: 'Pflanzlicher Gang von Planticious Bliss',
  },
  'chef.planticious-bliss.gallery-1': {
    [Language.EN]: 'Plant-based dish from a Planticious Bliss retreat menu',
    [Language.NL]: 'Plantaardig gerecht van een Planticious Bliss retraite-menu',
    [Language.DE]: 'Pflanzliches Gericht aus einem Planticious-Bliss-Retreat-Menü',
  },
  'chef.planticious-bliss.gallery-2': {
    [Language.EN]: 'Planticious Bliss event-style plant-based plating',
    [Language.NL]: 'Plantaardige presentatie van Planticious Bliss bij een event',
    [Language.DE]: 'Pflanzliche Event-Präsentation von Planticious Bliss',
  },
  'chef.planticious-bliss.gallery-3': {
    [Language.EN]: 'Bespoke plant-based course by Planticious Bliss',
    [Language.NL]: 'Plantaardig gerecht op maat van Planticious Bliss',
    [Language.DE]: 'Maßgeschneidertes pflanzliches Gericht von Planticious Bliss',
  },

  // Chef: Loes (Rebelicious kookt)
  'chef.rebelicious.avatar': {
    [Language.EN]: 'Portrait of chef Loes of Rebelicious kookt',
    [Language.NL]: 'Portret van chef Loes van Rebelicious kookt',
    [Language.DE]: 'Porträt der Köchin Loes von Rebelicious kookt',
  },
  'chef.rebelicious.hero': {
    [Language.EN]: 'Colourful vegan salad bowl by Rebelicious',
    [Language.NL]: 'Kleurrijke vegan saladekom van Rebelicious',
    [Language.DE]: 'Farbenfrohe vegane Salatschüssel von Rebelicious',
  },
  'chef.rebelicious.gallery-1': {
    [Language.EN]: 'Plant-based catering plate by Rebelicious',
    [Language.NL]: 'Plantaardig cateringgerecht van Rebelicious',
    [Language.DE]: 'Pflanzliches Catering-Gericht von Rebelicious',
  },
  'chef.rebelicious.gallery-2': {
    [Language.EN]: 'Vegan cake by chef Loes of Rebelicious',
    [Language.NL]: 'Vegan taart van chef Loes van Rebelicious',
    [Language.DE]: 'Veganer Kuchen von Köchin Loes von Rebelicious',
  },
  'chef.rebelicious.gallery-3': {
    [Language.EN]: 'Shared dining spread by Rebelicious',
    [Language.NL]: 'Aanschuifdiner van Rebelicious',
    [Language.DE]: 'Gemeinschaftliches Essen von Rebelicious',
  },

  // Chef: Kaitlyn Kinder (Rooted in Raw)
  'chef.rooted-in-raw.avatar': {
    [Language.EN]: 'Portrait of Kaitlyn Kinder, plant-based chef behind Rooted in Raw',
    [Language.NL]: 'Portret van Kaitlyn Kinder, plantaardige chef achter Rooted in Raw',
    [Language.DE]: 'Porträt von Kaitlyn Kinder, pflanzlicher Köchin hinter Rooted in Raw',
  },
  'chef.rooted-in-raw.hero': {
    [Language.EN]: 'Kaitlyn Kinder cooking on a retreat in Croatia',
    [Language.NL]: 'Kaitlyn Kinder kookt op een retreat in Kroatië',
    [Language.DE]: 'Kaitlyn Kinder kocht bei einem Retreat in Kroatien',
  },
  'chef.rooted-in-raw.gallery-1': {
    [Language.EN]: 'Plated raw vegan dish from Rooted in Raw',
    [Language.NL]: 'Rauw vegan gerecht van Rooted in Raw',
    [Language.DE]: 'Rohveganes Gericht von Rooted in Raw',
  },
  'chef.rooted-in-raw.gallery-2': {
    [Language.EN]: 'Plant-based meal prepared by Rooted in Raw',
    [Language.NL]: 'Plantaardige maaltijd bereid door Rooted in Raw',
    [Language.DE]: 'Pflanzliches Gericht zubereitet von Rooted in Raw',
  },
  'chef.rooted-in-raw.gallery-3': {
    [Language.EN]: 'Raw vegan plate styled for a retreat table',
    [Language.NL]: 'Rauw vegan bord opgemaakt voor een retraitetafel',
    [Language.DE]: 'Rohveganes Gericht für eine Retreat-Tafel angerichtet',
  },

  // Chef: Suzanne van den Heuvel (Studio Gember)
  'chef.suzanne-van-den-heuvel.avatar': {
    [Language.EN]: 'Portrait of chef Suzanne van den Heuvel, founder of Studio Gember',
    [Language.NL]: 'Portret van chef Suzanne van den Heuvel, oprichter van Studio Gember',
    [Language.DE]: 'Porträt der Köchin Suzanne van den Heuvel, Gründerin von Studio Gember',
  },
  'chef.suzanne-van-den-heuvel.hero': {
    [Language.EN]: 'Vegetarian natural-cuisine spread by Studio Gember on a retreat table',
    [Language.NL]: 'Vegetarische natuurkeuken van Studio Gember op een retraitetafel',
    [Language.DE]: 'Vegetarische Naturküche von Studio Gember auf einer Retreat-Tafel',
  },
  'chef.suzanne-van-den-heuvel.gallery-1': {
    [Language.EN]: 'Plant-based dish prepared with attention by Studio Gember',
    [Language.NL]: 'Plantaardig gerecht met aandacht bereid door Studio Gember',
    [Language.DE]: 'Pflanzliches Gericht mit Achtsamkeit zubereitet von Studio Gember',
  },
  'chef.suzanne-van-den-heuvel.gallery-2': {
    [Language.EN]: 'Mindful retreat meal served family-style by Studio Gember',
    [Language.NL]: 'Mindful retraitemaaltijd, family-style geserveerd door Studio Gember',
    [Language.DE]: 'Achtsame Retreat-Mahlzeit, family-style serviert von Studio Gember',
  },
  'chef.suzanne-van-den-heuvel.gallery-3': {
    [Language.EN]: 'Vegetarian buffet plated for a silence retreat group',
    [Language.NL]: 'Vegetarisch buffet opgemaakt voor een stilteretraite-groep',
    [Language.DE]: 'Vegetarisches Buffet angerichtet für eine Stille-Retreat-Gruppe',
  },

  // Chef: Michel (The Food Circle)
  'chef.the-food-circle.avatar': {
    [Language.EN]: 'Michel of The Food Circle, organic vegan retreat chef',
    [Language.NL]: 'Michel van The Food Circle, biologisch vegan retraitekok',
    [Language.DE]: 'Michel von The Food Circle, biologischer veganer Retreat-Koch',
  },
  'chef.the-food-circle.hero': {
    [Language.EN]: 'Hand-baked sourdough loaf by The Food Circle',
    [Language.NL]: 'Met de hand gebakken zuurdesembrood van The Food Circle',
    [Language.DE]: 'Handgebackenes Sauerteigbrot von The Food Circle',
  },
  'chef.the-food-circle.gallery-1': {
    [Language.EN]: 'Plant-based retreat dish styled on a wooden board',
    [Language.NL]: 'Plantaardig retraitegerecht op een houten plank',
    [Language.DE]: 'Pflanzliches Retreat-Gericht auf einem Holzbrett angerichtet',
  },
  'chef.the-food-circle.gallery-2': {
    [Language.EN]: 'Fermented vegetables prepared in The Food Circle kitchen',
    [Language.NL]: 'Gefermenteerde groenten uit de keuken van The Food Circle',
    [Language.DE]: 'Fermentiertes Gemüse aus der Küche von The Food Circle',
  },
  'chef.the-food-circle.gallery-3': {
    [Language.EN]: 'Fresh hand-made pasta by The Food Circle',
    [Language.NL]: 'Verse handgemaakte pasta van The Food Circle',
    [Language.DE]: 'Frische handgemachte Pasta von The Food Circle',
  },

  // Chef: Renate Vermeulen (Vega Happie)
  'chef.vega-happie.avatar': {
    [Language.EN]: 'Portrait of Renate Vermeulen, owner-chef of Vega Happie',
    [Language.NL]: 'Portret van Renate Vermeulen, eigenaar-chef van Vega Happie',
    [Language.DE]: 'Porträt von Renate Vermeulen, Inhaber-Köchin von Vega Happie',
  },
  'chef.vega-happie.hero': {
    [Language.EN]: 'Vega Happie vegan catering spread plated for a group',
    [Language.NL]: 'Vegan cateringopstelling van Vega Happie voor een groep',
    [Language.DE]: 'Veganes Catering-Buffet von Vega Happie für eine Gruppe',
  },
  'chef.vega-happie.gallery-1': {
    [Language.EN]: 'Plant-based cooking workshop in progress at a guest\'s home',
    [Language.NL]: 'Plantaardige kookworkshop aan huis bij een gastheer',
    [Language.DE]: 'Pflanzlicher Kochworkshop bei einer Gastgeberin zu Hause',
  },
  'chef.vega-happie.gallery-2': {
    [Language.EN]: 'Renate preparing a vegan dish in the kitchen',
    [Language.NL]: 'Renate bereidt een vegan gerecht in de keuken',
    [Language.DE]: 'Renate bereitet ein veganes Gericht in der Küche zu',
  },
  'chef.vega-happie.gallery-3': {
    [Language.EN]: 'Workshop participants plating vegan dishes together',
    [Language.NL]: 'Workshopdeelnemers presenteren samen vegan gerechten',
    [Language.DE]: 'Workshop-Teilnehmer richten gemeinsam vegane Gerichte an',
  },
} as const


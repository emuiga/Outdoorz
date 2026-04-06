export interface TrailData {
  _id: string;
  slug: string;
  name: string;
  difficulty: string;
  activityType: string;
  distanceKm: number | string;
  durationHours: string;
  elevationM: string;
  description: string;
  image: string;
  region: string;
  externalUrl?: string;
}

// All Kenya trails — replace individual fields with Sanity data once populated.
// externalUrl links to KWS or official info pages.
export const allTrails: TrailData[] = [
  // ── Rift Valley / Nakuru (home territory) ─────────────────────────
  {
    _id: "t1", slug: "menengai-crater",
    name: "Menengai Crater", region: "Nakuru, Rift Valley",
    difficulty: "Moderate", activityType: "Hiking",
    distanceKm: 8, durationHours: "4–5 hrs", elevationM: "2,272m",
    description: "One of the world's largest calderas sitting 10km north of Nakuru town. The hike through wildflowers, geothermal vents and geysers rewards you with sweeping views over the Rift Valley floor.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&q=80",
  },
  {
    _id: "t2", slug: "mt-longonot-rim",
    name: "Mt. Longonot Rim", region: "Naivasha, Rift Valley",
    difficulty: "Challenging", activityType: "Hiking",
    distanceKm: 11.5, durationHours: "5–6 hrs", elevationM: "2,776m",
    description: "Kenya's most dramatic volcano and the highest accessible summit in the Rift Valley. A full crater rim circuit offering jaw-dropping views on both sides.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/mount-longonot-national-park",
  },
  {
    _id: "t3", slug: "hells-gate-gorge",
    name: "Hell's Gate Gorge", region: "Naivasha, Rift Valley",
    difficulty: "Easy", activityType: "Hiking",
    distanceKm: 20, durationHours: "4 hrs", elevationM: "Flat–mild",
    description: "Walk or cycle through towering volcanic gorges and dramatic rock columns. One of the few Kenyan parks where you share the trail with wildlife — zebra, gazelle and buffalo.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/hells-gate-national-park",
  },
  {
    _id: "t4", slug: "hyrax-hill",
    name: "Hyrax Hill", region: "Nakuru",
    difficulty: "Easy", activityType: "Hiking",
    distanceKm: 3, durationHours: "1.5 hrs", elevationM: "85m gain",
    description: "A short, family-friendly hike above Nakuru town with panoramic views over Lake Nakuru. An archaeological site with prehistoric settlements — history meets nature.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=700&q=80",
  },
  {
    _id: "t5", slug: "eburu-forest",
    name: "Eburu Forest", region: "Naivasha, Rift Valley",
    difficulty: "Moderate", activityType: "Hiking",
    distanceKm: 8, durationHours: "3–4 hrs", elevationM: "2,856m",
    description: "A misty montane forest with geothermal springs, steep valleys and endangered Mountain Bongo. Rich with endemic bird species and a cool escape from the valley heat.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80",
  },
  {
    _id: "t6", slug: "mt-suswa",
    name: "Mt. Suswa", region: "Narok, Rift Valley",
    difficulty: "Moderate", activityType: "Hiking",
    distanceKm: 12, durationHours: "5–6 hrs", elevationM: "2,356m",
    description: "A Maasai sacred volcano on the Rift Valley floor with a double caldera and extensive lava caves. Wild, remote, and remarkably few visitors.",
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=700&q=80",
  },
  {
    _id: "t7", slug: "kijabe-hills",
    name: "Kijabe Hills", region: "Kijabe, Rift Valley",
    difficulty: "Moderate", activityType: "Hiking",
    distanceKm: 10, durationHours: "4 hrs", elevationM: "2,100m",
    description: "A popular paragliding launchpad with a cracking hike. Views of Mt. Longonot, Lake Naivasha and the escarpment all at once. Often uncrowded mid-week.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700&q=80",
  },
  {
    _id: "t8", slug: "lake-nakuru-walk",
    name: "Lake Nakuru Circuit", region: "Nakuru",
    difficulty: "Easy", activityType: "Walk",
    distanceKm: 12, durationHours: "2–5 hrs", elevationM: "Flat",
    description: "A guided walk along the flamingo shores of Lake Nakuru National Park. Over 450 recorded bird species including pelicans, cormorants and the iconic lesser flamingo.",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/lake-nakuru-national-park",
  },
  {
    _id: "t9", slug: "lake-elementaita-loop",
    name: "Lake Elementaita Loop", region: "Elementaita, Rift Valley",
    difficulty: "Challenging", activityType: "Walk",
    distanceKm: 15, durationHours: "6 hrs", elevationM: "Variable",
    description: "A UNESCO World Heritage soda lake teeming with flamingos, pelicans and over 400 species. A long, rewarding loop through lakeshore and rocky terrain.",
    image: "https://images.unsplash.com/photo-1516208813382-0b4e60c3c36f?w=700&q=80",
  },
  {
    _id: "t10", slug: "menengai-crater-camp",
    name: "Menengai Crater Campout", region: "Nakuru",
    difficulty: "Moderate", activityType: "Camping",
    distanceKm: 8, durationHours: "Overnight", elevationM: "2,272m",
    description: "Sleep on the rim of Menengai at 2,272m. Campfire under the stars, sunrise over the Rift Valley. Gear and guide provided — just bring yourself.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&q=80",
  },

  // ── Thompson Falls & North Rift ────────────────────────────────────
  {
    _id: "t11", slug: "thomsons-falls",
    name: "Thomson's Falls", region: "Nyahururu",
    difficulty: "Easy", activityType: "Walk",
    distanceKm: 3, durationHours: "1–2 hrs", elevationM: "2,360m",
    description: "A 74-metre waterfall on the Ewaso Narok River, surrounded by indigenous forest at one of Kenya's highest towns. Spectacular viewpoints, birdlife and mist-drenched trails.",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=700&q=80",
    externalUrl: "https://natureswonderlandsafaris.com/destinations/kenya/thomsons-falls/",
  },
  {
    _id: "t12", slug: "torok-waterfalls",
    name: "Torok Waterfalls", region: "Aberdares",
    difficulty: "Moderate", activityType: "Hiking",
    distanceKm: 8, durationHours: "5–6 hrs", elevationM: "Variable",
    description: "A forested hike through the Aberdare ranges to a dramatic waterfall, with a trickier option to the top for panoramic Rift Valley views. Lush, green and rarely crowded.",
    image: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?w=700&q=80",
  },

  // ── Aberdares ─────────────────────────────────────────────────────
  {
    _id: "t13", slug: "table-mountain-aberdares",
    name: "Table Mountain (Aberdares)", region: "Aberdare Ranges",
    difficulty: "Challenging", activityType: "Hiking",
    distanceKm: 15, durationHours: "8 hrs", elevationM: "3,792m",
    description: "A flat-topped moorland peak in the Aberdares with epic views of Mt. Kenya on clear days. Challenging terrain through tussock grass and hagenia forest.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/aberdare-national-park",
  },
  {
    _id: "t14", slug: "mt-satima",
    name: "Mt. Satima (Ol Donyo Lesatima)", region: "Aberdare Ranges",
    difficulty: "Challenging", activityType: "Hiking",
    distanceKm: 18, durationHours: "8–10 hrs", elevationM: "4,001m",
    description: "The highest peak in the Aberdares at over 4,000m. A challenging multi-terrain trek through moorland and bamboo forest. Clear days offer views spanning from Mt. Kenya to the Rift.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/aberdare-national-park",
  },
  {
    _id: "t15", slug: "sleeping-warrior",
    name: "Sleeping Warrior & Ugali Hills", region: "Aberdare Ranges",
    difficulty: "Moderate", activityType: "Hiking",
    distanceKm: 12, durationHours: "5–6 hrs", elevationM: "3,200m",
    description: "A hidden gem in the Aberdares — rolling moorland hills with peaceful trails and stunning Rift Valley sunset views. Far less crowded than nearby peaks.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700&q=80",
  },
  {
    _id: "t16", slug: "seven-ponds",
    name: "Seven Ponds", region: "Aberdare National Park",
    difficulty: "Moderate", activityType: "Hiking",
    distanceKm: 14, durationHours: "6 hrs", elevationM: "3,840m",
    description: "Moorland walking to seven glacial tarns in the Aberdares. The landscape shifts from bamboo forest to open moorland — wildlife includes Buffalo, Serval and Colobus monkeys.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/aberdare-national-park",
  },
  {
    _id: "t29", slug: "elephant-hills",
    name: "Elephant Hills", region: "Aberdare Ranges",
    difficulty: "Challenging", activityType: "Hiking",
    distanceKm: 12, durationHours: "6–7 hrs", elevationM: "3,650m",
    description: "A rugged, undervisited peak in the Aberdares named for its elephant-shaped silhouette. Dense bamboo transitions to open moorland near the summit, with sweeping views across the ranges and into the Rift Valley.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/aberdare-national-park",
  },
  {
    _id: "t30", slug: "mt-kipipiri",
    name: "Mt. Kipipiri", region: "Nyandarua",
    difficulty: "Challenging", activityType: "Hiking",
    distanceKm: 14, durationHours: "6–8 hrs", elevationM: "3,349m",
    description: "A rarely visited peak at the northern tip of the Aberdare escarpment. Dense hagenia and podocarpus forest on the ascent gives way to open moorland and excellent views of the Rift Valley and Mt. Kenya on clear days.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/aberdare-national-park",
  },

  // ── Nairobi & Central ─────────────────────────────────────────────
  {
    _id: "t17", slug: "ngong-hills",
    name: "Ngong Hills", region: "Ngong, Nairobi",
    difficulty: "Easy", activityType: "Hiking",
    distanceKm: 14, durationHours: "4–5 hrs", elevationM: "2,460m",
    description: "Seven volcanic knuckles rising above Nairobi, immortalised in Karen Blixen's 'Out of Africa'. Plains views, windmills and enough wildlife to keep you alert. A classic.",
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=700&q=80",
  },
  {
    _id: "t18", slug: "karura-forest",
    name: "Karura Forest", region: "Nairobi",
    difficulty: "Easy", activityType: "Walk",
    distanceKm: 50, durationHours: "1–4 hrs", elevationM: "Flat",
    description: "Nairobi's beloved urban forest with 50km of trails, Mau Mau caves, waterfalls and abundant birdlife. Perfect for early-morning walks or family outings.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80",
    externalUrl: "https://www.karuraforest.org",
  },
  {
    _id: "t19", slug: "ol-donyo-sabuk",
    name: "Ol Donyo Sabuk", region: "Thika, Central",
    difficulty: "Moderate", activityType: "Hiking",
    distanceKm: 16, durationHours: "5–6 hrs", elevationM: "2,145m",
    description: "A forested national park outside Thika. Three routes to the summit through dense rainforest with buffalo, antelope and the historic McMillan graves. Underrated gem.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/ol-donyo-sabuk-national-park",
  },
  {
    _id: "t20", slug: "fourteen-falls",
    name: "Fourteen Falls", region: "Thika, Central",
    difficulty: "Easy", activityType: "Walk",
    distanceKm: 4, durationHours: "1–2 hrs", elevationM: "Flat",
    description: "A spectacular series of waterfalls on the Athi River near Thika. Best visited after rains when the falls are in full force. Often visited alongside Kilimambogo.",
    image: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?w=700&q=80",
  },
  {
    _id: "t21", slug: "lukenya-hills",
    name: "Lukenya Hills", region: "Machakos, Eastern",
    difficulty: "Moderate", activityType: "Hiking",
    distanceKm: 10, durationHours: "3–4 hrs", elevationM: "1,850m",
    description: "Rocky inselbergs rising from the Athi Plains south of Nairobi. Popular with climbers and hikers alike. Wide savannah views on clear days and good wildlife sightings en route.",
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=700&q=80",
  },
  {
    _id: "t22", slug: "oloolua-nature-trail",
    name: "Oloolua Nature Trail", region: "Karen, Nairobi",
    difficulty: "Easy", activityType: "Walk",
    distanceKm: 5, durationHours: "1–2 hrs", elevationM: "Flat",
    description: "A serene forest trail 20km from Nairobi CBD with a hidden waterfall, caves and rich birdlife. One of Nairobi's best-kept secrets — accessible to all fitness levels.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80",
  },

  // ── Mt. Kenya ─────────────────────────────────────────────────────
  {
    _id: "t23", slug: "mt-kenya-sirimon",
    name: "Mt. Kenya — Sirimon Route", region: "Mt. Kenya Region",
    difficulty: "Challenging", activityType: "Hiking",
    distanceKm: 55, durationHours: "4–6 days", elevationM: "5,199m",
    description: "The most scenic route up Africa's second-highest peak. Passes through moorland, glacier lakes and dramatic rock faces to Point Lenana at 4,985m — accessible without technical climbing.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/mount-kenya-national-park",
  },
  {
    _id: "t31", slug: "naro-moru-mackinders",
    name: "Naro Moru — Mackinder's Camp", region: "Mt. Kenya / Naro Moru",
    difficulty: "Challenging", activityType: "Hiking",
    distanceKm: 20, durationHours: "2–3 days", elevationM: "4,300m",
    description: "The most popular route up Mt. Kenya. The Naro Moru track climbs through highland forest, the infamous Vertical Bog, and vast alpine moorland to Mackinder's Valley — the gateway to Point Lenana at 4,985m.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/mount-kenya-national-park",
  },
  {
    _id: "t24", slug: "mt-kinangop",
    name: "Mt. Kinangop", region: "Nyandarua",
    difficulty: "Challenging", activityType: "Hiking",
    distanceKm: 18, durationHours: "6–7 hrs", elevationM: "3,906m",
    description: "One of Kenya's lesser-known high-altitude hikes. Views of Mt. Kenya and the Aberdares from a rarely-visited summit. Start early and watch for buffalo in the forest zones.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=700&q=80",
  },

  // ── Western Kenya ─────────────────────────────────────────────────
  {
    _id: "t25", slug: "mt-elgon",
    name: "Mt. Elgon", region: "Western Kenya / Kitale",
    difficulty: "Challenging", activityType: "Hiking",
    distanceKm: "Variable", durationHours: "2–4 days", elevationM: "4,321m",
    description: "A giant extinct volcano straddling the Kenya-Uganda border. Features Africa's largest caldera, massive cave elephants, and a freshwater crater lake. Truly off the beaten path.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/mount-elgon-national-park",
  },
  {
    _id: "t26", slug: "kakamega-forest",
    name: "Kakamega Forest", region: "Kakamega, Western",
    difficulty: "Easy", activityType: "Walk",
    distanceKm: "Variable", durationHours: "2–6 hrs", elevationM: "1,600m",
    description: "Kenya's only tropical rainforest — a relic of the ancient Congo basin jungle. Over 350 bird species, primates and rare butterflies. Guided walks available through the forest station.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/kakamega-forest-national-reserve",
  },
  {
    _id: "t32", slug: "maragoli-hills",
    name: "Maragoli Hills", region: "Vihiga, Western",
    difficulty: "Moderate", activityType: "Hiking",
    distanceKm: 10, durationHours: "4–5 hrs", elevationM: "1,900m",
    description: "A cluster of forested hills in the Vihiga highlands, draped in tea farms and indigenous woodland. Sweeping views of western Kenya and Lake Victoria on clear days. Friendly villages en route.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700&q=80",
  },

  // ── Southern / Eastern ────────────────────────────────────────────
  {
    _id: "t27", slug: "chyulu-hills",
    name: "Chyulu Hills", region: "Amboseli / Tsavo West",
    difficulty: "Moderate", activityType: "Hiking",
    distanceKm: "Variable", durationHours: "3–5 hrs", elevationM: "2,188m",
    description: "Volcanic hills between Amboseli and Tsavo with one of the world's longest lava tubes. Young, green and unspoilt — walking here feels like stepping onto another planet.",
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=700&q=80",
  },
  {
    _id: "t28", slug: "mt-ololookwe",
    name: "Mt. Ololookwe", region: "Samburu / Laikipia",
    difficulty: "Moderate", activityType: "Hiking",
    distanceKm: 8, durationHours: "4–5 hrs", elevationM: "2,175m",
    description: "A sacred flat-topped mountain towering above Samburu county. The climb is rewarded with sweeping views of the Laikipia plateau and the desert to the north. A true hidden gem.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=700&q=80",
  },
];

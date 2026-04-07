export interface EntryFeeRow {
  category: string;
  adult: string;
  child?: string;
}

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

  // Rich detail fields — only fully-detailed trails have these
  locationOverview?: string;
  howToAccess?: { road?: string; air?: string };
  bestTimeToVisit?: string;
  attractions?: Array<{ name: string; desc: string }>;
  activities?: Array<{ name: string; desc: string }>;
  nearbyAttractions?: string[];
  durationDetail?: string;
  accommodations?: { intro?: string; options?: string[] };
  entryFees?: EntryFeeRow[];
  paymentInfo?: string;
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
    name: "Mt. Longonot", region: "Naivasha, Rift Valley",
    difficulty: "Challenging", activityType: "Hiking",
    distanceKm: 11.5, durationHours: "4–6 hrs", elevationM: "2,776m",
    description: "Mount Longonot is a stratovolcano located southeast of Lake Naivasha in the Great Rift Valley of Kenya. It got its name from the Maasai word Oloonong'ot, meaning a mountain with numerous spurs and steep ridges. It rises to an elevation of about 2,776 metres (9,108 feet) above sea level and is known for its stunning views, a vast caldera and relatively easy hiking trails. The volcano's slopes are covered with dense forests, home to diverse wildlife including zebras, giraffes, and various bird species. Its last major eruption was in the 1860s, and today the summit offers panoramic vistas of the valley and Lake Naivasha — making it a top destination for nature lovers, adventure seekers and hikers who can trek to the rim and even descend into the crater.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80",
    externalUrl: "https://www.kws.go.ke/mount-longonot-national-park",

    locationOverview: "Mt Longonot is located in Kenya's Rift Valley region about 60 kilometres northwest of Nairobi, and approximately 25 kilometres southeast of Naivasha — making it an easy escape from the city's bustle.",

    howToAccess: {
      road: "Mt Longonot National Park is accessible by road with the journey from Nairobi taking about 1–1.5 hours. You can reach it by private car or hire a tour van or land cruiser. Public transport options include matatus and buses from Nairobi to Naivasha town, where taxis can be arranged to the park entrance. From Nairobi, take the Nairobi–Nakuru Highway (A 104) approximately 60 km to arrive at Naivasha, then take the Naivasha–Mai Mahiu Road (approx. 15 km, 20–30 min drive). Clear signposts guide you to Mt Longonot National Park's main gate as you approach the mountain.",
      air: "The best option is a charter flight from Wilson Airport in Nairobi to Naivasha Airstrip (also known as Loldia Airstrip), located 27 km from the park's main gate and serving both charter and private planes. After landing, a road transfer to the gate takes approximately 40–45 minutes.",
    },

    bestTimeToVisit: "Mt Longonot National Park is open year-round, but the best hiking conditions are during the dry seasons — June to October and January to February — when trails are less muddy and views are clearest. For a quieter experience, visit during weekdays to avoid weekend crowds.",

    attractions: [
      { name: "Mount Longonot Crater", desc: "The exhilarating hike up the volcano offers breathtaking views of the crater and the entire Rift Valley from the rim." },
      { name: "Wildlife", desc: "Mt. Longonot National Park is home to zebras, giraffes, and a rich variety of bird species living across its forested slopes." },
      { name: "Volcanic Landscapes", desc: "The mountain and its surroundings deliver panoramic views of the Rift Valley and Lake Naivasha that are among the finest in Kenya." },
      { name: "Crater Rim", desc: "From the crater rim you can see the full sweep of the Great Rift Valley and Lake Naivasha shimmering below — a truly unforgettable vantage point." },
      { name: "Flora & Fauna", desc: "Diverse plant life thrives on the slopes alongside wildlife. Keep an eye out for zebras and giraffes grazing in the forests as you ascend." },
      { name: "Scenic Trails", desc: "Well-marked hiking trails lead you to and around the crater, catering to varying fitness levels with clear signage throughout." },
    ],

    nearbyAttractions: [
      "Lake Naivasha — a freshwater lake offering boat rides, bird watching, and hippo spotting",
      "Hell's Gate National Park — dramatic scenery, wildlife, and geothermal features",
      "Crescent Island — a wildlife sanctuary on Lake Naivasha where you walk freely among animals",
      "Lake Elementaita — a serene soda lake known for flamingos, pelicans, and natural beauty",
    ],

    activities: [
      { name: "Hiking", desc: "The scenic landscapes offer an ideal hiking experience. Trek to the crater rim and witness the dramatic formations carved by volcanic eruptions. Best done in the early morning or late afternoon when temperatures are cooler. Wear comfortable clothing and sturdy shoes with good grip for the rugged terrain." },
      { name: "Picnicking", desc: "Designated picnic areas around the park let you relax and enjoy a meal with spectacular views of the mountain and the valley below." },
      { name: "Photography", desc: "Capture stunning vistas especially during sunrise or sunset. The contrast between the dark volcanic rock and the green valley floor makes for exceptional shots." },
      { name: "Wildlife Spotting", desc: "Look for zebras, giraffes, and various bird species along the trail as you ascend through the forested lower slopes." },
      { name: "Crater Rim Walk", desc: "Once at the top, walk around the full crater rim for panoramic views of the Great Rift Valley. First-time hikers are strongly advised to hire a guide who can show you the safer paths around the rim." },
    ],

    durationDetail: "Depending on your fitness level, the full hike takes approximately 4 to 6 hours. From the gate you hike for about 40 minutes to the first rest point where you can enjoy early views of the surroundings. From there, allow another 40 minutes to 1 hour to reach the crater rim. Walking the full rim circuit takes an additional hour.",

    accommodations: {
      intro: "Various hotels, lodges, and campsites in Naivasha offer accommodation across all budgets. All are a short drive from the park by car or local taxi.",
      options: [
        "Oloongonot Campsite — public campsite inside the park with water, toilets, and a kitchen area (no prior booking required)",
        "Nyati Campsite — special campsite inside the crater (advance booking required, self-catering)",
        "Green Campsite — special campsite inside the crater (advance booking required, self-catering)",
        "Lake Naivasha Resort",
        "Enashipai Resort & Spa",
        "Camp Carnelley's",
      ],
    },

    entryFees: [
      { category: "Kenyan Citizens", adult: "KSh 300", child: "KSh 215" },
      { category: "East Africa Residents", adult: "KSh 300", child: "KSh 215" },
      { category: "Non-Residents", adult: "USD 26", child: "USD 17" },
    ],

    paymentInfo: "Payment can be made via eCitizen, M-Pesa, Visa card, or Electronic Funds Transfer at the park entrance.",
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

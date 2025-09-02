// Normalized data structure for all areas and suburbs
// This file contains all area and suburb related data in one place

import type {
  Area,
  Suburb,
  AreasData,
  SuburbsData,
  SuburbService,
  SuburbPageTexts,
  NavigationItem,
  NavigationSection,
} from "./types";

// Company Information
export const COMPANY_INFO = {
  name: "My Choice",
  fullName: "My Choice Mortgage & Finance",
  tagline: "Mortgage & Finance",
  description:
    "Expert mortgage brokers providing home loans, personal finance, and commercial finance solutions across Australia.",
  phone: "0402 742 493",
  email: "info@mychoicemortgagefinance.com.au",
  address: "NSW 2749, AUSTRALIA",
  website: "https://www.mychoicemortgagefinance.com.au",
  logo: "/logo.png",
  established: "2009",
  creditRepNumber: "123456",
} as const;

// Main Services
export const SERVICES = {
  main: [
    {
      id: "home-loans",
      title: "Home Loans",
      description: "Competitive rates for owner-occupiers and investors",
      href: "/services/home-loans",
      icon: "Home",
    },
    {
      id: "personal-finance",
      title: "Personal Finance",
      description: "Car loans, personal loans, and debt consolidation",
      href: "/services/personal-finance",
      icon: "User",
    },
    {
      id: "commercial-finance",
      title: "Commercial Finance",
      description: "Business loans and commercial property finance",
      href: "/services/commercial-finance",
      icon: "Building",
    },
  ],
} as const;

// Helper function to generate common suburb services
function createSuburbServices(suburbName: string): SuburbService[] {
  return [
    {
      title: "First Home Buyer Loans",
      description: `Special rates for first-time buyers in ${suburbName}`,
    },
    {
      title: "Investment Property Loans",
      description: `Capitalize on ${suburbName}'s rental market potential`,
    },
    {
      title: "Refinancing",
      description: `Switch to better rates for your ${suburbName} property`,
    },
    {
      title: "Property Valuation",
      description: `Free property valuations for ${suburbName} homes`,
    },
  ];
}

// Helper function to generate common suburb page texts
function createSuburbPageTexts(): SuburbPageTexts {
  return {
    heroSubtitle: SERVICES.main[0].title, // Dynamically use first service (Home Loans)
    primaryCTAButton: "Get {suburb} Quote",
    secondaryCTAButton: "Call Our Team",
    marketInsightsTitle: "{suburb} Market Insights",
    marketInsightsSubtitle: "Current market data for {suburb}",
    medianPriceLabel: "Median House Price",
    growthLabel: "Annual Growth",
    populationLabel: "Population",
    featuresTitle: "Why Choose {suburb}?",
    featuresSubtitle: "What makes {suburb} a great place to live",
    servicesTitle: "{suburb} Finance Services",
    servicesSubtitle: "Specialized lending solutions for {suburb} residents",
    servicesCTAButton: "Get {suburb} Quote",
    nearbyAreasTitle: "Nearby {area} Areas",
    nearbyAreasSubtitle: "We also serve these surrounding areas",
    finalCTATitle: "Ready to Buy in {suburb}?",
    finalCTADescription:
      "Our {suburb} specialists are here to guide you through every step of the home buying process.",
    finalPrimaryCTA: "Start Your {suburb} Application",
    finalSecondaryCTA: "Contact Our {suburb} Team",
  };
}

export const areas: AreasData = {
  byId: {
    sydney: {
      id: "sydney",
      name: "Sydney",
      state: "NSW",
      displayName: "Sydney's Trusted Mortgage Experts",
      tagline: "Our Home Base",
      description:
        "Based in the heart of Sydney, we've been helping locals secure their dream homes and investment properties across all Sydney suburbs for over 15 years.",
      heroImage:
        "https://images.unsplash.com/photo-1717883560409-14adc1074f0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTU4NjE2ODd8MA&ixlib=rb-4.1.0&q=80&w=2070&utm_source=figma&utm_medium=referral",
      gradient: "from-blue-600 to-purple-600",
      phone: "Call Our Sydney Office",
      stats: {
        clients: "500+",
        loans: "$250M+",
        suburbs: "25+",
        rating: "4.9/5",
      },
      statsLabels: {
        clients: "Sydney Clients Served",
        loans: "In Sydney Home Loans",
        suburbs: "Sydney Suburbs Covered",
        rating: "Sydney Client Rating",
      },
      services: [
        {
          title: "First Home Buyer Assistance",
          description:
            "Navigate Sydney's competitive market with expert guidance",
          icon: "Home",
        },
        {
          title: "Investment Property Loans",
          description: "Capitalize on Sydney's strong rental market",
          icon: "Building",
        },
        {
          title: "Commercial Property Finance",
          description: "Secure prime Sydney commercial real estate",
          icon: "Building",
        },
        {
          title: "Refinancing Solutions",
          description:
            "Switch to better rates and save on your Sydney property",
          icon: "Star",
        },
      ],
      suburbs: [
        "sydney-cbd",
        "sydney-bondi",
        "sydney-manly",
        "sydney-chatswood",
      ],
      otherSuburbs: [
        "Hornsby",
        "Liverpool",
        "Bankstown",
        "Blacktown",
        "Campbelltown",
        "Sutherland",
      ],
      route: "/areas/sydney",
      office: {
        address: COMPANY_INFO.address,
        phone: COMPANY_INFO.phone,
        hours: "Mon-Fri: 9AM-6PM | Sat: 9AM-2PM",
      },
      marketInsights: {
        medianPrice: "$1.2M",
        loanRates: "from 5.99%*",
        grants: "Up to $25K",
      },
      pageTexts: {
        statsSubheading: "Our track record speaks for itself",
        servicesSubheading:
          "Local expertise for Sydney's unique property market",
        suburbsDescription:
          "From the CBD to the outer suburbs, we serve clients across Greater Sydney",
        featuredSuburbsTitle: "Featured Sydney Areas",
        otherSuburbsTitle: "Other Sydney Areas We Serve",
        suburbsCallout:
          "Don't see your suburb? We serve all of Greater Sydney!",
        officeTitle: "Visit Our Sydney Office",
        officeDescription:
          "Located in the heart of Sydney's business district, our team of local mortgage specialists is ready to help you navigate Sydney's property market.",
        ctaTitle: "Ready to Buy in Sydney?",
        ctaDescription:
          "Our Sydney-based experts are here to guide you through every step of the home buying process.",
        primaryCTA: "Start Your Sydney Application",
        secondaryCTA: "Call Our Sydney Team",
      },
    },
    melbourne: {
      id: "melbourne",
      name: "Melbourne",
      state: "VIC",
      displayName: "Melbourne Mortgage & Finance Experts",
      tagline: "Melbourne, Victoria",
      description:
        "Your trusted mortgage brokers serving Melbourne and surrounding suburbs. We understand Victoria's property market and help you secure the best home loan deals across Melbourne's diverse neighborhoods.",
      heroImage:
        "https://images.unsplash.com/photo-1545044846-351ba102b6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2070",
      gradient: "from-blue-600 to-purple-600",
      phone: COMPANY_INFO.phone,
      stats: {
        clients: "400+",
        loans: "$200M+",
        suburbs: "30+",
        rating: "4.9/5",
      },
      statsLabels: {
        clients: "Melbourne Clients Served",
        loans: "In Melbourne Home Loans",
        suburbs: "Melbourne Suburbs Covered",
        rating: "Melbourne Client Rating",
      },
      services: [
        {
          title: "First Home Buyer Melbourne",
          description: "Special programs for Melbourne first-time buyers",
          icon: "Home",
        },
        {
          title: "Melbourne Investment Loans",
          description: "Capitalize on Melbourne's rental market opportunities",
          icon: "Building",
        },
        {
          title: "Melbourne Refinancing",
          description: "Switch to better rates for your Melbourne property",
          icon: "Star",
        },
      ],
      suburbs: [
        "melbourne-cbd",
        "melbourne-south-yarra",
        "melbourne-brighton",
        "melbourne-richmond",
        "melbourne-st-kilda",
        "melbourne-docklands",
      ],
      otherSuburbs: [
        "Fitzroy",
        "Carlton",
        "Prahran",
        "Toorak",
        "Hawthorn",
        "Camberwell",
      ],
      route: "/areas/melbourne",
    },
    perth: {
      id: "perth",
      name: "Perth",
      state: "WA",
      displayName: "Perth Mortgage & Finance Specialists",
      tagline: "Perth, Western Australia",
      description:
        "Expert mortgage brokers serving Perth and WA suburbs. We understand the unique Western Australian property market and help you secure competitive home loan rates across Perth's growing regions.",
      heroImage:
        "https://images.unsplash.com/photo-1580014942344-ce423d2b885a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2070",
      gradient: "from-blue-600 to-purple-600",
      phone: COMPANY_INFO.phone,
      stats: {
        clients: "300+",
        loans: "$180M+",
        suburbs: "20+",
        rating: "4.8/5",
      },
      statsLabels: {
        clients: "Perth Clients Served",
        loans: "In Perth Home Loans",
        suburbs: "Perth Suburbs Covered",
        rating: "Perth Client Rating",
      },
      services: [
        {
          title: "Perth First Home Buyers",
          description: "Navigate WA's first home buyer incentives and grants",
          icon: "Home",
        },
        {
          title: "Perth Investment Properties",
          description: "Capitalize on Perth's mining boom and rental growth",
          icon: "Building",
        },
        {
          title: "Perth Refinancing",
          description: "Switch to better rates for your Perth property",
          icon: "Star",
        },
      ],
      suburbs: [
        "perth-cbd",
        "perth-fremantle",
        "perth-joondalup",
        "perth-subiaco",
        "perth-mandurah",
        "perth-rockingham",
      ],
      otherSuburbs: [
        "Scarborough",
        "Cottesloe",
        "Midland",
        "Armadale",
        "Kalamunda",
        "Wanneroo",
      ],
      route: "/areas/perth",
    },
    adelaide: {
      id: "adelaide",
      name: "Adelaide",
      state: "SA",
      displayName: "Adelaide Mortgage & Finance Experts",
      tagline: "Adelaide, South Australia",
      description:
        "Professional mortgage brokers serving Adelaide and surrounding SA regions. We help you navigate South Australia's property market with expert local knowledge and competitive home loan solutions.",
      heroImage:
        "https://images.unsplash.com/photo-1584417259164-370553879731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2070",
      gradient: "from-blue-600 to-purple-600",
      phone: COMPANY_INFO.phone,
      stats: {
        clients: "250+",
        loans: "$120M+",
        suburbs: "18+",
        rating: "4.8/5",
      },
      statsLabels: {
        clients: "Adelaide Clients Served",
        loans: "In Adelaide Home Loans",
        suburbs: "Adelaide Suburbs Covered",
        rating: "Adelaide Client Rating",
      },
      services: [
        {
          title: "Adelaide First Home Buyers",
          description: "Take advantage of SA's affordable property market",
          icon: "Home",
        },
        {
          title: "Adelaide Investment Loans",
          description: "Invest in Adelaide's steady growth market",
          icon: "Building",
        },
        {
          title: "Adelaide Refinancing",
          description: "Secure better rates for your Adelaide property",
          icon: "Star",
        },
      ],
      suburbs: ["adelaide-cbd", "adelaide-glenelg"],
      otherSuburbs: [
        "North Adelaide",
        "Burnside",
        "Unley",
        "Norwood",
        "Prospect",
        "Mitcham",
      ],
      route: "/areas/adelaide",
    },
  },
  allIds: ["sydney", "melbourne", "perth", "adelaide"],
};

export const suburbs: SuburbsData = {
  byId: {
    "sydney-cbd": {
      id: "sydney-cbd",
      areaId: "sydney",
      name: "Sydney CBD",
      slug: "cbd",
      description:
        "Experience city living at its finest in Sydney's bustling Central Business District. From luxury apartments to heritage properties, the CBD offers unparalleled lifestyle and investment opportunities.",
      medianPrice: "$1.8M",
      growth: "+5.2%",
      population: "17,252",
      features: [
        "World-class dining and entertainment",
        "Prime public transport connectivity",
        "Walking distance to major attractions",
        "High rental yields for investors",
        "24/7 vibrant city lifestyle",
        "Premium office spaces and business hubs",
      ],
      nearbySuburbs: ["The Rocks", "Darling Harbour", "Pyrmont", "Surry Hills"],
      imageQuery: "sydney city buildings",
      route: "/areas/sydney/suburbs/cbd",
      services: createSuburbServices("Sydney CBD"),
      pageTexts: createSuburbPageTexts(),
    },
    "sydney-bondi": {
      id: "sydney-bondi",
      areaId: "sydney",
      name: "Bondi",
      slug: "bondi",
      description:
        "Live the ultimate beach lifestyle in one of Sydney's most iconic coastal suburbs. Bondi offers premium beachside living with strong investment potential and global recognition.",
      medianPrice: "$2.1M",
      growth: "+3.8%",
      population: "11,647",
      features: [
        "World-famous Bondi Beach",
        "Vibrant cafe and restaurant scene",
        "Coastal walk to Coogee",
        "Strong tourism and rental market",
        "Boutique shopping strips",
        "Premium beachside lifestyle",
      ],
      nearbySuburbs: ["Bondi Junction", "Bronte", "Tamarama", "Waverley"],
      imageQuery: "bondi beach sydney",
      route: "/areas/sydney/suburbs/bondi",
      services: createSuburbServices("Bondi"),
      pageTexts: createSuburbPageTexts(),
    },
    "sydney-manly": {
      id: "sydney-manly",
      areaId: "sydney",
      name: "Manly",
      slug: "manly",
      description:
        "Enjoy the perfect balance of beach lifestyle and city accessibility. Manly offers stunning beaches, ferry connections to the CBD, and a relaxed coastal community atmosphere.",
      medianPrice: "$1.9M",
      growth: "+4.2%",
      population: "16,500",
      features: [
        "Beautiful beaches and surfing",
        "Ferry connection to CBD",
        "The Corso pedestrian mall",
        "Manly Sea Life Sanctuary nearby",
        "Strong tourist and rental market",
        "Relaxed beachside community",
      ],
      nearbySuburbs: ["Fairlight", "Balgowlah", "Seaforth", "Queenscliff"],
      imageQuery: "manly beach sydney",
      route: "/areas/sydney/suburbs/manly",
      services: createSuburbServices("Manly"),
      pageTexts: createSuburbPageTexts(),
    },
    "sydney-chatswood": {
      id: "sydney-chatswood",
      areaId: "sydney",
      name: "Chatswood",
      slug: "chatswood",
      description:
        "Experience the convenience of Chatswood's major shopping and transport hub. With excellent schools, diverse dining, and strong Asian community, it's perfect for families and professionals.",
      medianPrice: "$1.4M",
      growth: "+5.8%",
      population: "22,000",
      features: [
        "Major shopping and retail hub",
        "Excellent transport connections",
        "Top-rated schools nearby",
        "Diverse multicultural community",
        "Growing high-rise developments",
        "Strong rental and resale market",
      ],
      nearbySuburbs: ["Willoughby", "Artarmon", "Lane Cove", "Roseville"],
      imageQuery: "chatswood sydney shopping",
      route: "/areas/sydney/suburbs/chatswood",
      services: createSuburbServices("Chatswood"),
      pageTexts: createSuburbPageTexts(),
    },
    "melbourne-cbd": {
      id: "melbourne-cbd",
      areaId: "melbourne",
      name: "Melbourne CBD",
      slug: "cbd",
      description:
        "Experience the heart of Melbourne's business and cultural district. The CBD offers modern apartments, world-class dining, and unmatched convenience with excellent investment potential.",
      medianPrice: "$720K",
      growth: "+2.8%",
      population: "37,000",
      features: [
        "Heart of Melbourne's business district",
        "World-class dining and entertainment",
        "Excellent public transport connections",
        "Cultural attractions and events",
        "High rental yields",
        "Growing residential population",
      ],
      nearbySuburbs: ["Southbank", "Docklands", "Carlton", "East Melbourne"],
      imageQuery: "melbourne cbd skyline",
      route: "/areas/melbourne/suburbs/cbd",
      services: createSuburbServices("Melbourne CBD"),
      pageTexts: createSuburbPageTexts(),
    },
    "melbourne-south-yarra": {
      id: "melbourne-south-yarra",
      areaId: "melbourne",
      name: "South Yarra",
      slug: "south-yarra",
      description:
        "Live in Melbourne's most prestigious and fashionable suburb. South Yarra combines luxury shopping, fine dining, and elegant heritage architecture with excellent tram connections.",
      medianPrice: "$950K",
      growth: "+3.2%",
      population: "22,000",
      features: [
        "Melbourne's most prestigious suburb",
        "Chapel Street shopping and dining",
        "Heritage architecture and character",
        "Excellent tram connections",
        "Royal Botanic Gardens nearby",
        "High-end rental market",
      ],
      nearbySuburbs: ["Toorak", "Prahran", "Richmond", "Windsor"],
      imageQuery: "south yarra melbourne chapel street",
      route: "/areas/melbourne/suburbs/south-yarra",
      services: createSuburbServices("South Yarra"),
      pageTexts: createSuburbPageTexts(),
    },
    "melbourne-brighton": {
      id: "melbourne-brighton",
      areaId: "melbourne",
      name: "Brighton",
      slug: "brighton",
      description:
        "Enjoy Melbourne's premier beachside lifestyle in Brighton. This prestigious suburb offers beautiful beaches, heritage homes, and excellent schools, making it perfect for families and investors.",
      medianPrice: "$1.3M",
      growth: "+2.5%",
      population: "23,000",
      features: [
        "Premier beachside location",
        "Iconic Brighton Beach boxes",
        "Excellent private schools",
        "Heritage homes and character",
        "Bay Street shopping strip",
        "Strong family market",
      ],
      nearbySuburbs: ["Hampton", "Sandringham", "Bentleigh", "Brighton East"],
      imageQuery: "brighton melbourne beach boxes",
      route: "/areas/melbourne/suburbs/brighton",
      services: createSuburbServices("Brighton"),
      pageTexts: createSuburbPageTexts(),
    },
    "melbourne-richmond": {
      id: "melbourne-richmond",
      areaId: "melbourne",
      name: "Richmond",
      slug: "richmond",
      description:
        "Experience Richmond's vibrant inner-city lifestyle. Known for its eclectic mix of old and new, Richmond offers trendy bars, restaurants, and converted warehouses with easy CBD access.",
      medianPrice: "$840K",
      growth: "+4.1%",
      population: "26,000",
      features: [
        "Trendy inner-city lifestyle",
        "Vibrant bar and restaurant scene",
        "Converted warehouse apartments",
        "Bridge Road shopping strip",
        "Close to MCG and sports precinct",
        "Strong rental demand",
      ],
      nearbySuburbs: ["Collingwood", "Fitzroy", "Cremorne", "South Yarra"],
      imageQuery: "richmond melbourne inner city",
      route: "/areas/melbourne/suburbs/richmond",
      services: createSuburbServices("Richmond"),
      pageTexts: createSuburbPageTexts(),
    },
    "melbourne-st-kilda": {
      id: "melbourne-st-kilda",
      areaId: "melbourne",
      name: "St Kilda",
      slug: "st-kilda",
      description:
        "Live Melbourne's bohemian beachside culture in St Kilda. Famous for its pier, foreshore, and vibrant nightlife, St Kilda offers unique character and strong investment opportunities.",
      medianPrice: "$730K",
      growth: "+3.7%",
      population: "19,000",
      features: [
        "Iconic St Kilda Pier and beach",
        "Vibrant arts and music scene",
        "Acland Street cake shops",
        "Luna Park entertainment",
        "Bohemian beachside culture",
        "Strong tourism rental market",
      ],
      nearbySuburbs: ["St Kilda East", "Elwood", "Balaclava", "Windsor"],
      imageQuery: "st kilda melbourne pier",
      route: "/areas/melbourne/suburbs/st-kilda",
      services: createSuburbServices("St Kilda"),
      pageTexts: createSuburbPageTexts(),
    },
    "melbourne-docklands": {
      id: "melbourne-docklands",
      areaId: "melbourne",
      name: "Docklands",
      slug: "docklands",
      description:
        "Experience modern waterfront living in Melbourne's newest urban precinct. Docklands offers contemporary apartments, shopping, and entertainment with spectacular harbor views and city convenience.",
      medianPrice: "$650K",
      growth: "+1.9%",
      population: "15,000",
      features: [
        "Modern waterfront precinct",
        "Contemporary apartment living",
        "Harbor Town shopping outlet",
        "Waterfront dining and entertainment",
        "Close to CBD and transport",
        "Growing residential community",
      ],
      nearbySuburbs: [
        "Melbourne CBD",
        "West Melbourne",
        "Port Melbourne",
        "Southbank",
      ],
      imageQuery: "docklands melbourne waterfront",
      route: "/areas/melbourne/suburbs/docklands",
      services: createSuburbServices("Docklands"),
      pageTexts: createSuburbPageTexts(),
    },
    "perth-cbd": {
      id: "perth-cbd",
      areaId: "perth",
      name: "Perth CBD",
      slug: "cbd",
      description:
        "Live in the heart of Western Australia's business capital. Perth CBD offers modern apartments, riverside parks, and vibrant city life with easy access to beaches and business districts.",
      medianPrice: "$550K",
      growth: "+3.5%",
      population: "21,000",
      features: [
        "Heart of WA business district",
        "Swan River and Kings Park nearby",
        "Growing apartment market",
        "Excellent transport connections",
        "Vibrant nightlife and dining",
        "Strong rental yields",
      ],
      nearbySuburbs: ["Northbridge", "West Perth", "East Perth", "South Perth"],
      imageQuery: "perth cbd skyline swan river",
      route: "/areas/perth/suburbs/cbd",
      services: createSuburbServices("Perth CBD"),
      pageTexts: createSuburbPageTexts(),
    },
    "perth-fremantle": {
      id: "perth-fremantle",
      areaId: "perth",
      name: "Fremantle",
      slug: "fremantle",
      description:
        "Discover the historic charm and vibrant culture of Fremantle. This port city offers heritage architecture, bustling markets, and coastal lifestyle with excellent growth prospects.",
      medianPrice: "$720K",
      growth: "+5.1%",
      population: "29,000",
      features: [
        "Historic port city charm",
        "Fremantle Markets and cafe culture",
        "Beautiful heritage architecture",
        "Close to beaches and harbor",
        "Strong tourism and rental market",
        "Arts and cultural hub",
      ],
      nearbySuburbs: [
        "South Fremantle",
        "White Gum Valley",
        "Beaconsfield",
        "Hamilton Hill",
      ],
      imageQuery: "fremantle perth historic",
      route: "/areas/perth/suburbs/fremantle",
      services: createSuburbServices("Fremantle"),
      pageTexts: createSuburbPageTexts(),
    },
    "perth-joondalup": {
      id: "perth-joondalup",
      areaId: "perth",
      name: "Joondalup",
      slug: "joondalup",
      description:
        "Experience the convenience of Perth's northern business hub. Joondalup offers modern amenities, excellent transport, and proximity to beautiful northern beaches with strong growth potential.",
      medianPrice: "$520K",
      growth: "+4.8%",
      population: "33,000",
      features: [
        "Major northern business hub",
        "Modern shopping and facilities",
        "Train line to Perth CBD",
        "Close to northern beaches",
        "ECU Joondalup campus nearby",
        "Growing family community",
      ],
      nearbySuburbs: ["Currambine", "Iluka", "Burns Beach", "Kinross"],
      imageQuery: "joondalup perth business district",
      route: "/areas/perth/suburbs/joondalup",
      services: createSuburbServices("Joondalup"),
      pageTexts: createSuburbPageTexts(),
    },
    "perth-subiaco": {
      id: "perth-subiaco",
      areaId: "perth",
      name: "Subiaco",
      slug: "subiaco",
      description:
        "Live in Perth's trendy inner-western suburb known for its vibrant cafe culture, boutique shopping, and proximity to the city. Subiaco offers character homes and modern apartments with excellent amenities.",
      medianPrice: "$680K",
      growth: "+3.9%",
      population: "19,000",
      features: [
        "Trendy inner-western suburb",
        "Vibrant Rokeby Road dining",
        "Subiaco Oval entertainment",
        "Character homes and modern apartments",
        "Close to Perth CBD",
        "Strong rental market",
      ],
      nearbySuburbs: ["West Perth", "Shenton Park", "Daglish", "Nedlands"],
      imageQuery: "subiaco perth rokeby road",
      route: "/areas/perth/suburbs/subiaco",
      services: createSuburbServices("Subiaco"),
      pageTexts: createSuburbPageTexts(),
    },
    "perth-mandurah": {
      id: "perth-mandurah",
      areaId: "perth",
      name: "Mandurah",
      slug: "mandurah",
      description:
        "Enjoy relaxed coastal living in Western Australia's premier waterfront city. Mandurah offers beautiful waterways, recreational boating, and affordable family lifestyle with growing popularity.",
      medianPrice: "$480K",
      growth: "+6.2%",
      population: "84,000",
      features: [
        "Premier waterfront city",
        "Beautiful waterways and canals",
        "Recreational boating lifestyle",
        "Affordable family living",
        "Growing retirement community",
        "Strong tourism market",
      ],
      nearbySuburbs: ["Halls Head", "Dawesville", "Greenfields", "Falcon"],
      imageQuery: "mandurah perth waterfront canals",
      route: "/areas/perth/suburbs/mandurah",
      services: createSuburbServices("Mandurah"),
      pageTexts: createSuburbPageTexts(),
    },
    "perth-rockingham": {
      id: "perth-rockingham",
      areaId: "perth",
      name: "Rockingham",
      slug: "rockingham",
      description:
        "Discover affordable coastal living south of Perth. Rockingham offers beautiful beaches, growing infrastructure, and excellent value for families and first home buyers in Perth's expanding corridor.",
      medianPrice: "$450K",
      growth: "+7.3%",
      population: "109,000",
      features: [
        "Affordable coastal living",
        "Beautiful beaches and bays",
        "Growing infrastructure investment",
        "Family-friendly community",
        "Excellent value for money",
        "Strong growth corridor",
      ],
      nearbySuburbs: [
        "Safety Bay",
        "Warnbro",
        "Port Kennedy",
        "Secret Harbour",
      ],
      imageQuery: "rockingham perth beach coastal",
      route: "/areas/perth/suburbs/rockingham",
      services: createSuburbServices("Rockingham"),
      pageTexts: createSuburbPageTexts(),
    },
    "adelaide-cbd": {
      id: "adelaide-cbd",
      areaId: "adelaide",
      name: "Adelaide CBD",
      slug: "cbd",
      description:
        "Experience the heart of South Australia's capital city. Adelaide CBD offers elegant heritage architecture, world-class dining, and convenient city living with excellent value compared to other capitals.",
      medianPrice: "$420K",
      growth: "+2.1%",
      population: "25,000",
      features: [
        "Elegant heritage architecture",
        "World-class dining scene",
        "Free city circle tram",
        "Central Market nearby",
        "Adelaide Festival Centre",
        "Excellent value for capital city",
      ],
      nearbySuburbs: ["North Adelaide", "Parklands", "Kent Town", "Thebarton"],
      imageQuery: "adelaide cbd heritage architecture",
      route: "/areas/adelaide/suburbs/cbd",
      services: createSuburbServices("Adelaide CBD"),
      pageTexts: createSuburbPageTexts(),
    },
    "adelaide-glenelg": {
      id: "adelaide-glenelg",
      areaId: "adelaide",
      name: "Glenelg",
      slug: "glenelg",
      description:
        "Enjoy Adelaide's premier beachside lifestyle in historic Glenelg. Famous for its jetty, beach, and tram connection to the city, Glenelg offers relaxed coastal living with strong rental appeal.",
      medianPrice: "$620K",
      growth: "+3.4%",
      population: "15,500",
      features: [
        "Historic beachside suburb",
        "Famous Glenelg Jetty and beach",
        "Direct tram to Adelaide CBD",
        "Jetty Road shopping strip",
        "Strong tourism and rental market",
        "Relaxed coastal lifestyle",
      ],
      nearbySuburbs: [
        "Glenelg North",
        "Glenelg South",
        "Brighton",
        "Somerton Park",
      ],
      imageQuery: "glenelg adelaide beach jetty",
      route: "/areas/adelaide/suburbs/glenelg",
      services: createSuburbServices("Glenelg"),
      pageTexts: createSuburbPageTexts(),
    },
  },
  allIds: [
    "sydney-cbd",
    "sydney-bondi",
    "sydney-manly",
    "sydney-chatswood",
    "melbourne-cbd",
    "melbourne-south-yarra",
    "melbourne-brighton",
    "melbourne-richmond",
    "melbourne-st-kilda",
    "melbourne-docklands",
    "perth-cbd",
    "perth-fremantle",
    "perth-joondalup",
    "perth-subiaco",
    "perth-mandurah",
    "perth-rockingham",
    "adelaide-cbd",
    "adelaide-glenelg",
  ],
};

// Helper functions to work with the normalized data
export const getAreaById = (areaId: string): Area | undefined =>
  areas.byId[areaId];
export const getSuburbById = (suburbId: string): Suburb | undefined =>
  suburbs.byId[suburbId];
export const getSuburbsByAreaId = (areaId: string): Suburb[] => {
  return (
    areas.byId[areaId]?.suburbs?.map((suburbId) => suburbs.byId[suburbId]) || []
  );
};
export const getAllAreas = (): Area[] =>
  areas.allIds.map((id) => areas.byId[id]);
export const getAllSuburbs = (): Suburb[] =>
  suburbs.allIds.map((id) => suburbs.byId[id]);

// Route helpers
export const getAreaRoute = (areaId: string): string | undefined =>
  areas.byId[areaId]?.route;
export const getSuburbRoute = (suburbId: string): string | undefined =>
  suburbs.byId[suburbId]?.route;

// Get major suburbs for an area with name and route info
export const getMajorSuburbsForArea = (
  areaId: string
): Array<{ name: string; route: string }> => {
  const area = areas.byId[areaId];
  if (!area?.suburbs) return [];

  return area.suburbs
    .map((suburbId) => {
      const suburb = suburbs.byId[suburbId];
      return {
        name: suburb?.name || suburbId,
        route: suburb?.route || `/areas/${areaId}/suburbs/${suburbId}`,
      };
    })
    .filter(Boolean);
};

// ===== DERIVED VALUES (NO DUPLICATION) =====
// These functions ensure single source of truth by deriving data from base constants

// Derive navigation from base data
export const getDerivedNavigation = () => ({
  main: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "#",
      dropdown: SERVICES.main.map((service) => ({
        label: service.title,
        href: service.href,
      })),
    },
    {
      label: "Areas",
      href: "#",
      dropdown: areas.allIds.map((areaId) => {
        const area = areas.byId[areaId];
        return { label: area.name, href: `/areas/${areaId}` };
      }),
    },
    { label: "Calculator", href: "/calculator" },
    { label: "Contact", href: "#contact", isScroll: true },
    { label: "About", href: "#about", isScroll: true },
  ],
  footer: {
    sections: [
      {
        title: "Services",
        links: [
          ...SERVICES.main.map((service) => ({
            label: service.title,
            href: service.href,
          })),
          { label: "Loan Calculator", href: "/calculator" },
        ],
      },
      {
        title: "Areas We Serve",
        links: areas.allIds.map((areaId) => {
          const area = areas.byId[areaId];
          return { label: area.name, href: `/areas/${areaId}` };
        }),
      },
      {
        title: "Resources",
        links: [
          { label: "First Home Buyer Guide", href: "#" },
          { label: "Investment Property Tips", href: "#" },
          { label: "Refinancing Guide", href: "#" },
          { label: "Market Updates", href: "#" },
        ],
      },
    ],
  },
});

// Derive hero content for areas
export const getDerivedAreaHero = (areaName: string) => ({
  heroTitle: `${areaName} Mortgage Brokers`,
  heroSubtitle: SERVICES.main[0].title, // Dynamically use first service (Home Loans)
  heroDescription: `Get expert mortgage advice and competitive home loan rates in ${areaName}. Our experienced brokers help you secure the best deal for your property investment.`,
});

// Derive area statistics
export const getDerivedAreaStats = (areaName: string) => ({
  experience: "15+",
  experienceLabel: "Years Experience",
  loans: `In ${areaName} Home Loans`,
  suburbs: "25+",
  suburbsLabel: `${areaName} Suburbs Covered`,
});

// Derive area services
export const getDerivedAreaServices = (areaName: string) => [
  {
    title: `${areaName} Home Loans`,
    description: `First home buyers, refinancing, and investment loans in ${areaName}`,
    icon: "Home",
  },
  {
    title: `${areaName} Refinancing`,
    description: `Switch to better rates and save on your ${areaName} property`,
    icon: "Star",
  },
];

// Derive area display names and descriptions
export const getDerivedAreaInfo = (areaName: string) => ({
  displayName: `${areaName} ${COMPANY_INFO.tagline} Experts`,
  description: `Expert mortgage brokers serving ${areaName} and surrounding suburbs. We understand the unique property market and help you secure competitive home loan rates across ${areaName}'s diverse neighborhoods.`,
});

// Derive suburb-specific content
export const getDerivedSuburbInfo = (suburbName: string, areaName: string) => ({
  heroTitle: `${suburbName} Mortgage Brokers`,
  heroDescription: `Get expert mortgage advice and competitive home loan rates in ${suburbName}, ${areaName}. Our experienced brokers help you secure the best deal for your property investment.`,
  aboutTitle: `About ${suburbName}`,
  aboutDescription: `${suburbName} is a vibrant suburb in ${areaName}, offering excellent property investment opportunities and lifestyle benefits for residents.`,
});

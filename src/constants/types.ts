// TypeScript definitions for the common data structure

export interface AreaStats {
  clients: string;
  loans: string;
  suburbs: string;
  rating: string;
}

export interface AreaStatsLabels {
  clients: string;
  loans: string;
  suburbs: string;
  rating: string;
}

export interface AreaService {
  title: string;
  description: string;
  icon?: string; // Optional icon identifier for UI components
}

export interface AreaOffice {
  address: string;
  phone: string;
  hours: string;
}

export interface AreaMarketInsights {
  medianPrice: string;
  loanRates: string;
  grants: string;
}

export interface AreaPageTexts {
  statsSubheading: string;
  servicesSubheading: string;
  suburbsDescription: string;
  featuredSuburbsTitle: string;
  otherSuburbsTitle: string;
  suburbsCallout: string;
  officeTitle: string;
  officeDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export interface SuburbService {
  title: string;
  description: string;
}

export interface SuburbPageTexts {
  heroSubtitle: string;
  primaryCTAButton: string;
  secondaryCTAButton: string;
  marketInsightsTitle: string;
  marketInsightsSubtitle: string;
  medianPriceLabel: string;
  growthLabel: string;
  populationLabel: string;
  featuresTitle: string;
  featuresSubtitle: string;
  servicesTitle: string;
  servicesSubtitle: string;
  servicesCTAButton: string;
  nearbyAreasTitle: string;
  nearbyAreasSubtitle: string;
  finalCTATitle: string;
  finalCTADescription: string;
  finalPrimaryCTA: string;
  finalSecondaryCTA: string;
}

export interface Area {
  id: string;
  name: string;
  state: string;
  displayName: string;
  tagline: string;
  description: string;
  heroImage: string;
  gradient: string;
  accentColor: string;
  phone: string;
  stats: AreaStats;
  statsLabels: AreaStatsLabels;
  services: AreaService[];
  suburbs: string[];
  otherSuburbs: string[];
  route: string;
  office?: AreaOffice;
  marketInsights?: AreaMarketInsights;
  pageTexts?: AreaPageTexts;
}

export interface Suburb {
  id: string;
  areaId: string;
  name: string;
  slug: string;
  description: string;
  medianPrice: string;
  growth: string;
  population: string;
  features: string[];
  nearbySuburbs: string[];
  imageQuery: string;
  route: string;
  services?: SuburbService[];
  pageTexts?: SuburbPageTexts;
}

export interface AreasData {
  byId: Record<string, Area>;
  allIds: string[];
}

export interface SuburbsData {
  byId: Record<string, Suburb>;
  allIds: string[];
}

// Type definitions for helper functions
export type GetAreaById = (areaId: string) => Area | undefined;
export type GetSuburbById = (suburbId: string) => Suburb | undefined;
export type GetSuburbsByAreaId = (areaId: string) => Suburb[];
export type GetAllAreas = () => Area[];
export type GetAllSuburbs = () => Suburb[];
export type GetAreaRoute = (areaId: string) => string | undefined;
export type GetSuburbRoute = (suburbId: string) => string | undefined;

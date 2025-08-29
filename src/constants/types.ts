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

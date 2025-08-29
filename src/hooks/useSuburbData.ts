import { areas, suburbs } from "@/constants/common";
import type { Area, Suburb } from "@/constants/types";

interface UseSuburbDataResult {
  suburb: Suburb | undefined;
  parentArea: Area | undefined;
  nearbySuburbs: string[];
}

/**
 * Hook to get suburb data for a specific suburb page
 * @param suburbId - The ID of the suburb
 * @returns Object containing suburb data, parent area, and nearby suburbs
 */
export const useSuburbData = (suburbId: string): UseSuburbDataResult => {
  const suburb = suburbs.byId[suburbId];
  const parentArea = suburb ? areas.byId[suburb.areaId] : undefined;

  return {
    suburb,
    parentArea,
    nearbySuburbs: suburb?.nearbySuburbs || [],
  };
};

import { getAreaById, getSuburbsByAreaId, suburbs } from "@/constants/common";
import type { Area, Suburb } from "@/constants/types";

interface UseAreaDataResult {
  area: Area | undefined;
  suburbs: Suburb[];
  majorSuburbs: Suburb[];
  otherSuburbs: string[];
}

/**
 * Hook to get area data for a specific area page
 * @param areaId - The ID of the area
 * @returns Object containing area data, suburbs, major suburbs, and other suburbs
 */
export const useAreaData = (areaId: string): UseAreaDataResult => {
  const area = getAreaById(areaId);
  const areaSuburbs = getSuburbsByAreaId(areaId);

  return {
    area,
    suburbs: areaSuburbs,
    majorSuburbs:
      area?.suburbs
        ?.map((suburbId) => suburbs.byId[suburbId])
        .filter(Boolean) || [],
    otherSuburbs: area?.otherSuburbs || [],
  };
};

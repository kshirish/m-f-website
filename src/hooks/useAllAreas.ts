import { getAllAreas } from "@/constants/common";
import type { Area } from "@/constants/types";

/**
 * Hook to get all areas for navigation menu or listing
 * @returns Array of all areas
 */
export const useAllAreas = (): Area[] => {
  return getAllAreas();
};

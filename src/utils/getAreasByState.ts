import { getAllAreas } from "@/constants/common";
import type { Area } from "@/constants/types";

/**
 * Get areas filtered by state
 * @param state - The state code to filter by (e.g., 'NSW', 'VIC', 'WA', 'SA')
 * @returns Array of areas in the specified state
 */
export const getAreasByState = (state: string): Area[] => {
  return getAllAreas().filter((area) => area.state === state);
};

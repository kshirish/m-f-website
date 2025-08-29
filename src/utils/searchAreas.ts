import { getAllAreas } from "@/constants/common";
import type { Area } from "@/constants/types";

/**
 * Search areas by query string
 * @param query - Search term to match against area name, display name, or description
 * @returns Array of matching areas
 */
export const searchAreas = (query: string): Area[] => {
  const searchTerm = query.toLowerCase();
  return getAllAreas().filter(
    (area) =>
      area.name.toLowerCase().includes(searchTerm) ||
      area.displayName.toLowerCase().includes(searchTerm) ||
      area.description.toLowerCase().includes(searchTerm)
  );
};

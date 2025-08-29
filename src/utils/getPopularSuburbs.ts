import { suburbs } from "@/constants/common";
import type { Suburb } from "@/constants/types";

/**
 * Get popular suburbs sorted by growth rate
 * @param limit - Maximum number of suburbs to return (default: 5)
 * @returns Array of suburbs sorted by growth rate in descending order
 */
export const getPopularSuburbs = (limit: number = 5): Suburb[] => {
  return suburbs.allIds
    .map((id) => suburbs.byId[id])
    .sort((a, b) => {
      const growthA = parseFloat(a.growth.replace("+", "").replace("%", ""));
      const growthB = parseFloat(b.growth.replace("+", "").replace("%", ""));
      return growthB - growthA;
    })
    .slice(0, limit);
};

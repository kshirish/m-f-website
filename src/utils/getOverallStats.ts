import { getAllAreas, suburbs } from "@/constants/common";

interface OverallStats {
  totalAreas: number;
  totalSuburbs: number;
  totalClients: number;
  totalLoans: number;
}

/**
 * Get overall statistics for dashboard display
 * @returns Object containing aggregated statistics across all areas
 */
export const getOverallStats = (): OverallStats => {
  const allAreas = getAllAreas();

  return {
    totalAreas: allAreas.length,
    totalSuburbs: suburbs.allIds.length,
    totalClients: allAreas.reduce((sum, area) => {
      const clientCount = parseInt(area.stats.clients.replace("+", ""));
      return sum + clientCount;
    }, 0),
    totalLoans: allAreas.reduce((sum, area) => {
      const loanAmount = parseInt(
        area.stats.loans.replace("$", "").replace("M+", "")
      );
      return sum + loanAmount;
    }, 0),
  };
};

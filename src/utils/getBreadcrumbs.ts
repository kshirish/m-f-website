import { getAreaById, suburbs } from "@/constants/common";

interface Breadcrumb {
  label: string;
  href: string;
}

/**
 * Generate breadcrumb navigation for area and suburb pages
 * @param areaId - The area ID
 * @param suburbId - Optional suburb ID
 * @returns Array of breadcrumb objects with label and href
 */
export const getBreadcrumbs = (
  areaId: string,
  suburbId?: string | null
): Breadcrumb[] => {
  const breadcrumbs: Breadcrumb[] = [
    { label: "Home", href: "/" },
    { label: "Areas", href: "/areas" },
  ];

  if (areaId) {
    const area = getAreaById(areaId);
    if (area) {
      breadcrumbs.push({ label: area.name, href: area.route });
    }
  }

  if (suburbId) {
    const suburb = suburbs.byId[suburbId];
    if (suburb) {
      breadcrumbs.push({ label: suburb.name, href: suburb.route });
    }
  }

  return breadcrumbs;
};

import React, { lazy } from "react";
import { Route } from "react-router-dom";
import { areas, suburbs } from "@/constants/common";

/**
 * RouteFactory Component
 *
 * This factory component dynamically generates React Router routes for all areas and suburbs
 * based on the data structure defined in @/constants/common.ts. This eliminates the need
 * to manually maintain route definitions and ensures all areas and suburbs from the data
 * constants are automatically routed.
 *
 * Benefits:
 * - Automatically syncs routes with data constants
 * - Reduces manual maintenance of route definitions
 * - Enables lazy loading of components for better performance
 * - Provides centralized route management
 */

// Lazy load components for better performance and code splitting
const SydneyPage = lazy(() => import("@/pages/areas/sydney"));
const MelbournePage = lazy(() => import("@/pages/areas/melbourne"));
const PerthPage = lazy(() => import("@/pages/areas/perth"));
const AdelaidePage = lazy(() => import("@/pages/areas/adelaide"));
const PenrithAreaPage = lazy(() => import("@/pages/areas/penrith"));
const ParramattaAreaPage = lazy(() => import("@/pages/areas/parramatta"));

// Sydney Suburb Pages
const SydneyCBDPage = lazy(() => import("@/pages/areas/sydney/suburbs/cbd"));
const SydneyParramattaPage = lazy(
  () => import("@/pages/areas/sydney/suburbs/parramatta")
);
const SydneyPenrithPage = lazy(
  () => import("@/pages/areas/sydney/suburbs/penrith")
);
const BondiPage = lazy(() => import("@/pages/areas/sydney/suburbs/bondi"));
const ManlyPage = lazy(() => import("@/pages/areas/sydney/suburbs/manly"));
const ChatswoodPage = lazy(
  () => import("@/pages/areas/sydney/suburbs/chatswood")
);

// Perth Suburb Pages
const PerthCBDPage = lazy(() => import("@/pages/areas/perth/suburbs/cbd"));
const FremantlePage = lazy(
  () => import("@/pages/areas/perth/suburbs/fremantle")
);
const JoondalupPage = lazy(
  () => import("@/pages/areas/perth/suburbs/joondalup")
);
const SubiacoPage = lazy(() => import("@/pages/areas/perth/suburbs/subiaco"));
const MandurahPage = lazy(() => import("@/pages/areas/perth/suburbs/mandurah"));
const RockinghamPage = lazy(
  () => import("@/pages/areas/perth/suburbs/rockingham")
);

// Melbourne Suburb Pages
const MelbourneCBDPage = lazy(
  () => import("@/pages/areas/melbourne/suburbs/cbd")
);
const SouthYarraPage = lazy(
  () => import("@/pages/areas/melbourne/suburbs/south-yarra")
);
const BrightonPage = lazy(
  () => import("@/pages/areas/melbourne/suburbs/brighton")
);
const RichmondPage = lazy(
  () => import("@/pages/areas/melbourne/suburbs/richmond")
);
const StKildaPage = lazy(
  () => import("@/pages/areas/melbourne/suburbs/st-kilda")
);
const DocklandsPage = lazy(
  () => import("@/pages/areas/melbourne/suburbs/docklands")
);

// Adelaide Suburb Pages
const AdelaideCBDPage = lazy(
  () => import("@/pages/areas/adelaide/suburbs/cbd")
);
const GlenelgPage = lazy(
  () => import("@/pages/areas/adelaide/suburbs/glenelg")
);

// Component mapping for areas - maps area IDs to their respective page components
const areaComponents: Record<string, React.ComponentType> = {
  sydney: SydneyPage,
  melbourne: MelbournePage,
  perth: PerthPage,
  adelaide: AdelaidePage,
  penrith: PenrithAreaPage,
  parramatta: ParramattaAreaPage,
};

// Component mapping for suburbs - maps suburb IDs to their respective page components
const suburbComponents: Record<string, React.ComponentType> = {
  "sydney-cbd": SydneyCBDPage,
  parramatta: SydneyParramattaPage,
  penrith: SydneyPenrithPage,
  bondi: BondiPage,
  manly: ManlyPage,
  chatswood: ChatswoodPage,
  "perth-cbd": PerthCBDPage,
  fremantle: FremantlePage,
  joondalup: JoondalupPage,
  subiaco: SubiacoPage,
  mandurah: MandurahPage,
  rockingham: RockinghamPage,
  "melbourne-cbd": MelbourneCBDPage,
  "south-yarra": SouthYarraPage,
  brighton: BrightonPage,
  richmond: RichmondPage,
  "st-kilda": StKildaPage,
  docklands: DocklandsPage,
  "adelaide-cbd": AdelaideCBDPage,
  glenelg: GlenelgPage,
};

/**
 * Generate routes for all areas dynamically from constants
 */
export const generateAreaRoutes = (): React.ReactElement[] => {
  return areas.allIds
    .map((areaId) => {
      const area = areas.byId[areaId];
      const Component = areaComponents[areaId];

      if (!Component) {
        console.warn(`No component found for area: ${areaId}`);
        return null;
      }

      return (
        <Route
          key={`area-${areaId}`}
          path={area.route}
          element={<Component />}
        />
      );
    })
    .filter(Boolean) as React.ReactElement[];
};

/**
 * Generate routes for all suburbs dynamically from constants
 */
export const generateSuburbRoutes = (): React.ReactElement[] => {
  return suburbs.allIds
    .map((suburbId) => {
      const suburb = suburbs.byId[suburbId];
      const Component = suburbComponents[suburbId];

      if (!Component) {
        console.warn(`No component found for suburb: ${suburbId}`);
        return null;
      }

      return (
        <Route
          key={`suburb-${suburbId}`}
          path={suburb.route}
          element={<Component />}
        />
      );
    })
    .filter(Boolean) as React.ReactElement[];
};

/**
 * RouteFactory component that generates all area and suburb routes
 */
export const RouteFactory: React.FC = () => {
  return (
    <>
      {generateAreaRoutes()}
      {generateSuburbRoutes()}
    </>
  );
};

export default RouteFactory;

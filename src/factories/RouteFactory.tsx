import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { areas, suburbs } from "@/constants/common";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Calculator from "@/pages/calculator";

// Service Pages
import HomeLoansPage from "@/pages/services/home-loans";
import PersonalFinancePage from "@/pages/services/personal-finance";
import CommercialFinancePage from "@/pages/services/commercial-finance";

// Lazy load components for better performance and code splitting
const SydneyPage = lazy(() => import("@/pages/areas/sydney"));
const MelbournePage = lazy(() => import("@/pages/areas/melbourne"));
const PerthPage = lazy(() => import("@/pages/areas/perth"));
const AdelaidePage = lazy(() => import("@/pages/areas/adelaide"));

// Sydney Suburb Pages
const SydneyCBDPage = lazy(() => import("@/pages/areas/sydney/suburbs/cbd"));
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
};

// Component mapping for suburbs - maps suburb IDs to their respective page components
const suburbComponents: Record<string, React.ComponentType> = {
  "sydney-cbd": SydneyCBDPage,
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
    <Routes>
      {/* Home routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      {/* Service routes */}
      <Route path="/services" element={<Home />} />
      <Route path="/services/home-loans" element={<HomeLoansPage />} />
      <Route
        path="/services/personal-finance"
        element={<PersonalFinancePage />}
      />
      <Route
        path="/services/commercial-finance"
        element={<CommercialFinancePage />}
      />

      {/* Dynamically generated area and suburb routes */}
      {generateAreaRoutes()}
      {generateSuburbRoutes()}

      {/* Tool routes */}
      <Route path="/calculator" element={<Calculator />} />

      {/* About and Contact routes */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RouteFactory;

import { Suspense } from "react";

// Route Factory for dynamic route generation
import RouteFactory from "@/factories/RouteFactory";

import Header from "./Header";
import Footer from "./Footer";

// Router context for navigation (legacy support)
export const RouterContext = {
  navigate: (path: string) => {
    // For components that haven't been updated yet
    window.location.href = path;
  },
  scrollToContact: () => {
    const pathname = window.location.pathname;
    if (pathname === "/" || pathname === "/home") {
      // If we're on home page, scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      window.location.href = "/";
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  },
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <RouteFactory />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

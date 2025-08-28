import About from "@/pages/about";
import Contact from "@/pages/contact";

import Hero from "./Hero";
import Services from "./Services";
import ServiceAreas from "./ServiceAreas";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ServiceAreas />
      <About />
      <Contact />
    </>
  );
}

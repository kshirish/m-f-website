"use client";

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServiceAreas from "./components/ServiceAreas";

export default function HomePage() {
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

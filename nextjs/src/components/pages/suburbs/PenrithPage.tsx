'use client';import SydneySuburbPage from "../SydneySuburbPage";

export default function PenrithPage() {
  return (
    <SydneySuburbPage
      suburb="Penrith"
      description="Embrace the perfect blend of city convenience and natural beauty at the foothills of the Blue Mountains. Penrith offers affordable housing with strong growth potential and family-friendly living."
      medianPrice="$785K"
      growth="+12.4%"
      population="15,066"
      features={[
        "Close to Blue Mountains National Park",
        "Major retail and entertainment hubs",
        "Affordable entry-level properties",
        "Strong population growth",
        "Excellent schools and facilities",
        "Gateway to Western Sydney"
      ]}
      nearbySuburbs={["St Marys", "Kingswood", "Emu Plains", "Cambridge Park"]}
      imageQuery="penrith sydney mountains"
    />
  );
}
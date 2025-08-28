'use client';import SydneySuburbPage from "../SydneySuburbPage";

export default function ParramattaPage() {
  return (
    <SydneySuburbPage
      suburb="Parramatta"
      description="Discover Western Sydney's thriving hub with excellent growth prospects, modern amenities, and strong community spirit. Parramatta offers great value for families and investors alike."
      medianPrice="$920K"
      growth="+8.1%"
      population="28,491"
      features={[
        "Rapid infrastructure development",
        "Major shopping and dining precincts",
        "Excellent public transport links",
        "Strong rental demand",
        "Family-friendly neighborhoods", 
        "Growing business district"
      ]}
      nearbySuburbs={["Westmead", "Harris Park", "Granville", "Merrylands"]}
      imageQuery="parramatta sydney suburb"
    />
  );
}
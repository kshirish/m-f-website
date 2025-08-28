'use client';import SydneySuburbPage from "../SydneySuburbPage";

export default function SydneyCBDPage() {
  return (
    <SydneySuburbPage
      suburb="Sydney CBD"
      description="Experience city living at its finest in Sydney's bustling Central Business District. From luxury apartments to heritage properties, the CBD offers unparalleled lifestyle and investment opportunities."
      medianPrice="$1.8M"
      growth="+5.2%"
      population="17,252"
      features={[
        "World-class dining and entertainment",
        "Prime public transport connectivity", 
        "Walking distance to major attractions",
        "High rental yields for investors",
        "24/7 vibrant city lifestyle",
        "Premium office spaces and business hubs"
      ]}
      nearbySuburbs={["The Rocks", "Darling Harbour", "Pyrmont", "Surry Hills"]}
      imageQuery="sydney city buildings"
    />
  );
}
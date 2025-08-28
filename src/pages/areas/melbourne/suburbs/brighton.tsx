import MelbourneSuburbPage from "./MelbourneSuburbPage";

export default function BrightonPage() {
  return (
    <MelbourneSuburbPage
      suburb="Brighton"
      description="Discover elegant bayside living in one of Melbourne's most exclusive suburbs. Brighton offers beautiful beaches, prestigious schools, and grand Victorian homes with strong investment appeal."
      medianPrice="$2.3M"
      growth="+3.5%"
      population="23,000"
      features={[
        "Exclusive bayside location",
        "Beautiful Brighton Beach",
        "Prestigious schools and amenities",
        "Grand Victorian and Edwardian homes",
        "Family-friendly community",
        "Strong property values",
      ]}
      nearbySuburbs={["Brighton East", "Hampton", "Sandringham", "Bentleigh"]}
      imageQuery="brighton beach melbourne bathing boxes"
    />
  );
}

import MelbourneSuburbPage from "./MelbourneSuburbPage";

export default function MelbourneCBDPage() {
  return (
    <MelbourneSuburbPage
      suburb="Melbourne CBD"
      description="Experience the heart of Melbourne's business and cultural district. The CBD offers modern apartments, world-class dining, and unmatched convenience with excellent investment potential."
      medianPrice="$720K"
      growth="+2.8%"
      population="37,000"
      features={[
        "Heart of Melbourne's business district",
        "World-class dining and entertainment",
        "Excellent public transport connections",
        "Cultural attractions and events",
        "High rental yields",
        "Growing residential population",
      ]}
      nearbySuburbs={["Southbank", "Docklands", "Carlton", "East Melbourne"]}
      imageQuery="melbourne cbd skyline"
    />
  );
}

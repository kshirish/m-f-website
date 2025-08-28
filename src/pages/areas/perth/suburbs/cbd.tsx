import PerthSuburbPage from "./PerthSuburbPage";

export default function PerthCBDPage() {
  return (
    <PerthSuburbPage
      suburb="Perth CBD"
      description="Experience city living at its finest in Perth's central business district. The CBD offers modern apartments, convenient transport links, and proximity to all major amenities with strong investment potential."
      medianPrice="$650K"
      growth="+4.2%"
      population="8,500"
      features={[
        "Heart of Perth's business district",
        "Modern high-rise apartments",
        "Excellent public transport",
        "Walking distance to major attractions",
        "Strong rental yields",
        "Growing residential population",
      ]}
      nearbySuburbs={["East Perth", "West Perth", "Northbridge", "South Perth"]}
      imageQuery="perth cbd skyline"
    />
  );
}

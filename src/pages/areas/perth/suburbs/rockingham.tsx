import PerthSuburbPage from "./PerthSuburbPage";

export default function RockinghamPage() {
  return (
    <PerthSuburbPage
      suburb="Rockingham"
      description="Discover affordable coastal living south of Perth. Rockingham offers beautiful beaches, family-friendly amenities, and excellent value for money with strong growth potential."
      medianPrice="$520K"
      growth="+5.7%"
      population="109,000"
      features={[
        "Beautiful coastal location",
        "Affordable family housing",
        "Penguin Island nearby",
        "Growing industrial hub",
        "Excellent schools and parks",
        "Strong community atmosphere",
      ]}
      nearbySuburbs={["Safety Bay", "Warnbro", "Port Kennedy", "Baldivis"]}
      imageQuery="rockingham beach perth"
    />
  );
}

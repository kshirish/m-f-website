import SydneySuburbPage from "./SydneySuburbPage";

export default function ManlyPage() {
  return (
    <SydneySuburbPage
      suburb="Manly"
      description="Experience the relaxed Northern Beaches lifestyle with beautiful beaches, charming village atmosphere, and excellent ferry connections to the city. Manly offers both lifestyle and investment appeal."
      medianPrice="$1.9M"
      growth="+4.6%"
      population="17,464"
      features={[
        "Beautiful beaches and harbor",
        "Scenic ferry ride to Circular Quay",
        "Village-style shopping and dining",
        "Strong holiday rental market",
        "Family-friendly community",
        "Northern Beaches lifestyle"
      ]}
      nearbySuburbs={["Freshwater", "Curl Curl", "Dee Why", "Brookvale"]}
      imageQuery="manly beach sydney"
    />
  );
}
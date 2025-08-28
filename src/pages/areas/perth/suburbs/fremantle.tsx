import PerthSuburbPage from "./PerthSuburbPage";

export default function FremantlePage() {
  return (
    <PerthSuburbPage
      suburb="Fremantle"
      description="Discover the historic charm and vibrant culture of Fremantle. This port city offers heritage architecture, bustling markets, and coastal lifestyle with excellent growth prospects."
      medianPrice="$720K"
      growth="+5.1%"
      population="29,000"
      features={[
        "Historic port city charm",
        "Fremantle Markets and cafe culture",
        "Beautiful heritage architecture",
        "Close to beaches and harbor",
        "Strong tourism and rental market",
        "Arts and cultural hub",
      ]}
      nearbySuburbs={[
        "South Fremantle",
        "White Gum Valley",
        "Beaconsfield",
        "Hamilton Hill",
      ]}
      imageQuery="fremantle perth historic"
    />
  );
}

import MelbourneSuburbPage from "./MelbourneSuburbPage";

export default function SouthYarraPage() {
  return (
    <MelbourneSuburbPage
      suburb="South Yarra"
      description="Live in one of Melbourne's most prestigious and fashionable suburbs. South Yarra combines upscale living with vibrant nightlife, premium shopping, and excellent connectivity to the city."
      medianPrice="$1.2M"
      growth="+4.1%"
      population="23,000"
      features={[
        "Prestigious inner Melbourne location",
        "Chapel Street shopping and dining",
        "Beautiful heritage and modern architecture",
        "Close to Royal Botanic Gardens",
        "Excellent public transport",
        "Strong capital growth history",
      ]}
      nearbySuburbs={["Toorak", "Prahran", "Richmond", "Melbourne CBD"]}
      imageQuery="south yarra melbourne chapel street"
    />
  );
}

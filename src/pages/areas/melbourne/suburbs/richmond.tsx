import MelbourneSuburbPage from "./MelbourneSuburbPage";

export default function RichmondPage() {
  return (
    <MelbourneSuburbPage
      suburb="Richmond"
      description="Experience vibrant inner-city living in Melbourne's cultural hub. Richmond combines trendy cafes, great shopping, and sporting venues with convenient city access and growing property values."
      medianPrice="$980K"
      growth="+4.7%"
      population="26,000"
      features={[
        "Vibrant inner-city lifestyle",
        "Bridge Road shopping district",
        "Home to Richmond Football Club",
        "Trendy cafes and restaurants",
        "Excellent public transport",
        "Growing young professional population",
      ]}
      nearbySuburbs={["Cremorne", "South Yarra", "Prahran", "Collingwood"]}
      imageQuery="richmond melbourne bridge road"
    />
  );
}

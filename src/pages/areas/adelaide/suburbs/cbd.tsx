import AdelaideSuburbPage from "./AdelaideSuburbPage";

export default function AdelaideCBDPage() {
  return (
    <AdelaideSuburbPage
      suburb="Adelaide CBD"
      description="Experience sophisticated city living in Adelaide's historic heart. The CBD offers heritage charm mixed with modern amenities, excellent dining, and convenient transport connections."
      medianPrice="$520K"
      growth="+2.8%"
      population="25,000"
      features={[
        "Historic Adelaide city centre",
        "Vibrant food and wine scene",
        "Cultural precinct with museums",
        "Easy public transport access",
        "Growing residential population",
        "Mix of heritage and modern apartments",
      ]}
      nearbySuburbs={["North Adelaide", "Parkside", "Kent Town", "Mile End"]}
      imageQuery="adelaide cbd skyline"
    />
  );
}

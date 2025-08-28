import AdelaideSuburbPage from "./AdelaideSuburbPage";

export default function GlenelgPage() {
  return (
    <AdelaideSuburbPage
      suburb="Glenelg"
      description="Enjoy Adelaide's premier beachside lifestyle in the historic seaside suburb of Glenelg. Known for its beautiful beach, vibrant jetty road, and relaxed coastal atmosphere."
      medianPrice="$680K"
      growth="+3.2%"
      population="21,000"
      features={[
        "Beautiful Glenelg Beach",
        "Historic tram connection to city",
        "Vibrant Jetty Road shopping",
        "Popular tourist destination",
        "Great restaurants and cafes",
        "Strong rental market appeal",
      ]}
      nearbySuburbs={["Brighton", "Somerton Park", "Plympton", "Camden Park"]}
      imageQuery="glenelg beach adelaide"
    />
  );
}

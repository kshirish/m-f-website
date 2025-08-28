import SydneySuburbPage from "./SydneySuburbPage";

export default function ChatswoodPage() {
  return (
    <SydneySuburbPage
      suburb="Chatswood"
      description="Discover the multicultural hub of Sydney's North Shore with excellent transport links, shopping destinations, and strong Asian community. Chatswood offers modern living with investment potential."
      medianPrice="$1.4M"
      growth="+6.7%"
      population="21,231"
      features={[
        "Major transport interchange",
        "World-class shopping centers",
        "Diverse dining and cultural scene",
        "High-density modern living",
        "Strong rental demand",
        "Gateway to North Shore"
      ]}
      nearbySuburbs={["Willoughby", "Artarmon", "St Leonards", "Lane Cove"]}
      imageQuery="chatswood sydney"
    />
  );
}
import SydneySuburbPage from "./SydneySuburbPage";
import { getSuburbById } from "@/constants/common";

export default function BondiPage() {
  const suburbData = getSuburbById("bondi");

  if (!suburbData) {
    return <div>Suburb not found</div>;
  }

  return (
    <SydneySuburbPage
      suburb={suburbData.name}
      description={suburbData.description}
      medianPrice={suburbData.medianPrice}
      growth={suburbData.growth}
      population={suburbData.population}
      features={suburbData.features}
      nearbySuburbs={suburbData.nearbySuburbs}
      imageQuery={suburbData.imageQuery}
    />
  );
}

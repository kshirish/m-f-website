import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import { getAreaById, getAllAreas } from "@/constants/common";

type Props = {
  params: Promise<{ area: string }>;
};

export async function generateStaticParams() {
  const areas = getAllAreas();
  return areas.map((area) => ({
    area: area.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaId } = await params;
  const areaData = getAreaById(areaId);

  if (!areaData) {
    return {
      title: "Area Not Found",
    };
  }

  return {
    title: `${areaData.name} Home Loans & Mortgage Services | My Choice: Mortgage and Finance`,
    description: `Expert mortgage brokers in ${areaData.name}. Get competitive home loans, refinancing, and finance solutions across ${areaData.name} suburbs. Free consultation available.`,
    keywords: [
      `${areaData.name} home loans`,
      `${areaData.name} mortgage broker`,
      `${areaData.name} finance`,
      `${areaData.name} refinancing`,
      `${areaData.name} investment loans`,
      "first home buyer",
      "commercial finance",
    ],
    openGraph: {
      title: `${areaData.name} Home Loans & Mortgage Services | My Choice: Mortgage and Finance`,
      description: `Expert mortgage brokers in ${areaData.name}. Get competitive rates and personalized service.`,
      type: "website",
      locale: "en_AU",
    },
    alternates: {
      canonical: `/areas/${areaId}`,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { area: areaId } = await params;
  const areaData = getAreaById(areaId);

  if (!areaData) {
    notFound();
  }

  return <AreaPageTemplate areaId={areaId} />;
}

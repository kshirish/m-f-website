import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SuburbPageTemplate from "@/ui/SuburbPageTemplate";
import { getSuburbById, getAllSuburbs, getAreaById } from "@/constants/common";

type Props = {
  params: Promise<{ area: string; suburb: string }>;
};

export async function generateStaticParams() {
  const suburbs = getAllSuburbs();
  return suburbs.map((suburb) => ({
    area: suburb.areaId,
    suburb: suburb.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaId, suburb: suburbSlug } = await params;
  const areaData = getAreaById(areaId);
  const suburbId = `${areaId}-${suburbSlug}`;
  const suburbData = getSuburbById(suburbId);

  if (!areaData || !suburbData) {
    return {
      title: "Suburb Not Found",
    };
  }

  return {
    title: `${suburbData.name} Home Loans & Mortgage Services | ${areaData.name} | My Choice: Mortgage and Finance`,
    description: `Expert mortgage brokers in ${suburbData.name}, ${areaData.name}. Get competitive home loans, refinancing, and finance solutions. Median price ${suburbData.medianPrice}. Free consultation.`,
    keywords: [
      `${suburbData.name} home loans`,
      `${suburbData.name} mortgage broker`,
      `${areaData.name} ${suburbData.name} finance`,
      `${suburbData.name} property prices`,
      `${suburbData.name} refinancing`,
      "first home buyer",
      "investment property loans",
    ],
    openGraph: {
      title: `${suburbData.name} Home Loans & Mortgage Services | My Choice: Mortgage and Finance`,
      description: `Expert mortgage brokers in ${suburbData.name}. Median price ${suburbData.medianPrice}, growth ${suburbData.growth}.`,
      type: "website",
      locale: "en_AU",
    },
    alternates: {
      canonical: `/areas/${areaId}/suburbs/${suburbSlug}`,
    },
  };
}

export default async function SuburbPage({ params }: Props) {
  const { area: areaId, suburb: suburbSlug } = await params;
  const suburbId = `${areaId}-${suburbSlug}`;
  const suburbData = getSuburbById(suburbId);

  if (!suburbData) {
    notFound();
  }

  return <SuburbPageTemplate suburbId={suburbId} />;
}

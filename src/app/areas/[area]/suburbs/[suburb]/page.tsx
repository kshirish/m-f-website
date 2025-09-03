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
    title: `${suburbData.name} Home Loans & Mortgage Broker | ${areaData.name} | My Choice`,
    description: `Expert mortgage brokers in ${suburbData.name}, ${areaData.name}. Get competitive home loans, refinancing, and investment property finance. Median price ${suburbData.medianPrice}, population ${suburbData.population}. Licensed broker service.`,
    keywords: [
      `${suburbData.name} home loans`,
      `${suburbData.name} mortgage broker`,
      `${areaData.name} ${suburbData.name} finance`,
      `${suburbData.name} property prices`,
      `${suburbData.name} refinancing`,
      `${suburbData.name} investment property`,
      `mortgage broker ${areaData.name}`,
      "first home buyer",
    ],
    openGraph: {
      title: `${suburbData.name} Home Loans & Mortgage Broker | ${areaData.name}`,
      description: `Expert mortgage brokers in ${suburbData.name}, ${areaData.name}. Competitive home loans and finance solutions. Median price ${suburbData.medianPrice}.`,
      type: "website",
      locale: "en_AU",
      url: `https://www.mychoicemortgagefinance.com.au/areas/${areaId}/suburbs/${suburbSlug}`,
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
  const areaData = getAreaById(areaId);

  if (!suburbData || !areaData) {
    notFound();
  }

  // JSON-LD structured data for local area and real estate services
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `My Choice Mortgage & Finance - ${suburbData.name}`,
    description: `Professional mortgage broking services in ${suburbData.name}, ${areaData.name}. Home loans, refinancing, and investment property finance for ${suburbData.name} residents.`,
    url: `https://www.mychoicemortgagefinance.com.au/areas/${areaId}/suburbs/${suburbSlug}`,
    areaServed: {
      "@type": "Place",
      name: suburbData.name,
      containedInPlace: {
        "@type": "City",
        name: areaData.name,
        addressRegion: areaData.state,
        addressCountry: "AU",
      },
    },
    serviceType: [
      "Home Loans",
      "Mortgage Broking",
      "Property Finance",
      "Refinancing Services",
      "Investment Property Loans",
    ],
    provider: {
      "@type": "Organization",
      name: "My Choice Mortgage & Finance",
      url: "https://www.mychoicemortgagefinance.com.au",
      telephone: "+61 2 1234 5678",
      email: "info@mychoicemortgagefinance.com.au",
    },
    offers: {
      "@type": "Offer",
      name: `${suburbData.name} Home Loan Services`,
      description: `Competitive home loan and refinancing services for ${suburbData.name} properties. Median property price: ${suburbData.medianPrice}`,
      areaServed: {
        "@type": "Place",
        name: suburbData.name,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SuburbPageTemplate suburbId={suburbId} />
    </>
  );
}

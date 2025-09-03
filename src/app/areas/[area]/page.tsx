import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AreaPageTemplate from "@/ui/AreaPageTemplate";
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
    title: `${areaData.name} Home Loans & Mortgage Broker | My Choice Mortgage & Finance`,
    description: `Expert mortgage brokers in ${areaData.name}, ${areaData.state}. Get competitive home loans, refinancing, and investment property finance across all ${areaData.name} suburbs. Licensed broker with 15+ years experience.`,
    keywords: [
      `home loans ${areaData.name}`,
      `mortgage broker ${areaData.name}`,
      `refinancing ${areaData.name}`,
      `investment property loans ${areaData.name}`,
      `first home buyer ${areaData.name}`,
      `${areaData.name} mortgage services`,
      `home loan rates ${areaData.name}`,
    ],
    openGraph: {
      title: `${areaData.name} Home Loans & Mortgage Broker | My Choice`,
      description: `Expert mortgage brokers in ${areaData.name}. Get competitive home loans, refinancing, and investment property finance. Licensed broker with 15+ years experience.`,
      type: "website",
      locale: "en_AU",
      url: `https://www.mychoicemortgagefinance.com.au/areas/${areaId}`,
      images: [
        {
          url: areaData.heroImage,
          width: 1200,
          height: 630,
          alt: `${areaData.name} Home Loans & Mortgage Services`,
        },
      ],
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

  // JSON-LD structured data for local business and service area
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `My Choice Mortgage & Finance - ${areaData.name}`,
    description: `Professional mortgage broking services in ${areaData.name}, ${areaData.state}. Home loans, refinancing, and investment property finance.`,
    url: `https://www.mychoicemortgagefinance.com.au/areas/${areaId}`,
    areaServed: {
      "@type": "City",
      name: areaData.name,
      addressRegion: areaData.state,
      addressCountry: "AU",
    },
    serviceType: [
      "Home Loans",
      "Mortgage Broking",
      "Refinancing",
      "Investment Property Finance",
      "First Home Buyer Assistance",
    ],
    provider: {
      "@type": "Organization",
      name: "My Choice Mortgage & Finance",
      url: "https://www.mychoicemortgagefinance.com.au",
      telephone: "+61 2 1234 5678",
      email: "info@mychoicemortgagefinance.com.au",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "NSW",
        addressCountry: "AU",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AreaPageTemplate areaId={areaId} />
    </>
  );
}

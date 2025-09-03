import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Australian Property Market Update: March 2024 | My Choice Mortgage",
  description:
    "Latest insights into property market trends, price movements, and what this means for buyers and investors. Expert analysis of the Australian property market.",
  keywords: [
    "property market update 2024",
    "Australian property trends",
    "house prices Australia",
    "property market analysis",
    "real estate trends",
    "property investment outlook",
    "housing market forecast",
    "property price movements",
  ],
  openGraph: {
    title: "Australian Property Market Update: March 2024",
    description:
      "Latest insights into property market trends, price movements, and what this means for buyers and investors.",
    type: "article",
    locale: "en_AU",
    url: "https://www.mychoicemortgagefinance.com.au/blog/market-updates",
    publishedTime: "2024-02-22T10:00:00+10:00",
    authors: ["Sarah Mitchell"],
  },
  alternates: {
    canonical: "/blog/market-updates",
  },
};

export default function MarketUpdatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Australian Property Market Update: March 2024",
    description:
      "Latest insights into property market trends, price movements, and what this means for buyers and investors.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    author: {
      "@type": "Person",
      name: "Sarah Mitchell",
    },
    publisher: {
      "@type": "Organization",
      name: "My Choice Mortgage & Finance",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mychoicemortgagefinance.com.au/logo.png",
      },
    },
    datePublished: "2024-02-22T10:00:00+10:00",
    dateModified: "2024-02-22T10:00:00+10:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mychoicemortgagefinance.com.au/blog/market-updates",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}

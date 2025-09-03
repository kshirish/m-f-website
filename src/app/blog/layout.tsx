import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance & Mortgage Insights Blog | My Choice Mortgage & Finance",
  description:
    "Stay informed with expert insights, market updates, and practical advice on mortgages, property investment, and financial planning from Australia's trusted finance professionals.",
  keywords: [
    "finance blog Australia",
    "mortgage insights",
    "property investment tips",
    "home loan guides",
    "market updates",
    "refinancing advice",
    "first home buyer guide",
    "financial planning blog",
  ],
  openGraph: {
    title: "Finance & Mortgage Insights Blog | My Choice",
    description:
      "Expert insights, market updates, and practical advice on mortgages, property investment, and financial planning from Australia's trusted finance professionals.",
    type: "website",
    locale: "en_AU",
    url: "https://www.mychoicemortgagefinance.com.au/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "My Choice Mortgage & Finance Blog",
    description:
      "Expert insights, market updates, and practical advice on mortgages, property investment, and financial planning",
    url: "https://www.mychoicemortgagefinance.com.au/blog",
    publisher: {
      "@type": "Organization",
      name: "My Choice Mortgage & Finance",
      url: "https://www.mychoicemortgagefinance.com.au",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.mychoicemortgagefinance.com.au/blog",
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

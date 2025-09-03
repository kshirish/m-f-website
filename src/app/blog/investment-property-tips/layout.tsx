import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Investment Property Tax Benefits: What You Need to Know | My Choice Mortgage",
  description:
    "Maximize your investment returns by understanding the tax implications and benefits of property investment in Australia. Expert guide to negative gearing, depreciation, and more.",
  keywords: [
    "investment property tax benefits",
    "negative gearing Australia",
    "property depreciation",
    "investment property deductions",
    "rental property tax",
    "property investment guide",
    "tax implications property",
    "investment property finance",
  ],
  openGraph: {
    title: "Investment Property Tax Benefits: What You Need to Know",
    description:
      "Maximize your investment returns by understanding the tax implications and benefits of property investment in Australia.",
    type: "article",
    locale: "en_AU",
    url: "https://www.mychoicemortgagefinance.com.au/blog/investment-property-tips",
    publishedTime: "2024-03-10T10:00:00+10:00",
    authors: ["David Thompson"],
  },
  alternates: {
    canonical: "/blog/investment-property-tips",
  },
};

export default function InvestmentPropertyTipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Investment Property Tax Benefits: What You Need to Know",
    description:
      "Maximize your investment returns by understanding the tax implications and benefits of property investment in Australia.",
    image:
      "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    author: {
      "@type": "Person",
      name: "David Thompson",
    },
    publisher: {
      "@type": "Organization",
      name: "My Choice Mortgage & Finance",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mychoicemortgagefinance.com.au/logo.png",
      },
    },
    datePublished: "2024-03-10T10:00:00+10:00",
    dateModified: "2024-03-10T10:00:00+10:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.mychoicemortgagefinance.com.au/blog/investment-property-tips",
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

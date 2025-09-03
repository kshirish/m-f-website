import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Complete First Home Buyer Guide for 2024 | My Choice Mortgage & Finance",
  description:
    "Everything you need to know about buying your first home in Australia, from deposits and grants to choosing the right loan. Expert advice for first-time buyers.",
  keywords: [
    "first home buyer guide",
    "first home buyer grants",
    "FHLDS",
    "first home deposit",
    "first home buyer loans",
    "home buyer guide Australia",
    "government grants",
    "first home buyer tips",
  ],
  openGraph: {
    title: "Complete First Home Buyer Guide for 2024",
    description:
      "Everything you need to know about buying your first home in Australia, from deposits and grants to choosing the right loan.",
    type: "article",
    locale: "en_AU",
    url: "https://www.mychoicemortgagefinance.com.au/blog/first-home-buyer-guide",
    publishedTime: "2024-03-15T10:00:00+10:00",
    authors: ["Sarah Mitchell"],
  },
  alternates: {
    canonical: "/blog/first-home-buyer-guide",
  },
};

export default function FirstHomeBuyerGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Complete First Home Buyer Guide for 2024",
    description:
      "Everything you need to know about buying your first home in Australia, from deposits and grants to choosing the right loan.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
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
    datePublished: "2024-03-15T10:00:00+10:00",
    dateModified: "2024-03-15T10:00:00+10:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.mychoicemortgagefinance.com.au/blog/first-home-buyer-guide",
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

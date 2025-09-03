import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Refinancing in 2024: How to Save Thousands on Your Mortgage | My Choice",
  description:
    "With interest rates fluctuating, now could be the perfect time to refinance. Learn what you need to know before making the switch and how to save thousands.",
  keywords: [
    "refinancing guide 2024",
    "refinance home loan",
    "mortgage refinancing Australia",
    "refinancing benefits",
    "home loan rates",
    "refinancing process",
    "save money refinancing",
    "refinancing costs",
  ],
  openGraph: {
    title: "Refinancing in 2024: How to Save Thousands on Your Mortgage",
    description:
      "With interest rates fluctuating, now could be the perfect time to refinance. Learn what you need to know before making the switch.",
    type: "article",
    locale: "en_AU",
    url: "https://www.mychoicemortgagefinance.com.au/blog/refinancing-guide",
    publishedTime: "2024-03-12T10:00:00+10:00",
    authors: ["Michael Chen"],
  },
  alternates: {
    canonical: "/blog/refinancing-guide",
  },
};

export default function RefinancingGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Refinancing in 2024: How to Save Thousands on Your Mortgage",
    description:
      "With interest rates fluctuating, now could be the perfect time to refinance. Learn what you need to know before making the switch.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    author: {
      "@type": "Person",
      name: "Michael Chen",
    },
    publisher: {
      "@type": "Organization",
      name: "My Choice Mortgage & Finance",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mychoicemortgagefinance.com.au/logo.png",
      },
    },
    datePublished: "2024-03-12T10:00:00+10:00",
    dateModified: "2024-03-12T10:00:00+10:00",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.mychoicemortgagefinance.com.au/blog/refinancing-guide",
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

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Choice: Mortgage and Finance",
  description:
    "Expert mortgage brokers providing home loans, personal finance, and commercial finance solutions across Sydney, Melbourne, Perth, and Adelaide.",
  keywords: [
    "home loans",
    "mortgage broker",
    "finance",
    "loans",
    "Sydney",
    "Melbourne",
    "Perth",
    "Adelaide",
  ],
  authors: [{ name: "My Choice: Mortgage and Finance" }],
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon/favicon.ico",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "My Choice: Mortgage and Finance",
    description:
      "Expert mortgage brokers providing home loans, personal finance, and commercial finance solutions across Australia.",
    type: "website",
    locale: "en_AU",
    siteName: "My Choice: Mortgage and Finance",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Choice: Mortgage and Finance",
    description:
      "Expert mortgage brokers providing home loans, personal finance, and commercial finance solutions across Australia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <div className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

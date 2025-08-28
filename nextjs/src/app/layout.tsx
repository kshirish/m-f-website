import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Choice Mortgage & Finance - Expert Mortgage Solutions",
  description:
    "Professional mortgage and finance services across Sydney, Melbourne, Perth, and Adelaide. Get expert advice for home loans, personal finance, and commercial finance solutions.",
  keywords:
    "mortgage, finance, home loans, personal loans, commercial finance, Sydney, Melbourne, Perth, Adelaide",
  authors: [{ name: "My Choice Mortgage & Finance" }],
  creator: "My Choice Mortgage & Finance",
  publisher: "My Choice Mortgage & Finance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

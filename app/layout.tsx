import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLdOrganization from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Urgen Buddhist Art & Monastery Designs and Consultants",
  description:
    "Explore traditional Buddhist art and monastery design services, including carvings, paintings, and custom sacred spaces for spiritual and architectural excellence.",
  generator: "Next.js",
  keywords: [
    "Buddhist art",
    "monastery dessign",
    "sacred architecture",
    "traditional art",
    "heritage artwork",
    "wood carving",
    "stone sculpture",
    "Nepal Buddhist projects",
  ],
  robots: "index, follow",
  metadataBase: new URL("https://buddhistart.vercel.app"),
  openGraph: {
    title: "Buddhist Art & Monastery Designs",
    description:
      "Explore our traditional Buddhist art projects and sacred architectural works.",
    url: "https://buddhistart.vercel.app",
    siteName: "Urgen Buddhist Art Consultancy",
    images: [
      {
        url: "/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Buddhist wall carving",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddhist Art & Monastery Designs",
    description:
      "Explore our traditional Buddhist art projects and sacred architectural works.",
    images: ["./public/urgen/Himachal_Pradesh_2007/spiti_monastery.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://buddhistart.vercel.app" />
        <meta
          name="google-site-verification"
          content="kdvYwoOxBvJnGUlLhsJ3B7rHYrd0LSFDq8IHZJhJwkQ"
        />
      </head>
      <body>
        {children}
        <JsonLdOrganization />
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}

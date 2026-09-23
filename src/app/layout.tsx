import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { company } from "@/lib/public-content";

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: { default: "UNIFOTEC-WEB | Websites, Apps & Digital Solutions", template: "%s | UNIFOTEC-WEB" },
  description: company.statement,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: company.name, title: "UNIFOTEC-WEB | Websites, Apps & Digital Solutions", description: company.statement, images: [{ url: "/logo.jpeg", width: 512, height: 512, alt: "UNIFOTEC-WEB logo" }] },
  twitter: { card: "summary", title: "UNIFOTEC-WEB | Websites, Apps & Digital Solutions", description: company.statement, images: ["/logo.jpeg"] },
  icons: { icon: "/logo.jpeg", apple: "/logo.jpeg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="bg-light text-dark antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: company.name, url: company.domain, email: company.email, telephone: company.phone, address: { "@type": "PostalAddress", streetAddress: company.address[0], addressLocality: "Accra", addressCountry: "GH" }, description: company.statement, knowsAbout: ["Website development", "Mobile app development", "Custom software development", "Digital solutions"] }).replace(/</g, "\\u003c") }} />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

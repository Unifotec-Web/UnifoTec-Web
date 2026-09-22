import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { company } from "@/lib/public-content";

export const metadata: Metadata = {
  title: `${company.name} | ${company.tagline}`,
  description: company.statement,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-light text-dark antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

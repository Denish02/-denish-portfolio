import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mohamad Denish Jumad — Software Engineer",
  description:
    "Software Engineering student building full-stack systems, DevSecOps pipelines, and interfaces that hold up under real use. Based in Kota Kinabalu, Sabah.",
  metadataBase: new URL("https://denish02.github.io/-denish-portfolio/"),
  openGraph: {
    title: "Mohamad Denish Jumad — Software Engineer",
    description:
      "Software Engineering student building full-stack systems, DevSecOps pipelines, and interfaces that hold up under real use.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}

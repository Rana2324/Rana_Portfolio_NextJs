import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import "./featured-projects-carousel.css";
import "./portfolio-carousel.css";
import "./swiper-styles.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rana Mohammad Shohel - Full Stack Web Engineer",
  description:
    "Professional portfolio of Rana Mohammad Shohel, a dedicated Full Stack Web Engineer specializing in Node.js, React, and modern web technologies.",
  keywords:
    "web developer, mobile app developer, android developer, freelancer, bangladesh, java, react, ai solutions",
  generator: "v0.app",
};

// Add Devicon CSS to head
const deviconUrl =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css";
export const links = [{ rel: "stylesheet", href: deviconUrl }];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="font-sans min-h-screen antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import SetTheme from "@/components/SetTheme";
import Footer from "@/components/Footer";
import Seperator from "@/components/Seperator";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Hardware accelerated layout optimization hook
});

export const metadata: Metadata = {
  title: "Portfolio | OfficialGopi",
  description:
    "OfficialGopi – AI Full-Stack Web Developer specializing in Next.js, Node.js, Prisma, WebRTC, and scalable cloud architectures. Engineering real-time platforms and performant modern products with clean, high-density aesthetics.",
  icons: {
    icon: "/profile-pic.jpg",
    apple: "/profile-pic.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${interFont.variable} font-sans antialiased bg-white dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 overflow-x-hidden`}
      >
        {/* Isomorphic Dark Mode Structural Provider Initialization Hydration Wrapper */}
        <SetTheme />

        {/* Floating Top Nav Anchor Channel - Rendered cleanly at root scope */}
        <Navbar />

        {/* Global Page Layout Wrapper Frame Grid */}
        <Container>
          {/* Main Context Dynamic Page Slot */}
          <section className="w-full relative z-10">{children}</section>

          {/* Core Visual System Structural End Splitter */}
          <Seperator
            topMarginInPx={40}
            bottomMarginInPx={0}
            label="END_OF_TRANSCRIPT"
          />

          {/* Brutalist System Terminal Metric Footer */}
          <Footer />
        </Container>
      </body>
    </html>
  );
}

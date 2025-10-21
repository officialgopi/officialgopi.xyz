import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import SetTheme from "@/components/SetTheme";
import Footer from "@/components/Footer";
import Seperator from "@/components/Seperator";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | OfficialGopi",
  description:
    "OfficialGopi – Full-stack developer specializing in MERN stack, WebRTC, Prisma, and Tailwind CSS. I build scalable, high-performance web apps, real-time communication platforms, and modern, responsive UIs with clean code and optimized performance.",
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
        className={`${geistSans.variable} antialiased bg-white dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50  overflow-x-hidden`}
      >
        <SetTheme />
        <Container>
          <Navbar />
          <Seperator topMarginInPx={0} bottomMarginInPx={10} />
          <section className="w-full lg:px-20 md:px-10 px-5 relative z-0">
            {children}
          </section>
          <Seperator topMarginInPx={20} bottomMarginInPx={0} />
          <Footer />
          <Seperator topMarginInPx={20} bottomMarginInPx={0} />
        </Container>
      </body>
    </html>
  );
}

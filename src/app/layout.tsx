import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aspin.in"),
  title: { default: "ASPIN — Find your way forward", template: "%s | ASPIN" },
  description: "Explore courses, discover colleges in Bengaluru and make your next education decision with greater clarity.",
  applicationName: "ASPIN",
  openGraph: { type: "website", siteName: "ASPIN", title: "ASPIN — Find your way forward", description: "Course and college guidance for your next step." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${jakarta.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

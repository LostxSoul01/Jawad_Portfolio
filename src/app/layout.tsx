import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import ScrollProgress from "@/components/ScrollProgress";
import TechBackground from "@/components/TechBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://jawad-portfolio-rho.vercel.app"),
  title: {
    default: "Jawad Ali Raza — Software Engineer",
    template: "%s | Jawad Ali Raza",
  },
  description:
    "Software engineer helping people turn complex ideas into efficient digital products with applied AI and reliable full-stack engineering.",
  keywords: [
    "Jawad Ali Raza",
    "Software Engineer",
    "AI Engineer",
    "Full-Stack Developer",
    "Generative AI",
    "Python",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Jawad Ali Raza" }],
  creator: "Jawad Ali Raza",
  openGraph: {
    type: "website",
    url: "https://jawad-portfolio-rho.vercel.app",
    title: "Jawad Ali Raza — Software Engineer",
    description:
      "Software engineer helping people turn complex ideas into efficient digital products with applied AI and reliable full-stack engineering.",
    siteName: "Jawad Ali Raza",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Jawad Ali Raza — Software Engineer · Applied AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawad Ali Raza — Software Engineer",
    description:
      "Software engineer helping people turn complex ideas into efficient digital products with applied AI and reliable full-stack engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased" suppressHydrationWarning>
        <ScrollProgress />
        <TechBackground />
        <div className="relative z-10">{children}</div>
        <ChatWidget />
      </body>
    </html>
  );
}

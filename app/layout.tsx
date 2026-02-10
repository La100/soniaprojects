import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Sonia Projects | Projektowanie wnętrz",
    template: "%s | Sonia Projects",
  },
  description:
    "Profesjonalne projekty i wizualizacje wnętrz. Kompleksowe usługi projektowania wnętrz, wizualizacje 3D i doradztwo.",
  keywords: [
    "projektowanie wnętrz",
    "wizualizacje 3D",
    "architekt wnętrz",
    "projekty wnętrz",
    "interior design",
    "3D visualization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} ${playfair.variable}`}>
        {/* Local SEO: Organization schema */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Sonia Projects",
              url: "https://soniaprojects.pl",
              areaServed: "Warszawa",
              email: "soniaarchitektura@gmail.com",
              sameAs: ["https://www.instagram.com/sonia_projects/"],
              description: "Projektowanie wnętrz i wizualizacje 3D.",
            }),
          }}
        />

        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <Header />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">{children}</div>
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-C67G40NVBX" />
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria",
  description:
    "Galeria realizacji i inspiracji Sonia Projects — zdjęcia wnętrz i wizualizacje. Zobacz przykładowe projekty i detale aranżacji.",
  alternates: { canonical: "https://soniaprojects.pl/gallery" },
  openGraph: {
    type: "website",
    url: "https://soniaprojects.pl/gallery",
    title: "Galeria | Sonia Projects",
    description:
      "Galeria: zdjęcia wnętrz i wizualizacje 3D — Sonia Projects.",
    locale: "pl_PL",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CallToAction from "./components/CallToAction";

export const metadata: Metadata = {
  title: "Strona główna",
  description:
    "Sonia Projects — projektowanie wnętrz i wizualizacje 3D w Warszawie. Projekty mieszkań i domów, koncepcje, dobór materiałów i wsparcie na etapie realizacji.",
  alternates: { canonical: "https://www.soniaprojects.pl/" },
  openGraph: {
    type: "website",
    url: "https://www.soniaprojects.pl/",
    title: "Sonia Projects | Projektowanie wnętrz",
    description:
      "Projektowanie wnętrz i wizualizacje 3D w Warszawie. Projekty mieszkań i domów, koncepcje, materiały, wsparcie w realizacji.",
    locale: "pl_PL",
  },
};

export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <Hero />
        <About />
        <Services />
        <CallToAction />
      </main>
    </div>
  );
}

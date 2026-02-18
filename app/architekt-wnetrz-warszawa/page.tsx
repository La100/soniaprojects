import Link from "next/link";

export const metadata = {
  title: "Architekt wnętrz Warszawa | Sonia Projects",
  description:
    "Architekt wnętrz w Warszawie: projekt mieszkania lub domu, układ funkcjonalny, materiały, oświetlenie i wsparcie w realizacji. Sprawdź jak wygląda współpraca.",
  alternates: { canonical: "https://soniaprojects.pl/architekt-wnetrz-warszawa" },
  openGraph: {
    type: "website",
    url: "https://soniaprojects.pl/architekt-wnetrz-warszawa",
    title: "Architekt wnętrz Warszawa | Sonia Projects",
    description:
      "Projekt wnętrz w Warszawie: funkcja, estetyka i wsparcie na etapie realizacji. Umów konsultację.",
    locale: "pl_PL",
  },
};

function JsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Architekt wnętrz Warszawa",
    url: "https://soniaprojects.pl/architekt-wnetrz-warszawa",
    about: [
      {
        "@type": "Service",
        name: "Projekt wnętrz",
        areaServed: "Warszawa",
        provider: { "@type": "Organization", name: "Sonia Projects" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function Page() {
  return (
    <main className="py-12">
      <JsonLd />

      <div className="max-w-4xl mx-auto">
        <header>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Architekt wnętrz — Warszawa</h1>
          <p className="mt-4 text-neutral-700 text-lg leading-relaxed">
            Jeśli szukasz <strong>architekta wnętrz w Warszawie</strong>, najważniejsze jest to, żeby projekt
            był nie tylko ładny, ale też dopięty funkcjonalnie: układ, przechowywanie, oświetlenie i decyzje
            materiałowe, które bronią się po roku użytkowania.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-neutral-800"
            >
              Umów konsultację
            </Link>
            <Link href="/projects" className="inline-flex justify-center px-6 py-3 text-base font-medium rounded-full border border-neutral-300 hover:bg-neutral-50">
              Zobacz realizacje
            </Link>
          </div>
        </header>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">Układ i ergonomia</h2>
            <p className="mt-2 text-neutral-700">Rozplanowanie stref, wygodne ciągi komunikacyjne i przechowywanie.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">Materiały i detale</h2>
            <p className="mt-2 text-neutral-700">Trwałość, łatwe sprzątanie, spójna paleta i sensowne kompromisy budżetowe.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">Wsparcie w realizacji</h2>
            <p className="mt-2 text-neutral-700">Konsultacje z wykonawcami i dopinanie decyzji w trakcie prac.</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Jak wygląda współpraca?</h2>
          <ol className="mt-4 space-y-3 text-neutral-700 list-decimal pl-5">
            <li>Konsultacja: potrzeby, styl życia, budżet, terminy.</li>
            <li>Układ funkcjonalny + koncepcja.</li>
            <li>Projekt: materiały, oświetlenie, zabudowy, lista zakupowa.</li>
            <li>Opcjonalnie: wsparcie podczas realizacji.</li>
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Przeczytaj też</h2>
          <div className="mt-4 grid gap-3">
            <Link className="hover:underline" href="/blog/jak-wybrac-architekta-wnetrz-warszawa-pytania">
              Jak wybrać architekta wnętrz w Warszawie? 15 pytań + czerwone flagi
            </Link>
            <Link className="hover:underline" href="/blog/ile-kosztuje-projekt-wnetrza-warszawa-2026">
              Ile kosztuje projekt wnętrza w Warszawie w 2026?
            </Link>
            <Link className="hover:underline" href="/blog/jak-czytac-rzut-mieszkania">
              Jak czytać rzut mieszkania? 10 rzeczy, które warto wyłapać
            </Link>
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-neutral-50 border border-neutral-200 p-8">
          <h2 className="text-2xl font-semibold">Zacznijmy od krótkiej rozmowy</h2>
          <p className="mt-3 text-neutral-700">
            Opisz metraż, układ i priorytety (np. kuchnia, przechowywanie, budżet) — wrócę z propozycją kolejnych kroków.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-neutral-800"
            >
              Przejdź do kontaktu
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

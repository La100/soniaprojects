import Link from "next/link";

export const metadata = {
  title: "Projektowanie wnętrz Warszawa | Architekt wnętrz – Sonia Projects",
  description:
    "Projektowanie i aranżacja wnętrz w Warszawie i okolicach. Funkcjonalny projekt, spójna estetyka, wsparcie na etapie realizacji. Umów konsultację.",
  alternates: { canonical: "https://www.soniaprojects.pl/projektowanie-wnetrz-warszawa" },
  openGraph: {
    type: "website",
    url: "https://www.soniaprojects.pl/projektowanie-wnetrz-warszawa",
    title: "Projektowanie wnętrz Warszawa | Sonia Projects",
    description: "Projektowanie i aranżacja wnętrz w Warszawie i okolicach. Umów konsultację.",
    locale: "pl_PL",
  },
};

function JsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Projektowanie wnętrz Warszawa",
    url: "https://www.soniaprojects.pl/projektowanie-wnetrz-warszawa",
    about: [
      {
        "@type": "Service",
        name: "Projektowanie wnętrz",
        areaServed: "Warszawa",
        provider: { "@type": "Organization", name: "Sonia Projects" },
      },
      {
        "@type": "Service",
        name: "Aranżacja wnętrz",
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

export default function WarsawInteriorDesignPage() {
  return (
    <main className="py-12">
      <JsonLd />

      <div className="max-w-4xl mx-auto">
        <header>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Projektowanie wnętrz w Warszawie
          </h1>
          <p className="mt-4 text-neutral-700 text-lg leading-relaxed">
            Szukasz <strong>architekta wnętrz</strong> lub <strong>projektanta wnętrz</strong> w
            Warszawie? Pomogę Ci przejść przez cały proces — od koncepcji i układu
            funkcjonalnego po dobór materiałów i wsparcie na etapie realizacji.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-neutral-800"
            >
              Umów konsultację
            </Link>
          </div>
        </header>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">Układ i funkcja</h2>
            <p className="mt-2 text-neutral-700">
              Przemyślany plan mieszkania/domu, ergonomia, przechowywanie i podział na strefy.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">Materiały i estetyka</h2>
            <p className="mt-2 text-neutral-700">
              Paleta kolorów, materiały, meble, oświetlenie — spójnie i bez przerostu formy.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">Wsparcie w realizacji</h2>
            <p className="mt-2 text-neutral-700">
              Pomoc w decyzjach, konsultacje z wykonawcami, dopinanie detali w trakcie prac.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Jak wygląda współpraca?</h2>
          <ol className="mt-4 space-y-3 text-neutral-700 list-decimal pl-5">
            <li>Krótka konsultacja: potrzeby, styl życia, budżet, termin.</li>
            <li>Inwentaryzacja (na miejscu w Warszawie lub online) + koncepcja funkcjonalna.</li>
            <li>Projekt: układ, materiały, wizualizacje (opcjonalnie), lista zakupowa.</li>
            <li>Wsparcie na etapie realizacji: decyzje, korekty, konsultacje.</li>
          </ol>
        </section>

        <section className="mt-14">
          {/* FAQPage JSON-LD */}
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Ile trwa projekt wnętrza?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Zależy od metrażu i zakresu. Najczęściej od kilku tygodni do kilku miesięcy.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy działasz tylko w Warszawie?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Priorytet to Warszawa i okolice, ale część etapów możemy zrobić też zdalnie.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Czy robisz projekty mieszkań w kamienicach?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Tak — to często wymaga więcej planowania (instalacje, akustyka, formalności), ale efekt może być wyjątkowy.",
                    },
                  },
                ],
              }),
            }}
          />

          <h2 className="text-2xl font-semibold">FAQ (Warszawa)</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium">Ile trwa projekt wnętrza?</h3>
              <p className="text-neutral-700 mt-1">
                Zależy od metrażu i zakresu. Najczęściej od kilku tygodni do kilku miesięcy.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Czy działasz tylko w Warszawie?</h3>
              <p className="text-neutral-700 mt-1">
                Priorytet to Warszawa i okolice, ale część etapów możemy zrobić też zdalnie.
              </p>
            </div>
            <div>
              <h3 className="font-medium">Czy robisz projekty mieszkań w kamienicach?</h3>
              <p className="text-neutral-700 mt-1">
                Tak — to często wymaga więcej planowania (instalacje, akustyka, formalności), ale
                efekt może być wyjątkowy.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-neutral-50 border border-neutral-200 p-8">
          <h2 className="text-2xl font-semibold">Porozmawiajmy o Twoim wnętrzu</h2>
          <p className="mt-3 text-neutral-700">
            Napisz kilka zdań o mieszkaniu/domu i oczekiwaniach — wrócę z propozycją kolejnych
            kroków.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-neutral-800"
            >
              Przejdź do kontaktu
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Czytaj dalej</h2>
          <p className="mt-2 text-neutral-700">
            Zobacz też wpisy na blogu — praktyczne poradniki o stylach i remontach.
          </p>
          <div className="mt-4">
            <Link href="/blog" className="hover:underline">
              Przejdź do bloga →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

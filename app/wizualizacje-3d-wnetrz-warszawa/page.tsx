import Link from "next/link";

export const metadata = {
  title: "Wizualizacje 3D wnętrz Warszawa | Sonia Projects",
  description:
    "Wizualizacje 3D wnętrz w Warszawie: kiedy mają sens, co pokazują i jak pomagają uniknąć kosztownych błędów. Sprawdź proces i umów konsultację.",
  alternates: { canonical: "https://www.soniaprojects.pl/wizualizacje-3d-wnetrz-warszawa" },
  openGraph: {
    type: "website",
    url: "https://www.soniaprojects.pl/wizualizacje-3d-wnetrz-warszawa",
    title: "Wizualizacje 3D wnętrz Warszawa | Sonia Projects",
    description: "Wizualizacje 3D, które pomagają podejmować decyzje przed remontem. Warszawa i okolice.",
    locale: "pl_PL",
  },
};

export default function Page() {
  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto">
        <header>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Wizualizacje 3D wnętrz — Warszawa</h1>
          <p className="mt-4 text-neutral-700 text-lg leading-relaxed">
            Wizualizacje 3D nie są celem samym w sobie — mają ułatwić podejmowanie decyzji dotyczących układu,
            materiałów, kolorystyki oraz oświetlenia. Dobrze przygotowane 3D ogranicza ryzyko kosztownych zmian na etapie realizacji.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-neutral-800"
            >
              Umów konsultację
            </Link>
            <Link
              href="/projects"
              className="inline-flex justify-center px-6 py-3 text-base font-medium rounded-full border border-neutral-300 hover:bg-neutral-50"
            >
              Zobacz portfolio
            </Link>
          </div>
        </header>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">Kiedy warto</h2>
            <p className="mt-2 text-neutral-700">Przy większych zmianach układu, nowych zabudowach i trudnych decyzjach materiałowych.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">Co dostajesz</h2>
            <p className="mt-2 text-neutral-700">Spójny obraz całości: proporcje, światło, kolory i detale w kontekście przestrzeni.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">Jak unikamy błędów</h2>
            <p className="mt-2 text-neutral-700">Najpierw funkcja i układ, potem wizualizacja — nie odwrotnie.</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Co obejmuje pakiet wizualizacji 3D</h2>
          <div className="mt-4 rounded-2xl border border-neutral-200 p-6">
            <ul className="list-disc pl-5 text-neutral-700 space-y-2">
              <li>ustalenie układu i kluczowych decyzji (materiały/kolory/światło),</li>
              <li>wizualizacje, które pokazują proporcje i atmosferę (nie tylko „ładny render”),</li>
              <li>spójność między pomieszczeniami (żeby mieszkanie nie było zlepkiem stylów),</li>
              <li>lista decyzji do zatwierdzenia przed zakupami i ekipą.</li>
            </ul>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Co najczęściej weryfikujemy dzięki 3D</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-medium">Kolory „na żywo”</h3>
              <p className="mt-2 text-neutral-700">Zanim kupisz farby i płytki, widzisz relacje podłoga–ściana–fronty.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-medium">Światło i klimat</h3>
              <p className="mt-2 text-neutral-700">Wizualizacja ułatwia plan warstw światła i unika „ciemnych kątów”.</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium">Czy wizualizacje 3D są konieczne?</h3>
              <p className="text-neutral-700 mt-1">Nie zawsze. Najbardziej pomagają, gdy decyzje są trudne lub drogie w zmianie po fakcie.</p>
            </div>
            <div>
              <h3 className="font-medium">Czy 3D zastępuje rysunki techniczne?</h3>
              <p className="text-neutral-700 mt-1">Nie. Wizualizacja pokazuje efekt, a dokumentacja prowadzi wykonawców.</p>
            </div>
            <div>
              <h3 className="font-medium">Ile iteracji zmian jest realnie potrzebne?</h3>
              <p className="text-neutral-700 mt-1">Zwykle 1–2 rundy dopracowania, jeśli wcześniej dopniemy układ i paletę materiałów.</p>
            </div>
            <div>
              <h3 className="font-medium">Czy da się zrobić wizualizacje tylko jednego pomieszczenia?</h3>
              <p className="text-neutral-700 mt-1">Tak — szczególnie kuchni/salonu. Warto jednak pilnować spójności z resztą mieszkania.</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Przeczytaj też</h2>
          <div className="mt-4 grid gap-3">
            <Link className="hover:underline" href="/blog/kiedy-warto-robic-wizualizacje-3d">
              Czy wizualizacje 3D są potrzebne? Kiedy pomagają, a kiedy to zbędny koszt
            </Link>
            <Link className="hover:underline" href="/blog/jak-dobrac-kolory-w-mieszkaniu">
              Jak dobrać kolory w mieszkaniu? Prosta metoda palety
            </Link>
            <Link className="hover:underline" href="/blog/plan-oswietlenia-w-mieszkaniu">
              Oświetlenie w mieszkaniu: plan warstwowy + błędy
            </Link>
            <Link className="hover:underline" href="/blog/jak-przygotowac-sie-do-projektu-wnetrza">
              Jak przygotować się do projektu wnętrza? Lista rzeczy
            </Link>
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-neutral-50 border border-neutral-200 p-8">
          <h2 className="text-2xl font-semibold">Sprawdź, czy 3D ma sens w Twoim przypadku</h2>
          <p className="mt-3 text-neutral-700">Napisz, jaki jest metraż i na jakim etapie jesteś — zaproponuję najlepszy zakres prac.</p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-neutral-800"
            >
              Skontaktuj się
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

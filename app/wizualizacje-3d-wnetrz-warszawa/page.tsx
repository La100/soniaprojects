import Link from "next/link";

export const metadata = {
  title: "Wizualizacje 3D wnętrz Warszawa | Sonia Projects",
  description:
    "Wizualizacje 3D wnętrz w Warszawie: kiedy mają sens, co pokazują i jak pomagają uniknąć kosztownych błędów. Sprawdź proces i umów konsultację.",
  alternates: { canonical: "https://soniaprojects.pl/wizualizacje-3d-wnetrz-warszawa" },
  openGraph: {
    type: "website",
    url: "https://soniaprojects.pl/wizualizacje-3d-wnetrz-warszawa",
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
            Wizualizacje 3D nie są celem samym w sobie — mają pomóc podjąć decyzje: układ, materiały, kolory i światło.
            Zrobione dobrze, często oszczędzają czas i pieniądze na poprawkach.
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
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium">Czy wizualizacje 3D są konieczne?</h3>
              <p className="text-neutral-700 mt-1">Nie zawsze. Są najbardziej przydatne, gdy decyzje są trudne lub kosztowne w zmianie po fakcie.</p>
            </div>
            <div>
              <h3 className="font-medium">Czy 3D zastępuje rysunki techniczne?</h3>
              <p className="text-neutral-700 mt-1">Nie. Wizualizacja pokazuje efekt, a dokumentacja prowadzi wykonawców.</p>
            </div>
            <div>
              <h3 className="font-medium">Ile iteracji zmian jest realnie potrzebne?</h3>
              <p className="text-neutral-700 mt-1">Zwykle 1–2 rundy dopracowania po ustaleniu układu i palety.</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Przeczytaj też</h2>
          <div className="mt-4 grid gap-3">
            <Link className="hover:underline" href="/blog/kiedy-warto-robic-wizualizacje-3d">
              Czy wizualizacje 3D są potrzebne? Kiedy pomagają, a kiedy to zbędny koszt
            </Link>
            <Link className="hover:underline" href="/blog/plan-oswietlenia-w-mieszkaniu">
              Oświetlenie w mieszkaniu: plan warstwowy + błędy
            </Link>
            <Link className="hover:underline" href="/blog/jak-przygotowac-sie-do-projektu-wnetrza">
              Jak przygotować się do projektu wnętrza? Lista rzeczy
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

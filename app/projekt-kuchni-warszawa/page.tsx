import Link from "next/link";

export const metadata = {
  title: "Projekt kuchni Warszawa | Sonia Projects",
  description:
    "Projekt kuchni w Warszawie: układ L/U/wyspa, ergonomia, gniazdka i oświetlenie. Zobacz jak zaplanować kuchnię, żeby działała w praktyce.",
  alternates: { canonical: "https://soniaprojects.pl/projekt-kuchni-warszawa" },
  openGraph: {
    type: "website",
    url: "https://soniaprojects.pl/projekt-kuchni-warszawa",
    title: "Projekt kuchni Warszawa | Sonia Projects",
    description: "Układ, ergonomia, przechowywanie i światło — projekt kuchni dopasowany do metrażu.",
    locale: "pl_PL",
  },
};

export default function Page() {
  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto">
        <header>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Projekt kuchni — Warszawa</h1>
          <p className="mt-4 text-neutral-700 text-lg leading-relaxed">
            Kuchnia jest jednym z najbardziej wymagających pomieszczeń pod względem funkcji i instalacji. Dobry projekt
            zaczyna się od ergonomii pracy, poprawnie rozplanowanych przyłączy, oświetlenia oraz pojemnego, przemyślanego
            przechowywania — a dopiero potem od doboru frontów i detali estetycznych.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-neutral-800"
            >
              Umów konsultację
            </Link>
            <Link
              href="/services"
              className="inline-flex justify-center px-6 py-3 text-base font-medium rounded-full border border-neutral-300 hover:bg-neutral-50"
            >
              Zobacz usługi
            </Link>
          </div>
        </header>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">Układ</h2>
            <p className="mt-2 text-neutral-700">L/U/wyspa — dobrane do metrażu i stylu gotowania.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">Gniazdka i obwody</h2>
            <p className="mt-2 text-neutral-700">Bez przedłużaczy i przeciążeń — planujemy z wyprzedzeniem.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-medium">Oświetlenie</h2>
            <p className="mt-2 text-neutral-700">Warstwy światła: blat, stół/wyspa, nastrojowe.</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Zakres projektu kuchni</h2>
          <div className="mt-4 rounded-2xl border border-neutral-200 p-6">
            <ul className="list-disc pl-5 text-neutral-700 space-y-2">
              <li>układ i ergonomia (trójkąt roboczy + realne odległości),</li>
              <li>strefy: zapasy, zmywanie, gotowanie, serwowanie,</li>
              <li>przechowywanie i wysokości zabudów,</li>
              <li>gniazdka, obwody i miejsca pod AGD,</li>
              <li>oświetlenie blatu i sceny (sprzątanie / wieczór).</li>
            </ul>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Najczęstsze błędy, które generują koszty</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-medium">Za mało blatu roboczego</h3>
              <p className="mt-2 text-neutral-700">W praktyce liczy się ciągły, wygodny odcinek blatu. Projektujemy układ tak, aby praca była płynna i ergonomiczna.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-medium">Gniazdka „po fakcie”</h3>
              <p className="mt-2 text-neutral-700">Brak odpowiedniej liczby gniazd i obwodów kończy się prowizorycznymi rozwiązaniami. Ustalamy to na etapie projektu, zanim ruszą prace.</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium">Czy da się zaprojektować kuchnię bez stolarza „na wymiar”?</h3>
              <p className="mt-1 text-neutral-700">Tak, ale trzeba pilnować ergonomii i przechowywania. W wielu układach zabudowa na wymiar daje najlepszy efekt.</p>
            </div>
            <div>
              <h3 className="font-medium">Wyspa czy półwysep?</h3>
              <p className="mt-1 text-neutral-700">Zależy od przejść i komunikacji. Często półwysep wygrywa w mieszkaniach, bo daje funkcję bez zabierania przestrzeni.</p>
            </div>
            <div>
              <h3 className="font-medium">Czy okap w otwartej kuchni wystarczy?</h3>
              <p className="mt-1 text-neutral-700">Pomaga, ale nie rozwiązuje wszystkiego. Liczy się też wentylacja i sposób gotowania.</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Przeczytaj też</h2>
          <div className="mt-4 grid gap-3">
            <Link className="hover:underline" href="/blog/projekt-kuchni-uklady-l-u-wyspa">
              Projekt kuchni: układ L/U/wyspa — co działa w praktyce
            </Link>
            <Link className="hover:underline" href="/blog/jak-ustawic-gniazdka-w-kuchni">
              Gniazdka w kuchni: ile, gdzie i na jakich obwodach
            </Link>
            <Link className="hover:underline" href="/blog/kuchnia-otwarta-czy-zamknieta">
              Kuchnia otwarta czy zamknięta? Plusy/minusy i układ
            </Link>
            <Link className="hover:underline" href="/blog/plan-oswietlenia-w-mieszkaniu">
              Oświetlenie w mieszkaniu: plan warstwowy + błędy
            </Link>
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-neutral-50 border border-neutral-200 p-8">
          <h2 className="text-2xl font-semibold">Chcesz dopasować układ kuchni do Twojego mieszkania?</h2>
          <p className="mt-3 text-neutral-700">
            Podeślij rzut i krótki opis potrzeb (jak często gotujesz, jaki sprzęt, czy planujesz wyspę/stół). Wrócę z propozycją kierunku i zakresem prac.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-neutral-800"
            >
              Napisz do mnie
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

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
            Kuchnia to najbardziej „techniczne” pomieszczenie w mieszkaniu. Dobry projekt to ergonomia, światło, sensowne
            gniazdka i przechowywanie — dopiero potem fronty.
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
          <h2 className="text-2xl font-semibold">Przeczytaj też</h2>
          <div className="mt-4 grid gap-3">
            <Link className="hover:underline" href="/blog/projekt-kuchni-uklady-l-u-wyspa">
              Projekt kuchni: układ L/U/wyspa — co działa w praktyce
            </Link>
            <Link className="hover:underline" href="/blog/jak-ustawic-gniazdka-w-kuchni">
              Gniazdka w kuchni: ile, gdzie i na jakich obwodach
            </Link>
            <Link className="hover:underline" href="/blog/plan-oswietlenia-w-mieszkaniu">
              Oświetlenie w mieszkaniu: plan warstwowy + błędy
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

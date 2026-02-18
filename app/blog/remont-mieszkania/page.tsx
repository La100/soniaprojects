import Link from "next/link";
import { getAllBlogPostsMeta } from "@/lib/blog";

export const metadata = {
  title: "Remont mieszkania — poradniki i checklisty | Sonia Projects",
  description:
    "Remont mieszkania bez chaosu: budżet, harmonogram, ekipy, kolejność prac i najczęstsze błędy. Zbiór praktycznych poradników (PL).",
  alternates: { canonical: "https://www.soniaprojects.pl/blog/remont-mieszkania" },
  openGraph: {
    type: "website",
    url: "https://www.soniaprojects.pl/blog/remont-mieszkania",
    title: "Remont mieszkania — poradniki | Sonia Projects",
    description:
      "Budżet, harmonogram i decyzje remontowe — zebrane w jednym miejscu.",
    locale: "pl_PL",
  },
};

const picks = [
  "remont-mieszkania-warszawa-harmonogram-krok-po-kroku",
  "koszt-remontu-mieszkania-warszawa-budzet",
  "jak-wybrac-ekipe-remontowa",
  "remont-mieszkania-kolejnosc-prac",
  "odbior-mieszkania-od-dewelopera-checklista",
];

export default function Page() {
  const all = getAllBlogPostsMeta();
  const bySlug = new Map(all.map((p) => [p.slug, p] as const));
  const items = picks.map((s) => bySlug.get(s)).filter(Boolean);

  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto">
        <header>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Remont mieszkania — poradniki</h1>
          <p className="mt-3 text-neutral-700">
            Szybkie linki do najważniejszych tematów: budżet, harmonogram, ekipa i kolejność prac.
          </p>
        </header>

        <section className="mt-10 grid gap-4">
          {items.map((p) => (
            <Link
              key={p!.slug}
              href={`/blog/${p!.slug}`}
              className="block rounded-2xl border border-neutral-200 p-5 hover:bg-neutral-50 transition"
            >
              <div className="font-medium">{p!.title}</div>
              {p!.description ? <div className="mt-1 text-sm text-neutral-600">{p!.description}</div> : null}
            </Link>
          ))}
        </section>

        <section className="mt-14 rounded-2xl bg-neutral-50 border border-neutral-200 p-8">
          <h2 className="text-2xl font-semibold">Chcesz przejść przez remont bez poprawek?</h2>
          <p className="mt-3 text-neutral-700">
            Jeśli jesteś na etapie decyzji i chcesz dopiąć układ, elektrykę i materiały zanim wejdzie ekipa — pomożemy.
          </p>
          <div className="mt-6">
            <Link
              href="/projektowanie-wnetrz-warszawa"
              className="inline-flex justify-center px-6 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-neutral-800"
            >
              Projektowanie wnętrz Warszawa
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

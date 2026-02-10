import Link from "next/link";
import { getAllBlogPostsMeta } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Wpisy o architekturze wnętrz, inspiracjach i projektowaniu (PL).",
  alternates: { canonical: "https://soniaprojects.pl/blog" },
  openGraph: {
    type: "website",
    url: "https://soniaprojects.pl/blog",
    title: "Blog | Sonia Projects",
    description: "Wpisy o architekturze wnętrz, inspiracjach i projektowaniu (PL).",
    locale: "pl_PL",
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPostsMeta();

  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-3 text-neutral-600">Artykuły i notatki.</p>

        <div className="mt-10 space-y-6">
          {posts.length === 0 ? (
            <p className="text-neutral-600">Brak wpisów. Dodaj pliki w <code>content/blog</code>.</p>
          ) : (
            posts.map((p) => (
              <article key={p.slug} className="border-b border-neutral-200 pb-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h2 className="text-xl md:text-2xl font-medium">
                    <Link className="hover:underline" href={`/blog/${p.slug}`}>
                      {p.title}
                    </Link>
                  </h2>
                  <time className="text-sm text-neutral-500" dateTime={p.date}>
                    {new Date(p.date).toLocaleDateString("pl-PL", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    })}
                  </time>
                </div>

                {p.description ? <p className="mt-2 text-neutral-700">{p.description}</p> : null}

                {p.tags && p.tags.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

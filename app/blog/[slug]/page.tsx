import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getBlogSlugs, getBlogPostRawBySlug } from "@/lib/blog";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const { meta } = getBlogPostRawBySlug(params.slug);
    const url = `https://soniaprojects.pl/blog/${meta.slug}`;

    const images = meta.images?.length
      ? meta.images.map((src) => ({ url: `https://soniaprojects.pl${src}` }))
      : meta.image
        ? [{ url: `https://soniaprojects.pl${meta.image}` }]
        : undefined;

    return {
      title: meta.title,
      description: meta.description,
      alternates: { canonical: url },
      openGraph: {
        type: "article",
        url,
        title: meta.title,
        description: meta.description,
        images,
        locale: "pl_PL",
      },
      twitter: {
        card: images?.length ? "summary_large_image" : "summary",
        title: meta.title,
        description: meta.description,
        images: images?.map((i) => i.url),
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getBlogPostRawBySlug(params.slug);
  } catch {
    notFound();
  }

  const { content, meta } = post;

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return (
    <main className="py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-sm text-neutral-600 hover:underline">
          ← Wróć do bloga
        </Link>

        <header className="mt-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{meta.title}</h1>
          <time className="mt-3 block text-sm text-neutral-500" dateTime={meta.date}>
            {new Date(meta.date).toLocaleDateString("pl-PL", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </time>
          {meta.description ? <p className="mt-4 text-neutral-700">{meta.description}</p> : null}
        </header>

        <article className="prose prose-neutral max-w-none mt-10">
          {/* JSON-LD */}
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: meta.title,
                datePublished: meta.date,
                dateModified: meta.date,
                description: meta.description,
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://soniaprojects.pl/blog/${meta.slug}`,
                },
                author: { "@type": "Organization", name: "Sonia Projects" },
                publisher: { "@type": "Organization", name: "Sonia Projects" },
                image: meta.images?.length
                  ? meta.images.map((src) => `https://soniaprojects.pl${src}`)
                  : meta.image
                    ? [`https://soniaprojects.pl${meta.image}`]
                    : undefined,
              }),
            }}
          />

          {mdxContent}
        </article>
      </div>
    </main>
  );
}

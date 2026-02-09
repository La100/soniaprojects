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
    return {
      title: meta.title,
      description: meta.description,
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
          {mdxContent}
        </article>
      </div>
    </main>
  );
}

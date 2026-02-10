import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string; // ISO string recommended
  description?: string;
  tags?: string[];
  image?: string; // e.g. /blog/japandi-1.png
  images?: string[];
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
}

export function getBlogSlugs(): string[] {
  ensureBlogDir();
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

export function getBlogPostRawBySlug(slug: string): { meta: BlogPostMeta; content: string } {
  ensureBlogDir();

  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  const data = parsed.data as Partial<BlogPostMeta> & {
    title?: unknown;
    date?: unknown;
    description?: unknown;
    tags?: unknown;
    image?: unknown;
    images?: unknown;
  };

  if (!data.title || typeof data.title !== "string") {
    throw new Error(`Blog post '${slug}' is missing a string frontmatter field: title`);
  }
  if (!data.date || typeof data.date !== "string") {
    throw new Error(`Blog post '${slug}' is missing a string frontmatter field: date`);
  }

  const tags = Array.isArray(data.tags) ? data.tags.filter((t) => typeof t === "string") : undefined;

  const image = typeof data.image === "string" ? data.image : undefined;
  const images = Array.isArray(data.images) ? data.images.filter((i) => typeof i === "string") : undefined;

  return {
    meta: {
      slug,
      title: data.title,
      date: data.date,
      description: typeof data.description === "string" ? data.description : undefined,
      tags,
      image,
      images,
    },
    content: parsed.content,
  };
}

export function getAllBlogPostsMeta(): BlogPostMeta[] {
  const slugs = getBlogSlugs();
  const posts = slugs.map((slug) => getBlogPostRawBySlug(slug).meta);

  return posts.sort((a, b) => {
    const ad = new Date(a.date).getTime();
    const bd = new Date(b.date).getTime();
    return bd - ad;
  });
}

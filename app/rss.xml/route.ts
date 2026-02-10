import { getAllBlogPostsMeta } from "@/lib/blog";

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = "https://soniaprojects.pl";
  const posts = getAllBlogPostsMeta();

  const items = posts
    .map((p) => {
      const url = `${baseUrl}/blog/${p.slug}`;
      const title = escapeXml(p.title);
      const description = escapeXml(p.description ?? "");
      const pubDate = new Date(p.date).toUTCString();

      return `\n    <item>\n      <title>${title}</title>\n      <link>${url}</link>\n      <guid>${url}</guid>\n      <pubDate>${pubDate}</pubDate>\n      ${description ? `<description>${description}</description>` : ""}\n    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml("Sonia Projects – Blog")}</title>
    <link>${baseUrl}/blog</link>
    <description>${escapeXml("Wpisy o architekturze wnętrz i projektowaniu.")}</description>
    <language>pl</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

import { MetadataRoute } from "next";
import { getAllBlogPostsMeta } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://soniaprojects.pl";
  const posts = getAllBlogPostsMeta();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },

    // Money/lead pages
    { url: `${baseUrl}/architekt-wnetrz-warszawa`, lastModified: new Date() },
    { url: `${baseUrl}/wizualizacje-3d-wnetrz-warszawa`, lastModified: new Date() },
    { url: `${baseUrl}/projekt-kuchni-warszawa`, lastModified: new Date() },

    // Hubs
    { url: `${baseUrl}/blog/remont-mieszkania`, lastModified: new Date() },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...blogRoutes];
}

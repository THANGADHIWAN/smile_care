import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { POSTS } from "@/lib/blog";
import { LOCATIONS } from "@/lib/locations";

const BASE_URL = "https://glow-dental-chat.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const now = new Date().toISOString().split('T')[0];
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: now },
          { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: now },
          { path: "/services", changefreq: "monthly", priority: "0.9", lastmod: now },
          { path: "/gallery", changefreq: "monthly", priority: "0.7", lastmod: now },
          { path: "/tips", changefreq: "weekly", priority: "0.7", lastmod: now },
          { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: now },
          { path: "/contact", changefreq: "monthly", priority: "0.9", lastmod: now },
          ...POSTS.map((p) => ({ 
            path: `/blog/${p.slug}`, 
            changefreq: "monthly" as const, 
            priority: "0.6",
            lastmod: p.date 
          })),
          ...LOCATIONS.map((l) => ({ 
            path: `/dentist-in/${l.slug}`, 
            changefreq: "monthly" as const, 
            priority: "0.8",
            lastmod: now 
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

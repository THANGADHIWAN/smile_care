import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { POSTS } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Dental Health Blog — Muthu Dental Clinic, Panruti" },
      {
        name: "description",
        content:
          "Expert dental articles from Dr. Akash M. — root canal pricing, implants vs bridges, pediatric care and whitening aftercare. Written for patients in Panruti and surrounding Tamil Nadu.",
      },
      { property: "og:title", content: "Dental Blog — Muthu Dental Clinic" },
      { property: "og:description", content: "Patient-friendly dental articles by Dr. Akash M., Panruti." },
      { property: "og:url", content: "https://glow-dental-chat.lovable.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://glow-dental-chat.lovable.app/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Muthu Dental Clinic Blog",
          url: "https://glow-dental-chat.lovable.app/blog",
          blogPost: POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            url: `https://glow-dental-chat.lovable.app/blog/${p.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://glow-dental-chat.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://glow-dental-chat.lovable.app/blog" },
          ],
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">From the Clinic</p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground">
            Dental Health <span className="italic text-primary">Blog</span> — Dentist in Panruti
          </h1>

          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Honest, patient-friendly articles written by Dr. Akash M. — pricing, treatments and what to expect.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="block bg-card rounded-2xl p-6 border border-border hover:border-gold/60 hover:-translate-y-0.5 transition shadow-card h-full"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wider">
                    {p.category}
                  </span>
                  <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{p.readingTime}</span>
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

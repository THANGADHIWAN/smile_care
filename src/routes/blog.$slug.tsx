import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, MessageCircle } from "lucide-react";
import { getPost, POSTS } from "@/lib/blog";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ params, loaderData }) => {
    const url = `https://glow-dental-chat.lovable.app/blog/${params.slug}`;
    return {
      meta: [
        { title: `${loaderData?.title ?? "Article"} — Muthu Dental Clinic` },
        { name: "description", content: loaderData?.excerpt ?? "" },
        { property: "og:title", content: loaderData?.title ?? "Article" },
        { property: "og:description", content: loaderData?.excerpt ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: loaderData
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: loaderData.title,
                description: loaderData.excerpt,
                datePublished: loaderData.date,
                author: { "@type": "Person", name: "Dr. Akash M." },
                publisher: { "@type": "Organization", name: "Muthu Dental Clinic" },
                mainEntityOfPage: url,
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
                  { "@type": "ListItem", position: 3, name: loaderData.title, item: url },
                ],
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="pt-40 pb-20 text-center">
      <h1 className="font-display text-3xl">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-primary underline">Back to blog</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="pt-40 pb-20 text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();
  const waLink = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(
    `Hi, I just read "${post.title}" and would like to book an appointment.`,
  )}`;
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="pt-32 pb-24 px-4 sm:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="w-4 h-4" /> All articles
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />
            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
          </span>
          <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{post.readingTime}</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>

        <div className="mt-10 space-y-6 text-foreground leading-relaxed text-[17px]">
          {post.body.map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-gold/10 border border-gold/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <div className="font-display text-xl font-semibold">Have a question for Dr. Akash?</div>
            <div className="text-sm text-muted-foreground">Get a personal reply on WhatsApp — usually within an hour.</div>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" /> Chat with us
          </a>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl mb-4">Keep reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="block p-5 rounded-xl border border-border hover:border-gold/60 bg-card transition"
                >
                  <div className="text-xs text-primary uppercase tracking-wider font-semibold">{p.category}</div>
                  <div className="font-display text-lg mt-1">{p.title}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

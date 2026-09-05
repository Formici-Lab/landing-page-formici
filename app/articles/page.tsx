import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import ArticlesEmptyState from "../components/ArticlesEmptyState";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import { ARTICLES_QUERY } from "../../sanity/lib/queries";

// Incremental Static Regeneration: prerendered, refreshed at most once a minute.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Articles — Formici Creative Lab",
  description:
    "Insights on branding, design, and development from the Formici Creative Lab team.",
};

type ArticleListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: SanityImageSource;
  category?: string;
  author?: string;
  publishedAt?: string;
};

function formatDate(value?: string) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlesPage() {
  const articles = await client.fetch<ArticleListItem[]>(ARTICLES_QUERY);

  return (
    <main>
      <NavBar />

      <header className="bg-brown -mt-37 px-6 pt-44 pb-16 md:px-[100px] lg:px-[200px]">
        <Reveal className="flex max-w-[1040px] flex-col gap-4">
          <h1 className="font-sans text-[clamp(32px,6vw,64px)] leading-[1.1] font-extrabold text-white">
            Articles
          </h1>
          <p className="font-headline text-[clamp(16px,2.5vw,22px)] text-white/80">
            Insights on branding, design, and development from our team.
          </p>
        </Reveal>
      </header>

      <section className="bg-cream min-h-[40vh] px-6 py-16 md:px-[100px] lg:px-[200px]">
        {articles.length === 0 ? (
          <ArticlesEmptyState />
        ) : (
          <div className="mx-auto grid w-full max-w-[1040px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Reveal key={article._id} className="w-full">
                <Link
                  href={`/articles/${article.slug}`}
                  className="group flex w-full flex-col gap-3"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[30px]">
                    {article.coverImage ? (
                      <Image
                        src={urlFor(article.coverImage)
                          .width(800)
                          .height(550)
                          .fit("crop")
                          .auto("format")
                          .url()}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="bg-brown/30 h-full w-full" aria-hidden />
                    )}
                  </div>
                  {article.category ? (
                    <span className="text-orange font-sans text-sm font-bold tracking-wide uppercase">
                      {article.category}
                    </span>
                  ) : null}
                  <h2 className="text-brown font-sans text-2xl font-bold">
                    {article.title}
                  </h2>
                  {article.excerpt ? (
                    <p className="text-brown/70 font-headline line-clamp-3 text-base">
                      {article.excerpt}
                    </p>
                  ) : null}
                  <p className="text-brown/50 font-headline text-sm">
                    {[article.author, formatDate(article.publishedAt)]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

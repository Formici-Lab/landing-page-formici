import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";
import type { ComponentProps } from "react";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import PortableTextBody from "../../components/PortableTextBody";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import {
  ARTICLE_QUERY,
  ARTICLE_SLUGS_QUERY,
} from "../../../sanity/lib/queries";

export const revalidate = 60;

type Article = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: SanityImageSource;
  category?: string;
  author?: string;
  publishedAt?: string;
  body?: ComponentProps<typeof PortableText>["value"];
};

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(ARTICLE_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await client.fetch<Article | null>(ARTICLE_QUERY, { slug });
  if (!article) return { title: "Article not found — Formici Creative Lab" };
  return {
    title: `${article.title} — Formici Creative Lab`,
    description: article.excerpt,
  };
}

function formatDate(value?: string) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await client.fetch<Article | null>(ARTICLE_QUERY, { slug });

  if (!article) notFound();

  return (
    <main>
      <NavBar />

      <header className="bg-brown -mt-37 px-6 pt-44 pb-14 md:px-[100px] lg:px-[200px]">
        <Reveal className="mx-auto flex w-full max-w-[820px] flex-col gap-5">
          <Link href="/articles" className="text-orange font-sans text-sm font-bold">
            ← All articles
          </Link>
          {article.category ? (
            <span className="text-orange font-sans text-sm font-bold tracking-wide uppercase">
              {article.category}
            </span>
          ) : null}
          <h1 className="font-sans text-[clamp(28px,5vw,52px)] leading-[1.12] font-extrabold text-white">
            {article.title}
          </h1>
          <p className="font-headline text-base text-white/70">
            {[article.author, formatDate(article.publishedAt)]
              .filter(Boolean)
              .join(" · ")}
          </p>
        </Reveal>
      </header>

      <article className="bg-cream px-6 py-14 md:px-[100px] lg:px-[200px]">
        <div className="mx-auto w-full max-w-[820px]">
          {article.coverImage ? (
            <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-[30px]">
              <Image
                src={urlFor(article.coverImage)
                  .width(1600)
                  .height(900)
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          ) : null}

          {article.body ? <PortableTextBody value={article.body} /> : null}
        </div>
      </article>

      <Footer />
    </main>
  );
}

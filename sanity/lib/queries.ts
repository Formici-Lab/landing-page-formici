import { groq } from "next-sanity";

// List view — everything except the (heavy) article body.
export const ARTICLES_QUERY = groq`
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    category,
    author,
    publishedAt
  }
`;

// Single article by slug.
export const ARTICLE_QUERY = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    category,
    author,
    publishedAt,
    body
  }
`;

// Slugs only — used by generateStaticParams for prerendering.
export const ARTICLE_SLUGS_QUERY = groq`
  *[_type == "article" && defined(slug.current)]{ "slug": slug.current }
`;

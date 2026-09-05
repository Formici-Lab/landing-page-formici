import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { ComponentProps } from "react";

import { urlFor } from "../../sanity/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <span className="my-8 block overflow-hidden rounded-[20px]">
          {/* Body images have unknown dimensions, so a plain img keeps aspect ratio intact. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(value).width(1600).fit("max").auto("format").url()}
            alt={value.alt || ""}
            className="h-auto w-full"
          />
        </span>
      );
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="text-brown/90 mb-5 text-lg leading-relaxed">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-brown mt-10 mb-4 font-sans text-3xl font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-brown mt-8 mb-3 font-sans text-2xl font-bold">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-orange text-brown/80 my-6 border-l-4 pl-5 text-lg italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="text-brown/90 mb-5 list-disc space-y-2 pl-6 text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="text-brown/90 mb-5 list-decimal space-y-2 pl-6 text-lg">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="text-brown font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href: string = value?.href || "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          className="text-orange underline underline-offset-2"
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextBody({
  value,
}: {
  value: ComponentProps<typeof PortableText>["value"];
}) {
  return <PortableText value={value} components={components} />;
}

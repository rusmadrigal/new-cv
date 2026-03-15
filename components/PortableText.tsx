"use client";

import { PortableText as BasePortableText } from "@portabletext/react";
import Image from "next/image";
import { createImageUrlBuilder } from "@sanity/image-url";
import { projectId, dataset } from "@/lib/sanity";
import type { PortableTextBlock, PortableTextComponents } from "@portabletext/react";

const builder = createImageUrlBuilder({ projectId, dataset });

function urlFor(source: { _ref?: string; asset?: { _ref?: string } }) {
  return builder.image(source);
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold text-white mt-8 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold text-gray-200 mt-6 mb-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500/50 pl-4 my-4 text-gray-400 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-gray-800 text-gray-300 text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlFor(value).width(1200).url();
      const alt = (value as { alt?: string }).alt ?? "";
      const caption = (value as { caption?: string }).caption;
      return (
        <figure className="my-6">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-800">
            <Image
              src={url}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
          {caption && (
            <figcaption className="text-sm text-gray-500 mt-2 text-center">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

interface PortableTextProps {
  value: PortableTextBlock[];
}

export function PortableText({ value }: PortableTextProps) {
  if (!value?.length) return null;
  return <BasePortableText value={value} components={components} />;
}

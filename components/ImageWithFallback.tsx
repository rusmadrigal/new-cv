"use client";

import { useState } from "react";
import Image from "next/image";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  /** Para LCP y layout estable; por defecto tamaño avatar hero */
  sizes?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  width = 160,
  height = 160,
  priority = false,
  sizes,
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  if (didError) {
    return (
      <div
        className={`flex bg-gray-800 text-center align-middle rounded-full items-center justify-center overflow-hidden ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          className={className}
          width={width}
          height={height}
        />
      </div>
    );
  }

  const isLocal = src.startsWith("/");

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setDidError(true)}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      unoptimized={!isLocal}
      sizes={sizes ?? "(max-width: 768px) 128px, 160px"}
    />
  );
}

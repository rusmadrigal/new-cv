import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import Link from "next/link";
import { siteUrl } from "@/lib/site";

type SmartLinkProps = PropsWithChildren<
  Pick<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "onClick" | "download"
  > & { href: string }
>;

/**
 * Enlaces internos con `next/link` (prefetch, navegación optimizada).
 * Externos y `mailto:`/`tel:`/`#` siguen siendo `<a>`.
 */
function toInternalPath(href: string): string | null {
  if (
    !href ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("javascript:")
  ) {
    return null;
  }
  if (href.startsWith("#")) return null;

  try {
    if (href.startsWith("/")) return href;
    const origin = new URL(siteUrl).origin;
    const u = new URL(href, siteUrl);
    if (u.origin === origin) {
      return `${u.pathname}${u.search}${u.hash}`;
    }
  } catch {
    return null;
  }
  return null;
}

export function SmartLink({
  href,
  className,
  children,
  onClick,
  download,
}: SmartLinkProps) {
  const internal = toInternalPath(href);
  if (internal) {
    return (
      <Link
        href={internal}
        className={className}
        onClick={onClick}
        download={download}
      >
        {children}
      </Link>
    );
  }
  const isExternal = /^https?:\/\//i.test(href);
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      download={download}
      {...(isExternal
        ? { target: "_blank" as const, rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

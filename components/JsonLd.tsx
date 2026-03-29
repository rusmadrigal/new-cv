import { buildSiteJsonLdGraph } from "@/lib/jsonld";

/** Global Person + WebSite in a single @graph (no duplicate Person on /es). */
export function SiteJsonLdGraph() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildSiteJsonLdGraph()),
      }}
    />
  );
}

import {
  buildEsServiciosIndexJsonLd,
  buildSiteJsonLdGraph,
} from "@/lib/jsonld";

/**
 * Person + WebSite (grafo global). Incluido en home, listados y páginas de detalle
 * que no llevan JSON-LD combinado. Las landings EN `/services/[slug]` usan un único
 * bloque que ya mezcla esto + servicio + WebPage + breadcrumb + FAQ.
 */
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

/** `/es/servicios` — incluye ProfessionalService con areaServed LATAM + Costa Rica. */
export function EsServiciosIndexJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildEsServiciosIndexJsonLd()),
      }}
    />
  );
}

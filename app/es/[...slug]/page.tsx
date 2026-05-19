import { notFound } from "next/navigation";

/**
 * Cualquier ruta /es/... no cubierta por páginas concretas → 404 en español
 * (app/es/not-found.tsx).
 */
export default function EsUnknownPath() {
  notFound();
}

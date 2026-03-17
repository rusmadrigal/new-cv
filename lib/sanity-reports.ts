import type { PortableTextBlock } from "@portabletext/types";
import { client } from "@/lib/sanity";

export interface ClientForAuth {
  _id: string;
  email: string;
  password: string | null;
}

export interface MonthlyReportListItem {
  _id: string;
  title: string;
  month: string;
  fileUrl: string | null;
}

export interface MonthlyReportPage extends MonthlyReportListItem {
  content: PortableTextBlock[] | null;
}

export interface SeoTaskItem {
  _id: string;
  title: string;
  description: string | null;
  status: "in_progress" | "completed";
  completedAt: string | null;
}

const clientByEmailQuery = `*[_type == "client" && email == $email][0] {
  _id,
  email,
  password
}`;

const monthlyReportsByClientQuery = `*[_type == "monthlyReport" && client._ref == $clientId] | order(month desc) {
  _id,
  title,
  month,
  fileUrl
}`;

const monthlyReportByIdQuery = `*[_type == "monthlyReport" && _id == $id && client._ref == $clientId][0] {
  _id,
  title,
  month,
  fileUrl,
  content
}`;

const seoTasksByClientQuery = `*[_type == "seoTask" && client._ref == $clientId] | order(status asc, completedAt desc) {
  _id,
  title,
  description,
  status,
  completedAt
}`;

export async function getClientByEmail(
  email: string
): Promise<ClientForAuth | null> {
  const normalized = email.trim().toLowerCase().replace(/\s+/g, "");
  // Try lowercase first (como está en Studio), luego exacto
  let data = await client.fetch<ClientForAuth | null>(clientByEmailQuery, {
    email: normalized,
  });
  if (!data && normalized !== email.trim()) {
    data = await client.fetch<ClientForAuth | null>(clientByEmailQuery, {
      email: email.trim(),
    });
  }
  return data ?? null;
}

export async function getMonthlyReportsByClientId(
  clientId: string
): Promise<MonthlyReportListItem[]> {
  const data = await client.fetch<MonthlyReportListItem[]>(
    monthlyReportsByClientQuery,
    { clientId }
  );
  return data ?? [];
}

export async function getMonthlyReportById(
  id: string,
  clientId: string
): Promise<MonthlyReportPage | null> {
  const data = await client.fetch<MonthlyReportPage | null>(
    monthlyReportByIdQuery,
    { id, clientId }
  );
  return data ?? null;
}

export async function getSeoTasksByClientId(
  clientId: string
): Promise<SeoTaskItem[]> {
  const data = await client.fetch<SeoTaskItem[]>(seoTasksByClientQuery, {
    clientId,
  });
  return data ?? [];
}

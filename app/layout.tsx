import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rusben Madrigal | Senior Technical SEO",
  description:
    "Senior SEO professional with 10+ years of experience specializing in Technical SEO, large-scale websites, and AI-assisted workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="min-h-screen bg-black text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

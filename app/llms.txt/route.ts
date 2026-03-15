import { siteUrl, siteName, siteDescription, person } from "@/lib/site";

export function GET() {
  const body = `# ${siteName}

${siteDescription}

## About
${person.name} - ${person.jobTitle}
${person.tagline}

## Links
- Website: ${siteUrl}
- LinkedIn: ${person.linkedin}
- GitHub: ${person.github}
- Email: ${person.email}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

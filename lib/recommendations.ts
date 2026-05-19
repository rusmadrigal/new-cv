import type { Locale } from "./translations";

export interface Recommendation {
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany?: string;
}

const LINKEDIN_RECOMMENDATIONS_URL =
  "https://www.linkedin.com/in/rusmadrigal/details/recommendations/";

/**
 * Real LinkedIn recommendations. Order: most recent first.
 * EN: original English + Irene's translated to English.
 * ES: original Spanish (Irene) + others translated to Spanish.
 */
const recommendations: Record<Locale, Recommendation[]> = {
  en: [
    {
      quote:
        "Discovering true and good SEO's in Central America is something like finding a needle in a haystack. If you come upon Rusben you have found a golden needle. Take care of it!",
      authorName: "Rodrigo de Bedout",
      authorRole:
        "Precision-Engineered Growth Systems for Scalable Customer Acquisition",
      authorCompany: "Managed Rusben directly",
    },
    {
      quote:
        "I've had the pleasure of working with Rusben on SEO matters and I can assure you he is excellent! I've learned a lot from him—he's one of the best SEOs I've met in Costa Rica.",
      authorName: "Irene Hidalgo",
      authorRole: "Entrepreneur",
      authorCompany: "Worked with Rusben on the same team",
    },
    {
      quote:
        "Rusben is a very responsible and diligent person, I like to recommend his services.",
      authorName: "Christian Salazar",
      authorRole: "Co-Owner",
      authorCompany: "Jaco Real Estate CR · Real Estate Experts",
    },
    {
      quote:
        "Rusben gets the job done and when something is wrong he makes it right. Excellent worker and a better person.",
      authorName: "Norman Warren",
      authorRole: "Owner",
      authorCompany: "Electroflow SA, San Jose, Costa Rica",
    },
    {
      quote:
        "Rusben is a multi talented young man with excellent customer service skills. He always responds with a professional, up beat and genuinely attentive attitude to all work projects under his responsibility. He has strong personal ethics and is not drawn into negative actions of other less committed colleagues. He enjoys working as a team, but also independently created and implemented several new systems, demonstrating creative problem solving skills. I would definitely rehire Rusben, or would work with him again should our professional lives intersect again.",
      authorName: "Faith Anne Mulvihill",
      authorRole: "Licensed Real Estate Broker",
      authorCompany:
        "Chicago / Vacation Home Specialist Costa Rica · Managed Rusben directly",
    },
    {
      quote:
        "I have worked with Rusben for approx. 6 years. Rusben is an extremely knowledgeable, energetic, organized and detailed person. Rusben has helped my company excel with his assistance. He has extensive knowledge in business and network marketing. I will continue to utilize Rusben's services and enjoy the results.",
      authorName: "Ken Armour",
      authorRole: "Construction/Development",
      authorCompany: "KBA Company",
    },
  ],
  es: [
    {
      quote:
        "Encontrar SEOs verdaderos y buenos en Centroamérica es como buscar una aguja en un pajar. Si te encuentras con Rusben, has encontrado una aguja de oro. ¡Cuídala!",
      authorName: "Rodrigo de Bedout",
      authorRole:
        "Precision-Engineered Growth Systems for Scalable Customer Acquisition",
      authorCompany: "Fue mi manager directo",
    },
    {
      quote:
        "He tenido la dicha de trabajar con Rusben en asuntos de SEO y puedo asegurar que es excelente! He aprendido mucho de él, es de los mejores SEOs que he conocido en Costa Rica.",
      authorName: "Irene Hidalgo",
      authorRole: "Emprendedora",
      authorCompany: "Trabajamos en el mismo equipo",
    },
    {
      quote:
        "Rusben es una persona muy responsable y diligente. Me gusta recomendar sus servicios.",
      authorName: "Christian Salazar",
      authorRole: "Co-Owner",
      authorCompany: "Jaco Real Estate CR · Real Estate Experts",
    },
    {
      quote:
        "Rusben cumple con el trabajo y cuando algo sale mal lo corrige. Excelente trabajador y mejor persona.",
      authorName: "Norman Warren",
      authorRole: "Owner",
      authorCompany: "Electroflow SA, San José, Costa Rica",
    },
    {
      quote:
        "Rusben es un joven multitalentoso con excelentes habilidades de servicio al cliente. Siempre responde con una actitud profesional, positiva y genuinamente atenta en todos los proyectos bajo su responsabilidad. Tiene una ética personal sólida y no se deja llevar por acciones negativas de otros colegas menos comprometidos. Disfruta trabajar en equipo, pero también creó e implementó de forma independiente varios sistemas nuevos, demostrando capacidad de resolución creativa de problemas. Sin duda lo volvería a contratar o trabajaría con él de nuevo si nuestras vidas profesionales se cruzan otra vez.",
      authorName: "Faith Anne Mulvihill",
      authorRole: "Licensed Real Estate Broker",
      authorCompany:
        "Chicago / Vacation Home Specialist Costa Rica · Fue mi manager directa",
    },
    {
      quote:
        "He trabajado con Rusben aproximadamente 6 años. Rusben es una persona extremadamente conocedora, enérgica, organizada y detallista. Ha ayudado a mi empresa a destacar con su apoyo. Tiene amplio conocimiento en negocios y network marketing. Continuaré utilizando los servicios de Rusben y disfrutando los resultados.",
      authorName: "Ken Armour",
      authorRole: "Construction/Development",
      authorCompany: "KBA Company",
    },
  ],
};

export function getRecommendations(locale: Locale): Recommendation[] {
  return recommendations[locale] ?? recommendations.en;
}

export { LINKEDIN_RECOMMENDATIONS_URL };

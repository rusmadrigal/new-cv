export type Locale = "en" | "es";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      video: "Video",
      skills: "Skills",
      experience: "Experience",
      caseStudies: "Case Studies",
      tools: "Tools",
      expertise: "Expertise",
      education: "Education",
      recommendations: "Recommendations",
      contact: "Contact",
      more: "More",
      letsTalk: "Let's Talk",
      navigation: "Navigation",
      closeMenu: "Close menu",
      spanish: "Español",
      english: "English",
    },
    hero: {
      subtitle:
        "Senior Technical SEO | AI-Driven SEO, Web Performance & Growth",
      bio: "SEO professional with 10+ years of experience specializing in Technical SEO, large-scale websites, and AI-assisted workflows. Strong technical expertise across JavaScript environments, web performance optimization, and scalable organic growth strategies.",
      viewExperience: "View Experience",
      downloadResume: "Download Resume",
      contactMe: "Contact Me",
    },
    about: {
      title: "About Me",
      p1: "Technical SEO strategist with more than a decade of experience working with large-scale international websites and global brands.",
      p2: "My work focuses on the intersection of SEO, engineering, and data. I specialize in improving crawlability, rendering behavior, Core Web Vitals, and structured data implementations across modern JavaScript environments.",
      p3: "I frequently collaborate with product, engineering, and analytics teams to solve complex technical challenges and drive sustainable organic growth.",
    },
    video: {
      badge: "Video introduction",
      title: "Get to Know Me",
      description:
        "Watch a short intro to my background, experience, and approach to Technical SEO and Growth.",
      videoTitle: "Hi, I'm Rusben!",
      videoSubtitle: "Technical SEO & Growth",
      videoA11y: "Hi, I'm Rusben – intro video",
      yearsExperience: "Years SEO Experience",
      languages: "Languages",
      toolsPlatforms: "Tools & Platforms",
    },
    skills: {
      title: "Core Skills",
      list: [
        "SEO Strategy",
        "IA / AI-Driven SEO",
        "Web Performance Optimization",
        "Technical SEO",
        "JavaScript SEO",
        "Next.js / Rendering",
        "Site Architecture",
        "Crawlability & Indexation",
        "Core Web Vitals",
        "Structured Data (JSON-LD)",
        "Log File Analysis",
        "GA4",
        "GTM",
        "Looker Studio",
        "SQL",
        "Lighthouse & PageSpeed Insights",
      ],
    },
    experience: {
      title: "Experience",
      wantFull: "Want to see my full experience and background?",
      downloadCv: "Download my CV",
      items: [
        {
          company: "Publicis Groupe",
          role: "SEO Associate Director",
          location: "Costa Rica",
          period: "February 2023 – January 2026",
          description:
            "As a Media Delivery Associate Director, I lead the LATAM SEO Delivery team and oversee technical SEO initiatives across large-scale, multilingual websites.",
          highlights: [
            "Drive technical SEO strategy with a focus on site architecture, crawlability and indexation, Core Web Vitals optimization, structured data, and rendering behavior across JS- and PHP-based environments.",
            "Lead the adoption of AI-assisted and automated SEO workflows to support technical audits, issue prioritization, and scalable recommendations across markets.",
            "Collaborate closely with engineering, analytics, and content teams to diagnose complex issues, implement efficient solutions, and deliver measurable organic growth for global brands.",
          ],
        },
        {
          company: "Advision Development",
          role: "Technical SEO Manager",
          location: "Costa Rica",
          period: "May 2022 – October 2022",
          description:
            "Solved complex Technical SEO challenges across large-scale, multilingual architectures, including PHP- and JavaScript-based technology stacks.",
          highlights: [
            "Led technical audits, Core Web Vitals optimization, structured data implementation, log file analysis, and scalable internal linking models to improve organic visibility and crawl efficiency.",
            "Provided technical SEO guidance for offshore/onshore Sportsbook operations, supporting brands such as SportsbookReview.com, BookmakersReview.com, OddsTrader.com, Predictem.com, and others.",
            "Partnered closely with development teams to implement architecture improvements, ensure correct rendering and indexation, and drive measurable performance growth across high-traffic environments.",
          ],
        },
        {
          company: "The Strategic Group",
          role: "Senior Technical SEO",
          location: "San José, Costa Rica",
          period: "May 2020 – April 2021",
          description:
            "Specialized in technical SEO optimization for web performance and code quality.",
          highlights: [
            "Page speed monitoring and improvement.",
            "Code improvement and optimization (PHP and ReactJS).",
            "On-page optimization (metadata, internal links, etc.).",
            "Implementation, improvement and maintenance of Schema Markup.",
            "Sitemaps.xml and .zip structure optimization.",
            "Highlight: recovered a brand website from an algorithmic penalty caused by a low-quality link purchase.",
          ],
        },
        {
          company: "Tripadvisor",
          role: "Senior Technical SEO",
          location: "Remote",
          period: "February 2018 – April 2020",
          description:
            "Worked on large-scale international platforms to improve technical SEO performance.",
          highlights: [
            "Code improvement and optimization (PHP).",
            "On-page optimization (metadata, internal links, etc.).",
            "Improved web rendering.",
            "Implementation, improvement and maintenance of Schema Markup.",
            "Sitemaps.xml and .zip structure optimization.",
          ],
        },
      ],
    },
    caseStudies: {
      title: "Case Studies",
      subtitle:
        "Real-world technical SEO projects delivering measurable organic growth and performance improvements",
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      viewDetails: "View Details",
      backToList: "Back to Case Studies",
      video: "Video",
      gallery: "Gallery",
      noCaseStudies: "No case studies yet.",
      addInSanity: "Add content in Sanity Studio (e.g. /studio)",
      listTitle: "Case Studies",
      listSubtitle:
        "Real-world technical SEO projects delivering measurable organic growth and performance improvements",
    },
    tools: {
      title: "Tools & Platforms",
      list: [
        "Google Search Console",
        "Screaming Frog",
        "Ahrefs",
        "SEMrush",
        "Sitebulb",
        "GA4",
        "Adobe Analytics",
        "Looker Studio",
      ],
    },
    expertise: {
      title: "Technical Expertise",
      items: [
        {
          title: "Technical SEO Audits",
          description:
            "Comprehensive technical analysis of large-scale websites to identify optimization opportunities and improve organic performance.",
        },
        {
          title: "JavaScript SEO",
          description:
            "Expertise in rendering behavior, indexation strategies, and optimization for modern JavaScript frameworks like Next.js and React.",
        },
        {
          title: "Core Web Vitals Optimization",
          description:
            "Performance optimization focusing on LCP, FID, and CLS to improve user experience and search rankings.",
        },
        {
          title: "Structured Data Implementation",
          description:
            "Implementation and maintenance of JSON-LD schema markup to enhance search visibility and rich results.",
        },
        {
          title: "Log File Analysis",
          description:
            "Deep analysis of crawl patterns and server logs to optimize crawl budget and improve indexation efficiency.",
        },
        {
          title: "SEO Automation & AI Workflows",
          description:
            "Development of AI-assisted workflows and automated processes to scale SEO operations and accelerate analysis.",
        },
      ],
    },
    education: {
      languages: "Languages",
      education: "Education",
      fullProfessional: "Full Professional",
      nativeBilingual: "Native or Bilingual",
      langEnglish: "English",
      langSpanish: "Español",
      items: [
        {
          institution: "McKinsey & Company (McKinsey Accelerate)",
          degree:
            "Professional Development Program (Leadership, Problem Solving, and Business Skills)",
          field: "Business & Leadership",
          period: "April 2026 – June 2026",
        },
        {
          institution: "Universidad de La Sabana (Colombia)",
          degree: "Agile Methodologies and Organizational Innovation",
          field: "Marketing",
          period: "October 2023 – February 2024",
        },
        {
          institution: "Le Studio by PGD",
          degree: "Management Development Program 2024",
          field: "Marketing",
          period: "April 2024 – May 2024",
        },
        {
          institution: "Colegio Universitario Boston",
          degree:
            "Frontend Engineer · Web Design – HTML, CSS, JavaScript, jQuery & PHP",
          field: "Web Development",
          period: "September 2008 – March 2010",
        },
        {
          institution: "Instituto Universitario Jimenez",
          degree: "Computer Operator Training (Databases & Web Development)",
          field: "Computing",
          period: "May 2005 – May 2006",
        },
        /* Universidad Latina — oculto en front; descomentar si volvés a mostrarlo
        {
          institution: "Universidad Latina de Costa Rica",
          degree:
            "Degree of Business Administration with emphasis in Marketing & Sales",
          field: "Marketing",
          period: "2012 – 2014",
        },
        {
          institution: "Universidad Latina de Costa Rica",
          degree:
            "Bachelor of Business Administration with emphasis in Marketing & Sales",
          field: "Empresa, gestión, marketing y disciplinas afines",
          period: "2007 – 2010",
        },
        */
      ],
    },
    recommendations: {
      title: "What others say",
      subtitle: "Recommendations from colleagues and managers on LinkedIn.",
      readOnLinkedIn: "Read all on LinkedIn",
    },
    contact: {
      title: "Open to opportunities",
      subtitle:
        "I'm open to technical SEO and growth roles on large-scale sites. If you're a recruiter or hiring manager looking for someone with 10+ years driving organic growth, let's connect.",
      backToTop: "Back to Top",
      linkedInAria: "Open LinkedIn profile",
      githubAria: "Open GitHub profile",
      youtubeAria: "Open YouTube channel",
    },
    footer: {
      rights: "All rights reserved.",
      about: "About",
      experience: "Experience",
      contact: "Contact",
      privacy: "Privacy Policy",
      servicesSeo: "SEO services",
      location: "San Jose, Costa Rica",
    },
    cookie: {
      headline: "Hey, I'm tracking you.",
      message:
        "Only cookies — nothing creepy. Read the fine print or accept and carry on.",
      accept: "Accept",
      privacyLink: "Privacy Policy",
    },
    caseStudyMeta: "Case study by Rusben Madrigal.",
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      video: "Video",
      skills: "Habilidades",
      experience: "Experiencia",
      caseStudies: "Casos de estudio",
      tools: "Herramientas",
      expertise: "Experiencia técnica",
      education: "Formación",
      recommendations: "Recomendaciones",
      contact: "Contacto",
      more: "Más",
      letsTalk: "Hablemos",
      navigation: "Navegación",
      closeMenu: "Cerrar menú",
      spanish: "Español",
      english: "English",
    },
    hero: {
      subtitle:
        "Senior Technical SEO | SEO con IA, rendimiento web y crecimiento",
      bio: "Profesional SEO con más de 10 años de experiencia, especializado en SEO técnico, sitios web a gran escala y flujos de trabajo con IA. Sólida experiencia técnica en entornos JavaScript, optimización del rendimiento web y estrategias de crecimiento orgánico escalables.",
      viewExperience: "Ver experiencia",
      downloadResume: "Descargar CV",
      contactMe: "Contactar",
    },
    about: {
      title: "Sobre mí",
      p1: "Estratega de SEO técnico con más de una década de experiencia en sitios web internacionales a gran escala y marcas globales.",
      p2: "Mi trabajo se centra en la intersección de SEO, engineering y datos. Me especializo en mejorar crawlability, rendering behavior, Core Web Vitals e implementación de structured data en entornos JavaScript modernos.",
      p3: "Colaboro con equipos de producto, engineering y analytics para resolver retos técnicos complejos e impulsar un crecimiento orgánico sostenible.",
    },
    video: {
      badge: "Video de presentación",
      title: "Conóceme",
      description:
        "Mira una breve introducción sobre mi trayectoria, experiencia y enfoque en marketing digital y SEO",
      videoTitle: "¡Hola, soy Rusben!",
      videoSubtitle: "Technical SEO & Growth",
      videoA11y: "Video de presentación de Rusben Madrigal",
      yearsExperience: "Años de experiencia en SEO",
      languages: "Idiomas",
      toolsPlatforms: "Herramientas y plataformas",
    },
    skills: {
      title: "Habilidades principales",
      list: [
        "Estrategia SEO",
        "IA / SEO impulsado por IA",
        "Optimización de rendimiento web",
        "SEO técnico",
        "JavaScript SEO",
        "Next.js / Renderizado",
        "Arquitectura de sitio",
        "Rastreabilidad e indexación",
        "Core Web Vitals",
        "Datos estructurados (JSON-LD)",
        "Análisis de logs",
        "GA4",
        "GTM",
        "Looker Studio",
        "SQL",
        "Lighthouse y PageSpeed Insights",
      ],
    },
    experience: {
      title: "Experiencia",
      wantFull: "¿Quieres ver mi experiencia y trayectoria completa?",
      downloadCv: "Descargar mi CV",
      items: [
        {
          company: "Publicis Groupe",
          role: "SEO Associate Director",
          location: "Costa Rica",
          period: "Febrero 2023 – Enero 2026",
          description:
            "Como Associate Director de Media Delivery, lidero el equipo de SEO Delivery para LATAM y superviso iniciativas de SEO técnico en sitios multilingües a gran escala.",
          highlights: [
            "Impulso la estrategia de SEO técnico en arquitectura de sitio, rastreabilidad e indexación, optimización de Core Web Vitals, datos estructurados y comportamiento de renderizado en entornos JS y PHP.",
            "Lidero la adopción de flujos de trabajo SEO asistidos por IA y automatizados para auditorías técnicas, priorización de incidencias y recomendaciones escalables en mercados.",
            "Colaboro con equipos de ingeniería, analítica y contenido para diagnosticar problemas complejos, implementar soluciones eficientes y lograr un crecimiento orgánico medible para marcas globales.",
          ],
        },
        {
          company: "Advision Development",
          role: "Technical SEO Manager",
          location: "Costa Rica",
          period: "Mayo 2022 – Octubre 2022",
          description:
            "Resolución de retos de SEO técnico en arquitecturas multilingües a gran escala, incluyendo stacks PHP y JavaScript.",
          highlights: [
            "Lideré auditorías técnicas, optimización de Core Web Vitals, implementación de datos estructurados, análisis de logs y modelos de enlazado interno escalables para mejorar la visibilidad orgánica y la eficiencia de rastreo.",
            "Brindé orientación de SEO técnico para operaciones Sportsbook, apoyando marcas como SportsbookReview.com, BookmakersReview.com, OddsTrader.com, Predictem.com, entre otras.",
            "Trabajé con equipos de desarrollo para implementar mejoras de arquitectura, garantizar un renderizado e indexación correctos y lograr un crecimiento de rendimiento medible en entornos de alto tráfico.",
          ],
        },
        {
          company: "The Strategic Group",
          role: "Senior Technical SEO",
          location: "San José, Costa Rica",
          period: "Mayo 2020 – Abril 2021",
          description:
            "Especializado en optimización de SEO técnico para rendimiento web y calidad de código.",
          highlights: [
            "Monitoreo y mejora de velocidad de página.",
            "Mejora y optimización de código (PHP y ReactJS).",
            "Optimización on-page (metadatos, enlaces internos, etc.).",
            "Implementación, mejora y mantenimiento de Schema Markup.",
            "Optimización de estructura de Sitemaps.xml y .zip.",
            "Destacado: recuperé un sitio de marca de una penalización algorítmica por compra de enlaces de baja calidad.",
          ],
        },
        {
          company: "Tripadvisor",
          role: "Senior Technical SEO",
          location: "Remoto",
          period: "Febrero 2018 – Abril 2020",
          description:
            "Trabajé en plataformas internacionales a gran escala para mejorar el rendimiento de SEO técnico.",
          highlights: [
            "Mejora y optimización de código (PHP).",
            "Optimización on-page (metadatos, enlaces internos, etc.).",
            "Mejora del renderizado web.",
            "Implementación, mejora y mantenimiento de Schema Markup.",
            "Optimización de estructura de Sitemaps.xml y .zip.",
          ],
        },
      ],
    },
    caseStudies: {
      title: "Casos de estudio",
      subtitle:
        "Proyectos reales de SEO técnico con crecimiento orgánico y mejoras de rendimiento medibles",
      challenge: "Reto",
      solution: "Solución",
      results: "Resultados",
      viewDetails: "Ver detalle",
      backToList: "Volver a casos de estudio",
      video: "Video",
      gallery: "Galería",
      noCaseStudies: "Aún no hay casos de estudio.",
      addInSanity: "Añade contenido en Sanity Studio (ej. /studio)",
      listTitle: "Casos de estudio",
      listSubtitle:
        "Proyectos reales de SEO técnico con crecimiento orgánico y mejoras de rendimiento medibles",
    },
    tools: {
      title: "Herramientas y plataformas",
      list: [
        "Google Search Console",
        "Screaming Frog",
        "Ahrefs",
        "SEMrush",
        "Sitebulb",
        "GA4",
        "Adobe Analytics",
        "Looker Studio",
      ],
    },
    expertise: {
      title: "Experiencia técnica",
      items: [
        {
          title: "Auditorías de SEO técnico",
          description:
            "Análisis técnico integral de sitios a gran escala para identificar oportunidades de optimización y mejorar el rendimiento orgánico.",
        },
        {
          title: "JavaScript SEO",
          description:
            "Experiencia en comportamiento de renderizado, estrategias de indexación y optimización para frameworks JavaScript modernos como Next.js y React.",
        },
        {
          title: "Optimización Core Web Vitals",
          description:
            "Optimización de rendimiento centrada en LCP, FID y CLS para mejorar la experiencia de usuario y el posicionamiento.",
        },
        {
          title: "Implementación de datos estructurados",
          description:
            "Implementación y mantenimiento de schema markup JSON-LD para mejorar la visibilidad en búsqueda y resultados enriquecidos.",
        },
        {
          title: "Análisis de archivos de log",
          description:
            "Análisis profundo de patrones de rastreo y logs de servidor para optimizar el presupuesto de rastreo y la eficiencia de indexación.",
        },
        {
          title: "Automatización SEO y flujos con IA",
          description:
            "Desarrollo de flujos asistidos por IA y procesos automatizados para escalar operaciones SEO y acelerar el análisis.",
        },
      ],
    },
    education: {
      languages: "Idiomas",
      education: "Formación",
      fullProfessional: "Profesional completo",
      nativeBilingual: "Nativo o bilingüe",
      langEnglish: "Inglés",
      langSpanish: "Español",
      items: [
        {
          institution: "McKinsey & Company (McKinsey Accelerate)",
          degree:
            "Programa de desarrollo profesional (liderazgo, resolución de problemas y habilidades empresariales)",
          field: "Negocios y Liderazgo",
          period: "Abril 2026 – Junio 2026",
        },
        {
          institution: "Universidad de La Sabana (Colombia)",
          degree: "Metodologías ágiles e innovación en la organización",
          field: "Marketing",
          period: "Octubre 2023 – Febrero 2024",
        },
        {
          institution: "Le Studio by PGD",
          degree: "Programa de desarrollo gerencial 2024",
          field: "Marketing",
          period: "Abril 2024 – Mayo 2024",
        },
        {
          institution: "Colegio Universitario Boston",
          degree:
            "Ingeniería frontend · Diseño web – HTML, CSS, JavaScript, jQuery y PHP",
          field: "Desarrollo Web",
          period: "Septiembre 2008 – Marzo 2010",
        },
        {
          institution: "Instituto Universitario Jimenez",
          degree:
            "Capacitación en operador de computadoras (bases de datos y desarrollo web)",
          field: "Informática",
          period: "Mayo 2005 – Mayo 2006",
        },
        /* Universidad Latina — oculto en front; descomentar si volvés a mostrarlo
        {
          institution: "Universidad Latina de Costa Rica",
          degree:
            "Licenciatura en Administración de Empresas con énfasis en Marketing y Ventas",
          field: "Marketing",
          period: "2012 – 2014",
        },
        {
          institution: "Universidad Latina de Costa Rica",
          degree:
            "Bachillerato en Administración de Empresas con énfasis en Marketing y Ventas",
          field: "Empresa, gestión, marketing y disciplinas afines",
          period: "2007 – 2010",
        },
        */
      ],
    },
    recommendations: {
      title: "Lo que dicen de mí",
      subtitle: "Recomendaciones de colegas y managers en LinkedIn.",
      readOnLinkedIn: "Ver todas en LinkedIn",
    },
    contact: {
      title: "Abierto a oportunidades",
      subtitle:
        "Estoy abierto a roles de SEO técnico y growth en sitios a gran escala. Si eres reclutador o hiring manager y buscas a alguien con más de 10 años impulsando crecimiento orgánico, conectemos.",
      backToTop: "Volver arriba",
      linkedInAria: "Abrir perfil de LinkedIn",
      githubAria: "Abrir perfil de GitHub",
      youtubeAria: "Abrir canal de YouTube",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      about: "Sobre mí",
      experience: "Experiencia",
      contact: "Contacto",
      privacy: "Política de privacidad",
      servicesSeo: "Servicios de SEO",
      location: "San José, Costa Rica",
    },
    cookie: {
      headline: "Hey, te estoy trackeando.",
      message:
        "Solo cookies — nada raro. Lee la letra pequeña o acepta y sigue.",
      accept: "Aceptar",
      privacyLink: "Política de privacidad",
    },
    caseStudyMeta: "Caso de estudio de Rusben Madrigal.",
  },
};

export type TranslationKeys = (typeof translations)["en"];

export function getTranslations(locale: Locale): TranslationKeys {
  return (translations[locale] ?? translations.en) as TranslationKeys;
}

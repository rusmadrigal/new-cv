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
      showHeroPortrait: true,
      badge: "#OPENTOWORK",
      subtitle: "Senior Technical SEO | AI & Growth Strategy",
      bio: "SEO professional with 10+ years of experience specializing in Technical SEO, large-scale websites, and AI-assisted workflows. Strong technical expertise across JavaScript environments, web performance optimization, and scalable organic growth strategies.",
      viewExperience: "View Experience",
      downloadResume: "Download Resume",
      secondaryCtaHref: "",
      contactMe: "Contact Me",
    },
    about: {
      title: "About Me",
      portraitSrc: "",
      portraitAlt: "",
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
      languagesIntro: "",
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
        "Only cookies, nothing creepy. Read the fine print or accept and carry on.",
      accept: "Accept",
      privacyLink: "Privacy Policy",
    },
    caseStudyMeta: "Case study by Rusben Madrigal.",
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Enfoque",
      video: "Video",
      skills: "Habilidades",
      experience: "Trayectoria",
      caseStudies: "Resultados",
      tools: "Herramientas",
      expertise: "Servicios",
      education: "Idiomas",
      recommendations: "Reseñas",
      contact: "Contacto",
      more: "Más",
      letsTalk: "Agendar consulta",
      navigation: "Navegación",
      closeMenu: "Cerrar menú",
      spanish: "Español",
      english: "English",
    },
    hero: {
      showHeroPortrait: false,
      badge: "",
      subtitle: "Consultoría SEO Profesional",
      bio: "Ayudo a empresas en Costa Rica a ganar visibilidad en Google con consultoría SEO profesional: estrategia, contenido, aspectos técnicos e IA. Más de 10 años con marcas globales; ahora como consultor para tu negocio.",
      viewExperience: "Mi enfoque",
      downloadResume: "Servicios SEO",
      secondaryCtaHref: "/es/servicios",
      contactMe: "Agendar consulta",
    },
    about: {
      title: "Por qué trabajar conmigo",
      portraitSrc: "/rusben-about.png",
      portraitAlt:
        "Rusben Madrigal, consultor SEO profesional en Costa Rica, retrato profesional",
      p1: "Soy consultor de SEO profesional en Costa Rica, con más de una década impulsando visibilidad orgánica para sitios internacionales y marcas globales. Hoy me enfoco en empresas locales que quieren crecer con datos, no con promesas vacías.",
      p2: "Mi consultoría une SEO, ingeniería y analítica: arquitectura de sitio, rastreo e indexación, Core Web Vitals, datos estructurados y stacks JavaScript modernos (Next.js, React). Priorizo lo que mueve el negocio: tráfico cualificado, conversiones y sostenibilidad a largo plazo.",
      p3: "Trabajo con dueños de negocio, equipos de marketing y desarrollo en Costa Rica y LATAM. Si tu sitio no rinde en búsqueda o perdió tráfico, definimos un plan claro, ejecutable y medible, sin listas interminables desconectadas de tus objetivos.",
    },
    video: {
      badge: "Video de presentación",
      title: "Cómo trabajo",
      description:
        "Conoce mi forma de abordar proyectos de SEO: estrategia, diagnóstico, priorización y resultados medibles para empresas en Costa Rica.",
      videoTitle: "¡Hola, soy Rusben!",
      videoSubtitle: "Consultoría SEO Profesional",
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
      title: "Trayectoria",
      wantFull: "¿Necesitas más contexto sobre mi background antes de contratar?",
      downloadCv: "Descargar perfil (PDF)",
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
      title: "Resultados para clientes",
      subtitle:
        "Proyectos reales donde el SEO estratégico generó crecimiento orgánico y mejoras de rendimiento medibles, con el mismo nivel que aplico en consultoría",
      challenge: "Reto",
      solution: "Solución",
      results: "Resultados",
      viewDetails: "Ver detalle",
      backToList: "Volver a casos de estudio",
      video: "Video",
      gallery: "Galería",
      noCaseStudies: "Aún no hay casos de estudio.",
      addInSanity: "Añade contenido en Sanity Studio (ej. /studio)",
      listTitle: "Resultados para clientes",
      listSubtitle:
        "Evidencia de impacto en SEO: tráfico, rendimiento e indexación, como referencia para tu proyecto en Costa Rica",
    },
    tools: {
      title: "Stack de trabajo",
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
      title: "Qué puedo hacer por tu negocio",
      items: [
        {
          title: "Auditoría y diagnóstico SEO",
          description:
            "Revisión técnica completa de tu sitio: prioridades claras, quick wins y roadmap alineado a tus metas comerciales en Costa Rica.",
        },
        {
          title: "SEO para sitios JavaScript",
          description:
            "Indexación, renderizado y arquitectura en Next.js, React y SPAs, para que Google vea lo que tus usuarios ven.",
        },
        {
          title: "Core Web Vitals y velocidad",
          description:
            "Mejora de LCP, INP y CLS: mejor experiencia, mejor ranking y menos rebote en móvil.",
        },
        {
          title: "Datos estructurados (Schema)",
          description:
            "JSON-LD bien implementado para rich results, mayor CTR y señales claras para buscadores.",
        },
        {
          title: "Análisis de logs y rastreo",
          description:
            "Optimización del presupuesto de rastreo: qué indexa Google, qué desperdicia y dónde está el tráfico perdido.",
        },
        {
          title: "SEO con IA y automatización",
          description:
            "Flujos que aceleran auditorías y reporting sin sacrificar calidad, ideales para equipos pequeños en CR.",
        },
      ],
    },
    education: {
      languages: "Idiomas de trabajo",
      languagesIntro:
        "Proyectos SEO en Costa Rica y LATAM suelen requerir coordinación con equipos locales e internacionales, documentación y reporting en ambos idiomas.",
      education: "Formación",
      fullProfessional: "Profesional completo",
      nativeBilingual: "Nativo o bilingüe",
      langEnglish: "Inglés",
      langSpanish: "Español",
      items: [],
    },
    recommendations: {
      title: "Confianza de la industria",
      subtitle:
        "Lo que dicen colegas y líderes con los que he trabajado en proyectos de SEO a escala.",
      readOnLinkedIn: "Ver todas en LinkedIn",
    },
    contact: {
      title: "¿Hablamos de tu proyecto?",
      subtitle:
        "Si tienes una empresa en Costa Rica y quieres más tráfico orgánico, mejor rendimiento técnico o recuperar visibilidad perdida, escríbeme. Cuéntame tu sitio, mercado y objetivos; te respondo en menos de 24 horas.",
      backToTop: "Volver arriba",
      linkedInAria: "Abrir perfil de LinkedIn",
      githubAria: "Abrir perfil de GitHub",
      youtubeAria: "Abrir canal de YouTube",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      about: "Enfoque",
      experience: "Trayectoria",
      contact: "Contacto",
      privacy: "Política de privacidad",
      servicesSeo: "Servicios SEO",
      location: "Consultoría SEO Profesional · San José, Costa Rica",
    },
    cookie: {
      headline: "Hey, te estoy trackeando.",
      message:
        "Solo cookies, nada raro. Lee la letra pequeña o acepta y sigue.",
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

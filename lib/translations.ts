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
      subtitle: "Senior Technical SEO | AI-Driven SEO, Web Performance & Growth",
      bio: "Senior SEO professional with 10+ years of experience, specializing in Technical SEO for large-scale and international websites. Strong technical background across JavaScript-based environments, with hands-on expertise in audits, Core Web Vitals, log analysis, and structured data.",
      viewExperience: "View Experience",
      downloadResume: "Download Resume",
      secondaryCtaHref: "",
      contactMe: "Contact Me",
    },
    about: {
      title: "About Me",
      portraitSrc: "",
      portraitAlt: "",
      p1: "Senior SEO professional with 10+ years of experience, specializing in Technical SEO for large-scale and international websites.",
      p2: "Strong technical background across JavaScript-based environments, with hands-on expertise in audits, Core Web Vitals, log analysis, and structured data.",
      p3: "Data-driven strategist leveraging analytics and AI-assisted workflows to accelerate analysis, prioritize opportunities, and support scalable SEO decisions. Collaborative leader, working closely with engineering and product teams to deliver sustainable organic growth.",
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
        "Technical SEO",
        "JavaScript SEO",
        "HTML",
        "CSS",
        "Next.js / Rendering",
        "Crawlability & Site Architecture",
        "Core Web Vitals",
        "Structured Data (JSON-LD)",
        "Log File Analysis",
        "Web Performance Optimization",
        "Lighthouse & PageSpeed Insights",
        "GA4",
        "GTM",
        "Looker Studio",
        "SQL",
      ],
    },
    experience: {
      title: "Experience",
      wantFull: "Want to see my full experience and background?",
      downloadCv: "Download my CV",
      items: [
        {
          company: "Granicus",
          role: "Senior SEO Analyst",
          location: "San Jose, Costa Rica (Remote)",
          period: "May 2026 – Present",
          description:
            "Lead organic growth initiatives for destination and tourism-focused digital experiences across the U.S. market.",
          highlights: [
            "Drive technical SEO, content strategy, AI search visibility, performance analysis, CRO collaboration, and enterprise-level optimization across large-scale web ecosystems.",
            "Work cross-functionally with content, UX, analytics, and development teams to improve discoverability, user acquisition, and organic performance through data-driven strategies and scalable SEO frameworks.",
          ],
        },
        {
          company: "Taco Digital",
          role: "Head of SEO (Contractor)",
          location: "United States",
          period: "January 2026 – March 2026",
          description:
            "Led SEO strategy and delivery during a fixed-term engagement, overseeing day-to-day execution, prioritization, and process improvements to stabilize output and align with business goals.",
          highlights: [
            "Designed and implemented n8n-based automation workflows for SEO and content operations, improving scalability, reducing manual effort, and standardizing delivery.",
            "Developed sales enablement materials (PowerPoint) translating SEO into business impact, defining scope, methodology, and growth opportunities for new-business conversations.",
          ],
        },
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
          company: "Advision Development",
          role: "Senior Technical SEO",
          location: "Santa Ana, San Jose, Costa Rica",
          period: "May 2021 – May 2022",
          description:
            "Led Technical SEO strategy and execution, optimizing site performance, crawlability, and indexation.",
          highlights: [
            "Partnered with development and content teams to implement scalable technical solutions, driving improvements in organic visibility and search performance.",
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
          role: "Senior Technical SEO (Contractor)",
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
        {
          company: "SBR NetMarketing and Consulting S.A",
          role: "Mid SEO & Web Analytics",
          location: "Santa Ana, Costa Rica",
          period: "February 2016 – February 2018",
          description:
            "Technical SEO and web analytics across client websites and migrations.",
          highlights: [
            "Code improvement and optimization (PHP).",
            "Migration of old site to ReactJS.",
            "On-page optimization (metadata, internal links, etc.).",
            "Improved web rendering.",
            "Implementation, improvement and maintenance of Schema Markup.",
            "Collaborated on Google Tag Manager implementation and exporting data to Data Studio.",
          ],
        },
        {
          company: "DayStar Properties",
          role: "Junior SEO",
          location: "Costa Rica",
          period: "February 2009 – March 2013",
          description: "Foundational SEO work on WordPress-based websites.",
          highlights: [
            "Basic SEO optimization focused on WP CMS.",
            "Reporting updates to SEO Manager.",
            "Metadata (title/descriptions) optimization.",
            "Competitors audit.",
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
      education: "Formación",
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
      subtitle:
        "Senior Technical SEO | SEO con IA, rendimiento web y crecimiento",
      bio: "Profesional SEO senior con más de 10 años de experiencia, especializado en SEO técnico para sitios web a gran escala e internacionales. Sólida formación técnica en entornos JavaScript, con experiencia práctica en auditorías, Core Web Vitals, análisis de logs y datos estructurados.",
      viewExperience: "Mi trayectoria",
      downloadResume: "Descargar CV",
      secondaryCtaHref: "",
      contactMe: "Agendar consulta",
    },
    about: {
      title: "Resumen profesional",
      portraitSrc: "/rusben-about.png",
      portraitAlt:
        "Rusben Madrigal, consultor SEO profesional en Costa Rica, retrato profesional",
      p1: "Profesional SEO senior con más de 10 años de experiencia, especializado en SEO técnico para sitios web a gran escala e internacionales.",
      p2: "Sólida formación técnica en entornos basados en JavaScript, con experiencia práctica en auditorías, Core Web Vitals, análisis de logs y datos estructurados.",
      p3: "Estratega orientado a datos que aprovecha analítica y flujos de trabajo asistidos por IA para acelerar el análisis, priorizar oportunidades y respaldar decisiones SEO escalables. Líder colaborativo que trabaja de cerca con equipos de ingeniería y producto para lograr un crecimiento orgánico sostenible.",
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
        "SEO técnico",
        "JavaScript SEO",
        "HTML",
        "CSS",
        "Next.js / Renderizado",
        "Rastreabilidad y arquitectura de sitio",
        "Core Web Vitals",
        "Datos estructurados (JSON-LD)",
        "Análisis de logs",
        "Optimización de rendimiento web",
        "Lighthouse y PageSpeed Insights",
        "GA4",
        "GTM",
        "Looker Studio",
        "SQL",
      ],
    },
    experience: {
      title: "Trayectoria",
      wantFull: "¿Necesitas más contexto sobre mi background antes de contratar?",
      downloadCv: "Descargar CV",
      items: [
        {
          company: "Granicus",
          role: "Analista SEO Senior",
          location: "San José, Costa Rica (Remoto)",
          period: "Mayo 2026 – Presente",
          description:
            "Lidero iniciativas de crecimiento orgánico para experiencias digitales de destinos y turismo en el mercado estadounidense.",
          highlights: [
            "Impulso SEO técnico, estrategia de contenido, visibilidad en búsqueda con IA, análisis de rendimiento, colaboración en CRO y optimización a nivel enterprise en ecosistemas web a gran escala.",
            "Trabajo de forma transversal con equipos de contenido, UX, analítica y desarrollo para mejorar la discoverability, adquisición de usuarios y rendimiento orgánico mediante estrategias basadas en datos y marcos SEO escalables.",
          ],
        },
        {
          company: "Taco Digital",
          role: "Head of SEO (Contratista)",
          location: "Estados Unidos",
          period: "Enero 2026 – Marzo 2026",
          description:
            "Lideré la estrategia y ejecución SEO durante un contrato a plazo fijo, supervisando la operación diaria, priorización y mejoras de procesos para estabilizar la entrega y alinearla con los objetivos del negocio.",
          highlights: [
            "Diseñé e implementé flujos de automatización con n8n para operaciones SEO y de contenido, mejorando la escalabilidad, reduciendo el esfuerzo manual y estandarizando la entrega.",
            "Desarrollé materiales de ventas (PowerPoint) que traducen el SEO en impacto de negocio, definiendo alcance, metodología y oportunidades de crecimiento para conversaciones comerciales.",
          ],
        },
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
          company: "Advision Development",
          role: "Senior Technical SEO",
          location: "Santa Ana, San José, Costa Rica",
          period: "Mayo 2021 – Mayo 2022",
          description:
            "Lideré la estrategia y ejecución de SEO técnico, optimizando rendimiento del sitio, rastreabilidad e indexación.",
          highlights: [
            "Colaboré con equipos de desarrollo y contenido para implementar soluciones técnicas escalables, impulsando mejoras en visibilidad orgánica y rendimiento en búsqueda.",
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
          role: "Senior Technical SEO (Contratista)",
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
        {
          company: "SBR NetMarketing and Consulting S.A",
          role: "SEO Medio y Web Analytics",
          location: "Santa Ana, Costa Rica",
          period: "Febrero 2016 – Febrero 2018",
          description:
            "SEO técnico y analítica web en sitios de clientes y migraciones.",
          highlights: [
            "Mejora y optimización de código (PHP).",
            "Migración de sitio antiguo a ReactJS.",
            "Optimización on-page (metadatos, enlaces internos, etc.).",
            "Mejora del renderizado web.",
            "Implementación, mejora y mantenimiento de Schema Markup.",
            "Colaboración en implementación de Google Tag Manager y exportación de datos a Data Studio.",
          ],
        },
        {
          company: "DayStar Properties",
          role: "SEO Junior",
          location: "Costa Rica",
          period: "Febrero 2009 – Marzo 2013",
          description: "Trabajo SEO fundamental en sitios basados en WordPress.",
          highlights: [
            "Optimización SEO básica enfocada en CMS WP.",
            "Reportes de actualización al SEO Manager.",
            "Optimización de metadatos (títulos/descripciones).",
            "Auditoría de competidores.",
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
      items: [
        {
          institution: "McKinsey & Company (McKinsey Accelerate)",
          degree:
            "Programa de Desarrollo Profesional (Liderazgo, resolución de problemas y habilidades de negocio)",
          field: "Negocios y liderazgo",
          period: "Abril 2026 – Junio 2026",
        },
        {
          institution: "Universidad de La Sabana (Colombia)",
          degree: "Metodologías ágiles e innovación organizacional",
          field: "Marketing",
          period: "Octubre 2023 – Febrero 2024",
        },
        {
          institution: "Le Studio by PGD",
          degree: "Management Development Program 2024",
          field: "Marketing",
          period: "Abril 2024 – Mayo 2024",
        },
        {
          institution: "Colegio Universitario Boston",
          degree:
            "Frontend Engineer · Diseño web – HTML, CSS, JavaScript, jQuery y PHP",
          field: "Desarrollo web",
          period: "Septiembre 2008 – Marzo 2010",
        },
        {
          institution: "Instituto Universitario Jimenez",
          degree:
            "Capacitación de operador de computadoras (bases de datos y desarrollo web)",
          field: "Informática",
          period: "Mayo 2005 – Mayo 2006",
        },
      ],
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

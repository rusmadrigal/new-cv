import { motion } from "motion/react";
import { Code2, Zap, Gauge, FileCode, ScrollText, Bot } from "lucide-react";

const expertiseAreas = [
  {
    icon: FileCode,
    title: "Technical SEO Audits",
    description:
      "Comprehensive technical analysis of large-scale websites to identify optimization opportunities and improve organic performance.",
  },
  {
    icon: Code2,
    title: "JavaScript SEO",
    description:
      "Expertise in rendering behavior, indexation strategies, and optimization for modern JavaScript frameworks like Next.js and React.",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals Optimization",
    description:
      "Performance optimization focusing on LCP, FID, and CLS to improve user experience and search rankings.",
  },
  {
    icon: ScrollText,
    title: "Structured Data Implementation",
    description:
      "Implementation and maintenance of JSON-LD schema markup to enhance search visibility and rich results.",
  },
  {
    icon: Zap,
    title: "Log File Analysis",
    description:
      "Deep analysis of crawl patterns and server logs to optimize crawl budget and improve indexation efficiency.",
  },
  {
    icon: Bot,
    title: "SEO Automation & AI Workflows",
    description:
      "Development of AI-assisted workflows and automated processes to scale SEO operations and accelerate analysis.",
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl text-white mb-3">{area.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

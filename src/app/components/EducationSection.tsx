import { motion } from "motion/react";
import { GraduationCap, Languages } from "lucide-react";

const education = [
  /* Universidad Latina — oculto en front; descomentar si aplica
  {
    institution: "Universidad Latina de Costa Rica",
    degree:
      "Degree of Business Administration with emphasis in Marketing & Sales",
    field: "Marketing",
    period: "2012 – 2014",
  },
  */
  {
    institution: "McKinsey Forward Program",
    degree:
      "Professional Development Program (Leadership, Problem Solving, and Business Skills)",
    field: "",
    period: "October 2025 – April 2026",
  },
  {
    institution: "Universidad de La Sabana",
    degree: "Metodologías Ágiles e Innovación en la Organización",
    field: "Marketing",
    period: "October 2023 – February 2024",
  },
  {
    institution: "Le Studio by PGD",
    degree: "Management Development Program 2024",
    field: "Marketing",
    period: "April 2024 – May 2024",
  },
  /* Universidad Latina — oculto en front; descomentar si aplica
  {
    institution: "Universidad Latina de Costa Rica",
    degree:
      "Bachelor of Business Administration with emphasis in Marketing & Sales",
    field: "Empresa, gestión, marketing y disciplinas afines",
    period: "2007 – 2010",
  },
  */
];

const languages = [
  { language: "English", level: "Full Professional" },
  { language: "Español", level: "Native or Bilingual" },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-gray-950 to-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Languages className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Languages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all"
              >
                <p className="text-xl text-white mb-2">{lang.language}</p>
                <p className="text-gray-400">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Education
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution + edu.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl text-white mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-300">{edu.degree}</p>
                    {edu.field && (
                      <p className="text-sm text-gray-500 mt-1">{edu.field}</p>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mt-2 md:mt-0">
                    {edu.period}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

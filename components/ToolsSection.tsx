"use client";

import { motion } from "motion/react";
import {
  Search,
  Activity,
  BarChart3,
  TrendingUp,
  Database,
  FileText,
  PieChart,
  Target,
  type LucideIcon,
} from "lucide-react";
import { getTranslations, type Locale } from "@/lib/translations";

const TOOL_ICONS: LucideIcon[] = [
  Search,
  Activity,
  BarChart3,
  TrendingUp,
  Target,
  PieChart,
  Database,
  FileText,
];

interface ToolsSectionProps {
  locale?: Locale;
}

export function ToolsSection({ locale = "en" }: ToolsSectionProps) {
  const t = getTranslations(locale);
  const tools = t.tools.list.map((name, i) => ({ name, icon: TOOL_ICONS[i] ?? Search }));
  return (
    <section
      id="tools"
      className="py-24 bg-gradient-to-b from-black to-gray-950"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t.tools.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all cursor-default"
                >
                  <Icon className="w-12 h-12 text-purple-400 mb-4" />
                  <p className="text-gray-200 text-center text-sm">
                    {tool.name}
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

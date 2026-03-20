import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Technical SEO strategist with more than a decade of experience
              working with large-scale international websites and global brands.
            </p>

            <p>
              My work focuses on the intersection of SEO, engineering, and data.
              I specialize in improving crawlability, rendering behavior, Core
              Web Vitals, and structured data implementations across modern
              JavaScript environments.
            </p>

            <p>
              I frequently collaborate with product, engineering, and analytics
              teams to solve complex technical challenges and drive sustainable
              organic growth.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(
              to right,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}

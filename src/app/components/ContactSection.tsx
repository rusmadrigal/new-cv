import { motion } from "motion/react";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Interested in technical SEO, automation, and scalable growth
            strategies? Let's connect and discuss how we can work together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.a
              href="mailto:rusbenmadrigal@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>rusbenmadrigal@gmail.com</span>
            </motion.a>
          </div>

          <div className="flex gap-6 justify-center">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              <Linkedin className="w-6 h-6 text-gray-300" />
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-full flex items-center justify-center hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              <Github className="w-6 h-6 text-gray-300" />
            </motion.a>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            className="mt-16 px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg hover:shadow-white/20 inline-flex items-center gap-2"
          >
            Back to Top
            <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

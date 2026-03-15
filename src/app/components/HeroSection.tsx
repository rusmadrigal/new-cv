import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Gradient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-50" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0JTIwYnVzaW5lc3NtYW58ZW58MXx8fHwxNzczMzc0Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Rusben Madrigal"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-800 shadow-2xl"
              />
            </div>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Rusben Madrigal
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Senior Technical SEO | AI-Driven SEO, Web Performance & Growth
          </p>
          
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Senior SEO professional with 10+ years of experience specializing in Technical SEO, 
            large-scale websites, and AI-assisted workflows. Strong technical expertise across 
            JavaScript environments, web performance optimization, and scalable organic growth strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToAbout()}
              className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              View Experience
            </button>
            <button
              onClick={() => window.open("#", "_blank")}
              className="px-8 py-3 border border-gray-700 text-white rounded-lg hover:border-gray-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Download Resume
            </button>
            <button
              onClick={() => scrollToContact()}
              className="px-8 py-3 border border-gray-700 text-white rounded-lg hover:border-gray-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
        </motion.div>
      </div>
      
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}
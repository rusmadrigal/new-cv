import { motion } from "motion/react";
import { Play, Video } from "lucide-react";
import { useState } from "react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Replace this URL with your actual video URL
  // For YouTube: https://www.youtube.com/embed/YOUR_VIDEO_ID
  // For Vimeo: https://player.vimeo.com/video/YOUR_VIDEO_ID
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  
  return (
    <section id="video" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-6">
            <Video className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">Video Introduction</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get to Know Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch a quick introduction about my background, experience, and approach to digital marketing and SEO
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Video Container */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
            
            {/* Video Wrapper */}
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                {!isPlaying ? (
                  // Thumbnail/Placeholder
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
                    {/* Decorative Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
                      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[100px]" />
                    </div>
                    
                    {/* Play Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(true)}
                      className="relative z-10 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all group/btn"
                    >
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
                    </motion.button>
                    
                    {/* Video Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl text-white mb-2">Introduction to Rusben Madrigal</h3>
                      <p className="text-gray-300">Digital Marketing Specialist • SEO Expert</p>
                    </div>
                  </div>
                ) : (
                  // Video iframe (will show when play is clicked)
                  <iframe
                    src={`${videoUrl}?autoplay=1`}
                    title="Rusben Madrigal Introduction Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* Video Stats/Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 mt-8"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <p className="text-3xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">2-3 min</p>
              <p className="text-gray-400 text-sm">Duration</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <p className="text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">5+ Years</p>
              <p className="text-gray-400 text-sm">Experience</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 text-center">
              <p className="text-3xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">15+</p>
              <p className="text-gray-400 text-sm">Tools Mastered</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

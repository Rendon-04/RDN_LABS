import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

const projectPreviewImages = [
  "/images/projects/hutch-preview.png",
  "/images/projects/bae-preview.png",
  "/images/projects/restaurant-preview.png",
];

export function Hero() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => setReducedMotion(mediaQuery.matches);

    applyPreference();
    mediaQuery.addEventListener("change", applyPreference);

    return () => mediaQuery.removeEventListener("change", applyPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % projectPreviewImages.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Animated grain texture for film-like quality */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] animate-grain" />
      </div>

      {/* Refined grid pattern */}
      <div className="hero-grid absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Rotating project previews */}
      <div className="hero-project-preview z-10" aria-hidden="true">
        {projectPreviewImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={index === projectIndex || (reducedMotion && index === 0) ? "active" : ""}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10"
        >
          {/* Title with refined animation */}
          <div className="space-y-6">
            <motion.h1 
              className="hero-title text-7xl md:text-8xl lg:text-9xl tracking-tight text-white font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              RDN LABS
            </motion.h1>

            {/* Elegant divider with animation */}
            <motion.div 
              className="flex items-center justify-center gap-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            We craft refined web experiences through thoughtful design and precise engineering
          </motion.p>

          {/* CTA Buttons with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-10 py-4 border border-white/30 text-white hover:border-white backdrop-blur-sm bg-white/5 hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-3 justify-center overflow-hidden"
            >
              <span className="relative z-10 font-light tracking-wide">Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2 duration-500 relative z-10" />
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
            
            <button 
              onClick={() => scrollToSection('work')}
              className="group px-10 py-4 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 justify-center border border-transparent hover:border-white/20"
            >
              <Play className="w-4 h-4 transition-transform group-hover:scale-110 duration-300" />
              <span className="font-light tracking-wide">View Portfolio</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 cursor-pointer group"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        onClick={() => scrollToSection('services')}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-gray-400 uppercase tracking-widest font-light">Scroll</span>
          <div className="w-px h-20 bg-gradient-to-b from-white/50 via-white/20 to-transparent group-hover:from-white group-hover:via-white/40 transition-all duration-500" />
        </div>
      </motion.div>

      {/* Corner accent elements for depth */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/10" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/10" />
    </section>
  );
}

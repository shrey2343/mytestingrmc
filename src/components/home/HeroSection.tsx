import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef(null);

  // Function to scroll to research-for-everyone section
  const scrollToResearchSection = () => {
    const element = document.getElementById('research-for-everyone');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950"
    >
      {/* Main Background with Subtle Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-gray-900"
          animate={{
            background: [
              'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
              'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)',
              'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating Geometric Shapes - Mobile adjustments */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border border-white/5 rounded-3xl"
          animate={{
            rotate: 360,
            borderRadius: ["30%", "40%", "30%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 border border-blue-500/10 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />

        {/* Interactive Particle System - Reduced on mobile */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        {/* Sophisticated Grid Pattern with Animation - Mobile adjustments */}
        <motion.div
          className="absolute inset-0 opacity-20 md:opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '30px 30px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Dynamic Gradient Orbs - Mobile adjustments */}
        <motion.div
          className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl lg:blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 75, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '5%', left: '5%' }}
        />

        <motion.div
          className="absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-emerald-500/8 to-cyan-500/8 rounded-full blur-xl lg:blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', right: '5%' }}
        />

        {/* Animated Light Beams - Mobile adjustments */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            y: [0, 200, 400],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-0 left-1/4 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            y: [0, 200, 400],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 2,
          }}
        />

        {/* Glass Morphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30" />

        {/* Subtle Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.015] md:opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10 w-full py-8 md:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div 
          className="flex-1 text-background max-w-full lg:max-w-[650px] px-4 md:px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <motion.h1 
            className="font-display font-bold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[52px] leading-[1.15] mb-4 md:mb-6 text-white text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Research, Experimentation<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Scientific Publication Partner
            </span>
          </motion.h1>
          
          <motion.p 
            className="font-body text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 mb-6 md:mb-10 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We collaborate with researchers, healthcare organizations, AI innovators, startups, and enterprises to design studies, execute experiments, analyze data, and translate findings into publications, reports, and scientific communications.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://calendly.com/researchstrategycall/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Discussion
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Single Image Display */}
        <motion.div 
          className="flex-1 relative w-full max-w-full lg:max-w-none flex justify-center lg:justify-end px-4 md:px-0"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[400px] sm:max-w-[600px] md:max-w-[600px] lg:max-w-[700px]">
            {/* Animated Glow Effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Main Image Container */}
            <motion.div
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img
                src="/a.jpeg"
                alt="Research Excellence"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              
              {/* Subtle Gradient Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/10"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Floating Particles Around Image */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: i % 2 === 0 ? '-5%' : '105%',
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              />
            ))}

            {/* Corner Accent Elements */}
            <motion.div
              className="absolute -top-3 -right-3 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-sm border border-white/20"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity },
              }}
            />
            <motion.div
              className="absolute -bottom-3 -left-3 w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-white/20"
              animate={{
                rotate: -360,
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, delay: 0.5 },
              }}
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
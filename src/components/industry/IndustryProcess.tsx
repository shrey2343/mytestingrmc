import { motion } from "framer-motion";
import { Phone, FileText, CheckCircle, Clock, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Get Callback & Plan",
    description:
      "Fill the form to receive a personalized research plan and quotation.",
    icon: Phone,
    features: [
      "Free consultation",
      "Personalized plan",
      "Custom quotation",
      "Expert guidance"
    ],
    gradient: "from-blue-500 to-cyan-500",
    stats: { time: "24 hrs", efficiency: "100%" },
  },
  {
    number: "2",
    title: "Review Free Sample",
    description:
      "Evaluate our quality with a complimentary sample before proceeding.",
    icon: FileText,
    features: [
      "Quality preview",
      "No commitment",
      "Expert work sample",
      "Risk-free evaluation"
    ],
    gradient: "from-blue-600 to-indigo-600",
    stats: { time: "2-3 days", efficiency: "100%" },
  },
  {
    number: "3",
    title: "Start & Deliver Fast",
    description:
      "We begin immediately and deliver in up to 50% faster turnaround time.",
    icon: TrendingUp,
    features: [
      "Immediate start",
      "50% faster delivery",
      "Quality assured",
      "Ongoing support"
    ],
    gradient: "from-blue-700 to-blue-800",
    stats: { time: "50% faster", efficiency: "98%" },
  },
];

const IndustryProcess = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust based on your mockup width
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 px-4 w-full bg-gradient-to-br from-white to-blue-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A Simple,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Structured
            </span>{" "}
            Research Partnership
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A comprehensive 3-step journey designed for excellence in research and publication
          </motion.p>
        </div>

        {/* Single Card with 3 Mobile Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden transition-all duration-500 hover:border-blue-400/40 hover:shadow-blue-100">
            {/* Background Section with 3 Phones */}
            <div className="bg-gradient-to-br from-blue-950 to-slate-950 relative min-h-[600px] flex items-center justify-center p-8 overflow-hidden">
              {/* Advanced Animated Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Liquid Metal Effect */}
                <div className="liquid-metal"></div>
                
                {/* DNA Helix Animation */}
                <div className="dna-helix"></div>
                
                {/* Quantum Dots */}
                <div className="quantum-dots"></div>
                
                {/* Floating Cubes */}
                <div className="floating-cubes"></div>
                
                {/* Sine Wave Grid */}
                <div className="sine-wave-grid"></div>
                
                {/* Color Spectrum Flow */}
                <div className="color-spectrum"></div>
                
                {/* Morphing Polygons */}
                <div className="morphing-polygons"></div>
                
                {/* Particle Vortex */}
                <div className="particle-vortex"></div>
                
                {/* Glitch Effect */}
                <div className="glitch-effect"></div>
                
                {/* Light Streaks */}
                <div className="light-streaks"></div>
                
                {/* Data Particles */}
                <div className="data-particles"></div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => scroll('left')}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 group pointer-events-auto"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-blue-700" />
              </button>

              <button
                onClick={() => scroll('right')}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 group pointer-events-auto"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-blue-700" />
              </button>

              {/* 3 Phone Mockups in a Row */}
              <div 
                ref={scrollContainerRef}
                className="relative z-10 flex md:grid md:grid-cols-3 gap-8 max-w-6xl w-full overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-12 md:px-0"
              >
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center flex-shrink-0 snap-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      {/* Phone Mockup */}
                      <div className="relative w-[260px] h-[520px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl border border-white/10">
                        {/* Notch */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
                        
                        {/* Screen */}
                        <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                          {/* Status Bar */}
                          <div className={`absolute top-0 left-0 right-0 h-12 bg-gradient-to-r ${step.gradient} flex items-center justify-between px-6 text-white text-xs z-10`}>
                            <span className="font-semibold">9:41</span>
                            <div className="flex gap-1">
                              <div className="w-1 h-3 bg-white rounded"></div>
                              <div className="w-1 h-3 bg-white rounded"></div>
                              <div className="w-1 h-3 bg-white rounded"></div>
                              <div className="w-1 h-3 bg-white/50 rounded"></div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="pt-16 px-6 pb-6 h-full overflow-hidden">
                            {/* Icon */}
                            <motion.div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 shadow-lg`}
                              animate={{
                                rotate: [0, 5, -5, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <IconComponent className="w-8 h-8 text-white" />
                            </motion.div>

                            {/* Title */}
                            <h4 className="text-lg font-bold text-slate-900 mb-2">
                              {step.title}
                            </h4>
                            <p className="text-xs text-slate-600 mb-3">
                              Step {step.number} of 3
                            </p>

                            {/* Stats Badges */}
                            <div className="flex gap-2 mb-4">
                              <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-[10px] font-bold">
                                <Clock className="w-3 h-3" /> {step.stats.time}
                              </span>
                              <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg text-[10px] font-bold">
                                <TrendingUp className="w-3 h-3" /> {step.stats.efficiency}
                              </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full h-2 bg-slate-200 rounded-full mb-6 overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${step.gradient}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${(parseInt(step.number)) * 33.33}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                              />
                            </div>

                            {/* Description */}
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                              {step.description}
                            </p>

                            {/* Feature Pills */}
                            <div className="space-y-2 mb-6">
                              {step.features.map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
                                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg text-xs text-slate-700 border border-blue-100 font-medium"
                                >
                                  ✓ {feature}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Phone Buttons */}
                        <div className="absolute right-0 top-32 w-1 h-12 bg-slate-700 rounded-l"></div>
                        <div className="absolute right-0 top-48 w-1 h-16 bg-slate-700 rounded-l"></div>
                        <div className="absolute left-0 top-40 w-1 h-8 bg-slate-700 rounded-r"></div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-white/20 rounded-full"></div>

                        {/* Floating Glow Effects */}
                        <motion.div
                          className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-300/30 rounded-full blur-xl"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.7, 0.5],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Advanced CSS Animations */}
      <style>{`
        /* Liquid Metal Effect */
        .liquid-metal {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(100, 200, 255, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(120, 220, 255, 0.2) 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(80, 180, 255, 0.25) 0%, transparent 60%);
          animation: liquidFlow 20s ease-in-out infinite;
          filter: blur(30px);
        }

        @keyframes liquidFlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(40px, -20px) scale(1.2);
            opacity: 0.5;
          }
          50% {
            transform: translate(-20px, 30px) scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: translate(30px, 20px) scale(1.1);
            opacity: 0.6;
          }
        }

        /* DNA Helix Animation */
        .dna-helix {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 400px;
          transform: translate(-50%, -50%);
          background-image: repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 10px,
            rgba(255,255,255,0.3) 10px,
            rgba(255,255,255,0.3) 12px,
            transparent 12px,
            transparent 22px
          );
          animation: dnaRotate 15s linear infinite;
        }

        @keyframes dnaRotate {
          0% {
            transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotateX(360deg) rotateY(180deg);
          }
        }

        /* Quantum Dots */
        .quantum-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.8) 2px, transparent 3px),
                            radial-gradient(circle at 40% 70%, rgba(255,255,255,0.6) 2px, transparent 3px),
                            radial-gradient(circle at 60% 20%, rgba(255,255,255,0.7) 2px, transparent 3px),
                            radial-gradient(circle at 80% 50%, rgba(255,255,255,0.5) 2px, transparent 3px),
                            radial-gradient(circle at 30% 80%, rgba(255,255,255,0.9) 2px, transparent 3px);
          background-size: 150px 150px;
          animation: quantumFloat 25s linear infinite;
        }

        @keyframes quantumFloat {
          0% {
            background-position: 0 0;
            opacity: 0.2;
          }
          25% {
            background-position: 75px 50px;
            opacity: 0.4;
          }
          50% {
            background-position: 50px 100px;
            opacity: 0.3;
          }
          75% {
            background-position: 125px 75px;
            opacity: 0.5;
          }
          100% {
            background-position: 0 0;
            opacity: 0.2;
          }
        }

        /* Floating Cubes */
        .floating-cubes {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: cubesMove 20s linear infinite;
        }

        @keyframes cubesMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }

        /* Sine Wave Grid */
        .sine-wave-grid {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 20px,
                        rgba(255,255,255,0.1) 20px,
                        rgba(255,255,255,0.1) 22px
                      ),
                      repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 20px,
                        rgba(255,255,255,0.05) 20px,
                        rgba(255,255,255,0.05) 22px
                      );
          mask-image: repeating-radial-gradient(
            circle at 50% 50%,
            black 0px,
            black 10px,
            transparent 10px,
            transparent 20px
          );
          animation: sineWave 30s linear infinite;
        }

        @keyframes sineWave {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(40px);
          }
        }

        /* Color Spectrum Flow */
        .color-spectrum {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            rgba(100, 200, 255, 0.1) 0%,
            rgba(120, 220, 255, 0.2) 25%,
            rgba(140, 240, 255, 0.15) 50%,
            rgba(100, 200, 255, 0.2) 75%,
            rgba(80, 180, 255, 0.1) 100%
          );
          animation: spectrumMove 15s linear infinite;
          filter: blur(20px);
        }

        @keyframes spectrumMove {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 200%;
          }
        }

        /* Morphing Polygons */
        .morphing-polygons {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          transform: translate(-50%, -50%);
          background: conic-gradient(
            from 0deg,
            rgba(100, 200, 255, 0.1),
            rgba(120, 220, 255, 0.2),
            rgba(140, 240, 255, 0.1),
            rgba(100, 200, 255, 0.2),
            rgba(80, 180, 255, 0.1)
          );
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          animation: morphPolygon 8s ease-in-out infinite;
        }

        @keyframes morphPolygon {
          0%, 100% {
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            opacity: 0.2;
          }
          33% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
            opacity: 0.3;
          }
          66% {
            clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
            opacity: 0.25;
          }
        }

        /* Particle Vortex */
        .particle-vortex {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 400px;
          height: 400px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, transparent 20%, rgba(255,255,255,0.05) 21%, transparent 22%) 0 0 / 50px 50px,
                      radial-gradient(circle, transparent 20%, rgba(255,255,255,0.03) 21%, transparent 22%) 25px 25px / 50px 50px;
          animation: vortexSpin 25s linear infinite;
        }

        @keyframes vortexSpin {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(1.2);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
          }
        }

        /* Glitch Effect */
        .glitch-effect {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%),
                      linear-gradient(0deg, transparent 45%, rgba(255,255,255,0.05) 50%, transparent 55%);
          animation: glitch 2s steps(2, start) infinite;
          opacity: 0.3;
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        /* Light Streaks */
        .light-streaks {
          position: absolute;
          inset: 0;
          background: linear-gradient(
                        45deg,
                        transparent 0%,
                        rgba(255,255,255,0.15) 25%,
                        rgba(255,255,255,0.3) 50%,
                        rgba(255,255,255,0.15) 75%,
                        transparent 100%
                      ),
                      linear-gradient(
                        -45deg,
                        transparent 0%,
                        rgba(255,255,255,0.1) 25%,
                        rgba(255,255,255,0.2) 50%,
                        rgba(255,255,255,0.1) 75%,
                        transparent 100%
                      );
          animation: streaksMove 12s linear infinite;
        }

        @keyframes streaksMove {
          0% {
            background-position: -200% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }

        /* Data Particles */
        .data-particles {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
                              0deg,
                              transparent,
                              transparent 3px,
                              rgba(255,255,255,0.1) 3px,
                              rgba(255,255,255,0.1) 4px
                            ),
                            repeating-linear-gradient(
                              90deg,
                              transparent,
                              transparent 3px,
                              rgba(255,255,255,0.05) 3px,
                              rgba(255,255,255,0.05) 4px
                            );
          animation: particlesFlow 15s linear infinite;
        }

        @keyframes particlesFlow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustryProcess;

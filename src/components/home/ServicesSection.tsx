import { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "research",
    title: "Research for Everyone",
    subtitle:
      "Supporting doctoral research, institutional R&D, and funded academic projects",
    services: [
      "Topic selection & research problem identification",
      "Research proposal & synopsis development",
      "Research design & methodology (quantitative, qualitative, mixed methods)",
      "Systematic literature reviews & evidence synthesis",
      "Data collection guidance & research planning",
      "Statistical analysis (SPSS, R, Python, SEM, regression)",
      "Qualitative & thematic analysis",
      "Experimental design, research coding & result interpretation",
      "Dissertation & thesis writing support",
      "Proofreading, academic editing & plagiarism checks",
      "Research paper writing & publication support",
      "Journal-aligned manuscripts & submission assistance",
      "Defence preparation & mock vivas",
      "Poster presentations & defence-ready presentations",
    ],
  },
  {
    id: "startups",
    title: "Startups & Enterprises",
    subtitle:
      "Validating ideas, strengthening funding stories, and building research-backed credibility",
    services: [
      "Market research & competitive analysis",
      "Idea validation & feasibility studies",
      "Pitch deck & investor materials",
      "Data analytics & business insights",
      "Go-to-market strategy research",
      "Growth research & optimization",
      "Due diligence support",
      "Industry & competitive intelligence",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    subtitle:
      "Evidence generation and research execution for regulated, impact-driven domains",
    services: [
      "Clinical research support",
      "Real-world evidence studies",
      "Medical writing & publications",
      "Health economics & outcomes research",
      "Systematic reviews & meta-analysis",
      "Regulatory affairs support",
      "Biostatistics & data analytics",
      "Medical affairs & MSL support",
    ],
  },
  {
    id: "medcom",
    title: "MedCom & Research Agencies",
    subtitle:
      "A dependable, white-label research and scientific execution partner",
    services: [
      "White-label medical writing",
      "Systematic reviews & meta-analysis",
      "Literature search & review",
      "Data analysis & biostatistics",
      "Research protocol development",
      "Overflow & capacity support",
      "Quality assurance & review",
      "Ongoing partnership models",
    ],
  },
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 border-2 border-blue-300/30 rounded-3xl"
          animate={{
            rotate: [0, 360],
            borderRadius: ["30%", "50%", "30%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 border-2 border-cyan-300/25 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '5%', right: '5%' }}
        />

        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-400/12 to-blue-400/12 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', left: '10%' }}
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59,130,246,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59,130,246,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.1)",
                "0 0 40px rgba(59, 130, 246, 0.3)",
                "0 0 20px rgba(59, 130, 246, 0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-blue-700 font-semibold text-sm">OUR SERVICES</span>
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(90deg, #1e40af, #3b82f6, #1e40af)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Comprehensive Research Solutions
          </motion.h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Expert support across every stage of your research journey
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT – ENHANCED CATEGORY TABS */}
          <div className="lg:w-1/3 space-y-4">
            {categories.map((category, index) => {
              const isActive = activeCategory.id === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className="relative w-full text-left group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {/* Glow Effect on Active */}
                  {isActive && (
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-75 blur-lg"
                      layoutId="activeGlow"
                    />
                  )}

                  {/* Card Background */}
                  <div className={`relative p-6 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-2xl border-2 border-blue-200"
                      : "bg-white/60 hover:bg-white/90 border-2 border-transparent hover:border-blue-100 shadow-md hover:shadow-lg"
                  }`}>
                    {/* Animated Border */}
                    {isActive && (
                      <motion.span
                        layoutId="activeBlueBorder"
                        className="absolute inset-0 rounded-2xl border-2 border-blue-500/60 pointer-events-none"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Corner Accent */}
                    <motion.div
                      className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl rounded-tr-2xl transition-opacity duration-300 ${
                        isActive ? 'from-blue-400/30 to-transparent opacity-100' : 'from-blue-300/20 to-transparent opacity-0 group-hover:opacity-100'
                      }`}
                      animate={isActive ? {
                        opacity: [0.3, 0.6, 0.3],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />

                    {/* Number Badge */}
                    <motion.div
                      className={`absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${
                        isActive 
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white' 
                          : 'bg-slate-200 text-slate-600 group-hover:bg-blue-100'
                      }`}
                      animate={isActive ? {
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      {index + 1}
                    </motion.div>

                    <h3 className={`font-display text-xl font-extrabold tracking-tight mb-2 transition-colors duration-300 ${
                      isActive ? "text-blue-700" : "text-blue-600 group-hover:text-blue-700"
                    }`}>
                      {category.title}
                    </h3>

                    <p className="text-sm text-slate-600 line-clamp-2 pr-4">
                      {category.subtitle}
                    </p>

                    {/* Arrow Indicator */}
                    <motion.div
                      className={`absolute right-4 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                      }`}
                      animate={isActive ? {
                        x: [0, 5, 0],
                      } : {}}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <ArrowRight className="w-5 h-5 text-blue-600" />
                    </motion.div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT – ENHANCED SERVICES */}
          <div className="lg:w-2/3">
            <div className="relative">
              {/* Glow Background */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              <div className="relative bg-white/95 backdrop-blur-sm p-8 md:p-10 pb-12 rounded-3xl shadow-2xl border-2 border-blue-100 overflow-hidden">
                {/* Animated Corner Decorations */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/40 to-transparent rounded-tr-3xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-200/40 to-transparent rounded-bl-3xl"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                    className="relative z-10"
                  >
                    <div className="mb-8">
                      <motion.h2 
                        className="font-display text-3xl md:text-4xl font-extrabold text-blue-800 mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {activeCategory.title}
                      </motion.h2>
                      <motion.p 
                        className="font-body text-blue-600 font-semibold text-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {activeCategory.subtitle}
                      </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {activeCategory.services.map((service, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-start gap-3 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="mt-1 flex items-center justify-center w-6 h-6 rounded-full border-2 border-blue-500 bg-white group-hover:bg-blue-500 transition-all duration-300 flex-shrink-0"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-4 h-6 text-blue-500 group-hover:text-white transition-colors duration-300" />
                          </motion.div>

                          <span className="text-[15px] leading-relaxed text-slate-700 group-hover:text-blue-800 transition-colors duration-300 font-medium">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

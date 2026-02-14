import { motion } from "framer-motion";
import { Phone, FileText, CheckCircle, Clock, TrendingUp } from "lucide-react";

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

        {/* Steps Cards */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden transition-all duration-500 hover:border-blue-400/40 hover:shadow-blue-100">
                  <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[500px]">
                    {/* Content Side */}
                    <div className={`p-8 sm:p-10 md:p-14 flex flex-col justify-center ${!isEven ? 'lg:order-2' : ''}`}>
                      {/* Step Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg transform -rotate-3 transition-transform group-hover:rotate-0`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-black uppercase tracking-widest text-slate-400 block mb-1">
                            Step {step.number}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Stats Badges */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl text-xs font-bold border border-blue-100">
                          <Clock className="w-3.5 h-3.5" /> {step.stats.time}
                        </span>
                        <span className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-xl text-xs font-bold border border-emerald-100">
                          <TrendingUp className="w-3.5 h-3.5" /> {step.stats.efficiency} Success
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                        {step.description}
                      </p>

                      {/* Features List */}
                      <div className="flex flex-col gap-3">
                        {step.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 transition-all hover:bg-blue-50 hover:border-blue-200 group/feature"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-sm font-semibold text-slate-700">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Mockup Side with Animated Background */}
                    <div className={`bg-gradient-to-br from-blue-950 to-slate-950 relative min-h-[400px] lg:min-h-full flex items-center justify-center p-8 overflow-hidden ${!isEven ? 'lg:order-1' : ''}`}>
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

                      {/* Phone or Laptop Mockup */}
                      <motion.div
                        className="relative z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                      >
                        {/* Show Laptop for Step 2 and 4, Phone for Step 1 and 3 */}
                        {index === 1 || index === 3 ? (
                          // Laptop Mockup
                          <div className="relative flex flex-col items-center scale-[0.5] sm:scale-[0.65] md:scale-75 lg:scale-90">
                            {/* Laptop Screen */}
                            <div className="relative bg-black rounded-t-xl p-3 w-[500px] shadow-2xl">
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-black rounded-b-xl z-20"></div>
                              <div className="relative bg-white rounded-md overflow-auto" style={{ height: '320px' }}>
                                {/* Laptop Content */}
                                <div className="p-6 h-full">
                                  {/* Header */}
                                  <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0`}>
                                        <IconComponent className="w-5 h-5 text-white" />
                                      </div>
                                      <div className="min-w-0">
                                        <h4 className="text-base font-bold text-slate-900 truncate">{step.title}</h4>
                                        <p className="text-[10px] text-slate-600">Step {step.number} of 3</p>
                                      </div>
                                    </div>
                                    <div className="flex gap-2 flex-shrink-0">
                                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-bold whitespace-nowrap">
                                        {step.stats.time}
                                      </span>
                                      <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-[10px] font-bold whitespace-nowrap">
                                        {step.stats.efficiency}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Progress Bar */}
                                  <div className="w-full h-2 bg-slate-200 rounded-full mb-4 overflow-hidden">
                                    <motion.div
                                      className={`h-full bg-gradient-to-r ${step.gradient}`}
                                      initial={{ width: 0 }}
                                      whileInView={{ width: `${(parseInt(step.number)) * 33.33}%` }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 1, delay: 0.5 }}
                                    />
                                  </div>

                                  {/* Features Grid */}
                                  <div className="grid grid-cols-2 gap-2 mb-4">
                                    {step.features.map((feature, idx) => (
                                      <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
                                        className="px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100"
                                      >
                                        <div className="flex items-center gap-2">
                                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                          <span className="text-sm font-medium text-slate-700 leading-tight">{feature}</span>
                                        </div>
                                      </motion.div>
                                    ))}
                                  </div>

                                  {/* Action Button */}
                                  <motion.button
                                    className={`w-full mt-6 py-3 bg-gradient-to-r ${step.gradient} text-white rounded-xl font-semibold shadow-lg`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    Continue to Next Step
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                            {/* Laptop Base */}
                            <div className="relative w-[110%]">
                              <div className="h-2 bg-gradient-to-b from-gray-700 to-gray-800"></div>
                              <div className="h-4 bg-gradient-to-b from-gray-300 via-gray-100 to-gray-400 rounded-b-2xl shadow-2xl">
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-black/20 rounded-b-lg"></div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Phone Mockup (existing code)
                          <div className="relative w-[260px] h-[520px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl border border-white/10">
                          {/* Notch */}
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
                          
                          {/* Screen */}
                          <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                            {/* Status Bar */}
                            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-between px-6 text-white text-xs z-10">
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
                              <p className="text-xs text-slate-600 mb-4">
                                Step {step.number} of 3
                              </p>

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

                              {/* Feature Pills */}
                              <div className="space-y-2 mb-6">
                                {step.features.slice(0, 3).map((feature, idx) => (
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

                              {/* Button */}
                              <motion.button
                                className={`w-full py-3 bg-gradient-to-r ${step.gradient} text-white rounded-xl font-semibold shadow-lg text-sm`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Continue
                              </motion.button>
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
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
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

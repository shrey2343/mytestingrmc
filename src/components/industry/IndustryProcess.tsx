import { motion } from "framer-motion";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface IndustryProcessProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  steps: Step[];
  darkTheme?: boolean;
}

const IndustryProcess = ({ sectionLabel, title, subtitle, steps, darkTheme = false }: IndustryProcessProps) => {
  const bgClass = darkTheme ? "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" : "bg-gradient-to-r from-blue-50 to-white";
  const labelClass = darkTheme ? "text-blue-400" : "text-blue-600";
  const titleClass = darkTheme ? "text-white" : "text-slate-900";
  const subtitleClass = darkTheme ? "text-slate-300" : "text-slate-600";
  const cardBgClass = darkTheme ? "bg-slate-800/50 border-slate-700" : "bg-white border-blue-100";
  const numberBgClass = darkTheme ? "from-blue-600 to-cyan-500" : "from-blue-500 to-cyan-500";
  const cardTitleClass = darkTheme ? "text-white" : "text-slate-900";
  const cardTextClass = darkTheme ? "text-slate-300" : "text-slate-600";
  const lineClass = darkTheme ? "bg-gradient-to-b from-blue-500 to-cyan-400" : "bg-gradient-to-b from-blue-400 to-cyan-400";
  
  return (
    <section className={`py-12 md:py-16 lg:py-20 ${bgClass} relative overflow-hidden`}>
      {/* Animated Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 border border-blue-200/20 rounded-3xl"
          animate={{ rotate: 360, borderRadius: ["30%", "50%", "30%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-48 h-48 border border-cyan-200/20 rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] bg-gradient-to-r from-cyan-300/8 to-blue-300/8 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.span 
            className={`${labelClass} text-xs md:text-sm font-medium uppercase tracking-wider mb-3 md:mb-4 block`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {sectionLabel}
          </motion.span>
          <motion.h2 
            className={`font-display text-2xl md:text-3xl lg:text-4xl font-bold ${titleClass} mb-3 md:mb-4 px-2`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className={`${subtitleClass} max-w-2xl mx-auto text-sm md:text-base px-4`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="relative px-2 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative group h-full"
              >
                {/* Curved connecting line to next step - Desktop only */}
                {index < steps.length - 1 && (
                  <svg 
                    className="hidden lg:block absolute left-full top-8 w-full h-20 pointer-events-none" 
                    style={{ zIndex: 0 }}
                    viewBox="0 0 100 80"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={index % 2 === 0 ? "M 0 40 Q 50 10, 100 40" : "M 0 40 Q 50 70, 100 40"}
                      stroke={darkTheme ? "#60a5fa" : "#3b82f6"}
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6,4"
                      strokeLinecap="round"
                      opacity="0.7"
                    />
                  </svg>
                )}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%', zIndex: 0 }}
              />
              <div className={`relative ${cardBgClass} border-2 rounded-2xl p-5 md:p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col z-10`}>
                <motion.div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${numberBgClass} text-white flex items-center justify-center text-lg md:text-xl font-bold mb-5 md:mb-6 shadow-lg relative z-20`}
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(59, 130, 246, 0.4)',
                      '0 0 0 10px rgba(59, 130, 246, 0)',
                      '0 0 0 0 rgba(59, 130, 246, 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                >
                  {step.number}
                </motion.div>

                <motion.h3 
                  className={`font-display text-lg md:text-xl font-bold ${cardTitleClass} mb-2 md:mb-3 relative inline-block`}
                  whileHover={{ scale: 1.05 }}
                >
                  {step.title}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  />
                </motion.h3>
                <p className={`${cardTextClass} leading-relaxed text-xs md:text-sm flex-grow`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryProcess;

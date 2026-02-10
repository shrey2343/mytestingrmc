import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface AssuranceItem {
  text: string;
}

interface IndustryAssuranceProps {
  sectionLabel: string;
  title: string;
  subtitle?: string;
  assurances: AssuranceItem[];
  darkTheme?: boolean;
}

const IndustryAssurance = ({
  sectionLabel,
  title,
  subtitle,
  assurances,
  darkTheme = true,
}: IndustryAssuranceProps) => {
  const bgClass = darkTheme ? "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" : "bg-gradient-to-r from-white to-blue-50";
  const labelClass = darkTheme ? "text-blue-400" : "text-blue-600";
  const titleClass = darkTheme ? "text-white" : "text-slate-900";
  const subtitleClass = darkTheme ? "text-slate-300" : "text-slate-600";
  const cardBgClass = darkTheme ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-blue-100 hover:border-blue-300";
  const cardTextClass = darkTheme ? "text-slate-200" : "text-slate-700";
  const iconBgClass = darkTheme ? "from-cyan-400 to-blue-500" : "from-blue-500 to-cyan-500";

  return (
    <section className={`py-8 ${bgClass} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={`${labelClass} text-sm font-semibold uppercase tracking-wider mb-3`}>
            {sectionLabel}
          </p>
          <h2 className={`font-display text-3xl md:text-4xl font-bold ${titleClass} mb-4`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`${subtitleClass} text-lg max-w-3xl mx-auto`}>
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Assurances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {assurances.map((assurance, index) => (
            <motion.div
              key={index}
              className={`group relative ${cardBgClass} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                {/* Check Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${iconBgClass} flex items-center justify-center shadow-lg ${darkTheme ? 'group-hover:shadow-cyan-400/50' : 'group-hover:shadow-blue-400/50'} transition-shadow`}>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Text */}
                <p className={`${cardTextClass} text-base leading-relaxed font-medium`}>
                  {assurance.text}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl ${darkTheme ? 'bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0' : 'bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-block">
            <div className={`h-1 w-32 ${darkTheme ? 'bg-gradient-to-r from-transparent via-cyan-400 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-500 to-transparent'} rounded-full`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryAssurance;

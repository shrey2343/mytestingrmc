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
}

const IndustryAssurance = ({
  sectionLabel,
  title,
  subtitle,
  assurances,
}: IndustryAssuranceProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
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
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3">
            {sectionLabel}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Assurances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {assurances.map((assurance, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:bg-white/10"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                {/* Check Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-cyan-400/50 transition-shadow">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Text */}
                <p className="text-white text-base leading-relaxed font-medium">
                  {assurance.text}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryAssurance;

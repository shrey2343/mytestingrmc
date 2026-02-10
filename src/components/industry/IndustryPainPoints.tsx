import { motion } from "framer-motion";
import { AlertCircle, ChevronRight } from "lucide-react";

interface PainPoint {
  title: string;
  description: string;
}

interface IndustryPainPointsProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  painPoints: PainPoint[];
}

const IndustryPainPoints = ({
  sectionLabel,
  title,
  subtitle,
  painPoints,
}: IndustryPainPointsProps) => {
  return (
    <section className="pt-8 pb-8 bg-gradient-to-r from-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-blue-200/30 rounded-3xl"
          animate={{ rotate: 360, borderRadius: ["30%", "40%", "30%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 border border-cyan-200/20 rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '10%', right: '10%' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="text-blue-600 text-sm font-medium uppercase tracking-wider mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {sectionLabel}
          </motion.span>
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((painPoint, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="font-display text-xl font-semibold text-slate-900 mb-3 leading-tight tracking-tight">
                {painPoint.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {painPoint.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryPainPoints;

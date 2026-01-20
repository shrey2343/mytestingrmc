import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface IndustryHeroProps {
  badge: string;
  badgeIcon?: ReactNode;
  titleWhite: string;
  titleRed: string;
  subtitle: string;
  tags: string[];
  primaryCta: string;
  secondaryCta: string;
  stats: { value: string; label: string }[];
}

const IndustryHero = ({
  badge,
  badgeIcon,
  titleWhite,
  titleRed,
  subtitle,
  tags,
  primaryCta,
  secondaryCta,
  stats,
}: IndustryHeroProps) => {
  return (
    <section className="relative min-h-[700px] lg:min-h-[650px] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
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
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/5 rounded-3xl"
          animate={{ rotate: 360, borderRadius: ["30%", "40%", "30%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-blue-500/10 rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 75, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '5%', left: '5%' }}
        />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '30px 30px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30" />
      </div>

      <div className="container-custom relative z-10 w-full py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <motion.div
          className="flex-1 text-white max-w-[650px]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            {badgeIcon}
            <span className="text-sm text-white/90">{badge}</span>
          </motion.div>

          <h1 className="font-display font-bold text-[36px] md:text-[48px] leading-[1.1] mb-6">
            {titleWhite}
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">{titleRed}</span>
          </h1>

          <p className="font-body text-base md:text-lg leading-relaxed text-slate-300 mb-8">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {tags.map((tag, index) => (
              <motion.span 
                key={index} 
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://calendly.com/researchstrategycall/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap className="w-4 h-4" />
              {primaryCta}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full max-w-[500px]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <span className="block text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">{stat.value}</span>
                  <span className="block text-sm text-slate-300">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryHero;

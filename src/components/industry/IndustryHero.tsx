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
    <section className="relative min-h-[700px] lg:min-h-[650px] flex items-center overflow-hidden bg-foreground hero-gradient">
      <div className="container-custom relative z-10 w-full py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-background max-w-[650px]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 mb-6">
            {badgeIcon}
            <span className="text-sm text-background/90">{badge}</span>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-[36px] md:text-[48px] leading-[1.1] mb-6 text-shadow">
            {titleWhite}
            <span className="block text-primary">{titleRed}</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-base md:text-lg leading-relaxed text-background/80 mb-8">
            {subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {tags.map((tag, index) => (
              <span key={index} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://calendly.com/researchstrategycall/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Zap className="w-4 h-4" />
              {primaryCta}
            </a>
            <a href="#services" className="btn-secondary">
              {secondaryCta}
            </a>
          </div>
        </motion.div>

        {/* Right - Stats Grid */}
        <motion.div
          className="flex-1 w-full max-w-[500px]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryHero;

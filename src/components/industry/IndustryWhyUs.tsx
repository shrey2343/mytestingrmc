import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface IndustryWhyUsProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  benefits: string[];
  ctaText?: string;
  ctaLink?: string;
}

const IndustryWhyUs = ({
  sectionLabel,
  title,
  subtitle,
  benefits,
  ctaText,
  ctaLink,
}: IndustryWhyUsProps) => {
  return (
    <section className="py-24 bg-foreground">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              {sectionLabel}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
              {title}
            </h2>
            <p className="text-background/70 mb-8 max-w-xl">
              {subtitle}
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-background/80">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          {ctaText && (
            <motion.div
              className="flex-1 max-w-md"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-background/5 border border-background/10 rounded-2xl p-8 text-center">
                <h3 className="font-display text-xl font-bold text-background mb-6">
                  {ctaText}
                </h3>
                <a
                  href="https://calendly.com/researchstrategycall/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Get Free Consultation
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IndustryWhyUs;

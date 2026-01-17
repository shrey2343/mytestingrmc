import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface IndustryCTAProps {
  title: string;
  subtitle: string;
}

const IndustryCTA = ({ title, subtitle }: IndustryCTAProps) => {
  return (
    <section className="py-24 bg-foreground">
      <div className="container-custom text-center">
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-background mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-background/70 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://calendly.com/researchstrategycall/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Zap className="w-4 h-4" />
            Schedule a Call
          </a>
          <button className="btn-secondary">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryCTA;

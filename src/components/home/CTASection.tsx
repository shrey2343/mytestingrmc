import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      className="relative overflow-hidden bg-foreground py-24 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3080d8c-9772-448e-90c5-656be01b7b75-cactusglobal-com/assets/images/CTA_BG-28.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "400px",
      }}
    >
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.h2
          className="font-display text-background text-3xl md:text-[42px] font-bold leading-tight mb-6 max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Discuss Your Research Needs
        </motion.h2>
        <motion.p
          className="text-background/80 text-base md:text-lg max-w-[700px] mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Whether you are planning a study, running experiments, validating an idea, or preparing research outputs, we're ready to collaborate.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://calendly.com/researchstrategycall/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary font-bold"
          >
            👉 Book a Discussion
          </a>
        </motion.div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-foreground/40" />
    </section>
  );
};

export default CTASection;

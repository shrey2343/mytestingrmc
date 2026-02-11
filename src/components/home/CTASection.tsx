import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-12 flex flex-col items-center justify-center"
    >
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Research Icons */}
        <motion.div
          className="absolute top-[15%] left-[8%] text-blue-400/20 text-5xl"
          animate={{ rotate: [0, 360], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          🔬
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] right-[10%] text-purple-400/15 text-6xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          📊
        </motion.div>
        <motion.div
          className="absolute top-[60%] left-[15%] text-green-400/20 text-4xl"
          animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          💡
        </motion.div>
        <motion.div
          className="absolute top-[25%] right-[20%] text-orange-400/15 text-5xl"
          animate={{ rotate: [0, 180, 360], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          🚀
        </motion.div>
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute w-[300px] h-[300px] border border-blue-300/20 rounded-full"
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ top: '10%', right: '5%' }}
        />
        <motion.div
          className="absolute w-[200px] h-[200px] border border-purple-300/15 rounded-full"
          animate={{ rotate: [360, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ bottom: '15%', left: '8%' }}
        />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_40%_at_50%_50%,black_20%,transparent_80%)]"></div>
      </div>
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.h2
          className="font-display text-charcoal text-3xl md:text-[42px] font-bold leading-tight mb-6 max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Discuss Your Research Needs
        </motion.h2>
        <motion.p
          className="text-charcoal/70 text-base md:text-lg max-w-[700px] mx-auto mb-10 leading-relaxed"
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
      {/* No overlay needed for white background */}
    </section>
  );
};

export default CTASection;

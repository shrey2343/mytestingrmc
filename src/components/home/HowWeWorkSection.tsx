import { motion } from "framer-motion";
import { Phone, FileText, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Book a Discovery Call",
    description:
      "Share your goals, challenges, and context with us. We understand your research, data, or publication needs and assess how we can best support you.",
    icon: Phone,
  },
  {
    number: "2",
    title: "Research Planning  & Scope Design",
    description:
      "Our research experts design a clear plan tailored to your objectives. We define the scope, deliverables, timelines, and match you with the right expertise.",
    icon: FileText,
  },
  {
    number: "3",
    title: "Expert-Led Execution",
    description:
      "Our team begins execution with structured milestones and regular collaboration. Research, analysis, writing, or preparation progresses with clarity and transparency.",
    icon: Users,
  },
  {
    number: "4",
    title: "Review, Delivery & Ongoing Support",
    description:
      "We refine, review, and deliver high-quality, research-ready outputs. We continue supporting you through submissions, presentations, or next steps.",
    icon: CheckCircle,
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="py-24 bg-section-light relative overflow-hidden">
      {/* Animated Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 border border-blue-200/20 rounded-3xl"
          animate={{
            rotate: 360,
            borderRadius: ["30%", "50%", "30%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-40 left-20 w-48 h-48 border border-cyan-200/20 rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
        />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '5%', left: '5%' }}
        />

        <motion.div
          className="absolute w-[350px] h-[350px] bg-gradient-to-r from-cyan-300/8 to-blue-300/8 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', right: '10%' }}
        />

        {/* Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59,130,246,0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59,130,246,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-linkedin text-sm font-semibold uppercase tracking-wider mb-3">
            How We Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">
            A Simple, Structured Research Partnership
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative group"
              >
                {/* Animated Glow Border */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                />

                {/* Main Card */}
                <div className="relative bg-white border-2 border-blue-100 group-hover:border-blue-300 rounded-2xl p-8 text-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  {/* Step Number with Pulse */}
                  <motion.div
                    className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-base font-bold shadow-lg"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(59, 130, 246, 0.4)',
                        '0 0 0 10px rgba(59, 130, 246, 0)',
                        '0 0 0 0 rgba(59, 130, 246, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Animated Corner Accents */}
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-3xl rounded-tr-2xl"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-tr-3xl rounded-bl-2xl"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.2 + 0.5,
                    }}
                  />

                  {/* Icon with Rotation */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </motion.div>

                  {/* Title with Highlight Effect */}
                  <motion.h3
                    className="text-lg font-bold text-charcoal mb-3 relative inline-block"
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
                  
                  <p className="text-sm text-slate-grey leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom Accent Bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>

                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;

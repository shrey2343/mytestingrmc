import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Subject Matter Experts" },
  { value: "5k+", label: "Happy Researchers" },
  { value: "190+", label: "Countries Reached" },
  { value: "20+", label: "Years of Experience" },
];

const StatsSection = () => {
  return (
    <section className="w-full relative bg-gradient-to-r from-white to-blue-50 py-8 md:py-10 overflow-hidden">
      
      {/* Animated Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 border border-blue-200/30 rounded-3xl"
          animate={{
            rotate: 360,
            borderRadius: ["30%", "40%", "30%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-10 right-20 w-40 h-40 border border-blue-300/20 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', right: '10%' }}
        />

        {/* Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59,130,246,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59,130,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Animated Border Glow */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
              
              {/* Stat Box */}
              <div className="relative flex flex-col items-center text-center bg-white/80 backdrop-blur-sm border-2 border-blue-100 group-hover:border-blue-300 rounded-2xl p-6 md:p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                {/* Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-3xl rounded-tr-2xl"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                
                <motion.h2 
                  className="font-body text-3xl md:text-[42px] font-bold leading-tight mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {stat.value}
                </motion.h2>
                <p className="font-body text-sm md:text-[15px] text-slate-700 font-medium">
                  {stat.label}
                </p>

                {/* Bottom Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

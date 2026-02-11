import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: "50+", label: "Subject Matter Experts" },
  { value: "5k+", label: "Happy Researchers" },
  { value: "190+", label: "Countries Reached" },
  { value: "20+", label: "Years of Experience" },
];

// Counter animation component
const AnimatedCounter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * numericValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, numericValue, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsSection = () => {
  return (
    <section className="w-full relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 md:py-20 overflow-hidden">
      
      {/* Enhanced Animated Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Multiple Floating Shapes */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-300/40 rounded-3xl"
          animate={{
            rotate: [0, 360],
            borderRadius: ["30%", "40%", "35%", "30%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-cyan-300/30 rounded-2xl"
          animate={{
            rotate: [360, 0],
            borderRadius: ["25%", "50%", "25%"],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-10 right-20 w-40 h-40 border-2 border-purple-300/25 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
        />

        {/* Enhanced Gradient Orbs with more movement */}
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '5%', right: '5%' }}
        />

        <motion.div
          className="absolute w-[350px] h-[350px] bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 1.1, 1.05, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', left: '10%' }}
        />

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.07]"
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

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent mb-3"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            Trusted by Researchers Worldwide
          </motion.h2>
          <p className="text-slate-600 text-lg">Delivering excellence across the globe</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              {/* Enhanced Animated Border Glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Stat Box with Glass Effect */}
              <div className="relative flex flex-col items-center text-center bg-white/90 backdrop-blur-xl border-2 border-blue-100 group-hover:border-blue-300 rounded-2xl p-6 md:p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                {/* Animated Corner Accents */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-transparent rounded-bl-3xl rounded-tr-2xl"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                />

                <motion.div
                  className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-400/30 to-transparent rounded-tr-3xl rounded-bl-2xl"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4 + 0.5,
                  }}
                />
                
                {/* Animated Number with Counter */}
                <motion.h2 
                  className="font-body text-4xl md:text-5xl font-extrabold leading-tight mb-3 bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent"
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <AnimatedCounter value={stat.value} />
                </motion.h2>
                
                <p className="font-body text-sm md:text-base text-slate-700 font-semibold leading-snug">
                  {stat.label}
                </p>

                {/* Animated Bottom Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.15 + 0.4 }}
                />

                {/* Sparkle Effect on Hover */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: [0, 1, 0], scale: [0, 1.5, 2] }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

import { motion } from "framer-motion";
import { Rocket, Sparkles, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 flex flex-col items-center justify-center"
    >
      {/* Enhanced Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', right: '10%' }}
        />

        {/* Floating Research Icons with Enhanced Animation */}
        <motion.div
          className="absolute text-5xl"
          animate={{ 
            rotate: [0, 360], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ top: '15%', left: '8%' }}
        >
          <span className="text-blue-400/30">🔬</span>
        </motion.div>
        
        <motion.div
          className="absolute text-6xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            rotate: [0, -15, 15, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: '20%', right: '10%' }}
        >
          <span className="text-purple-400/20">📊</span>
        </motion.div>
        
        <motion.div
          className="absolute text-4xl"
          animate={{ 
            x: [0, 40, 0], 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '60%', left: '15%' }}
        >
          <span className="text-green-400/25">💡</span>
        </motion.div>
        
        <motion.div
          className="absolute text-5xl"
          animate={{ 
            rotate: [0, 180, 360], 
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '25%', right: '20%' }}
        >
          <span className="text-orange-400/20">🚀</span>
        </motion.div>
        
        {/* Geometric Shapes with Enhanced Animation */}
        <motion.div
          className="absolute w-[350px] h-[350px] border-2 border-blue-300/25 rounded-full"
          animate={{ 
            rotate: [0, 360], 
            scale: [1, 1.15, 1],
            borderRadius: ["50%", "40%", "50%"],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ top: '10%', right: '5%' }}
        />
        
        <motion.div
          className="absolute w-[250px] h-[250px] border-2 border-purple-300/20 rounded-full"
          animate={{ 
            rotate: [360, 0], 
            scale: [1, 0.9, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ bottom: '15%', left: '8%' }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
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
        
        {/* Enhanced Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,rgba(255,255,255,0.3)_80%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
       {/* Enhanced Title */}
        <motion.h2
          className="font-display text-charcoal text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-[900px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Let's Discuss Your{" "}
          <motion.span
            className="relative inline-block"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(90deg, #1e40af, #3b82f6, #1e40af)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Research Needs
          </motion.span>
        </motion.h2>

        {/* Enhanced Description */}
        <motion.p
          className="text-slate-700 text-lg md:text-xl max-w-[750px] mx-auto mb-12 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Whether you are planning a study, running experiments, validating an idea, or preparing research outputs, we're ready to collaborate.
        </motion.p>

        {/* Enhanced CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="#quote-form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl overflow-hidden group"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            />

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-3">
              <Rocket className="w-6 h-6" />
              Get A Callback
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>

            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(59, 130, 246, 0.4)',
                  '0 0 0 20px rgba(59, 130, 246, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✓
            </motion.div>
            <span className="font-semibold">Expert Guidance</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✓
            </motion.div>
            <span className="font-semibold">Proven Results</span>
          </motion.div>
        </motion.div>

        {/* Continuous Image Carousel */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {/* First set of images */}
            {[
              "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop", // Lab research
              "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop", // Data charts
              "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&h=300&fit=crop", // Scientific equipment
              "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop", // Medical research
              "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop", // Microscope
              "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=300&fit=crop", // Research team
              "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop", // Lab work
              "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop", // Scientific study
            ].map((src, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={src}
                  alt={`Research ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {[
              "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop",
            ].map((src, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={src}
                  alt={`Research ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

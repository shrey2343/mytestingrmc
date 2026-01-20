import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface IndustryTestimonialsProps {
  sectionLabel: string;
  title: string;
  testimonials: Testimonial[];
}

const IndustryTestimonials = ({ sectionLabel, title, testimonials }: IndustryTestimonialsProps) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#2C3E50]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 border border-white/5 rounded-3xl"
          animate={{ rotate: 360, borderRadius: ["30%", "50%", "30%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-48 h-48 border border-white/5 rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-600/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '5%', left: '5%' }}
        />
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {sectionLabel}
          </motion.span>
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
              />
              <div className="relative bg-[#34495E]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <motion.div 
                  className="mb-4"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                >
                  <Quote className="w-8 h-8 text-blue-400 opacity-60" />
                </motion.div>
                <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                  {testimonial.quote}
                </p>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-display font-bold text-white text-sm">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryTestimonials;

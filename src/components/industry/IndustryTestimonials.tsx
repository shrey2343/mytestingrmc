import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface IndustryTestimonialsProps {
  sectionLabel: string;
  title: string;
  testimonials: Testimonial[];
  darkTheme?: boolean;
}

const IndustryTestimonials = ({ sectionLabel, title, testimonials, darkTheme = true }: IndustryTestimonialsProps) => {
  const bgClass = darkTheme ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" : "bg-gradient-to-r from-white to-blue-50";
  const labelClass = darkTheme ? "text-cyan-400" : "text-blue-600";
  const titleClass = darkTheme ? "text-white" : "text-slate-900";
  const cardBgClass = darkTheme ? "bg-slate-800/20 border-slate-700/30" : "bg-white border-blue-100";
  const quoteTextClass = darkTheme ? "text-slate-300" : "text-slate-700";
  const authorNameClass = darkTheme ? "text-white" : "text-slate-900";
  const authorRoleClass = darkTheme ? "text-cyan-400" : "text-blue-600";
  const quoteIconClass = darkTheme ? "text-cyan-400" : "text-blue-400";
  
  return (
    <section className={`py-12 md:py-16 lg:py-20 relative overflow-hidden ${bgClass}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {darkTheme && (
          <>
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.3) 1px, transparent 0)',
                backgroundSize: '50px 50px'
              }} />
            </div>
            <motion.div
              className="absolute top-20 right-20 w-40 h-40 border border-cyan-500/10 rounded-3xl"
              animate={{ rotate: 360, borderRadius: ["30%", "50%", "30%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-40 left-20 w-48 h-48 border border-cyan-500/10 rounded-full"
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 18, repeat: Infinity }}
            />
          </>
        )}
      </div>

      <div className="container-custom relative z-10 px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.span 
            className={`${labelClass} text-xs md:text-sm font-medium uppercase tracking-wider mb-3 md:mb-4 block`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {sectionLabel}
          </motion.span>
          <motion.h2 
            className={`font-display text-2xl md:text-3xl lg:text-4xl font-bold ${titleClass} px-2`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
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
                className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
              />
              <div className={`relative ${cardBgClass} backdrop-blur-sm border rounded-2xl p-6 md:p-8 shadow-lg group-hover:shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-300`}>
                <motion.div 
                  className="mb-4 md:mb-6"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                >
                  <div className="relative w-12 h-12 md:w-14 md:h-14">
                    <span className={`${quoteIconClass} text-4xl md:text-5xl font-serif font-bold`}>"</span>
                  </div>
                </motion.div>
                <p className={`${quoteTextClass} mb-6 md:mb-8 leading-relaxed text-sm md:text-base italic`}>
                  {testimonial.quote}
                </p>
                <div className={`border-t ${darkTheme ? 'border-slate-700/50' : 'border-slate-200'} pt-4 md:pt-5`}>
                  <h4 className={`font-display font-bold ${authorNameClass} text-sm md:text-base mb-1`}>
                    {testimonial.author}
                  </h4>
                  <p className={`text-xs md:text-sm ${authorRoleClass}`}>
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

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface IndustryCTAProps {
  title: string;
  subtitle: string;
  whatsappNumber?: string;
  darkTheme?: boolean;
  sectionLabel?: string;
}

const IndustryCTA = ({ title, subtitle, whatsappNumber, darkTheme = true, sectionLabel }: IndustryCTAProps) => {
  const whatsappLink = whatsappNumber 
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`
    : "https://calendly.com/researchstrategycall/30min";
  
  const buttonText = whatsappNumber ? "WhatsApp Now" : "Schedule a Call";
  
  const bgClass = darkTheme ? "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" : "bg-gradient-to-r from-blue-50 to-white";
  const titleClass = darkTheme ? "text-white" : "text-slate-900";
  const subtitleClass = darkTheme ? "text-slate-300" : "text-slate-600";
  const labelClass = darkTheme ? "text-blue-400" : "text-blue-600";

  return (
    <section className={`py-16 md:py-20 lg:py-24 relative overflow-hidden ${bgClass}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 border border-cyan-200/10 rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '5%', left: '5%' }}
        />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom text-center relative z-10 px-4 md:px-6">
        {sectionLabel && (
          <motion.div
            className="mb-5 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-full ${darkTheme ? 'bg-white/10 border border-white/20' : 'bg-blue-100 border border-blue-200'} ${labelClass} text-xs md:text-sm font-semibold backdrop-blur-sm`}>
              {sectionLabel}
            </span>
          </motion.div>
        )}
        <motion.h2
          className={`font-display text-2xl md:text-3xl lg:text-4xl font-bold ${titleClass} mb-3 md:mb-4 px-2`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className={`${subtitleClass} max-w-2xl mx-auto mb-8 md:mb-10 text-sm md:text-base px-4`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
           <motion.button
            onClick={() => {
              const formElement = document.querySelector('form');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Add a subtle highlight effect
                formElement.parentElement?.classList.add('ring-4', 'ring-blue-400', 'ring-opacity-50');
                setTimeout(() => {
                  formElement.parentElement?.classList.remove('ring-4', 'ring-blue-400', 'ring-opacity-50');
                }, 2000);
              }
            }}
            className={`inline-flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 rounded-lg font-semibold transition-all shadow-lg text-sm md:text-base ${
              whatsappNumber 
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-green-600 hover:to-emerald-600 hover:shadow-green-500/50"
                : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryCTA;

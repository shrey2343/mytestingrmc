import { motion } from "framer-motion";
import { ChevronRight, CheckCircle } from "lucide-react";

interface Service {
  title: string;
  description: string;
  benefits?: string[];
}

interface IndustryServicesProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  services: Service[];
  hideLearnMore?: boolean;
  hideDescription?: boolean;
  darkTheme?: boolean;
}

const IndustryServices = ({ sectionLabel, title, subtitle, services, hideLearnMore = false, hideDescription = false, darkTheme = false }: IndustryServicesProps) => {
  const bgClass = darkTheme ? "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" : "bg-gradient-to-r from-white to-blue-50";
  const labelClass = darkTheme ? "text-blue-400" : "text-blue-600";
  const titleClass = darkTheme ? "text-white" : "text-slate-900";
  const subtitleClass = darkTheme ? "text-slate-300" : "text-slate-600";
  const cardBgClass = darkTheme ? "bg-slate-800/50 border-slate-700 group-hover:border-blue-500" : "bg-white border-blue-100 group-hover:border-blue-300";
  const cardTitleClass = darkTheme ? "text-white" : "text-slate-900";
  const cardTextClass = darkTheme ? "text-slate-300" : "text-slate-600";
  const benefitIconClass = darkTheme ? "text-blue-400" : "text-blue-500";
  
  return (
    <section id="services" className={`py-8 ${bgClass} relative overflow-hidden`}>
      {/* Animated Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-blue-200/30 rounded-3xl"
          animate={{ rotate: 360, borderRadius: ["30%", "40%", "30%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 border border-cyan-200/20 rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '10%', right: '10%' }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className={`${labelClass} text-sm font-medium uppercase tracking-wider mb-4 block`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {sectionLabel}
          </motion.span>
          <motion.h2 
            className={`font-display text-3xl md:text-4xl font-bold ${titleClass} mb-4`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className={`${subtitleClass} max-w-2xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group h-full flex flex-col"
            >
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
              />
              <div className={`relative ${cardBgClass} border-2 rounded-2xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 flex-1 flex flex-col`}>
                <motion.div
                  className="absolute top-0 right-0 w-16 h-12 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-3xl rounded-tr-2xl"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}
                />
                <motion.h3 
                  className={`font-display text-xl font-bold ${cardTitleClass} mb-4 relative inline-block`}
                  whileHover={{ scale: 1.02 }}
                >
                  {service.title}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  />
                </motion.h3>
              
              {service.benefits ? (
                <>
                  <div className="mb-4 flex-grow">
                    <h4 className={`text-sm font-semibold ${cardTitleClass} mb-2`}>This helps you in:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className={`flex items-start gap-2 text-sm ${cardTextClass}`}>
                          <CheckCircle className={`w-4 h-4 ${benefitIconClass} mt-0.5 flex-shrink-0`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {!hideDescription && (
                    <div className="mb-4">
                      <h4 className={`text-sm font-semibold ${cardTitleClass} mb-2`}>How we help:</h4>
                      <p className={`text-sm ${cardTextClass}`}>
                        {service.description}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <p className={`text-sm ${cardTextClass} mb-4 flex-grow`}>
                  {service.description}
                </p>
              )}
              
              {!hideLearnMore && (
                <button className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all mt-auto">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryServices;

import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Domain {
  title: string;
  description: string;
}

interface IndustryDomainsProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  domains: Domain[];
  closingStatement?: string;
  darkTheme?: boolean;
}

const IndustryDomains = ({
  sectionLabel,
  title,
  subtitle,
  domains,
  closingStatement,
  darkTheme = false,
}: IndustryDomainsProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const bgClass = darkTheme ? "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" : "bg-gradient-to-br from-blue-50 via-white to-blue-50";
  const labelClass = darkTheme ? "text-blue-400" : "text-blue-600";
  const titleClass = darkTheme ? "text-white" : "text-slate-900";
  const subtitleClass = darkTheme ? "text-slate-300" : "text-slate-600";
  const cardBgClass = darkTheme ? "bg-slate-800/50 border-slate-700 hover:border-blue-500" : "bg-white border-blue-100 hover:border-blue-300";
  const cardTitleClass = darkTheme ? "text-white" : "text-slate-900";
  const cardTextClass = darkTheme ? "text-slate-300" : "text-slate-600";
  const lineClass = darkTheme ? "bg-slate-600" : "bg-blue-300";
  const dotClass = darkTheme ? "bg-blue-400" : "bg-blue-500";

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <section className={`py-12 md:py-16 lg:py-20 ${bgClass}`}>
      <div className="container-custom px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={`${labelClass} text-xs md:text-sm font-semibold uppercase tracking-wider mb-2 md:mb-3`}>
            {sectionLabel}
          </p>
          <h2 className={`font-display text-2xl md:text-3xl lg:text-4xl font-bold ${titleClass} mb-3 md:mb-4 px-2`}>
            {title}
          </h2>
          <p className={`${subtitleClass} text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-4`}>
            {subtitle}
          </p>
        </motion.div>

        {/* Tree Structure - Desktop */}
        <div className="hidden lg:block max-w-4xl mx-auto mb-8 md:mb-12">
          <div className="relative">
            {/* Vertical Center Line */}
            <div className={`absolute left-1/2 top-0 bottom-0 w-0.5 ${lineClass} transform -translate-x-1/2`} />
            
            {/* Top Dot */}
            <div className={`absolute left-1/2 -top-2 w-3 h-3 rounded-full ${dotClass} transform -translate-x-1/2 z-10`} />

            {/* Rows */}
            {[0, 2, 4, 6, 8, 10].map((startIndex, rowIndex) => (
              <div key={rowIndex} className="relative mb-8">
                {/* Horizontal Line
                <div className={`absolute left-0 right-0 top-1/2 h-0.5 ${lineClass} transform -translate-y-1/2`} /> */}
                
                {/* Left Domain */}
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    className="relative flex justify-end"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
                  >
                    {/* Connecting Line to Card */}
                    <div className={`absolute right-0 top-1/2 w-6 h-0.5 ${lineClass} transform -translate-y-1/2`} />
                    <div className={`absolute right-0 top-1/2 w-2.5 h-2.5 rounded-full ${dotClass} transform translate-x-1/2 -translate-y-1/2 z-10`} />
                    
                    <div 
                      onClick={() => handleCardClick(startIndex)}
                      className={`${cardBgClass} border-2 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs group hover:scale-105 cursor-pointer ${expandedIndex === startIndex ? 'ring-2 ring-blue-400' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${darkTheme ? 'bg-blue-900/50' : 'bg-blue-100'} flex items-center justify-center`}>
                          <GraduationCap className={`w-5 h-5 ${darkTheme ? 'text-blue-400' : 'text-blue-600'}`} />
                        </div>
                        <h3 className={`font-display text-base font-bold ${cardTitleClass} flex-1`}>
                          {domains[startIndex]?.title}
                        </h3>
                        <ChevronDown className={`w-4 h-4 ${darkTheme ? 'text-blue-400' : 'text-blue-600'} transition-transform duration-300 ${expandedIndex === startIndex ? 'rotate-180' : ''}`} />
                      </div>
                      <AnimatePresence>
                        {expandedIndex === startIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className={`${cardTextClass} text-sm mt-3 pt-3 border-t ${darkTheme ? 'border-slate-700' : 'border-slate-200'}`}>
                              {domains[startIndex]?.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Right Domain */}
                  {domains[startIndex + 1] && (
                    <motion.div
                      className="relative flex justify-start"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: rowIndex * 0.1 + 0.1 }}
                    >
                      {/* Connecting Line to Card */}
                      <div className={`absolute left-0 top-1/2 w-6 h-0.5 ${lineClass} transform -translate-y-1/2`} />
                      <div className={`absolute left-0 top-1/2 w-2.5 h-2.5 rounded-full ${dotClass} transform -translate-x-1/2 -translate-y-1/2 z-10`} />
                      
                      <div 
                        onClick={() => handleCardClick(startIndex + 1)}
                        className={`${cardBgClass} border-2 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs group hover:scale-105 cursor-pointer ${expandedIndex === startIndex + 1 ? 'ring-2 ring-blue-400' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${darkTheme ? 'bg-blue-900/50' : 'bg-blue-100'} flex items-center justify-center`}>
                            <GraduationCap className={`w-5 h-5 ${darkTheme ? 'text-blue-400' : 'text-blue-600'}`} />
                          </div>
                          <h3 className={`font-display text-base font-bold ${cardTitleClass} flex-1`}>
                            {domains[startIndex + 1]?.title}
                          </h3>
                          <ChevronDown className={`w-4 h-4 ${darkTheme ? 'text-blue-400' : 'text-blue-600'} transition-transform duration-300 ${expandedIndex === startIndex + 1 ? 'rotate-180' : ''}`} />
                        </div>
                        <AnimatePresence>
                          {expandedIndex === startIndex + 1 && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className={`${cardTextClass} text-sm mt-3 pt-3 border-t ${darkTheme ? 'border-slate-700' : 'border-slate-200'}`}>
                                {domains[startIndex + 1]?.description}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Grid View */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12 px-2 md:px-0">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`group relative ${cardBgClass} rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border cursor-pointer ${expandedIndex === index ? 'ring-2 ring-blue-400' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs shadow-lg z-10">
                {index + 1}
              </div>

              <div className="flex items-center gap-3">
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${darkTheme ? 'bg-blue-900/50' : 'bg-blue-100'} transition-colors flex items-center justify-center`}>
                  <GraduationCap className={`w-5 h-5 ${darkTheme ? 'text-blue-400' : 'text-blue-600'}`} />
                </div>

                <h3 className={`font-display text-base font-bold ${cardTitleClass} transition-colors flex-1`}>
                  {domain.title}
                </h3>
                
                <ChevronDown className={`w-4 h-4 ${darkTheme ? 'text-blue-400' : 'text-blue-600'} transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} />
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className={`${cardTextClass} text-sm mt-3 pt-3 border-t ${darkTheme ? 'border-slate-700' : 'border-slate-200'}`}>
                      {domain.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        {closingStatement && (
          <motion.div
            className="text-center mt-8 md:mt-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl">
              <p className="text-white text-sm md:text-base lg:text-lg font-medium max-w-3xl">
                {closingStatement}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default IndustryDomains;

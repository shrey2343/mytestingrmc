import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

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
}

const IndustryDomains = ({
  sectionLabel,
  title,
  subtitle,
  domains,
  closingStatement,
}: IndustryDomainsProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
            {sectionLabel}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {domain.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {domain.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        {closingStatement && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 shadow-xl">
              <p className="text-white text-lg font-medium max-w-3xl">
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

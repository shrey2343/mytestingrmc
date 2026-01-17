import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
}

interface IndustryServicesProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  services: Service[];
}

const IndustryServices = ({ sectionLabel, title, subtitle, services }: IndustryServicesProps) => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            {sectionLabel}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group"
            >
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
              <button className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Learn More
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryServices;

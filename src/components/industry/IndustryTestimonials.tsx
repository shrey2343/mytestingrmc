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
}

const IndustryTestimonials = ({ sectionLabel, title, testimonials }: IndustryTestimonialsProps) => {
  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            {sectionLabel}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary rounded-2xl p-8"
            >
              <p className="text-foreground italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="font-display font-bold text-foreground">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryTestimonials;

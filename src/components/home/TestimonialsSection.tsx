import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
{
  quote: "RMC transformed our research strategy with their strong expertise in data analysis and publication support. Their ethical and quality-focused approach helped our team publish in high-impact journals.",
  author: "Dr. Jonathan Miller",
  role: "Senior Research Scientist",
  organization: "Healthcare Innovation Lab, Boston, USA",
},
{
  quote: "As a PhD researcher, I struggled with thesis structure and data interpretation. RMC’s clear and structured guidance helped me gain complete clarity, and I successfully defended my dissertation with confidence.",
  author: "Emily Carter",
  role: "PhD Researcher",
  organization: "Department of Life Sciences, USA",
},
{
  quote: "Collaborating with RMC for our startup’s market research was a turning point. Their data-driven insights strengthened our investor pitch and played a key role in securing funding.",
  author: "Michael Thompson",
  role: "Founder & CEO",
  organization: "HealthTech Startup, San Francisco, USA",
},
{
  quote: "The team at RMC provided exceptional support throughout our clinical trial documentation. Their attention to detail and regulatory knowledge was invaluable.",
  author: "Dr. Sarah Johnson",
  role: "Clinical Research Director",
  organization: "MedTech Solutions, New York, USA",
},
{
  quote: "RMC's expertise in statistical analysis helped us uncover insights we hadn't considered. Their work directly contributed to our breakthrough publication.",
  author: "Prof. David Chen",
  role: "Professor of Biostatistics",
  organization: "Stanford University, USA",
},
{
  quote: "Working with RMC streamlined our research process significantly. Their systematic approach and timely delivery exceeded our expectations.",
  author: "Dr. Maria Rodriguez",
  role: "Research Lead",
  organization: "Pharma Innovations, California, USA",
},
{
  quote: "RMC's medical writing services are top-notch. They helped us communicate complex research findings in a clear and compelling manner.",
  author: "James Wilson",
  role: "VP of Research",
  organization: "BioHealth Corp, Boston, USA",
},
{
  quote: "The consultation sessions with RMC were incredibly insightful. They guided us through every step of our research methodology.",
  author: "Dr. Priya Sharma",
  role: "Assistant Professor",
  organization: "MIT, Massachusetts, USA",
},
{
  quote: "RMC's support in preparing our conference presentations was outstanding. We received excellent feedback from peers and reviewers.",
  author: "Robert Anderson",
  role: "Senior Researcher",
  organization: "Tech Research Institute, Seattle, USA",
},
{
  quote: "Their expertise in data visualization helped us present our findings in a much more impactful way. Highly recommend their services.",
  author: "Dr. Lisa Wang",
  role: "Data Scientist",
  organization: "AI Research Lab, San Francisco, USA",
},
{
  quote: "RMC's team is professional, responsive, and deeply knowledgeable. They've become our go-to partner for all research-related needs.",
  author: "Mark Stevens",
  role: "Director of Innovation",
  organization: "Enterprise Solutions Inc, Texas, USA",
},
{
  quote: "This team is professional, responsive, and deeply best. They've become our go-to partner for all research-related needs.",
  author: "Dr.Robin Jarvish",
  role: "Director of Innovation",
  organization: "Enterprise Solutions Inc, Texas, USA",
},
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  return (
    <section className="py-20 bg-charcoal">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-background/70 text-sm font-semibold uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-background">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="w-10 h-10 text-linkedin/20 mb-4" />
              <p className="text-slate-grey text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-charcoal/10 pt-4">
                <p className="font-semibold text-charcoal">{testimonial.author}</p>
                <p className="text-xs text-slate-grey mt-1">{testimonial.role}</p>
                <p className="text-xs text-linkedin font-medium mt-1">
                  {testimonial.organization}
                </p>
              </div>
            </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={prevTestimonials}
              className="w-12 h-12 rounded-full bg-linkedin hover:bg-linkedin/90 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-background font-medium">
              {currentIndex + 1} / {totalPages}
            </span>
            <button
              onClick={nextTestimonials}
              className="w-12 h-12 rounded-full bg-linkedin hover:bg-linkedin/90 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
{
  quote: "RMC transformed our research strategy with their strong expertise in data analysis and publication support. Their ethical and quality-focused approach helped our team publish in high-impact journals.",
  author: "Dr. Jonathan Miller",
  role: "Senior Research Scientist",
  rating: 5,
},
{
  quote: "As a PhD researcher, I struggled with thesis structure and data interpretation. RMC's  clear and structured guidance helped me gain complete clarity, and I successfully defended my dissertation with confidence.",
  author: "Shalini Mehta",
  role: "PhD Researcher",
  rating: 5,
},
{
  quote: "Collaborating with RMC for our startup's market research was a turning point. Their data-driven insights strengthened our investor pitch and played a key role in securing funding.",
  author: "Michael Crook",
  role: "Founder & CEO",
  rating: 5,
},
{
  quote: "The team at RMC provided exceptional support throughout our clinical trial documentation. Their attention to detail and regulatory knowledge was invaluable.",
  author: "Dr. Suraj Waskale",
  role: "Clinical Research Director",
  rating: 5,
},
{
  quote: "RMC's expertise in statistical analysis helped us uncover insights we hadn't considered. Their work directly contributed to our breakthrough publication.",
  author: "Prof. David Watson",
  role: "Professor of Biostatistics",
  rating: 5,
},
{
  quote: "Working with RMC streamlined our research process significantly. Their systematic approach and timely delivery exceeded our expectations.",
  author: "Dr. Sneha Agrawal",
  role: "Research Lead",
  rating: 5,
},
{
  quote: "RMC's medical writing services are top-notch. They helped us communicate complex research findings in a clear and compelling manner.",
  author: "David Wilson",
  role: "VP of Research",
  rating: 5,
},
{
  quote: "The consultation sessions with RMC were incredibly insightful. They guided us through every step of our research methodology.",
  author: "Dr. Priya Sharma",
  role: "Assistant Professor",
  rating: 5,
},
{
  quote: "RMC's support in preparing our conference presentations was outstanding. We received excellent feedback from peers and reviewers.",
  author: "Robert Antonio",
  role: "Senior Researcher",
  rating: 5,
},
{
  quote: "Their expertise in data visualization helped us present our findings in a much more impactful way. Highly recommend their services.",
  author: "Dr. Lisa Wang",
  role: "Data Scientist",
  rating: 5,
},
{
  quote: "RMC's team is professional, responsive, and deeply knowledgeable. They've become our go-to partner for all research-related needs.",
  author: "Mark Miller",
  role: "Director of Innovation",
  rating: 5,
},
{
  quote: "This team is professional, responsive, and deeply best. They've become our go-to partner for all research-related needs.",
  author: "Dr.Satyendra Mehra",
  role: "Director of Innovation",
  rating: 5,
},
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * testimonialsPerPage,
    (currentIndex + 1) * testimonialsPerPage
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        
        <motion.div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', right: '10%' }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
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

        {/* Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59,130,246,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59,130,246,0.5) 1px, transparent 1px)
            `,
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
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
         
             <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold text-background mb-4"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: 'linear-gradient(90deg, #fff, #60a5fa, #fff)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            What Our Clients Say
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Trusted by researchers, institutions, and organizations worldwide
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500"
                  />
                  
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-200 h-full flex flex-col">
                    {/* Quote Icon with Animation */}
                    <motion.div
                      className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Quote className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Corner Accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-tr-2xl"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-grow italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info with Gradient Border */}
                    <div className="border-t-2 border-gradient-to-r from-blue-200 to-cyan-200 pt-4">
                      <p className="font-bold text-charcoal text-base">{testimonial.author}</p>
                      <p className="text-xs text-slate-600 mt-1 font-medium">{testimonial.role}</p>
                    </div>

                    {/* Bottom Accent Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-b-2xl"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              onClick={prevTestimonials}
              className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex 
                      ? 'w-8 bg-gradient-to-r from-blue-500 to-cyan-500' 
                      : 'w-2 bg-slate-600 hover:bg-slate-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonials}
              className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

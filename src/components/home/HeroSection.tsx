import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Startups & Enterprises",
    image: "/a.jpeg",
    link: "/startups-enterprises",
  },
  {
    id: 2,
    title: "Healthcare & Life Sciences",
    image: "/b.jpeg",
    link: "/healthcare-life-sciences",
  },
  {
    id: 3,
    title: "MedCom & Research Agencies",
    image: "/c.jpeg",
    link: "/medcom-research-agencies",
  },
  {
    id: 4,
    title: "Research for Everyone",
    image: "/d.jpeg",
    link: "/research-for-everyone",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[700px] lg:min-h-[750px] flex items-center overflow-hidden bg-foreground hero-gradient">
      <div className="container-custom relative z-10 w-full py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div 
          className="flex-1 text-background max-w-[650px]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-display font-bold text-[36px] md:text-[48px] leading-[1.2] mb-6 text-shadow">
            Research, Experimentation & Scientific Publication Partner
          </h1>
          <p className="font-body text-base md:text-lg leading-relaxed text-background/90 mb-10">
            We collaborate with researchers, healthcare organizations, AI innovators, startups, and enterprises to design studies, execute experiments, analyze data, and translate findings into publications, reports, and scientific communications.
          </p>
          <a 
            href="https://calendly.com/researchstrategycall/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Discussion
          </a>
        </motion.div>

        {/* Right - Phone Carousel */}
        <motion.div 
          className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full max-w-[480px]">
            {/* Phone Frame */}
            <div className="relative mx-auto w-[280px] md:w-[320px] h-[420px] md:h-[480px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[32px] p-2 shadow-2xl">
              <div className="w-full h-full bg-foreground rounded-[24px] overflow-hidden relative">
                {/* Navigation Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 z-20">
                  <button 
                    onClick={prevSlide}
                    className="w-8 h-8 rounded-full bg-background/20 hover:bg-background/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4 text-background" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="w-8 h-8 rounded-full bg-background/20 hover:bg-background/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 text-background" />
                  </button>
                </div>

                {/* Slides */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="gradient-overlay absolute inset-0" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                      <Link
                        to={slides[currentSlide].link}
                        className="inline-flex items-center gap-1 text-background/80 font-medium text-xs hover:text-background transition-colors"
                      >
                        Learn more
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-background/40 hover:bg-background/60 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

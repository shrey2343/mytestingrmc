import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const cards = [
  {
    id: "research",
    title: "Research for Everyone",
    subtitle: "Supporting High School, Undergraduate (UG), Master's, Doctorate, and Corporate professionals.",
    features: [
      "Ivy leagues Admissions",
      "EBI Visa Assistance",
      "Dr. Authority",
      "Ph. D. & DBA Researchers",
      "Corporate Authority",
      "University Faculty/Professors",
    ],
    bgColor: "from-white to-blue-50",
    textColor: "text-charcoal",
    link: "/research-for-everyone",
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3080d8c-9772-448e-90c5-656be01b7b75-cactusglobal-com/assets/icons/universities_icon-4.png",
    accentColor: "blue",
  },
  {
    id: "startups",
    title: "Startups & Enterprises",
    subtitle: "Validating ideas, strengthening funding stories, and building research-backed credibility",
   features: [
  "Founders",
  "Innovation teams",
  "Corporate R&D",
  "VC-backed companies",
  "Idea Validation",
  "Research Papers",
  "Data Insights",
  "International Conferences",
  "MVP Support",
  "Pitch Decks",
],
    bgColor: "from-white to-blue-50",
    textColor: "text-charcoal",
    link: "/startups-enterprises",
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3080d8c-9772-448e-90c5-656be01b7b75-cactusglobal-com/assets/icons/corporate_icon-6.png",
    accentColor: "cyan",
  },
  {
    id: "biosciences",
    title: "Biosciences",
    subtitle: "Advancing Research, Innovation & Scientific Intelligence Globally",
    features: [
  "Pharma",
  "MedTech",
  "Digital health",
  "Life sciences firms",
  "Scientific Publications",
  "Medical Writing",
  "Data Analysis",
  "Conference Papers",
  "Poster Presentations",
  "Research Support",
],
    bgColor: "from-white to-blue-50",
    textColor: "text-charcoal",
    link: "/biosciences",
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3080d8c-9772-448e-90c5-656be01b7b75-cactusglobal-com/assets/icons/government_icon-5.png",
    accentColor: "amber",
  },
  {
    id: "medcom",
    title: "MedCom & Research Agencies",
    subtitle: "A dependable, white-label research and scientific execution partner",
    features: [
  "Medical communication agencies",
  "Research consultancies",
  "Overflow & capacity needs",
  "Medical Writing",
  "Scientific Publications",
  "Data Analysis",
  "Conference Papers",
  "Poster Development",
  "White-Label Support",
],
    bgColor: "from-white to-blue-50",
    textColor: "text-charcoal",
    link: "/medcom-research-agencies",
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3080d8c-9772-448e-90c5-656be01b7b75-cactusglobal-com/assets/icons/publishers_icon-3.png",
    accentColor: "purple",
  },
];

const IndustryCardsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const currentCard = cards[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="container max-w-[1240px] mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.1)",
                "0 0 40px rgba(59, 130, 246, 0.3)",
                "0 0 20px rgba(59, 130, 246, 0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-semibold text-sm">WHO WE SERVE</span>
          </motion.div>
          
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
            Research for Everyone
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tailored research solutions for every stage of your journey
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-16 md:px-20 lg:px-24 xl:px-28">
          {/* Navigation Arrows - Outside the card */}
          <button
            onClick={handlePrev}
            className="absolute -left-1 sm:-left-2 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 group shadow-xl"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white group-hover:text-blue-300 transition-colors" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-1 sm:-right-2 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300 hover:scale-110 group shadow-xl"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white group-hover:text-blue-300 transition-colors" />
          </button>

          {/* Card Carousel */}
          <div className="relative h-[550px] sm:h-[580px] overflow-visible pt-8 sm:pt-12">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative group w-full h-full flex items-center">
                 
                  {/* Glassmorphism Card - Fixed Height */}
                  <div className="relative w-full h-full bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-white/20 overflow-visible shadow-2xl">
                    {/* Animated gradient overlay for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 pointer-events-none rounded-3xl" />
                    
                    {/* Animated corner decoration */}
                    <motion.div
                      className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${
                        currentCard.accentColor === 'blue' ? 'from-blue-400/20' :
                        currentCard.accentColor === 'blue' ? 'from-blue-400/20' :
                        currentCard.accentColor === 'blue' ? 'from-blue-400/20' :
                        'from-blue-400/20'
                      } to-transparent rounded-bl-[200px] rounded-tr-3xl`}
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                    />

                    {/* Icon - Positioned slightly left of center */}
                    <motion.div 
                      className="absolute -top-12 left-1/2 -translate-x-1/2 -ml-32 sm:-ml-40 md:-ml-16 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 shadow-2xl border border-white/30 z-10"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    >
                      <img
                        src={currentCard.iconUrl}
                        alt={currentCard.title}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                      />
                    </motion.div>

                    {/* Content Container - Fixed structure */}
                    <div className="relative z-10 h-full flex flex-col pt-6 sm:pt-8">
                      {/* Title - Fixed height */}
                      <h3 className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight text-center ${
                        currentCard.accentColor === 'blue' ? 'text-blue-100' :
                        currentCard.accentColor === 'blue' ? 'text-blue-100' :
                        currentCard.accentColor === 'blue' ? 'text-blue-100' :
                        'text-blue-100'
                      } drop-shadow-lg min-h-[3rem] flex items-center justify-center`}>
                        {currentCard.title}
                      </h3>

                      {/* Subtitle - Fixed height */}
                      <p className="font-body text-sm sm:text-base md:text-lg font-semibold mb-5 sm:mb-6 text-center text-white/90 drop-shadow-md max-w-4xl mx-auto min-h-[3rem] flex items-center justify-center px-4">
                        {currentCard.subtitle}
                      </p>

                      {/* Features - Fixed height with scroll if needed */}
                      <div className="font-body text-sm sm:text-base leading-relaxed mb-5 text-white/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 w-full flex-grow overflow-y-auto max-h-[240px] px-2">
                        {currentCard.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/20 hover:bg-white/20 transition-all h-fit"
                          >
                            <span className={`${
                              currentCard.accentColor === 'blue' ? 'text-blue-300' :
                              currentCard.accentColor === 'blue' ? 'text-blue-300' :
                              currentCard.accentColor === 'blue' ? 'text-blue-300' :
                              'text-blue-300'
                            } font-bold text-lg flex-shrink-0`}>✔</span>
                            <span className="text-white font-medium drop-shadow text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Button - Always at bottom */}
                      <div className="flex justify-center mt-auto pt-4">
                        <Link
                          to={currentCard.link}
                          className={`relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-base ${
                            currentCard.accentColor === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                            currentCard.accentColor === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                            currentCard.accentColor === 'blue' ? 'bg-blue-500 hover:bg-blue-600' :
                            'bg-blue-500 hover:bg-purple-600'
                          } text-white transition-all duration-300 group/btn overflow-hidden shadow-2xl border-2 border-white/30`}
                        >
                          <span className="relative z-10">Learn more</span>
                          <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                          
                          {/* Button shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8 sm:mt-10">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-12 bg-white shadow-lg' 
                    : 'w-3 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryCardsSection;

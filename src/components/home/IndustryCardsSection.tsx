import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    subtitle: "Evidence generation and research execution for regulated, impact-driven domains",
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
    link: "/healthcare-life-sciences",
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

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="relative group h-full"
            >
              {/* Glow effect on hover */}
              <motion.div
                className={`absolute -inset-0.5 bg-gradient-to-r ${
                  card.accentColor === 'blue' ? 'from-blue-500 to-cyan-500' :
                  card.accentColor === 'cyan' ? 'from-cyan-500 to-blue-500' :
                  card.accentColor === 'amber' ? 'from-amber-500 to-orange-500' :
                  'from-purple-500 to-pink-500'
                } rounded-[22px] opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500`}
              />
              
              <div className={`relative bg-gradient-to-br ${card.bgColor} rounded-[20px] p-8 flex flex-col h-full border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 overflow-hidden`}>
                {/* Animated corner decoration */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-bl-[100px]"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />

                {/* Icon with enhanced animation */}
                <motion.div 
                  className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-3 mb-6 flex items-center justify-center w-16 h-16 shadow-lg relative z-10"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <img
                      src={card.iconUrl}
                      alt={card.title}
                      className="w-9 h-9 object-contain"
                    />
                  </motion.div>
                </motion.div>

                {/* Title with gradient on hover */}
                <h3 className={`font-display text-[22px] font-bold mb-4 leading-tight ${card.textColor} group-hover:bg-gradient-to-r ${
                  card.accentColor === 'blue' ? 'group-hover:from-blue-600 group-hover:to-cyan-600' :
                  card.accentColor === 'cyan' ? 'group-hover:from-cyan-600 group-hover:to-blue-600' :
                  card.accentColor === 'amber' ? 'group-hover:from-amber-600 group-hover:to-orange-600' :
                  'group-hover:from-purple-600 group-hover:to-pink-600'
                } group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {card.title}
                </h3>

                {/* Subtitle */}
                <p className={`font-body text-sm font-semibold mb-5 ${card.textColor} opacity-80`}>
                  {card.subtitle}
                </p>

                {/* Features with stagger animation - flex-grow to push button down */}
                <div className={`font-body text-sm leading-[1.9] mb-6 flex-grow ${card.textColor} opacity-75`}>
                  {card.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-start gap-2 mb-1"
                    >
                      <span className={`${card.accentColor === 'blue' ? 'text-blue-500' :
                        card.accentColor === 'cyan' ? 'text-cyan-500' :
                        card.accentColor === 'amber' ? 'text-amber-500' :
                        'text-purple-500'} font-bold`}>✔</span>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Button - always at bottom */}
                <Link
                  to={card.link}
                  className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all duration-300 group/btn overflow-hidden mt-auto"
                >
                  <span className="relative z-10">Learn more</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCardsSection;

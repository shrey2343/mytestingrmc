import { useState } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "research",
    title: "Research for Everyone",
    subtitle:
      "Supporting doctoral research, institutional R&D, and funded academic projects",
    services: [
      "Topic selection & research problem identification",
      "Research proposal & synopsis development",
      "Research design & methodology (quantitative, qualitative, mixed methods)",
      "Systematic literature reviews & evidence synthesis",
      "Data collection guidance & research planning",
      "Statistical analysis (SPSS, R, Python, SEM, regression)",
      "Qualitative & thematic analysis",
      "Experimental design, research coding & result interpretation",
      "Dissertation & thesis writing support",
      "Proofreading, academic editing & plagiarism checks",
      "Research paper writing & publication support",
      "Journal-aligned manuscripts & submission assistance",
      "Defence preparation & mock vivas",
      "Poster presentations & defence-ready presentations",
    ],
  },
  {
    id: "startups",
    title: "Startups & Enterprises",
    subtitle:
      "Validating ideas, strengthening funding stories, and building research-backed credibility",
    services: [
      "Market research & competitive analysis",
      "Idea validation & feasibility studies",
      "Pitch deck & investor materials",
      "Data analytics & business insights",
      "Go-to-market strategy research",
      "Growth research & optimization",
      "Due diligence support",
      "Industry & competitive intelligence",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare & Life Sciences",
    subtitle:
      "Evidence generation and research execution for regulated, impact-driven domains",
    services: [
      "Clinical research support",
      "Real-world evidence studies",
      "Medical writing & publications",
      "Health economics & outcomes research",
      "Systematic reviews & meta-analysis",
      "Regulatory affairs support",
      "Biostatistics & data analytics",
      "Medical affairs & MSL support",
    ],
  },
  {
    id: "medcom",
    title: "MedCom & Research Agencies",
    subtitle:
      "A dependable, white-label research and scientific execution partner",
    services: [
      "White-label medical writing",
      "Systematic reviews & meta-analysis",
      "Literature search & review",
      "Data analysis & biostatistics",
      "Research protocol development",
      "Overflow & capacity support",
      "Quality assurance & review",
      "Ongoing partnership models",
    ],
  },
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-14">
          {/* LEFT – CATEGORY TABS */}
          <div className="lg:w-1/3 space-y-4">
            {categories.map((category) => {
              const isActive = activeCategory.id === category.id;

              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveCategory(category)}
                  className={`relative w-full text-left p-6 rounded-2xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-white shadow-xl"
                      : "bg-transparent hover:bg-white/60"
                  }`}
                >
                  {/* animated blue border */}
                  {isActive && (
                    <motion.span
                      layoutId="activeBlueBorder"
                      className="absolute inset-0 rounded-2xl border-2 border-blue-600/60 pointer-events-none"
                    />
                  )}

                  <h3
                    className={`font-display text-xl font-extrabold tracking-tight ${
                      isActive ? "text-blue-700" : "text-blue-600"
                    }`}
                  >
                    {category.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                    {category.subtitle}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT – SERVICES */}
          <div className="lg:w-2/3">
            <div className="relative bg-white p-8 md:p-8 rounded-3xl shadow-2xl overflow-hidden">
              {/* subtle animated border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border border-blue-600/20"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10"
                >
                  <div className="mb-10">
                    <h2 className="font-display text-4xl font-extrabold text-blue-800 mb-4">
                      {activeCategory.title}
                    </h2>
                    <p className="font-body text-blue-600 font-semibold">
                      {activeCategory.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                    {activeCategory.services.map((service, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full border border-blue-600 group-hover:bg-blue-600 transition">
                          <Check className="w-3 h-3 text-blue-600 group-hover:text-white" />
                        </div>

                        <span className="text-[15px] leading-relaxed text-slate-700 group-hover:text-blue-800 transition">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

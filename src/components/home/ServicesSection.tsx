import { useState } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "research",
    title: "Research for Everyone",
    subtitle: "Supporting doctoral research, institutional R&D, and funded academic projects",
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
    subtitle: "Validating ideas, strengthening funding stories, and building research-backed credibility",
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
    subtitle: "Evidence generation and research execution for regulated, impact-driven domains",
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
    subtitle: "A dependable, white-label research and scientific execution partner",
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
    <section className="py-20 bg-secondary">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Category Tabs */}
          <div className="lg:w-1/3 space-y-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border-2 ${
                  activeCategory.id === category.id
                    ? "bg-background border-primary shadow-lg"
                    : "bg-transparent border-transparent hover:bg-background/50"
                }`}
              >
                <h3
                  className={`font-display text-xl font-bold ${
                    activeCategory.id === category.id ? "text-primary" : "text-foreground"
                  }`}
                >
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {category.subtitle}
                </p>
              </button>
            ))}
          </div>

          {/* Right - Services List */}
          <div className="lg:w-2/3 bg-background p-8 md:p-12 rounded-2xl shadow-xl min-h-[600px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {activeCategory.title}
                  </h2>
                  <p className="font-body text-primary font-medium">
                    {activeCategory.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {activeCategory.services.map((service, index) => (
                    <div key={index} className="check-item group">
                      <div className="check-icon group-hover:bg-primary transition-colors">
                        <Check className="w-3 h-3 text-primary group-hover:text-background" />
                      </div>
                      <span className="text-[15px] leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
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
    </section>
  );
};

export default ServicesSection;

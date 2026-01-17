import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    ],
    bgColor: "bg-card-beige",
    textColor: "text-foreground",
    link: "/research-for-everyone",
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3080d8c-9772-448e-90c5-656be01b7b75-cactusglobal-com/assets/icons/universities_icon-4.png",
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
    ],
    bgColor: "bg-card-slate",
    textColor: "text-background",
    link: "/startups-enterprises",
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3080d8c-9772-448e-90c5-656be01b7b75-cactusglobal-com/assets/icons/corporate_icon-6.png",
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
    ],
    bgColor: "bg-card-sage",
    textColor: "text-background",
    link: "/healthcare-life-sciences",
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3080d8c-9772-448e-90c5-656be01b7b75-cactusglobal-com/assets/icons/government_icon-5.png",
  },
  {
    id: "medcom",
    title: "MedCom & Research Agencies",
    subtitle: "A dependable, white-label research and scientific execution partner",
    features: [
      "Medical communication agencies",
      "Research consultancies",
      "Overflow & capacity needs",
    ],
    bgColor: "bg-card-teal",
    textColor: "text-background",
    link: "/medcom-research-agencies",
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3080d8c-9772-448e-90c5-656be01b7b75-cactusglobal-com/assets/icons/publishers_icon-3.png",
  },
];

const IndustryCardsSection = () => {
  return (
    <section className="bg-foreground py-24 px-6">
      <div className="container max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-background mb-4">
            Research for Everyone
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${card.bgColor} rounded-[20px] p-9 flex flex-col items-start min-h-[520px] transition-transform duration-300 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className="bg-background rounded-xl p-3 mb-6 flex items-center justify-center w-14 h-14 shadow-md">
                <img
                  src={card.iconUrl}
                  alt={card.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className={`font-display text-[22px] font-bold mb-4 leading-tight ${card.textColor}`}>
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className={`font-body text-sm font-semibold mb-4 ${card.textColor} ${card.id !== "research" ? "opacity-90" : ""}`}>
                {card.subtitle}
              </p>

              {/* Features */}
              <div className={`font-body text-sm leading-[1.8] mb-auto pb-8 whitespace-pre-line ${card.textColor} ${card.id !== "research" ? "opacity-80" : ""}`}>
                {card.features.map((feature, i) => (
                  <span key={i}>✔ {feature}{i < card.features.length - 1 ? "\n" : ""}</span>
                ))}
              </div>

              {/* Button */}
              <Link
                to={card.link}
                className="btn-pill-black"
              >
                Learn more
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCardsSection;

import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryWhyUs from "@/components/industry/IndustryWhyUs";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const therapeuticAreas = [
  "Oncology", "Cardiology", "Neurology", "Immunology", "Diabetes",
  "Respiratory", "Rare Diseases", "Infectious Diseases", "Dermatology", "Ophthalmology"
];

const HealthcareLifeSciencesPage = () => {
  const heroData = {
    badge: "Healthcare & Life Sciences",
    badgeIcon: <Heart className="w-4 h-4" />,
    titleWhite: "Evidence-Driven",
    titleRed: "Healthcare Research",
    subtitle: "Evidence generation and research execution for regulated, impact-driven domains. Supporting pharma, medtech, and life sciences with scientific excellence.",
    tags: ["Pharma", "MedTech", "Digital Health", "Life Sciences Firms", "CROs", "Biotech"],
    primaryCta: "Get Started",
    secondaryCta: "Our Services",
    stats: [
      { value: "1000+", label: "Studies Completed" },
      { value: "200+", label: "Pharma Clients" },
      { value: "50+", label: "Therapeutic Areas" },
      { value: "100%", label: "Compliance Rate" },
    ],
  };

  const services = [
    {
      title: "Clinical Research Support",
      description: "End-to-end clinical trial documentation, protocol development, and regulatory submissions.",
    },
    {
      title: "Real-World Evidence Studies",
      description: "Generate compelling real-world data to support product value and market access strategies.",
    },
    {
      title: "Medical Writing & Publications",
      description: "Publication-ready manuscripts, abstracts, posters, and medical communication materials.",
    },
    {
      title: "Health Economics & Outcomes",
      description: "HEOR studies, budget impact models, and cost-effectiveness analyses for market access.",
    },
    {
      title: "Systematic Reviews & Meta-Analysis",
      description: "Rigorous evidence synthesis following PRISMA guidelines and Cochrane standards.",
    },
    {
      title: "Regulatory Affairs Support",
      description: "Regulatory strategy, dossier preparation, and compliance documentation.",
    },
    {
      title: "Biostatistics & Data Analytics",
      description: "Advanced statistical analysis, study design consultation, and data interpretation.",
    },
    {
      title: "Medical Affairs & MSL Support",
      description: "Scientific content, training materials, and medical information support.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Scientific Assessment",
      description: "We evaluate your research needs and design the optimal approach for your objectives.",
    },
    {
      number: 2,
      title: "Protocol Development",
      description: "Our experts develop robust protocols aligned with regulatory and scientific standards.",
    },
    {
      number: 3,
      title: "Execution & Analysis",
      description: "Rigorous data collection, analysis, and quality assurance at every step.",
    },
    {
      number: 4,
      title: "Deliverables & Support",
      description: "Comprehensive reports, publications, and ongoing scientific support.",
    },
  ];

  const benefits = [
    "Ph. D.-level medical writers and scientists",
    "ICMJE and GPP3 compliant deliverables",
    "Experience with 50+ therapeutic areas",
    "Regulatory submission expertise (FDA, EMA, PMDA)",
    "Rapid turnaround without quality compromise",
    "Dedicated project management",
  ];

  const testimonials = [
    {
      quote: "RMC's medical writing team delivered exceptional quality manuscripts that were accepted in top-tier journals. Their understanding of regulatory requirements is impeccable.",
      author: "Dr. Meera Kapoor",
      role: "VP Medical Affairs, Leading Pharma",
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      <IndustryServices
        sectionLabel="Our Expertise"
        title="Scientific Research Services"
        subtitle="Comprehensive research and evidence generation services designed for the unique needs of healthcare and life sciences organizations."
        services={services}
      />

      {/* Therapeutic Areas Section */}
      <section className="py-24 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Therapeutic Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Deep Domain Knowledge Across Therapeutic Areas
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our team of medical writers, biostatisticians, and research specialists bring expertise across multiple therapeutic areas, ensuring scientifically accurate and clinically relevant deliverables.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {therapeuticAreas.map((area, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground shadow-sm"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <IndustryProcess
        sectionLabel="Our Process"
        title="Scientific Rigor at Every Step"
        subtitle="A structured approach that ensures quality, compliance, and scientific integrity throughout the research lifecycle."
        steps={processSteps}
      />
      <IndustryWhyUs
        sectionLabel="Why Healthcare Leaders Choose Us"
        title="Scientific Excellence"
        subtitle="Partner with a team that understands the unique demands of healthcare research."
        benefits={benefits}
      />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="Trusted by Healthcare Leaders"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Ready to Elevate Your Research?"
        subtitle="Partner with us for evidence generation that meets the highest scientific and regulatory standards."
      />
    </Layout>
  );
};

export default HealthcareLifeSciencesPage;

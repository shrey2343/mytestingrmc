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
    titleWhite: "Scientific Research",
    titleRed: "Services",
    subtitle: "We collaborate with healthcare, life sciences, and medical communication teams to transform data, studies, and insights into high-quality scientific publications, medical content, and global conference outputs — without overclaiming or regulatory risk.",
    tags: ["Healthcare Organizations", "Life Sciences Companies", "Medical Communication Teams", "Research Groups", "Scientific Consultancies"],
    primaryCta: " Book a Discussion",
    secondaryCta: "Our Services",
    stats: [
      { value: "1000+", label: "Studies Completed" },
      { value: "200+", label: "Healthcare Clients" },
      { value: "50+", label: "Therapeutic Areas" },
      { value: "100%", label: "Compliance Rate" },
    ],
  };

  const services = [
    {
      title: "Scientific Publications & Medical Writing",
      description: "Develop scientific manuscripts and research papers. Provide medical writing support aligned with your study or data. Structure content for journals and scientific platforms. Ensure clarity, consistency, and scientific rigor.",
      benefits: [
        "Communicate scientific findings with clarity and accuracy",
        "Strengthen credibility with academic, industry, and clinical audiences",
        "Support thought leadership through peer-aligned publications",
        "Maintain ethical and scientific communication standards"
      ]
    },
    {
      title: "Research Communication & White Papers",
      description: "Create white papers and scientific reports. Develop technical and research communication documents. Align content with scientific and industry expectations. Support ethical and transparent research communication.",
      benefits: [
        "Translate complex scientific information into structured narratives",
        "Support partnerships, internal alignment, and external communication",
        "Build evidence-based documentation without regulatory claims",
        "Strengthen scientific positioning"
      ]
    },
    {
      title: "Data Analysis & Research Support",
      description: "Perform limited quantitative data analysis. Support interpretation of research findings. Prepare data summaries for publications and presentations. Align analysis with scientific writing outputs.",
      benefits: [
        "Derive meaningful insights from existing datasets",
        "Support publications and reports with structured analysis",
        "Improve interpretation and presentation of results",
        "Reduce ambiguity in scientific communication"
      ]
    },
    {
      title: "Conferences, Posters & Scientific Presentations",
      description: "Prepare conference papers and abstracts. Develop poster and presentation content. Format materials to conference guidelines. Support scientific storytelling for presentations.",
      benefits: [
        "Share research on international scientific platforms",
        "Enhance visibility within healthcare and life sciences communities",
        "Support professional and organizational credibility",
        "Communicate findings clearly to expert audiences"
      ]
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
    "Scientific writing and publication expertise",
    "Ethical, non-clinical positioning",
    "Experience with global conferences and journals",
    "Clear separation from clinical trial execution",
    "Confidential and white-label friendly support",
    "Ph.D.-level medical writers and scientists",
  ];

  const testimonials = [
    {
      quote: "RMC's medical writing team delivered exceptional quality manuscripts that were accepted in top-tier journals. Their understanding of regulatory requirements is impeccable.",
      author: "Dr. Sarah Johnson",
      role: "VP Medical Affairs, BioPharma Inc., Boston",
    },
    {
      quote: "The scientific rigor and attention to detail in RMC's publications helped us secure FDA approval faster than expected. Outstanding partnership.",
      author: "Dr. Michael Chen",
      role: "Chief Scientific Officer, MedTech Solutions, San Francisco",
    },
    {
      quote: "Working with RMC transformed our research communication strategy. Their expertise in life sciences is unmatched in the industry.",
      author: "Dr. Emily Rodriguez",
      role: "Director of Research, LifeSciences Corp., New York",
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      <IndustryServices
        sectionLabel="Our Expertise"
        title="Scientific Research Services"
        subtitle="We collaborate with healthcare, life sciences, and medical communication teams to transform data, studies, and insights into high-quality scientific publications, medical content, and global conference outputs — without overclaiming or regulatory risk."
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
        sectionLabel="Why RMC"
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

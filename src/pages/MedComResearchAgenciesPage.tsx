import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryWhyUs from "@/components/industry/IndustryWhyUs";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import { Handshake, Shield, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const whyPartnerFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Complete Confidentiality",
    description: "Strict NDAs and data security protocols protect your client relationships.",
  },
  {
    icon: <Handshake className="w-6 h-6 text-primary" />,
    title: "True White-Label",
    description: "All work delivered in your templates with zero RMC branding.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Rapid Turnaround",
    description: "48-hour express delivery available for urgent projects.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Flexible Engagement",
    description: "Project-based or retainer models to suit your business needs.",
  },
];

const MedComResearchAgenciesPage = () => {
  const heroData = {
    badge: "For MedCom & Research Agencies",
    badgeIcon: <Handshake className="w-4 h-4" />,
    titleWhite: "Your White-Label",
    titleRed: "Research Partner",
    subtitle: "A dependable, white-label research and scientific execution partner. Expand your capabilities without expanding your team.",
    tags: ["Medical Communication Agencies", "Research Consultancies", "Scientific Writing Firms", "Healthcare PR Agencies"],
    primaryCta: "Partner With Us",
    secondaryCta: "Our Services",
    stats: [
      { value: "50+", label: "Agency Partners" },
      { value: "100%", label: "White-Label" },
      { value: "48hr", label: "Quick Turnaround" },
      { value: "NDA", label: "Full Confidentiality" },
    ],
  };

  const services = [
    {
      title: "Medical Writing Services",
      description: "White-label medical writing for manuscripts, abstracts, posters, and regulatory documents.",
    },
    {
      title: "Systematic Reviews & Meta-Analysis",
      description: "Rigorous evidence synthesis delivered under your agency's brand with full confidentiality.",
    },
    {
      title: "Literature Search & Review",
      description: "Comprehensive literature searches across databases with detailed evidence tables.",
    },
    {
      title: "Data Analysis & Biostatistics",
      description: "Statistical analysis support for clinical and real-world studies.",
    },
    {
      title: "Research Protocol Development",
      description: "Custom research protocols aligned with regulatory and publication standards.",
    },
    {
      title: "Overflow & Capacity Support",
      description: "Flexible capacity augmentation during peak periods without hiring overhead.",
    },
    {
      title: "Quality Assurance & Review",
      description: "Independent QA review of scientific content ensuring accuracy and compliance.",
    },
    {
      title: "Ongoing Partnership Models",
      description: "Retainer-based partnerships for consistent, reliable research support.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Brief & Scope",
      description: "Share your project requirements, timelines, and specific deliverable formats.",
    },
    {
      number: 2,
      title: "Team Assignment",
      description: "We assign dedicated experts matched to your project's therapeutic area and needs.",
    },
    {
      number: 3,
      title: "Execution & QC",
      description: "Work executed with rigorous quality checks at every milestone.",
    },
    {
      number: 4,
      title: "White-Label Delivery",
      description: "Deliverables provided in your templates, ready for client presentation.",
    },
  ];

  const benefits = [
    "No hiring overhead or training costs",
    "Access to 200+ subject matter experts",
    "Scalable capacity for any project size",
    "Consistent quality under strict SOPs",
    "Dedicated account management",
    "Flexible pricing models",
  ];

  const testimonials = [
    {
      quote: "RMC has been our go-to partner for overflow work. Their quality is indistinguishable from our in-house team, and they always meet our tight deadlines.",
      author: "Managing Director",
      role: "Leading MedCom Agency, Mumbai",
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />

      {/* Why Partner Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Why Partner With Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Agency Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand agency dynamics – tight deadlines, demanding clients, and the need for impeccable quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPartnerFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IndustryServices
        sectionLabel="Our Services"
        title="White-Label Research Solutions"
        subtitle="Comprehensive research services delivered under your brand with complete confidentiality."
        services={services}
      />
      <IndustryProcess
        sectionLabel="How It Works"
        title="Seamless Partnership Process"
        subtitle="A streamlined workflow designed to integrate seamlessly with your agency operations."
        steps={processSteps}
      />
      <IndustryWhyUs
        sectionLabel="Partnership Benefits"
        title="Scale Without Limits"
        subtitle="Focus on client relationships and business growth while we handle the research execution. Our white-label model ensures your brand stays front and center."
        benefits={benefits}
        ctaText="Become a Partner"
      />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="Trusted by Leading Agencies"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Ready to Scale Your Agency?"
        subtitle="Join 50+ agencies who trust us as their white-label research partner."
      />
    </Layout>
  );
};

export default MedComResearchAgenciesPage;

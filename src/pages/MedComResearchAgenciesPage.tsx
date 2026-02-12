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
    badge: "MedCom & Research Agencies",
    badgeIcon: <Handshake className="w-4 h-4" />,
    titleWhite: "Your White-Label Scientific &",
    titleRed: "Research Execution Partner",
    subtitle: "Medical communication agencies operate in a high-trust, high-precision environment. Timelines are tight. Accuracy is non-negotiable. Confidentiality is critical. RMC partners with MedCom and research agencies as a reliable, white-label scientific execution partner, supporting your teams with publication-ready content, medical writing, data analysis, and conference materials — seamlessly and discreetly.",
    tags: ["Medical Communication Agencies", "Scientific Consultancies", "Research Agencies", "Healthcare Communication Firms", "Teams with Overflow Needs"],
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
      title: "Scientific Writing & Publications Support",
      description: "Medical and scientific writing support. Research papers and publication-ready manuscripts. Journal-aligned formatting and structuring. Ethical, accurate, and reviewer-ready content.",
      benefits: [
        "Scale delivery without expanding internal teams",
        "Maintain scientific accuracy and consistency",
        "Meet client and publication timelines confidently",
        "Deliver high-quality outputs under your brand"
      ]
    },
    {
      title: "Research Communication & White Papers",
      description: "White papers and scientific reports. Research summaries and technical documents. Insight-driven content aligned with client goals. Consistent tone, structure, and accuracy.",
      benefits: [
        "Translate complex science into clear narratives",
        "Support client communication and positioning",
        "Deliver structured, evidence-aligned documentation",
        "Maintain scientific credibility across materials"
      ]
    },
    {
      title: "Data Analysis & Scientific Support",
      description: "Limited quantitative data analysis. Support for result interpretation. Data summaries for publications and presentations. Alignment between data and written outputs.",
      benefits: [
        "Strengthen publications and reports with analysis",
        "Improve interpretation and presentation of results",
        "Reduce internal analytical workload",
        "Support evidence-based communication"
      ]
    },
    {
      title: "Conferences, Posters & Scientific Presentations",
      description: "Conference papers and abstracts. Poster and presentation development. Scientific storytelling for expert audiences. Formatting aligned with conference guidelines.",
      benefits: [
        "Deliver high-quality conference materials to clients",
        "Meet international submission standards",
        "Support agency credibility on global platforms",
        "Reduce last-minute delivery pressure"
      ]
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Share Your Requirements",
      description: "You share scope, timelines, formats, and expectations. We understand your therapeutic area, audience, and delivery needs.",
    },
    {
      number: 2,
      title: "Scope Alignment & Planning",
      description: "We align on deliverables, timelines, and confidentiality requirements. Execution is planned to integrate seamlessly with your workflows.",
    },
    {
      number: 3,
      title: "White-Label Execution",
      description: "Our experts deliver scientific outputs under your brand. Accuracy, consistency, and discretion are maintained throughout.",
    },
    {
      number: 4,
      title: "Review, Delivery & Ongoing Support",
      description: "We incorporate feedback and deliver submission-ready materials. Ongoing support is available for revisions and extended capacity needs.",
    },
  ];

  const benefits = [
    "White-label friendly execution",
    "Confidential and non-competitive partnership",
    "Scientific and publication expertise",
    "Flexible capacity support",
    "Global journal and conference experience",
    "No hiring overhead or training costs",
  ];

  const testimonials = [
    {
      quote: "RMC has been our go-to partner for overflow work. Their quality is indistinguishable from our in-house team, and they always meet our tight deadlines.",
      author: "Robert Anderson",
      role: "Managing Director, MedCom Agency, Philadelphia",
    },
    {
      quote: "The white-label scientific writing support from RMC allowed us to scale our operations without hiring overhead. Exceptional partnership.",
      author: "Jennifer Davis",
      role: "VP Operations, Research Consultancy, Denver",
    },
    {
      quote: "RMC's confidential support helped us deliver complex medical communications on time. Their expertise in regulatory writing is outstanding.",
      author: "Mark Wilson",
      role: "Director, Healthcare Communications, Miami",
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
        sectionLabel="How We Work"
        title="A Reliable, White-Label Scientific Partnership"
        subtitle="A streamlined workflow designed to integrate seamlessly with your agency operations."
        steps={processSteps}
           darkTheme={true}
      />
      <IndustryWhyUs
        sectionLabel="Why Agencies Choose RMC"
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

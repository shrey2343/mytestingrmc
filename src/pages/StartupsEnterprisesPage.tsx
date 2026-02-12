import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryWhyUs from "@/components/industry/IndustryWhyUs";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import { Rocket } from "lucide-react";

const StartupsEnterprisesPage = () => {
  const heroData = {
    badge: "Startups & Enterprises",
    badgeIcon: <Rocket className="w-4 h-4" />,
    titleWhite: "What We Do for",
    titleRed: "Startups & Enterprises",
    subtitle: "We partner with founders, innovation teams, and enterprises to transform ideas, data, and experiments into research-backed outputs that strengthen trust with investors, partners, and global audiences.",
    tags: ["Startup Founders", "Innovation Teams", "Enterprise Strategy Teams", "VC-backed Companies", "Product-led Organizations"],
    primaryCta: " Talk to Our Experts",
    secondaryCta: "Explore Services",
    stats: [
      { value: "500+", label: "Startups Supported" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "50+", label: "Industries Covered" },
      { value: "24/7", label: "Research Support" },
    ],
  };

  const services = [
    {
      title: "Scientific Publications & Research Communication",
      description: "Identify publication-ready topics aligned with your solution. Develop startup-aligned research papers and manuscripts. Create white papers and technical research reports. Support journal- and conference-ready scientific publications.",
      benefits: [
        "Build long-term, research-backed credibility",
        "Strengthen investor, partner, and enterprise trust",
        "Position your innovation as evidence-driven",
        "Create authority beyond pitch decks and demos"
      ]
    },
    {
      title: "Data Analysis & Research Insights",
      description: "Analyze quantitative or mixed datasets. Interpret findings for research and business use. Prepare research-ready results and summaries. Align data insights with publications and presentations.",
      benefits: [
        "Make sense of existing product, pilot, or business data",
        "Support decisions with structured insights",
        "Strengthen research papers, decks, and reports",
        "Move from raw data to clear narratives"
      ]
    },
    {
      title: "Conferences & Global Visibility",
      description: "Prepare conference papers and abstracts. Develop presentations and posters. Support founder and team presentation readiness. Align submissions with relevant international conferences.",
      benefits: [
        "Build thought leadership on global platforms",
        "Gain visibility across academia, industry, and innovation ecosystems",
        "Strengthen credibility with international audiences",
        "Network beyond local markets"
      ]
    },
    {
      title: "Research-Driven MVP Support",
      description: "Use research insights to inform MVP scope. Support hypothesis-driven feature framing. Align MVP outcomes with research and data narratives. Ensure consistency between product, research, and pitch.",
      benefits: [
        "Build MVPs grounded in evidence, not guesswork",
        "Align product features with validated insights",
        "Strengthen product narratives for stakeholders",
        "Reduce iteration risk"
      ]
    },
    {
      title: "Evidence-Backed Pitch Decks",
      description: "Develop research-supported problem–solution narratives. Integrate data and research into pitch decks. Create clear, credible slides for investors and partners. Align decks with publications and conference outputs.",
      benefits: [
        "Build investor confidence through credibility",
        "Differentiate from assumption-led competitors",
        "Tell a clear, research-backed story",
        "Strengthen funding and partnership conversations"
      ]
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Discovery Call",
      description: "We understand your business goals, challenges, and research requirements in detail.",
    },
    {
      number: 2,
      title: "Research Design",
      description: "Our experts design a customized research methodology tailored to your needs.",
    },
    {
      number: 3,
      title: "Data Collection & Analysis",
      description: "We gather data from primary and secondary sources with rigorous quality checks.",
    },
    {
      number: 4,
      title: "Insights & Delivery",
      description: "Receive actionable insights with clear recommendations and strategic guidance.",
    },
  ];

  const benefits = [
    "Research-first mindset",
    "Academic + industry alignment",
    "Global publication and conference experience",
    "Honest, non-overclaiming delivery",
    "Confidential and white-label friendly",
    "Rapid turnaround without compromising quality",
  ];

  const testimonials = [
    {
      quote: "RMC's market research helped us pivot our product strategy and secure our Series A funding. Their insights were invaluable for our growth.",
      author: "James Mitchell",
      role: "Founder & CEO, TechVenture, Austin",
    },
    {
      quote: "The research-backed pitch deck RMC created helped us close a $5M funding round. Their data analysis was spot-on and investor-ready.",
      author: "Lisa Thompson",
      role: "Co-founder, HealthTech Startup, Seattle",
    },
    {
      quote: "RMC's evidence-driven approach transformed our MVP development. We launched with confidence backed by solid research insights.",
      author: "David Park",
      role: "Head of Innovation, Enterprise Solutions, Chicago",
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      <IndustryServices
        sectionLabel=" "
        title="Research Services for Growth"
        subtitle="We partner with founders, innovation teams, and enterprises to transform ideas, data, and experiments into research-backed outputs that strengthen trust with investors, partners, and global audiences."
        services={services}
      />
      <IndustryProcess
        sectionLabel="Our Process"
        title="How We Work"
        subtitle="A streamlined process designed for speed and quality, delivering insights when you need them most."
        steps={processSteps}
          darkTheme={true}
      />
      <IndustryWhyUs
        sectionLabel="Why RMC"
        title="Built for Speed & Scale"
        subtitle="We understand the fast-paced world of startups and enterprise innovation. Our research team combines academic rigor with business acumen to deliver insights that drive decisions."
        benefits={benefits}
        ctaText="Ready to accelerate your growth?"
      />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="What Our Clients Say"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Ready to Transform Your Research?"
        subtitle="Let's discuss how our research expertise can accelerate your growth and innovation goals."
      />
    </Layout>
  );
};

export default StartupsEnterprisesPage;

import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryWhyUs from "@/components/industry/IndustryWhyUs";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import { BarChart } from "lucide-react";

const DataAnalysisPage = () => {
  const heroData = {
    badge: "Data Analysis",
    badgeIcon: <BarChart className="w-4 h-4" />,
    titleWhite: "Professional",
    titleRed: "Data Analysis Services",
    subtitle: "Expert statistical analysis and data interpretation for research, business, and academic projects using advanced tools and techniques.",
    tags: ["SPSS", "R Programming", "Python", "Excel", "AMOS", "Statistical Modeling"],
    primaryCta: "Get Started",
    secondaryCta: "Explore Services",
    stats: [
      { value: "3000+", label: "Projects Completed" },
      { value: "100%", label: "Accuracy Rate" },
      { value: "15+", label: "Tools Expertise" },
      { value: "Fast", label: "Turnaround" },
    ],
  };

  const services = [
    {
      title: "Descriptive Statistics",
      description: "Comprehensive descriptive analysis including mean, median, mode, standard deviation, and frequency distributions.",
    },
    {
      title: "Inferential Statistics",
      description: "Hypothesis testing, t-tests, ANOVA, chi-square tests, and correlation analysis.",
    },
    {
      title: "Regression Analysis",
      description: "Linear, multiple, logistic, and advanced regression modeling with interpretation.",
    },
    {
      title: "Factor Analysis",
      description: "Exploratory and confirmatory factor analysis for scale validation and data reduction.",
    },
    {
      title: "SEM & Path Analysis",
      description: "Structural equation modeling using AMOS, LISREL, and SmartPLS.",
    },
    {
      title: "Qualitative Analysis",
      description: "Thematic analysis, content analysis, and coding using NVivo and MAXQDA.",
    },
    {
      title: "Data Visualization",
      description: "Create impactful charts, graphs, and dashboards using Tableau, Power BI, and Python.",
    },
    {
      title: "Custom Analysis",
      description: "Tailored statistical analysis based on your specific research questions and data.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Data Assessment",
      description: "Review your data, research questions, and analysis requirements.",
    },
    {
      number: 2,
      title: "Analysis Plan",
      description: "Design appropriate statistical methods and create analysis roadmap.",
    },
    {
      number: 3,
      title: "Data Processing",
      description: "Clean, code, and analyze data using advanced statistical software.",
    },
    {
      number: 4,
      title: "Results & Interpretation",
      description: "Deliver comprehensive results with tables, charts, and detailed interpretation.",
    },
  ];

  const benefits = [
    "Expert statisticians with advanced degrees",
    "Proficiency in all major statistical software",
    "Detailed interpretation and reporting",
    "Quick turnaround with quality assurance",
    "Support for revisions and clarifications",
  ];

  const testimonials = [
    {
      quote: "The data analysis team at RMC provided exceptional support. Their expertise in SPSS and interpretation helped me complete my research successfully.",
      author: "Dr. Anjali Mehta",
      role: "Research Scholar, JNU",
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      <IndustryServices
        sectionLabel="What We Offer"
        title="Data Analysis Services"
        subtitle="Comprehensive statistical analysis services to transform your data into meaningful insights."
        services={services}
      />
      <IndustryProcess
        sectionLabel="Our Process"
        title="Analysis Workflow"
        subtitle="A systematic approach to ensure accurate and reliable data analysis results."
        steps={processSteps}
      />
      <IndustryWhyUs
        sectionLabel="Why Choose Us"
        title="Your Data Analysis Partner"
        subtitle="Our team of experienced statisticians and data scientists brings expertise in both academic and applied research, ensuring your data tells the right story."
        benefits={benefits}
        ctaText="Ready to analyze your data?"
      />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="What Our Clients Say"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Need Data Analysis Help?"
        subtitle="Let our experts handle your data analysis needs with precision and expertise."
      />
    </Layout>
  );
};

export default DataAnalysisPage;

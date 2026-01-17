import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase, Globe, Award, Building2 } from "lucide-react";

const WhoIsThisFor = () => {
  const audiences = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "High School Students (Ivy League & Top University Aspirants)",
      why: "Top universities don't just look at grades — they look for intellectual curiosity, research exposure, and academic initiative.",
      benefits: [
        "Strengthen Ivy League and top-tier college applications",
        "Demonstrate early research capability",
        "Differentiate you from thousands of applicants",
        "Show commitment to academic excellence",
      ],
      help: [
        "Research topic guidance aligned with your interests",
        "Structured research paper writing support",
        "Ethical mentoring and academic guidance",
        "Age-appropriate, university-safe research publication support",
      ],
      note: "A publication doesn't guarantee admission — but it makes your profile stand out.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Undergraduate, Master's & PhD Students",
      why: "Publications are a career accelerator in academia and research-driven industries.",
      benefits: [
        "Strengthen academic and research profiles",
        "Improve chances of higher education, fellowships, and funding",
        "Meet degree or program publication requirements",
        "Build confidence and subject-matter authority",
      ],
      help: [
        "Manuscript writing and structuring",
        "Journal selection and formatting",
        "Data interpretation and results writing",
        "Reviewer response and revision support",
      ],
      note: "Publishing is not optional anymore — it's a competitive necessity.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "University Professors & Academic Faculty",
      why: "In academia, career growth depends on continuous publishing.",
      benefits: [
        "Promotions and career advancement",
        "Grant eligibility and research funding",
        "Academic reputation and citation impact",
        "Institutional performance metrics",
      ],
      help: [
        "Manuscript drafting and editing support",
        "Review articles and research papers",
        "Journal strategy and submission readiness",
        "Time-efficient publication support for busy faculty",
      ],
      note: "Titles alone do not build authority — consistent publications do.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "PhD Holders & Independent Researchers",
      why: "A doctoral degree gives you credentials — publications give you authority.",
      benefits: [
        "Establish thought leadership",
        "Strengthen professional credibility",
        "Build influence beyond the 'Dr.' title",
        "Remain active and relevant in your field",
      ],
      help: [
        "Transform existing research into publishable papers",
        "Update and refine previous work",
        "Support independent or collaborative publications",
        "Maintain ethical and academic standards",
      ],
      note: "Authority is earned through contribution, not just qualification.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Startups, Corporates & Enterprises",
      why: "Research publications build trust, credibility, and market authority.",
      benefits: [
        "Establish scientific and technical credibility",
        "Support product validation and innovation claims",
        "Strengthen investor, partner, and stakeholder confidence",
        "Enhance brand positioning through evidence-based research",
      ],
      help: [
        "Research and technical publication writing",
        "Industry-aligned and journal-ready manuscripts",
        "Ethical scientific communication",
        "Publication strategy aligned with business goals",
      ],
      note: "In a data-driven world, published evidence builds trust.",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "EB-1 & Global Profile Builders",
      why: "For extraordinary ability profiles, a strong publication record matters.",
      benefits: [
        "Subject-matter expertise",
        "Original contributions to your field",
        "Professional recognition and impact",
        "Portfolio strength for global opportunities",
      ],
      help: [
        "Publication portfolio development",
        "Ethical research and writing support",
        "Structured and documented academic output",
        "Compliance with publication standards",
      ],
      note: "Publications strengthen professional narratives — when done ethically.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Who Is This For
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Publishing Matters
          </h2>
        </div>

        <div className="space-y-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/30 rounded-2xl p-8 border border-border"
            >
              <div className="flex items-start gap-4 mb-6">
                {audience.icon}
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground italic">{audience.why}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Publishing helps you:</h4>
                  <ul className="space-y-2">
                    {audience.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">How we help:</h4>
                  <ul className="space-y-2">
                    {audience.help.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-lg inline-block">
                📌 {audience.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;

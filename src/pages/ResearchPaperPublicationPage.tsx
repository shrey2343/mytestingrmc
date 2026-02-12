import Layout from "@/components/layout/Layout";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import WhoIsThisFor from "@/components/publication/WhoIsThisFor";

const ResearchPaperPublicationPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-foreground hero-gradient">
        <div className="container-custom relative z-10 w-full py-20">
          <motion.div
            className="text-center text-background max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 border border-background/20 mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-sm text-background/90">Research Paper Publication</span>
            </div>

            <h1 className="font-display font-bold text-[40px] md:text-[56px] leading-[1.1] mb-6 text-shadow">
              Publish with Purpose.
              <span className="block text-primary">Build Credibility. Unlock Opportunities.</span>
            </h1>

            <p className="font-body text-lg md:text-xl leading-relaxed text-background/90 mb-8">
              Publishing a research paper is no longer limited to academia alone.
              Today, research publications create opportunities — for students, scholars, professors, professionals, startups, and global organizations.
            </p>

            <p className="font-body text-base md:text-lg leading-relaxed text-background/80 mb-10">
              Our Research Paper Publication Services are designed to support diverse stakeholders at different stages of their academic or professional journey, helping them build credibility, visibility, and long-term impact through ethical, high-quality scientific publications.
            </p>

            <a
              href="#quote-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
               Talk to Our Experts
            </a>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <WhoIsThisFor />

      {/*   Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
               
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              End-to-End Publication Support
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Research paper writing & structuring",
              "Literature review & referencing",
              "Journal selection & formatting",
              "Submission & revision support",
              "Ethical and guideline-compliant assistance",
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl border border-border"
              >
                <p className="text-foreground font-medium">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Commitment to Ethics & Integrity
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>All services are provided as research writing, editorial support, and academic assistance.</p>
              <p>We strictly follow publication ethics, journal standards, and academic integrity guidelines.</p>
              <p className="font-semibold text-foreground">Final authorship, responsibility, and ownership always remain with the client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Publish with Confidence. Publish with Purpose.
          </h2>
          <p className="text-lg text-background/80 mb-8 max-w-3xl mx-auto">
            Whether you are a student, professor, researcher, professional, or organization, we help you turn ideas and data into credible, peer-review-ready research publications.
          </p>
          <a
            href="https://calendly.com/researchstrategycall/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ResearchPaperPublicationPage;

import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import { Dna } from "lucide-react";
import { motion } from "framer-motion";

const BiosciencesPage = () => {
  const heroData = {
    badge: "Biosciences & Bioinformatics",
    badgeIcon: <Dna className="w-4 h-4" />,
    titleWhite: "We Turn Complex Biological Data Into",
    titleRed: "Publishable, Defensible & Commercially Valuable Insights",
    subtitle: "Advanced Genomics | Clinical Data Modeling | Microbial Informatics | Research Intelligence",
    tags: [
      "Serving Researchers, Universities, Hospitals & Biotech Companies Worldwide",
      "Confidential | High-Precision | Publication-Ready"
    ],
    primaryCta: "Talk to Our Expert",
    secondaryCta: "Our Services",
    stats: [
      { value: "500+", label: "Genomic Projects" },
      { value: "100+", label: "Research Institutions" },
      { value: "50+", label: "Countries Served" },
      { value: "100%", label: "Confidential" },
    ],
  };

  const services = [
    {
      title: "Genomic & NGS Data Analysis",
      description: "We provide comprehensive next-generation sequencing analysis services for research and clinical applications.",
      benefits: [
        "Whole Genome & Whole Exome Sequencing",
        "RNA-Seq & Transcriptomics",
        "Variant Calling & Functional Annotation",
        "Differential Gene Expression",
        "Pathway & Enrichment Analysis"
      ]
    },
    {
      title: "Clinical & Biostatistical Modeling",
      description: "Advanced statistical analysis for clinical research and epidemiological studies with publication-ready outputs.",
      benefits: [
        "Survival Analysis (Kaplan–Meier, Cox Regression)",
        "Multivariate & Logistic Regression",
        "Predictive Risk Modeling",
        "Clinical Trial & Epidemiological Data Analysis"
      ]
    },
    {
      title: "Microbiome & Metagenomics",
      description: "Comprehensive microbial community analysis for research and commercial applications.",
      benefits: [
        "16S / 18S rRNA Analysis",
        "Shotgun Metagenomics",
        "Diversity & Functional Profiling",
        "Taxonomic & Functional Interpretation"
      ]
    },
    {
      title: "Research & Publication Support",
      description: "End-to-end support for thesis research and journal publication preparation.",
      benefits: [
        "Thesis Data Analysis & Validation",
        "Statistical Interpretation",
        "Publication-Ready Figures & Tables",
        "Journal Submission Guidance",
        "Defense Preparation Support"
      ]
    },
  ];

  const trainingPrograms = [
    {
      title: "Bioinformatics & Drug Designing",
      description: "Genomics, proteomics, structural bioinformatics, and computational drug discovery strategies."
    },
    {
      title: "R Programming for Biostatistics",
      description: "Statistical computing, survival analysis, regression modeling, and publication-ready data visualization."
    },
    {
      title: "Python & BioPython for Genomic Analysis",
      description: "Sequence analysis, pipeline scripting, biological data automation, and applied machine learning."
    },
    {
      title: "Next Generation Sequencing (NGS) Training",
      description: "RNA-Seq workflows, variant calling, differential gene expression, and functional pathway analysis."
    },
    {
      title: "Advanced Statistics Using R",
      description: "Multivariate modeling, hypothesis testing, predictive risk modeling, and research data interpretation."
    },
    {
      title: "Machine Learning for Biological & Clinical Data",
      description: "Supervised & unsupervised learning, predictive modeling, and genomic data applications."
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Submit Your Details",
      description: "Provide your project overview, dataset type, or research requirement.",
    },
    {
      number: 2,
      title: "Expert Evaluation",
      description: "Our senior team reviews your case and contacts you directly.",
    },
    {
      number: 3,
      title: "Structured Execution",
      description: "We design and execute a customized analytical strategy with validated documentation and clear interpretation.",
    },
  ];

  const benefits = [
    "Ph.D.-level bioinformaticians and biostatisticians",
    "Publication-ready outputs aligned with global standards",
    "Strict confidentiality with NDA support",
    "Experience with international journals and conferences",
    "Secure data handling and processing",
    "Industry-aligned training programs"
  ];

  const testimonials = [
    {
      quote: "RMC's genomic analysis expertise helped us publish in a high-impact journal. Their attention to detail and scientific rigor is exceptional.",
      author: "Dr. Swara Sharma",
      role: "Assistant Professor",
    },
    {
      quote: "The bioinformatics training program was comprehensive and practical. It gave me the skills I needed for my PhD research.",
      author: "Rahul Verma",
      role: "PhD Scholar",
    },
    {
      quote: "Professional, confidential, and scientifically sound. RMC delivered exactly what we needed for our biotech startup.",
      author: "Dr. Anjali Goyal",
      role: "Co-founder & CEO",
    },
  ];

  const whoWeWorkWith = [
    "Biotechnology & Genomics Companies",
    "Pharmaceutical & Healthcare Organizations",
    "Clinical Research Teams",
    "Universities & Research Institutions",
    "MSc, MPhil & PhD Scholars"
  ];

  const trainingFor = [
    "Postgraduate & Doctoral Scholars",
    "University Research Students",
    "Early-Career Scientists",
    "Professionals Transitioning into Bioinformatics",
    "Researchers Preparing for PhD or Industry Roles"
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />

      {/* Who We Work With Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, -50, 0],
              y: [0, 30, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-green-300 to-blue-300 rounded-full blur-3xl opacity-15"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating Icons */}
          {[
            { icon: '🧬', top: '10%', left: '15%', duration: 15, delay: 0 },
            { icon: '💊', top: '20%', right: '20%', duration: 18, delay: 2 },
            { icon: '🔬', bottom: '15%', left: '10%', duration: 20, delay: 1 },
            { icon: '🧪', top: '60%', right: '15%', duration: 16, delay: 3 },
            { icon: '🦠', top: '40%', left: '8%', duration: 22, delay: 1.5 },
            { icon: '⚗️', bottom: '25%', right: '12%', duration: 19, delay: 2.5 },
            { icon: '🩺', top: '75%', left: '25%', duration: 17, delay: 0.5 },
            { icon: '💉', top: '30%', right: '8%', duration: 21, delay: 3.5 },
            { icon: '🧫', bottom: '40%', left: '20%', duration: 18, delay: 1 },
            { icon: '📊', top: '50%', right: '25%', duration: 20, delay: 2 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-4xl opacity-20"
              style={{
                top: item.top,
                bottom: item.bottom,
                left: item.left,
                right: item.right,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full mb-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🌍
              </motion.span>
              <span className="font-bold uppercase tracking-wider text-sm">WHO WE WORK WITH</span>
            </motion.div>
            
            <motion.h2 
              className="font-display text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                We Collaborate Globally With
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              If your work depends on <span className="font-semibold text-blue-600">high-stakes biological or clinical data</span> — we provide the analytical depth and scientific structure required to move forward confidently.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whoWeWorkWith.map((item, index) => {
              const icons = ['🧬', '💊', '🔬', '🎓', '👨‍🔬'];
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-teal-500',
                'from-orange-500 to-red-500',
                'from-indigo-500 to-purple-500'
              ];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -10,
                    rotate: [0, -2, 2, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                >
                  {/* Glowing border effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradients[index]} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500`} />
                  
                  {/* Card content */}
                  <div className="relative flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 overflow-hidden">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    {/* Icon container */}
                    <motion.div 
                      className={`relative flex-shrink-0 w-14 h-14 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl">{icons[index]}</span>
                    </motion.div>
                    
                    {/* Text content */}
                    <div className="relative flex-1">
                      <span className="text-slate-800 font-bold text-base group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                        {item}
                      </span>
                    </div>

                    {/* Decorative corner element */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom decorative element */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
              <span className="font-bold text-lg">Trusted by 100+ Research Institutions Worldwide</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                ✨
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <IndustryServices
        sectionLabel="🧬 OUR CORE EXPERTISE"
        title="Advanced Bioinformatics Services"
        subtitle="We don't provide basic data processing. We deliver structured, scientifically validated outputs aligned with global research standards."
        services={services}
          darkTheme={true}
          hideLearnMore={true}
      />

      {/* Training Programs Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-cyan-50 relative overflow-hidden">
        {/* Enhanced Animated Background with Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Blobs */}
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-25"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-25"
            animate={{ 
              scale: [1, 1.4, 1],
              rotate: [360, 180, 0],
              x: [0, -50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating Training Icons */}
          {[
            { icon: '💻', top: '8%', left: '12%', duration: 16, delay: 0 },
            { icon: '📚', top: '15%', right: '18%', duration: 19, delay: 2 },
            { icon: '🧠', bottom: '12%', left: '8%', duration: 21, delay: 1 },
            { icon: '🎯', top: '55%', right: '10%', duration: 17, delay: 3 },
            { icon: '📊', top: '35%', left: '5%', duration: 23, delay: 1.5 },
            { icon: '🔬', bottom: '20%', right: '15%', duration: 20, delay: 2.5 },
            { icon: '⚡', top: '70%', left: '22%', duration: 18, delay: 0.5 },
            { icon: '🚀', top: '25%', right: '5%', duration: 22, delay: 3.5 },
            { icon: '🎓', bottom: '35%', left: '18%', duration: 19, delay: 1 },
            { icon: '💡', top: '45%', right: '22%', duration: 21, delay: 2 },
            { icon: '🧬', top: '60%', left: '30%', duration: 17, delay: 1.5 },
            { icon: '🔍', bottom: '50%', right: '28%', duration: 20, delay: 3 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-5xl opacity-15"
              style={{
                top: item.top,
                bottom: item.bottom,
                left: item.left,
                right: item.right,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full mb-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎓
              </motion.span>
              <span className="font-bold uppercase tracking-wider text-sm">ADVANCED TRAINING</span>
            </motion.div>
            
            <motion.h2 
              className="font-display text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-600 bg-clip-text text-transparent">
                Bioinformatics & Computational Biology Training
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-slate-600 text-lg max-w-3xl mx-auto mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-semibold text-blue-600">Industry-Aligned Training</span> for Future Researchers & Bioinformatics Professionals. We offer structured, hands-on training programs designed for MSc, MPhil, PhD scholars, research professionals, and early-career scientists who want applied expertise in bioinformatics, genomics, and clinical data science.
            </motion.p>
            
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-bold text-sm">Real Research Workflows — Not Just Theory</span>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trainingPrograms.map((program, index) => {
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-teal-500',
                'from-orange-500 to-red-500',
                'from-indigo-500 to-purple-500',
                'from-pink-500 to-rose-500'
              ];
              const icons = ['💻', '📊', '🐍', '🧬', '📈', '🤖'];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -20 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{ 
                    y: -15,
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                >
                  {/* Glowing border effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index]} rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition duration-500`} />
                  
                  {/* Card content */}
                  <div className="relative p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 overflow-hidden">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    <div className="relative z-10">
                      {/* Icon and Number Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="text-3xl">{icons[index]}</span>
                        </motion.div>
                        <motion.div
                          className={`w-10 h-10 bg-gradient-to-br ${gradients[index]} rounded-lg flex items-center justify-center shadow-md`}
                          whileHover={{ scale: 1.2 }}
                        >
                          <span className="text-white text-lg font-bold">{index + 1}</span>
                        </motion.div>
                      </div>
                      
                      <h3 className="font-display text-xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                        {program.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {/* Decorative corner sparkle */}
                    <motion.div
                      className="absolute top-2 right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      ✨
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-3xl p-10 max-w-5xl mx-auto shadow-2xl border-2 border-purple-200 relative overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-transparent rounded-bl-full opacity-60" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-200 to-transparent rounded-tr-full opacity-60" />
            <motion.div
              className="absolute top-4 right-4 text-4xl"
              animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🎯
            </motion.div>
            
            <div className="relative z-10">
              <motion.h3 
                className="font-display text-3xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Designed For
                </span>
              </motion.h3>
              
              <div className="grid md:grid-cols-2 gap-5 mb-8">
                {trainingFor.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group cursor-pointer"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        boxShadow: ['0 0 0 0 rgba(168, 85, 247, 0.4)', '0 0 0 10px rgba(168, 85, 247, 0)', '0 0 0 0 rgba(168, 85, 247, 0)']
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    <span className="text-slate-700 font-medium group-hover:text-purple-600 transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl text-center shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="font-semibold text-lg leading-relaxed">
                   Building analytical confidence, reproducible workflows, and industry-relevant technical skills aligned with global research standards.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <IndustryProcess />

      {/* Why RMC Section - Custom Design */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-cyan-50 relative overflow-hidden">
        {/* Animated Background with Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Blobs */}
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-25"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              x: [0, 60, 0],
              y: [0, -40, 0]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-25"
            animate={{ 
              scale: [1, 1.4, 1],
              rotate: [360, 180, 0],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-green-300 to-emerald-300 rounded-full blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.25, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating Excellence Icons */}
          {[
            { icon: '🏆', top: '10%', left: '10%', duration: 18, delay: 0 },
            { icon: '⭐', top: '18%', right: '15%', duration: 20, delay: 2 },
            { icon: '✅', bottom: '15%', left: '12%', duration: 22, delay: 1 },
            { icon: '🎯', top: '60%', right: '12%', duration: 19, delay: 3 },
            { icon: '💎', top: '40%', left: '8%', duration: 24, delay: 1.5 },
            { icon: '🔒', bottom: '25%', right: '18%', duration: 21, delay: 2.5 },
            { icon: '🌟', top: '75%', left: '25%', duration: 20, delay: 0.5 },
            { icon: '🚀', top: '30%', right: '8%', duration: 23, delay: 3.5 },
            { icon: '💪', bottom: '40%', left: '20%', duration: 19, delay: 1 },
            { icon: '🎓', top: '50%', right: '25%', duration: 22, delay: 2 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-5xl opacity-15"
              style={{
                top: item.top,
                bottom: item.bottom,
                left: item.left,
                right: item.right,
              }}
              animate={{
                y: [0, -45, 0],
                x: [0, 25, 0],
                rotate: [0, 20, -20, 0],
                scale: [1, 1.35, 1],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        <div className="container-custom relative z-10 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-cyan-500 text-white px-6 py-2 rounded-full mb-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🏆
              </motion.span>
              <span className="font-bold uppercase tracking-wider text-sm">WHY RMC</span>
            </motion.div>
            
            <motion.h2 
              className="font-display text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-600 bg-clip-text text-transparent">
                Scientific Excellence in Bioinformatics
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Partner with a team that understands the <span className="font-semibold text-blue-600">unique demands of biological and clinical data analysis</span>.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const icons = ['👨‍🔬', '📊', '🔒', '🌍', '🛡️', '🎓'];
              const gradients = [
                'from-emerald-500 to-teal-500',
                'from-cyan-500 to-blue-500',
                'from-teal-500 to-green-500',
                'from-blue-500 to-indigo-500',
                'from-green-500 to-emerald-500',
                'from-indigo-500 to-purple-500'
              ];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.05,
                    rotate: [0, -1, 1, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                >
                  {/* Glowing border effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index]} rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition duration-500`} />
                  
                  {/* Card content */}
                  <div className="relative p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 overflow-hidden min-h-[140px] flex flex-col">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Icon */}
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center shadow-lg mb-4`}
                        whileHover={{ rotate: 360, scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-3xl">{icons[index]}</span>
                      </motion.div>
                      
                      {/* Text */}
                      <p className="text-slate-700 font-semibold leading-relaxed group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-600 group-hover:to-teal-600 transition-all">
                        {benefit}
                      </p>
                    </div>

                    {/* Decorative checkmark */}
                    <motion.div
                      className="absolute top-3 right-3 text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✓
                    </motion.div>

                    {/* Corner decoration */}
                    <motion.div
                      className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-emerald-100/50 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="Trusted by Researchers Worldwide"
        testimonials={testimonials}
      />

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-cyan-50 relative overflow-hidden">
        {/* Enhanced Animated Background with Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Blobs */}
          <motion.div
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-25"
            animate={{ 
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
              x: [0, 40, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full blur-3xl opacity-25"
            animate={{ 
              y: [0, -60, 0],
              scale: [1, 1.4, 1],
              x: [0, -40, 0]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.25, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating Question Icons */}
          {[
            { icon: '❓', top: '8%', left: '10%', duration: 17, delay: 0 },
            { icon: '💬', top: '15%', right: '12%', duration: 19, delay: 2 },
            { icon: '🤔', bottom: '12%', left: '8%', duration: 21, delay: 1 },
            { icon: '💡', top: '58%', right: '10%', duration: 18, delay: 3 },
            { icon: '📝', top: '38%', left: '6%', duration: 23, delay: 1.5 },
            { icon: '✨', bottom: '22%', right: '15%', duration: 20, delay: 2.5 },
            { icon: '🎯', top: '72%', left: '22%', duration: 19, delay: 0.5 },
            { icon: '🔍', top: '28%', right: '6%', duration: 22, delay: 3.5 },
            { icon: '📌', bottom: '38%', left: '18%', duration: 18, delay: 1 },
            { icon: '💭', top: '48%', right: '23%', duration: 21, delay: 2 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-5xl opacity-15"
              style={{
                top: item.top,
                bottom: item.bottom,
                left: item.left,
                right: item.right,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        <div className="container-custom max-w-5xl relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-cyan-500 text-white px-6 py-2 rounded-full mb-6 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="text-2xl"
                animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ❓
              </motion.span>
              <span className="font-bold uppercase tracking-wider text-sm">FREQUENTLY ASKED QUESTIONS</span>
            </motion.div>
            
            <motion.h2 
              className="font-display text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-600 bg-clip-text text-transparent">
                Common Questions About Our Services
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Find answers to the most <span className="font-semibold text-blue-600">commonly asked questions</span> about our bioinformatics services.
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What bioinformatics services do you provide?",
                a: "We provide advanced bioinformatics services including NGS data analysis, RNA-Seq analysis, variant annotation, microbiome analysis, clinical data modeling, and biostatistics consulting for research and industry applications.",
                icon: '🧬'
              },
              {
                q: "Do you offer RNA-Seq and whole genome sequencing (WGS) analysis?",
                a: "Yes. We perform structured RNA-Seq, WGS, and WES data analysis including quality control, differential expression, variant identification, and functional pathway analysis — formatted for publication and research reporting.",
                icon: '🔬'
              },
              {
                q: "Can you help with statistical analysis for clinical or thesis research?",
                a: "Yes. We provide survival analysis, regression modeling, predictive modeling, and complete statistical validation for clinical studies and postgraduate research.",
                icon: '📊'
              },
              {
                q: "Do you work with biotech and pharmaceutical companies?",
                a: "Yes. We support biotech startups, pharmaceutical R&D teams, hospitals, and research laboratories requiring secure and scalable bioinformatics expertise.",
                icon: '🏢'
              },
              {
                q: "Do you sign NDAs for confidential projects?",
                a: "Yes. All industry collaborations are handled under strict confidentiality agreements with secure data workflows.",
                icon: '🔒'
              },
              {
                q: "Do you provide microbiome and metagenomics analysis?",
                a: "Yes. We offer 16S rRNA analysis, shotgun metagenomics, diversity profiling, and functional microbial interpretation for both research and commercial applications.",
                icon: '🦠'
              },
              {
                q: "Can you help prepare results for journal submission?",
                a: "Yes. We provide publication-ready figures, structured reports, statistical interpretation, and formatting aligned with peer-reviewed journal standards.",
                icon: '📄'
              },
              {
                q: "How long does bioinformatics analysis take?",
                a: "Timelines depend on dataset complexity and scope. Most structured projects range between 1–4 weeks after evaluation.",
                icon: '⏱️'
              },
              {
                q: "Do you work with international clients?",
                a: "Yes. We collaborate globally across time zones through secure remote communication and data management systems.",
                icon: '🌍'
              },
              {
                q: "How do I get started?",
                a: "Submit your details through the form on this page. Our expert team will review your requirement and contact you directly.",
                icon: '🚀'
              }
            ].map((faq, index) => {
              const gradients = [ ];
              
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, x: -40, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05, type: "spring" }}
                >
                  {/* Glowing border on hover */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradients[index]} rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500`} />
                  
                  <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-blue-100 overflow-hidden">
                    <motion.div
                      onClick={() => {
                        const answer = document.getElementById(`faq-answer-${index}`);
                        const icon = document.getElementById(`faq-icon-${index}`);
                        const card = document.getElementById(`faq-card-${index}`);
                        if (answer && icon && card) {
                          if (answer.style.display === 'none' || !answer.style.display) {
                            answer.style.display = 'block';
                            icon.style.transform = 'rotate(180deg)';
                            card.classList.add('bg-gradient-to-r', gradients[index].split(' ')[0].replace('from-', 'from-'), gradients[index].split(' ')[1].replace('to-', 'to-'));
                          } else {
                            answer.style.display = 'none';
                            icon.style.transform = 'rotate(0deg)';
                            card.classList.remove('bg-gradient-to-r', gradients[index].split(' ')[0].replace('from-', 'from-'), gradients[index].split(' ')[1].replace('to-', 'to-'));
                          }
                        }
                      }}
                      className="flex items-center justify-between p-6 cursor-pointer"
                      whileHover={{ x: 5 }}
                      id={`faq-card-${index}`}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        {/* Icon Badge */}
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="text-2xl">{faq.icon}</span>
                        </motion.div>
                        
                        {/* Question */}
                        <h3 className="font-display text-base md:text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {index + 1}. {faq.q}
                        </h3>
                      </div>
                      
                      {/* Arrow Icon */}
                      <motion.div
                        id={`faq-icon-${index}`}
                        className="text-blue-500 text-2xl flex-shrink-0 ml-4 transition-transform duration-300"
                        whileHover={{ scale: 1.3 }}
                      >
                        ▼
                      </motion.div>
                    </motion.div>
                    
                    {/* Answer */}
                    <motion.div
                      id={`faq-answer-${index}`}
                      style={{ display: 'none' }}
                      className="px-6 pb-6"
                    >
                      <div className="pl-16 pr-4">
                        <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
                          <p className="text-slate-700 leading-relaxed m-0">{faq.a}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      <IndustryCTA
        title="Ready to Transform Your Biological Data?"
        subtitle="Partner with us for bioinformatics analysis that meets the highest scientific standards."
      />
    </Layout>
  );
};

export default BiosciencesPage;

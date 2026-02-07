import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp, Heart, Award, Coffee, BookOpen, Target } from "lucide-react";

const CareerPage = () => {
  const openPositions = [
    // Currently no open positions - will be updated when available
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Culture",
      description: "Work with a diverse team of researchers, writers, and academics from around the world.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Opportunities",
      description: "Continuous learning and professional development in research methodologies and academic practices.",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours to maintain work-life balance.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Meaningful Impact",
      description: "Help students and researchers achieve their academic and professional goals.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Competitive Compensation",
      description: "Fair pay, performance bonuses, and recognition for exceptional work.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning Resources",
      description: "Access to journals, research tools, and training programs to enhance your expertise.",
    },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "We maintain the highest standards in research quality and academic integrity.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "We believe in teamwork and knowledge sharing to achieve better outcomes.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Empathy",
      description: "We understand the challenges researchers face and provide compassionate support.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Innovation",
      description: "We continuously improve our methods and embrace new research technologies.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-gray-900"
            animate={{
              background: [
                'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
            >
              <Briefcase className="w-4 h-4 text-white" />
              <span className="text-sm text-white/90">Join Our Team</span>
            </motion.div>

            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Build Your Career in
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Research & Academic Excellence
              </span>
            </h1>

            <p className="text-slate-300 text-lg mb-8">
              Join a team dedicated to advancing research quality and supporting academic success worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              Why RMC
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're building a culture where talented professionals can thrive and make a real difference in the academic world.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              Our Values
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-400 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              Career Opportunities
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're always looking for talented researchers, writers, and academic professionals to join our mission.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {openPositions.length > 0 ? (
              <div className="space-y-6">
                {openPositions.map((position, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border-2 border-blue-100 rounded-xl p-8 hover:border-blue-400 hover:shadow-xl transition-all"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                            {position.department}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                            {position.location}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <a
                        href="https://wa.me/918719070455?text=I'm%20interested%20in%20the%20position:%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all whitespace-nowrap"
                      >
                        Apply Now
                      </a>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {position.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-6">
                  <Briefcase className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
                  No Open Positions at the Moment
                </h3>
                <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                  We don't have any specific openings right now, but we're always interested in connecting with talented professionals who share our passion for research excellence.
                </p>
                <p className="text-slate-600 mb-8">
                  If you're a researcher, academic writer, data analyst, or subject matter expert looking to make an impact in the academic world, we'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/918719070455?text=I'm%20interested%20in%20career%20opportunities%20at%20RMC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg"
                  >
                    <Briefcase className="w-5 h-5" />
                    Express Your Interest
                  </a>
                  <a
                    href="mailto:Hello@rmcdr.com"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 transition-all"
                  >
                    Send Your Resume
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's explore opportunities together.
            </p>
            <a
              href="https://wa.me/918719070455?text=I'm%20interested%20in%20career%20opportunities%20at%20RMC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerPage;

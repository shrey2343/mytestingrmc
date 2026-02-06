import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight, TrendingUp, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const featuredPost = {
    title: "The Complete Guide to Publishing Your First Research Paper",
    excerpt: "A step-by-step guide for researchers looking to publish their work in peer-reviewed journals. Learn about journal selection, manuscript preparation, and the submission process.",
    category: "Research Tips",
    date: "February 5, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop",
    slug: "/blog/publishing-research-paper",
  };

  const blogPosts = [
    {
      title: "How to Choose the Right Research Methodology for Your Study",
      excerpt: "Understanding the differences between quantitative, qualitative, and mixed-methods approaches to select the best fit for your research questions.",
      category: "Methodology",
      date: "February 3, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      slug: "/blog/research-methodology",
    },
    {
      title: "Common Mistakes in Literature Review and How to Avoid Them",
      excerpt: "Learn about the most frequent errors researchers make when conducting literature reviews and practical strategies to overcome them.",
      category: "Academic Writing",
      date: "January 30, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
      slug: "/blog/publishing-research-paper",
    },
    {
      title: "Statistical Analysis Made Simple: A Beginner's Guide",
      excerpt: "Demystifying statistical concepts and tools like SPSS, R, and Python for researchers new to data analysis.",
      category: "Data Analysis",
      date: "January 28, 2026",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      slug: "/blog/research-methodology",
    },
    {
      title: "Mastering Your PhD Thesis: Timeline and Milestones",
      excerpt: "A comprehensive roadmap for PhD candidates to plan, execute, and complete their dissertation successfully.",
      category: "PhD Journey",
      date: "January 25, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      slug: "/blog/publishing-research-paper",
    },
    {
      title: "Understanding Plagiarism: What Every Researcher Should Know",
      excerpt: "A detailed look at plagiarism types, detection methods, and best practices for maintaining academic integrity.",
      category: "Academic Ethics",
      date: "January 22, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      slug: "/blog/research-methodology",
    },
    {
      title: "How to Write a Compelling Research Proposal",
      excerpt: "Essential elements of a strong research proposal that gets approved by committees and funding agencies.",
      category: "Research Tips",
      date: "January 20, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
      slug: "/blog/publishing-research-paper",
    },
  ];

  const categories = [
    { name: "All Posts", count: 24, icon: <FileText className="w-4 h-4" /> },
    { name: "Research Tips", count: 8, icon: <TrendingUp className="w-4 h-4" /> },
    { name: "Academic Writing", count: 6, icon: <BookOpen className="w-4 h-4" /> },
    { name: "Data Analysis", count: 5, icon: <TrendingUp className="w-4 h-4" /> },
    { name: "PhD Journey", count: 5, icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
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
              <BookOpen className="w-4 h-4 text-white" />
              <span className="text-sm text-white/90">Research Insights</span>
            </motion.div>

            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Research Blog &
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Academic Resources
              </span>
            </h1>

            <p className="text-slate-300 text-lg">
              Expert insights, practical tips, and guides to help you succeed in your research journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-100 hover:border-blue-300 transition-all">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-blue-500 to-cyan-500 overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4 w-fit">
                    Featured Post
                  </span>
                  <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link
                    to={featuredPost.slug}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all w-fit"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 sticky top-24">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-6">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <motion.button
                      key={index}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-blue-100 transition-all text-left group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="flex items-center gap-2 text-slate-700 group-hover:text-blue-600 font-medium">
                        {category.icon}
                        {category.name}
                      </span>
                      <span className="text-sm text-slate-500 group-hover:text-blue-600">
                        {category.count}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden border-2 border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-400 to-cyan-400 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <Link
                        to={post.slug}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Research Insights
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Get the latest research tips, academic writing guides, and publication strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 backdrop-blur-sm"
              />
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;

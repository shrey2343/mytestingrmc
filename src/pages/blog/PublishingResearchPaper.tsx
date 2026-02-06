import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const PublishingResearchPaper = () => {
  return (
    <Layout>
      <article className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Research Tips
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Complete Guide to Publishing Your First Research Paper
            </h1>
            <div className="flex items-center gap-6 text-slate-600 mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                February 5, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
              <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            className="mb-12 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop"
              alt="Publishing Research Paper"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              Publishing your first research paper can feel overwhelming, but with the right approach and understanding of the process, you can successfully navigate the journey from manuscript to publication.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Understanding the Publication Process</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The research publication process involves several key stages: manuscript preparation, journal selection, submission, peer review, revisions, and final publication. Each stage requires careful attention and adherence to academic standards.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Step 1: Choosing the Right Journal</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Selecting an appropriate journal is crucial for your paper's success. Consider these factors:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 mb-6">
              <li><strong>Scope and Focus:</strong> Ensure your research aligns with the journal's aims and scope</li>
              <li><strong>Impact Factor:</strong> Consider the journal's reputation and citation metrics</li>
              <li><strong>Audience:</strong> Identify who will benefit most from reading your research</li>
              <li><strong>Open Access vs. Subscription:</strong> Decide based on accessibility and funding</li>
              <li><strong>Publication Timeline:</strong> Check average review and publication times</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Step 2: Preparing Your Manuscript</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              A well-structured manuscript follows this standard format:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 mb-6">
              <li><strong>Title:</strong> Clear, concise, and descriptive (10-15 words)</li>
              <li><strong>Abstract:</strong> Summarize your research in 150-250 words</li>
              <li><strong>Introduction:</strong> Establish context, research gap, and objectives</li>
              <li><strong>Methodology:</strong> Detail your research design and methods</li>
              <li><strong>Results:</strong> Present findings with tables and figures</li>
              <li><strong>Discussion:</strong> Interpret results and compare with existing literature</li>
              <li><strong>Conclusion:</strong> Summarize key findings and implications</li>
              <li><strong>References:</strong> Cite all sources following journal guidelines</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Step 3: Writing Tips for Academic Papers</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Effective academic writing requires:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 mb-6">
              <li>Clear and concise language avoiding jargon</li>
              <li>Active voice where appropriate</li>
              <li>Logical flow between sections</li>
              <li>Proper citation of all sources</li>
              <li>Adherence to journal formatting guidelines</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Step 4: The Submission Process</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              When submitting your manuscript:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 mb-6">
              <li>Create an account on the journal's submission portal</li>
              <li>Prepare a compelling cover letter</li>
              <li>Upload all required files (manuscript, figures, supplementary materials)</li>
              <li>Suggest potential reviewers if requested</li>
              <li>Double-check all information before final submission</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Step 5: Navigating Peer Review</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The peer review process typically involves:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 mb-6">
              <li><strong>Initial Screening:</strong> Editor reviews for suitability</li>
              <li><strong>Peer Review:</strong> Experts evaluate your work (2-4 weeks to 3 months)</li>
              <li><strong>Decision:</strong> Accept, minor revisions, major revisions, or reject</li>
              <li><strong>Revisions:</strong> Address reviewer comments thoroughly</li>
              <li><strong>Resubmission:</strong> Submit revised manuscript with response letter</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Step 6: Responding to Reviewer Comments</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              When revising your manuscript:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 mb-6">
              <li>Address every comment systematically</li>
              <li>Be respectful and professional in your responses</li>
              <li>Provide clear explanations for any disagreements</li>
              <li>Highlight changes in the revised manuscript</li>
              <li>Submit within the given deadline</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Common Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 mb-6">
              <li>Submitting to multiple journals simultaneously</li>
              <li>Ignoring journal guidelines and formatting requirements</li>
              <li>Poor quality figures and tables</li>
              <li>Inadequate literature review</li>
              <li>Weak methodology description</li>
              <li>Overstating conclusions beyond your data</li>
              <li>Plagiarism or self-plagiarism</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Publishing your first research paper is a significant achievement that requires patience, persistence, and attention to detail. Remember that rejection is common and often leads to improved manuscripts. Stay committed to the process, learn from feedback, and celebrate your success when your paper is finally published.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-12">
              <p className="text-slate-700 font-medium">
                <strong>Need help with your research paper?</strong> Our team of experienced researchers and academic writers can guide you through every step of the publication process.
              </p>
              <a
                href="https://wa.me/918719070455?text=I%20need%20help%20with%20research%20paper%20publication"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all"
              >
                Get Expert Assistance
              </a>
            </div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default PublishingResearchPaper;

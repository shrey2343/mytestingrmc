import Layout from "@/components/layout/Layout";

const TermsOfUsePage = () => {
  return (
    <Layout>
      <div className="bg-background py-16">
        <div className="container-custom max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Use
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">Last Updated: January 2025</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Research Mentor Clinic (RMC) website at https://rmcdr.com/, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Research Mentor Clinic's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)</li>
              <li>Attempt to decompile or reverse engineer any software contained on Research Mentor Clinic's website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">3. Services Provided</h2>
            <p>
              Research Mentor Clinic provides research assistance, academic writing support, data analysis, and related educational services. All services are provided as guidance and support for your own academic work. You are responsible for ensuring that your use of our services complies with your institution's academic integrity policies.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">4. User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information when requested</li>
              <li>Use our services in accordance with all applicable laws and regulations</li>
              <li>Not misuse or abuse our services or platform</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Take responsibility for the final submission and use of any work we assist with</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">5. Payment Terms</h2>
            <p>
              Payment for services must be made as agreed upon at the time of service engagement. We accept various payment methods through secure third-party payment processors. All fees are non-refundable unless otherwise stated in our refund policy.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              Upon full payment, you will own the rights to the work we create for you. However, we retain the right to use anonymized versions of work for training and quality improvement purposes. You may not resell or redistribute our work to third parties.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">7. Confidentiality</h2>
            <p>
              We maintain strict confidentiality of all client information and project details. We will not share your personal information or project details with any third party without your explicit consent, except as required by law.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">8. Disclaimer</h2>
            <p>
              The materials on Research Mentor Clinic's website are provided on an 'as is' basis. Research Mentor Clinic makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">9. Limitations</h2>
            <p>
              In no event shall Research Mentor Clinic or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Research Mentor Clinic's website.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">10. Revisions and Errata</h2>
            <p>
              The materials appearing on Research Mentor Clinic's website could include technical, typographical, or photographic errors. Research Mentor Clinic does not warrant that any of the materials on its website are accurate, complete or current. Research Mentor Clinic may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">11. Links</h2>
            <p>
              Research Mentor Clinic has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Research Mentor Clinic of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">12. Modifications</h2>
            <p>
              Research Mentor Clinic may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">13. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">14. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <p className="font-semibold text-foreground">
              Email: Hello@rmcdr.com<br />
              Website: https://rmcdr.com/
            </p>

            <div className="bg-secondary/20 rounded-xl p-8 mt-12">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Powered by Deepiotics OPC Pvt. Ltd.
              </h3>
              <p className="text-foreground">
                Research Mentor Clinic is operated by Deepiotics OPC Pvt. Ltd., committed to providing quality research assistance and academic support services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfUsePage;

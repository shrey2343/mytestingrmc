import Layout from "@/components/layout/Layout";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="bg-background py-16">
        <div className="container-custom max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              At Research Mentor Clinic powered by Deepiotics OPC Pvt. Ltd, accessible from https://rmcdr.com/ one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Research Mentor Clinic and how we use it.
            </p>

            <p>
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>

            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Research Mentor Clinic. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Information we collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>

            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <p>
              When you register for an Account, we may ask for your contact information, including items such as name, address, email address, and telephone number.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">How we use your information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalise, and expand our website</li>
              <li>Understand and analyse how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Log Files</h2>
            <p>
              Research Mentor Clinic follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Payment Information</h2>
            <p>
              We do not store your debit card, credit card or netbanking details. All monetary processing and transactions are done through a secure third party payment gateway provided by payment gateways like Razorpay and Stripe.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Cookies and Web Beacons</h2>
            <p>
              Like any other website, Research Mentor Clinic uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimise the users' experience by customising our web page content based on visitors' browser type and/or other information.
            </p>
            <p>
              For more general information on cookies, please Google "What Are Cookies".
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Advertising Partners Privacy Policies</h2>
            <p>
              You may consult this list to find the Privacy Policy for each of the advertising partners of Research Mentor Clinic.
            </p>
            <p>
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Research Mentor Clinic, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>
            <p>
              Note that RMC has no access to or control over these cookies that are used by third-party advertisers.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Third Party Privacy Policies</h2>
            <p>
              Research Mentor Clinic's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
            <p>
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">Children's Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p>
              Research Mentor Clinic does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>

            <div className="bg-secondary/20 rounded-xl p-8 mt-12">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Powered by Deepiotics Pvt. Ltd.
              </h3>
              <p className="text-foreground mb-4">
                Your complete DBA solution-tailored for busy working professionals to achieve Dr. with ease
              </p>
              <h4 className="font-semibold text-foreground mb-2">Services</h4>
              <ul className="space-y-1">
                <li>1:1 Mentoring</li>
                <li>End To End DBA Support</li>
                <li>Time Saver Services</li>
                <li>Research Courses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;

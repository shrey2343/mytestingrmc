import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Facebook, Youtube, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-background">
      {/* Main Footer */}
      <div className="border-b border-background/10">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo & Social */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-6">
                <img src="/rmcLogo.jpeg" alt="RMC Logo" className="h-12 w-auto" />
              </Link>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 mb-6">
                <a href="https://www.linkedin.com/company/dba-coach/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://wa.me/+918827272142" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/researchmentorclinic/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/61559129450575/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://youtube.com/@research_mentor_clinic?si=ozWUZ2ztkng78ttG" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              {/* Contact Button */}
              <a
                href="https://calendly.com/researchstrategycall/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-background/20 hover:bg-background/10 text-sm font-medium transition-colors"
              >
                <Zap className="w-4 h-4" />
                Contact us
              </a>

              {/* Email */}
              <a
                href="mailto:Hello@rmcdr.com"
                className="text-background/70 hover:text-white text-sm transition-colors mt-4 block"
              >
                Hello@rmcdr.com
              </a>
            </div>

            {/* Industries */}
            <div>
              <h3 className="font-semibold text-white mb-4">Industries</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/startups-enterprises" className="text-background/70 hover:text-white text-sm transition-colors">
                    Startups & Enterprises
                  </Link>
                </li>
                <li>
                  <Link to="/healthcare-life-sciences" className="text-background/70 hover:text-white text-sm transition-colors">
                    Healthcare & Life Sciences
                  </Link>
                </li>
                <li>
                  <Link to="/medcom-research-agencies" className="text-background/70 hover:text-white text-sm transition-colors">
                    MedCom & Research Agencies
                  </Link>
                </li>
                <li>
                  <Link to="/research-for-everyone" className="text-background/70 hover:text-white text-sm transition-colors">
                    Research for Everyone
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/research-paper-publication" className="text-background/70 hover:text-white text-sm transition-colors">
                    Research Paper Publication
                  </Link>
                </li>
                <li>
                  <Link to="/phd-assistance" className="text-background/70 hover:text-white text-sm transition-colors">
                    Ph. D. Assistance
                  </Link>
                </li>
                <li>
                  <Link to="/masters-research-assistance" className="text-background/70 hover:text-white text-sm transition-colors">
                    Master's Research Assistance
                  </Link>
                </li>
                <li>
                  <Link to="/data-analysis" className="text-background/70 hover:text-white text-sm transition-colors">
                    Data Analysis
                  </Link>
                </li>
                <li>
                  <Link to="/essay-writing" className="text-background/70 hover:text-white text-sm transition-colors">
                    Essay Writing
                  </Link>
                </li>
                <li>
                  <Link to="/editing" className="text-background/70 hover:text-white text-sm transition-colors">
                    Editing
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="font-semibold text-white mb-4">About Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="#" className="text-background/70 hover:text-white text-sm transition-colors">
                    About RMC
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-background/70 hover:text-white text-sm transition-colors">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-background/70 hover:text-white text-sm transition-colors">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-background/70 hover:text-white text-sm transition-colors">
                    Policies
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-background/70 hover:text-white text-sm transition-colors">
                    Media Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Careers */}
            <div>
              <h3 className="font-semibold text-white mb-4">Careers</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="#" className="text-background/70 hover:text-white text-sm transition-colors">
                    Employer Brand Promise
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-background/70 hover:text-white text-sm transition-colors">
                    Life at RMC
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-background/70 hover:text-white text-sm transition-colors">
                    Open Positions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © 2025 Research Mentor Clinic •
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link to="/privacy-policy" className="text-background/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-background/50 hover:text-white text-sm transition-colors">
              Terms Of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

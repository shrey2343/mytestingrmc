import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  { name: "Startups & Enterprises", href: "/startups-enterprises" },
  { name: "Healthcare & Life Sciences", href: "/healthcare-life-sciences" },
  { name: "MedCom & Research Agencies", href: "/medcom-research-agencies" },
  { name: "Research for Everyone", href: "/research-for-everyone" },
];

const solutions = [
  { name: "Research Paper Publication", href: "/research-paper-publication" },
  { name: "Ph. D. Assistance", href: "/phd-assistance" },
  { name: "Master's Research Assistance", href: "/masters-research-assistance" },
  { name: "Data Analysis", href: "/data-analysis" },
  { name: "Essay Writing", href: "/essay-writing" },
  { name: "Editing", href: "/editing" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-foreground/10">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/rmcLogo.jpeg" alt="RMC Logo" className="h-16 md:h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative">
            <button 
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="flex items-center gap-1 text-foreground/90 hover:text-foreground transition-colors text-sm font-medium"
            >
              Industries
              <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {industriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-background rounded-xl shadow-xl overflow-hidden z-50"
                >
                  {industries.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIndustriesOpen(false)}
                      className="block px-4 py-3 text-foreground hover:bg-secondary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative">
            <button 
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center gap-1 text-foreground/90 hover:text-foreground transition-colors text-sm font-medium"
            >
              Solutions
              <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-background rounded-xl shadow-xl overflow-hidden z-50"
                >
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-4 py-3 text-foreground hover:bg-secondary transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link 
            to="#" 
            className="text-foreground/90 hover:text-foreground transition-colors text-sm font-medium"
          >
            Career
          </Link>
          <Link 
            to="#" 
            className="text-foreground/90 hover:text-foreground transition-colors text-sm font-medium"
          >
            Blog
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a 
            href="https://calendly.com/researchstrategycall/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium transition-all"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Button & CTA */}
        <div className="lg:hidden flex items-center gap-3">
          <a 
            href="https://calendly.com/researchstrategycall/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-xs font-medium transition-all"
          >
            Book a Call
          </a>
          <button
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-foreground/10"
          >
            <div className="container-custom py-4 space-y-4">
              <div className="space-y-2">
                <p className="text-foreground/60 text-xs uppercase tracking-wider">Industries</p>
                {industries.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2 pt-4 border-t border-foreground/10">
                <p className="text-foreground/60 text-xs uppercase tracking-wider">Solutions</p>
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2 pt-4 border-t border-foreground/10">
                <Link
                  to="#"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Career
                </Link>
                <Link
                  to="#"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
              <div className="pt-4 border-t border-foreground/10">
                <a 
                  href="https://calendly.com/researchstrategycall/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <Zap className="w-4 h-4" />
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

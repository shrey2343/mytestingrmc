import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  { name: "Research for Everyone", href: "/research-for-everyone" },
  { name: "Startups & Enterprises", href: "/startups-enterprises" },
  { name: "Healthcare & Life Sciences", href: "/healthcare-life-sciences" },
  { name: "MedCom & Research Agencies", href: "/medcom-research-agencies" },
];

const solutions = [
  { name: "Global Admission Standout", href: "/global-admission-standout" },
  { name: "Master's Research Assistance", href: "/masters-research-assistance" },
  { name: "Research Paper Publication", href: "/research-paper-publication" },
  { name: "Ph. D. Assistance", href: "/phd-assistance" },
  { name: "Data Analysis", href: "/data-analysis" },
  { name: "Essay Writing", href: "/essay-writing" },
  { name: "Editing", href: "/editing" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  const isActive = (path: string) => location.pathname === path;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
        setSolutionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-charcoal/10">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/rmcLogo.jpeg" alt="RMC Logo" className="h-16 md:h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative">
            <button 
              onClick={() => {
                setIndustriesOpen(!industriesOpen);
                setSolutionsOpen(false);
              }}
              className="flex items-center gap-1 text-charcoal/90 hover:text-charcoal transition-colors text-sm font-medium"
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
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl overflow-hidden z-50"
                >
                  {industries.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIndustriesOpen(false)}
                      className="block px-4 py-3 text-charcoal hover:bg-section-light transition-colors text-sm"
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
              onClick={() => {
                setSolutionsOpen(!solutionsOpen);
                setIndustriesOpen(false);
              }}
              className="flex items-center gap-1 text-charcoal/90 hover:text-charcoal transition-colors text-sm font-medium"
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
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl overflow-hidden z-50"
                >
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setSolutionsOpen(false)}
                      className="block px-4 py-3 text-charcoal hover:bg-section-light transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link 
            to="/career" 
            className="text-charcoal/90 hover:text-charcoal transition-colors text-sm font-medium"
          >
            Career
          </Link>
          <Link 
            to="/blog" 
            className="text-charcoal/90 hover:text-charcoal transition-colors text-sm font-medium"
          >
            Blog
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:+918719070455"
            className="inline-flex items-center gap-2 text-charcoal hover:text-green-600 transition-colors font-semibold"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">+91 8719070455</span>
          </a>
          <a 
            href="https://wa.me/918719070455"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-green-500/50 text-sm md:text-base"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Now
          </a>
        </div>

        {/* Mobile Menu Button & CTA */}
        <div className="lg:hidden flex items-center gap-3">
          <a 
            href="tel:+918719070455"
            className="inline-flex items-center justify-center p-2.5 rounded-lg border-2 border-blue-500 text-blue-600 hover:bg-blue-50 transition-all"
            title="Call Now"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a 
            href="https://wa.me/918719070455"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-green-500/50 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <button
            className="text-charcoal p-2"
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
            className="lg:hidden bg-white border-t border-charcoal/10"
          >
            <div className="container-custom py-4 space-y-4">
              <div className="space-y-2">
                <button 
                  onClick={() => {
                    setMobileIndustriesOpen(!mobileIndustriesOpen);
                    setMobileSolutionsOpen(false);
                  }}
                  className="flex items-center justify-between w-full py-2 text-charcoal/60 text-xs uppercase tracking-wider"
                >
                  Industries
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      {industries.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block py-2 pl-4 text-charcoal hover:text-linkedin transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="space-y-2 pt-4 border-t border-charcoal/10">
                <button 
                  onClick={() => {
                    setMobileSolutionsOpen(!mobileSolutionsOpen);
                    setMobileIndustriesOpen(false);
                  }}
                  className="flex items-center justify-between w-full py-2 text-charcoal/60 text-xs uppercase tracking-wider"
                >
                  Solutions
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileSolutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      {solutions.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block py-2 pl-4 text-charcoal hover:text-linkedin transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="space-y-2 pt-4 border-t border-charcoal/10">
                <Link
                  to="/career"
                  className="block py-2 text-charcoal hover:text-linkedin transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Career
                </Link>
                <Link
                  to="/blog"
                  className="block py-2 text-charcoal hover:text-linkedin transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
              <div className="pt-4 border-t border-charcoal/10 space-y-3">
                <a 
                  href="tel:+918719070455"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 border-green-500 text-green-600 hover:bg-green-50 transition-all text-sm md:text-base w-full"
                >
                  <Phone className="w-5 h-5" />
                  +91 8719070455
                </a>
                <a 
                  href="https://wa.me/918719070455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-green-500/50 text-sm md:text-base w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
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

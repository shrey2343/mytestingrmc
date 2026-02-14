import { useState } from "react";
import { motion } from "framer-motion";
import { Send,CheckCircle2,MessageCircle  } from "lucide-react";
import QuoteFormModal from "../QuoteFormModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    otherService: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateName = (name: string) => {
    if (!name.trim()) return ""; // Don't validate empty field
    
    // Check if name contains numbers
    if (/\d/.test(name)) {
      return "Name cannot contain numbers";
    }
    
    // Count only alphabetic characters
    const alphabets = name.replace(/[^a-zA-Z]/g, "");
    if (alphabets.length < 2) {
      return "Name must contain at least 2 alphabets";
    }
    
    return "";
  };

  const validateEmail = (email: string) => {
    const emailLower = email.toLowerCase();
    if (email !== emailLower) {
      return "Email must be in lowercase";
    }
    if (!email.includes("@")) {
      return "Email must contain @";
    }
    if (!email.includes(".")) {
      return "Email must contain a dot (.)";
    }
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (phone: string) => {
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      return "Phone number must be exactly 10 digits";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.phone);

    if (nameError || emailError || phoneError) {
      setErrors({
        name: nameError,
        email: emailError,
        phone: phoneError,
      });
      return;
    }

    // Clear errors
    setErrors({ name: "", email: "", phone: "" });
    setIsSubmitting(true);
    
    try {
      // Determine which service to send
      const serviceToSend = formData.service === "Other (Please specify)" 
        ? `Other: ${formData.otherService}` 
        : formData.service;
      
      // Prepare data for webhook
      const data = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: serviceToSend,
        
      };

      // Send to webhook
     await fetch("https://script.google.com/macros/s/AKfycbx7mq9gj63h7z6Jm6EBmOXuSCn4UXRXyOG6iVMdvsIdWMm6D9n-O9c4wNK-CMLY5yq0rg/exec", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});


      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", service: "", otherService: "" });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // For phone field, only allow numbers
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData({
        ...formData,
        [name]: numericValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Clear error for the field being edited
    if (name === "name" || name === "email" || name === "phone") {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let error = "";
    if (name === "name") {
      error = validateName(value);
    } else if (name === "email") {
      error = validateEmail(value);
    } else if (name === "phone") {
      error = validatePhone(value);
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };
  return (
    <section 
      className="relative min-h-[400px] lg:min-h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950"
    >
      {/* Main Background with Subtle Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-gray-900"
          animate={{
            background: [
              'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
              'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)',
              'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating Geometric Shapes - Mobile adjustments */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 border border-white/5 rounded-3xl"
          animate={{
            rotate: 360,
            borderRadius: ["30%", "40%", "30%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 border border-blue-500/10 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />

        {/* Interactive Particle System - Reduced on mobile */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        {/* Sophisticated Grid Pattern with Animation - Mobile adjustments */}
        <motion.div
          className="absolute inset-0 opacity-20 md:opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '30px 30px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Dynamic Gradient Orbs - Mobile adjustments */}
        <motion.div
          className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl lg:blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 75, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '5%', left: '5%' }}
        />

        <motion.div
          className="absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-emerald-500/8 to-cyan-500/8 rounded-full blur-xl lg:blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', right: '5%' }}
        />

        {/* Animated Light Beams - Mobile adjustments */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            y: [0, 200, 400],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-0 left-1/4 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            y: [0, 200, 400],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 2,
          }}
        />

        {/* Glass Morphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30" />

        {/* Subtle Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.015] md:opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-20 w-full py-8 md:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div 
          className="flex-1 text-background max-w-full lg:max-w-[650px] px-4 md:px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <motion.h1 
            className="font-display font-bold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[52px] leading-[1.15] mb-4 md:mb-6 text-white text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Research, Experimentation<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Scientific Publication Partner
            </span>
          </motion.h1>
          
          <motion.p 
            className="font-body text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 mb-6 md:mb-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
           Partnering with global researchers, healthcare innovators, startups, universities, and bioscience organizations to design studies, analyze data, and publish impactful research.
          </motion.p>

          {/* Feature Cards */}
          <motion.div 
            className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 md:mb-10 max-w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Faster Turnaround Time</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">Get results in half the usual time.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Free Sample Available</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">Check our quality before you commit.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Cost Efficient Pricing</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">Premium service without premium cost.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Complete Data Confidentiality</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">Your work stays 100% secure.</p>
            </motion.div>
          </motion.div>
          
          
        </motion.div>

        {/* Right Content - Quote Form */}
        <motion.div
          className="flex-1 w-full max-w-[500px] px-4 md:px-0 relative z-20"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          id="quote-form"
        >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-8 shadow-2xl">
              <div className="mb-5 md:mb-6">
                <div className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-blue-500 text-white text-xs font-bold mb-2 md:mb-3">
                  20% OFF
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Get Instant Quote</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                {/* Success Message */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg shadow-lg flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">Thank You for Submitting!</h4>
                      <p className="text-sm text-white/90">We've received your request and will get back to you shortly.</p>
                    </div>
                  </motion.div>
                )}

                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Full Name *"
                    required
                    className={`w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/90 backdrop-blur-sm border ${
                      errors.name ? 'border-red-500' : 'border-white/30'
                    } text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.name ? 'focus:ring-red-400' : 'focus:ring-cyan-400'
                    } transition-all text-sm md:text-base`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email *"
                    required
                    className={`w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/90 backdrop-blur-sm border ${
                      errors.email ? 'border-red-500' : 'border-white/30'
                    } text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.email ? 'focus:ring-red-400' : 'focus:ring-cyan-400'
                    } transition-all text-sm md:text-base`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyPress={(e) => {
                      // Only allow numbers
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    placeholder="Phone *"
                    required
                    maxLength={10}
                    className={`w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/90 backdrop-blur-sm border ${
                      errors.phone ? 'border-red-500' : 'border-white/30'
                    } text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.phone ? 'focus:ring-red-400' : 'focus:ring-cyan-400'
                    } transition-all text-sm md:text-base`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-white/30 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm md:text-base"
                  >
                    <option value="" disabled hidden>Select Service *</option>
                    <option value="Data Analysis Support">Data Analysis Support</option>
                    <option value="Research Methodology Guidance">Research Methodology Guidance</option>
                    <option value="Dissertation / Thesis Support">Dissertation / Thesis Support</option>
                    <option value="Research Paper Writing & Publication">Research Paper Writing & Publication</option>
                    <option value="Research Training Programs">Research Training Programs</option>
                    <option value="Study Abroad Research Publication Support">Study Abroad Research Publication Support</option>
                    <option value="Institutional / University Partnership">Institutional / University Partnership</option>
                    <option value="Business / Corporate Collaboration">Business / Corporate Collaboration</option>
                    <option value="Other (Please specify)">Other (Please specify)</option>
                  </select>
                </div>

                {/* Conditional "Other Service" input field */}
                {formData.service === "Other (Please specify)" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="text"
                      name="otherService"
                      value={formData.otherService}
                      onChange={handleChange}
                      placeholder="Please specify your service *"
                      required
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-white/30 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm md:text-base"
                    />
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-5 md:px-6 py-3 md:py-3.5 rounded-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 md:w-5 md:h-5" />
                      Get A Callback
                    </>
                  )}
                </motion.button>
              </form>
            </div>
        </motion.div>
      </div>
      
      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L60,186.7C120,213,240,267,360,277.3C480,288,600,256,720,234.7C840,213,960,203,1080,208C1200,213,1320,235,1380,245.3L1440,256L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Quote Form Modal */}
      <QuoteFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send, CheckCircle2 } from "lucide-react";

const ExpertPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
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

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('expertPopupShown');
    
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('expertPopupShown', 'true');
      }, 8000); // 8 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const validateName = (name: string) => {
    if (!name.trim()) return "";
    if (/\d/.test(name)) {
      return "Name cannot contain numbers";
    }
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

    setErrors({ name: "", email: "", phone: "" });
    setIsSubmitting(true);
    
    try {
      const serviceToSend = formData.service === "Other (Please specify)" 
        ? `Other: ${formData.otherService}` 
        : formData.service;
      
      const data = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: serviceToSend,
        date: new Date().toLocaleString()
      };

      await fetch("https://script.google.com/macros/s/AKfycbx7mq9gj63h7z6Jm6EBmOXuSCn4UXRXyOG6iVMdvsIdWMm6D9n-O9c4wNK-CMLY5yq0rg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", service: "", otherService: "" });

      setTimeout(() => {
        setShowSuccess(false);
        setIsOpen(false);
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
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

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={closePopup}
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[500px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-4"
                >
                  <MessageCircle className="w-8 h-8 text-white" />
                </motion.div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Need Expert Guidance?
                </h2>
                <p className="text-slate-300 text-sm md:text-base">
                  Get a free consultation with our research experts. Fill out the form below and we'll get back to you within 24 hours!
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Success Message */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg shadow-lg flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Thank You!</h4>
                      <p className="text-sm">We'll contact you shortly.</p>
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
                    className={`w-full px-4 py-3 rounded-lg bg-white/90 border ${
                      errors.name ? 'border-red-500' : 'border-white/30'
                    } text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.name ? 'focus:ring-red-400' : 'focus:ring-cyan-400'
                    } transition-all`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
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
                    className={`w-full px-4 py-3 rounded-lg bg-white/90 border ${
                      errors.email ? 'border-red-500' : 'border-white/30'
                    } text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.email ? 'focus:ring-red-400' : 'focus:ring-cyan-400'
                    } transition-all`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
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
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    placeholder="Phone *"
                    required
                    maxLength={10}
                    className={`w-full px-4 py-3 rounded-lg bg-white/90 border ${
                      errors.phone ? 'border-red-500' : 'border-white/30'
                    } text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.phone ? 'focus:ring-red-400' : 'focus:ring-cyan-400'
                    } transition-all`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/30 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
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

                {formData.service === "Other (Please specify)" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <input
                      type="text"
                      name="otherService"
                      value={formData.otherService}
                      onChange={handleChange}
                      placeholder="Please specify your service *"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/30 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    />
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 rounded-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Talk to Our Experts
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExpertPopup;

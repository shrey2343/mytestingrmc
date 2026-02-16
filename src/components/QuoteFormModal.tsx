import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteFormModal = ({ isOpen, onClose }: QuoteFormModalProps) => {
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
        date: new Date().toLocaleString('en-US', { 
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      };

      // Send to webhook
     await fetch("https://script.google.com/macros/s/AKfycbwvr37wOGBpVt354OEDTI5GQwOK3WvNCqoVhLcAm3X4fTXWuUu0w4mARRfucyjaoD_GuQ/exec", {
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

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Form Content */}
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500 text-white text-xs font-bold mb-3">
                    20% OFF
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Get Instant Quote</h3>
                  <p className="text-slate-400 text-sm">Fill out the form and we'll get back to you shortly</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-lg shadow-lg flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base">Thank You for Submitting!</h4>
                        <p className="text-sm text-white/90">We'll get back to you shortly.</p>
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
                      className={`w-full px-4 py-3 rounded-lg bg-white/90 border ${
                        errors.email ? 'border-red-500' : 'border-white/30'
                      } text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 ${
                        errors.email ? 'focus:ring-red-400' : 'focus:ring-cyan-400'
                      } transition-all`}
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
                      <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>
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
                      transition={{ duration: 0.3 }}
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
                    className="w-full px-6 py-3.5 rounded-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                        Get a Callback
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default QuoteFormModal;

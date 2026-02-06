import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, Send } from "lucide-react";

interface IndustryHeroProps {
  badge: string;
  badgeIcon?: ReactNode;
  titleWhite: string;
  titleRed: string;
  subtitle?: string;
  bulletPoints?: string[];
  tags: string[];
  primaryCta: string;
  primaryCtaLink?: string;
  secondaryCta: string;
  stats?: { value: string; label: string }[];
  showQuoteForm?: boolean;
  whatsappNumber?: string;
}

const IndustryHero = ({
  badge,
  badgeIcon,
  titleWhite,
  titleRed,
  subtitle,
  bulletPoints,
  tags,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  stats,
  showQuoteForm = false,
  whatsappNumber = "+918719070455",
}: IndustryHeroProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Quote Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}`;
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Reset form
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative min-h-[700px] lg:min-h-[650px] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
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
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/5 rounded-3xl"
          animate={{ rotate: 360, borderRadius: ["30%", "40%", "30%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-blue-500/10 rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 75, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '5%', left: '5%' }}
        />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
          animate={{ backgroundPosition: ['0px 0px', '30px 30px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30" />
      </div>

      <div className="container-custom relative z-10 w-full py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <motion.div
          className="flex-1 text-white max-w-[650px]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            {badgeIcon}
            <span className="text-sm text-white/90">{badge}</span>
          </motion.div>

          <h1 className="font-display font-bold text-[36px] md:text-[48px] leading-[1.1] mb-6">
            {titleWhite}
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">{titleRed}</span>
          </h1>

          {subtitle && (
            <p className="font-body text-base md:text-lg leading-relaxed text-slate-300 mb-8">
              {subtitle}
            </p>
          )}

          {bulletPoints && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-200 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3 mb-10">
            {tags.map((tag, index) => (
              <motion.span 
                key={index} 
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href={primaryCtaLink || "https://calendly.com/researchstrategycall/30min"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-green-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              {primaryCta}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full max-w-[500px]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {showQuoteForm ? (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-green-500 text-white text-xs font-bold mb-3">
                  50% OFF
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Get Instant Quote</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-white/30 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-white/30 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone *"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-white/30 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3.5 rounded-lg font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-green-500/50 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Get A Free Quote
                </motion.button>
              </form>
            </div>
          ) : (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {stats?.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <span className="block text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2">{stat.value}</span>
                    <span className="block text-sm text-slate-300">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryHero;
